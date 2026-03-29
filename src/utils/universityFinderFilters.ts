/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Shared helpers for university finder list + filter flow (wizard, view page, sidebar filters).
 */

export interface UniversityFilterResult {
  universityData: any[];
  filterPayload: any;
  count: number;
  totalPages: number;
}

export function deriveTotalPages(
  count: number,
  apiTotalPages: number,
  limit: number
): number {
  if (count <= 0) return 0;
  if (apiTotalPages > 0) return apiTotalPages;
  return Math.max(1, Math.ceil(count / limit));
}

export interface UniFinderListMeta {
  count: number;
  totalPages: number;
}

const META_KEY = "uniFinderMeta";

export function readUniFinderMetaFromStorage(): UniFinderListMeta | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(META_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as UniFinderListMeta;
    if (
      typeof parsed?.count === "number" &&
      typeof parsed?.totalPages === "number"
    ) {
      return parsed;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function writeUniFinderMetaToStorage(meta: UniFinderListMeta): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(META_KEY, JSON.stringify(meta));
  } catch {
    /* ignore */
  }
}

export function clearUniFinderMetaFromStorage(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(META_KEY);
  } catch {
    /* ignore */
  }
}
