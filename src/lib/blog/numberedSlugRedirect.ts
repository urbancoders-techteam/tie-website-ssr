/**
 * SEO: legacy CMS / WordPress-style URLs often end with `-16`, `-29`, etc.
 * If that exact slug is not a live blog, strip one trailing `-<digits>` segment
 * and try the clean slug (e.g. `...-enrolment-16` → `...-enrolment`).
 */
export function stripTrailingNumericSuffix(slug: string): string | null {
  const normalized = slug.trim().replace(/^\/+|\/+$/g, "");
  const match = normalized.match(/^(.+)-(\d+)$/);
  if (!match?.[1]) return null;
  return match[1];
}
