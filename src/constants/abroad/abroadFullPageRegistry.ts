/**
 * Single registry for `/mbbs/abroad/[slug]` full-layout pages.
 * Add a new country: implement copy in `*AbroadConstent.ts`, add a builder below, and add `overviewMedia` in `ABROAD_OVERVIEW_MEDIA_SRC`.
 */

import { imageBaseUrl } from "@/utils/config";
import type {
  AbroadAdmissionProcessContent,
  AbroadCompleteComparisonContent,
  AbroadConsiderBeforeContent,
  AbroadCostBreakdownContent,
  AbroadEligibilityContent,
  AbroadFaqPageContent,
  AbroadFearsContent,
  AbroadHeroContent,
  AbroadIntakePeriodContent,
  AbroadKeyFactsContent,
  AbroadMbbsSyllabusContent,
  AbroadOurStoriesContent,
  AbroadOverviewContent,
  AbroadQuickFactItem,
  AbroadQuickFactsSectionContent,
  AbroadRegulatoryFrameworkContent,
  AbroadScholarshipsContent,
  AbroadTeachingMethodologyContent,
  AbroadTopUniversitiesContent,
  AbroadWhyChooseMbbsContent,
  AbroadWhyChooseTaksheelaContent,
  AbroadAccommodationClimateContent,
  AbroadEducationLoanContent,
  AbroadCtaBannerContent,
} from "@/constants/abroad/russiaAbroadConstent";
import {
  russiaAbroadAdmissionProcessContent,
  russiaAbroadCompleteComparisonContent,
  russiaAbroadConsiderBeforeContent,
  russiaAbroadCostBreakdownContent,
  russiaAbroadEligibilityContent,
  russiaAbroadFaqPageContent,
  russiaAbroadFearsContent,
  russiaAbroadHeroContent,
  russiaAbroadIntakePeriodContent,
  russiaAbroadKeyFactsContent,
  russiaAbroadMbbsSyllabusContent,
  russiaAbroadOurStoriesContent,
  russiaAbroadOverviewContent,
  russiaAbroadRegulatoryFrameworkContent,
  russiaAbroadScholarshipsContent,
  russiaAbroadTeachingMethodologyContent,
  russiaAbroadTopUniversitiesContent,
  russiaAbroadCareerOpportunitiesContent,
  russiaAbroadWhyChooseTaksheelaContent,
  russiaAbroadQuickFactsContent,
  russiaAbroadQuickFactsSectionContent,
  russiaAbroadWhyChooseMbbsContent,
  russiaAbroadAccommodationClimateContent,
  russiaAbroadEducationLoanContent,
  russiaAbroadCtaBannerContent,
} from "@/constants/abroad/russiaAbroadConstent";
import {
  georgiaAbroadAdmissionProcessContent,
  georgiaAbroadCompleteComparisonContent,
  georgiaAbroadConsiderBeforeContent,
  georgiaAbroadCostBreakdownContent,
  georgiaAbroadEligibilityContent,
  georgiaAbroadFaqPageContent,
  georgiaAbroadFearsContent,
  georgiaAbroadHeroContent,
  georgiaAbroadIntakePeriodContent,
  georgiaAbroadKeyFactsContent,
  georgiaAbroadMbbsSyllabusContent,
  georgiaAbroadOurStoriesContent,
  georgiaAbroadOverviewContent,
  georgiaAbroadRegulatoryFrameworkContent,
  georgiaAbroadScholarshipsContent,
  georgiaAbroadTeachingMethodologyContent,
  georgiaAbroadTopUniversitiesContent,
  georgiaAbroadCareerOpportunitiesContent,
  georgiaAbroadWhyChooseTaksheelaContent,
  georgiaAbroadQuickFactsContent,
  georgiaAbroadQuickFactsSectionContent,
  georgiaAbroadWhyChooseMbbsContent,
  georgiaAbroadAccommodationClimateContent,
  georgiaAbroadEducationLoanContent,
  georgiaAbroadCtaBannerContent,
} from "@/constants/abroad/georgiaAbroadConstent";
import {
  kazakhstanAbroadAdmissionProcessContent,
  kazakhstanAbroadCompleteComparisonContent,
  kazakhstanAbroadConsiderBeforeContent,
  kazakhstanAbroadCostBreakdownContent,
  kazakhstanAbroadEligibilityContent,
  kazakhstanAbroadFaqPageContent,
  kazakhstanAbroadFearsContent,
  kazakhstanAbroadHeroContent,
  kazakhstanAbroadIntakePeriodContent,
  kazakhstanAbroadKeyFactsContent,
  kazakhstanAbroadMbbsSyllabusContent,
  kazakhstanAbroadOurStoriesContent,
  kazakhstanAbroadOverviewContent,
  kazakhstanAbroadRegulatoryFrameworkContent,
  kazakhstanAbroadScholarshipsContent,
  kazakhstanAbroadTeachingMethodologyContent,
  kazakhstanAbroadTopUniversitiesContent,
  kazakhstanAbroadCareerOpportunitiesContent,
  kazakhstanAbroadWhyChooseTaksheelaContent,
  kazakhstanAbroadQuickFactsContent,
  kazakhstanAbroadQuickFactsSectionContent,
  kazakhstanAbroadWhyChooseMbbsContent,
  kazakhstanAbroadAccommodationClimateContent,
  kazakhstanAbroadEducationLoanContent,
  kazakhstanAbroadCtaBannerContent,
} from "@/constants/abroad/kazakhstanAbroadConstent";
import {
  uzbekistanAbroadAdmissionProcessContent,
  uzbekistanAbroadCompleteComparisonContent,
  uzbekistanAbroadConsiderBeforeContent,
  uzbekistanAbroadCostBreakdownContent,
  uzbekistanAbroadEligibilityContent,
  uzbekistanAbroadFaqPageContent,
  uzbekistanAbroadFearsContent,
  uzbekistanAbroadHeroContent,
  uzbekistanAbroadIntakePeriodContent,
  uzbekistanAbroadKeyFactsContent,
  uzbekistanAbroadMbbsSyllabusContent,
  uzbekistanAbroadOurStoriesContent,
  uzbekistanAbroadOverviewContent,
  uzbekistanAbroadRegulatoryFrameworkContent,
  uzbekistanAbroadScholarshipsContent,
  uzbekistanAbroadTeachingMethodologyContent,
  uzbekistanAbroadTopUniversitiesContent,
  uzbekistanAbroadCareerOpportunitiesContent,
  uzbekistanAbroadWhyChooseTaksheelaContent,
  uzbekistanAbroadQuickFactsContent,
  uzbekistanAbroadQuickFactsSectionContent,
  uzbekistanAbroadWhyChooseMbbsContent,
  uzbekistanAbroadAccommodationClimateContent,
  uzbekistanAbroadEducationLoanContent,
  uzbekistanAbroadCtaBannerContent,
} from "@/constants/abroad/uzbekistanAbroadConstent";
import {
  kyrgyzstanAbroadAdmissionProcessContent,
  kyrgyzstanAbroadCompleteComparisonContent,
  kyrgyzstanAbroadConsiderBeforeContent,
  kyrgyzstanAbroadCostBreakdownContent,
  kyrgyzstanAbroadEligibilityContent,
  kyrgyzstanAbroadFaqPageContent,
  kyrgyzstanAbroadFearsContent,
  kyrgyzstanAbroadHeroContent,
  kyrgyzstanAbroadIntakePeriodContent,
  kyrgyzstanAbroadKeyFactsContent,
  kyrgyzstanAbroadMbbsSyllabusContent,
  kyrgyzstanAbroadOurStoriesContent,
  kyrgyzstanAbroadOverviewContent,
  kyrgyzstanAbroadRegulatoryFrameworkContent,
  kyrgyzstanAbroadScholarshipsContent,
  kyrgyzstanAbroadTeachingMethodologyContent,
  kyrgyzstanAbroadTopUniversitiesContent,
  kyrgyzstanAbroadCareerOpportunitiesContent,
  kyrgyzstanAbroadWhyChooseTaksheelaContent,
  kyrgyzstanAbroadQuickFactsContent,
  kyrgyzstanAbroadQuickFactsSectionContent,
  kyrgyzstanAbroadWhyChooseMbbsContent,
  kyrgyzstanAbroadAccommodationClimateContent,
  kyrgyzstanAbroadEducationLoanContent,
  kyrgyzstanAbroadCtaBannerContent,
} from "@/constants/abroad/kyrgyzstanAbroadConstent";

