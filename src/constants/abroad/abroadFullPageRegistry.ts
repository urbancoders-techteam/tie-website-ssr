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
  russiaAbroadHeroFeaturedCount,
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
  georgiaAbroadHeroFeaturedCount,
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
  kazakhstanAbroadHeroFeaturedCount,
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
  uzbekistanAbroadHeroFeaturedCount,
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
  uzbekistanAbroadWhyChooseMbbsContent,
  uzbekistanAbroadAccommodationClimateContent,
  uzbekistanAbroadEducationLoanContent,
  uzbekistanAbroadCtaBannerContent,
} from "@/constants/abroad/uzbekistanAbroadConstent";

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
  quickFacts: AbroadQuickFactItem[];
  whyChooseMbbs: AbroadWhyChooseMbbsContent;
  eligibility: AbroadEligibilityContent;
  admissionProcess: AbroadAdmissionProcessContent;
  /** Red strip CTA before FAQ — copy is per-country in `*AbroadConstent`. */
  ctaBanner: AbroadCtaBannerContent;
};

function russiaFullPage(featuredCount: number): AbroadFullPageCopy {
  return {
    hero: russiaAbroadHeroFeaturedCount(featuredCount),
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
    quickFacts: russiaAbroadQuickFactsContent,
    whyChooseMbbs: russiaAbroadWhyChooseMbbsContent,
    eligibility: russiaAbroadEligibilityContent,
    admissionProcess: russiaAbroadAdmissionProcessContent,
    ctaBanner: russiaAbroadCtaBannerContent,
  };
}

function georgiaFullPage(featuredCount: number): AbroadFullPageCopy {
  return {
    hero: georgiaAbroadHeroFeaturedCount(featuredCount),
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
    quickFacts: georgiaAbroadQuickFactsContent,
    whyChooseMbbs: georgiaAbroadWhyChooseMbbsContent,
    eligibility: georgiaAbroadEligibilityContent,
    admissionProcess: georgiaAbroadAdmissionProcessContent,
    ctaBanner: georgiaAbroadCtaBannerContent,
  };
}

function kazakhstanFullPage(featuredCount: number): AbroadFullPageCopy {
  return {
    hero: kazakhstanAbroadHeroFeaturedCount(featuredCount),
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
    quickFacts: kazakhstanAbroadQuickFactsContent,
    whyChooseMbbs: kazakhstanAbroadWhyChooseMbbsContent,
    eligibility: kazakhstanAbroadEligibilityContent,
    admissionProcess: kazakhstanAbroadAdmissionProcessContent,
    ctaBanner: kazakhstanAbroadCtaBannerContent,
  };
}

function uzbekistanFullPage(featuredCount: number): AbroadFullPageCopy {
  return {
    hero: uzbekistanAbroadHeroFeaturedCount(featuredCount),
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
    quickFacts: uzbekistanAbroadQuickFactsContent,
    whyChooseMbbs: uzbekistanAbroadWhyChooseMbbsContent,
    eligibility: uzbekistanAbroadEligibilityContent,
    admissionProcess: uzbekistanAbroadAdmissionProcessContent,
    ctaBanner: uzbekistanAbroadCtaBannerContent,
  };
}

const FULL_PAGE_BY_SLUG: Record<string, (featuredCount: number) => AbroadFullPageCopy> = {
  russia: russiaFullPage,
  georgia: georgiaFullPage,
  kazakhstan: kazakhstanFullPage,
  uzbekistan: uzbekistanFullPage,
};

/** Slugs that render the full abroad component stack (single source of truth with `FULL_PAGE_BY_SLUG`). */
export const ABROAD_FULL_LAYOUT_SLUGS = new Set(Object.keys(FULL_PAGE_BY_SLUG));

/** Resolves all section copy for a full-layout abroad page, or `null` if the slug has no bundle yet. */
export function getAbroadFullPageCopy(slug: string, featuredCount: number): AbroadFullPageCopy | null {
  const key = slug.toLowerCase();
  const build = FULL_PAGE_BY_SLUG[key];
  return build ? build(featuredCount) : null;
}

/** Optional hero/overview image path keyed by slug — extend when adding a country. */
const ABROAD_OVERVIEW_MEDIA_SRC: Record<string, string> = {
  russia: `${imageBaseUrl}mbbsCollege/russia/campaign/universities/clg_images/mephi.jpg`,
  georgia: `${imageBaseUrl}mbbsCollege/georgia/campaign/universities/clg_images/geomedi.jpg`,
  kazakhstan: `${imageBaseUrl}mbbsCollege/kazakhstan/university/knmu.jpg`,
  uzbekistan: `${imageBaseUrl}mbbsCollege/uzbekistan/uz1.png`,
};

export function getAbroadOverviewMediaSrc(slug: string): string | undefined {
  return ABROAD_OVERVIEW_MEDIA_SRC[slug.toLowerCase()];
}
