import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { FlipCardBox } from "@/components/FlipcardBox";
import HeadingTypography from "@/components/Heading";
import LetsStart from "@/components/immersion/LetsStart";
import MbbsTabs from "@/components/mbbs/MbbsTabs";
import Rules from "@/components/mbbs/Rules";
import { abroadEligibilityAbroadData } from "@/constants/mbbs";
import { staticMetaDescriptions } from "@/constants/metaDescriptions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: staticMetaDescriptions.mbbsAbroad,
};

export default function Abroad() {
  return (
    <>
     <BreadcrumbSchema />
      <section id="abroadCriteria" className="py-12 pt-10">
        <ContainerWrapper>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-[#00999e] text-center mb-4">
            Study MBBS Abroad — Admissions, Eligibility & Guide
          </h1>
          <HeadingTypography
            content="Eligibility Criteria for MBBS Abroad"
            textAlign="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-items-center text-center">
            {abroadEligibilityAbroadData?.map((eligibility, index) => (
              <FlipCardBox data={eligibility} key={index} />
            ))}
          </div>
        </ContainerWrapper>
      </section>
      <MbbsTabs />
      <Rules/>
      <LetsStart />
    </>
  );
}
