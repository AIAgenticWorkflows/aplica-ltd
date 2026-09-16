import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please add a few more details").max(2000),
});

export async function sendNotificationEmail(payload: {
  name: string;
  email: string;
  company?: string | undefined;
  message: string;
}): Promise<{ sent: boolean; reason?: string }> {
  const resendApiKey = process.env['RESEND_API_KEY'];
  const recipientEmail = process.env['NOTIFICATION_EMAIL'] || "info@aplica.biz";
  const fromEmail =
    process.env['RESEND_FROM_EMAIL'] || "Aplica Website Contact <onboarding@resend.dev>";

  const subject = `New Contact Form Submission from ${payload.name}`;
  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Company:</strong> ${payload.company || "N/A"}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${payload.message}</p>
  `;
  const textContent = `New Contact Form Submission\n\nName: ${payload.name}\nEmail: ${payload.email}\nCompany: ${
    payload.company || "N/A"
  }\n\nMessage:\n${payload.message}`;

  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          reply_to: payload.email,
          subject,
          html: htmlContent,
          text: textContent,
        }),
      });

      if (response.ok) {
        return { sent: true };
      } else {
        const errText = await response.text();
        console.error("Resend API call returned non-OK status:", response.status, errText);
        if (fromEmail.includes("onboarding@resend.dev")) {
          console.warn(
            "[contact.functions] Using onboarding@resend.dev with Resend restricts delivery only to your Resend account email. Verify a custom domain in Resend or set RESEND_FROM_EMAIL to send to info@aplica.biz.",
          );
        }
        return { sent: false, reason: `Resend API status ${response.status}: ${errText}` };
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("Failed to send notification email via Resend API:", err);
      return { sent: false, reason: msg };
    }
  }

  const warnMsg =
    "[contact.functions] RESEND_API_KEY environment variable is not configured. Notification email was not sent.";
  console.warn(warnMsg);
  return {
    sent: false,
    reason: "RESEND_API_KEY environment variable is not configured.",
  };
}

export const submitContactMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    let dbSaved = false;
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      const { error } = await supabaseAdmin
        .from("contact_messages")
        .insert({
          name: data.name,
          email: data.email,
          company: data.company || null,
          message: data.message,
        })
        .select("id")
        .single();

      if (error) {
        console.error("contact insert failed:", error);
      } else {
        dbSaved = true;
      }
    } catch (err) {
      console.error("Supabase storage omitted or failed:", err);
    }

    const emailResult = await sendNotificationEmail({
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
    });

    return {
      ok: true as const,
      dbSaved,
      emailSent: emailResult.sent,
      emailReason: emailResult.reason,
    };
  });
