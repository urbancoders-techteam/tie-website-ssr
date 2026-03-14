import ModalTrigger from "@/components/ModalTrigger";
import CampaignNavbar from "@/components/campaign/CampaignNavbar";
import type { CampaignNavLink } from "@/components/campaign/CampaignNavbar";
import CampaignFooter from "@/components/campaign/CampaignFooter";
import HeroSection from "@/components/campaign/HeroSection";
import OverviewSection from "@/components/campaign/OverviewSection";
import CampaignTabs, { GEORGIA_CAMPAIGN_TABS } from "@/components/campaign/CampaignTabs";
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
  GEORGIA_OVERVIEW_CONTENT,
  GEORGIA_TESTIMONIALS,
  GEORGIA_QUICK_FACTS,
  GEORGIA_WHY_CHOOSE_CARDS,
  GEORGIA_ELIGIBILITY_CRITERIA,
  GEORGIA_ADMISSION_STEPS,
  GEORGIA_DOCUMENTS_REQUIRED,
  GEORGIA_UNIVERSITIES,
  GEORGIA_FAQ_ITEMS,
  GEORGIA_HERO,
} from "@/constants/campaigns/georgiaConstent";
import type { StaticImageData } from "next/image";
import tsmmu from "@/assets/russian_universities/tsmu.jpg";
import bsmu from "@/assets/russian_universities/bsmu.jpeg";
import rnrmu from "@/assets/russian_universities/rnrmu.webp";

const GEORGIA_THANKYOU = "/mbbs/abroad/georgia/campaign/thankyou";

const GEORGIA_NAV_LINKS: CampaignNavLink[] = [
  { href: "#overview", label: "Overview" },
  { href: "#why-choose-georgia", label: "Why Georgia?" },
  { href: "#universities", label: "Universities" },
  { href: "#eligibility-criteria", label: "Eligibility" },
  { href: "#faq", label: "FAQ" },
];

/** Placeholder images for Georgia universities (no Georgia-specific assets yet). */
const GEORGIA_UNIVERSITY_IMAGES: Record<string, StaticImageData> = {
  tsmu: tsmmu,
  batumi: bsmu,
  davidtvili: rnrmu,
};

export interface GeorgiaCampaignPageProps {
  /** Redirect path after registration. Defaults to Georgia campaign thank-you page. */
  redirectPath?: string;
}

export default function GeorgiaCampaignPage({
  redirectPath = GEORGIA_THANKYOU,
}: GeorgiaCampaignPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <CampaignNavbar redirectPath={redirectPath} navLinks={GEORGIA_NAV_LINKS} />

      <HeroSection {...GEORGIA_HERO} redirectPath={redirectPath} />

      <div className="sticky top-18.5 md:top-24 z-50">
        <CampaignTabs tabs={GEORGIA_CAMPAIGN_TABS} />
      </div>

      <section id="overview" className="bg-white pt-10 md:pt-14 scroll-mt-24">
        <OverviewSection
          overviewContent={GEORGIA_OVERVIEW_CONTENT}
          testimonials={GEORGIA_TESTIMONIALS}
          countryName="Georgia"
        />
      </section>

      <QuickFactsSection
        quickFacts={GEORGIA_QUICK_FACTS}
        countryName="Georgia"
        redirectPath={redirectPath}
      />
      <WhyChooseRussiaSection
        cards={GEORGIA_WHY_CHOOSE_CARDS}
        countryName="Georgia"
        sectionId="why-choose-georgia"
        countryAdjective="Georgian"
      />
      <EligibilityCriteriaSection
        criteriaCards={GEORGIA_ELIGIBILITY_CRITERIA}
        countryName="Georgia"
        countryAdjective="Georgian"
      />
      <AdmissionProcessSection
        steps={GEORGIA_ADMISSION_STEPS}
        countryName="Georgia"
        countryAdjective="Georgian"
      />
      <DocumentsRequiredSection
        docItems={GEORGIA_DOCUMENTS_REQUIRED}
        countryName="Georgia"
        countryAdjective="Georgian"
      />
      <UniversitiesSection
        universitiesBase={GEORGIA_UNIVERSITIES}
        countryName="Georgia"
        imageMap={GEORGIA_UNIVERSITY_IMAGES}
      />
      <WhatStudentsSaySection
        testimonials={GEORGIA_TESTIMONIALS}
        countryName="Georgia"
      />
      <FAQSection items={GEORGIA_FAQ_ITEMS} />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-[#00999E] text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-extrabold">Ready to start your MBBS journey?</h3>
              <p className="text-white/90 mt-2">
                Book a free counselling call and get a personalised shortlist for Georgia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <ModalTrigger
                text="BOOK FREE COUNSELLING"
                redirectPath={redirectPath}
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              />
              <a
                href="tel:+919831241212"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0b1b1c] hover:bg-white/90"
              >
                Call +919831241212
              </a>
            </div>
          </div>
        </div>
      </section>

      <CampaignFooter />
      <ScrollToTopButton />
    </div>
  );
}
