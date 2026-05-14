import type { CollectionEntry } from "astro:content";
import {
  getContentSlug,
  stripLocaleFromSlug,
  type Locale,
} from "@utils/locale";

export const ECOSYSTEM_PRODUCT_SLUGS = [
  "dawn-labs",
  "dawn-web",
  "dawn-media",
  "dawn-studios",
  "dawn-town",
] as const;

const ecosystemProductSlugs = new Set<string>(ECOSYSTEM_PRODUCT_SLUGS);

export function getProductSlug(
  product: CollectionEntry<"products">,
  locale: Locale,
) {
  return stripLocaleFromSlug(getContentSlug(product), locale);
}

export function isEcosystemProduct(
  product: CollectionEntry<"products">,
  locale: Locale,
) {
  return ecosystemProductSlugs.has(getProductSlug(product, locale));
}

export function sortProductsByMainId(
  a: CollectionEntry<"products">,
  b: CollectionEntry<"products">,
) {
  return a.data.main.id - b.data.main.id;
}
