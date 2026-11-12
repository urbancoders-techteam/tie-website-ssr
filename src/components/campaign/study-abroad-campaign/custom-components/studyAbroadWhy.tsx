"use client";

import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuGraduationCap } from "react-icons/lu";
import { STUDY_ABROAD_ICONS } from "./studyAbroadIcons";
import StudyAbroadReveal from "./studyAbroadReveal";
import StudyAbroadSectionHeading from "./studyAbroadSectionHeading";
import type { StudyAbroadCampaignData } from "./studyAbroadTypes";

const SLIDE_MS = 7000;

export default function StudyAbroadWhy({
  containerClass,
  why,
}: {
  containerClass: string;
  why: StudyAbroadCampaignData["why"];
}) {
  const count = why.points.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || count === 0) return;
    let timer = 0;
    const schedule = () => {
      timer = window.setTimeout(() => {
        if (document.hidden) {
          schedule();
          return;
        }
        setIndex((current) => (current + 1) % count);
      }, SLIDE_MS);
    };
    schedule();
    return () => window.clearTimeout(timer);
  }, [count, index, paused, reducedMotion]);

  const goTo = (next: number) => {
    if (count === 0) return;
    setIndex((next + count) % count);
  };

  return (
    <section id={why.id} className="scroll-mt-28 bg-[#FBF8F3] py-12 lg:py-16">
      <div className={containerClass}>
        <StudyAbroadReveal className="flex flex-col gap-4 border-b border-[#E6D9C4] pb-8">
          <StudyAbroadSectionHeading title={why.title} kicker={why.kicker} align="left" />
          {why.intro.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl text-sm leading-7 text-[#3E4A5A] sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </StudyAbroadReveal>

        <div
          className="mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="grid" aria-roledescription="carousel" aria-label={why.carouselLabel}>
            {why.points.map((point, pointIndex) => {
              const Icon = STUDY_ABROAD_ICONS[point.icon] ?? LuGraduationCap;
              const active = pointIndex === index;

              return (
                <article
                  key={point.title}
                  inert={active ? undefined : true}
                  aria-hidden={!active}
                  style={{ gridColumn: "1", gridRow: "1" }}
                  className={`flex h-full flex-col rounded-2xl border border-[#E6D9C4] bg-white p-5 shadow-[0_16px_40px_-28px_rgba(18,32,51,0.45)] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:p-7 ${
                    active ? "z-10 opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="flex min-h-[4.5rem] items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#122033] text-[#E8D5A3]">
                      <Icon className="h-5 w-5" aria-hidden />
                      <span className="mt-1 text-[10px] font-bold leading-none">
                        {String(pointIndex + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A7843E]">
                        Reason {String(pointIndex + 1).padStart(2, "0")} of {String(count).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-lg font-bold leading-snug text-[#122033] sm:text-2xl">{point.title}</h3>
                    </div>
                  </div>

                  <div className="mt-5 max-w-3xl flex-1 space-y-3 text-sm leading-7 text-[#3E4A5A] sm:text-[15px]">
                    {point.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {point.stats && (
                    <div className="mt-5 grid grid-cols-2 items-stretch gap-3 lg:grid-cols-4">
                      {point.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col rounded-xl border border-[#E6D9C4] bg-[#FBF8F3] px-3.5 py-2.5">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A7843E]">{stat.label}</p>
                          <p className="mt-1 text-sm font-extrabold leading-snug text-[#122033] sm:text-base">{stat.value}</p>
                          <p className="mt-1 text-xs leading-4 text-slate-600">{stat.note}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {point.steps && (
                    <ol className="mt-5 grid grid-cols-2 items-stretch gap-3 lg:grid-cols-4">
                      {point.steps.map((step, stepIndex) => (
                        <li
                          key={step}
                          className="rounded-xl border border-[#E6D9C4] bg-[#FBF8F3] px-3 py-2.5 text-sm font-semibold leading-snug text-[#122033]"
                        >
                          <span className="mb-1 block text-xs font-bold text-[#A7843E]">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  )}

                  {point.pills && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {point.pills.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-[#C6A35A]/40 bg-[#F7F1E6] px-3 py-1.5 text-xs font-semibold text-[#8C6A32]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {point.after && <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">{point.after}</p>}
                </article>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6A32]" aria-live="polite">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous reason"
                onClick={() => goTo(index - 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E6D9C4] bg-white text-[#122033] transition hover:border-[#C6A35A] hover:text-[#8C6A32]"
              >
                <LuChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              <div className="flex items-center gap-1.5 px-1" role="tablist" aria-label="Choose a reason">
                {why.points.map((point, dotIndex) => (
                  <button
                    key={point.title}
                    type="button"
                    role="tab"
                    aria-label={point.title}
                    aria-selected={dotIndex === index}
                    onClick={() => goTo(dotIndex)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIndex === index ? "w-7 bg-[#C6A35A]" : "w-2 bg-[#E6D9C4] hover:bg-[#C6A35A]/60"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next reason"
                onClick={() => goTo(index + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E6D9C4] bg-white text-[#122033] transition hover:border-[#C6A35A] hover:text-[#8C6A32]"
              >
                <LuChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          {!reducedMotion && (
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#E6D9C4]" aria-hidden>
              <div
                key={`${index}-${paused}`}
                className="h-full origin-left bg-[#C6A35A]"
                style={{
                  width: paused ? "100%" : undefined,
                  animation: paused ? "none" : `study-abroad-why-progress ${SLIDE_MS}ms linear forwards`,
                }}
              />
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes study-abroad-why-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
