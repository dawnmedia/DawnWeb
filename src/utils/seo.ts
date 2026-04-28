import { SITE } from "@data/constants";
import type { Locale } from "./locale";
import { LOCALE_LANGUAGE_TAGS } from "./locale";

type JsonLd = Record<string, unknown>;

export const SEO_TITLES = {
  home: "Websites That Stop Losing Good Leads | Dawn Web",
  services: "Business Website Design Services | Dawn Web",
  products: "Website Design Portfolio & Digital Projects | Dawn Web",
  blog: "Web Design & Business Website Insights | Dawn Web",
  team: "Meet the Dawn Web Team | Web Design Experts",
  contact: "Contact Dawn Web | Free Website Consultation",
};

export const SEO_DESCRIPTIONS = {
  home:
    "Dawn Web fixes unclear websites, redesigns underperforming pages, and builds custom web apps for growing service businesses that need more qualified inquiries.",
  services:
    "Explore Dawn Web's business website design, website redesign, SEO-ready development, and custom app services for growing US companies.",
  products:
    "See Dawn Web website design projects, digital products, and custom web development work built to help businesses grow online.",
  blog:
    "Read Dawn Web insights on business website design, website redesigns, SEO-ready development, UX, and digital growth strategy.",
  team:
    "Meet the Dawn Web team behind custom business websites, web development, UX design, and digital strategy for growing companies.",
  contact:
    "Contact Dawn Web to plan a business website, redesign, SEO-ready build, or custom web app. Start with a free consultation.",
};

export function normalizePath(pathname = "/"): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (path === "/") {
    return "/";
  }

  return `${path.replace(/\/$/, "")}/`;
}

export function absoluteUrl(pathname = "/", siteUrl = SITE.url): string {
  return `${siteUrl.replace(/\/$/, "")}${normalizePath(pathname)}`;
}

export function buildOrganizationSchema(siteUrl = SITE.url): JsonLd {
  const url = siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${url}/#organization`,
    name: SITE.title,
    url,
    logo: `${url}/favicon.ico`,
    image: `${url}/social.png`,
    description: SITE.description,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: [
      "https://twitter.com/DawnLabsEN",
      "https://github.com/dawnmedia",
      "https://www.instagram.com/dawnweb_en",
    ],
  };
}

export function buildWebSiteSchema(siteUrl = SITE.url): JsonLd {
  const url = siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: SITE.title,
    description: SITE.description,
    publisher: {
      "@id": `${url}/#organization`,
    },
    inLanguage: "en",
  };
}

interface WebPageSchemaInput {
  title: string;
  description: string;
  pathname: string;
  locale: Locale;
  siteUrl?: string;
  type?: string;
}

export function buildWebPageSchema({
  title,
  description,
  pathname,
  locale,
  siteUrl = SITE.url,
  type = "WebPage",
}: WebPageSchemaInput): JsonLd {
  const url = absoluteUrl(pathname, siteUrl);
  const root = siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": url,
    url,
    name: title,
    description,
    inLanguage: LOCALE_LANGUAGE_TAGS[locale],
    isPartOf: {
      "@id": `${root}/#website`,
    },
    publisher: {
      "@id": `${root}/#organization`,
    },
  };
}

interface ServiceSchemaInput {
  name: string;
  description: string;
  pathname: string;
  serviceType: string;
  siteUrl?: string;
}

export function buildServiceSchema({
  name,
  description,
  pathname,
  serviceType,
  siteUrl = SITE.url,
}: ServiceSchemaInput): JsonLd {
  const root = siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(pathname, siteUrl)}#service`,
    name,
    description,
    serviceType,
    provider: {
      "@id": `${root}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: absoluteUrl(pathname, siteUrl),
  };
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  pathname: string;
  image: string;
  author: string;
  datePublished?: Date;
  siteUrl?: string;
}

export function buildArticleSchema({
  title,
  description,
  pathname,
  image,
  author,
  datePublished,
  siteUrl = SITE.url,
}: ArticleSchemaInput): JsonLd {
  const root = siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(pathname, siteUrl)}#article`,
    headline: title,
    description,
    image,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@id": `${root}/#organization`,
    },
    datePublished: datePublished?.toISOString(),
    mainEntityOfPage: absoluteUrl(pathname, siteUrl),
  };
}

interface FaqSchemaInput {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function buildFaqSchema({ faqs }: FaqSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
