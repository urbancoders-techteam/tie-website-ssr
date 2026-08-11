import { fetchBlogSitemapPaths, fetchIndianUniversitySitemapPaths } from "@/lib/sitemap/fetchDynamicPaths";
import { absoluteUrl } from "@/lib/sitemap/siteOrigin";
import { STATIC_SITEMAP_PATHS } from "@/lib/sitemap/staticPaths";
import type { MetadataRoute } from "next";

/** Refresh sitemap when blogs/CMS data change (ISR — same cadence as blog pages). */
export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogPaths, indianUniversityPaths] = await Promise.all([
    fetchBlogSitemapPaths(),
    fetchIndianUniversitySitemapPaths(),
  ]);

  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();

  const addEntry = (entry: MetadataRoute.Sitemap[number]) => {
    byUrl.set(entry.url, entry);
  };

  for (const { path, changeFrequency, priority } of STATIC_SITEMAP_PATHS) {
    addEntry({
      url: absoluteUrl(path),
      changeFrequency,
      priority,
    });
  }

  for (const { path, lastModified } of indianUniversityPaths) {
    addEntry({
      url: absoluteUrl(path),
      changeFrequency: "weekly",
      priority: 0.7,
      lastModified,
    });
  }

  for (const { path, lastModified } of blogPaths) {
    addEntry({
      url: absoluteUrl(path),
      changeFrequency: "weekly",
      priority: 0.7,
      lastModified,
    });
  }

  return Array.from(byUrl.values());
}
