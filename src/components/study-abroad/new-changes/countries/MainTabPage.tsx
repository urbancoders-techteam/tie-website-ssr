"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
// import LetsStart from "@/components/immersion/LetsStart";
import ModalTrigger from "@/components/ModalTrigger";
import CostOfStudying from "@/components/study-abroad/new-changes/countries/CostOfStudying";
import JobsAfterMS from "./JobsAfterMS";
import MbaSection from "./MbaSection";
import ScholarshipSection from "./ScholarshipSection";
import ExamEligibilityRequirement from "./Exam&EligibiltyRequirement";
import CostOfLiving from "./CostOfLiving";
import MastersForIndian from "@/components/study-abroad/new-changes/countries/MastersForIndian";
import StudentVisa from "@/components/study-abroad/new-changes/countries/StudentVisa";
import TopCourses from "@/components/study-abroad/new-changes/countries/TopCourses";
import IntroductionSection from "@/components/study-abroad/new-changes/countries/IntroductionSection";
import OverviewSection from "@/components/study-abroad/new-changes/countries/OverviewSection";
import WhyStudy from "@/components/study-abroad/new-changes/countries/WhyStudy";
import {
  UK_HERO,
  UK_INTRO_CONTENT,
  UK_INTRO_GALLERY,
  UK_INTRO_STATS,
  UK_OVERVIEW,
  UK_WHY_STUDY,
  UK_COST_STUDY,
  UK_COST_OF_LIVING_SECTION,
  UK_TOP_COURSES,
  UK_MASTERS_FOR_INDIAN,
  UK_STUDENT_VISA,
  UK_JOBS_AFTER_MS,
  UK_MBA_SECTION,
  UK_SCHOLARSHIPS_SECTION,
  UK_EXAMS_ELIGIBILITY_SECTION,
  UK_PAGE_NAV,
} from "@/constants/study-abroad/countryPages/ukCountryPage";
import type { CountryPageNavConfig } from "@/constants/study-abroad/countryPages/countryPageTypes";
import { useCountryPageSectionNav } from "@/hooks/useCountryPageSectionNav";
import { useStickyChromeOffset } from "@/hooks/useStickyChromeOffset";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CountryPageMobileNav from "./CountryPageMobileNav";
import CountryPageSidebar from "./CountryPageSidebar";
import OtherDestination from "./OtherDestination";
import FAQSection, { type FAQItem } from "@/components/campaign/FAQSection";

export type UkCountryPageData = {
  info?: { title: string; image: string; content: string };
  whyStudy?: Record<string, string>;
  places?: { title: string; data?: Array<{ city: string; img: string }> };
  universties?: { heading: string };
  popular?: Array<{ id: number; Image: string; title: string; items: string[] }>;
  intake?: unknown;
  cost?: unknown;
  post?: unknown;
  visa?: { image: string; data: string[] };
  recruiter?: Array<{ title: string[]; Image?: string }>;
  faq?: Array<{
    question?: string;
    answer?: string;
    title?: string;
    Desc?: string;
  }>;
};

type MainTabPageProps = {
  pageData: UkCountryPageData;
  slug: string;
  /** Per-country navigation; defaults to UK. Pass a custom config for other countries later. */
  nav?: CountryPageNavConfig;
  universityData: Array<{
    _id: string;
    image?: string;
    universitySortName?: string;
  }>;
  universityLoading: boolean;
};

