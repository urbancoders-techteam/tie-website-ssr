
import Image from "next/image";
import React from "react";
import HeadingTypography from "../Heading";
import ContainerWrapper from "../ContainerWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Vision - Taksheela Institute",
  description:
    "Discover the mission and vision of Taksheela Institute, focused on delivering world-class education, fostering global opportunities, and empowering students through excellence and innovation.",
};


const VisionMission = () => {
  return (
    <section className="bg-[#E4FAFC] pt-16 pb-28">
      <ContainerWrapper >
        {/* Vision */}
        <div className="flex flex-col lg:flex-row  gap-12 mb-16">
          {/* Left: Image */}
          <div className="relative flex-1">
            <div className="absolute -left-16 top-10 w-36 h-36 rounded-full border-30 border-[#00999e] opacity-50 z-0" />
            <Image
              src="/images/vision.png" 
              alt="Vision"
              width={400}
              height={400}
              className="rounded-xl relative z-10"
            />
          </div>

          {/* Right: Content */}
          <div className="flex-3">
            <HeadingTypography content="Vision" />
            <p className="text-gray-800 text-lg leading-relaxed">
              To position Taksheela as the driving force behind India’s global education revolution—empowering  students and institutions to transcend borders, unlock world-class opportunities, and lead with global vision and cultural intelligence.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          {/* Left: Content */}
          <div className="flex-3">
            <HeadingTypography content="Mission" />
            <p className="text-gray-800 text-lg leading-relaxed">
             <ul className="list-disc pl-5">
              <li>To empower 5,000+ students with tailored mentorship and profile-building, achieving a 95% success rate in top global admissions.</li>
              <li>To design NEP-aligned internationalization strategies for 100+ institutions, elevating them to global academic standards.</li>
              <li>To deliver 200+ global immersion and exchange programs, shaping 10,000+ culturally agile, future-ready graduates.</li>
             </ul>
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative flex-1">
            <Image
              src="/images/mission.png"
              alt="Mission"
              width={400}
              height={400}
              className="rounded-xl relative z-10"
            />
            <div className="absolute -right-16 -bottom-16 w-36 h-36 rounded-full border-30 border-[#00999e]  opacity-50 z-0" />
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default VisionMission;
