/** Preferred country slugs (title-case) — sitemap, canonical, and live URL. */
export const PREFERRED_COUNTRY_SLUGS: Record<string, string> = {
  dubai: "Dubai",
  australia: "Australia",
  canada: "Canada",
  germany: "Germany",
  france: "France",
  uk: "UK",
  ireland: "Ireland",
  italy: "Italy",
  "new-zealand": "New-Zealand",
  singapore: "Singapore",
  usa: "USA",
};

export function getPreferredCountrySlug(slug: string): string | undefined {
  return PREFERRED_COUNTRY_SLUGS[slug.toLowerCase()];
}
