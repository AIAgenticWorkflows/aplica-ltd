import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { ORGANIZATION_ID, siteUrl } from "@/lib/site";

const PATH = "/projects/luxora-villa";
const VILLA_URL = "https://www.luxoravilla.com/";
const pageTitle = "Luxora Villa: AI for a Holiday Villa in Mauritius | Aplica";
const description =
  "How Aplica uses AI to market Luxora Villa, a private pool holiday villa in Grand Baie, Mauritius: a bilingual direct booking website, AI agents for marketing and AI made video.";

export const Route = createFileRoute("/projects/luxora-villa")({
  component: LuxoraVillaProject,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: description },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: siteUrl(PATH) },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: siteUrl(PATH) }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${siteUrl(PATH)}#webpage`,
              url: siteUrl(PATH),
              name: "Luxora Villa project",
              description,
              publisher: { "@id": ORGANIZATION_ID },
              about: {
                "@type": "VacationRental",
                "@id": "https://www.luxoravilla.com/#villa",
                name: "Luxora Villa",
                url: VILLA_URL,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Luxora Villa", item: siteUrl(PATH) },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

const workstreams = [
  {
    title: "Direct booking website",
    body: "A fast, server rendered website in English and French, with guides to the north of Mauritius, a live availability calendar and enquiries straight to WhatsApp.",
  },
  {
    title: "Found by search and AI assistants",
    body: "Structured data for the villa, its rooms and its FAQ, a bilingual sitemap and an llms.txt fact sheet, so Google, ChatGPT, Gemini and other assistants read accurate facts.",
  },
  {
    title: "AI marketing agent",
    body: "An internal agent that drafts posts, tracks enquiries and past guests, and helps plan pricing and occupancy, with every spend approved by a person.",
  },
  {
    title: "AI made video",
    body: "A walkthrough video of the villa made with AI video tools and real footage, refined through feedback to keep it authentic.",
  },
];

function LuxoraVillaProject() {
  return (
    <SiteLayout>
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="eyebrow">Project</span>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-deep md:text-5xl">
              Luxora Villa: AI for a holiday villa in Mauritius
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              <a href={VILLA_URL} className="font-semibold text-primary underline">
                Luxora Villa
              </a>{" "}
              is a 3 bedroom holiday villa with a private pool in Grand Baie, in the north of
              Mauritius. Aplica uses it as a live testbed for the tools we build for short term
              rentals: growing direct bookings and occupancy with AI, instead of relying only on
              booking platforms.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {workstreams.map((w, i) => (
              <Reveal
                key={w.title}
                as="article"
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <h2 className="mb-3 text-xl font-bold text-deep">{w.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 rounded-2xl bg-deep p-8 text-center">
              <p className="text-lg font-semibold text-white">
                Run a villa or a rental portfolio and want the same approach?
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a href={VILLA_URL} className="btn-secondary">
                  Visit luxoravilla.com
                </a>
                <Link to="/collaborate" className="btn-primary">
                  Start a conversation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