/** All section payloads passed to the “full stack” abroad page for one country. */
export type AbroadFullPageCopy = {
  hero: AbroadHeroContent;
  overview: AbroadOverviewContent;
  fears: AbroadFearsContent;
  topUniversities: AbroadTopUniversitiesContent;
  cost: AbroadCostBreakdownContent;
  consider: AbroadConsiderBeforeContent;
  regulatory: AbroadRegulatoryFrameworkContent;
  intake: AbroadIntakePeriodContent;
  teaching: AbroadTeachingMethodologyContent;
  syllabus: AbroadMbbsSyllabusContent;
  comparison: AbroadCompleteComparisonContent;
  accommodation: AbroadAccommodationClimateContent;
  stories: AbroadOurStoriesContent;
  keyFacts: AbroadKeyFactsContent;
  scholarships: AbroadScholarshipsContent;
  educationLoan: AbroadEducationLoanContent;
  career: AbroadTeachingMethodologyContent;
  whyTaksheela: AbroadWhyChooseTaksheelaContent;
  faq: AbroadFaqPageContent;
  quickFactsSection: AbroadQuickFactsSectionContent;
  quickFacts: AbroadQuickFactItem[];
  whyChooseMbbs: AbroadWhyChooseMbbsContent;
  eligibility: AbroadEligibilityContent;
  admissionProcess: AbroadAdmissionProcessContent;
  /** Red strip CTA before FAQ — copy is per-country in `*AbroadConstent`. */
  ctaBanner: AbroadCtaBannerContent;
};

