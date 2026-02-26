/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import Image from "next/image";
import React from "react";

export default function About({ item }: any) {
  return (
    <section className="bg-[#effdff] text-[#525560] my-8">
      <ContainerWrapper>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full h-64 md:h-96 overflow-hidden shadow-lg">
            <Image
              src={item?.image}
              alt={item?.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title + HTML Description */}
          <div className="space-y-6">
            <HeadingTypography content={item?.title} />
            <div
              className="text-lg leading-relaxed text-gray-700 space-y-4"
              dangerouslySetInnerHTML={{ __html: item?.content }}
            />
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
