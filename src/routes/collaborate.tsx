import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/collaborate")({
  component: CollaboratePage,
  head: () => ({
    meta: [
      { title: "Collaborate with Aplica: Partners & Early Testers" },
      {
        name: "description",
        content:
          "Partner with Aplica, join as an early tester, or share ideas. We'd love to hear from anyone building the future of AI-assisted decisions.",
      },
      { property: "og:title", content: "Collaborate with Aplica: Partners & Early Testers" },
      {
        property: "og:description",
        content:
          "Business partners, early testers and idea contributors are welcome. Get in touch with the Aplica team.",
      },
      { property: "og:url", content: "/collaborate" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/collaborate" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Collaborate with Aplica",
          url: "/collaborate",
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

          <aside className="surface-card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-deep">Contact details</h2>
            <ul className="mt-5 space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-sm font-bold text-brand-blue">
                  @
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:info@aplica.biz"
                    className="mt-0.5 block break-words text-sm font-semibold text-deep transition-colors hover:text-primary"
                  >
                    info@aplica.biz
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-sm font-bold text-brand-green">
                  ☎
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href="tel:+23059420144"
                    className="mt-0.5 block text-sm font-semibold text-deep transition-colors hover:text-primary"
                  >
                    +230 5942 0144
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-sm font-bold text-brand-gold">
                  ⌖
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Address
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-deep">
                    15, Issackhan Lane, Coromandel
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-sky/10 text-sm font-bold text-brand-sky">
                  in
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/company/aplica-ltd/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 block text-sm font-semibold text-deep transition-colors hover:text-primary"
                  >
                    Aplica on LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
