import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/info@taksheela.com",
        destination: "/contact",
        permanent: true,
      },
      // Ensure trailing slash doesn't break – redirect /campaign/ to /campaign
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