function russiaFullPage(): AbroadFullPageCopy {
  return {
    hero: withRegistryHeroMedia("russia", russiaAbroadHeroContent),
    overview: russiaAbroadOverviewContent,
    fears: russiaAbroadFearsContent,
    topUniversities: russiaAbroadTopUniversitiesContent,
    cost: russiaAbroadCostBreakdownContent,
    consider: russiaAbroadConsiderBeforeContent,
    regulatory: russiaAbroadRegulatoryFrameworkContent,
    intake: russiaAbroadIntakePeriodContent,
    teaching: russiaAbroadTeachingMethodologyContent,
    syllabus: russiaAbroadMbbsSyllabusContent,
    comparison: russiaAbroadCompleteComparisonContent,
    accommodation: russiaAbroadAccommodationClimateContent,
    stories: russiaAbroadOurStoriesContent,
    keyFacts: russiaAbroadKeyFactsContent,
    scholarships: russiaAbroadScholarshipsContent,
    educationLoan: russiaAbroadEducationLoanContent,
    career: russiaAbroadCareerOpportunitiesContent,
    whyTaksheela: russiaAbroadWhyChooseTaksheelaContent,
    faq: russiaAbroadFaqPageContent,
    quickFactsSection: russiaAbroadQuickFactsSectionContent,
    quickFacts: russiaAbroadQuickFactsContent,
    whyChooseMbbs: russiaAbroadWhyChooseMbbsContent,
    eligibility: russiaAbroadEligibilityContent,
    admissionProcess: russiaAbroadAdmissionProcessContent,
    ctaBanner: russiaAbroadCtaBannerContent,
  };
}

function georgiaFullPage(): AbroadFullPageCopy {
  return {
    hero: withRegistryHeroMedia("georgia", georgiaAbroadHeroContent),
    overview: georgiaAbroadOverviewContent,
    fears: georgiaAbroadFearsContent,
    topUniversities: georgiaAbroadTopUniversitiesContent,
    cost: georgiaAbroadCostBreakdownContent,
    consider: georgiaAbroadConsiderBeforeContent,
    regulatory: georgiaAbroadRegulatoryFrameworkContent,
    intake: georgiaAbroadIntakePeriodContent,
    teaching: georgiaAbroadTeachingMethodologyContent,
    syllabus: georgiaAbroadMbbsSyllabusContent,
    comparison: georgiaAbroadCompleteComparisonContent,
    accommodation: georgiaAbroadAccommodationClimateContent,
    stories: georgiaAbroadOurStoriesContent,
    keyFacts: georgiaAbroadKeyFactsContent,
    scholarships: georgiaAbroadScholarshipsContent,
    educationLoan: georgiaAbroadEducationLoanContent,
    career: georgiaAbroadCareerOpportunitiesContent,
    whyTaksheela: georgiaAbroadWhyChooseTaksheelaContent,
    faq: georgiaAbroadFaqPageContent,
    quickFactsSection: georgiaAbroadQuickFactsSectionContent,
    quickFacts: georgiaAbroadQuickFactsContent,
    whyChooseMbbs: georgiaAbroadWhyChooseMbbsContent,
    eligibility: georgiaAbroadEligibilityContent,
    admissionProcess: georgiaAbroadAdmissionProcessContent,
    ctaBanner: georgiaAbroadCtaBannerContent,
  };
}

