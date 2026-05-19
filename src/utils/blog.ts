import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import {
  collectionIdStartsWithLocale,
  getContentSlug,
  stripLocaleFromSlug,
  type Locale,
} from "@utils/locale";

export async function getBlogStaticPaths(locale: Locale) {
  const blogPosts = await getCollection("blog", ({ id }) =>
    collectionIdStartsWithLocale(id, locale),
  );

  return blogPosts.map((post) => ({
    params: {
      slug: stripLocaleFromSlug(getContentSlug(post), locale),
    },
    props: { post },
  }));
}

export async function getRelatedBlogPosts(
  post: CollectionEntry<"blog">,
  locale: Locale,
): Promise<CollectionEntry<"blog">[]> {
  const blogPosts = await getCollection("blog", ({ id }) =>
    collectionIdStartsWithLocale(id, locale),
  );
  const currentTags = new Set(post.data.tags ?? []);

  return blogPosts
    .filter((blogEntry) => blogEntry.id !== post.id)
    .sort((a, b) => {
      const aScore = (a.data.tags ?? []).filter((tag) =>
        currentTags.has(tag),
      ).length;
      const bScore = (b.data.tags ?? []).filter((tag) =>
        currentTags.has(tag),
      ).length;

      return (
        bScore - aScore || b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      );
    })
    .slice(0, 3);
}
