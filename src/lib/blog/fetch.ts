import { baseUrl } from "@/utils/config";
import { normalizeApiBlog } from "./normalize";
import type { ApiBlog, ApiBlogCategory } from "./types";

/**
 * Public blog API paths (no Authorization header).
 * Must match tied-api routes registered without ValidateToken.
 */
export const PUBLIC_BLOG_API = {
  blogsList: "blogs/web",
  blogBySlug: (slug: string) => `blogs/by-slugurl/${encodeURIComponent(slug.trim())}`,
  categories: "blog-category/web",
} as const;

const jsonHeaders = { "Content-Type": "application/json" };

async function parseJsonResponse<T>(res: Response): Promise<T | null> {
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.warn("Blog API failed", res.status, body);
    return null;
  }

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    console.warn("Blog API returned non-JSON", contentType);
    return null;
  }

  return res.json() as Promise<T>;
}

/** Unauthenticated GET — list blogs for website */
export async function fetchBlogsWeb(categoryId?: string): Promise<ApiBlog[]> {
  try {
    const params = categoryId ? `?categoryId=${encodeURIComponent(categoryId)}` : "";
    const res = await fetch(`${baseUrl}${PUBLIC_BLOG_API.blogsList}${params}`, {
      cache: "no-store",
      headers: jsonHeaders,
    });

    const json = await parseJsonResponse<{ data?: Record<string, unknown>[] }>(res);
    return (json?.data ?? [])
      .map((item) => normalizeApiBlog(item))
      .filter((item): item is ApiBlog => item !== null);
  } catch (error) {
    console.warn("fetchBlogsWeb failed", error);
    return [];
  }
}

/** Unauthenticated GET — single blog by slug for detail page */
export async function fetchBlogBySlug(slug: string): Promise<ApiBlog | null> {
  try {
    const res = await fetch(`${baseUrl}${PUBLIC_BLOG_API.blogBySlug(slug)}`, {
      cache: "no-store",
      headers: jsonHeaders,
    });

    const json = await parseJsonResponse<{ data?: Record<string, unknown> }>(res);
    return normalizeApiBlog(json?.data);
  } catch (error) {
    console.warn("fetchBlogBySlug failed", error);
    return null;
  }
}

/** Unauthenticated GET — blog categories for filters/tabs */
export async function fetchBlogCategoriesWeb(): Promise<ApiBlogCategory[]> {
  try {
    const res = await fetch(`${baseUrl}${PUBLIC_BLOG_API.categories}`, {
      cache: "no-store",
      headers: jsonHeaders,
    });

    const json = await parseJsonResponse<{ data?: ApiBlogCategory[] }>(res);
    return json?.data ?? [];
  } catch (error) {
    console.warn("fetchBlogCategoriesWeb failed", error);
    return [];
  }
}
