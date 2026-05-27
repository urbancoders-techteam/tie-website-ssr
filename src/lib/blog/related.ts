import { fetchBlogsWeb } from "./fetch";
import type { ApiBlog } from "./types";

function normalizeSlug(slugUrl: string) {
  return slugUrl?.replace(/^\/+/, "").split("/").pop()?.toLowerCase() ?? "";
}

/** Up to `limit` other blogs; same category first, then others. */
export async function fetchRelatedBlogs(
  currentSlug: string,
  categoryId?: string | null,
  limit = 3,
): Promise<ApiBlog[]> {
  const current = normalizeSlug(currentSlug);
  const allBlogs = await fetchBlogsWeb();
  const pool = allBlogs.filter((b) => normalizeSlug(b.slugUrl) !== current);

  if (categoryId) {
    const sameCategory = pool.filter((b) => b.categoryId === categoryId);
    const others = pool.filter((b) => b.categoryId !== categoryId);
    return [...sameCategory, ...others].slice(0, limit);
  }

  return pool.slice(0, limit);
}
