"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  FaComments,
  FaGlobeAmericas,
  FaGraduationCap,
  FaLandmark,
  FaPlane,
} from "react-icons/fa";

import {
  studyAbroadAfterWhatTaksheelaFilmstrip,
  type StudyAbroadFilmstripIconId,
  type StudyAbroadFilmstripItem,
} from "@/constants/study_abroad/study-abroad";

type IconProps = { className?: string };

const FILMSTRIP_ICONS: Record<StudyAbroadFilmstripIconId, ComponentType<IconProps>> = {
  library: FaLandmark,
  discussions: FaComments,
  departure: FaPlane,
  graduation: FaGraduationCap,
  campus: FaGlobeAmericas,
};

const FILM_PERF_STYLE = {
  backgroundImage: "radial-gradient(circle at center, #1e3a4a 1.5px, transparent 1.5px)",
  backgroundSize: "14px 10px",
  backgroundPosition: "center",
} as const;

const FILMSTRIP_MARQUEE_CLASS =
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&_.rfm-marquee]:flex [&_.rfm-marquee-container]:overflow-hidden";

function FilmstripPanel({
  item,
  index,
  variant = "strip",
}: {
  item: StudyAbroadFilmstripItem;
  index: number;
  variant?: "strip" | "marquee";
}) {
  const Icon = FILMSTRIP_ICONS[item.icon];
  const step = String(index + 1).padStart(2, "0");
  const isMarquee = variant === "marquee";

  return (
    <div
      role="listitem"
      className={
        isMarquee
          ? "group relative h-[132px] w-[188px] shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-[0_8px_28px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/[0.06]"
          : "group relative min-h-0 min-w-0 flex-1 cursor-pointer overflow-hidden border-r border-white/[0.08] transition-[flex-grow,box-shadow,filter] duration-500 ease-out last:border-r-0 hover:z-10 hover:flex-[1.15] hover:shadow-[0_0_0_2px_#22d3ee,0_0_28px_rgba(34,211,238,0.35),0_12px_40px_rgba(0,0,0,0.45)] focus-within:z-10 focus-within:flex-[1.15] focus-within:shadow-[0_0_0_2px_#22d3ee,0_0_28px_rgba(34,211,238,0.35)] focus-visible:outline-none"
      }
      tabIndex={isMarquee ? undefined : 0}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className={`object-cover object-center ${
          isMarquee
            ? ""
            : "transition-[transform,filter] duration-700 ease-out group-hover:scale-110 group-hover:saturate-110 group-focus-within:scale-110"
        }`}
        sizes={isMarquee ? "188px" : "(max-width: 768px) 22vw, 20vw"}
        loading="lazy"
      />

      <span
        className="pointer-events-none absolute left-2 top-2 z-10 rounded-md bg-[#010a14]/75 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider text-[#5eead4]/90 backdrop-blur-sm"
        aria-hidden
      >
        {step}
      </span>

      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[#010a14]/85 via-[#010a14]/25 to-[#010a14]/10 ${
          isMarquee ? "" : "transition-opacity duration-500 group-hover:opacity-60 group-focus-within:opacity-60"
        }`}
        aria-hidden
      />

      {!isMarquee ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[#010a14]/0 transition-all duration-500 group-hover:bg-[#010a14]/50 group-focus-within:bg-[#010a14]/50"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[#00999E]/0 transition-colors duration-500 group-hover:bg-[#22d3ee]/20 group-focus-within:bg-[#22d3ee]/20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-full top-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100 group-focus-within:left-full group-focus-within:opacity-100"
            aria-hidden
          />
        </>
      ) : null}

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 px-2 pb-2.5 pt-10 ${
          isMarquee ? "" : "transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0"
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00999E]/30 ring-1 ring-[#5eead4]/35">
            <Icon className="h-3 w-3 text-[#a5f3fc]" aria-hidden />
          </span>
          <span className="truncate text-[9px] font-bold uppercase tracking-[0.1em] text-white/95 drop-shadow-sm">
            {item.label}
          </span>
        </div>
      </div>

      {!isMarquee ? (
        <>
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-2">
            <div className="flex translate-y-3 flex-col items-center gap-2 text-center opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00999E]/35 shadow-[0_0_24px_rgba(34,211,238,0.45)] ring-2 ring-[#5eead4]/50 backdrop-blur-sm sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" aria-hidden />
              </span>
              <span className="max-w-[10rem] text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-white drop-shadow-lg sm:text-xs sm:tracking-[0.16em]">
                {item.label}
              </span>
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-30 ring-0 ring-inset ring-[#22d3ee] transition-all duration-300 group-hover:ring-2 group-focus-within:ring-2"
            aria-hidden
          />
        </>
      ) : null}
    </div>
  );
}

export default function StudyAbroadFilmstrip() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#010a14]"
      aria-label="Study abroad journey highlights"
    >
      <div
        className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/60 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 h-2.5 w-full bg-[#010a14]" style={FILM_PERF_STYLE} aria-hidden />

      {/* Mobile: horizontal marquee */}
      <div className="relative md:hidden" role="list">
        <div className="py-3">
          <Marquee speed={38} pauseOnHover gradient={false} autoFill className={FILMSTRIP_MARQUEE_CLASS}>
            {studyAbroadAfterWhatTaksheelaFilmstrip.map((item, index) => (
              <div key={`${item.src}-marquee`} className="mx-2">
                <FilmstripPanel item={item} index={index} variant="marquee" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Tablet & desktop: expanding filmstrip */}
      <div
        className="relative hidden h-[clamp(96px,14vw,220px)] w-full md:flex"
        role="list"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#00999E]/8 via-transparent to-[#00999E]/8"
          aria-hidden
        />

        {studyAbroadAfterWhatTaksheelaFilmstrip.map((item, index) => (
          <FilmstripPanel key={item.src} item={item} index={index} variant="strip" />
        ))}
      </div>

      <div className="relative z-10 h-2.5 w-full bg-[#010a14]" style={FILM_PERF_STYLE} aria-hidden />

      <div
        className="absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-[#00999E]/40 to-transparent"
        aria-hidden
      />
    </section>
  );
}