function kazakhstanFullPage(): AbroadFullPageCopy {
  return {
    hero: withRegistryHeroMedia("kazakhstan", kazakhstanAbroadHeroContent),
    overview: kazakhstanAbroadOverviewContent,
    fears: kazakhstanAbroadFearsContent,
    topUniversities: kazakhstanAbroadTopUniversitiesContent,
    cost: kazakhstanAbroadCostBreakdownContent,
    consider: kazakhstanAbroadConsiderBeforeContent,
    regulatory: kazakhstanAbroadRegulatoryFrameworkContent,
    intake: kazakhstanAbroadIntakePeriodContent,
    teaching: kazakhstanAbroadTeachingMethodologyContent,
    syllabus: kazakhstanAbroadMbbsSyllabusContent,
    comparison: kazakhstanAbroadCompleteComparisonContent,
    accommodation: kazakhstanAbroadAccommodationClimateContent,
    stories: kazakhstanAbroadOurStoriesContent,
    keyFacts: kazakhstanAbroadKeyFactsContent,
    scholarships: kazakhstanAbroadScholarshipsContent,
    educationLoan: kazakhstanAbroadEducationLoanContent,
    career: kazakhstanAbroadCareerOpportunitiesContent,
    whyTaksheela: kazakhstanAbroadWhyChooseTaksheelaContent,
    faq: kazakhstanAbroadFaqPageContent,
    quickFactsSection: kazakhstanAbroadQuickFactsSectionContent,
    quickFacts: kazakhstanAbroadQuickFactsContent,
    whyChooseMbbs: kazakhstanAbroadWhyChooseMbbsContent,
    eligibility: kazakhstanAbroadEligibilityContent,
    admissionProcess: kazakhstanAbroadAdmissionProcessContent,
    ctaBanner: kazakhstanAbroadCtaBannerContent,
  };
}

function uzbekistanFullPage(): AbroadFullPageCopy {
  return {
    hero: withRegistryHeroMedia("uzbekistan", uzbekistanAbroadHeroContent),
    overview: uzbekistanAbroadOverviewContent,
    fears: uzbekistanAbroadFearsContent,
    topUniversities: uzbekistanAbroadTopUniversitiesContent,
    cost: uzbekistanAbroadCostBreakdownContent,
    consider: uzbekistanAbroadConsiderBeforeContent,
    regulatory: uzbekistanAbroadRegulatoryFrameworkContent,
    intake: uzbekistanAbroadIntakePeriodContent,
    teaching: uzbekistanAbroadTeachingMethodologyContent,
    syllabus: uzbekistanAbroadMbbsSyllabusContent,
    comparison: uzbekistanAbroadCompleteComparisonContent,
    accommodation: uzbekistanAbroadAccommodationClimateContent,
    stories: uzbekistanAbroadOurStoriesContent,
    keyFacts: uzbekistanAbroadKeyFactsContent,
    scholarships: uzbekistanAbroadScholarshipsContent,
    educationLoan: uzbekistanAbroadEducationLoanContent,
    career: uzbekistanAbroadCareerOpportunitiesContent,
    whyTaksheela: uzbekistanAbroadWhyChooseTaksheelaContent,
    faq: uzbekistanAbroadFaqPageContent,
    quickFactsSection: uzbekistanAbroadQuickFactsSectionContent,
    quickFacts: uzbekistanAbroadQuickFactsContent,
    whyChooseMbbs: uzbekistanAbroadWhyChooseMbbsContent,
    eligibility: uzbekistanAbroadEligibilityContent,
    admissionProcess: uzbekistanAbroadAdmissionProcessContent,
    ctaBanner: uzbekistanAbroadCtaBannerContent,
  };
}

