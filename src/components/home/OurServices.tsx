import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import { ourserviceshomedata } from "@/constants/home";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Taksheela Institute",
  description:
    "Discover the wide range of educational services offered by Taksheela Institute, including test prep, study abroad consulting, global partnerships, and student mobility support.",
};


export default function OurServices() {
  return (
    <ContainerWrapper className="py-6 md:py-10">
      <HeadingTypography content="Our Services" textAlign="center" />
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-x-16 md:gap-y-5 mt-6 md:mt-10 md:mx-20">
        {ourserviceshomedata.map((item, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`relative overflow-hidden flex flex-col md:flex-row gap-0.5 rounded-md shadow-md
                min-h-0 h-auto md:h-64 ${isEven ? "" : "md:flex-row-reverse"}`}
            >
              {/* Image Section */}
              <div className="relative w-full h-28 md:h-full md:w-1/2 rounded-t-md md:rounded-l-md md:rounded-t-none shrink-0 overflow-hidden bg-gray-200">
                <Image
                  fill
                  loading="lazy"
                  alt={item.title}
                  src={item.image}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 45vw, 400px"
                  className="object-cover object-center rounded-t-md md:rounded-l-md md:rounded-t-none bg-gradient-to-r from-gray-400 via-gray-400 to-gray-300"
                />
              </div>

              {/* Text Section */}
              <div
                className="relative w-full min-h-[100px] md:min-h-0 md:h-full md:w-1/2 flex flex-col items-center justify-center text-center p-2 md:p-4 rounded-b-md md:rounded-r-md md:rounded-b-none text-white"
                style={{
                  backgroundImage: `url(${item.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-[#00999e]/90 rounded-b-md md:rounded-r-md md:rounded-b-none z-0" />
                <div className="relative z-10 flex flex-col items-center justify-center gap-1 md:gap-2 flex-1 w-full">
                  <h3 className="text-xs sm:text-sm md:text-xl font-bold leading-tight line-clamp-2 md:line-clamp-none md:mt-0">
                    {item.title}
                  </h3>
                  <Link
                    href={item.path}
                    className="bg-white text-[#00999e] hover:bg-[#5CD2D6] font-semibold text-[10px] sm:text-xs md:text-base px-2 py-1 sm:px-3 sm:py-1.5 md:px-6 md:py-2 rounded transition-all whitespace-nowrap"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ContainerWrapper>
  );
}
