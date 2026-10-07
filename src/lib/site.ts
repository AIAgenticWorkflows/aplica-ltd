// The site's public address and the company facts that search engines and AI
// assistants read as structured data. Canonical links, social tags, the sitemap
// and every JSON-LD block take their URLs from here.

export const SITE_URL = "https://www.aplica.biz";

/** Full URL for a path on the site, for example siteUrl("/about"). */
export const siteUrl = (path = "/") => `${SITE_URL}${path}`;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** The image link previews show when a page is shared. */
export const SOCIAL_IMAGE = {
  url: siteUrl("/images/aplica-social.png"),
  width: "1200",
  height: "630",
  alt: "Aplica logo",
};

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Aplica Ltd",
  alternateName: "Aplica",
  url: siteUrl("/"),
  logo: siteUrl("/images/aplica-logo.png"),
  description:
    "Aplica is a technology and AI consultancy based in Mauritius. It delivers AI agents and automation, product management, software engineering, platform migration and rapid prototyping, built around each client's needs.",
  foundingDate: "2015",
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
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: siteUrl("/"),
  name: "Aplica",
  alternateName: "Aplica Ltd",
  inLanguage: "en-GB",
  publisher: { "@id": ORGANIZATION_ID },
};
