"use client";

import type { ComponentType } from "react";
import Image from "next/image";
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
} from "@/constants/study_abroad/study-abroad";

type IconProps = { className?: string };

const FILMSTRIP_ICONS: Record<StudyAbroadFilmstripIconId, ComponentType<IconProps>> = {
  library: FaLandmark,
  discussions: FaComments,
  departure: FaPlane,
  graduation: FaGraduationCap,
  campus: FaGlobeAmericas,
};

export default function StudyAbroadFilmstrip() {
  return (
    <div className="relative w-full border-t-[3px] border-[#010a14] bg-[#010a14]">
      <div
        className="flex h-[clamp(76px,15vw,200px)] w-full sm:h-[clamp(88px,13vw,200px)]"
        role="list"
        aria-label="Study abroad journey highlights"
      >
        {studyAbroadAfterWhatTaksheelaFilmstrip.map((item) => {
          const Icon = FILMSTRIP_ICONS[item.icon];

          return (
            <div
              key={item.src}
              role="listitem"
              className="group relative min-h-0 min-w-0 flex-1 cursor-pointer overflow-hidden transition-[flex-grow,box-shadow] duration-500 ease-out hover:z-10 hover:flex-[1.12] hover:shadow-[0_0_0_2px_#00999E,0_8px_32px_rgba(0,153,158,0.35)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="20vw"
                loading="lazy"
              />

              {/* Default: subtle bottom vignette */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#010a14]/50 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0"
                aria-hidden
              />

              {/* Hover: darken + teal wash for contrast */}
              <div
                className="pointer-events-none absolute inset-0 bg-[#010a14]/0 transition-all duration-500 group-hover:bg-[#010a14]/55"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[#00999E]/0 transition-colors duration-500 group-hover:bg-[#00999E]/15"
                aria-hidden
              />

              {/* Center label — visible on hover */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-2">
                <div className="flex flex-col items-center gap-2 text-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                  <Icon className="h-5 w-5 text-white drop-shadow-md sm:h-6 sm:w-6" aria-hidden />
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-white drop-shadow-md sm:text-sm sm:tracking-[0.14em]">
                    {item.label}
                  </span>
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-0 ring-0 ring-inset ring-[#00999E] transition-all duration-300 group-hover:ring-2"
                aria-hidden
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
