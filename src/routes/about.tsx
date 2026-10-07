import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";

const SITE_URL = "https://www.aplica.biz";
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
          "Aplica is a technology and AI consultancy founded in 2015 and relaunched in 2024. Meet founder Nisha Appanah and the 20 years of delivery behind our services.",
      },
      { property: "og:title", content: pageTitle },
      {
        property: "og:description",
        content:
          "Our story, our founder's track record across software engineering, product leadership and AI, and the values behind how we work.",
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
              founder: { "@id": `${SITE_URL}/about#founder` },
              email: "info@aplica.biz",
              telephone: "+230 5942 0144",
              address: {
                "@type": "PostalAddress",
                streetAddress: "15, Issackhan Lane",
                addressLocality: "Coromandel",
                addressCountry: "MU",
              },
              sameAs: ["https://www.linkedin.com/company/aplica-ltd/"],
            },
            {
              "@type": "Person",
              "@id": `${SITE_URL}/about#founder`,
              name: "Nisha Appanah",
              jobTitle: "Founder",
              worksFor: { "@id": `${SITE_URL}/#organization` },
              image: `${SITE_URL}${FOUNDER_PHOTO}`,
              sameAs: [FOUNDER_LINKEDIN],
              knowsLanguage: ["English", "French", "Mauritian Creole"],
              knowsAbout: [
                "AI agents",
                "Business process automation",
                "Product management",
                "Software engineering",
                "Platform migration",
              ],
              alumniOf: [
                { "@type": "CollegeOrUniversity", name: "Curtin University" },
                { "@type": "CollegeOrUniversity", name: "University of Technology, Mauritius" },
                { "@type": "CollegeOrUniversity", name: "University of Canberra" },
              ],
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
    body: "Our founder joined Ringier South Africa, first building and later leading product for property marketplaces that serve over a million users a month.",
  },
  {
    year: "2024",
    title: "Aplica relaunches around AI",
    body: "In November 2024 we came back with that experience behind us and a sharper focus: AI agents and automation that fit into real operations.",
  },
];

const career = ["Software engineer", "Product leader", "AI founder"];

// Each discipline carries the accent colour of the matching service on /services.
const disciplines = [
  {
    title: "Software engineering",
    period: "2005 to 2019",
    summary:
      "Hands-on development of web platforms and business systems for universities, payments and property marketplaces.",
    border: "border-t-brand-blue",
    dot: "bg-brand-blue",
    points: [
      "End-to-end property listing flow deployed across five countries",
      "Legacy web solution migrated to the latest .NET stack",
      "WCF services for the PEPPOL project, funded by the European Commission",
      "Business logic for a smartcard payment web solution",
    ],
    where:
      "University of Mauritius, Swteams, KnowGo, Expand Technology, Aplica and Ringier South Africa",
  },
  {
    title: "Product leadership",
    period: "2019 to 2024",
    summary:
      "Product management at Ringier South Africa, for the AI team and for property marketplaces in Kenya, Romania and Senegal.",
    border: "border-t-brand-red",
    dot: "bg-brand-red",
    points: [
      "Roadmap for the largest property marketplace in three countries",
      "Two major platform migrations, in Kenya and Romania, on platforms serving over a million unique users a month",
      "Cross-functional team scaled from 7 to 17 people",
      "AI agent pitched to the C-suite and approved to advance",
    ],
    where: "Ringier South Africa (BuyRentKenya, Imobiliare Romania, Mamaison Senegal)",
  },
  {
    title: "AI and automation",
    period: "2024 to today",
    summary:
      "Applied AI at Aplica: agents, automation and prototypes built for real business processes.",
    border: "border-t-brand-gold",
    dot: "bg-brand-gold",
    points: [
      "AI agent in n8n that automates responses to villa rental inquiries",
      "AI consulting agreement with Cybernaptics Ltd",
      "Client discovery sessions that identify AI automation opportunities",
      "Rapid AI prototypes built with low-code tools",
    ],
    where: "Aplica",
  },
];

const talks = [
  {
    year: "2025",
    title: "Exploring AI Agents: From Fundamentals to Implementation",
    body: "The fundamentals of AI agents using n8n, how they operate, and a demo of a production use case.",
    href: "https://2025.mscc.mu/agenda/875424",
    cta: "Session details",
  },
  {
    year: "2023",
    title: "Navigating the AI Landscape",
    body: "Practical experience with the OpenAI API and running large language models locally.",
    href: "https://2023.mscc.mu/agenda/455578",
    cta: "Session details",
  },
  {
    year: "2021",
    title: "Build and Program an Interactive Robot",
    body: "Building a robot from scratch, with live programming.",
    href: "https://www.youtube.com/watch?v=QHnxsfYhUtk",
    cta: "Watch the session",
  },
  {
    year: "2019",
    title: "How to Program a Robot Arm",
    body: "A 3D-printed robotic arm with a screen interface, and the servo control behind its coordinated movement.",
    href: "https://2019.mscc.mu/session/98226",
    cta: "Session details",
  },
];

const education = [
  {
    title: "Master of International Business",
    detail: "Curtin University, Australia, 2014 to 2016",
  },
  {
    title: "MSc Computer Science & Engineering",
    detail: "University of Technology, Mauritius, 2005 to 2007",
  },
  {
    title: "BSc Information Technology",
    detail: "University of Canberra, Australia, 2002 to 2005",
  },
];

