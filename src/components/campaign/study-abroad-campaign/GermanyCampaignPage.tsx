import { FaWhatsapp } from "react-icons/fa";
import FAQSection from "@/components/campaign/FAQSection";
import Footer from "@/components/Footer";
import { germanyCampaignData } from "./campaign-data/germanyCampaignData";
import StudyAbroadConnectBand from "./custom-components/studyAbroadConnectBand";
import StudyAbroadCostOfLiving from "./custom-components/studyAbroadCostOfLiving";
import StudyAbroadCourses from "./custom-components/studyAbroadCourses";
import StudyAbroadHeader from "./custom-components/studyAbroadHeader";
import StudyAbroadHero from "./custom-components/studyAbroadHero";
import StudyAbroadMotion from "./custom-components/studyAbroadMotion";
import StudyAbroadScholarship from "./custom-components/studyAbroadScholarship";
import StudyAbroadUniversities from "./custom-components/studyAbroadUniversities";
import StudyAbroadWhy from "./custom-components/studyAbroadWhy";

export default function GermanyCampaignPage() {
  const data = germanyCampaignData;
  const whatsappHref = `https://wa.me/${data.phone.replace(/\D/g, "")}?text=${encodeURIComponent(data.whatsappMessage)}`;

  return (
    <div className="min-h-screen scroll-smooth" style={{ background: data.theme.pageBackground, color: data.theme.text }}>
      <StudyAbroadHeader containerClass={data.containerClass} nav={data.header.nav} />
      <main>
        <StudyAbroadHero containerClass={data.containerClass} hero={data.hero} leadForm={data.leadForm} />
        <StudyAbroadWhy containerClass={data.containerClass} why={data.why} />
        <StudyAbroadConnectBand
          containerClass={data.containerClass}
          connect={data.connect}
          leadForm={data.leadForm}
          phone={data.phone}
          phoneDisplay={data.phoneDisplay}
          email={data.email}
        />
        <StudyAbroadCourses containerClass={data.containerClass} courses={data.courses} />
        <StudyAbroadUniversities containerClass={data.containerClass} universities={data.universities} />
        <StudyAbroadScholarship containerClass={data.containerClass} scholarship={data.scholarship} />
        <StudyAbroadConnectBand
          containerClass={data.containerClass}
          connect={data.connect}
          leadForm={data.leadForm}
          phone={data.phone}
          phoneDisplay={data.phoneDisplay}
          email={data.email}
        />
        <StudyAbroadCostOfLiving containerClass={data.containerClass} costOfLiving={data.costOfLiving} />
        <FAQSection
          items={data.faq.items}
          heading={data.faq.heading}
          sectionId={data.faq.sectionId}
          initialVisibleCount={data.faq.initialVisibleCount}
          variant={data.faq.variant}
        />
      </main>
      <Footer theme={data.theme.footer} />
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.85)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <FaWhatsapp className="h-7 w-7" aria-hidden />
      </a>
      <StudyAbroadMotion />
    </div>
  );
}
