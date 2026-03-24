import ModalTrigger from "@/components/ModalTrigger";
import CampaignNavbar from "@/components/campaign/CampaignNavbar";
import CampaignFooter from "@/components/campaign/CampaignFooter";
import HeroSection from "@/components/campaign/HeroSection";
import OverviewSection from "@/components/campaign/OverviewSection";
import CampaignTabs, { KYRGYZSTAN_CAMPAIGN_TABS } from "@/components/campaign/CampaignTabs";
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
  KYRGYZSTAN_OVERVIEW_CONTENT,
  KYRGYZSTAN_TESTIMONIALS,
  KYRGYZSTAN_WHAT_STUDENTS_SAY_INTRO,
  KYRGYZSTAN_QUICK_FACTS_SECTION,
  KYRGYZSTAN_WHY_CHOOSE_CARDS,
  KYRGYZSTAN_WHY_CHOOSE_INTRO,
  KYRGYZSTAN_ELIGIBILITY_CRITERIA,
  KYRGYZSTAN_ELIGIBILITY_INTRO,
  KYRGYZSTAN_ADMISSION_STEPS,
  KYRGYZSTAN_DOCUMENTS_INTRO,
  KYRGYZSTAN_DOCUMENTS_REQUIRED,
  KYRGYZSTAN_UNIVERSITIES,
  KYRGYZSTAN_FAQ_ITEMS,
  KYRGYZSTAN_HERO,
} from "@/constants/campaigns/kyrgyzstanConstent";
import type { CampaignNavLink } from "@/components/campaign/CampaignNavbar";
import { imageBaseUrl } from "@/utils/config";

const KYRGYZSTAN_THANKYOU = "/mbbs/abroad/kyrgyzstan/campaign/thankyou";
const KYRGYZSTAN_PHONE_NUMBER = "+919831241212";
const kyrgyzstanHeroImg = `${imageBaseUrl}mbbsCollege/kyrgyzstan/campaign/kyrgyzstan_hero_img.png`;

const KYRGYZSTAN_NAV_LINKS: CampaignNavLink[] = [
  { href: "#overview", label: "Overview" },
  { href: "#why-choose-kyrgyzstan", label: "Why Kyrgyzstan?" },
  { href: "#universities", label: "Universities" },
  { href: "#eligibility-criteria", label: "Eligibility" },
  { href: "#faq", label: "FAQ" },
];

export interface KyrgyzstanCampaignPageProps {
  redirectPath?: string;
}

export default function KyrgyzstanCampaignPage({
  redirectPath = KYRGYZSTAN_THANKYOU,
}: KyrgyzstanCampaignPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <CampaignNavbar redirectPath={redirectPath} navLinks={KYRGYZSTAN_NAV_LINKS} />

      <HeroSection
        heroImage={kyrgyzstanHeroImg}
        tagline={KYRGYZSTAN_HERO.tagline}
        title={KYRGYZSTAN_HERO.title}
        titleHighlight={KYRGYZSTAN_HERO.titleHighlight}
        description={KYRGYZSTAN_HERO.description}
        stats={
          Array.isArray(KYRGYZSTAN_HERO.stats)
            ? KYRGYZSTAN_HERO.stats.map((stat) => ({
                value: typeof stat.value !== "string" ? stat.value : "",
                label: stat.label,
              }))
            : []
        }
        ctaText={KYRGYZSTAN_HERO.ctaText}
        redirectPath={redirectPath}
      />

      <div className="sticky top-18.5 md:top-24 z-50">
        <CampaignTabs tabs={KYRGYZSTAN_CAMPAIGN_TABS} />
      </div>

      <section id="overview" className="bg-white pt-10 md:pt-14 scroll-mt-24">
        <OverviewSection overviewContent={KYRGYZSTAN_OVERVIEW_CONTENT} testimonials={KYRGYZSTAN_TESTIMONIALS} />
      </section>

      <QuickFactsSection {...KYRGYZSTAN_QUICK_FACTS_SECTION} />

      <WhyChooseRussiaSection
        cards={KYRGYZSTAN_WHY_CHOOSE_CARDS}
        countryName="Kyrgyzstan"
        sectionId="why-choose-kyrgyzstan"
        introParagraph={KYRGYZSTAN_WHY_CHOOSE_INTRO}
      />

      <EligibilityCriteriaSection
        criteriaCards={KYRGYZSTAN_ELIGIBILITY_CRITERIA}
        countryName="Kyrgyzstan"
        introParagraph={KYRGYZSTAN_ELIGIBILITY_INTRO}
      />

      <AdmissionProcessSection
        steps={KYRGYZSTAN_ADMISSION_STEPS}
        countryName="Kyrgyzstan"
        countryAdjective="Kyrgyz"
      />

      <DocumentsRequiredSection
        docItems={KYRGYZSTAN_DOCUMENTS_REQUIRED}
        countryName="Kyrgyzstan"
        introParagraph={KYRGYZSTAN_DOCUMENTS_INTRO}
      />

      <UniversitiesSection universitiesBase={KYRGYZSTAN_UNIVERSITIES} countryName="Kyrgyzstan" />

      <WhatStudentsSaySection
        testimonials={KYRGYZSTAN_TESTIMONIALS}
        countryName="Kyrgyzstan"
        introParagraph={KYRGYZSTAN_WHAT_STUDENTS_SAY_INTRO}
      />

      <FAQSection items={KYRGYZSTAN_FAQ_ITEMS} />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-[#00999E] text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-extrabold">Ready to start your MBBS journey?</h3>
              <p className="text-white/90 mt-2">
                Book a free counselling call and get a personalised shortlist for Kyrgyzstan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <ModalTrigger
                text="BOOK FREE COUNSELLING"
                redirectPath={redirectPath}
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              />
              <a
                href={`tel:${KYRGYZSTAN_PHONE_NUMBER.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0b1b1c] hover:bg-white/90"
              >
                Call {KYRGYZSTAN_PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CampaignFooter />
      <ScrollToTopButton phoneNumber={KYRGYZSTAN_PHONE_NUMBER} />
    </div>
  );
}
