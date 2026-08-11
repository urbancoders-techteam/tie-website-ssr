import type { MetadataRoute } from "next";

type StaticPathConfig = {
  path: string;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

/** Marketing routes that are not loaded from CMS/blog APIs. */
export const STATIC_SITEMAP_PATHS: StaticPathConfig[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/study-abroad", changeFrequency: "weekly", priority: 1 },
  { path: "/mbbs", changeFrequency: "weekly", priority: 1 },
  { path: "/international-relation", changeFrequency: "weekly", priority: 1 },
  { path: "/immersion", changeFrequency: "weekly", priority: 1 },
  { path: "/blogs", changeFrequency: "daily", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/aboutus", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/refund-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/consultants-study-abroad-kolkata", changeFrequency: "monthly", priority: 0.8 },
  { path: "/study-abroad-consultants-delhi-ncr", changeFrequency: "monthly", priority: 0.8 },
  { path: "/study-abroad-consultants-mumbai", changeFrequency: "monthly", priority: 0.8 },
  { path: "/study-abroad-consultants-bangalore", changeFrequency: "monthly", priority: 0.8 },
  { path: "/study-abroad-consultants-bhubaneswar", changeFrequency: "monthly", priority: 0.8 },
  { path: "/study-abroad/country", changeFrequency: "weekly", priority: 0.8 },
  { path: "/study-abroad/university-finder", changeFrequency: "weekly", priority: 0.8 },
  { path: "/study-abroad/courses", changeFrequency: "weekly", priority: 0.8 },
  { path: "/study-in-dubai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/mbbs/india", changeFrequency: "weekly", priority: 0.8 },
  { path: "/mbbs/abroad", changeFrequency: "weekly", priority: 0.8 },
  { path: "/international-relation/india", changeFrequency: "weekly", priority: 0.8 },
  { path: "/test", changeFrequency: "weekly", priority: 0.8 },
  { path: "/cart", changeFrequency: "monthly", priority: 0.4 },
  { path: "/mbbs/abroad/russia", changeFrequency: "monthly", priority: 0.6 },
  { path: "/mbbs/abroad/georgia", changeFrequency: "monthly", priority: 0.6 },
  { path: "/mbbs/abroad/kazakhstan", changeFrequency: "monthly", priority: 0.6 },
  { path: "/mbbs/abroad/kyrgyzstan", changeFrequency: "monthly", priority: 0.6 },
  { path: "/mbbs/abroad/uzbekistan", changeFrequency: "monthly", priority: 0.6 },
  { path: "/immersion/middle-east", changeFrequency: "monthly", priority: 0.8 },
  { path: "/immersion/south-east-asia", changeFrequency: "monthly", priority: 0.8 },
  { path: "/immersion/europe", changeFrequency: "monthly", priority: 0.8 },
  ...["ielts", "toefl", "pte", "gre", "gmat", "sat"].map((slug) => ({
    path: `/test/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  ...[
    "enginnering",
    "csit",
    "healthscience",
    "socialscience",
    "bussinessmanagement",
    "physicalscience",
    "fineart",
    "journalism",
    "designing",
  ].map((slug) => ({
    path: `/study-abroad/courses/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  })),
  ...[
    "/study-abroad/country/Dubai",
    "/study-abroad/country/Australia",
    "/study-abroad/country/Canada",
    "/study-abroad/country/Germany",
    "/study-abroad/country/France",
    "/study-abroad/country/UK",
    "/study-abroad/country/Ireland",
    "/study-abroad/country/Italy",
    "/study-abroad/country/New-Zealand",
    "/study-abroad/country/Singapore",
    "/study-abroad/country/USA",
  ].map((path) => ({
    path,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];
