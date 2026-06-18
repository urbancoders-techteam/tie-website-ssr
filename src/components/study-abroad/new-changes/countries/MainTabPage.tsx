"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
// import LetsStart from "@/components/immersion/LetsStart";
import ModalTrigger from "@/components/ModalTrigger";
import CostOfStudying from "@/components/study-abroad/new-changes/countries/components/CostOfStudying";
import JobsAfterMS from "./components/JobsAfterMS";
import MbaSection from "./components/MbaSection";
import ScholarshipSection from "./components/ScholarshipSection";
import ExamEligibilityRequirement from "./components/Exam&EligibiltyRequirement";
import CostOfLiving from "./components/CostOfLiving";
import MastersForIndian from "@/components/study-abroad/new-changes/countries/components/MastersForIndian";
import StudentVisa from "@/components/study-abroad/new-changes/countries/components/StudentVisa";
import TopCourses from "@/components/study-abroad/new-changes/countries/components/TopCourses";
import IntroductionSection from "@/components/study-abroad/new-changes/countries/components/IntroductionSection";
import OverviewSection from "@/components/study-abroad/new-changes/countries/components/OverviewSection";
import WhyStudy from "@/components/study-abroad/new-changes/countries/components/WhyStudy";
import { UK_COUNTRY_PAGE } from "@/constants/study-abroad/countryPages/ukCountryPage";
import type {
  CountryHeroConfig,
  CountryPageNavConfig,
  CountryStudyPageConfig,
} from "@/lib/study-abroad/countryPageTypes";
import { useCountryPageSectionNav } from "@/hooks/useCountryPageSectionNav";
import { useStickyChromeOffset } from "@/hooks/useStickyChromeOffset";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CountryPageMobileNav from "./components/CountryPageMobileNav";
import CountryPageSidebar from "./components/CountryPageSidebar";
import OtherDestination from "./components/OtherDestination";
import FAQSection, { type FAQItem } from "@/components/campaign/FAQSection";

const LG_MEDIA_QUERY = "(min-width: 1024px)";
const SCROLL_OFFSET_GAP = 8;
const DEFAULT_TABS_HEIGHT = 52;
const DEFAULT_MOBILE_NAV_HEIGHT = 72;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const updateMatches = () => setMatches(mq.matches);

    updateMatches();
    mq.addEventListener("change", updateMatches);
    return () => mq.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
}

function useMeasuredHeight<T extends HTMLElement>(fallbackHeight: number) {
  const [element, setElement] = useState<T | null>(null);
  const [height, setHeight] = useState(fallbackHeight);

  useEffect(() => {
    if (!element) return;

    const measure = () => setHeight(element.offsetHeight || fallbackHeight);
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(element);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [element, fallbackHeight]);

  return [setElement, height] as const;
}

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
  pageData?: UkCountryPageData;
  slug: string;
  /** Full per-country page config; defaults to UK. */
  countryPage?: CountryStudyPageConfig;
  /** Optional nav override when a country needs custom tab/sidebar labels. */
  nav?: CountryPageNavConfig;
};

type CountryHeroProps = {
  hero: CountryHeroConfig;
};

function CountryHero({ hero }: CountryHeroProps) {
  return (
    <header className="uk-country-hero">
      <ContainerWrapper className="py-5 sm:py-8 lg:py-6 xl:py-10">
        <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-5">
          <div className="flex min-w-0 gap-3 sm:gap-4 lg:gap-3">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B162C] text-base font-black text-white sm:h-14 sm:w-14 lg:h-12 lg:w-12 xl:h-16 xl:w-16 xl:text-lg"
              aria-hidden
            >
              {hero.badge}
            </div>
            <div className="min-w-0">
              <h1 className="text-balance text-lg font-extrabold leading-snug text-[#0B162C] sm:text-xl lg:text-lg xl:text-[1.65rem]">
                {hero.title}
              </h1>
              <p className="mt-1.5 text-sm text-slate-500 lg:text-[0.8125rem] lg:leading-snug xl:mt-2 xl:text-base">
                {hero.subtitle}
              </p>
            </div>
          </div>
          <ModalTrigger
            variant="custom"
            text={hero.cta}
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[#0B162C] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#143c52] sm:w-auto lg:mt-0.5 lg:px-4 lg:py-2 lg:text-xs xl:mt-1 xl:px-5 xl:py-3 xl:text-sm"
          />
        </div>
      </ContainerWrapper>
    </header>
  );
}

