import Image from "next/image";
import Link from "next/link";
import ModalTrigger from "@/components/ModalTrigger";
import { FaPhoneAlt } from "react-icons/fa";
import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import CampaignTabs from "./CampaignTabs";
import QuickFactsSection from "./QuickFactsSection";
import WhyChooseRussiaSection from "./WhyChooseRussiaSection";
import EligibilityCriteriaSection from "./EligibilityCriteriaSection";
import AdmissionProcessSection from "./AdmissionProcessSection";
import DocumentsRequiredSection from "./DocumentsRequiredSection";
import UniversitiesSection from "./UniversitiesSection";
import FAQSection from "./FAQSection";
import WhatStudentsSaySection from "./WhatStudentsSaySection";
import ScrollToTopButton from "./ScrollToTopButton";

function CampaignNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#00999E] via-[#008c91] to-[#5dd4d9] backdrop-blur border-b border-white/20 shadow-md">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 rounded-lg bg-white/95 px-2 shadow-sm" aria-label="TIE Home">
          <Image
            src="/images/TIE_LOGO.png"
            alt="Taksheela Institute of Education"
            width={140}
            height={56}
            className="h-auto w-[110px] sm:w-[130px] md:w-[140px]"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-base lg:text-lg font-medium text-white/95">
          <Link href="#overview" className="hover:text-white font-bold whitespace-nowrap">
            Overview
          </Link>
          <Link href="#why-choose-russia" className="hover:text-white font-bold whitespace-nowrap">
            Why Russia?
          </Link>
          <Link href="#universities" className="hover:text-white font-bold whitespace-nowrap">
            Universities
          </Link>
          <Link href="#eligibility-criteria" className="hover:text-white font-bold whitespace-nowrap">
            Eligibility
          </Link>
          <Link href="#faq" className="hover:text-white font-bold whitespace-nowrap">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919831241212"
            className="hidden lg:inline-flex items-center gap-2 rounded-lg border border-white/40 px-3 py-2 text-sm text-white hover:bg-white/10"
          >
            <FaPhoneAlt className="shrink-0" aria-hidden />
            +91 9831241212
          </a>
        
          <ModalTrigger
            variant="custom"
            text="Get Guidance"
            redirectPath="/mbbs/abroad/russia/campaign/thankyou"
            className="rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          />
        </div>
      </div>
    </header>
  );
}

function CampaignFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#00999E] via-[#008c91] to-[#5dd4d9] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-white/95 px-3 shadow-sm">
            <Image
              src="/images/TIE_LOGO.png"
              alt="Taksheela Institute of Education"
              width={160}
              height={64}
              className="h-auto w-[140px] sm:w-[160px]"
            />
          </div>
          <p className="text-sm text-white/90">
            Get end-to-end guidance for MBBS abroad—from counselling to confirmed admits.
          </p>
        </div>

        <div className="space-y-2 text-sm text-white/90">
          <div className="font-semibold text-white">Contact</div>
          <a className="block hover:text-white" href="tel:+919831241212">
            +91 9831241212
          </a>
          <a className="block hover:text-white" href="mailto:info@taksheela.com">
            info@taksheela.com
          </a>
        </div>

        <div className="space-y-2 text-sm text-white/90">
          <div className="font-semibold text-white">Links</div>
          <Link className="block hover:text-white" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="block hover:text-white" href="/terms-and-conditions">
            Terms & Conditions
          </Link>
          <Link className="block hover:text-white" href="/refund-policy">
            Refund Policy
          </Link>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-xs text-white/80">
        Copyright <span className="text-white text-[15px]">©</span> {new Date().getFullYear()} Taksheela Institute of Education. All rights
        reserved.
      </div>
    </footer>
  );
}

export default function RussiaCampaignPage() {
  return (
    <div className="min-h-screen bg-white">

      <CampaignNavbar />

      {/* Hero */}
      <HeroSection />

      {/* Campaign Tabs – inner content uses max-w-7xl px-4 in CampaignTabs */}
      <div className="sticky top-18.5 md:top-24 z-50">
        <CampaignTabs />
      </div>

      {/* Overview of MBBS in Russia – tabs + content + testimonial */}
      <section id="overview" className="bg-white pt-10 md:pt-14 scroll-mt-24">
        <OverviewSection />
      </section>

      {/* Quick Facts Section */}
      <QuickFactsSection />

      {/* Why Choose Russia Section */}
      <WhyChooseRussiaSection />

      {/* Eligibility Criteria Section */}
      <EligibilityCriteriaSection />

      {/* Admission Process Section */}
      <AdmissionProcessSection />

      {/* Documents Required Section */}
      <DocumentsRequiredSection />

      <UniversitiesSection />

      {/* What Students Say Section */}
      <WhatStudentsSaySection />

      {/* FAQ Section */}
      <FAQSection />

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
                redirectPath="/mbbs/abroad/russia/campaign/thankyou"
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

