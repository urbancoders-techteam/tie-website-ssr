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
      desc: "The cost of pursuing MBBS in Russia is significantly lower compared to private medical colleges in India. Students can complete their entire course at a fraction of the cost without compromising on the quality of education.",
    },
    {
      icon: FaUniversity,
      iconBg: "bg-[#e0f7f8]",
      iconColor: "text-[#00999E]",
      title: "NMC-Compliant Universities",
      desc: "Several Russian medical universities are recognised and approved by the National Medical Commission (NMC) of India. This ensures that your degree is valid for practice in India after clearing the FMGE.",
    },
    {
      icon: FaClipboardCheck,
      iconBg: "bg-[#e0f7f8]",
      iconColor: "text-[#00999E]",
      title: "Straightforward Admission Process",
      desc: "Unlike the intense competition and capitation fees in India, the admission process for MBBS in Russia is transparent and straightforward. No donations or heavy capitation fees are required.",
    },
    {
      icon: FaHospital,
      iconBg: "bg-[#e0f7f8]",
      iconColor: "text-[#00999E]",
      title: "Clinical Exposure and Infrastructure",
      desc: "Russian medical universities are among the oldest and are equipped with advanced facilities and hospitals. Students get extensive clinical exposure throughout their course.",
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
        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl">
          Pursuing MBBS in Russia offers a blend of affordability and quality
          education that is hard to find elsewhere. These are some of the major
          reasons why you should go ahead with it.
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
                    <div
                      className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor} text-xl shrink-0`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mt-4">{card.title}</h3>
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
