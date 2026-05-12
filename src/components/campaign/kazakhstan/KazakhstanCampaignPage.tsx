import BookCouncilBanner from "@/components/BookCouncilBanner";
import CampaignNavbar from "@/components/campaign/CampaignNavbar";
import type { CampaignNavLink } from "@/components/campaign/CampaignNavbar";
import CampaignFooter from "@/components/campaign/CampaignFooter";
import CustomHeroSection from "@/components/custom-component/CustomHeroSection";
import { renderCampaignHeroTitle } from "@/components/custom-component/renderCampaignHeroTitle";
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

      <CustomHeroSection
        heroImage={mbbs_kazakhstan}
        imageClassName="object-contain object-top md:object-cover md:object-center"
        semanticH1={KAZAKHSTAN_HERO.title}
        tagline={KAZAKHSTAN_HERO.tagline}
        title={renderCampaignHeroTitle(KAZAKHSTAN_HERO.title, KAZAKHSTAN_HERO.titleHighlight)}
        description={KAZAKHSTAN_HERO.description}
        stats={KAZAKHSTAN_HERO.stats.map((stat) => ({
          value: typeof stat.value !== "string" ? stat.value : "",
          label: stat.label,
        }))}
        primaryCta={{
          kind: "modal",
          text: KAZAKHSTAN_HERO.ctaText,
          redirectPath,
          className: "text-white",
        }}
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

      <BookCouncilBanner
        redirectPath={redirectPath}
        heading="Ready to start your MBBS journey?"
        description="Book a free counselling call and get a personalised shortlist for Kazakhstan."
        bookButtonText="BOOK FREE COUNSELLING"
        phone={{ tel: KAZAKHSTAN_PHONE_NUMBER }}
      />

      <CampaignFooter />
      <ScrollToTopButton phoneNumber={KAZAKHSTAN_PHONE_NUMBER} />
    </div>
  );
}
