/**
 * SEO sheet: legacy Mongo ObjectId India university URLs → preferred slugs.
 * Keep both /india/:id and trailing-slash variants.
 */
/**
 * SEO sheet + live DB ObjectIds → preferred slugs.
 * Includes both SEO-reported IDs and current production document IDs.
 */
export const SEO_INDIA_UNIVERSITY_OBJECTID_REDIRECTS = [
  // Current production IDs
  { id: "68df82e08b332da68378aff6", slug: "jis-university" },
  { id: "68df77768b332da68378aefd", slug: "siksha-o-anusandhan" },
  { id: "68cca3ea46c2f88283aa25ed", slug: "cmr-university" },
  { id: "68cc9eb746c2f88283aa25d6", slug: "bennett-university" },
  { id: "68c55f52215bfe3ed40e85cf", slug: "parul-university" },
  { id: "68a966a0a1c199cd9de7a55b", slug: "galgotias-university" },
  { id: "68a7b4a2a1c199cd9de78a0f", slug: "manav-rachna-university" },
  // SEO sheet reported IDs (may be legacy / alternate)
  { id: "68df8a0d8b332da68378b060", slug: "siksha-o-anusandhan" },
  { id: "68df8c458b332da68378b0c5", slug: "cmr-university" },
  { id: "68df8e2a8b332da68378b14c", slug: "bennett-university" },
  { id: "68df90928b332da68378b1b8", slug: "parul-university" },
  { id: "68df92b98b332da68378b21c", slug: "galgotias-university" },
  { id: "68df94cc8b332da68378b28b", slug: "manav-rachna-university" },
] as const;

export function expandSeoIndiaUniversityRedirects() {
  return SEO_INDIA_UNIVERSITY_OBJECTID_REDIRECTS.flatMap(({ id, slug }) => {
    const destination = `/international-relation/india/${slug}`;
    return [
      {
        source: `/international-relation/india/${id}`,
        destination,
        statusCode: 301 as const,
      },
      {
        source: `/international-relation/india/${id}/`,
        destination,
        statusCode: 301 as const,
      },
    ];
  });
}

export function isMongoObjectId(value: string): boolean {
  return /^[a-f\d]{24}$/i.test(value.trim());
}
