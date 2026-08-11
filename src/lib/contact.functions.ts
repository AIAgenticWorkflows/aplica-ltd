import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please add a few more details").max(2000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
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
      console.error("contact insert failed", error);
      throw new Error("Could not save your message. Please try again.");
    }

    void row;

    // Send email notification to info@aplica.biz
    const resendApiKey = process.env.RESEND_API_KEY;
    const lovableApiKey = process.env.LOVABLE_API_KEY;
    let emailSent = false;

    if (resendApiKey) {
      try {
        console.log("Attempting to send email via Resend API...");
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Aplica Contact Form <noreply@aplica.biz>",
            to: "info@aplica.biz",
            reply_to: data.email,
            subject: `New Contact Form Message from ${data.name}`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #0f172a; margin-top: 0;">New Contact Form Message</h2>
                <p>You have received a new message from the contact form on your website.</p>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Company:</strong> ${data.company || "N/A"}</p>
                <p style="margin-bottom: 5px;"><strong>Message:</strong></p>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #334155;">${data.message}</div>
              </div>
            `,
            text: `New Contact Form Message\n\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "N/A"}\n\nMessage:\n${data.message}`,
          }),
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Resend API error: ${response.status} - ${errText}`);
        }

        console.log("Email successfully sent via Resend API");
        emailSent = true;
      } catch (err) {
        console.error("Failed to send email via Resend:", err);
      }
    }

    if (!emailSent && lovableApiKey) {
      try {
        console.log("Attempting to send email via Lovable Email API...");
        const { sendLovableEmail } = await import("@lovable.dev/email-js");
        await sendLovableEmail(
          {
            to: "info@aplica.biz",
            from: "Aplica Contact Form <noreply@aplica.biz>",
            reply_to: data.email,
            subject: `New Contact Form Message from ${data.name}`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #0f172a; margin-top: 0;">New Contact Form Message</h2>
                <p>You have received a new message from the contact form on your website.</p>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Company:</strong> ${data.company || "N/A"}</p>
                <p style="margin-bottom: 5px;"><strong>Message:</strong></p>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #334155;">${data.message}</div>
              </div>
            `,
            text: `New Contact Form Message\n\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "N/A"}\n\nMessage:\n${data.message}`,
            purpose: "transactional",
          },
          { apiKey: lovableApiKey },
        );
        console.log("Email successfully sent via Lovable Email API");
        emailSent = true;
      } catch (err) {
        console.error("Failed to send email via Lovable:", err);
      }
    }

    if (!emailSent) {
      console.warn(
        "No email notification sent because neither RESEND_API_KEY nor LOVABLE_API_KEY environment variables are configured. Please set RESEND_API_KEY or verify your domain in Lovable Cloud to enable emails.",
      );
    }

    return { ok: true as const };
  });
