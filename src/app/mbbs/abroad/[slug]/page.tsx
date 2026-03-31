// app/university/[slug]/page.tsx

'use client';

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
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { FlipCardBox } from "@/components/FlipcardBox";
import HeadingTypography from "@/components/Heading";
import FAQSection from "@/components/campaign/FAQSection";
import LetsStart from "@/components/immersion/LetsStart";
import {
  russiaAbroadConsiderBeforeContent,
  russiaAbroadCompleteComparisonContent,
  russiaAbroadCostBreakdownContent,
  russiaAbroadFearsContent,
  russiaAbroadHeroFeaturedCount,
  russiaAbroadIntakePeriodContent,
  russiaAbroadMbbsSyllabusContent,
  russiaAbroadOurStoriesContent,
  russiaAbroadAccommodationClimateContent,
  russiaAbroadKeyFactsContent,
  russiaAbroadScholarshipsContent,
  russiaAbroadEducationLoanContent,
  russiaAbroadOverviewContent,
  russiaAbroadRegulatoryFrameworkContent,
  russiaAbroadTeachingMethodologyContent,
  russiaAbroadTopUniversitiesContent,
  russiaAbroadCareerOpportunitiesContent,
  russiaAbroadWhyChooseTaksheelaContent,
  russiaAbroadFaqPageContent,
} from "@/constants/abroad/russiaAbroadConstent";
import { countryData } from "@/constants/mbbs";
import Image from "next/image";
import { useParams } from "next/navigation";
import { imageBaseUrl } from "@/utils/config";
import About from "@/components/immersion/immersion-slug/about";
import ModalTrigger from "@/components/ModalTrigger";

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


  const isRussia = slug?.toLowerCase() === "russia";
  const russiaHero = isRussia
    ? russiaAbroadHeroFeaturedCount(country.colleges?.length ?? 0)
    : undefined;
  const russiaOverview = isRussia ? russiaAbroadOverviewContent : undefined;
  const russiaFears = isRussia ? russiaAbroadFearsContent : undefined;

  const mephi = `${imageBaseUrl}mbbsCollege/russia/campaign/universities/clg_images/mephi.jpg`;

  return (
    <>
      {isRussia ? (
        <>
          <AbroadHeroSection country={country} hero={russiaHero} />

          <OverviewAbroad
            country={country}
            overview={russiaOverview}
            mediaImageSrc={mephi}
          />
          <QuickFactsAbroad country={country} />
          <CommonFearsSection country={country} fears={russiaFears} />
          <WhyChooseMbbs country={country} />
          <EligibilityCriteraAbroad country={country} />
          <AdmissionProcessAbroad country={country} />
          <TopTenUniversityAbroad content={russiaAbroadTopUniversitiesContent} />
          <CostBreakdownAbroad content={russiaAbroadCostBreakdownContent} />
          <ConsiderBeforeAbroad content={russiaAbroadConsiderBeforeContent} />
          <RulesAndComplainsAbroad content={russiaAbroadRegulatoryFrameworkContent} />
          <IntakePeriodAbroad content={russiaAbroadIntakePeriodContent} />
          <TeachingMethodologyAbroad
            content={russiaAbroadTeachingMethodologyContent}
            sectionId="teaching-methodology"
            headingId="teaching-methodology-heading"
            carouselAriaLabel="Teaching methodology"
          />
          <MbbsSylabusAbroad content={russiaAbroadMbbsSyllabusContent} />
          <CompleteComparissionAbroad content={russiaAbroadCompleteComparisonContent} />
          <AccomodationAndClimateAbroad content={russiaAbroadAccommodationClimateContent} />
          <OurStoriesAbroad content={russiaAbroadOurStoriesContent} />
          <KeyFactsAbroad content={russiaAbroadKeyFactsContent} />
          <ScholarshipsAbroad content={russiaAbroadScholarshipsContent} />
          <EducationLoanAbroad content={russiaAbroadEducationLoanContent} />
          <TeachingMethodologyAbroad
            content={russiaAbroadCareerOpportunitiesContent}
            sectionId="career-opportunities-abroad"
            headingId="career-opportunities-heading"
            carouselAriaLabel="Career opportunities"
          />
          <WhyChooseTaksheelaAbroad content={russiaAbroadWhyChooseTaksheelaContent} />
          <FAQSection items={russiaAbroadFaqPageContent.items} variant="abroad" />
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
                      <h3 className="text-lg font-medium text-center mb-2">
                        {college.title}
                      </h3>

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
        </>
      )}

      <LetsStart />
    </>
  );
}
