import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { FlipCardBox } from "@/components/FlipcardBox";

import HeadingTypography from "@/components/Heading";
import LetsStart from "@/components/immersion/LetsStart";
import { BackRouteContainer } from "@/components/study-abroad/university-finder/ViewComponents";
import { indianCollegeData, indianEligibilityData } from "@/constants/mbbs";
import Image from "next/image";
import React from "react";



export default function IndiaMBBS() {
  return (
    <>
     <BreadcrumbSchema />
      <ContainerWrapper className="py-12">
        <BackRouteContainer path="/mbbs" title="MBBS Main Page" />
      </ContainerWrapper>
      <section className="bg-[#effdff] py-12" id="indiaCriteria">
        <ContainerWrapper>
          <HeadingTypography
            content="Eligibility criteria for MBBS in India"
            textAlign="center"
          />
          <div className="flex justify-between align-middle items-center flex-wrap mt-10">
            {indianEligibilityData?.map((eligibility, index) => {
              return <FlipCardBox data={eligibility} key={index} />;
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
              className="w-[230px] h-[280px] relative p-4 bg-white shadow-md rounded-xl cursor-pointer overflow-hidden group"
            >
              <Image
                src={college.image}
                alt={college.title}
                width={150}
                height={150}
                className="rounded-[10%] mx-auto"
              />

              <div className="absolute bottom-0 left-0 w-full bg-[#0A9DA2] text-white rounded-b-xl p-2 flex flex-col items-center justify-center transition-all duration-500 ease-in-out h-14 group-hover:h-full overflow-y-auto">
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

      <ContainerWrapper>
        <BackRouteContainer path="/mbbs" title="MBBS Main Page" />
      </ContainerWrapper>
      <LetsStart />
    </>
  );
}