export default function MainTabPage({
  pageData,
  slug,
  nav = UK_PAGE_NAV,
}: MainTabPageProps) {
  const { topTabs, sidebarLinks, sidebarCta, sidebarAriaLabel } = nav;
  const chromeOffset = useStickyChromeOffset(128);
  const tabsStickyTop = chromeOffset;
  const tabsWrapRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [tabsBarHeight, setTabsBarHeight] = useState(52);
  const [mobileNavHeight, setMobileNavHeight] = useState(72);
  const [isLgUp, setIsLgUp] = useState(false);

  const desktopScrollOffset = chromeOffset + tabsBarHeight + 8;
  const mobileScrollOffset = chromeOffset + mobileNavHeight + 8;
  const scrollOffset = isLgUp ? desktopScrollOffset : mobileScrollOffset;
  const sidebarStickyTop = desktopScrollOffset;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const updateBp = () => setIsLgUp(mq.matches);
    updateBp();
    mq.addEventListener("change", updateBp);
    return () => mq.removeEventListener("change", updateBp);
  }, []);

  useEffect(() => {
    const el = tabsWrapRef.current;
    if (!el) return;

    const measureTabs = () => setTabsBarHeight(el.offsetHeight);
    measureTabs();

    const ro = new ResizeObserver(measureTabs);
    ro.observe(el);
    window.addEventListener("resize", measureTabs);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measureTabs);
    };
  }, []);

  useEffect(() => {
    const el = mobileNavRef.current;
    if (!el) return;

    const measure = () => setMobileNavHeight(el.offsetHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isLgUp]);

  const faqItems = useMemo<FAQItem[]>(
    () =>
      (pageData.faq ?? []).map((item) => ({
        question: item.question ?? item.title ?? "",
        answer: item.answer ?? item.Desc ?? "",
      })),
    [pageData.faq]
  );

  const overviewSectionIds = useMemo(
    () => sidebarLinks.filter((l) => l.inIntroGroup).map((l) => l.sectionId),
    [sidebarLinks]
  );

  const visibleSidebarLinks = useMemo(
    () =>
      sidebarLinks.filter((link) => {
        if (link.sectionId.endsWith("-faq") || link.id === "faq") {
          return faqItems.length > 0;
        }
        return true;
      }),
    [sidebarLinks, faqItems.length]
  );

  const [activeTabId, setActiveTabId] = useState(topTabs[0]?.id ?? "");
  const [activeSectionId, setActiveSectionId] = useState(
    visibleSidebarLinks[0]?.sectionId ?? sidebarLinks[0]?.sectionId ?? ""
  );

  const sectionIds = useMemo(
    () => visibleSidebarLinks.map((l) => l.sectionId),
    [visibleSidebarLinks]
  );

  const syncTabForSection = useCallback(
    (sectionId: string) => {
      const directTab = topTabs.find((t) => t.sectionId === sectionId);
      if (directTab) {
        setActiveTabId(directTab.id);
        return;
      }
      if (overviewSectionIds.includes(sectionId)) {
        const overviewTab = topTabs.find((t) => t.id === "overview") ?? topTabs[0];
        if (overviewTab) setActiveTabId(overviewTab.id);
      }
    },
    [topTabs, overviewSectionIds]
  );

  const lastActiveRef = useRef(activeSectionId);
  const handleActiveSection = useCallback(
    (sectionId: string) => {
      if (lastActiveRef.current === sectionId) return;
      lastActiveRef.current = sectionId;
      setActiveSectionId(sectionId);
      syncTabForSection(sectionId);
    },
    [syncTabForSection]
  );

  const { scrollToSection } = useCountryPageSectionNav({
    sectionIds,
    scrollOffset,
    onActiveChange: handleActiveSection,
  });

  const onTabClick = (tab: (typeof topTabs)[number]) => {
    setActiveTabId(tab.id);
    scrollToSection(tab.sectionId);
  };

  return (
    <div
      className="uk-country-page mt-3 sm:mt-5"
      style={{ ["--uk-scroll-offset" as string]: `${scrollOffset}px` }}
    >
      {/* Hero */}
      <header className="uk-country-hero">
        <ContainerWrapper className="py-5 sm:py-8 lg:py-6 xl:py-10">
          <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-5">
            <div className="flex min-w-0 gap-3 sm:gap-4 lg:gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B162C] text-base font-black text-white sm:h-14 sm:w-14 lg:h-12 lg:w-12 xl:h-16 xl:w-16 xl:text-lg"
                aria-hidden
              >
                {UK_HERO.badge}
              </div>
              <div className="min-w-0">
                <h1 className="text-balance text-lg font-extrabold leading-snug text-[#0B162C] sm:text-xl lg:text-lg xl:text-[1.65rem]">
                  {UK_HERO.title}
                </h1>
                <p className="mt-1.5 text-sm text-slate-500 lg:text-[0.8125rem] lg:leading-snug xl:mt-2 xl:text-base">
                  {UK_HERO.subtitle}
                </p>
              </div>
            </div>
            <ModalTrigger
              variant="custom"
              text={UK_HERO.cta}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[#0B162C] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#143c52] sm:w-auto lg:mt-0.5 lg:px-4 lg:py-2 lg:text-xs xl:mt-1 xl:px-5 xl:py-3 xl:text-sm"
            />
          </div>
        </ContainerWrapper>
      </header>

      {/* Top tabs — desktop / laptop only */}
      <div
        ref={tabsWrapRef}
        className="uk-country-tabs-wrap hidden lg:block"
        style={{ top: tabsStickyTop }}
      >
        <ContainerWrapper className="!px-0 sm:!px-6 md:!px-6 lg:!px-5 xl:!px-8">
          <nav className="uk-country-tabs px-4 sm:px-0" aria-label={sidebarAriaLabel}>
            {topTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabClick(tab)}
                className={`uk-country-tab ${activeTabId === tab.id ? "is-active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </ContainerWrapper>
      </div>

      <ContainerWrapper className="!px-4 sm:!px-6 md:!px-8 lg:!px-5 xl:!px-8">
        <div ref={mobileNavRef} className="lg:hidden">
          <CountryPageMobileNav
            links={visibleSidebarLinks}
            activeSectionId={activeSectionId}
            onNavigate={scrollToSection}
            stickyTopPx={chromeOffset}
            ariaLabel={sidebarAriaLabel}
          />
        </div>

        <div className="uk-country-layout">
          <CountryPageSidebar
            links={visibleSidebarLinks}
            activeSectionId={activeSectionId}
            onNavigate={scrollToSection}
            ctaText={sidebarCta}
            ariaLabel={sidebarAriaLabel}
            stickyTopPx={sidebarStickyTop}
          />

          <div ref={mainRef} className="uk-country-main min-w-0">
            <IntroductionSection
              id="uk-intro"
              heading={UK_INTRO_CONTENT.heading}
              paragraphs={UK_INTRO_CONTENT.paragraphs}
              highlightPhrases={UK_INTRO_CONTENT.highlightPhrases}
              gallery={UK_INTRO_GALLERY}
              stats={UK_INTRO_STATS}
            />

            <OverviewSection
              id="uk-study-overview"
              title={UK_OVERVIEW.title}
              subtitle={UK_OVERVIEW.subtitle}
              overviewData={UK_OVERVIEW.rows}
            />

            <WhyStudy
              id="uk-why-study"
              title={UK_WHY_STUDY.title}
              intro={UK_WHY_STUDY.intro}
              cards={UK_WHY_STUDY.cards}
              keyFact={UK_WHY_STUDY.keyFact}
              cta={UK_WHY_STUDY.cta}
            />

            <CostOfStudying
              id="uk-cost"
              title={UK_COST_STUDY.title}
              intro={UK_COST_STUDY.intro}
              featuredImage={UK_COST_STUDY.featuredImage}
              tuitionTables={UK_COST_STUDY.tuitionTables}
            />

            <CostOfLiving
              id="uk-cost-living"
              title={UK_COST_OF_LIVING_SECTION.title}
              intro={UK_COST_OF_LIVING_SECTION.intro}
              featuredImage={UK_COST_OF_LIVING_SECTION.featuredImage}
              breakdown={UK_COST_OF_LIVING_SECTION.breakdown}
            />

            <TopCourses
              id="uk-courses"
              title={UK_TOP_COURSES.title}
              intro={UK_TOP_COURSES.intro}
              featuredImage={UK_TOP_COURSES.featuredImage}
              gridTitle={UK_TOP_COURSES.gridTitle}
              courses={UK_TOP_COURSES.courses}
              universitiesByCourse={UK_TOP_COURSES.universitiesByCourse}
              proTip={UK_TOP_COURSES.proTip}
            />

            <MastersForIndian
              id="uk-ms"
              title={UK_MASTERS_FOR_INDIAN.title}
              intro={UK_MASTERS_FOR_INDIAN.intro}
              featuredImage={UK_MASTERS_FOR_INDIAN.featuredImage}
              whyChoose={UK_MASTERS_FOR_INDIAN.whyChoose}
              eligibility={UK_MASTERS_FOR_INDIAN.eligibility}
              universitiesTable={UK_MASTERS_FOR_INDIAN.universitiesTable}
              applicationProcess={UK_MASTERS_FOR_INDIAN.applicationProcess}
            />

            <StudentVisa
              id="uk-visa"
              title={UK_STUDENT_VISA.title}
              intro={UK_STUDENT_VISA.intro}
              steps={UK_STUDENT_VISA.steps}
              featuredImage={UK_STUDENT_VISA.featuredImage}
              requirements={UK_STUDENT_VISA.requirements}
              keyDetails={UK_STUDENT_VISA.keyDetails}
              note={UK_STUDENT_VISA.note}
            />

            <JobsAfterMS
              id="uk-jobs"
              title={UK_JOBS_AFTER_MS.title}
              intro={UK_JOBS_AFTER_MS.intro}
              featuredImage={UK_JOBS_AFTER_MS.featuredImage}
              employers={UK_JOBS_AFTER_MS.employers}
              careerTip={UK_JOBS_AFTER_MS.careerTip}
              graduateRoute={UK_JOBS_AFTER_MS.graduateRoute}
              salaries={UK_JOBS_AFTER_MS.salaries}
            />

            <MbaSection
              id="uk-mba"
              title={UK_MBA_SECTION.title}
              intro={UK_MBA_SECTION.intro}
              featuredImage={UK_MBA_SECTION.featuredImage}
              programmes={UK_MBA_SECTION.programmes}
              eligibility={UK_MBA_SECTION.eligibility}
              whyBanner={UK_MBA_SECTION.whyBanner}
            />

            <ScholarshipSection
              id="uk-scholarships"
              title={UK_SCHOLARSHIPS_SECTION.title}
              intro={UK_SCHOLARSHIPS_SECTION.intro}
              cards={UK_SCHOLARSHIPS_SECTION.cards}
              tip={UK_SCHOLARSHIPS_SECTION.tip}
            />

            <ExamEligibilityRequirement
              id="uk-exams"
              title={UK_EXAMS_ELIGIBILITY_SECTION.title}
              intro={UK_EXAMS_ELIGIBILITY_SECTION.intro}
              academicEligibility={UK_EXAMS_ELIGIBILITY_SECTION.academicEligibility}
              englishRequirements={UK_EXAMS_ELIGIBILITY_SECTION.englishRequirements}
            />

            {faqItems.length > 0 ? (
              <FAQSection
                items={faqItems}
                variant="abroad"
                sectionId="uk-faq"
                sectionSlug={slug}
                headingId="uk-faq-heading"
              />
            ) : null}
          </div>
        </div>
      </ContainerWrapper>

      <div className="mt-25">
        <OtherDestination excludeSlug={slug} />
      </div>
 
    </div>
  );
}
