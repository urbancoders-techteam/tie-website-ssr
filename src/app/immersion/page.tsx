import { Metadata } from "next";
import Testimonial from '@/components/home/Testimonials';
import Benefits from '@/components/immersion/Benefits';
import { GlobalImmersion } from '@/components/immersion/GlobalImmersion';
import Immersion from '@/components/immersion/Immersion';
import LetsStart from '@/components/immersion/LetsStart';
import Zone from '@/components/immersion/Zone';
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Global Immersion Programs Worldwide | Real‑World Experience",
  description:
    "Taksheela Institute connects with reputed global universities, empowering students to gain international exposure through trusted educational partnerships.",
  keywords: [
    "Global Immersion",
    "International Education",
    "Study Abroad",
    "Student Exchange",
    "Taksheela Institute",
    "Real-World Experience",
    "Global Universities",
    "Overseas Learning"
  ]
};

export default function Page() {
  return (
    <>
     <BreadcrumbSchema />
      {/* sr-only Headings for SEO */}
      <div className="sr-only">
        <h1>Global Immersion: Where dreams take flight and cultures unite.</h1>
        <h2>What is Immersion</h2>
        <h2>Zone We Serve</h2>
      </div>

      {/* Main Components */}
      <GlobalImmersion />
      <Immersion />
      <Benefits />
      <Zone />
      <Testimonial />
      <LetsStart />
    </>
  );
}
