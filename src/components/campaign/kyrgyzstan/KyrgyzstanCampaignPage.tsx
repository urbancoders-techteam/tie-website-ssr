import BookCouncilBanner from "@/components/BookCouncilBanner";
import CampaignNavbar from "@/components/campaign/CampaignNavbar";
import CampaignFooter from "@/components/campaign/CampaignFooter";
import CustomHeroSection from "@/components/custom-component/CustomHeroSection";
import { renderCampaignHeroTitle } from "@/components/custom-component/renderCampaignHeroTitle";
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

      <CustomHeroSection
        heroImage={kyrgyzstanHeroImg}
        imageClassName="object-contain object-top md:object-cover md:object-center"
        semanticH1={KYRGYZSTAN_HERO.title}
        tagline={KYRGYZSTAN_HERO.tagline}
        title={renderCampaignHeroTitle(KYRGYZSTAN_HERO.title, KYRGYZSTAN_HERO.titleHighlight)}
        description={KYRGYZSTAN_HERO.description}
        stats={
          Array.isArray(KYRGYZSTAN_HERO.stats)
            ? KYRGYZSTAN_HERO.stats.map((stat) => ({
                value: typeof stat.value !== "string" ? stat.value : "",
                label: stat.label,
              }))
            : []
        }
        primaryCta={{
          kind: "modal",
          text: KYRGYZSTAN_HERO.ctaText,
          redirectPath,
          className: "text-white",
        }}
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

      <BookCouncilBanner
        redirectPath={redirectPath}
        heading="Ready to start your MBBS journey?"
        description="Book a free counselling call and get a personalised shortlist for Kyrgyzstan."
        bookButtonText="BOOK FREE COUNSELLING"
        phone={{ tel: KYRGYZSTAN_PHONE_NUMBER }}
      />

      <CampaignFooter />
      <ScrollToTopButton phoneNumber={KYRGYZSTAN_PHONE_NUMBER} />
    </div>
  );
}
