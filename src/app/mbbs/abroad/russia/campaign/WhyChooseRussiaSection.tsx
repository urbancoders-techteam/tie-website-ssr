import {
  FaRubleSign,
  FaUniversity,
  FaClipboardCheck,
  FaHospital,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const cards: {
  icon: IconType;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}[] = [
    {
      icon: FaRubleSign,
      iconBg: "bg-[#e0f7f8]",
      iconColor: "text-[#00999E]",
      title: "Affordable Tuition Fees",
      desc: "Compared to private medical colleges in India, where the total cost can reach ₹80 lakh or more, many government medical universities in Russia offer the entire 6-year MBBS program for approximately ₹15–₹30 lakh, making it a far more affordable pathway to a medical career.",
    },
    {
      icon: FaUniversity,
      iconBg: "bg-[#e0f7f8]",
      iconColor: "text-[#00999E]",
      title: "NMC-Compliant Universities",
      desc: "Several medical universities in Russia follow the guidelines set by the National Medical Commission (NMC). This allows Indian students to pursue their medical degree abroad while maintaining eligibility for licensing examinations in India.",
    },
    {
      icon: FaClipboardCheck,
      iconBg: "bg-[#e0f7f8]",
      iconColor: "text-[#00999E]",
      title: "Simple and Transparent Admission Process",
      desc: "With Taksheela’s expert guidance, the admission process for MBBS in Russia is straightforward and transparent. Students are admitted based on their academic eligibility, without the need for capitation fees or donations.",
    },
    {
      icon: FaHospital,
      iconBg: "bg-[#e0f7f8]",
      iconColor: "text-[#00999E]",
      title: "Strong Clinical Training and Infrastructure",
      desc: "Many Russian medical universities have a long academic legacy and well-developed medical facilities. Students receive extensive clinical exposure through affiliated hospitals, helping them build practical skills alongside theoretical knowledge.",
    },
    {
      icon: FaHospital,
      iconBg: "bg-[#e0f7f8]",
      iconColor: "text-[#00999E]",
      title: "English-Medium Programs",
      desc: "Several leading universities in Russia offer MBBS programs taught in English, making it easier for international students to adapt academically. Basic Russian language training is usually provided to support communication during clinical practice.",
    },
    {
      icon: FaHospital,
      iconBg: "bg-[#e0f7f8]",
      iconColor: "text-[#00999E]",
      title: "Supportive Student Community",
      desc: "With Taksheela Institute of Education, students receive personalised counselling, university selection assistance, and complete admission guidance—ensuring a smooth start to their MBBS journey in Russia.",
    },
  ];

export default function WhyChooseRussiaSection() {
  return (
    <section
      id="why-choose-russia"
      className="font-sans py-14 md:py-18 bg-white scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Choose{" "}
          <span className="relative inline-block border-b-2 border-[#00999E] pb-0.5">
            <span className="text-[#00999E]">Russia</span>
          </span>{" "}
          for MBBS
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Pursuing <span className="text-[#00999E] font-bold">MBBS in Russia</span> has become a popular option for Indian students seeking quality medical education at an affordable cost. With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students can access reputed Russian medical universities that offer strong <span className="text-[#00999E] font-bold">academic training</span>, <span className="text-[#00999E] font-bold">modern infrastructure</span>, and <span className="text-[#00999E] font-bold">global recognition</span>. Here are some key reasons why Russia continues to be a preferred destination for aspiring doctors.
        </p>

        <div className=" mt-10 rounded-xl bg-gradient-to-b from-gray-50 to-[#00999E] mx-auto max-w-7xl p-4">
          <div className="why-choose-cards-scroll h-[350px] overflow-y-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-xl bg-white border border-gray-200 shadow-sm p-6 flex flex-col"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor} text-xl shrink-0`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-gray-900">{card.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
