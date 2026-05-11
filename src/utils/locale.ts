export const SUPPORTED_LOCALES = ["en", "fr", "br", "ko", "ja"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_PREFIXES: Record<Locale, string> = {
  en: "",
  fr: "fr",
  br: "br",
  ko: "ko",
  ja: "ja",
};

export const LOCALE_LANGUAGE_TAGS: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  br: "pt-BR",
  ko: "ko",
  ja: "ja",
};

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English (US)",
  fr: "Français (FR)",
  br: "Português (BR)",
  ko: "한국어",
  ja: "日本語",
};

export const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  br: "pt_BR",
  ko: "ko_KR",
  ja: "ja_JP",
};

const SERVICE_DETAIL_PATHS = new Set([
  "/services/business-website-design",
  "/services/website-redesign",
  "/services/seo-ready-websites",
  "/services/custom-web-apps",
]);

const NO_ALTERNATE_PATHS = new Set(["/404"]);

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalized.split("/").filter(Boolean);

  if (segments[0] && isLocale(segments[0]) && segments[0] !== DEFAULT_LOCALE) {
    segments.shift();
  }

  return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
}

export function localizePath(pathname: string, locale: Locale): string {
  const basePath = stripLocalePrefix(pathname);
  const prefix = LOCALE_PREFIXES[locale];

  if (!prefix) {
    return basePath;
  }

  return `/${prefix}${basePath === "/" ? "" : basePath}`;
}

export function collectionIdStartsWithLocale(id: string, locale: Locale): boolean {
  return id.startsWith(`${locale}/`);
}

export function stripLocaleFromSlug(slug: string, locale: Locale): string {
  return slug.replace(new RegExp(`^${locale}/`), "");
}

export function getContentSlug(entry: { id: string }): string {
  return entry.id.replace(/\.(md|mdx)$/, "");
}

export function getAvailableLocalesForPath(pathname: string): Locale[] {
  const basePath = stripLocalePrefix(pathname);

  if (NO_ALTERNATE_PATHS.has(basePath)) {
    return [];
  }

  if (SERVICE_DETAIL_PATHS.has(basePath)) {
    return ["en", "ko", "ja"];
  }

  return [...SUPPORTED_LOCALES];
}

export function createAlternateLinks(
  pathname: string,
  siteUrl: string,
  locales: Locale[] = getAvailableLocalesForPath(pathname),
) {
  const baseUrl = siteUrl.replace(/\/$/, "");
  const normalizeAlternatePath = (path: string) => {
    if (path === "/") {
      return "/";
    }

    return `${path.replace(/\/$/, "")}/`;
  };

  return locales.map((locale) => ({
    locale,
    hreflang: LOCALE_LANGUAGE_TAGS[locale],
    href: `${baseUrl}${normalizeAlternatePath(localizePath(pathname, locale))}`,
  }));
}