export default function MainTabPage({
  pageData,
  slug,
  countryPage = UK_COUNTRY_PAGE,
  nav,
}: MainTabPageProps) {
  const { hero, sectionIds: countrySectionIds, sections } = countryPage;
  const { topTabs, sidebarLinks, sidebarCta, sidebarAriaLabel } = nav ?? countryPage.nav;
  const chromeOffset = useStickyChromeOffset(128);
  const [tabsWrapRef, tabsBarHeight] =
    useMeasuredHeight<HTMLDivElement>(DEFAULT_TABS_HEIGHT);
  const [mobileNavRef, mobileNavHeight] =
    useMeasuredHeight<HTMLDivElement>(DEFAULT_MOBILE_NAV_HEIGHT);
  const isLgUp = useMediaQuery(LG_MEDIA_QUERY);

  const desktopScrollOffset = chromeOffset + tabsBarHeight + SCROLL_OFFSET_GAP;
  const mobileScrollOffset = chromeOffset + mobileNavHeight + SCROLL_OFFSET_GAP;
  const scrollOffset = isLgUp ? desktopScrollOffset : mobileScrollOffset;
  const sidebarStickyTop = desktopScrollOffset;

  const faqItems = useMemo<FAQItem[]>(
    () => {
      if (countryPage.faqs) return countryPage.faqs;

      return (pageData?.faq ?? []).map((item) => ({
        question: item.question ?? item.title ?? "",
        answer: item.answer ?? item.Desc ?? "",
      }));
    },
    [countryPage.faqs, pageData?.faq]
  );

  const overviewSectionIds = useMemo(
    () => new Set(sidebarLinks.filter((l) => l.inIntroGroup).map((l) => l.sectionId)),
    [sidebarLinks]
  );

  const tabIdBySectionId = useMemo(
    () => new Map(topTabs.map((tab) => [tab.sectionId, tab.id])),
    [topTabs]
  );

  const overviewTabId = useMemo(
    () => topTabs.find((tab) => tab.id === "overview")?.id ?? topTabs[0]?.id ?? "",
    [topTabs]
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
      const directTabId = tabIdBySectionId.get(sectionId);
      if (directTabId) {
        setActiveTabId(directTabId);
        return;
      }
      if (overviewSectionIds.has(sectionId) && overviewTabId) setActiveTabId(overviewTabId);
    },
    [overviewSectionIds, overviewTabId, tabIdBySectionId]
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

  useEffect(() => {
    if (!topTabs.length || topTabs.some((tab) => tab.id === activeTabId)) return;
    setActiveTabId(topTabs[0].id);
  }, [activeTabId, topTabs]);

  useEffect(() => {
    if (!sectionIds.length || sectionIds.includes(activeSectionId)) return;

    const nextSectionId = sectionIds[0];
    lastActiveRef.current = nextSectionId;
    setActiveSectionId(nextSectionId);
    syncTabForSection(nextSectionId);
  }, [activeSectionId, sectionIds, syncTabForSection]);

  const onTabClick = useCallback(
    (tab: (typeof topTabs)[number]) => {
      setActiveTabId(tab.id);
      scrollToSection(tab.sectionId);
    },
    [scrollToSection]
  );

  return (
    <div
      className="uk-country-page mt-3 sm:mt-5"
      style={{ ["--country-scroll-offset" as string]: `${scrollOffset}px` }}
    >
      {/* Hero */}
      <CountryHero hero={hero} />

      {/* Top tabs - desktop / laptop only */}
      <div
        ref={tabsWrapRef}
        className="uk-country-tabs-wrap hidden lg:block"
        style={{ top: chromeOffset }}
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

          <div className="uk-country-main min-w-0">
            <IntroductionSection
              id={countrySectionIds.intro}
              heading={sections.intro.heading}
              paragraphs={sections.intro.paragraphs}
              highlightPhrases={sections.intro.highlightPhrases}
              gallery={sections.intro.gallery}
              stats={sections.intro.stats}
            />

            <OverviewSection
              id={countrySectionIds.overview}
              title={sections.overview.title}
              subtitle={sections.overview.subtitle}
              overviewData={sections.overview.overviewData}
            />

            <WhyStudy
              id={countrySectionIds.whyStudy}
              title={sections.whyStudy.title}
              intro={sections.whyStudy.intro}
              cards={sections.whyStudy.cards}
              keyFact={sections.whyStudy.keyFact}
              cta={sections.whyStudy.cta}
            />

            <CostOfStudying
              id={countrySectionIds.costStudy}
              title={sections.costStudy.title}
              intro={sections.costStudy.intro}
              featuredImage={sections.costStudy.featuredImage}
              tuitionTables={sections.costStudy.tuitionTables}
            />

            <CostOfLiving
              id={countrySectionIds.costOfLiving}
              title={sections.costOfLiving.title}
              intro={sections.costOfLiving.intro}
              featuredImage={sections.costOfLiving.featuredImage}
              breakdown={sections.costOfLiving.breakdown}
            />

            <TopCourses
              id={countrySectionIds.topCourses}
              title={sections.topCourses.title}
              intro={sections.topCourses.intro}
              featuredImage={sections.topCourses.featuredImage}
              gridTitle={sections.topCourses.gridTitle}
              courses={sections.topCourses.courses}
              universitiesByCourse={sections.topCourses.universitiesByCourse}
              proTip={sections.topCourses.proTip}
            />

            <MastersForIndian
              id={countrySectionIds.mastersForIndian}
              title={sections.mastersForIndian.title}
              intro={sections.mastersForIndian.intro}
              featuredImage={sections.mastersForIndian.featuredImage}
              whyChoose={sections.mastersForIndian.whyChoose}
              eligibility={sections.mastersForIndian.eligibility}
              universitiesTable={sections.mastersForIndian.universitiesTable}
              applicationProcess={sections.mastersForIndian.applicationProcess}
            />

            <StudentVisa
              id={countrySectionIds.studentVisa}
              title={sections.studentVisa.title}
              intro={sections.studentVisa.intro}
              steps={sections.studentVisa.steps}
              featuredImage={sections.studentVisa.featuredImage}
              requirements={sections.studentVisa.requirements}
              keyDetails={sections.studentVisa.keyDetails}
              note={sections.studentVisa.note}
            />

            <JobsAfterMS
              id={countrySectionIds.jobsAfterMs}
              title={sections.jobsAfterMs.title}
              intro={sections.jobsAfterMs.intro}
              featuredImage={sections.jobsAfterMs.featuredImage}
              employers={sections.jobsAfterMs.employers}
              careerTip={sections.jobsAfterMs.careerTip}
              graduateRoute={sections.jobsAfterMs.graduateRoute}
              salaries={sections.jobsAfterMs.salaries}
            />

            <MbaSection
              id={countrySectionIds.mba}
              title={sections.mba.title}
              intro={sections.mba.intro}
              featuredImage={sections.mba.featuredImage}
              programmes={sections.mba.programmes}
              eligibility={sections.mba.eligibility}
              whyBanner={sections.mba.whyBanner}
            />

            <ScholarshipSection
              id={countrySectionIds.scholarships}
              title={sections.scholarships.title}
              intro={sections.scholarships.intro}
              cards={sections.scholarships.cards}
              tip={sections.scholarships.tip}
            />

            <ExamEligibilityRequirement
              id={countrySectionIds.examsEligibility}
              title={sections.examsEligibility.title}
              intro={sections.examsEligibility.intro}
              academicEligibility={sections.examsEligibility.academicEligibility}
              englishRequirements={sections.examsEligibility.englishRequirements}
            />

            {faqItems.length > 0 ? (
              <FAQSection
                items={faqItems}
                variant="abroad"
                sectionId={countrySectionIds.faq}
                sectionSlug={slug}
                headingId={`${countrySectionIds.faq}-heading`}
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
