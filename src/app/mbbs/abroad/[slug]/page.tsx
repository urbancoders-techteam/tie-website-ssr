// app/university/[slug]/page.tsx

"use client";

import AbroadHeroSection from "@/components/mbbs/abroadCountries/AbroadHeroSection";
import CommonFearsSection from "@/components/mbbs/abroadCountries/CommonFearsSection";
import AdmissionProcessAbroad from "@/components/mbbs/abroadCountries/AdmissionProcessAbroad";
import EligibilityCriteraAbroad from "@/components/mbbs/abroadCountries/EligibilityCriteraAbroad";
import IntakePeriodAbroad from "@/components/mbbs/abroadCountries/IntakePeriodAbroad";
import OverviewAbroad from "@/components/mbbs/abroadCountries/OverviewAbroad";
import QuickFactsAbroad from "@/components/mbbs/abroadCountries/QuickFactsAbroad";
import ConsiderBeforeAbroad from "@/components/mbbs/abroadCountries/ConsiderBeforeAbroad";
import CompleteComparissionAbroad from "@/components/mbbs/abroadCountries/CompleteComparissionAbroad";
import CostBreakdownAbroad from "@/components/mbbs/abroadCountries/CostBreakdownAbroad";
import RulesAndComplainsAbroad from "@/components/mbbs/abroadCountries/RulesAndComplainsAbroad";
import MbbsSylabusAbroad from "@/components/mbbs/abroadCountries/MbbsSylabusAbroad";
import OurStoriesAbroad from "@/components/mbbs/abroadCountries/OurStoriesAbroad";
import AccomodationAndClimateAbroad from "@/components/mbbs/abroadCountries/AccomodationAndClimateAbroad";
import KeyFactsAbroad from "@/components/mbbs/abroadCountries/KeyFactsAbroad";
import ScholarshipsAbroad from "@/components/mbbs/abroadCountries/ScholarshipsAbroad";
import EducationLoanAbroad from "@/components/mbbs/abroadCountries/EducationLoanAbroad";
import TeachingMethodologyAbroad from "@/components/mbbs/abroadCountries/TeachingMethodologyAbroad";
import TopTenUniversityAbroad from "@/components/mbbs/abroadCountries/TopTenUniversityAbroad";
import WhyChooseMbbs from "@/components/mbbs/abroadCountries/WhyChooseMbbs";
import WhyChooseTaksheelaAbroad from "@/components/mbbs/abroadCountries/WhyChooseTaksheelaAbroad";
import AbroadMbbsCtaBanner from "@/components/mbbs/abroadCountries/AbroadMbbsCtaBanner";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { FlipCardBox } from "@/components/FlipcardBox";
import HeadingTypography from "@/components/Heading";
import FAQSection from "@/components/campaign/FAQSection";
import LetsStart from "@/components/immersion/LetsStart";
import {
  getAbroadFullPageCopy,
  getAbroadOverviewMediaSrc,
} from "@/constants/abroad/abroadFullPageRegistry";
import { countryData } from "@/constants/mbbs";
import Image from "next/image";
import { useParams } from "next/navigation";
import About from "@/components/immersion/immersion-slug/about";
import ModalTrigger from "@/components/ModalTrigger";

export default function Page() {
  const params = useParams();
  const slug = params?.slug as string;
  const slugLower = slug?.toLowerCase() ?? "";

  const country = countryData.find((item) => {
    const pathSlug = item.path.split("/").pop();
    return pathSlug === slug;
  });

  if (!country) {
    return <div className="p-10 text-red-500">Country not found</div>;
  }

  const abroadCopy = getAbroadFullPageCopy(slugLower);
  const overviewMediaSrc = getAbroadOverviewMediaSrc(slugLower);

  return (
    <>
      {abroadCopy ? (
        <>
          <AbroadHeroSection country={country} hero={abroadCopy.hero} />

          <OverviewAbroad
            country={country}
            overview={abroadCopy.overview}
            mediaImageSrc={overviewMediaSrc}
          />
          <QuickFactsAbroad country={country} facts={abroadCopy.quickFacts} />
          <CommonFearsSection country={country} fears={abroadCopy.fears} />
          <WhyChooseMbbs country={country} content={abroadCopy.whyChooseMbbs} />
          <EligibilityCriteraAbroad country={country} eligibility={abroadCopy.eligibility} />
          <AdmissionProcessAbroad country={country} process={abroadCopy.admissionProcess} />
          <TopTenUniversityAbroad content={abroadCopy.topUniversities} />
          <CostBreakdownAbroad content={abroadCopy.cost} />
          <ConsiderBeforeAbroad content={abroadCopy.consider} />
          <RulesAndComplainsAbroad content={abroadCopy.regulatory} />
          <IntakePeriodAbroad content={abroadCopy.intake} />

          {/* ------------------- Teaching methodology section ------------------- */}
          <TeachingMethodologyAbroad
            content={abroadCopy.teaching}
            sectionId="teaching-methodology"
            headingId="teaching-methodology-heading"
            carouselAriaLabel="Teaching methodology"
          />

          <MbbsSylabusAbroad content={abroadCopy.syllabus} />
          <CompleteComparissionAbroad content={abroadCopy.comparison} />
          <AccomodationAndClimateAbroad content={abroadCopy.accommodation} />
          <OurStoriesAbroad content={abroadCopy.stories} sectionSlug={slugLower} />
          <KeyFactsAbroad content={abroadCopy.keyFacts} sectionSlug={slugLower} />
          <ScholarshipsAbroad content={abroadCopy.scholarships} sectionSlug={slugLower} />
          <EducationLoanAbroad content={abroadCopy.educationLoan} sectionSlug={slugLower} />

          {/* ------------------- Career opportunities section ------------------- */}
          <TeachingMethodologyAbroad
            content={abroadCopy.career}
            sectionId="career-opportunities-abroad"
            headingId="career-opportunities-heading"
            carouselAriaLabel="Career opportunities"
          />

          <WhyChooseTaksheelaAbroad content={abroadCopy.whyTaksheela} sectionSlug={slugLower} />
          <AbroadMbbsCtaBanner
            content={abroadCopy.ctaBanner}
            sectionSlug={slugLower}
            redirectPath={`/mbbs/abroad/${slug}`}
          />
          <FAQSection items={abroadCopy.faq.items} variant="abroad" sectionSlug={slugLower} />
        </>
      ) : (
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
                      <h3 className="text-lg font-medium text-center mb-2">{college.title}</h3>

                      <div className="mt-1 px-2 overflow-y-auto max-h-[calc(100%-3rem)] w-full">
                        {college.items && !Array.isArray(college.items) ? (
                          <p className="text-sm text-center mb-2">{college.items}</p>
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
        </>
      )}

      <LetsStart />
    </>
  );
}
