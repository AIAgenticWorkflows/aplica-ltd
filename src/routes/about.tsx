import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";

const SITE_URL = "https://www.aplica.biz";
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/nishaappanah/";

const pageTitle = "About Aplica: Technology and AI Consultancy in Mauritius";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: pageTitle },
      {
        name: "description",
        content:
          "Aplica is a technology and AI consultancy in Mauritius, founded in 2015 and relaunched in 2024. Our story, the experience behind our services and our values.",
      },
      { property: "og:title", content: pageTitle },
      {
        property: "og:description",
        content:
          "Our story, the 20 years of experience behind our services in software engineering, product leadership and AI, and the values behind how we work.",
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
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": `${SITE_URL}/about#webpage`,
              url: `${SITE_URL}/about`,
              name: "About Aplica",
              about: { "@id": `${SITE_URL}/#organization` },
              mainEntity: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Aplica Ltd",
              alternateName: "Aplica",
              url: `${SITE_URL}/`,
              logo: `${SITE_URL}/images/aplica-logo.png`,
              foundingDate: "2015",
              founder: {
                "@type": "Person",
                name: "Nisha Appanah",
                jobTitle: "Founder",
                sameAs: [FOUNDER_LINKEDIN],
              },
              email: "info@aplica.biz",
              telephone: "+230 5942 0144",
              address: {
                "@type": "PostalAddress",
                streetAddress: "15, Issackhan Lane",
                addressLocality: "Coromandel",
                addressCountry: "MU",
              },
              knowsAbout: [
                "AI agents and automation",
                "Product management",
                "Software engineering",
                "Platform migration",
                "Rapid prototyping",
              ],
              sameAs: ["https://www.linkedin.com/company/aplica-ltd/"],
            },
          ],
        }),
      },
    ],
  }),
});

const chapters = [
  {
    year: "2015",
    title: "Aplica starts in Mauritius",
    body: "In our first chapter we built live housing systems for Copenhagen Business School and DTU, and delivered technical training to our Danish partners.",
  },
  {
    year: "2017",
    title: "Marketplaces at scale",
    body: "Our founder spent nearly eight years building, and then leading product for, property marketplaces that serve over a million users a month.",
  },
  {
    year: "2024",
    title: "Aplica relaunches around AI",
    body: "In November 2024 we came back with that experience behind us and a sharper focus: AI agents and automation that fit into real operations.",
  },
];

// Each discipline carries the accent colour of the matching service on /services.
const disciplines = [
  {
    title: "Software engineering",
    summary:
      "Web platforms and business systems for universities, payments and property marketplaces.",
    border: "border-t-brand-blue",
    dot: "bg-brand-blue",
    points: [
      "End-to-end property listing flow deployed across five countries",
      "Legacy web solution migrated to the latest .NET stack",
      "WCF services for the PEPPOL project, funded by the European Commission",
      "Business logic for a smartcard payment web solution",
    ],
    services: "Software Engineering, Platform Migration",
  },
  {
    title: "Product leadership",
    summary:
      "Product management for an AI team and for property marketplaces in Kenya, Romania and Senegal.",
    border: "border-t-brand-red",
    dot: "bg-brand-red",
    points: [
      "Roadmap for the largest property marketplace in three countries",
      "Two major platform migrations, in Kenya and Romania, on platforms serving over a million unique users a month",
      "Cross-functional team scaled from 7 to 17 people",
      "AI agent pitched to the C-suite and approved to advance",
    ],
    services: "Product Management",
  },
  {
    title: "AI and automation",
    summary: "Agents, automation and prototypes built for real business processes.",
    border: "border-t-brand-gold",
    dot: "bg-brand-gold",
    points: [
      "AI agent in n8n that automates responses to villa rental inquiries",
      "AI consulting agreement with Cybernaptics Ltd",
      "Client discovery sessions that identify AI automation opportunities",
      "Rapid AI prototypes built with low-code tools",
    ],
    services: "AI Agents & Automation, Rapid Prototyping, Training",
  },
];

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

