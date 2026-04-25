import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Dawn Web",  // This is already correct!
  tagline: "Build Your Business Online", // Updated tagline 
  description: "Dawn Web designs SEO-ready business websites and custom web development solutions for companies that want more leads online.", // Updated description
  description_short: "Dawn Web helps businesses grow with website design, redesigns, SEO-ready development, and custom web apps.", // Updated short description
  url: "https://dawnwebs.com", // This is already correct!
  author: "Dawn Web", // Changed to match the website name 
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
  locale: "en_US", // This is fine as is
  type: "website", // This is fine as is
  url: SITE.url, // This is fine as is
  title: `${SITE.title}: Business Website Design & Web Development`, // Updated title
  description: SITE.description, // Updated description
  image: ogImageSrc, // This is fine as is
};
