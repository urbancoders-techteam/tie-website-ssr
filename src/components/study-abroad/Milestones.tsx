"use client";

import HeadingTypography from "../Heading";
import MilestonesCard from "../MilestoneCard";
import { milestonesData } from "@/constants/study_abroad/study-abroad";

type MilestonesProps = {
  sectionHeadingAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Milestones = ({ sectionHeadingAs = "h3" }: MilestonesProps) => {
  return (
    <section className="w-full bg-[#effdff] py-12 opacity-75">
      <div className="container mx-auto px-4">
        <HeadingTypography content="Milestones" textAlign="center" as={sectionHeadingAs} />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {milestonesData.map((card) => (
            <MilestonesCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
