import BookCouncilBanner from "@/components/BookCouncilBanner";
import CampaignNavbar from "@/components/campaign/CampaignNavbar";
import CampaignFooter from "@/components/campaign/CampaignFooter";
import CustomHeroSection from "@/components/custom-component/CustomHeroSection";
import { renderCampaignHeroTitle } from "@/components/custom-component/renderCampaignHeroTitle";
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
  RUSSIA_WHAT_STUDENTS_SAY_INTRO,
  RUSSIA_QUICK_FACTS_SECTION,
  RUSSIA_WHY_CHOOSE_CARDS,
  RUSSIA_WHY_CHOOSE_INTRO,
  RUSSIA_ELIGIBILITY_CRITERIA,
  RUSSIA_ELIGIBILITY_INTRO,
  RUSSIA_ADMISSION_STEPS,
  RUSSIA_DOCUMENTS_INTRO,
  RUSSIA_DOCUMENTS_REQUIRED,
  RUSSIA_UNIVERSITIES,
  RUSSIA_FAQ_ITEMS,
  RUSSIA_HERO,
} from "@/constants/campaigns/russiaConstent";
import type { CampaignNavLink } from "@/components/campaign/CampaignNavbar";
import { imageBaseUrl } from "@/utils/config";

const RUSSIA_THANKYOU = "/mbbs/abroad/russia/campaign/thankyou";
const RUSSIA_PHONE_NUMBER = "+919831241212";

const russia_hero_img =  `${imageBaseUrl}mbbsCollege/russia/campaign/mbbs_russia.png`;

const RUSSIA_NAV_LINKS: CampaignNavLink[] = [
  { href: "#overview", label: "Overview" },
  { href: "#why-choose-russia", label: "Why Russia?" },
  { href: "#universities", label: "Universities" },
  { href: "#eligibility-criteria", label: "Eligibility" },
  { href: "#faq", label: "FAQ" },
];

export interface RussiaCampaignPageProps {
  redirectPath?: string;
}

export default function RussiaCampaignPage({
  redirectPath = RUSSIA_THANKYOU,
}: RussiaCampaignPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <CampaignNavbar redirectPath={redirectPath} navLinks={RUSSIA_NAV_LINKS} />

      {/* Hero */}
      <CustomHeroSection
        heroImage={russia_hero_img}
        imageClassName="object-contain object-top md:object-cover md:object-center"
        semanticH1={RUSSIA_HERO.title}
        tagline={RUSSIA_HERO.tagline}
        title={renderCampaignHeroTitle(RUSSIA_HERO.title, RUSSIA_HERO.titleHighlight)}
        description={RUSSIA_HERO.description}
        stats={
          Array.isArray(RUSSIA_HERO.stats)
            ? RUSSIA_HERO.stats.map((stat) => ({
                value: typeof stat.value !== "string" ? stat.value : "",
                label: stat.label,
              }))
            : []
        }
        primaryCta={{
          kind: "modal",
          text: RUSSIA_HERO.ctaText,
          redirectPath,
          className: "text-white",
        }}
      />

      {/* Campaign Tabs */}
      <div className="sticky top-18.5 md:top-24 z-50">
        <CampaignTabs />
      </div>

      {/* Overview */}
      <section id="overview" className="bg-white pt-10 md:pt-14 scroll-mt-24">
        <OverviewSection overviewContent={RUSSIA_OVERVIEW_CONTENT} testimonials={RUSSIA_TESTIMONIALS} />
      </section>

      {/* Quick Facts */}
      <QuickFactsSection {...RUSSIA_QUICK_FACTS_SECTION} />

      {/* Why Choose Russia */}
      <WhyChooseRussiaSection
        cards={RUSSIA_WHY_CHOOSE_CARDS}
        introParagraph={RUSSIA_WHY_CHOOSE_INTRO}
      />

      {/* Eligibility Criteria */}
      <EligibilityCriteriaSection
        criteriaCards={RUSSIA_ELIGIBILITY_CRITERIA}
        introParagraph={RUSSIA_ELIGIBILITY_INTRO}
      />

      {/* Admission Process */}
      <AdmissionProcessSection steps={RUSSIA_ADMISSION_STEPS} />

      {/* Documents Required */}
      <DocumentsRequiredSection
        docItems={RUSSIA_DOCUMENTS_REQUIRED}
        introParagraph={RUSSIA_DOCUMENTS_INTRO}
      />

      {/* Universities */}
      <UniversitiesSection universitiesBase={RUSSIA_UNIVERSITIES} countryName="Russia" />

      {/* Testimonials */}
      <WhatStudentsSaySection
        testimonials={RUSSIA_TESTIMONIALS}
        introParagraph={RUSSIA_WHAT_STUDENTS_SAY_INTRO}
      />

      {/* FAQ */}
      <FAQSection items={RUSSIA_FAQ_ITEMS} />

      {/* CTA */}
      <BookCouncilBanner
        redirectPath={redirectPath}
        heading="Ready to start your MBBS journey?"
        description="Book a free counselling call and get a personalised shortlist for Russia."
        bookButtonText="BOOK FREE COUNSELLING"
        phone={{ tel: RUSSIA_PHONE_NUMBER }}
      />

      <CampaignFooter />
      <ScrollToTopButton phoneNumber={RUSSIA_PHONE_NUMBER} />
    </div>
  );
}
