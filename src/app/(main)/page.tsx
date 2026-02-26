
import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blogs";
import DownloadBrochure from "@/components/home/DownloadBrochure";
import FreeCounsellingBanner from "@/components/home/FreeCouncellingBanner";
import OurServices from "@/components/home/OurServices";
import TaksheelaEdge from "@/components/home/TaksheelaEdge";
import TaksheelaInsights from "@/components/home/TaksheelaInsights";
import Testimonial from "@/components/home/Testimonials";
import WebinarEvent from "@/components/home/Webinar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Study Abroad & Test Prep Experts | Taksheela Institute",
  description:
    "Explore Taksheela Institute for expert study abroad, immigration, Counselling and test prep services—your gateway to global education!",
  keywords: [
    "Study Abroad",
    "Immigration",
    "IELTS Coaching",
    "GRE",
    "SAT",
    "Taksheela Institute",
    "Global Education",
    "Test Prep",
    "Counselling",
  ],
  openGraph: {
    title: "Best Study Abroad & Test Prep Experts | Taksheela Institute",
    description:
      "Explore Taksheela Institute for expert study abroad, immigration, Counselling and test prep services—your gateway to global education!",
    url: "https://www.taksheela.com/",
    siteName: "Taksheela Institute",
    images: [
      {
        url: "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
        width: 1200,
        height: 630,
        alt: "Taksheela Institute",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Study Abroad & Test Prep Experts | Taksheela Institute",
    description:
      "Explore Taksheela Institute for expert study abroad, immigration, counselling and test prep services—your gateway to global education!",
    images: [
      "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
    ],
    site: "@TIE_Taksheela",
    creator: "@TIE_Taksheela",
  },
};

export default function Page() {
  return (
    <>
      {/* Semantically important headings for SEO */}
      <h1 className="sr-only">Unlock Your Global Future with Taksheela Institute</h1>
      <h2 className="sr-only">Immigration Services Tailored to Your Needs</h2>
      <h2 className="sr-only">Expert Coaching for IELTS, SAT, GRE & More</h2>
      <h3 className="sr-only">Connect with Our Experts Today</h3>
      <h3 className="sr-only">Personalized Study Plans for Success</h3>
      <h4 className="sr-only">Contact Us for a Free Consultation</h4>

      <Banner />
      <OurServices />
      <FreeCounsellingBanner />
      <TaksheelaEdge />
      <TaksheelaInsights />
      <DownloadBrochure />
      <Testimonial />
      <WebinarEvent />
      <Blogs />
    </>
  );
}
