import ModalTrigger from "@/components/ModalTrigger";
import CampaignNavbar from "@/components/campaign/CampaignNavbar";
import type { CampaignNavLink } from "@/components/campaign/CampaignNavbar";
import CampaignFooter from "@/components/campaign/CampaignFooter";
import HeroSection from "@/components/campaign/HeroSection";
import OverviewSection from "@/components/campaign/OverviewSection";
import CampaignTabs, { KAZAKHSTAN_CAMPAIGN_TABS } from "@/components/campaign/CampaignTabs";
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
  KAZAKHSTAN_OVERVIEW_CONTENT,
  KAZAKHSTAN_TESTIMONIALS,
  KAZAKHSTAN_WHAT_STUDENTS_SAY_INTRO,
  KAZAKHSTAN_QUICK_FACTS_SECTION,
  KAZAKHSTAN_WHY_CHOOSE_CARDS,
  KAZAKHSTAN_WHY_CHOOSE_INTRO,
  KAZAKHSTAN_ELIGIBILITY_CRITERIA,
  KAZAKHSTAN_ELIGIBILITY_INTRO,
  KAZAKHSTAN_ADMISSION_STEPS,
  KAZAKHSTAN_ADMISSION_PROCESS_INTRO,
  KAZAKHSTAN_DOCUMENTS_INTRO,
  KAZAKHSTAN_DOCUMENTS_REQUIRED,
  KAZAKHSTAN_UNIVERSITIES,
  KAZAKHSTAN_FAQ_ITEMS,
  KAZAKHSTAN_HERO,
  // KAZAKHSTAN_HERO_IMAGE_URL,
} from "@/constants/campaigns/kazakhstanConstent";

import mbbs_kazakhstan from "@/assets/kazakhstan.jpg";


const KAZAKHSTAN_THANKYOU = "/mbbs/abroad/kazakhstan/campaign/thankyou";
const KAZAKHSTAN_PHONE_NUMBER = "+919831241212";

const KAZAKHSTAN_NAV_LINKS: CampaignNavLink[] = [
  { href: "#overview", label: "Overview" },
  { href: "#why-choose-kazakhstan", label: "Why Kazakhstan?" },
  { href: "#universities", label: "Universities" },
  { href: "#eligibility-criteria", label: "Eligibility" },
  { href: "#faq", label: "FAQ" },
];

export interface KazakhstanCampaignPageProps {
  /** Redirect path after registration. Defaults to Kazakhstan campaign thank-you page. */
  redirectPath?: string;
}

export default function KazakhstanCampaignPage({
  redirectPath = KAZAKHSTAN_THANKYOU,
}: KazakhstanCampaignPageProps) {
  return (
    <div className="min-h-screen">
      <CampaignNavbar redirectPath={redirectPath} navLinks={KAZAKHSTAN_NAV_LINKS} />

      <HeroSection
        heroImage={mbbs_kazakhstan}
        tagline={KAZAKHSTAN_HERO.tagline}
        title={KAZAKHSTAN_HERO.title}
        titleHighlight={KAZAKHSTAN_HERO.titleHighlight}
        description={KAZAKHSTAN_HERO.description}
        stats={
          KAZAKHSTAN_HERO.stats.map((stat) => ({
            value: typeof stat.value !== "string" ? stat.value : "",
            label: stat.label,
          }))
        }
        ctaText={KAZAKHSTAN_HERO.ctaText}
        redirectPath={redirectPath}
      />

      <div className="sticky top-18.5 md:top-24 z-50">
        <CampaignTabs tabs={KAZAKHSTAN_CAMPAIGN_TABS} />
      </div>

      <section id="overview" className="bg-white pt-10 md:pt-14 scroll-mt-24">
        <OverviewSection
          overviewContent={KAZAKHSTAN_OVERVIEW_CONTENT}
          testimonials={KAZAKHSTAN_TESTIMONIALS}
          countryName="Kazakhstan"
        />
      </section>

      <QuickFactsSection {...KAZAKHSTAN_QUICK_FACTS_SECTION} redirectPath={redirectPath} />

      <WhyChooseRussiaSection
        cards={KAZAKHSTAN_WHY_CHOOSE_CARDS}
        countryName="Kazakhstan"
        sectionId="why-choose-kazakhstan"
        headingSuffix={
          <>
            {" "}
            with <span className="text-[#00999E]">TIE</span>
          </>
        }
        introParagraph={KAZAKHSTAN_WHY_CHOOSE_INTRO}
      />

      <EligibilityCriteriaSection
        criteriaCards={KAZAKHSTAN_ELIGIBILITY_CRITERIA}
        countryName="Kazakhstan"
        introParagraph={KAZAKHSTAN_ELIGIBILITY_INTRO}
      />

      <AdmissionProcessSection
        steps={KAZAKHSTAN_ADMISSION_STEPS}
        countryName="Kazakhstan"
        countryAdjective="Kazakh"
        introOverride={KAZAKHSTAN_ADMISSION_PROCESS_INTRO}
        admissionAccent={<span className="text-[#5dd4d9]">with TIE</span>}
      />

      <DocumentsRequiredSection
        docItems={KAZAKHSTAN_DOCUMENTS_REQUIRED}
        countryName="Kazakhstan"
        introParagraph={KAZAKHSTAN_DOCUMENTS_INTRO}
      />
      <UniversitiesSection universitiesBase={KAZAKHSTAN_UNIVERSITIES} countryName="Kazakhstan" />
      <WhatStudentsSaySection
        testimonials={KAZAKHSTAN_TESTIMONIALS}
        countryName="Kazakhstan"
        introParagraph={KAZAKHSTAN_WHAT_STUDENTS_SAY_INTRO}
      />
      <FAQSection items={KAZAKHSTAN_FAQ_ITEMS} />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-[#00999E] text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-extrabold">Ready to start your MBBS journey?</h3>
              <p className="text-white/90 mt-2">
                Book a free counselling call and get a personalised shortlist for Kazakhstan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <ModalTrigger
                text="BOOK FREE COUNSELLING"
                redirectPath={redirectPath}
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              />
              <a
                href={`tel:${KAZAKHSTAN_PHONE_NUMBER.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0b1b1c] hover:bg-white/90"
              >
                Call {KAZAKHSTAN_PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CampaignFooter />
      <ScrollToTopButton phoneNumber={KAZAKHSTAN_PHONE_NUMBER} />
    </div>
  );
}
