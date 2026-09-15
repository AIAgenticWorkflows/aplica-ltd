import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/contact.functions";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const send = useServerFn(submitContactMessage);
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    const next: Errors = {};
    if (!payload.name) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) next.email = "Enter a valid email address.";
    if (payload.message.length < 10) next.message = "Please add a few more details.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setPending(true);

    const mailtoSubject = encodeURIComponent(`Inquiry from ${payload.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company || "N/A"}\n\nMessage:\n${payload.message}`
    );
    const mailtoUrl = `mailto:info@aplica.biz?subject=${mailtoSubject}&body=${mailtoBody}`;

    try {
      await send({ data: payload });
      setSent(true);
      form.reset();
      toast.success("Thanks — your message has been saved.");

      // Open email client with pre-filled details as client fallback
      window.location.href = mailtoUrl;
    } catch {
      // If server function submission fails, still offer to launch mail client directly
      window.location.href = mailtoUrl;
      toast.info("Opening your email client to complete sending your message.");
    } finally {
      setPending(false);
    }
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="surface-card p-6 md:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" maxLength={100} className={field} autoComplete="name" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" maxLength={255} className={field} autoComplete="email" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="company" className="text-sm font-medium text-foreground">
          Company <span className="text-muted-foreground">(optional)</span>
        </label>
        <input id="company" name="company" maxLength={120} className={field} autoComplete="organization" />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          How can we help?
        </label>
        <textarea id="message" name="message" rows={5} maxLength={2000} className={field} />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <button type="submit" disabled={pending} className="btn-primary disabled:opacity-60">
          {pending ? "Sending…" : "Send message"}
        </button>
        <a
          href="mailto:info@aplica.biz"
          className="text-sm font-medium text-primary hover:underline self-center"
        >
          Or email info@aplica.biz directly
        </a>
      </div>

      {sent && (
        <p className="mt-4 text-sm text-muted-foreground">
          Message submitted — if your email app didn't open automatically, feel free to email info@aplica.biz directly.
        </p>
      )}
    </form>
  );
}
