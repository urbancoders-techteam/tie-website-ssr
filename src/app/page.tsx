import Banner from "@/components/home/Banner";
import HomeCounter from "@/components/home/HomeCounter";
// import FreeCounsellingBanner from "@/components/home/FreeCouncellingBanner";
import OurServices from "@/components/home/OurServices";
import TrustTaksheela from "@/components/home/TrustTaksheela";
import MedicalEducation from "@/components/home/MedicalEducation";
import GlobalDegree from "@/components/home/GlobalDegree";
import TaksheelaEdge from "@/components/home/TaksheelaEdge";
import WhereYouAre from "@/components/home/WhereYouAre";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Testimonial = dynamic(() => import("@/components/home/Testimonials"));
const GlobalReach = dynamic(() => import("@/components/home/GlobalReach"));
const GlobalImmersionHome = dynamic(() => import("@/components/home/GlobalImmersionHome"));
const StudyInIndiaHome = dynamic(() => import("@/components/home/StudyInIndiaHome"));
const TestPrepSectionHome = dynamic(() => import("@/components/home/TestPrepSectionHome"));
const FAQHome = dynamic(() => import("@/components/home/FAQHome"));
const BookCouncilBanner = dynamic(() => import("@/components/BookCouncilBanner"));
// const TaksheelaInsights = dynamic(() => import("@/components/home/TaksheelaInsights"));
const WebinarEvent = dynamic(() => import("@/components/home/Webinar"));
const DownloadBrochure = dynamic(() => import("@/components/home/DownloadBrochure"));
const Blogs = dynamic(() => import("@/components/home/Blogs"));

// Cache the route output for short windows to improve TTFB while staying fresh.
export const revalidate = 300;

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
      <HomeCounter />
      <OurServices />
      <GlobalReach />
      <MedicalEducation />
      <StudyInIndiaHome />
      <GlobalImmersionHome />
      <TestPrepSectionHome />
      <TrustTaksheela />
      <GlobalDegree />
      <TaksheelaEdge />
      <WhereYouAre />
      <FAQHome />
      <BookCouncilBanner
        redirectPath="/thankyou"
        description="Book your FREE counselling session today with one of India's most trusted overseas education consultants in India. 5,000+ students did, and never looked back."
      />
      <Testimonial />
      {/* <TaksheelaInsights /> */}
      <WebinarEvent />
      <DownloadBrochure />
      <Blogs />
    </>
  );
}
