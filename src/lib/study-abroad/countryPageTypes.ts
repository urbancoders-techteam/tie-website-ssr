/** Shared navigation types for country tab pages (UK and future countries). */

import type { CostOfLivingProps } from "@/components/study-abroad/new-changes/countries/components/CostOfLiving";
import type { CostOfStudyingProps } from "@/components/study-abroad/new-changes/countries/components/CostOfStudying";
import type { ExamEligibilityRequirementProps } from "@/components/study-abroad/new-changes/countries/components/Exam&EligibiltyRequirement";
import type { IntroductionSectionProps } from "@/components/study-abroad/new-changes/countries/components/IntroductionSection";
import type { JobsAfterMSProps } from "@/components/study-abroad/new-changes/countries/components/JobsAfterMS";
import type { MastersForIndianProps } from "@/components/study-abroad/new-changes/countries/components/MastersForIndian";
import type { MbaSectionProps } from "@/components/study-abroad/new-changes/countries/components/MbaSection";
import type { OverviewSectionProps } from "@/components/study-abroad/new-changes/countries/components/OverviewSection";
import type { ScholarshipSectionProps } from "@/components/study-abroad/new-changes/countries/components/ScholarshipSection";
import type { StudentVisaProps } from "@/components/study-abroad/new-changes/countries/components/StudentVisa";
import type { TopCoursesProps } from "@/components/study-abroad/new-changes/countries/components/TopCourses";
import type { WhyStudyProps } from "@/components/study-abroad/new-changes/countries/components/WhyStudy";

export type CountryTopTab = {
  id: string;
  label: string;
  sectionId: string;
};

export type CountrySidebarLink = {
  id: string;
  label: string;
  sectionId: string;
  /** Grouped in the highlighted intro block at the top of the sidebar. */
  inIntroGroup?: boolean;
};

export type CountryPageNavConfig = {
  topTabs: CountryTopTab[];
  sidebarLinks: CountrySidebarLink[];
  sidebarCta: string;
  /** Accessible name for the sidebar landmark, e.g. "UK study guide navigation". */
  sidebarAriaLabel: string;
};

export type CountryHeroConfig = {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
};

export type CountryPageSectionIds = {
  intro: string;
  overview: string;
  whyStudy: string;
  costStudy: string;
  costOfLiving: string;
  topCourses: string;
  mastersForIndian: string;
  studentVisa: string;
  jobsAfterMs: string;
  mba: string;
  scholarships: string;
  examsEligibility: string;
  faq: string;
};

export type CountryPageSections = {
  intro: Omit<IntroductionSectionProps, "id">;
  overview: Omit<OverviewSectionProps, "id">;
  whyStudy: Omit<WhyStudyProps, "id">;
  costStudy: Omit<CostOfStudyingProps, "id">;
  costOfLiving: Omit<CostOfLivingProps, "id">;
  topCourses: Omit<TopCoursesProps, "id">;
  mastersForIndian: Omit<MastersForIndianProps, "id">;
  studentVisa: Omit<StudentVisaProps, "id">;
  jobsAfterMs: Omit<JobsAfterMSProps, "id">;
  mba: Omit<MbaSectionProps, "id">;
  scholarships: Omit<ScholarshipSectionProps, "id">;
  examsEligibility: Omit<ExamEligibilityRequirementProps, "id">;
};

export type CountryStudyPageConfig = {
  hero: CountryHeroConfig;
  nav: CountryPageNavConfig;
  sectionIds: CountryPageSectionIds;
  sections: CountryPageSections;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};
