import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Dawn Web",
  tagline: "Websites that stop losing good leads",
  description: "Dawn Web fixes unclear websites, redesigns underperforming pages, and builds custom web apps for growing service businesses that need more qualified inquiries.",
  description_short: "Founder-led website design, redesigns, SEO-ready builds, and custom web apps for service businesses that need clearer leads.",
  url: "https://dawnwebs.com",
  author: "Dawn Web",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Websites that stop losing good leads`,
  description: SITE.description,
  image: ogImageSrc,
};
