/** Countries with a dedicated `/mbbs/abroad/[slug]` page (Read More on hub). */
export const MBBS_ABROAD_DETAIL_COUNTRIES = new Set([
  "Russia",
  "Georgia",
  "Uzbekistan",
  "Kazakhstan",
  "Kyrgyzstan",
]);

/** Slugs that must not render country detail pages (hub cards only — Enquire now). */
export const MBBS_ABROAD_HUB_ONLY_SLUGS = [
  "bangladesh",
  "canada",
  "germany",
  "philippines",
  "australia",
  "nepal",
  "usa",
  "uk",
] as const;

export function hasMbbsAbroadDetailPage(countryName: string): boolean {
  return MBBS_ABROAD_DETAIL_COUNTRIES.has(countryName);
}

export function isMbbsAbroadHubOnlySlug(slug: string): boolean {
  return (MBBS_ABROAD_HUB_ONLY_SLUGS as readonly string[]).includes(slug.toLowerCase());
}
