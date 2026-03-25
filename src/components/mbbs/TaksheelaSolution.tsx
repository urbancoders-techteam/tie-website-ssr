import ContainerWrapper from "../ContainerWrapper";

type SolutionCard = {
  id: string;
  title: string;
  description: string;
};

const solutionCards: SolutionCard[] = [
  {
    id: "01",
    title: "Access 100+ NMC-Approved Universities",
    description:
      "We shortlist only WHO-listed, NMC-compliant universities - your degree is valid in India and respected worldwide. Zero risk of wasted years.",
  },
  {
    id: "02",
    title: "Save ₹20-70 Lakh vs. Indian Private Colleges",
    description:
      "Russia, Bangladesh, and Kyrgyzstan offer full MBBS programs with accommodation under ₹30 lakh total - a fraction of domestic private college costs.",
  },
  {
    id: "03",
    title: "No Capitation. No Donation. No Bias.",
    description:
      "Top medical universities abroad admit students on academic merit and NEET score alone - transparent, fair, and financially honest.",
  },
  {
    id: "04",
    title: "Skip the Drop Year Cycle",
    description:
      "Secure a confirmed MBBS seat abroad this cycle itself. Stop losing years. Begin your medical journey on schedule.",
  },
  {
    id: "05",
    title: "Verified, Transparent Counselling",
    description:
      "Complete fee breakdowns, university profiles, and current student reviews - shared upfront. Nothing hidden. Nothing misleading.",
  },
  {
    id: "06",
    title: "Dedicated Nepal and Bangladesh Support",
    description:
      "Special intake pathways, document guidance, and embassy support specifically for Nepali and Bangladeshi students - not an afterthought, a core service.",
  },
];

export default function TaksheelaSolution() {
  return (
    <section className="bg-[#f3f6fb] py-12 md:py-16">
      <ContainerWrapper>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-[30px] md:text-5xl font-semibold leading-tight text-[#00999E]">
              The Taksheela Solution
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#f0b42f]" />
            <p className="mx-auto mt-4 max-w-3xl text-sm md:text-[18px] leading-relaxed text-[#687b98]">
              Every challenge you face has a clear path forward. Here is how our expert
              counsellors solve each one - for students from India, Nepal, and Bangladesh.
            </p>
          </div>

          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:pb-0 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <article
                key={card.id}
                className="flex h-full min-w-[85%] snap-start flex-col rounded-xl border border-[#d4dde9] border-t-3 border-t-[#12868a] bg-white p-5 shadow-[0_8px_22px_rgba(20,63,119,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(20,63,119,0.16)] md:min-w-0"
              >
                <p className="text-4xl font-extrabold leading-none text-[#d8e0ed]">{card.id}</p>
                <h3 className="mt-4 min-h-[56px] text-lg font-semibold leading-snug text-[#00999E]">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm md:text-base leading-relaxed text-[#607393]">
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
