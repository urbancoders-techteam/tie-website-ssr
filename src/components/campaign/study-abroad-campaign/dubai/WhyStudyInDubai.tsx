import {
  LuBadgePercent,
  LuBriefcase,
  LuCalendarClock,
  LuFileCheck2,
  LuGlobe,
  LuGraduationCap,
  LuWallet,
} from "react-icons/lu";
import { DUBAI_CONTAINER, WHY_DUBAI_INTRO, WHY_DUBAI_POINTS } from "./dubaiContent";
import DubaiReveal from "./DubaiReveal";
import DubaiSectionHeading from "./DubaiSectionHeading";

const WHY_ICONS = [LuGraduationCap, LuWallet, LuBadgePercent, LuCalendarClock, LuBriefcase, LuFileCheck2, LuGlobe];

export default function WhyStudyInDubai() {
  return (
    <section id="why-dubai" className="scroll-mt-28 bg-[#FBF8F3] py-12 lg:py-16">
      <div className={DUBAI_CONTAINER}>
        <DubaiReveal className="flex flex-col gap-4 border-b border-[#E6D9C4] pb-8">
          <DubaiSectionHeading title="Why Study in Dubai?" align="left" />
            {WHY_DUBAI_INTRO.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-[#3E4A5A] sm:text-[15px]">{paragraph}</p>
            ))}
        </DubaiReveal>

        <ol className="mt-8 space-y-4">
          {WHY_DUBAI_POINTS.map((point, index) => {
            const Icon = WHY_ICONS[index] ?? LuGraduationCap;
            return (
            <DubaiReveal
              as="li"
              key={point.title}
              delay={index * 70}
              className="rounded-2xl border border-[#E6D9C4] bg-white p-5 shadow-[0_16px_40px_-28px_rgba(18,32,51,0.45)] transition duration-300 hover:-translate-y-1 hover:border-[#C6A35A] hover:shadow-[0_22px_44px_-24px_rgba(198,163,90,0.55)] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#122033] text-[#E8D5A3]">
                  <Icon className="h-4 w-4" aria-hidden />
                  <span className="text-[10px] font-bold leading-none">{index + 1}</span>
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#122033] sm:text-xl">{point.title}</h3>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-[#3E4A5A]">
                    {point.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {point.stats && (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {point.stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-[#E6D9C4] bg-[#FBF8F3] px-4 py-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A7843E]">
                            {stat.label}
                          </p>
                          <p className="mt-1 text-base font-extrabold text-[#122033]">{stat.value}</p>
                          <p className="mt-1 text-xs leading-5 text-slate-600">{stat.note}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {point.pills && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {point.pills.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-[#C6A35A]/40 bg-[#F7F1E6] px-3 py-1 text-xs font-semibold text-[#8C6A32]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {point.steps && (
                    <ol className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {point.steps.map((step, stepIndex) => (
                        <li key={step} className="rounded-xl border border-[#E6D9C4] bg-[#FBF8F3] px-3 py-3 text-sm font-semibold text-[#122033]">
                          <span className="mb-1 block text-xs font-bold text-[#A7843E]">0{stepIndex + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  )}

                  {"after" in point && point.after && (
                    <p className="mt-4 text-sm leading-7 text-slate-700">{point.after}</p>
                  )}
                </div>
              </div>
            </DubaiReveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
