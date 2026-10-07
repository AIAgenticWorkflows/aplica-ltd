import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ContactForm } from "@/components/contact-form";
import { ORGANIZATION_ID, siteUrl } from "@/lib/site";

export const Route = createFileRoute("/collaborate")({
  component: CollaboratePage,
  head: () => ({
    meta: [
      { title: "Contact Aplica in Mauritius: Collaborate With Us" },
      {
        name: "description",
        content:
          "Contact Aplica in Coromandel, Mauritius. Send us a message, call +230 5942 0144 or connect on LinkedIn to discuss a project, a partnership or an idea.",
      },
      { property: "og:title", content: "Contact Aplica in Mauritius: Collaborate With Us" },
      {
        property: "og:description",
        content:
          "Business partners, early testers and idea contributors are welcome. Get in touch with the Aplica team.",
      },
      { property: "og:url", content: siteUrl("/collaborate") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: siteUrl("/collaborate") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${siteUrl("/collaborate")}#webpage`,
          name: "Contact Aplica",
          url: siteUrl("/collaborate"),
          about: { "@id": ORGANIZATION_ID },
        }),
      },
    ],
  }),
});

const audiences = [
  {
    title: "Partners",
    body: "Business partners, technology collaborators and strategic allies who want to build the future together.",
  },
  {
    title: "Early Testers",
    body: "Individuals and organisations willing to test our prototypes and provide valuable feedback.",
  },
  {
    title: "Idea Contributors",
    body: "Creative thinkers with insights about AI applications and real-world problem solving.",
  },
];

function CollaboratePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-10 md:py-20">
        <span className="eyebrow">Collaborate</span>
        <h1 className="mt-3 max-w-3xl text-4xl text-deep md:text-5xl">Let's collaborate</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          The best products come from collaboration. Whether you're a potential partner, an early
          tester, or someone with ideas to share, we'd love to hear from you.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <article key={a.title} className="surface-card p-7">
              <h2 className="text-2xl text-deep">{a.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{a.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h2 className="text-3xl font-bold text-deep">Send us a message</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Tell us a little about what you're working on and we'll get back to you at
              info@aplica.biz.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-2xl bg-brand-navy p-7 shadow-[0_24px_60px_-30px_color-mix(in_oklab,var(--color-deep)_70%,transparent)] sm:p-8">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-brand-sky/15 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-brand-gold/10 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <h2 className="border-b border-background/10 pb-5 text-lg font-bold text-background">
                  Contact details
                </h2>
                <ul className="mt-6 space-y-6">
                  <li className="group">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-sky">
                      Email
                    </p>
                    <a
                      href="mailto:info@aplica.biz"
                      className="mt-1 block break-words text-[15px] font-semibold text-background transition-colors group-hover:text-brand-gold"
                    >
                      info@aplica.biz
                    </a>
                  </li>
                  <li className="group">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-sky">
                      Phone
                    </p>
                    <a
                      href="tel:+23059420144"
                      className="mt-1 block text-[15px] font-semibold text-background transition-colors group-hover:text-brand-gold"
                    >
                      +230 5942 0144
                    </a>
                  </li>
                  <li className="group">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-sky">
                      Address
                    </p>
                    <p className="mt-1 text-[15px] font-semibold leading-relaxed text-background">
                      15, Issackhan Lane, Coromandel
                    </p>
                  </li>
                  <li>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-sky">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/company/aplica-ltd/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 rounded-xl border border-background/10 bg-brand-blue/40 px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-brand-blue"
                    >
                      <Linkedin className="h-4 w-4 text-brand-gold" aria-hidden />
                      Aplica on LinkedIn
                    </a>
                  </li>
                </ul>
                <div className="mt-8 flex items-center gap-2.5 border-t border-background/10 pt-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-background/60">
                    We reply within one business day
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
