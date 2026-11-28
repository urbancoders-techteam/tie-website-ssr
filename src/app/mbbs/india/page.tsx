import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { FlipCardBox } from "@/components/FlipcardBox";

import HeadingTypography from "@/components/Heading";
import LetsStart from "@/components/immersion/LetsStart";
import { indianCollegeData, indianEligibilityData } from "@/constants/mbbs";
import { staticMetaDescriptions, staticMetaTitles } from "@/constants/metaDescriptions";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: staticMetaTitles.mbbsIndia,
  description: staticMetaDescriptions.mbbsIndia,
};

export default function IndiaMBBS() {
  return (
    <>
     <BreadcrumbSchema />
      <h1 className="sr-only">Top MBBS Colleges in India: Eligibility & Admissions</h1>
      <section className="bg-[#effdff] py-12 pt-10" id="indiaCriteria">
        <ContainerWrapper>
          <HeadingTypography
            content="Eligibility criteria for MBBS in India"
            textAlign="center"
          />
          <div className="flex justify-between align-middle items-center flex-wrap mt-10">
            {indianEligibilityData?.map((eligibility, index) => {
              return <FlipCardBox data={eligibility} imageSize={120} key={index} />;
            })}
          </div>
        </ContainerWrapper>
      </section>
      <section id="colleges">
      <ContainerWrapper className="py-12" >
        <HeadingTypography
          content="TOP 10 COLLEGES FOR MBBS IN INDIA"
          textAlign="center"
        />

        <div className="flex flex-wrap justify-around items-center align-middle gap-4 mt-10 ">
          {indianCollegeData?.map((college, index) => (
            <div
              key={index}
              className={`w-[230px] h-[250px] relative bg-white shadow-md cursor-pointer overflow-hidden group ${index === 0 ? "xl:rounded-tl-xl" : index === 4 ? "xl:rounded-tr-xl" : index === 5 ? "xl:rounded-bl-xl" : index === 9 ? "xl:rounded-br-xl" : ""}`}
            >
              <div className="relative h-[calc(100%-3.5rem)] w-full">
                <Image
                  src={college.image}
                  alt={college.title}
                  fill
                  sizes="230px"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-[#102c3b] text-white p-2 flex flex-col items-center justify-center transition-all duration-500 ease-in-out h-14 group-hover:h-full overflow-y-auto">
                <h3 className="text-lg font-medium text-center">
                  {college.title}
                </h3>

                <div className="mt-3 px-2">
                  {college.items && (
                    <p className="text-sm text-center mb-2">{college.items}</p>
                  )}
                  <ul className="list-disc ml-4 space-y-1">
                    {college.items?.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-white text-center font-poppins"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerWrapper>
      </section>

      <LetsStart />
    </>
  );
}
