import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Testimonial from "@/components/home/Testimonials";
import LetsStart from "@/components/immersion/LetsStart";
import OurTest from "@/components/test/OurTest";
import TestBanner from "@/components/test/TestBanner";
import WhyChooseUs from "@/components/test/WhyChooseUs";
import type { Metadata } from "next";

// ✅ Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Expert Study Abroad Test Preparation | Taksheela Institute",
  description:
    "Get expert study abroad test preparation at Taksheela Institute. Achieve top scores with personalized guidance for exams like IELTS, TOEFL, SAT, and more.",
  keywords: [
    "Test Preparation",
    "IELTS",
    "TOEFL",
    "SAT",
    "GRE",
    "Abroad Exam Coaching",
    "Study Abroad Prep",
    "Taksheela Institute",
  ],
  openGraph: {
    title: "Expert Study Abroad Test Preparation | Taksheela Institute",
    description:
      "Get expert study abroad test preparation at Taksheela Institute. Achieve top scores with personalized guidance for exams like IELTS, TOEFL, SAT, and more.",
    url: "https://www.taksheela.com/test",
    siteName: "Taksheela Institute",
    images: [
      {
        url: "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
        width: 1200,
        height: 630,
        alt: "Taksheela Institute Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Study Abroad Test Preparation | Taksheela Institute",
    description:
      "Get expert study abroad test preparation at Taksheela Institute. Achieve top scores with personalized guidance for exams like IELTS, TOEFL, SAT, and more.",
    images: [
      "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
    ],
    site: "@TIE_Taksheela",
    creator: "@TIE_Taksheela",
  },
};

export default function Test() {
  return (
    <>
     <BreadcrumbSchema />
      {/* ✅ Semantic Headings for SEO (Visually Hidden) */}
      <h1 className="sr-only">Expert study abroad test preparation in India</h1>
      <h2 className="sr-only">Comprehensive Test Preparation Solutions</h2>
      <h3 className="sr-only">Tailored Test Preparation Programs</h3>
      <h4 className="sr-only">Contact Us for More Details</h4>

      {/* ✅ Components */}
      <TestBanner />
      <OurTest />
      <WhyChooseUs />
      <Testimonial />
      <LetsStart />
    </>
  );
}