const certifications = [
  { title: "Google AI Professional", detail: "Google, 2026" },
  { title: "AI Agents Fundamentals", detail: "Hugging Face, 2025" },
  {
    title: "Advanced Product Management: Vision, Strategy & Metrics",
    detail: "Udemy, 2023",
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

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-12 md:py-20">
        {/* The logo's arcs, large and faint; they return around the founder's portrait. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/2 hidden h-[22rem] w-[22rem] -translate-y-1/2 opacity-25 xl:block"
        >
          <span className="absolute inset-0 rotate-12 rounded-full border-[14px] border-transparent border-r-brand-gold border-t-brand-gold" />
          <span className="absolute -inset-10 -rotate-6 rounded-full border-[14px] border-transparent border-b-brand-sky border-l-brand-red" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <h1 className="max-w-4xl">
            <span className="animate-rise eyebrow font-sans">
              About Aplica<span className="sr-only">:</span>
            </span>{" "}
            <span className="animate-rise mt-4 block text-balance text-4xl font-extrabold leading-[1.1] text-deep md:text-6xl [animation-delay:0.08s]">
              Technology should make decisions easier, not harder.
            </span>
          </h1>
          <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl [animation-delay:0.18s]">
            Aplica was born from that observation. We are a technology and AI consultancy based in
            Mauritius, and everything we offer, from AI agents to product management to custom
            software, is built around your needs.
          </p>
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

      {/* Founder */}
      <section className="bg-deep px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid items-center gap-12 lg:grid-cols-[18rem_1fr] lg:gap-20">
            <div className="relative mx-auto h-44 w-44 shrink-0 md:h-56 md:w-56">
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

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
                Our founder
              </span>
              <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">Nisha Appanah</h2>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-display font-semibold text-secondary md:text-lg">
                {career.map((step, i) => (
                  <span key={step} className="flex items-center gap-3">
                    {i > 0 && (
                      <>
                        <span className="sr-only"> then </span>
                        <span aria-hidden className="text-brand-gold">
                          →
                        </span>{" "}
                      </>
                    )}
                    {step}
                  </span>
                ))}
              </p>
              <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-secondary/80">
                <p>
                  Nisha has spent 20 years in software engineering, product management and AI. She
                  has built and modernised platforms serving more than a million monthly users, led
                  cross-functional product and engineering teams of up to 17 people, and delivered
                  products for markets across Europe and Africa.
                </p>
                <p>
                  She relaunched Aplica in 2024 to help businesses automate their processes with AI,
                  and speaks at conferences on data privacy, AI agents and robotics. She works in
                  English, French and Mauritian Creole.
                </p>
              </div>
              <a
                href={FOUNDER_LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl border border-background/10 bg-brand-blue/40 px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-brand-blue"
              >
                <Linkedin className="h-4 w-4 text-brand-gold" aria-hidden />
                Connect with Nisha on LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-14 border-t border-white/10 pt-12 md:mt-20 md:pt-16">
            <div className="grid gap-x-20 gap-y-4 lg:grid-cols-[18rem_1fr]">
              <svg
                aria-hidden
                viewBox="0 0 48 36"
                className="h-9 w-12 fill-brand-gold lg:mx-auto lg:h-[3.75rem] lg:w-20"
              >
                <path d="M0 36V21.6C0 9.2 6.6 1.9 19 0v7.4c-5.6 1.3-8.6 4.6-9 9.8h9V36H0Zm29 0V21.6C29 9.2 35.6 1.9 48 0v7.4c-5.6 1.3-8.6 4.6-9 9.8h9V36H29Z" />
              </svg>
              <figure>
                <blockquote className="max-w-3xl font-display text-xl font-semibold leading-relaxed text-white md:text-2xl md:leading-relaxed">
                  I've worked with Nisha for over 10 years. She combines strong technical skills
                  with something rarer: the ability to actually understand what the customer needs
                  and deliver it without fuss. Whether building housing systems or AI automation,
                  she's dependable, easy to work with, and always goes the extra mile.
                </blockquote>
                <figcaption className="mt-6 text-sm text-secondary/70">
                  <span className="block text-base font-bold text-white">Christian Drejøe</span>{" "}
                  CEO, Augrin Software ApS. Client of Aplica.
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Track record */}
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Track record</span>
            <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">
              Twenty years, three disciplines
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every service we offer comes from work our founder has done hands-on: first as a
              software engineer, then leading product, now building with AI.
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
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {d.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-deep">{d.title}</h3>
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
                  <span className="font-bold text-deep">Where: </span>
                  {d.where}
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

      {/* Talks and credentials */}
      <section className="bg-card px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl font-bold text-deep md:text-4xl">Conference talks</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              On stage, Nisha shares what she learns, from AI agents to robots built and programmed
              live.
            </p>
            <ul className="mt-8">
              {talks.map((t) => (
                <li
                  key={t.href}
                  className="grid gap-x-6 gap-y-1 border-t border-border py-6 sm:grid-cols-[4rem_1fr]"
                >
                  <span className="font-display text-xl font-extrabold text-primary">{t.year}</span>
                  <div>
                    <h3 className="text-lg font-bold text-deep">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-deep"
                    >
                      {t.cta}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                      <span className="sr-only">
                        {" "}
                        for {t.title} ({t.year}), opens in a new tab
                      </span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="text-3xl font-bold text-deep md:text-4xl">Credentials</h2>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-widest text-primary">
              Education
            </h3>
            <ul className="mt-2">
              {education.map((e) => (
                <li key={e.title} className="border-t border-border py-4">
                  <p className="font-bold text-deep">{e.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{e.detail}</p>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-widest text-primary">
              Certifications
            </h3>
            <ul className="mt-2">
              {certifications.map((c) => (
                <li key={c.title} className="border-t border-border py-4">
                  <p className="font-bold text-deep">{c.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{c.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
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
