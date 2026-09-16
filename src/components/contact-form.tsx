import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/contact.functions";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const baseField =
  "mt-2 w-full rounded-xl border bg-background px-4 py-3 text-[15px] text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60";

const field = (invalid?: boolean) =>
  invalid
    ? `${baseField} border-destructive/60 focus:border-destructive focus:ring-4 focus:ring-destructive/10`
    : `${baseField} border-border focus:border-primary focus:ring-4 focus:ring-primary/15`;

const labelCls = "text-sm font-semibold text-deep";

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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
      next.email = "Enter a valid email address.";
    if (payload.message.length < 10) next.message = "Please add a few more details.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setPending(true);

    try {
      const res = await send({ data: payload });
      setSent(true);
      form.reset();
      if (res.emailSent) {
        toast.success("Thanks, your message has been sent!");
      } else {
        toast.success("Thanks! Your message was received.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="surface-card flex flex-col items-center px-6 py-12 text-center md:py-16">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10">
          <CheckCircle2 className="h-7 w-7 text-brand-green" aria-hidden />
        </div>
        <h3 className="mt-5 text-xl font-bold text-deep">Message received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out — we'll get back to you from info@aplica.biz shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn-secondary mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface-card p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input
            id="name"
            name="name"
            maxLength={100}
            placeholder="Your full name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={field(Boolean(errors.name))}
          />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={field(Boolean(errors.email))}
          />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className={labelCls}>
          Company <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          maxLength={120}
          placeholder="Where you work"
          autoComplete="organization"
          className={field()}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={2000}
          placeholder="Tell us a little about your project, the problem you're solving, or the question you have…"
          aria-invalid={Boolean(errors.message)}
          className={`${field(Boolean(errors.message))} resize-y`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="order-2 text-xs leading-relaxed text-muted-foreground sm:order-1">
          We reply within one business day.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="btn-primary order-1 w-full justify-center sm:order-2 sm:w-auto disabled:opacity-60"
        >
          <Send className="h-4 w-4" aria-hidden />
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
