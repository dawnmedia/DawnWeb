import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Dawn Web",  // This is already correct!
  tagline: "Build Your Business Online", // Updated tagline 
  description: "Dawn Web crafts stunning websites and provides expert online marketing services to help businesses thrive. Explore our services and contact us to elevate your online presence.", // Updated description
  description_short: "Dawn Web helps businesses succeed online with website design, social media management, and content creation.", // Updated short description
  url: "https://dawnweb.co", // This is already correct!
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
  title: `${SITE.title}: Websites & Online Marketing`, // Updated title
  description: "Dawn Web crafts stunning websites and provides expert online marketing services to help businesses thrive.  Elevate your online presence with our tailored solutions.", // Updated description
  image: ogImageSrc, // This is fine as is
};