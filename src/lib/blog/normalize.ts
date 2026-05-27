import type { ApiBlog } from "./types";

function parseHeroTags(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.map((tag) => String(tag).trim()).filter(Boolean);
  }
  if (typeof value === "string") {
    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
}

/** Ensures hero fields from API are always available on the detail page. */
export function normalizeApiBlog(raw: Record<string, unknown> | null | undefined): ApiBlog | null {
  if (!raw || typeof raw !== "object") return null;

  const heroDescription = String(
    raw.heroDescription ?? raw.excerpt ?? ""
  ).trim();

  return {
    title: String(raw.title ?? ""),
    description: String(raw.description ?? ""),
    slugUrl: String(raw.slugUrl ?? ""),
    image: (raw.image as string | null) ?? null,
    date: raw.date as string | undefined,
    readTime: (raw.readTime as string | null) ?? null,
    categoryId: (raw.categoryId as string | null) ?? null,
    categoryName: (raw.categoryName as string | null) ?? null,
    excerpt: heroDescription,
    heroDescription,
    heroTags: parseHeroTags(raw.heroTags),
  };
}
