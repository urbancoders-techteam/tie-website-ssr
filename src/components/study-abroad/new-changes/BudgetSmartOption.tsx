"use client";

import { FaGraduationCap } from "react-icons/fa";
import Marquee from "react-fast-marquee";

import ModalTrigger from "@/components/ModalTrigger";
import { budgetSmartOptionContent, type BudgetHighlightCard } from "@/constants/StudyAbroad/budgetSmartOption";

const NAVY = "bg-[#001f3f]";
const TEAL = "text-[#14b8a6]";

function HighlightMarqueeCard({ h }: { h: BudgetHighlightCard }) {
  return (
    <div
      className="mx-2 flex w-[min(100vw-3rem,280px)] shrink-0 gap-3 rounded-2xl border border-gray-200/90 bg-white/90 p-4 shadow-[0_4px_20px_rgba(0,31,63,0.06)] sm:mx-3 sm:w-72 sm:gap-4 sm:p-4"
      role="group"
      aria-label={h.title}
    >
      {h.kind === "code" && h.code ? (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0fdfa] text-sm font-black text-[#001f3f] ring-1 ring-[#14b8a6]/20">
          {h.code}
        </span>
      ) : (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0fdfa] text-[#14b8a6] ring-1 ring-[#14b8a6]/25">
          <FaGraduationCap className="h-5 w-5" aria-hidden />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-bold leading-snug text-[#001f3f] sm:text-base">{h.title}</p>
        <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-[#64748b] sm:text-sm">{h.description}</p>
      </div>
    </div>
  );
}

export default function BudgetSmartOption() {
  const { eyebrow, heading, intro, highlights, tableTitle, tableRows, tableFootnote, ctaText } =
    budgetSmartOptionContent;

  return (
    <section className="bg-[#f4f7fb] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          {/* Left column */}
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#ccfbf1] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0f3d4a] sm:text-[11px]">
              <span className="text-[#14b8a6]" aria-hidden>
                ●
              </span>
              {eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#001f3f] sm:mt-5 sm:text-3xl lg:text-[1.85rem] xl:text-[2rem]">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#5a6570] sm:text-base">{intro}</p>

            <div className="relative mt-8 min-w-0 sm:mt-9">
              <div className="overflow-hidden rounded-2xl border border-gray-200/60 bg-[#f4f7fb] py-3 sm:py-3.5">
                <Marquee
                  direction="left"
                  speed={28}
                  pauseOnHover
                  gradient
                  gradientColor="rgb(244, 247, 251)"
                  gradientWidth={48}
                  autoFill
                  className="flex"
                >
                  {highlights.map((h) => (
                    <HighlightMarqueeCard key={h.id} h={h} />
                  ))}
                </Marquee>
              </div>
            </div>            <div className="mt-8 sm:mt-9">
              <ModalTrigger
                text={ctaText}
                variant="custom"
                className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-[#14b8a6] px-6 py-3.5 text-center text-sm font-bold text-white shadow-[0_10px_28px_rgba(20,184,166,0.35)] transition hover:bg-[#0d9488] sm:w-auto sm:px-8 sm:py-4 sm:text-[15px]"
                redirectPath="/thankyou"
              />
            </div>
          </div>

          {/* Right column — table */}
          <div className="min-w-0 lg:pt-1">
            <h3 className="text-lg font-extrabold text-[#001f3f] sm:text-xl">{tableTitle}</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[0_16px_48px_rgba(0,31,63,0.1)] sm:mt-5">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] border-collapse text-left text-sm">
                  <thead>
                    <tr className={`${NAVY} text-white`}>
                      <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wide sm:px-5 sm:py-4 sm:text-[11px]">
                        Country
                      </th>
                      <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wide sm:px-5 sm:py-4 sm:text-[11px]">
                        Avg Tuition/Year
                      </th>
                      <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wide sm:px-5 sm:py-4 sm:text-[11px]">
                        Living/Month
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, i) => (
                      <tr
                        key={row.code + row.country}
                        className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}
                      >
                        <td className="border-t border-gray-100 px-4 py-3 sm:px-5 sm:py-3.5">
                          <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                            <span className="text-xs font-semibold text-[#94a3b8]">{row.code}</span>
                            <span className="font-bold text-[#001f3f]">{row.country}</span>
                          </span>
                        </td>
                        <td className={`border-t border-gray-100 px-4 py-3 font-bold sm:px-5 sm:py-3.5 ${TEAL}`}>
                          {row.tuition}
                        </td>
                        <td className="border-t border-gray-100 px-4 py-3 text-[#64748b] sm:px-5 sm:py-3.5">
                          {row.living}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-xs italic leading-relaxed text-[#94a3b8] sm:text-[13px]">{tableFootnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
