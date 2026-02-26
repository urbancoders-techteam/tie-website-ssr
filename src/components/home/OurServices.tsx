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
    <>
      <ContainerWrapper className="py-10 md:block hidden">
        <HeadingTypography content="Our Services" textAlign="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 mt-10 md:mx-20">
          {ourserviceshomedata.map((item, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative mx-auto h-64 w-lg  overflow-hidden flex flex-row  gap-0.5  ${
                  isEven ? "" : "flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div className="w-1/2 h-full relative rounded-md shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-center  rounded-md bg-gradient-to-r from-gray-400 via-gray-400 to-gray-300"
                  />
                </div>

                {/* Text Section */}
                <div
                  className="w-1/2 h-full relative flex flex-col items-center justify-evenly text-center p-4 rounded-md text-white"
                  style={{
                    backgroundImage: `url(${item.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay to add tint */}
                  <div className="absolute inset-0 bg-[#00999e]/90  rounded-md z-0" />

                  {/* Content above the overlay */}
                  <div className="relative z-10 flex flex-col items-center justify-between h-full">
                    <h3 className="text-xl font-bold mt-24">{item.title}</h3>
                    <Link
                      href={item.path}
                      className="bg-white text-[#00999e] hover:bg-[#5CD2D6] font-semibold px-6 py-2 rounded transition-all"
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

      <ContainerWrapper className="py-10 md:hidden block">
        <HeadingTypography content="Our Services" textAlign="center" />

        <div className="flex flex-col gap-8 mt-10">
          {ourserviceshomedata.map((item, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row ${
                  isEven ? "" : "md:flex-row-reverse"
                } items-center justify-between gap-6 rounded-md shadow-md`}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-center  rounded-md bg-gradient-to-r from-gray-400 via-gray-400 to-gray-300"
                  />
                </div>

                {/* Text Section */}
                <div
                  className="relative w-full md:w-1/2 h-64 flex items-center justify-center text-white rounded-md px-6"
                  style={{
                    backgroundImage: `url(${item.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#00999e]/90 rounded-md z-0" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-4 text-center">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <Link
                      href={item.path}
                      className="bg-white text-[#00999e] hover:bg-[#5CD2D6] font-semibold px-6 py-2 rounded transition-all"
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
    </>
  );
}
