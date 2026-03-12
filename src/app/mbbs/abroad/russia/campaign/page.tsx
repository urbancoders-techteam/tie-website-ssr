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

function CampaignNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur border-b border-gray-200 shadow-md">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="TIE Home">
          <Image
            src="/images/TIE_LOGO.png"
            alt="Taksheela Institute of Education"
            width={140}
            height={56}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-700">


          <Link href="#why-choose-russia" className="hover:text-[#00999E] font-bold">
            Highlights
          </Link>

          <Link href="#why" className="hover:text-[#00999E] font-bold">
            Why Russia?
          </Link>

          <Link href="#apply" className="hover:text-[#00999E] font-bold">
            Apply
          </Link>

        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919831241212"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:border-gray-400"
          >
            <FaPhoneAlt className="shrink-0" aria-hidden />
            +91 9831241212
          </a>
          <a
            href="#apply"
            className="inline-flex items-center rounded-lg bg-[#00999E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#007a7f]"
          >
            Get Guidance
          </a>
        </div>
      </div>
    </header>
  );
}

function CampaignFooter() {
  return (
    <footer className="bg-[#0b1b1c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <Image
            src="/images/TIE_LOGO.png"
            alt="Taksheela Institute of Education"
            width={160}
            height={64}
          />
          <p className="text-sm text-white/80">
            Get end-to-end guidance for MBBS abroad—from counselling to confirmed admits.
          </p>
        </div>

        <div className="space-y-2 text-sm text-white/80">
          <div className="font-semibold text-white">Contact</div>
          <a className="block hover:text-white" href="tel:+919831241212">
            +91 9831241212
          </a>
          <a className="block hover:text-white" href="mailto:info@taksheela.com">
            info@taksheela.com
          </a>
        </div>

        <div className="space-y-2 text-sm text-white/80">
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

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        Copyright ©️ {new Date().getFullYear()} Taksheela Institute of Education. All rights
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
      <div className="sticky top-24 z-50 w-full scroll-mt-24 shadow-b-md">
        <CampaignTabs />
      </div>

      {/* Overview of MBBS in Russia – tabs + content + testimonial */}
      <section id="overview" className="font-sans bg-white pt-10 md:pt-14 scroll-mt-24">
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
      <section className="py-14 md:py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-[#00999E] text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-extrabold">Ready to start your MBBS journey?</h3>
              <p className="text-white/90 mt-2">
                Book a free counselling call and get a personalised shortlist for Russia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <ModalTrigger className="bg-white text-[#0b1b1c] hover:bg-white/90" text="BOOK FREE COUNSELLING" />
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
    </div>
  );
}

