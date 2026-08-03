import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

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
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
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

        <div className="surface-card mt-14 p-8 text-center md:p-12">
          <h2 className="text-3xl text-deep">Prefer another way to connect?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Reach out on LinkedIn and tell us what you're working on.
          </p>
          <a
            href="https://www.linkedin.com/company/aplica-ltd/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-6"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
