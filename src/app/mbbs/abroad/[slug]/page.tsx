"use client";

import CustomAbroadHero from "@/components/custom-component/CustomAbroadHero";
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
import FAQSection from "@/components/campaign/FAQSection";
import LetsStart from "@/components/immersion/LetsStart";
import {
  getAbroadFullPageCopy,
  getAbroadOverviewMediaSrc,
} from "@/constants/abroad/abroadFullPageRegistry";
import { useParams, notFound } from "next/navigation";
import AbroadHeroHeadline from "@/components/mbbs/abroadCountries/AbroadHeroHeadline";

const COUNTRY_TITLE_BY_SLUG: Record<string, string> = {
  russia: "Russia",
  georgia: "Georgia",
  kazakhstan: "Kazakhstan",
  kyrgyzstan: "Kyrgyzstan",
  uzbekistan: "Uzbekistan",
};

function getShortDescription(text: string, maxLength = 260) {
  if (text.length <= maxLength) return text;
  const clipped = text.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(" ");
  if (lastSpace > 0) {
    return `${clipped.slice(0, lastSpace).trimEnd()}...`;
  }
  return `${clipped.trimEnd()}...`;
}

export default function Page() {
  const params = useParams();
  const slug = params?.slug as string;
  const slugLower = slug?.toLowerCase() ?? "";

  const abroadCopy = getAbroadFullPageCopy(slugLower);

  if (!abroadCopy) {
    notFound();
  }

  const overviewMediaSrc = getAbroadOverviewMediaSrc(slugLower);
  const countryTitle = COUNTRY_TITLE_BY_SLUG[slugLower] ?? slug;
  const country = { title: countryTitle, path: `/mbbs/abroad/${slugLower}` };
  const heroBackgroundImage = abroadCopy.hero.backgroundImage;
  const heroRightStat = abroadCopy.hero.rightStat ?? {
    value: "100000+",
    subtitle: `Students currently pursuing MBBS in ${countryTitle}`,
  };

  return (
    <>
      <CustomAbroadHero
        backgroundImage={heroBackgroundImage ?? undefined}
        backgroundImageAlt={`${countryTitle} university`}
        eyebrow={abroadCopy.hero.eyebrow}
        title={<AbroadHeroHeadline headline={abroadCopy.hero.headline} />}
        description={
          abroadCopy.hero.descriptionMaxLength
            ? getShortDescription(abroadCopy.hero.description, abroadCopy.hero.descriptionMaxLength)
            : abroadCopy.hero.description
        }
        primaryCta={{
          kind: "modal",
          text: abroadCopy.hero.cta.primaryText,
        }}
        secondaryCta={{
          kind: "link",
          text: abroadCopy.hero.cta.secondaryText,
          href: abroadCopy.hero.cta.secondaryHref,
        }}
        quickStats={abroadCopy.hero.quickStats}
        rightStat={heroRightStat}
        showRegisterForm
      />

      <OverviewAbroad country={country} overview={abroadCopy.overview} mediaImageSrc={overviewMediaSrc} />
      <QuickFactsAbroad country={country} facts={abroadCopy.quickFacts} section={abroadCopy.quickFactsSection} />
      <CommonFearsSection country={country} fears={abroadCopy.fears} />
      <WhyChooseMbbs country={country} content={abroadCopy.whyChooseMbbs} />
      <EligibilityCriteraAbroad country={country} eligibility={abroadCopy.eligibility} />
      <AdmissionProcessAbroad country={country} process={abroadCopy.admissionProcess} />
      <TopTenUniversityAbroad content={abroadCopy.topUniversities} />
      <CostBreakdownAbroad content={abroadCopy.cost} />
      <ConsiderBeforeAbroad content={abroadCopy.consider} />
      <RulesAndComplainsAbroad content={abroadCopy.regulatory} />
      <IntakePeriodAbroad content={abroadCopy.intake} />

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

      <LetsStart />
    </>
  );
}