function kyrgyzstanFullPage(): AbroadFullPageCopy {
  return {
    hero: withRegistryHeroMedia("kyrgyzstan", kyrgyzstanAbroadHeroContent),
    overview: kyrgyzstanAbroadOverviewContent,
    fears: kyrgyzstanAbroadFearsContent,
    topUniversities: kyrgyzstanAbroadTopUniversitiesContent,
    cost: kyrgyzstanAbroadCostBreakdownContent,
    consider: kyrgyzstanAbroadConsiderBeforeContent,
    regulatory: kyrgyzstanAbroadRegulatoryFrameworkContent,
    intake: kyrgyzstanAbroadIntakePeriodContent,
    teaching: kyrgyzstanAbroadTeachingMethodologyContent,
    syllabus: kyrgyzstanAbroadMbbsSyllabusContent,
    comparison: kyrgyzstanAbroadCompleteComparisonContent,
    accommodation: kyrgyzstanAbroadAccommodationClimateContent,
    stories: kyrgyzstanAbroadOurStoriesContent,
    keyFacts: kyrgyzstanAbroadKeyFactsContent,
    scholarships: kyrgyzstanAbroadScholarshipsContent,
    educationLoan: kyrgyzstanAbroadEducationLoanContent,
    career: kyrgyzstanAbroadCareerOpportunitiesContent,
    whyTaksheela: kyrgyzstanAbroadWhyChooseTaksheelaContent,
    faq: kyrgyzstanAbroadFaqPageContent,
    quickFactsSection: kyrgyzstanAbroadQuickFactsSectionContent,
    quickFacts: kyrgyzstanAbroadQuickFactsContent,
    whyChooseMbbs: kyrgyzstanAbroadWhyChooseMbbsContent,
    eligibility: kyrgyzstanAbroadEligibilityContent,
    admissionProcess: kyrgyzstanAbroadAdmissionProcessContent,
    ctaBanner: kyrgyzstanAbroadCtaBannerContent,
  };
}

const FULL_PAGE_BY_SLUG: Record<string, () => AbroadFullPageCopy> = {
  russia: russiaFullPage,
  georgia: georgiaFullPage,
  kazakhstan: kazakhstanFullPage,
  uzbekistan: uzbekistanFullPage,
  kyrgyzstan: kyrgyzstanFullPage,
};

/** Hero media keyed by slug for full-layout abroad pages. */
const ABROAD_HERO_MEDIA_SRC: Record<string, string> = {
  russia: `${imageBaseUrl}mbbsCollege/russia/BgRussia-abroad.jpg`,
  georgia: `${imageBaseUrl}mbbsCollege/georgia/BgGeorgia-abroad.jpg`,
  kazakhstan: `${imageBaseUrl}mbbsCollege/kazakhstan/BgKazakhstan-abroad.jpg`,
  uzbekistan: `${imageBaseUrl}mbbsCollege/uzbekistan/BgUzbekistan-abroad.jpg`,
  kyrgyzstan: `${imageBaseUrl}mbbsCollege/kyrgyzstan/BgKyrgystan-abroad.jpg`,
};

function withRegistryHeroMedia(slug: string, hero: AbroadHeroContent): AbroadHeroContent {
  const backgroundImage = ABROAD_HERO_MEDIA_SRC[slug.toLowerCase()];
  return backgroundImage ? { ...hero, backgroundImage } : hero;
}

/** Slugs that render the full abroad component stack (single source of truth with `FULL_PAGE_BY_SLUG`). */
export const ABROAD_FULL_LAYOUT_SLUGS = new Set(Object.keys(FULL_PAGE_BY_SLUG));

/** Resolves all section copy for a full-layout abroad page, or `null` if the slug has no bundle yet. */
export function getAbroadFullPageCopy(slug: string): AbroadFullPageCopy | null {
  const key = slug.toLowerCase();
  const build = FULL_PAGE_BY_SLUG[key];
  return build ? build() : null;
}

/** Optional overview image path keyed by slug — extend when adding a country. */
const ABROAD_OVERVIEW_MEDIA_SRC: Record<string, string> = {
  russia: `${imageBaseUrl}mbbsCollege/russia/russia-overview.jpg`,
  georgia: `${imageBaseUrl}mbbsCollege/georgia/georgia-overview.jpg`,
  kazakhstan: `${imageBaseUrl}mbbsCollege/kazakhstan/Kazakhstan-overview.jpg`,
  uzbekistan: `${imageBaseUrl}mbbsCollege/uzbekistan/uzbekstan-overview.jpg`,
  kyrgyzstan: `${imageBaseUrl}mbbsCollege/kyrgyzstan/kyrigistan-overview.jpg`,
};

export function getAbroadOverviewMediaSrc(slug: string): string | undefined {
  return ABROAD_OVERVIEW_MEDIA_SRC[slug.toLowerCase()];
}
