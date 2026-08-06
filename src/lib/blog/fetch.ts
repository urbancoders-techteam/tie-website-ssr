import { baseUrl } from "@/utils/config";
import { sortBlogCategoriesOthersLast } from "./map";
import { normalizeApiBlog } from "./normalize";
import type {
  ApiBlog,
  ApiBlogCategory,
  BlogListParams,
  PaginatedBlogsResult,
} from "./types";

/**
 * Public blog API paths (no Authorization header).
 * Must match tied-api routes registered without ValidateToken.
 */
export const PUBLIC_BLOG_API = {
  blogsList: "blogs/web",
  blogBySlug: (slug: string) => `blogs/by-slugurl/${encodeURIComponent(slug.trim())}`,
  categories: "blog-category/web",
} as const;

export const BLOGS_PER_PAGE = 6;

/** Align with home page ISR (`export const revalidate = 300`). Avoid `cache: "no-store"` so `/` can prerender. */
const BLOG_FETCH_REVALIDATE_SECONDS = 300;

const jsonHeaders = { "Content-Type": "application/json" };

const EMPTY_PAGINATED_RESULT: PaginatedBlogsResult = {
  blogs: [],
  count: 0,
  totalPage: 1,
  currentPage: 1,
};

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

function resolveWebCategoryId(categoryId?: string): string | undefined {
  const normalized = categoryId?.trim();
  if (!normalized || normalized.toLowerCase() === "all") {
    return undefined;
  }
  return normalized;
}

function buildBlogsWebQuery(params: BlogListParams = {}): string {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(params.page ?? 1));
  searchParams.set("limit", String(params.limit ?? BLOGS_PER_PAGE));

  const resolvedCategoryId = resolveWebCategoryId(params.categoryId);
  if (resolvedCategoryId) {
    searchParams.set("categoryId", resolvedCategoryId);
  }

  const normalizedSearch = params.search?.trim();
  if (normalizedSearch) {
    searchParams.set("search", normalizedSearch);
  }

  return `?${searchParams.toString()}`;
}

/** Unauthenticated GET — paginated blog list for website */
export async function fetchBlogsWebPaginated(
  params: BlogListParams = {},
): Promise<PaginatedBlogsResult> {
  try {
    const res = await fetch(
      `${baseUrl}${PUBLIC_BLOG_API.blogsList}${buildBlogsWebQuery(params)}`,
      {
        next: { revalidate: BLOG_FETCH_REVALIDATE_SECONDS },
        headers: jsonHeaders,
      },
    );

    const json = await parseJsonResponse<{
      data?: {
        blogs?: Record<string, unknown>[];
        count?: number;
        totalPage?: number;
        currentPage?: number;
      };
    }>(res);

    const payload = json?.data;
    const blogs = (payload?.blogs ?? [])
      .map((item) => normalizeApiBlog(item))
      .filter((item): item is ApiBlog => item !== null);

    return {
      blogs,
      count: payload?.count ?? blogs.length,
      totalPage: payload?.totalPage ?? 1,
      currentPage: payload?.currentPage ?? params.page ?? 1,
    };
  } catch (error) {
    console.warn("fetchBlogsWebPaginated failed", error);
    return EMPTY_PAGINATED_RESULT;
  }
}

/** Unauthenticated GET — list blogs for website (non-paginated convenience wrapper) */
export async function fetchBlogsWeb(categoryId?: string): Promise<ApiBlog[]> {
  const { blogs } = await fetchBlogsWebPaginated({ categoryId, page: 1, limit: 100 });
  return blogs;
}

/** Unauthenticated GET — single blog by slug for detail page */
export async function fetchBlogBySlug(slug: string): Promise<ApiBlog | null> {
  try {
    const res = await fetch(`${baseUrl}${PUBLIC_BLOG_API.blogBySlug(slug)}`, {
      next: { revalidate: BLOG_FETCH_REVALIDATE_SECONDS },
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
      next: { revalidate: BLOG_FETCH_REVALIDATE_SECONDS },
      headers: jsonHeaders,
    });

    const json = await parseJsonResponse<{ data?: ApiBlogCategory[] }>(res);
    return sortBlogCategoriesOthersLast(json?.data ?? []);
  } catch (error) {
    console.warn("fetchBlogCategoriesWeb failed", error);
    return [];
  }
}
