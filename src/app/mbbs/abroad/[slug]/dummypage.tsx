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
// import Image from "next/image";
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
         
        </ContainerWrapper>
      </section>

      <LetsStart />
    </>
  );
}
