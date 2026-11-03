import { FaWhatsapp } from "react-icons/fa";
import FAQSection from "@/components/campaign/FAQSection";
import DubaiScolarship from "./DubaiScolarship";
import DubaiCampaignHeader from "./DubaiCampaignHeader";
import DubaiCostOfLiving from "./DubaiCostOfLiving";
import DubaiComparison from "./DubaiComparison";
import DubaiConnectBand from "./DubaiConnectBand";
import DubaiHero from "./DubaiHero";
import WhyStudyInDubai from "./WhyStudyInDubai";
import { DUBAI_FAQ_ITEMS, DUBAI_PHONE } from "./dubaiContent";
import DubaiTopRankedUniversities from "./DubaiTopRankedUniversities";
import Footer from "@/components/Footer";

export default function DubaiCampaignPage() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#FBF8F3] text-[#122033]">
      <DubaiCampaignHeader />
      <main>
        <DubaiHero />
        <WhyStudyInDubai />
        <DubaiConnectBand />
        <DubaiComparison />
        <DubaiTopRankedUniversities />
        <DubaiScolarship />
        <DubaiConnectBand />
        <DubaiCostOfLiving />
        <FAQSection
          items={DUBAI_FAQ_ITEMS}
          heading="Frequently Asked Question – Study In Dubai"
          sectionId="faqs"
          initialVisibleCount={0}
          variant="dubai"
        />
      </main>
      <Footer />
      <a
        href={`https://wa.me/${DUBAI_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I want to know about studying in Dubai.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.85)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <FaWhatsapp className="h-7 w-7" aria-hidden />
      </a>
      <style>{`
        @keyframes dubai-kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.08) translate3d(-1.5%, -1%, 0); }
        }
        .dubai-kenburns { animation: dubai-kenburns 32s ease-in-out infinite alternate; }
        @keyframes dubai-rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .dubai-rise { animation: dubai-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        @keyframes dubai-line {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .dubai-line { transform-origin: left center; animation: dubai-line 0.8s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .dubai-cta { position: relative; isolation: isolate; overflow: hidden; }
        .dubai-cta::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%);
          transform: translateX(-130%);
          transition: transform 0.6s ease;
        }
        .dubai-cta:hover::after { transform: translateX(130%); }
        @media (prefers-reduced-motion: reduce) {
          .dubai-kenburns, .dubai-rise, .dubai-line { animation: none; }
          .dubai-cta::after { display: none; }
        }
      `}</style>
    </div>
  );
}
