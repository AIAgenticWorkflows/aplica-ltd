import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { ORGANIZATION_ID, organizationSchema, siteUrl } from "@/lib/site";

const FOUNDER_PHOTO = "/images/nisha-appanah.webp";
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
          "Aplica is a technology and AI consultancy in Mauritius, founded in 2015. The experience behind our services, what clients say and the values that guide us.",
      },
      { property: "og:title", content: pageTitle },
      {
        property: "og:description",
        content:
          "The 20 years of experience behind our services in software engineering, product leadership and AI, what our clients say and the values behind how we work.",
      },
      { property: "og:url", content: siteUrl("/about") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: siteUrl("/about") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": `${siteUrl("/about")}#webpage`,
              url: siteUrl("/about"),
              name: "About Aplica",
              about: { "@id": ORGANIZATION_ID },
              mainEntity: { "@id": ORGANIZATION_ID },
            },
            {
              ...organizationSchema,
              founder: {
                "@type": "Person",
                name: "Nisha Appanah",
                jobTitle: "Founder",
                image: siteUrl(FOUNDER_PHOTO),
                sameAs: [FOUNDER_LINKEDIN],
              },
            },
          ],
        }),
      },
    ],
  }),
});

// The headline facts about the experience behind the company.
const highlights = [
  { lead: "Live housing systems", rest: "built for Copenhagen Business School and DTU" },
  {
    lead: "1M+ monthly users",
    rest: "and 3M+ sessions on platforms built and modernised",
  },
  {
    lead: "Largest property marketplace",
    rest: "in three countries, with ownership of its product roadmap",
  },
  { lead: "Teams of up to 17", rest: "across product and engineering" },
  { lead: "Conference speaker", rest: "on data privacy, AI agents and robotics" },
];

