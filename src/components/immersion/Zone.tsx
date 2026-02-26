// app/components/Zone.tsx
import React from "react";
import { ZoneData } from "@/constants/immersion";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";

const FlipCard = ({
  country,
}: {
  country: { title: string; path: string; items: string[] };
}) => {
  return (
    <Link
      href={country.path}
      className="group w-[220px] h-[260px] [perspective:1200px] block"
    >
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-[#0a9da2] text-white rounded-xl flex items-center justify-center shadow-md text-center text-[24px] sm:text-[28px] font-bold p-3">
          {country.title}
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-[#087a7e] text-white rounded-xl flex align-middle items-center justify-center shadow-md text-[14px] p-4 [transform:rotateY(180deg)]">
          <ul className="text-left list-disc ml-4 space-y-1">
            {country.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

const Zone = () => {
  return (
    <section className="py-12 bg-[#effdff]">
      <ContainerWrapper>
        <div className="text-center mb-10">
          <HeadingTypography content="Zone We Serve" textAlign="center" />
        </div>

        <div className="flex flex-wrap justify-evenly">
          {ZoneData.map((country, index) => (
            <FlipCard key={index} country={country} />
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default Zone;
