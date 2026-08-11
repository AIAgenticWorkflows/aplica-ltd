import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Aplica: Custom solutions, built around your needs" },
      {
        name: "description",
        content:
          "Aplica is an early-stage company exploring how automation and agent-based AI can bring real value to businesses and individuals, with a global mindset.",
      },
      { property: "og:title", content: "About Aplica: Custom solutions, built around your needs" },
      {
        property: "og:description",
        content:
          "Our story, our values and where we're heading: building lean, custom solutions, built around your needs.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Aplica",
          url: "/about",
          about: { "@type": "Organization", name: "Aplica Ltd" },
        }),
      },
    ],
  }),
});

const values = [
  {
    title: "Simplicity",
    body: "The best solutions are often the simplest. Every interface, feature and interaction is designed to be intuitive and clear.",
  },
  {
    title: "Usefulness",
    body: "We prioritise solving real problems over building impressive technology for its own sake.",
  },
  {
    title: "Curiosity",
    body: "We stay curious about new possibilities while staying grounded in practical applications.",
  },
  {
    title: "Integrity",
    body: "Privacy-first AI with transparent, ethical practices and responsible development.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-10 md:py-20">
        <span className="eyebrow">About</span>
        <h1 className="mt-3 max-w-3xl text-4xl text-deep md:text-5xl">About Aplica</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Building thoughtful AI tools with a global mindset and local impact.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="surface-card p-8">
            <h2 className="text-2xl text-deep">Our story</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Aplica was born from a simple observation: people make countless decisions every day,
              and technology should make those decisions easier, not harder. We're an early-stage
              company exploring how automation and agent-based AI can bring real value to businesses
              and individuals.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We started with practical use cases in real estate, shopping, tourism, and services,
              focusing on areas where good decisions have a real impact. Our approach is deliberate:
              build lean, experiment fast, and focus on problems that actually matter.
            </p>
          </article>
          <article className="surface-card p-8">
            <h2 className="text-2xl text-deep">Looking forward</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We're building more than tools, as we are creating a new way for people to interact
              with AI that feels natural, trustworthy and genuinely helpful. Our vision is a world
              where technology amplifies human decision-making rather than replacing it.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              While we're just getting started, we build with a global mindset, because the best
              solutions come from diverse perspectives and collaborative thinking.
            </p>
            <Link to="/collaborate" className="btn-primary mt-6">
              Join our journey
            </Link>
          </article>
        </div>

        <h2 className="mt-16 text-3xl text-deep">Our values</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article key={v.title} className="surface-card p-6">
              <h3 className="text-xl text-deep">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
