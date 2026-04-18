import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  // Use your custom domain as the site URL and serve from the root path.
  // When using a custom domain (dawnwebs.com) GitHub Pages serves at the root,
  // so `base` should be "/" to avoid broken asset and link paths.
  site: "https://dawnwebs.com",
  base: "/",
  redirects: {
    "/tools/tool-guides/": "/guides/intro/",
    "/tools/equipment-care/": "/advanced/technical-specifications/",
    "/construction/project-planning/": "/guides/first-project-checklist/",
    "/construction/safety/": "/advanced/technical-specifications/",
    "/de/welcome-to-docs/": "/welcome-to-docs/",
    "/de/guides/intro/": "/guides/intro/",
    "/de/guides/getting-started/": "/guides/getting-started/",
    "/de/guides/first-project-checklist/": "/guides/first-project-checklist/",
    "/es/welcome-to-docs/": "/welcome-to-docs/",
    "/es/guides/intro/": "/guides/intro/",
    "/es/guides/getting-started/": "/guides/getting-started/",
    "/es/guides/first-project-checklist/": "/guides/first-project-checklist/",
    "/fa/welcome-to-docs/": "/welcome-to-docs/",
    "/fa/guides/intro/": "/guides/intro/",
    "/fa/guides/getting-started/": "/guides/getting-started/",
    "/fa/guides/first-project-checklist/": "/guides/first-project-checklist/",
    "/ja/welcome-to-docs/": "/welcome-to-docs/",
    "/ja/guides/intro/": "/guides/intro/",
    "/ja/guides/getting-started/": "/guides/getting-started/",
    "/ja/guides/first-project-checklist/": "/guides/first-project-checklist/",
    "/zh-cn/welcome-to-docs/": "/welcome-to-docs/",
    "/zh-cn/guides/intro/": "/guides/intro/",
    "/zh-cn/guides/getting-started/": "/guides/getting-started/",
    "/zh-cn/guides/first-project-checklist/": "/guides/first-project-checklist/",
  },

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
      i18n: {
        defaultLocale: "en", // All urls that don't contain `fr` after `https://dawnwebs.com/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
          br: "br",
          fr: "fr",

        },
      },
    }),
    starlight({
      title: "Dawn Web Docs",
      defaultLocale: "root",
      // https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md
      // If no Astro and Starlight i18n configurations are provided, the built-in default locale is used in Starlight and a matching Astro i18n configuration is generated/used.
      // If only a Starlight i18n configuration is provided, an equivalent Astro i18n configuration is generated/used.
      // If only an Astro i18n configuration is provided, the Starlight i18n configuration is updated to match it.
      // If both an Astro and Starlight i18n configurations are provided, an error is thrown.
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        fr: { label: "Français", lang: "fr" },
        br: { label: "Português (BR)", lang: "pt-BR" },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Dawn Web Guides",
          translations: {
            "pt-BR": "Guias da Dawn Web",
            fr: "Guides Dawn Web",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Services",
          translations: {
            "pt-BR": "Serviços",
            fr: "Services",
          },
          items: [
            {
              label: "Web Development",
              translations: {
                "pt-BR": "Desenvolvimento web",
                fr: "Développement web",
              },
              link: "construction/service-overview/",
            },
            {
              label: "Custom Solutions",
              translations: {
                "pt-BR": "Soluções sob medida",
                fr: "Solutions sur mesure",
              },
              link: "construction/custom-solutions/",
            },
          ],
        },
        {
          label: "Technical Notes",
          translations: {
            "pt-BR": "Notas técnicas",
            fr: "Notes techniques",
          },
          autogenerate: { directory: "advanced" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/dawnweb_en",
        },
      ],
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter: "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://dawnwebs.com" + "/social.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://dawnwebs.com" + "/social.png",
          },
        },
      ],
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
