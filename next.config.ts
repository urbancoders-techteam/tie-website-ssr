import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Ensure trailing slash doesn't break – redirect /campaign/ to /campaign
      {
        source: "/mbbs/abroad/russia/campaign/",
        destination: "/mbbs/abroad/russia/campaign",
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
      // Short URL for Russia campaign – only this path is affected; all other pages unchanged
      {
        source: "/russia-campaign",
        destination: "/mbbs/abroad/russia/campaign",
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
    ],
  },
};

export default nextConfig;
