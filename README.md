# Aplica.Biz Reimagined

Rebuild my company website and ensure it scores well for SEO and AI Agents. The current website is https://www.aplica.biz/.

## Getting Started

```sh
git clone <this-repository-url>
cd <repository-name>
bun install
bun run dev
```

## Environment Variables

For contact form email notifications to reach `info@aplica.biz` (or a designated recipient), create `.env.local` or configure server environment variables with:

- `RESEND_API_KEY` (or `LOVABLE_API_KEY`): Required to deliver notification emails.
- `NOTIFICATION_EMAIL`: Target email address for contact form submissions (defaults to `info@aplica.biz`).
- `RESEND_FROM_EMAIL`: Optional custom sender email configured on Resend (defaults to `Aplica Website Contact <onboarding@resend.dev>`).
- `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`: Supabase configuration for storing submitted messages in `contact_messages`.
