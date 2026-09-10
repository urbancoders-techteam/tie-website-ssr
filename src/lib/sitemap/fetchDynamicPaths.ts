import { PUBLIC_BLOG_API } from "@/lib/blog/fetch";
import { blogHref } from "@/lib/blog/map";
import { baseUrl } from "@/utils/config";
import {
  getSeoRedirectSourceBlogSlugs,
  slugFromBlogPath,
} from "./excludedBlogSlugs";
import { REQUIRED_BLOG_SITEMAP_SLUGS } from "./requiredBlogSitemapSlugs";

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

type SitemapBlogRow = {
  slugUrl?: string | null;
  date?: string | Date | null;
};

function toLastModified(value: unknown): Date | undefined {
  if (!value) return undefined;
  const parsedDate = value instanceof Date ? value : new Date(String(value));
  return Number.isNaN(parsedDate.getTime()) ? undefined : parsedDate;
}

async function fetchLeanSitemapBlogs(): Promise<SitemapBlogRow[]> {
  const res = await fetch(`${baseUrl}${PUBLIC_BLOG_API.blogsSitemap}`, {
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  const json = await parseJson<{ data?: { blogs?: SitemapBlogRow[] } }>(res);
  return json?.data?.blogs ?? [];
}

/** Small pages stay under Next.js 2MB fetch cache if the lean sitemap route is not live yet. */
async function fetchPaginatedSitemapBlogsFallback(): Promise<SitemapBlogRow[]> {
  const blogs: SitemapBlogRow[] = [];
  let page = 1;
  let totalPage = 1;
  const limit = 20;

  while (page <= totalPage) {
    const res = await fetch(
      `${baseUrl}${PUBLIC_BLOG_API.blogsList}?page=${page}&limit=${limit}`,
      {
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
      },
    );

    const json = await parseJson<{
      data?: { blogs?: SitemapBlogRow[]; totalPage?: number };
    }>(res);

    blogs.push(...(json?.data?.blogs ?? []));
    totalPage = Math.max(json?.data?.totalPage ?? 1, 1);
    page += 1;
    if (page > 50) break;
  }

  return blogs;
}

/**
 * All published blog URLs for /sitemap.xml.
 * New admin uploads are included via GET /blogs/web/sitemap.
 * REQUIRED_BLOG_SITEMAP_SLUGS are merged so the SEO-audit URLs cannot be dropped.
 */
export async function fetchBlogSitemapPaths(): Promise<DynamicSitemapPath[]> {
  const excludedSlugs = getSeoRedirectSourceBlogSlugs();
  const seen = new Set<string>();
  const paths: DynamicSitemapPath[] = [];

  const addSlug = (slugUrl: string, date?: unknown) => {
    const path = blogHref(slugUrl);
    if (path === "/blogs") return;

    const slugKey = slugFromBlogPath(path);
    if (!slugKey || excludedSlugs.has(slugKey)) return;
    if (seen.has(path)) return;

    seen.add(path);
    paths.push({
      path,
      lastModified: toLastModified(date),
    });
  };

  let rows: SitemapBlogRow[] = [];
  try {
    rows = await fetchLeanSitemapBlogs();
  } catch (error) {
    console.warn("fetchBlogSitemapPaths lean endpoint failed", error);
  }

  if (rows.length === 0) {
    try {
      rows = await fetchPaginatedSitemapBlogsFallback();
    } catch (error) {
      console.warn("fetchBlogSitemapPaths fallback failed", error);
    }
  }

  for (const blog of rows) {
    addSlug(String(blog.slugUrl ?? ""), blog.date);
  }

  for (const slug of REQUIRED_BLOG_SITEMAP_SLUGS) {
    addSlug(slug);
  }

  return paths;
}

export async function fetchIndianUniversitySitemapPaths(): Promise<DynamicSitemapPath[]> {
  try {
    const res = await fetch(`${baseUrl}indian-universities/web/list`, {
      cache: "no-store",
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
