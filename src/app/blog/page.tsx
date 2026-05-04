import BlogHomePage from "@/components/blog/BlogHomePage";
import type { Metadata } from "next";

const BLOG_URL = "https://www.taksheela.com/blog";

export const metadata: Metadata = {
  title: "Study Abroad Blog | Visa, IELTS, MBBS & Global Education Guides",
  description:
    "Read expert study abroad insights from Taksheela Institute, including visa guides, IELTS preparation tips, MBBS abroad updates, scholarships and student life advice.",
  keywords: [
    "Taksheela blog",
    "study abroad blog",
    "IELTS tips",
    "student visa guide",
    "MBBS abroad guide",
    "scholarships for Indian students",
    "global education",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title: "Study Abroad Blog | Taksheela Institute",
    description:
      "Guides and expert insights on studying abroad, IELTS, visas, MBBS abroad, scholarships and international student life.",
    url: BLOG_URL,
    siteName: "Taksheela Institute",
    type: "website",
    images: [
      {
        url: "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
        width: 1200,
        height: 630,
        alt: "Taksheela Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Blog | Taksheela Institute",
    description:
      "Expert insights on studying abroad, IELTS prep, visa guides, MBBS pathways and student life.",
    images: [
      "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
    ],
    site: "@TIE_Taksheela",
    creator: "@TIE_Taksheela",
  },
};

export default function BlogPage() {
  return <BlogHomePage />;
}
