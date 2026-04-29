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
