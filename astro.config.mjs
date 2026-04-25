import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  // Use your custom domain as the site URL and serve from the root path.
  // When using a custom domain (dawnwebs.com) GitHub Pages serves at the root,
  // so `base` should be "/" to avoid broken asset and link paths.
  site: "https://dawnwebs.com",
  base: "/",

  image: {
    domains: ["images.unsplash.com"],
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr", "br"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes("/comingsoon/") && !page.includes("/team/insight-"),
      i18n: {
        defaultLocale: "en", // All urls that don't contain `fr` after `https://dawnwebs.com/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
          br: "pt-BR",
          fr: "fr",

        },
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
  },
});
