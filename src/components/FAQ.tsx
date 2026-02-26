/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from "react";
import HeadingTypography from "./Heading";
import AccordionCard from "@/components/AccordianCard";

interface Props {
  faqData: any;
  heading?: string;
}

const FAQ: React.FC<Props> = ({ faqData, heading }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqData : faqData?.slice(0, 8);
  const headingText = heading ?? "Frequently Asked Questions";

  return (
    <div className="container mx-auto px-4 py-10">
      <HeadingTypography content={headingText} textAlign="center" as="h2" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {visibleFaqs?.map((item: any, index: number) => (
          <AccordionCard key={index} data={item} i={index} />
        ))}
      </div>

      {faqData?.length > 8 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer bg-[#00999E] text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-[#007a7f] transition"
          >
            {showAll ? "Show Less" : "Explore All Questions"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQ;
