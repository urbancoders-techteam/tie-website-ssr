import BookCouncilBanner from "@/components/BookCouncilBanner";
import CampaignNavbar from "@/components/campaign/CampaignNavbar";
import CampaignFooter from "@/components/campaign/CampaignFooter";
import CustomHeroSection from "@/components/custom-component/CustomHeroSection";
import { renderCampaignHeroTitle } from "@/components/custom-component/renderCampaignHeroTitle";
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

const uzbekistan_hero_img = `${imageBaseUrl}mbbsCollege/India/mbbsIndiahero.png`;

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
      <CustomHeroSection
        heroImage={uzbekistan_hero_img}
        imageClassName="object-contain object-top md:object-cover md:object-center"
        semanticH1={UZBEKISTAN_HERO.title}
        tagline={UZBEKISTAN_HERO.tagline}
        title={renderCampaignHeroTitle(UZBEKISTAN_HERO.title, UZBEKISTAN_HERO.titleHighlight)}
        description={UZBEKISTAN_HERO.description}
        stats={
          Array.isArray(UZBEKISTAN_HERO.stats)
            ? UZBEKISTAN_HERO.stats.map((stat) => ({
                value: typeof stat.value !== "string" ? stat.value : "",
                label: stat.label,
              }))
            : []
        }
        primaryCta={{
          kind: "modal",
          text: UZBEKISTAN_HERO.ctaText,
          redirectPath,
          className: "text-white",
        }}
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

      <BookCouncilBanner
        redirectPath={redirectPath}
        heading="Ready to start your MBBS journey?"
        description="Book a free counselling call and get a personalised shortlist for Uzbekistan."
        bookButtonText="BOOK FREE COUNSELLING"
        phone={{ tel: UZBEKISTAN_PHONE_NUMBER }}
      />

      <CampaignFooter />
      <ScrollToTopButton phoneNumber={UZBEKISTAN_PHONE_NUMBER} />
    </div>
  );
}
