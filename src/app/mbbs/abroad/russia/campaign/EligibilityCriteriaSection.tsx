const CRITERIA_CARDS: { title: string; titleHighlight?: boolean; desc: string }[] = [
  {
    title: "Academic Background",
    titleHighlight: true,
    desc: "Students must have a scientific senior secondary education (10+2) with physics, chemistry, and biology (PCB) as the core subjects.",
  },
  {
    title: "Academic Qualifications",
    desc: "Students from the general category must have scored at least 50% in PCB, and the reserved categories (SC/ST/OBC) are eligible for admission at 40% aggregate.",
  },
  {
    title: "Age Limit",
    titleHighlight: true,
    desc: "There is no upper age limit for pursuing an MBBS in Russia, but the minimum age is 17 years old (as of 31st December of the admission year).",
  },
  {
    title: "NEET Qualifications",
    desc: "Qualification of the NEET-UG (3-year validity) is mandatory for all Indian medical students who wish to practise their profession in India after graduation.",
  },
];

export default function EligibilityCriteriaSection() {
  return (
    <section
      id="eligibility-criteria"
      className="font-sans py-14 md:py-18 bg-white scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          MBBS in{" "}
          <span className="relative inline-block border-b-2 border-[#00999E] pb-0.5">
            <span className="text-[#00999E]">Russia</span>
          </span>{" "}
          Eligibility Criteria for Indian Students
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl">
          Meeting the eligibility criteria for pursuing the MBBS in Russia is a
          basic entry requirement for Indian students. Ensure you fulfil the
          following before applying.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-stretch lg:h-[480px]">
          {/* Left: visual with arch and student image (ID-card size) */}
          <div className="flex justify-center items-center w-full min-h-[450px] lg:min-h-0 lg:h-full">
            <div className="relative w-full max-w-[350px] h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b1b1c] via-[#0a3d40] to-[#00999E] shadow-xl shrink-0">
              {/* Inner arch cutout area with lighter gradient */}
              <div
                className="absolute inset-x-0 top-0 h-[70%] w-full"
                style={{
                  clipPath: "ellipse(90% 85% at 50% -15%)",
                  background: "linear-gradient(180deg, #e0f7f8 0%, #b8e8ea 50%, rgba(0,153,158,0.3) 100%)",
                }}
              />
              {/* Student image container - centered in arch (replace inner div with Next/Image when you have /images/eligibility-student.jpg) */}
              <div
                className="absolute inset-0 flex items-center justify-center pt-[8%]"
                style={{ clipPath: "ellipse(75% 70% at 50% 5%)" }}
              >
                <div className="relative w-[85%] aspect-[3/4] max-h-[90%] rounded-2xl overflow-hidden bg-gradient-to-b from-[#b8e8ea] to-[#00999E]/30 flex items-center justify-center">
                  <span className="text-[#00999E] font-semibold text-lg">Student</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: scrollable criteria cards */}
          <div className="eligibility-criteria-scroll h-[420px] lg:h-full min-h-[360px] overflow-y-auto rounded-xl border border-gray-200 bg-gray-50/50 p-5">
            <div className="space-y-4 pr-2">
              {CRITERIA_CARDS.map((card, index) => (
                <div
                  key={`${card.title}-${index}`}
                  className="rounded-xl bg-white border border-gray-200 shadow-sm p-6"
                >
                  <h3
                    className={`font-bold text-lg ${card.titleHighlight ? "text-[#00999E]" : "text-gray-900"
                      }`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
