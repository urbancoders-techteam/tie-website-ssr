import type { ApiBlog } from "./types";

/** Ensures API blog fields are always available on the detail page. */
export function normalizeApiBlog(raw: Record<string, unknown> | null | undefined): ApiBlog | null {
  if (!raw || typeof raw !== "object") return null;

  return {
    title: String(raw.title ?? ""),
    description: String(raw.description ?? ""),
    slugUrl: String(raw.slugUrl ?? ""),
    image: (raw.image as string | null) ?? null,
    date: raw.date as string | undefined,
    readTime: (raw.readTime as string | null) ?? null,
    categoryId: (raw.categoryId as string | null) ?? null,
    categoryName: (raw.categoryName as string | null) ?? null,
    metaTitle: String(raw.metaTitle ?? "").trim(),
    metaDescription: String(raw.metaDescription ?? "").trim(),
  };
}
