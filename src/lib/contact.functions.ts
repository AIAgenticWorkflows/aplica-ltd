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

    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      await sendTemplateEmail("contact-notification", "info@aplica.biz", {
        templateData: {
          name: data.name,
          email: data.email,
          company: data.company || undefined,
          message: data.message,
        },
        idempotencyKey: `contact-notification-${row.id}`,
      });
    } catch (emailError) {
      console.error("contact email failed", emailError);
    }

    return { ok: true as const };
  });
