import { Metadata } from 'next';
import Benefits from "@/components/internation-relation/Benefits";
import CollaborativeResearch from "@/components/internation-relation/CollaborativeResearch";
import DualDegree from "@/components/internation-relation/DualDegree";
import ImmersionProgramme from "@/components/internation-relation/GlobalImmersionProgram";
import InternationalisationHome from "@/components/internation-relation/InternationalizationHome";
import StudentRecruitment from "@/components/internation-relation/InternationStudentRecruitment";
import InternshipOpportunities from "@/components/internation-relation/InternshipOpportunities";
import MobilityProgramme from "@/components/internation-relation/MobilityProgram";
import PartnerUniversities from "@/components/internation-relation/OurPartnerUniversity";
import Programmes from "@/components/internation-relation/Programs";
import Regulatory from "@/components/internation-relation/Regulatory";
import StudentWork from "@/components/internation-relation/StudentWork";
import StudyInIndia from "@/components/internation-relation/StudyInIndia";
import React from "react";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: "Taksheela Institute | International Relations & Study Abroad",
  description:
    "Explore global opportunities with Taksheela Institute—expert guidance in international relations, study abroad consulting, and overseas education solutions.",
  keywords: [
    "Taksheela Institute",
    "International Relations",
    "Study Abroad",
    "Global Education",
    "Student Exchange",
    "International Students",
    "Dual Degree Program",
    "Global Immersion",
    "Mobility Program",
    "Internship Abroad",
  ],
  openGraph: {
    title: "Taksheela Institute | International Relations & Study Abroad",
    description:
      "Explore global opportunities with Taksheela Institute—expert guidance in international relations, study abroad consulting, and overseas education solutions.",
    url: "https://www.taksheela.com/international-relation",
    siteName: "Taksheela Institute",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taksheela Institute | International Relations & Study Abroad",
    description:
      "Expert guidance in international relations and study abroad programs. Discover student exchange, dual degrees, and global internships with Taksheela.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema />
      <div className="sr-only">
        <h1>INTERNATIONALISATION AT HOME</h1>
        <h2>Benefits</h2>
        <h2>Regulatory bodies for Internationalization</h2>
        <h2>Collaborative Research & Seminars</h2>
        <h2>Dual Degree/Joint Degree & Twinning Programmes</h2>
        <h2>Our Partner Universities</h2>
        <h3>International Student Recruitment</h3>
        <h3>Why study in INDIA ?</h3>
        <h3>Global Immersion Programme</h3>
        <h3>Student Mobility Program</h3>
        <h3>What Are These Programmes?</h3>
        <h3>Internship Opportunities</h3>
        <h3>How Our Student Exchange Programme Works?</h3>
      </div>
      <InternationalisationHome />
      <Benefits />
      <Regulatory />
      <StudentRecruitment />
      <StudyInIndia />
      <ImmersionProgramme />
      <MobilityProgramme />
      <CollaborativeResearch />
      <DualDegree />
      <Programmes />
      <PartnerUniversities />
      <InternshipOpportunities />
      <StudentWork />
    </>
  );
}
