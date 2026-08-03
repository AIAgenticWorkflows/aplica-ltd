import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import logo from "@/assets/aplica-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Custom solutions, built around your needs" },
      {
        name: "description",
        content:
          "With product expertise, engineering expertise and AI capabilities, we help you solve problems faster and create new opportunities.",
      },
      { property: "og:title", content: "Custom solutions, built around your needs" },
      {
        property: "og:description",
        content:
          "With product expertise, engineering expertise and AI capabilities, we help you solve problems faster and create new opportunities.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does Aplica do?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Aplica brings together product expertise, engineering expertise and AI capabilities to help you solve problems faster and create new opportunities.",
              },
            },
            {
              "@type": "Question",
              name: "How does Aplica work with clients?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We start by understanding your challenge, then design and build a focused solution that fits your needs. Every project combines thoughtful design, practical engineering and AI where it adds real value.",
              },
            },
            {
              "@type": "Question",
              name: "How can I work with Aplica?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Aplica works with partners, early testers and idea contributors. Reach out through the Collaborate page or on LinkedIn.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

const principles = [
  {
    title: "Simplicity",
    body: "Clear, intuitive tools that remove complexity from decision making.",
  },
  {
    title: "Usefulness",
    body: "Every feature serves a real purpose and adds genuine value.",
  },
  {
    title: "Curiosity",
    body: "Continuous learning and exploration of new possibilities.",
  },
  {
    title: "Integrity",
    body: "Privacy first AI and transparent, ethical practices.",
  },
];

const focus = [
  {
    title: "Building Corporate Websites",
    body: "Designing and building high performance, professional websites tailored to represent your business.",
  },
  {
    title: "Short Term Rental Intelligence",
    body: "Guest automation and revenue optimisation for hosts.",
  },
  {
    title: "Client Discovery Sessions",
    body: "Collaborative workshops to explore and identify practical AI automation opportunities for your operations.",
  },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/60 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-secondary/70 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <span className="eyebrow">Aplica Ltd</span>
            <h1 className="mt-4 text-4xl leading-tight text-deep sm:text-5xl md:text-6xl">
              Custom solutions, built around your needs
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              With product expertise, engineering expertise and AI capabilities, we help you solve
              problems faster and create new opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/work" className="btn-primary">
                See what we're building
              </Link>
              <Link to="/collaborate" className="btn-secondary">
                Start a conversation
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div aria-hidden className="absolute -inset-8 rounded-full bg-accent/50 blur-3xl" />
              <img
                src={logo}
                alt="Aplica interlocking circular logo mark"
                width={320}
                height={320}
                className="relative h-56 w-56 md:h-80 md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="surface-card p-8 md:p-12">
          <span className="eyebrow">Our mission</span>
          <h2 className="mt-3 text-3xl text-deep md:text-4xl">
            Turning promising ideas into reliable tools
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            We're not here to chase trends. We build lean, experiment fast and focus on solving
            problems that matter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <span className="eyebrow">What drives us</span>
        <h2 className="mt-3 text-3xl text-deep md:text-4xl">Four principles</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <article key={p.title} className="surface-card p-6">
              <h3 className="text-xl text-deep">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <span className="eyebrow">Current focus</span>
        <h2 className="mt-3 text-3xl text-deep md:text-4xl">Where we're experimenting</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {focus.map((f) => (
            <article key={f.title} className="surface-card p-6">
              <h3 className="text-xl text-deep">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/work" className="btn-secondary">
            Explore our work
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
