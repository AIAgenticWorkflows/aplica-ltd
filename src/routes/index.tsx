import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import logo from "@/assets/aplica-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aplica: Custom solutions, built around your needs" },
      {
        name: "description",
        content:
          "Aplica is a technology consultancy built on its founder's 20 years of software engineering, product leadership and AI automation experience across platforms serving over a million monthly users.",
      },
      { property: "og:title", content: "Aplica: Custom solutions, built around your needs" },
      {
        property: "og:description",
        content:
          "AI agents and automation, product management, software engineering, platform migration and rapid prototyping: 20 years of experience across five countries.",
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
                text: "Aplica is a technology consultancy founded in 2015 and relaunched in 2024. We deliver AI agents and automation, product management, custom software engineering, platform migration and rapid prototyping, drawing on our founder's 20 years of experience in software engineering, product leadership and applied AI.",
              },
            },
            {
              "@type": "Question",
              name: "Which industries does Aplica serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our delivery experience covers short term rentals and villa management, property marketplaces and real estate portals, university and student housing systems, payment and smartcard solutions, and workflow and ERP systems for business operations.",
              },
            },
            {
              "@type": "Question",
              name: "How can I work with Aplica?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Start with a discovery session through the Collaborate page, or reach out on LinkedIn. We scope the work, agree outcomes and deliver in short, measurable phases.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

const cyclingWords = ["Precision.", "Scale.", "Agility.", "Precision."];

const stats = [
  { value: 20, suffix: " yrs", label: "Founder's industry experience", color: "text-brand-blue" },
  {
    value: 1,
    suffix: "M+",
    label: "Monthly users on platforms delivered",
    color: "text-brand-red",
  },
  { value: 5, suffix: "", label: "Countries delivered in", color: "text-brand-green" },
  { value: 17, suffix: "", label: "Largest team led", color: "text-brand-gold" },
];

const services = [
  {
    title: "AI Agents & Automation",
    body: "Agent-based automation built in n8n and modern AI tooling, embedded directly into the workflows that slow your team down.",
    accent: "brand-gold",
    points: ["AI agents in n8n", "Inquiry automation", "Prompt engineering"],
  },
  {
    title: "Product Management",
    body: "Roadmaps, discovery and delivery rituals shaped by leading product for the largest property marketplace across three countries.",
    accent: "brand-red",
    points: ["Client discovery", "Roadmapping", "Agile delivery"],
  },
  {
    title: "Software Engineering",
    body: "Custom web platforms and business systems built on .NET and modern web stacks, with two decades of hands-on engineering behind them.",
    accent: "brand-blue",
    points: [".NET & web platforms", "Integrations & services", "Form and workflow engines"],
  },
  {
    title: "Platform Migration",
    body: "Founder-led major platform migrations in Kenya and Romania on systems serving over a million unique users a month.",
    accent: "brand-green",
    points: ["Legacy modernisation", "High-traffic migration", "Architecture review"],
  },
  {
    title: "Rapid Prototyping",
    body: "Low-code and AI-assisted prototypes that put a working idea in front of stakeholders in days rather than quarters.",
    accent: "brand-sky",
    points: ["Low-code prototypes", "Concept validation", "Stakeholder demos"],
  },
];

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

const industries = [
  "Short Term Rentals & Villa Management",
  "Property Marketplaces & Real Estate",
  "University & Student Housing",
  "Payments & Smartcard Solutions",
  "Workflow & ERP Systems",
  "Education & Technical Training",
];

const process = [
  {
    step: "01",
    title: "Discover",
    body: "We map your operations, systems and constraints before proposing a single line of work.",
  },
  {
    step: "02",
    title: "Design",
    body: "A scoped solution with clear outcomes, timelines and the measures we will be judged on.",
  },
  {
    step: "03",
    title: "Build",
    body: "Short delivery phases with working software in your hands at the end of each one.",
  },
  {
    step: "04",
    title: "Support",
    body: "Ongoing maintenance, monitoring and iteration once the solution is live.",
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 opacity-10 lg:block">
          <div className="absolute right-16 top-16 h-64 w-64 rounded-full border-[16px] border-brand-gold" />
          <div className="absolute bottom-16 right-40 h-48 w-48 rounded-full border-[12px] border-brand-red" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <span className="animate-rise eyebrow">Technology &amp; AI consultancy</span>
            <h1 className="animate-rise mt-4 text-5xl font-extrabold leading-[1.08] text-deep md:text-7xl [animation-delay:0.08s]">
              Engineering{" "}
              <span className="text-cycle-window text-primary">
                <span className="text-cycle-track">
                  {cyclingWords.map((word, i) => (
                    <span key={`${word}-${i}`}>{word}</span>
                  ))}
                </span>
              </span>
            </h1>
            <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl [animation-delay:0.18s]">
              Aplica designs and builds digital solutions tailored to your business. Founded on 20
              years of hands-on experience across software engineering, product leadership and
              applied AI, we help you solve problems faster and create new opportunities.
            </p>
            <div className="animate-rise mt-8 flex flex-wrap gap-4 [animation-delay:0.28s]">
              <Link to="/work" className="btn-primary">
                Explore our services
              </Link>
              <Link to="/collaborate" className="btn-secondary">
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="animate-rise relative [animation-delay:0.2s]">
              <div
                aria-hidden
                className="animate-drift absolute -inset-10 rounded-full bg-brand-sky/20 blur-3xl"
              />
              <img
                src={logo}
                alt="Aplica interlocking circular logo mark"
                width={340}
                height={340}
                className="animate-float-slow relative h-44 w-44 sm:h-60 sm:w-60 lg:h-80 lg:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility stats — founder-attributed */}
      <section className="bg-deep px-5 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              The experience behind Aplica
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className={`font-display text-4xl font-extrabold md:text-5xl ${s.color}`}>
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-secondary/60">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="bg-card px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">
                A broad service spectrum
              </h2>
              <p className="mt-4 text-muted-foreground">
                Capabilities built over two decades of shipping software, leading product teams and
                putting AI to work in real operations.
              </p>
            </div>
            <Link
              to="/work"
              className="shrink-0 border-b-2 border-primary pb-1 font-bold text-primary transition-colors hover:border-deep hover:text-deep"
            >
              View all services
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const a = accentClasses[s.accent]!;
              return (
                <Reveal
                  key={s.title}
                  as="article"
                  delay={i * 80}
                  className={`rounded-2xl border border-border border-t-4 bg-background p-8 transition-shadow duration-300 hover:shadow-xl ${a.border}`}
                >
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${a.bg}`}
                  >
                    <span className={`font-display text-lg font-extrabold ${a.text}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-deep">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm font-semibold text-deep"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}

            <Reveal
              as="article"
              delay={400}
              className="flex flex-col items-center justify-center rounded-2xl bg-deep p-8 text-center"
            >
              <h3 className="mb-3 text-xl font-bold text-white">Training</h3>
              <p className="mb-6 text-sm leading-relaxed text-secondary/70">
                Hands-on sessions on AI agents, data privacy and robotics for teams, schools and
                communities.
              </p>
              <Link
                to="/collaborate"
                className="w-full rounded-lg bg-primary py-3 font-bold text-primary-foreground transition-colors hover:bg-brand-sky"
              >
                Start collaboration
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-5 py-16 md:py-20">
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

      {/* Process */}
      <section className="bg-card px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow">How we work</span>
            <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">
              A predictable delivery process
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal
                key={p.step}
                as="article"
                delay={i * 90}
                className="border-t-2 border-border pt-6"
              >
                <div className="font-display text-3xl font-extrabold text-primary">{p.step}</div>
                <h3 className="mt-3 text-xl font-bold text-deep">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 pb-4">
        <Reveal className="mx-auto max-w-7xl rounded-3xl bg-deep px-6 py-14 text-center md:px-12 md:py-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let's scope your next project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary/70">
            Tell us what you're trying to solve. We'll come back with a clear plan, a timeline and
            the outcomes we'll be measured on.
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
