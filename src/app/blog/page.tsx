import BlogHomePage from "@/components/blog/home-page/BlogHomePage";
import type { Metadata } from "next";

const BLOG_URL = "https://www.taksheela.com/blog";

export const metadata: Metadata = {
  title:
    "MBBS Abroad 2026 in Russia, Georgia, Kazakhstan, Uzbekistan & Kyrgyzstan — Fees, Eligibility & Admission Guide | Taksheela",
  description:
    "Planning MBBS abroad in 2026? Compare NMC-approved universities in Russia, Georgia, Kazakhstan, Uzbekistan & Kyrgyzstan. Full fee breakdown (₹11L–₹51L), NExT rules, eligibility & step-by-step admission process. Free counselling by Taksheela — India's trusted MBBS abroad experts.",
  keywords: [
    "MBBS abroad 2026",
    "MBBS in Russia",
    "MBBS in Georgia",
    "MBBS in Kazakhstan",
    "MBBS in Uzbekistan",
    "MBBS in Kyrgyzstan",
    "NMC approved medical universities",
    "MBBS abroad fees",
    "NExT exam",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "MBBS Abroad 2026 in Russia, Georgia, Kazakhstan, Uzbekistan & Kyrgyzstan",
    description:
      "Compare MBBS abroad fees, NMC-approved universities, eligibility, NExT rules, and admission process for Indian students in 2026.",
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
    title: "MBBS Abroad 2026 Guide | Taksheela",
    description:
      "Compare Russia, Georgia, Kazakhstan, Uzbekistan and Kyrgyzstan for MBBS abroad fees, eligibility, NMC/NExT rules and admission guidance.",
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
