

import React from "react";
import HeadingTypography from "../Heading";
import Image from "next/image";
import ContainerWrapper from "../ContainerWrapper";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Our Story - Taksheela Institute",
  description:
    "Learn about the journey, vision, and mission of Taksheela Institute in shaping global education and empowering students to achieve academic excellence.",
};


export default function OurStory() {
  return (
    <ContainerWrapper>
      <div className=" py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1">
            <HeadingTypography content="Our Story" textAlign="left" />
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              Welcome to TIE, where dreams transform into global opportunities. As a leading study abroad consultancy, we believe education transcends borders. Our commitment is unlocking doors to international education, fostering academic and personal growth. With a focus on excellence, integrity, and a student-centric approach, we pave the way for global citizens ready to thrive in an interconnected world.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              Join us on a journey where education knows no boundaries, and the world becomes your campus.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full">
            <Image
              src="/images/ourstory.png"
              alt="Our Story Image"
              width={600}
              height={400}
              className="w-full h-auto object-cover "
            />
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}
