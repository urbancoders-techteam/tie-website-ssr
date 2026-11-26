import type { NextConfig } from "next";
import path from "path";
import { expandSeoBlogRedirects } from "./src/lib/blog/seoBlogRedirects";
import { expandSeoIndiaUniversityRedirects } from "./src/lib/indiaUniversitySeoRedirects";

const nextConfig: NextConfig = {
  env: {
    REACT_APP_WEB_URL: "/",
    REACT_APP_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? "",
    REACT_APP_RAZORPAY_KEY: process.env.NEXT_PUBLIC_RAZORPAY_KEY ?? "",
    REACT_APP_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL ?? "",
    REACT_APP_WEB_ICONS_URL: process.env.NEXT_PUBLIC_WEB_ICONS_URL ?? "",
    REACT_APP_HOME_PAGE_IMAGE_URL: process.env.NEXT_PUBLIC_HOME_PAGE_IMAGE_URL ?? "",
    REACT_APP_STUDY_ABROAD_PAGE_URL:
      process.env.NEXT_PUBLIC_STUDY_ABROAD_IMAGE_URL ?? "",
    REACT_APP_IMMERSION_IMAGE_URL: process.env.NEXT_PUBLIC_IMMERSION_IMAGE_URL ?? "",
    REACT_APP_INTERNATIONAL_RELATION_IMAGE_URL:
      process.env.NEXT_PUBLIC_INTERNATIONAL_RELATION_IMAGE_URL ?? "",
    REACT_APP_NEODOVE_LEADS_URL: process.env.NEXT_PUBLIC_NEODOVE_LEADS_URL ?? "",
  },
  webpack: (config) => {
    const portalDir = path.join(__dirname, "src/portal");

    const excludePortal = (rule: { test?: RegExp; exclude?: unknown; oneOf?: unknown[]; rules?: unknown[] } | null) => {
      if (!rule || typeof rule !== "object") return;
      if (rule.test instanceof RegExp && (rule.test.test(".png") || rule.test.test(".svg"))) {
        const previous = rule.exclude;
        rule.exclude = Array.isArray(previous)
          ? [...previous, portalDir]
          : previous
            ? [previous, portalDir]
            : portalDir;
      }
      if (Array.isArray(rule.oneOf)) rule.oneOf.forEach((item) => excludePortal(item as never));
      if (Array.isArray(rule.rules)) rule.rules.forEach((item) => excludePortal(item as never));
    };

    config.module.rules.forEach((rule: never) => excludePortal(rule));
    config.module.rules.unshift({
      test: /\.(png|jpe?g|gif|svg|webp|avif|ico|bmp|mp3|pdf)$/i,
      include: portalDir,
      type: "asset/resource",
    });

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      canvas: false,
    };
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      canvas: false,
    };

    return config;
  },
  async redirects() {
    return [
      {
        source: "/info@taksheela.com",
        destination: "/contact",
        permanent: true,
      },
      // SEO sheet: specific noindex blog URLs → required 301 targets (before /blog/:slug)
      ...expandSeoBlogRedirects(),
      // SEO sheet: India university ObjectId URLs → SEO slugs
      ...expandSeoIndiaUniversityRedirects(),
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
      {
        source: "/blog/:slug/",
        destination: "/blogs/:slug",
        permanent: true,
      },
      // Hub-only MBBS countries (no detail page — cards stay on /mbbs with Enquire now)
      ...[
        "bangladesh",
        "canada",
        "germany",
        "philippines",
        "australia",
        "nepal",
        "usa",
        "uk",
      ].flatMap((slug) => [
        {
          source: `/mbbs/abroad/${slug}`,
          destination: "/mbbs",
          permanent: true,
        },
        {
          source: `/mbbs/abroad/${slug}/`,
          destination: "/mbbs",
          permanent: true,
        },
      ]),
      // Ensure trailing slash doesn't break – redirect /campaign/ to /campaign
      {
        source: "/mbbs/",
        destination: "/mbbs",
        permanent: true,
      },
      {
        source: "/mbbs/abroad/russia/",
        destination: "/mbbs/abroad/russia",
        permanent: true,
      },
      {
        source: "/mbbs/abroad/russia/campaign/",
        destination: "/mbbs/abroad/russia/campaign",
        permanent: true,
      },
      {
        source: "/mbbs/abroad/georgia/campaign/",
        destination: "/mbbs/abroad/georgia/campaign",
        permanent: true,
      },
      {
        source: "/mbbs/abroad/kazakhstan/campaign/",
        destination: "/mbbs/abroad/kazakhstan/campaign",
        permanent: true,
      },
      {
        source: "/mbbs/abroad/uzbekistan/campaign/",
        destination: "/mbbs/abroad/uzbekistan/campaign",
        permanent: true,
      },
      {
        source: "/study-abroad/dubai-lp/",
        destination: "/study-abroad/dubai-lp",
        permanent: true,
      },
      {
        source: "/study-abroad/germany-lp/",
        destination: "/study-abroad/germany-lp",
        permanent: true,
      },
      {
        source: "/study-abroad/germany-lp/thankyou/",
        destination: "/study-abroad/germany-lp/thankyou",
        permanent: true,
      },
      {
        source: "/study-abroad/uk-lp",
        destination: "/study-abroad/united-kingdom-lp",
        permanent: true,
      },
      {
        source: "/study-abroad/uk-lp/",
        destination: "/study-abroad/united-kingdom-lp",
        permanent: true,
      },
      {
        source: "/study-abroad/uk-lp/thankyou",
        destination: "/study-abroad/united-kingdom-lp/thankyou",
        permanent: true,
      },
      {
        source: "/study-abroad/uk-lp/thankyou/",
        destination: "/study-abroad/united-kingdom-lp/thankyou",
        permanent: true,
      },
      {
        source: "/study-abroad/united-kingdom-lp/",
        destination: "/study-abroad/united-kingdom-lp",
        permanent: true,
      },
      {
        source: "/study-abroad/united-kingdom-lp/thankyou/",
        destination: "/study-abroad/united-kingdom-lp/thankyou",
        permanent: true,
      },
      {
        source: "/study-abroad/ireland-lp/",
        destination: "/study-abroad/ireland-lp",
        permanent: true,
      },
      {
        source: "/study-abroad/ireland-lp/thankyou/",
        destination: "/study-abroad/ireland-lp/thankyou",
        permanent: true,
      },
      {
        source: "/study-abroad/new-zealand-lp/",
        destination: "/study-abroad/new-zealand-lp",
        permanent: true,
      },
      {
        source: "/study-abroad/new-zealand-lp/thankyou/",
        destination: "/study-abroad/new-zealand-lp/thankyou",
        permanent: true,
      },
      {
        source: "/study-abroad/campaign/dubai",
        destination: "/study-abroad/dubai-lp",
        permanent: true,
      },
      {
        source: "/study-abroad/campaign/dubai/",
        destination: "/study-abroad/dubai-lp",
        permanent: true,
      },
      {
        source: "/study-abroad/campaign/dubai/thankyou",
        destination: "/study-abroad/dubai-lp/thankyou",
        permanent: true,
      },
      {
        source: "/study-abroad/campaign/dubai/thankyou/",
        destination: "/study-abroad/dubai-lp/thankyou",
        permanent: true,
      },
      // SEO: 301s for legacy / broken URLs (client SEO audit)
      {
        source: "/study-abroad/universityFinder",
        destination: "/study-abroad/university-finder",
        permanent: true,
      },
      {
        source: "/www.taksheela.com",
        destination: "/",
        permanent: true,
      },
      {
        source: "/enrollment",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/planner",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/learningresources",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mocktest",
        destination: "/test",
        permanent: true,
      },
      {
        source: "/performance",
        destination: "/",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/order",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/studyabroad",
        destination: "/study-abroad",
        permanent: true,
      },
      {
        source: "/enrollment-form",
        destination: "/",
        permanent: true,
      },
      {
        source: "/createcommunitypost",
        destination: "/",
        permanent: true,
      },
      {
        source: "/addCart",
        destination: "/cart",
        permanent: true,
      },
      {
        source: "/dashboard/enrollment",
        destination: "/",
        permanent: true,
      },
      {
        source: "/dashboard/studyabroad-purchase",
        destination: "/dashboard/study-abroad-plan",
        permanent: true,
      },
      {
        source: "/dashboard/studyabroad-purchase/",
        destination: "/dashboard/study-abroad-plan",
        permanent: true,
      },
      {
        source: "/dashboard/study-abroad-plan/",
        destination: "/dashboard/study-abroad-plan",
        permanent: true,
      },
      {
        source: "/test/ilets",
        destination: "/test/ielts",
        permanent: true,
      },
      // Client SEO: legacy immersion URLs → canonical pages
      {
        source: "/immersion/study-abroad-consultants-delhi-ncr",
        destination: "/study-abroad-consultants-delhi-ncr",
        permanent: true,
      },
      {
        source: "/immersion/study-abroad-consultants-delhi-ncr/",
        destination: "/study-abroad-consultants-delhi-ncr",
        permanent: true,
      },
      {
        source: "/immersion/consultants-study-abroad-kolkata",
        destination: "/consultants-study-abroad-kolkata",
        permanent: true,
      },
      {
        source: "/immersion/consultants-study-abroad-kolkata/",
        destination: "/consultants-study-abroad-kolkata",
        permanent: true,
      },
      {
        source: "/immersion/southeast-asia",
        destination: "/immersion/south-east-asia",
        permanent: true,
      },
      {
        source: "/immersion/southeast-asia/",
        destination: "/immersion/south-east-asia",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/consultants-study-abroad-bhubaneswar",
        destination: "/study-abroad-consultants-bhubaneswar",
      },
      {
        source: "/dashboard/mocktest/testpage/:testTypeParams/:id/:type",
        destination: "/dashboard/mocktest/testPage/:testTypeParams/:id/:type",
      },
    ];
  },
  images: {
    // Dev server aborts remote optimization at 7s. These S3 JPEGs are 1–2MB, so the
    // picture 500s. In dev, render the original URL and let the browser load it.
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tied-web-bkt.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "taksheelabucket.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
