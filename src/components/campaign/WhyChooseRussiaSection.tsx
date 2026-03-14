import {
  FaRubleSign,
  FaUniversity,
  FaClipboardCheck,
  FaHospital,
} from "react-icons/fa";
const WHY_CHOOSE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  FaRubleSign,
  FaUniversity,
  FaClipboardCheck,
  FaHospital,
};

export interface WhyChooseRussiaSectionProps {
  cards: { icon: string; iconBg: string; iconColor: string; title: string; desc: string }[];
  countryName?: string;
  sectionId?: string;
  countryAdjective?: string;
}

export default function WhyChooseRussiaSection({
  cards,
  countryName = "Russia",
  sectionId = "why-choose-russia",
  countryAdjective = "Russian",
}: WhyChooseRussiaSectionProps) {
  return (
    <section
      id={sectionId}
      className="py-14 md:py-18 bg-white scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-gray-900">
          Why Choose{" "}
          <span className="relative inline-block border-[#00999E] pb-0.5">
            <span className="text-[#00999E]">{countryName}</span>
          </span>{" "}
          for MBBS
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg text-justify">
          Pursuing <span className="text-[#00999E] font-bold">MBBS in {countryName}</span> has become a popular option for Indian students seeking quality medical education at an affordable cost. With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, students can access reputed {countryAdjective} medical universities that offer strong <span className="text-[#00999E] font-bold">academic training</span>, <span className="text-[#00999E] font-bold">modern infrastructure</span>, and <span className="text-[#00999E] font-bold">global recognition</span>. Here are some key reasons why {countryName} continues to be a preferred destination for aspiring doctors.
        </p>

        <div className=" mt-10 rounded-xl bg-gradient-to-b from-gray-50 to-[#00999E] mx-auto max-w-7xl p-4">
          <div className="why-choose-cards-scroll h-[350px] overflow-y-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card) => {
                const IconComponent = WHY_CHOOSE_ICONS[card.icon];
                return (
                  <div
                    key={card.title}
                    className="rounded-xl bg-white border border-gray-200 shadow-sm p-6 flex flex-col"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor} text-xl shrink-0`}
                      >
                        {IconComponent ? <IconComponent className="w-6 h-6" /> : null}
                      </div>
                      <h3 className="font-bold text-gray-900">{card.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-justify">{card.desc}</p>
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