function Fact({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-3.5 last:pb-0">
      <dt className="text-sm text-muted-foreground">{term}</dt>
      <dd className="text-sm font-semibold text-deep">{children}</dd>
    </div>
  );
}

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero: who we are, with the company facts beside it */}
      <section className="px-5 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <h1>
              <span className="animate-rise eyebrow font-sans">
                About Aplica<span className="sr-only">:</span>
              </span>{" "}
              <span className="animate-rise mt-4 block text-balance text-4xl font-extrabold leading-[1.1] text-deep md:text-5xl [animation-delay:0.08s]">
                Technology should make decisions easier, not harder.
              </span>
            </h1>
            <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl [animation-delay:0.18s]">
              Aplica was born from that observation. We are a technology and AI consultancy based in
              Mauritius, and everything we offer, from AI agents to product management to custom
              software, is built around your needs.
            </p>
          </div>

          <aside
            aria-labelledby="at-a-glance"
            className="animate-rise rounded-2xl border border-border bg-card p-6 md:p-8 [animation-delay:0.28s]"
          >
            <h2
              id="at-a-glance"
              className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-primary"
            >
              At a glance
            </h2>
            <dl className="mt-3 divide-y divide-border">
              <Fact term="Founded">2015, relaunched in 2024</Fact>
              <Fact term="Based in">Coromandel, Mauritius</Fact>
              <Fact term="Led by">
                <a
                  href={FOUNDER_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline decoration-primary/30 decoration-2 underline-offset-4 transition-colors hover:decoration-primary"
                >
                  Nisha Appanah
                  <span className="sr-only"> on LinkedIn, opens in a new tab</span>
                </a>
                , founder
              </Fact>
              <Fact term="Delivered in">8 countries across Europe, Africa and Asia</Fact>
              <Fact term="Focus">
                AI agents and automation, product management and software engineering
              </Fact>
            </dl>
          </aside>
        </div>
      </section>

      {/* Story */}
      <section className="bg-card px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold text-deep md:text-4xl">
              From university housing systems to AI agents
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {chapters.map((c, i) => (
              <Reveal
                key={c.year}
                as="article"
                delay={i * 90}
                className="border-t-2 border-border pt-6"
              >
                <div className="font-display text-3xl font-extrabold text-primary">{c.year}</div>
                <h3 className="mt-3 text-xl font-bold text-deep">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={270}>
            <p className="mt-12 max-w-3xl border-l-4 border-brand-gold pl-5 font-display text-lg font-semibold leading-snug text-deep md:text-xl md:leading-snug">
              Our approach is deliberate: build lean, experiment fast, and focus on problems that
              actually matter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Experience behind the services */}
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">The experience behind Aplica</span>
            <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">
              Twenty years, three disciplines
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every service we offer is backed by our founder's 20 years of hands-on work: first in
              software engineering, then leading product, now building with AI.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal
                key={d.title}
                as="article"
                delay={i * 90}
                className={`flex flex-col rounded-2xl border border-border border-t-4 bg-card p-8 ${d.border}`}
              >
                <h3 className="text-xl font-bold text-deep">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.summary}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {d.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm font-semibold text-deep">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${d.dot}`} />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-bold text-deep">Behind these services: </span>
                  {d.services}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={270} className="mt-10">
            <Link
              to="/services"
              className="border-b-2 border-primary pb-1 font-bold text-primary transition-colors hover:border-deep hover:text-deep"
            >
              See what we can build for you
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Client testimonial */}
      <section className="bg-deep px-5 py-16 md:py-24">
        <Reveal className="mx-auto max-w-7xl">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
            What clients say
          </h2>
          <div className="mt-8 grid gap-x-12 gap-y-6 lg:grid-cols-[auto_1fr]">
            <svg
              aria-hidden
              viewBox="0 0 48 36"
              className="h-9 w-12 fill-brand-gold lg:mt-2 lg:h-[3.75rem] lg:w-20"
            >
              <path d="M0 36V21.6C0 9.2 6.6 1.9 19 0v7.4c-5.6 1.3-8.6 4.6-9 9.8h9V36H0Zm29 0V21.6C29 9.2 35.6 1.9 48 0v7.4c-5.6 1.3-8.6 4.6-9 9.8h9V36H29Z" />
            </svg>
            <figure>
              <blockquote className="max-w-4xl font-display text-xl font-semibold leading-relaxed text-white md:text-2xl md:leading-relaxed">
                I've worked with Nisha for over 10 years. She combines strong technical skills with
                something rarer: the ability to actually understand what the customer needs and
                deliver it without fuss. Whether building housing systems or AI automation, she's
                dependable, easy to work with, and always goes the extra mile.
              </blockquote>
              <figcaption className="mt-6 text-sm text-secondary/70">
                <span className="block text-base font-bold text-white">Christian Drejøe</span> CEO,
                Augrin Software ApS. Client of Aplica.
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Our values</span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-deep md:text-4xl">
              Technology that amplifies human decisions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our vision is a world where technology amplifies human decision-making rather than
              replacing it. Four values guide how we get there.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                as="article"
                delay={i * 90}
                className="border-t-2 border-border pt-6"
              >
                <h3 className="text-xl font-bold text-deep">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 pb-4">
        <Reveal className="mx-auto max-w-7xl rounded-3xl bg-deep px-6 py-14 text-center md:px-12 md:py-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Tell us what you're trying to solve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary/70">
            We'll come back with a clear plan, a timeline and the outcomes we'll be measured on.
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
