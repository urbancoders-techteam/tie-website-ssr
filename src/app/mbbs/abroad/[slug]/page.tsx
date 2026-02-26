// app/university/[slug]/page.tsx

'use client';
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { FlipCardBox } from "@/components/FlipcardBox";
import HeadingTypography from "@/components/Heading";
import About from "@/components/immersion/immersion-slug/about";
import LetsStart from "@/components/immersion/LetsStart";
import ModalTrigger from "@/components/ModalTrigger";
import { countryData } from "@/constants/mbbs";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";



export default function Page() {
  const params = useParams();
  const slug = params?.slug as string;

  const country = countryData.find((item) => {
    const pathSlug = item.path.split("/").pop();
    return pathSlug === slug;
  });

  if (!country) {
    return <div className="p-10 text-red-500">Country not found</div>;
  }

  return (
    <>
     <BreadcrumbSchema />
      <About item={country} />
      <ContainerWrapper>
        <HeadingTypography content="Aspect & Facts" textAlign="center" />
        <div className="flex flex-wrap justify-center gap-5 text-center mt-10">
          {country?.aspectAndFacts?.map((item, index) => {
            const normalizedItem = {
              ...item,
              image: item.image ?? item.Image ?? "",
            };
            return <FlipCardBox data={normalizedItem} key={index} />;
          })}
        </div>
      </ContainerWrapper>
      <div className="w-52 flex justify-center pb-10 mx-auto">
        <ModalTrigger text="BOOK YOUR FREE DEMO SESSION" />
      </div>
      <section className="bg-[#effdff] my-12 py-12" id="indiaCriteria">
        <ContainerWrapper>
          <HeadingTypography
            content={`TOP 10 COLLEGES FOR MBBS IN ${slug.toUpperCase()}`}
            textAlign="center"
          />
          <div className="flex flex-wrap justify-center items-center align-middle gap-4 mt-10 ">
            {country?.colleges?.map((college, index) => (
              <div
                key={index}
                className="w-[230px] h-[280px] relative p-4 bg-white shadow-md rounded-xl cursor-pointer overflow-hidden group"
              >
                <Image
                  src={college.Image}
                  alt={college.title}
                  width={150}
                  height={150}
                  className="rounded-[10%] mx-auto"
                />

                <div className="absolute bottom-0 left-0 w-full bg-[#0A9DA2] text-white rounded-b-xl p-2 flex flex-col justify-start items-center transition-all duration-500 ease-in-out h-14 group-hover:h-full overflow-hidden">
                  {/* Title always visible at top */}
                  <h3 className="text-lg font-medium text-center mb-2">
                    {college.title}
                  </h3>

                  {/* Scrollable content on hover */}
                  <div className="mt-1 px-2 overflow-y-auto max-h-[calc(100%-3rem)] w-full">
                    {college.items && !Array.isArray(college.items) ? (
                      <p className="text-sm text-center mb-2">
                        {college.items}
                      </p>
                    ) : (
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
                    )}
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