// Each discipline carries the accent colour of the matching service on /services.
const disciplines = [
  {
    title: "Software engineering",
    summary: "Hands-on, full-stack development of web platforms and business systems.",
    border: "border-t-brand-blue",
    dot: "bg-brand-blue",
    points: [
      "Full-stack development on .NET and modern web stacks",
      "Multi-market deployment and internationalisation",
      "Systems for universities, payments and property marketplaces",
      "Services for PEPPOL, a project funded by the European Commission",
    ],
    services: "Software Engineering, Platform Migration",
  },
  {
    title: "Product leadership",
    summary: "Product ownership for marketplaces at scale, from roadmap to delivery.",
    border: "border-t-brand-red",
    dot: "bg-brand-red",
    points: [
      "Roadmap ownership from vision through execution",
      "Marketplace growth across multiple markets",
      "Two major platform migrations, in Kenya and Romania, without revenue disruption",
      "C-suite partnership on strategy and investment decisions",
    ],
    services: "Product Management",
  },
  {
    title: "AI and automation",
    summary: "AI agents, automation and rapid prototypes that fit into real business operations.",
    border: "border-t-brand-gold",
    dot: "bg-brand-gold",
    points: [
      "AI agent built to automate responses to villa rental inquiries",
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
            <p className="animate-rise mt-8 max-w-2xl border-l-4 border-brand-gold pl-5 font-display text-lg font-semibold leading-snug text-deep [animation-delay:0.28s]">
              Our approach is deliberate: build lean, experiment fast, and focus on problems that
              actually matter.
            </p>
          </div>

          <aside
            aria-labelledby="at-a-glance"
            className="animate-rise rounded-2xl border border-border bg-card p-6 md:p-8 [animation-delay:0.38s]"
          >
            <h2
              id="at-a-glance"
              className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-primary"
            >
              At a glance
            </h2>
            <dl className="mt-3 divide-y divide-border">
              <Fact term="Founded">2015</Fact>
              <Fact term="Based in">Coromandel, Mauritius</Fact>
              <Fact term="Led by">Nisha Appanah, founder</Fact>
              <Fact term="Delivered in">8 countries across Europe, Africa and Asia</Fact>
              <Fact term="Focus">
                AI agents and automation, product management and software engineering
              </Fact>
            </dl>
          </aside>
        </div>
      </section>

      {/* The experience behind Aplica: founder and headline facts */}
      <section className="bg-deep px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[15rem_1fr] lg:gap-20">
          <Reveal>
            <figure>
              <div className="relative mx-auto h-40 w-40 md:h-48 md:w-48">
                <span
                  aria-hidden
                  className="absolute -inset-3 rotate-12 rounded-full border-[6px] border-transparent border-r-brand-gold border-t-brand-gold"
                />
                <span
                  aria-hidden
                  className="absolute -inset-6 -rotate-6 rounded-full border-[6px] border-transparent border-b-brand-sky border-l-brand-red"
                />
                <img
                  src={FOUNDER_PHOTO}
                  alt="Nisha Appanah, founder of Aplica"
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="relative h-full w-full rounded-full object-cover"
                />
              </div>
              <figcaption className="mt-10 text-center">
                <span className="block font-display text-lg font-bold text-white">
                  Nisha Appanah
                </span>{" "}
                <span className="block text-sm text-secondary/70">Founder, Aplica</span>{" "}
                <a
                  href={FOUNDER_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-brand-gold underline decoration-brand-gold/40 underline-offset-4 transition-colors hover:decoration-brand-gold"
                >
                  LinkedIn profile
                  <span className="sr-only"> of Nisha Appanah, opens in a new tab</span>
                </a>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={90}>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              The experience behind Aplica
            </span>
            <h2 className="mt-3 max-w-3xl text-balance text-3xl font-bold text-white md:text-4xl">
              Built on 20 years of software, product and AI
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-secondary/80">
              Aplica is founded and led by Nisha Appanah. Over 20 years she has gone from software
              engineer to product leader to AI founder: building and modernising platforms at scale,
              leading cross-functional product and engineering teams, and delivering in countries
              across Europe, Africa and Asia. Every service we offer comes out of that hands-on
              experience.
            </p>
            <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
              {highlights.map((h) => (
                <li
                  key={h.lead}
                  className="border-t border-white/10 py-4 text-sm leading-relaxed text-secondary/80 sm:last:odd:col-span-2"
                >
                  <span className="font-bold text-white">{h.lead}</span> {h.rest}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* What the experience covers */}
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What the experience covers</span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-deep md:text-4xl">
              Three disciplines behind our services
            </h2>
            <p className="mt-4 text-muted-foreground">
              The same three disciplines sit behind every service we offer.
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
      <section className="bg-card px-5 py-16 md:py-24">
        <Reveal className="mx-auto max-w-7xl">
          <h2 className="eyebrow font-sans">What clients say</h2>
          <div className="mt-8 grid gap-x-12 gap-y-6 lg:grid-cols-[auto_1fr]">
            <svg
              aria-hidden
              viewBox="0 0 48 36"
              className="h-9 w-12 fill-brand-gold lg:mt-2 lg:h-[3.75rem] lg:w-20"
            >
              <path d="M0 36V21.6C0 9.2 6.6 1.9 19 0v7.4c-5.6 1.3-8.6 4.6-9 9.8h9V36H0Zm29 0V21.6C29 9.2 35.6 1.9 48 0v7.4c-5.6 1.3-8.6 4.6-9 9.8h9V36H29Z" />
            </svg>
            <figure>
              <blockquote className="max-w-4xl font-display text-xl font-semibold leading-relaxed text-deep md:text-2xl md:leading-relaxed">
                I've worked with Nisha for over 10 years. She combines strong technical skills with
                something rarer: the ability to actually understand what the customer needs and
                deliver it without fuss. Whether building housing systems or AI automation, she's
                dependable, easy to work with, and always goes the extra mile.
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                <span className="block text-base font-bold text-deep">Christian Drejøe</span> CEO,
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
