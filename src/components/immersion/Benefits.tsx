import { immersionBenefits } from "@/constants/immersion";
import { Metadata } from "next";
import HeadingTypography from "../Heading";
import ProgramFlipCard from "../ProgramFlipCard";


export const metadata: Metadata = {
  title: "Immersion Benefits? - Taksheela Institute",
  description:
    "Explore the innovative international programmes offered by Taksheela Institute, including Dual Degree, Joint Degree, and Twinning programs designed for global exposure and academic excellence.",
};

export default function Benefits() {
  return (
    <section className="bg-[#effdff] py-16 flex flex-col items-center">
      <HeadingTypography content="Immersion Benefits" />
      <div className="flex flex-wrap justify-center gap-16 pt-12">
        {immersionBenefits.map((card, index) => (
          <ProgramFlipCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
