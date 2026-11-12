import { fetchBlogsWebPaginated } from "./fetch";
import type { ApiBlog } from "./types";

function normalizeSlug(slugUrl: string) {
  return slugUrl?.replace(/^\/+/, "").split("/").pop()?.toLowerCase() ?? "";
}

function slimRelatedBlog(blog: ApiBlog): ApiBlog {
  return {
    ...blog,
    description: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    faqs: [],
  };
}

/** Up to `limit` other blogs; same category first, then others. Uses paginated list API (not full catalogue). */
export async function fetchRelatedBlogs(
  currentSlug: string,
  categoryId?: string | null,
  limit = 3,
): Promise<ApiBlog[]> {
  const current = normalizeSlug(currentSlug);
  const pageSize = Math.min(Math.max(limit * 4, 12), 50);

  const sameCategoryResult = categoryId
    ? await fetchBlogsWebPaginated({ categoryId, page: 1, limit: pageSize })
    : { blogs: [] };

  const pool = sameCategoryResult.blogs.filter((b) => normalizeSlug(b.slugUrl) !== current);

  if (pool.length < limit) {
    const recent = await fetchBlogsWebPaginated({ page: 1, limit: pageSize });
    const seen = new Set(pool.map((b) => normalizeSlug(b.slugUrl)));
    for (const blog of recent.blogs) {
      const slug = normalizeSlug(blog.slugUrl);
      if (!slug || slug === current || seen.has(slug)) continue;
      seen.add(slug);
      pool.push(blog);
      if (pool.length >= limit * 2) break;
    }
  }

  if (categoryId) {
    const sameCategory = pool.filter((b) => b.categoryId === categoryId);
    const others = pool.filter((b) => b.categoryId !== categoryId);
    return [...sameCategory, ...others].slice(0, limit).map(slimRelatedBlog);
  }

  return pool.slice(0, limit).map(slimRelatedBlog);
}
