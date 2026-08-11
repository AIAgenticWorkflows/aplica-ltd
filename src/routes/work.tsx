import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Our Work: Custom Solutions by Aplica" },
      {
        name: "description",
        content:
          "Explore Aplica's solutions: corporate website design, AI discovery sessions and short term rental intelligence.",
      },
      { property: "og:title", content: "Our Work: Custom Solutions by Aplica" },
      {
        property: "og:description",
        content:
          "Explore how we build tailored digital solutions and identify opportunities to streamline business with custom websites and AI.",
      },
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Aplica projects",
          itemListElement: [
            "Building Corporate Websites",
            "Short Term Rental Intelligence",
            "Client Discovery Sessions",
          ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
        }),
      },
    ],
  }),
});

const projects = [
  {
    title: "Building Corporate Websites",
    body: "We design and build fast, responsive, and beautifully structured corporate websites. Crafted to deliver professional aesthetics and premium user experiences tailored precisely to your brand and business objectives.",
    tags: ["Web Engineering", "UI/UX Design", "Custom Solutions"],
    status: "Available Now",
    launch: "Active",
  },
  {
    title: "Short Term Rental Intelligence",
    body: "AI-powered tools for short term rental hosts to manage bookings, automate guest communication and maximise revenue while keeping guest experience exceptional.",
    tags: ["Guest Automation", "Revenue Optimisation"],
    status: "Available Now",
    launch: "Active",
  },
  {
    title: "Client Discovery Sessions",
    body: "Interactive, hands-on consulting workshops to evaluate your existing operational processes and systematically identify prime opportunities for custom AI automation.",
    tags: ["AI Consulting", "Process Automation", "Digital Strategy"],
    status: "Available Now",
    launch: "Active",
  },
];

function WorkPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-10 md:py-20">
        <span className="eyebrow">Our work</span>
        <h1 className="mt-3 max-w-3xl text-4xl text-deep md:text-5xl">What we're working on</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Explore our tailored services and early experiments designed to solve problems faster and
          create new business opportunities.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="surface-card flex flex-col p-7">
              <h2 className="text-2xl text-deep">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <dl className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <dt>Status</dt>
                  <dd className="font-semibold text-foreground">{p.status}</dd>
                </div>
                <div className="mt-1 flex justify-between">
                  <dt>Target launch</dt>
                  <dd className="font-semibold text-foreground">{p.launch}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="surface-card mt-14 p-8 text-center md:p-12">
          <h2 className="text-3xl text-deep">Want to shape these ideas?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We're looking for early testers, partners and collaborators who want to help build the
            future of AI-assisted decision making.
          </p>
          <Link to="/collaborate" className="btn-primary mt-6">
            Get involved
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
