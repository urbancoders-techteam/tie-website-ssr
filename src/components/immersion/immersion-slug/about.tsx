/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import {ButtonComponent} from "@/components/study-abroad/university-finder/ViewComponents";
import Image from "next/image";
import React from "react";

const WHATSAPP_NUMBER = "919831241212";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function About({ item }: any) {
  const openWhatsApp = () => {
    if (typeof window !== "undefined") {
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    }
  };

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
            <div className="flex gap-4">
            <ButtonComponent
              text="Chat With Our Advisors"
              onClick={openWhatsApp}
            />
            {/* <ButtonComponent
                text="Book a Counselling Session"
                onClick={openWhatsApp}
              /> */}
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
