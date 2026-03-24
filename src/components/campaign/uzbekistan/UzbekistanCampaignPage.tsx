import ModalTrigger from "@/components/ModalTrigger";
import CampaignNavbar from "@/components/campaign/CampaignNavbar";
import CampaignFooter from "@/components/campaign/CampaignFooter";
import HeroSection from "@/components/campaign/HeroSection";
import OverviewSection from "@/components/campaign/OverviewSection";
import CampaignTabs, { UZBEKISTAN_CAMPAIGN_TABS } from "@/components/campaign/CampaignTabs";
import QuickFactsSection from "@/components/campaign/QuickFactsSection";
import WhyChooseRussiaSection from "@/components/campaign/WhyChooseRussiaSection";
import EligibilityCriteriaSection from "@/components/campaign/EligibilityCriteriaSection";
import AdmissionProcessSection from "@/components/campaign/AdmissionProcessSection";
import DocumentsRequiredSection from "@/components/campaign/DocumentsRequiredSection";
import UniversitiesSection from "@/components/campaign/UniversitiesSection";
import FAQSection from "@/components/campaign/FAQSection";
import WhatStudentsSaySection from "@/components/campaign/WhatStudentsSaySection";
import ScrollToTopButton from "@/components/campaign/ScrollToTopButton";
import {
  UZBEKISTAN_OVERVIEW_CONTENT,
  UZBEKISTAN_TESTIMONIALS,
  UZBEKISTAN_WHAT_STUDENTS_SAY_INTRO,
  UZBEKISTAN_QUICK_FACTS_SECTION,
  UZBEKISTAN_WHY_CHOOSE_CARDS,
  UZBEKISTAN_WHY_CHOOSE_INTRO,
  UZBEKISTAN_ELIGIBILITY_CRITERIA,
  UZBEKISTAN_ELIGIBILITY_INTRO,
  UZBEKISTAN_ADMISSION_STEPS,
  UZBEKISTAN_DOCUMENTS_INTRO,
  UZBEKISTAN_DOCUMENTS_REQUIRED,
  UZBEKISTAN_UNIVERSITIES,
  UZBEKISTAN_FAQ_ITEMS,
  UZBEKISTAN_HERO,
} from "@/constants/campaigns/uzbekistanConstent";
import type { CampaignNavLink } from "@/components/campaign/CampaignNavbar";
import { imageBaseUrl } from "@/utils/config";

const UZBEKISTAN_THANKYOU = "/mbbs/abroad/uzbekistan/campaign/thankyou";
const UZBEKISTAN_PHONE_NUMBER = "+919831241212";

const uzbekistan_hero_img = `${imageBaseUrl}mbbsCollege/uzbekistan/campaign/mbbs_uzbekistan.png`;

const UZBEKISTAN_NAV_LINKS: CampaignNavLink[] = [
  { href: "#overview", label: "Overview" },
  { href: "#why-choose-uzbekistan", label: "Why Uzbekistan?" },
  { href: "#universities", label: "Universities" },
  { href: "#eligibility-criteria", label: "Eligibility" },
  { href: "#faq", label: "FAQ" },
];

export interface UzbekistanCampaignPageProps {
  redirectPath?: string;
}

export default function UzbekistanCampaignPage({
  redirectPath = UZBEKISTAN_THANKYOU,
}: UzbekistanCampaignPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <CampaignNavbar redirectPath={redirectPath} navLinks={UZBEKISTAN_NAV_LINKS} />

      {/* Hero */}
      <HeroSection
        heroImage={uzbekistan_hero_img}
        tagline={UZBEKISTAN_HERO.tagline}
        title={UZBEKISTAN_HERO.title}
        titleHighlight={UZBEKISTAN_HERO.titleHighlight}
        description={UZBEKISTAN_HERO.description}
        stats={
          Array.isArray(UZBEKISTAN_HERO.stats)
            ? UZBEKISTAN_HERO.stats.map((stat) => ({
                value: typeof stat.value !== "string" ? stat.value : "",
                label: stat.label,
              }))
            : []
        }
        ctaText={UZBEKISTAN_HERO.ctaText}
        redirectPath={redirectPath}
      />

      {/* Campaign Tabs */}
      <div className="sticky top-18.5 md:top-24 z-50">
        <CampaignTabs tabs={UZBEKISTAN_CAMPAIGN_TABS} />
      </div>

      {/* Overview */}
      <section id="overview" className="bg-white pt-10 md:pt-14 scroll-mt-24">
        <OverviewSection
          overviewContent={UZBEKISTAN_OVERVIEW_CONTENT}
          testimonials={UZBEKISTAN_TESTIMONIALS}
          countryName="Uzbekistan"
        />
      </section>

      {/* Quick Facts */}
      <QuickFactsSection {...UZBEKISTAN_QUICK_FACTS_SECTION} redirectPath={redirectPath} />

      {/* Why Choose Uzbekistan */}
      <WhyChooseRussiaSection
        cards={UZBEKISTAN_WHY_CHOOSE_CARDS}
        countryName="Uzbekistan"
        sectionId="why-choose-uzbekistan"
        introParagraph={UZBEKISTAN_WHY_CHOOSE_INTRO}
      />

      {/* Eligibility Criteria */}
      <EligibilityCriteriaSection
        criteriaCards={UZBEKISTAN_ELIGIBILITY_CRITERIA}
        countryName="Uzbekistan"
        introParagraph={UZBEKISTAN_ELIGIBILITY_INTRO}
      />

      {/* Admission Process */}
      <AdmissionProcessSection
        steps={UZBEKISTAN_ADMISSION_STEPS}
        countryName="Uzbekistan"
        countryAdjective="Uzbek"
      />

      {/* Documents Required */}
      <DocumentsRequiredSection
        docItems={UZBEKISTAN_DOCUMENTS_REQUIRED}
        countryName="Uzbekistan"
        introParagraph={UZBEKISTAN_DOCUMENTS_INTRO}
      />

      {/* Universities */}
      <UniversitiesSection universitiesBase={UZBEKISTAN_UNIVERSITIES} countryName="Uzbekistan" />

      {/* Testimonials */}
      <WhatStudentsSaySection
        testimonials={UZBEKISTAN_TESTIMONIALS}
        introParagraph={UZBEKISTAN_WHAT_STUDENTS_SAY_INTRO}
      />

      {/* FAQ */}
      <FAQSection items={UZBEKISTAN_FAQ_ITEMS} />

      {/* CTA */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-[#00999E] text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-extrabold">Ready to start your MBBS journey?</h3>
              <p className="text-white/90 mt-2">
                Book a free counselling call and get a personalised shortlist for Uzbekistan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <ModalTrigger
                text="BOOK FREE COUNSELLING"
                redirectPath={redirectPath}
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              />
              <a
                href={`tel:${UZBEKISTAN_PHONE_NUMBER.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0b1b1c] hover:bg-white/90"
              >
                Call {UZBEKISTAN_PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CampaignFooter />
      <ScrollToTopButton phoneNumber={UZBEKISTAN_PHONE_NUMBER} />
    </div>
  );
}
