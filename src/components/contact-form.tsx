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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
      next.email = "Enter a valid email address.";
    if (payload.message.length < 10) next.message = "Please add a few more details.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setPending(true);
    try {
      await send({ data: payload });
      setSent(true);
      form.reset();
      toast.success("Thanks — your message is on its way to us.");
    } catch {
      toast.error("Something went wrong. Please try again or email info@aplica.biz.");
    } finally {
      setPending(false);
    }
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="surface-card p-4 sm:p-6 md:p-8" noValidate>
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
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            className={field}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="company" className="text-sm font-medium text-foreground">
          Company <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          maxLength={120}
          className={field}
          autoComplete="organization"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          How can we help?
        </label>
        <textarea id="message" name="message" rows={5} maxLength={2000} className={field} />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>

      {sent && (
        <p className="mt-4 text-sm text-muted-foreground">
          Message received — we'll reply from info@aplica.biz shortly.
        </p>
      )}
    </form>
  );
}
