import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Services & Work: AI, Product and Engineering by Aplica" },
      {
        name: "description",
        content:
          "Aplica's full service range: AI agents and automation, product management, software engineering, platform migration, rapid prototyping, training and corporate websites.",
      },
      {
        property: "og:title",
        content: "Services & Work: AI, Product and Engineering by Aplica",
      },
      {
        property: "og:description",
        content:
          "Explore every service Aplica offers, the industries we serve and the way we deliver work in short, measurable phases.",
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
          name: "Aplica services",
          itemListElement: [
            "AI Agents & Automation",
            "Product Management",
            "Software Engineering",
            "Platform Migration",
            "Rapid Prototyping",
            "Training",
            "Building Corporate Websites",
            "Short Term Rental Intelligence",
            "Client Discovery Sessions",
          ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
        }),
      },
    ],
  }),
});

const accentClasses: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  "brand-red": {
    border: "border-t-brand-red",
    bg: "bg-brand-red/10",
    text: "text-brand-red",
    dot: "bg-brand-red",
  },
  "brand-blue": {
    border: "border-t-brand-blue",
    bg: "bg-brand-blue/10",
    text: "text-brand-blue",
    dot: "bg-brand-blue",
  },
  "brand-gold": {
    border: "border-t-brand-gold",
    bg: "bg-brand-gold/10",
    text: "text-brand-gold",
    dot: "bg-brand-gold",
  },
  "brand-green": {
    border: "border-t-brand-green",
    bg: "bg-brand-green/10",
    text: "text-brand-green",
    dot: "bg-brand-green",
  },
  "brand-sky": {
    border: "border-t-brand-sky",
    bg: "bg-brand-sky/10",
    text: "text-brand-sky",
    dot: "bg-brand-sky",
  },
};

const services = [
  {
    title: "AI Agents & Automation",
    body: "Agent-based automation built in n8n and modern AI tooling, embedded directly into the workflows that slow your team down.",
    accent: "brand-gold",
    points: [
      "AI agents built in n8n",
      "Inquiry and message automation",
      "Prompt engineering and evaluation",
      "Document and data extraction",
    ],
  },
  {
    title: "Product Management",
    body: "Roadmaps, discovery and delivery rituals shaped by leading product for a large property marketplace across three countries.",
    accent: "brand-red",
    points: [
      "Client discovery and scoping",
      "Roadmapping and prioritisation",
      "Agile delivery and rituals",
      "Stakeholder alignment",
    ],
  },
  {
    title: "Software Engineering",
    body: "Custom web platforms and business systems built on .NET and modern web stacks, with two decades of hands-on engineering behind them.",
    accent: "brand-blue",
    points: [
      ".NET and modern web platforms",
      "Integrations and services",
      "Form and workflow engines",
      "Corporate websites",
    ],
  },
  {
    title: "Platform Migration",
    body: "Founder-led major platform migrations in Kenya and Romania, on systems serving over a million unique users a month.",
    accent: "brand-green",
    points: [
      "Legacy modernisation",
      "High-traffic migration planning",
      "Architecture review",
      "Data migration and validation",
    ],
  },
  {
    title: "Rapid Prototyping",
    body: "Low-code and AI-assisted prototypes that put a working idea in front of stakeholders in days rather than quarters.",
    accent: "brand-sky",
    points: [
      "Low-code prototypes",
      "Concept validation",
      "Stakeholder demos",
      "Short term rental intelligence tools",
    ],
  },
  {
    title: "Training",
    body: "Hands-on training on AI agents, data privacy and robotics, delivered for teams, schools and communities.",
    accent: "brand-gold",
    points: [
      "AI agent workshops",
      "Data privacy sessions",
      "Robotics and STEM outreach",
      "Team enablement sessions",
    ],
  },
];

const engagements = [
  {
    title: "Client Discovery Session",
    body: "A focused workshop mapping your operations and systems, ending with a prioritised list of automation opportunities.",
    meta: "Best for: deciding where to start",
  },
  {
    title: "Project Delivery",
    body: "Scoped build work delivered in short phases, with working software in your hands at the end of each one.",
    meta: "Best for: a defined platform or automation need",
  },
  {
    title: "Ongoing Partnership",
    body: "Continuous product and engineering support, with maintenance, monitoring and iteration once solutions are live.",
    meta: "Best for: long-term capacity",
  },
];

const industries = [
  "Short Term Rentals & Villa Management",
  "Property Marketplaces & Real Estate",
  "University & Student Housing",
  "Payments & Smartcard Solutions",
  "Workflow & ERP Systems",
  "Education & Technical Training",
];

function WorkPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 py-10 md:py-16">
        <Reveal>
          <span className="eyebrow">Services &amp; work</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-deep md:text-5xl">
            Everything we can build for you
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            From a single automation to a full platform migration: our services, the ways we work
            together and the sectors we know best.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const a = accentClasses[s.accent]!;
            return (
              <Reveal
                key={s.title}
                as="article"
                delay={i * 80}
                className={`rounded-2xl border border-border border-t-4 bg-card p-8 transition-shadow duration-300 hover:shadow-xl ${a.border}`}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${a.bg}`}
                >
                  <span className={`font-display text-lg font-extrabold ${a.text}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mb-3 text-xl font-bold text-deep">{s.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold text-deep">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-card px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow">How to engage us</span>
            <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">Ways of working</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {engagements.map((e, i) => (
              <Reveal
                key={e.title}
                as="article"
                delay={i * 90}
                className="flex flex-col rounded-2xl border border-border bg-background p-8"
              >
                <h3 className="text-xl font-bold text-deep">{e.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {e.body}
                </p>
                <p className="mt-5 border-t border-border pt-4 text-xs font-bold uppercase tracking-widest text-primary">
                  {e.meta}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow">Industries</span>
            <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">Sectors we serve</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((name, i) => (
              <Reveal
                key={name}
                delay={i * 60}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-5"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="font-semibold text-deep">{name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-4">
        <Reveal className="mx-auto max-w-7xl rounded-3xl bg-deep px-6 py-14 text-center md:px-12 md:py-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Not sure where to start?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary/70">
            Book a discovery session. We map your operations, then come back with a clear plan, a
            timeline and the outcomes we'll be measured on.
          </p>
          <Link
            to="/collaborate"
            className="mt-8 inline-flex rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition-colors hover:bg-brand-sky"
          >
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
