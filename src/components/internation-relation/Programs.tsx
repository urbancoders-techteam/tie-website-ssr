import { programsData } from "@/constants/internation-relation";
import ProgramFlipCard from "../ProgramFlipCard";
import HeadingTypography from "../Heading";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "What Are These Programmes? - Taksheela Institute",
  description:
    "Explore the innovative international programmes offered by Taksheela Institute, including Dual Degree, Joint Degree, and Twinning programs designed for global exposure and academic excellence.",
};

export default function ProgrammesWrapper() {
  return (
    <section className="bg-[#effdff] py-16 flex flex-col items-center">
      <HeadingTypography content="Immersion Benefits" />
      <div className="flex flex-wrap justify-center gap-16 pt-12">
        {programsData.map((card, index) => (
          <ProgramFlipCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
