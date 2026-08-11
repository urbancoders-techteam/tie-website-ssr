import { fetchAllPublishedBlogsWeb } from "@/lib/blog/fetch";
import { blogHref } from "@/lib/blog/map";
import { baseUrl } from "@/utils/config";
import {
  getSeoRedirectSourceBlogSlugs,
  slugFromBlogPath,
} from "./excludedBlogSlugs";

const SITEMAP_FETCH_REVALIDATE_SECONDS = 300;

type DynamicSitemapPath = {
  path: string;
  lastModified?: Date;
};

async function parseJson<T>(res: Response): Promise<T | null> {
  if (!res.ok) return null;
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return null;
  return res.json() as Promise<T>;
}

export async function fetchBlogSitemapPaths(): Promise<DynamicSitemapPath[]> {
  const excludedSlugs = getSeoRedirectSourceBlogSlugs();
  const { blogs } = await fetchAllPublishedBlogsWeb();
  const seen = new Set<string>();
  const paths: DynamicSitemapPath[] = [];

  for (const blog of blogs) {
    const path = blogHref(blog.slugUrl);
    if (path === "/blogs") continue;

    const slugKey = slugFromBlogPath(path);
    if (!slugKey || excludedSlugs.has(slugKey)) continue;
    if (seen.has(path)) continue;

    seen.add(path);
    const parsedDate = blog.date ? new Date(blog.date) : undefined;
    paths.push({
      path,
      lastModified:
        parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate : undefined,
    });
  }

  return paths;
}

export async function fetchIndianUniversitySitemapPaths(): Promise<DynamicSitemapPath[]> {
  try {
    const res = await fetch(`${baseUrl}indian-universities/web/list`, {
      next: { revalidate: SITEMAP_FETCH_REVALIDATE_SECONDS },
    });

    const json = await parseJson<{ data?: Array<{ slug?: string | null }> }>(res);
    const list = json?.data ?? [];
    const seen = new Set<string>();

    return list
      .map((item) => item.slug?.trim())
      .filter((slug): slug is string => Boolean(slug))
      .filter((slug) => {
        const key = slug.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .map((slug) => ({ path: `/international-relation/india/${slug}` }));
  } catch (error) {
    console.warn("fetchIndianUniversitySitemapPaths failed", error);
    return [];
  }
}
