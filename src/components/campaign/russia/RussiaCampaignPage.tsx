import ModalTrigger from "@/components/ModalTrigger";
import CampaignNavbar from "@/components/campaign/CampaignNavbar";
import CampaignFooter from "@/components/campaign/CampaignFooter";
import HeroSection from "@/components/campaign/HeroSection";
import OverviewSection from "@/components/campaign/OverviewSection";
import CampaignTabs from "@/components/campaign/CampaignTabs";
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
  RUSSIA_OVERVIEW_CONTENT,
  RUSSIA_TESTIMONIALS,
  RUSSIA_QUICK_FACTS,
  RUSSIA_WHY_CHOOSE_CARDS,
  RUSSIA_ELIGIBILITY_CRITERIA,
  RUSSIA_ADMISSION_STEPS,
  RUSSIA_DOCUMENTS_REQUIRED,
  RUSSIA_UNIVERSITIES,
  RUSSIA_FAQ_ITEMS,
  RUSSIA_HERO,
} from "@/constants/campaigns/russiaConstent";
import type { CampaignNavLink } from "@/components/campaign/CampaignNavbar";

const RUSSIA_THANKYOU = "/mbbs/abroad/russia/campaign/thankyou";

const RUSSIA_NAV_LINKS: CampaignNavLink[] = [
  { href: "#overview", label: "Overview" },
  { href: "#why-choose-russia", label: "Why Russia?" },
  { href: "#universities", label: "Universities" },
  { href: "#eligibility-criteria", label: "Eligibility" },
  { href: "#faq", label: "FAQ" },
];

export interface RussiaCampaignPageProps {
  /** Redirect path after registration. Defaults to Russia campaign thank-you page. */
  redirectPath?: string;
}

export default function RussiaCampaignPage({
  redirectPath = RUSSIA_THANKYOU,
}: RussiaCampaignPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <CampaignNavbar redirectPath={redirectPath} navLinks={RUSSIA_NAV_LINKS} />

      {/* Hero */}
      <HeroSection {...RUSSIA_HERO} redirectPath={redirectPath} />

      {/* Campaign Tabs */}
      <div className="sticky top-18.5 md:top-24 z-50">
        <CampaignTabs />
      </div>

      {/* Overview */}
      <section id="overview" className="bg-white pt-10 md:pt-14 scroll-mt-24">
        <OverviewSection overviewContent={RUSSIA_OVERVIEW_CONTENT} testimonials={RUSSIA_TESTIMONIALS} />
      </section>

      <QuickFactsSection quickFacts={RUSSIA_QUICK_FACTS} />
      <WhyChooseRussiaSection cards={RUSSIA_WHY_CHOOSE_CARDS} />
      <EligibilityCriteriaSection criteriaCards={RUSSIA_ELIGIBILITY_CRITERIA} />
      <AdmissionProcessSection steps={RUSSIA_ADMISSION_STEPS} />
      <DocumentsRequiredSection docItems={RUSSIA_DOCUMENTS_REQUIRED} />
      <UniversitiesSection universitiesBase={RUSSIA_UNIVERSITIES} />
      <WhatStudentsSaySection testimonials={RUSSIA_TESTIMONIALS} />
      <FAQSection items={RUSSIA_FAQ_ITEMS} />

      {/* CTA */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-[#00999E] text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-extrabold">Ready to start your MBBS journey?</h3>
              <p className="text-white/90 mt-2">
                Book a free counselling call and get a personalised shortlist for Russia.
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
