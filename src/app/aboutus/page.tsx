// ✅ Server Component (no 'use client')
import React from "react";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeams";
import OurValues from "@/components/about/OurValues";
import VisionMission from "@/components/about/VisionMission";
import type { Metadata } from "next";
import { navURL } from "@/utils/config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Taksheela Institute | Study Abroad & Immigration Experts",
  description:
    "Discover Taksheela Institute—trusted experts in study abroad, immigration, test prep, and counseling. Empowering students for global education success.",
  keywords: [
    "About Taksheela Institute",
    "study abroad experts",
    "immigration experts",
    "global education consultants",
    "test prep counselors",
    "overseas education",
    "student counseling",
    "Taksheela team",
  ],
  openGraph: {
    title: "About Taksheela Institute | Study Abroad & Immigration Experts",
    description:
      "Discover Taksheela Institute—trusted experts in study abroad, immigration, test prep, and counseling. Empowering students for global education success.",
    url: `${navURL}about`,
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
    title: "About Taksheela Institute | Study Abroad & Immigration Experts",
    description:
      "Discover Taksheela Institute—trusted experts in study abroad, immigration, test prep, and counseling. Empowering students for global education success.",
    images: [
      "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
    ],
    site: "@TIE_Taksheela",
    creator: "@TIE_Taksheela",
  },
};

export default function AboutPage() {
  return (
    <>
             <BreadcrumbSchema />
      {/* ✅ Semantic Headings for SEO */}
      <h1 className="sr-only">Our Story</h1>
      <h2 className="sr-only">Vision</h2>
      <h2 className="sr-only">Mission</h2>
      <h2 className="sr-only">Our Values</h2>
      <h2 className="sr-only">Our Team</h2>

      <OurStory />
      <VisionMission />
      <OurValues />
      <OurTeam />
    </>
  );
}
