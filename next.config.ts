import type { NextConfig } from "next";
import { expandSeoBlogRedirects } from "./src/lib/blog/seoBlogRedirects";
import { expandSeoIndiaUniversityRedirects } from "./src/lib/indiaUniversitySeoRedirects";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/info@taksheela.com",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/login",
        destination: "https://portal.taksheela.com/login",
        permanent: true,
      },
      {
        source: "/login/",
        destination: "https://portal.taksheela.com/login",
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
      // SEO: 301s for legacy / broken URLs (client SEO audit)
      {
        source: "/study-abroad/universityFinder",
        destination: "/study-abroad/university-finder",
        permanent: true,
      },
      {
        source: "/immigration/canada",
        destination: "/",
        permanent: true,
      },
      {
        source: "/immigration/uk",
        destination: "/",
        permanent: true,
      },
      {
        source: "/immigration/australia",
        destination: "/",
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
    ];
  },
  images: {
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
