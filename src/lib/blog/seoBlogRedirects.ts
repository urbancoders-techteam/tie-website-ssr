/**
 * SEO audit: Excluded-by-noindex blog URLs → required 301 targets.
 * Paths only (no origin). Keep in sync with the client SEO spreadsheet.
 */
export type SeoBlogRedirect = {
  source: string;
  destination: string;
};

/** Deduped from SEO sheet rows 1–26 (duplicates 4/5, 9/10, 12/13 collapsed). */
export const SEO_BLOG_NOINDEX_REDIRECTS: SeoBlogRedirect[] = [
  {
    source:
      "/blogs/best-universities-in-georgia-for-mbbs-with-highest-indian-student-enrolment-16",
    destination:
      "/blogs/best-universities-in-georgia-for-mbbs-with-highest-indian-student-enrolment",
  },
  {
    source:
      "/blogs/russia-mbbs-fees-in-indian-rupees-complete-budget-planning-guide-for-2026-17",
    destination:
      "/blogs/russia-mbbs-fees-in-indian-rupees-complete-budget-planning-guide-for-2026",
  },
  {
    source:
      "/blogs/can-indian-students-work-parttime-while-studying-mbbs-in-kazakhstan-20",
    destination:
      "/blogs/can-indian-students-work-parttime-while-studying-mbbs-in-kazakhstan",
  },
  {
    source:
      "/blogs/fmge-passing-rate-of-mbbs-students-in-russia-latest-insights-for-indian-students-18",
    destination:
      "/blogs/fmge-passing-rate-of-mbbs-students-in-russia-latest-insights-for-indian-students",
  },
  {
    source:
      "/blog/fmge-passing-rate-of-mbbs-students-in-russia-latest-insights-for-indian-students-18",
    destination:
      "/blogs/fmge-passing-rate-of-mbbs-students-in-russia-latest-insights-for-indian-students",
  },
  {
    source:
      "/blogs/questions-every-parent-should-ask-before-sending-their-child-for-mbbs-abroad-18",
    destination:
      "/blogs/questions-every-parent-should-ask-before-sending-their-child-for-mbbs-abroad",
  },
  {
    source:
      "/blogs/top-medical-universities-in-uzbekistan-for-students-with-low-neet-scores-in-2026-21",
    destination:
      "/blogs/top-medical-universities-in-uzbekistan-for-students-with-low-neet-scores-in-2026",
  },
  {
    source: "/blogs/how-much-does-it-cost-to-study-abroad-from-india-24",
    destination: "/blogs/how-much-does-it-cost-to-study-abroad-from-india",
  },
  {
    source:
      "/blog/why-georgia-is-becoming-a-preferred-mbbs-destination-for-indian-girl-students-8",
    destination:
      "/blogs/why-georgia-is-becoming-a-preferred-mbbs-destination-for-indian-girl-students",
  },
  {
    source:
      "/blogs/top-medical-universities-in-uzbekistan-for-students-with-low-neet-scores-in-2026-19",
    destination:
      "/blogs/top-medical-universities-in-uzbekistan-for-students-with-low-neet-scores-in-2026",
  },
  {
    source: "/blog/daily-practice-routine-for-pte-academic-exam-21",
    destination: "/blogs/daily-practice-routine-for-pte-academic-exam",
  },
  {
    source: "/blog/public-vs-private-universities-what-really-matters-23",
    destination: "/blogs",
  },
  {
    source:
      "/blog/over-scheduling-kids-the-epidemic-every-parent-needs-to-understand-now-29",
    destination: "/blogs",
  },
  {
    source: "/blog/why-your-ielts-mock-test-score-is-not-improving-9",
    destination: "/blogs/why-your-ielts-mock-test-score-is-not-improving",
  },
  // {
  //   source: "/blog/why-study-abroad-counselling-is-essential-for-every-student",
  //   destination: "/blogs",
  // },
  {
    source: "/blog/top-reasons-to-choose-go8-universities-in-australia-34",
    destination: "/blogs",
  },
  {
    source: "/blog/nepal-to-europe-a-new-study-abroad-trend-in-2025",
    destination: "/blogs",
  },
  {
    source: "/blog/public-vs-private-universities-what-really-matters-14",
    destination: "/blogs",
  },
  {
    source:
      "/blog/how-to-identify-fake-mbbs-abroad-consultants-in-india-before-paying-fees-15",
    destination:
      "/blogs/how-to-identify-fake-mbbs-abroad-consultants-in-india-before-paying-fees",
  },
  {
    source: "/blog/fall-2025-vs-spring-2026-whats-best-for-you-29",
    destination: "/blogs",
  },
  {
    source: "/blog/how-to-score-1500-on-the-sat-proven-tips-20",
    destination: "/blogs/how-to-score-1500-on-the-sat-proven-tips",
  },
  {
    source: "/blog/is-mbbs-abroad-still-worth-it-after-nmc-new-rules-in-2026-16",
    destination: "/blogs/is-mbbs-abroad-still-worth-it-after-nmc-new-rules-in-2026",
  },
  {
    source:
      "/blog/usa-vs-uk-vs-canada-vs-australia-best-country-to-study-abroad-for-indian-students-4",
    destination:
      "/blogs/usa-vs-uk-vs-canada-vs-australia-best-country-to-study-abroad-for-indian-students",
  },
  {
    source: "/blog/nepal-to-europe-a-new-study-abroad-trend-in-2025-17",
    destination: "/blogs",
  },
];

/** Expand each row to /blog + /blogs + trailing-slash variants for one-hop 301s. */
export function expandSeoBlogRedirects(entries: SeoBlogRedirect[] = SEO_BLOG_NOINDEX_REDIRECTS) {
  const seen = new Set<string>();
  const out: { source: string; destination: string; statusCode: 301 }[] = [];

  const push = (source: string, destination: string) => {
    if (seen.has(source)) return;
    seen.add(source);
    out.push({ source, destination, statusCode: 301 });
  };

  for (const { source, destination } of entries) {
    const path = source.replace(/\/+$/, "") || "/";
    const alt =
      path.startsWith("/blogs/")
        ? `/blog/${path.slice("/blogs/".length)}`
        : path.startsWith("/blog/")
          ? `/blogs/${path.slice("/blog/".length)}`
          : null;

    push(path, destination);
    push(`${path}/`, destination);
    if (alt) {
      push(alt, destination);
      push(`${alt}/`, destination);
    }
  }

  return out;
}

/** Slug → destination for SSR fallback when a sheet URL is hit as /blogs/[slug]. */
export function getSeoBlogRedirectDestination(slug: string): string | null {
  const normalized = slug.trim().replace(/^\/+|\/+$/g, "");
  if (!normalized) return null;

  for (const { source, destination } of SEO_BLOG_NOINDEX_REDIRECTS) {
    const sourceSlug = source.replace(/^\/blogs?\//, "").replace(/\/+$/, "");
    if (sourceSlug.toLowerCase() === normalized.toLowerCase()) {
      return destination;
    }
  }
  return null;
}
