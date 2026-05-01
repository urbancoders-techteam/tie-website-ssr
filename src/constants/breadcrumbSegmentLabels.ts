/**
 * Lowercase URL segment → human-readable label for breadcrumbs & JSON-LD.
 * Covers acronyms where default title-case would be wrong (e.g. "ielts" → "Ielts").
 */
export const BREADCRUMB_SEGMENT_LABELS: Record<string, string> = {
  ielts: "IELTS",
};
