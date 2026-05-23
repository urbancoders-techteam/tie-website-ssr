import ContainerWrapper from "../ContainerWrapper";

type WhyChooseCard = {
  icon: string;
  title: string;
  description: string;
};

const cards: WhyChooseCard[] = [
  {
    icon: "🏆",
    title: "Verified Track Record",
    description:
      "Hundreds of successfully placed students across India, Nepal, and Bangladesh in top NMC-approved medical universities worldwide.",
  },
  {
    icon: "🔒",
    title: "Only NMC-Approved Universities",
    description:
      "We never recommend non-NMC universities. Your FMGE eligibility and legal right to practise medicine in India are always protected.",
  },
  {
    icon: "🫧",
    title: "Transparent Fee Disclosure",
    description:
      "Every rupee accounted for - tuition, hostel, living, insurance. No surprise costs, no hidden charges, and no undisclosed commissions. Ever.",
  },
  {
    icon: "🌍",
    title: "12+ Country Expertise",
    description:
      "Deep, current knowledge of admissions regulations, visa processes, and student life across all 12 MBBS destinations - not just the popular ones.",
  },
  {
    icon: "📚",
    title: "NEET + IELTS Test Preparation",
    description:
      "Taksheela is also a leading test prep institute - we help you score higher before you apply, unlocking better universities and stronger scholarships.",
  },
  {
    icon: "🤝",
    title: "Lifetime Post-Admission Support",
    description:
      "FMGE coaching materials, alumni mentorship network, and a dedicated support team active throughout your complete MBBS journey abroad.",
  },
];

export default function WhyChooseTaksheela() {
  return (
    <section className="bg-[#f3f6fb] py-12 md:py-16">
      <ContainerWrapper>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-[30px] md:text-5xl font-semibold leading-tight text-[#00999E]">
              Why Choose Taksheela?
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#f0b42f]" />
            <p className="mx-auto mt-4 max-w-3xl text-sm md:text-[18px] leading-relaxed text-[#687b98]">
              Taksheela is not just an MBBS study abroad consultancy — we are your medical career
              partner, from the day you call us to the day you wear your white coat.
            </p>
          </div>

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex h-full min-w-[85%] snap-start flex-col rounded-xl border border-[#d6dfeb] bg-white p-5 text-center shadow-[0_8px_24px_rgba(20,63,119,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(20,63,119,0.18)] md:min-w-0"
              >
                <div className="flex h-12 items-center justify-center text-4xl" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="mt-4 min-h-[56px] text-lg font-semibold leading-snug text-[#00999E] md:min-h-[64px] md:text-xl">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5e7290] md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
