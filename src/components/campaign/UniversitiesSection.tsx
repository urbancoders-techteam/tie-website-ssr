"use client";

import { useState, useCallback } from "react";
import Image, { type StaticImageData } from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { imageBaseUrl } from "@/utils/config";

import ksmu from "@/assets/russian_universities/ksmu.webp";
import rudn from "@/assets/russian_universities/rudn.webp";
import rnrmu from "@/assets/russian_universities/rnrmu.webp";
import msmu from "@/assets/russian_universities/msmu.jpg";
import fmsmu from "@/assets/russian_universities/fmsmu.jpg";
import nsmmu from "@/assets/russian_universities/nsmu.webp";
import tsmmu from "@/assets/russian_universities/tsmu.jpg";
import spspmu from "@/assets/russian_universities/spspmu.webp";
import bsmu from "@/assets/russian_universities/bsmu.jpeg";
import ismu from "@/assets/russian_universities/ismu.jpg";

const RUS_LOGO = (n: number) => `${imageBaseUrl}mbbsCollege/russia/rus${n}.png`;

const RUSSIA_UNIVERSITY_IMAGES: Record<string, StaticImageData> = {
  ksmu,
  rudn,
  rnrmu,
  msmu,
  fmsmu,
  nsmmu,
  tsmmu,
  spspmu,
  bsmu,
  ismu,
};

export type UniversityBase = {
  id: string;
  name: string;
  founded: string;
  city: string;
  fees: string;
  logoIndex: number;
  imageKey: string;
};

export type University = {
  id: string;
  name: string;
  founded: string;
  city: string;
  fees: string;
  universityLogo: string;
  image: StaticImageData;
};

function resolveUniversities(
  base: UniversityBase[],
  logoUrlPattern: (n: number) => string = RUS_LOGO,
  imageMap: Record<string, StaticImageData> = RUSSIA_UNIVERSITY_IMAGES
): University[] {
  return base.map((u) => ({
    id: u.id,
    name: u.name,
    founded: u.founded,
    city: u.city,
    fees: u.fees,
    universityLogo: logoUrlPattern(u.logoIndex),
    image: imageMap[u.imageKey] ?? ({} as StaticImageData),
  }));
}

export interface UniversitiesSectionProps {
  universitiesBase: UniversityBase[];
  countryName?: string;
  logoUrlPattern?: (n: number) => string;
  imageMap?: Record<string, StaticImageData>;
}

const LIST_BTN_BASE =
  "w-full flex items-center gap-3 rounded-lg border px-4 py-3.5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00999E] focus-visible:ring-offset-2 cursor-pointer";

function UniversityDetailCard({ uni }: { uni: University }) {
  return (
    <>
      <div className="relative aspect-[16/9] w-full bg-gray-100">
        <Image
          src={uni.image}
          alt={uni.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
          <div>
            <span className="text-gray-500">Founded</span>
            <span className="ml-2 font-semibold text-gray-900">{uni.founded}</span>
          </div>
          <div>
            <span className="text-gray-500">City</span>
            <span className="ml-2 font-semibold text-gray-900">{uni.city}</span>
          </div>
          <div>
            <span className="text-gray-500">Fees</span>
            <span className="ml-2 font-semibold text-[#00999E]">{uni.fees}</span>
          </div>
        </div>
        <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-[#00999E]">{uni.name}</h3>
      </div>
    </>
  );
}

export default function UniversitiesSection({
  universitiesBase,
  countryName = "Russia",
  logoUrlPattern = RUS_LOGO,
  imageMap = RUSSIA_UNIVERSITY_IMAGES,
}: UniversitiesSectionProps) {
  const universities = resolveUniversities(universitiesBase, logoUrlPattern, imageMap);
  const [selectedId, setSelectedId] = useState<string | null>(universities[0]?.id ?? null);
  const selected = universities.find((u) => u.id === selectedId) ?? universities[0];

  const handleSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const handleSelectDesktop = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  return (
    <section id="universities" className="py-10 sm:py-14 md:py-18 bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-gray-900">
          Top Medical Universities in <span className="text-[#00999E]">{countryName}</span>
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 max-w-3xl text-sm sm:text-lg">
          This section highlights the top universities in {countryName} recognised by the <span className="text-[#00999E] font-bold">WHO</span> and
          compliant with the <span className="text-[#00999E] font-bold">NMC</span> guidelines. This list includes both high-ranking universities
          and cost-effective options to pursue an <span className="text-[#00999E] font-bold">MBBS in {countryName}</span>  .
        </p>

        {/* Mobile & tablet: accordion */}
        <div className="mt-6 lg:hidden">
          {universities.map((uni) => {
            const isExpanded = uni.id === selectedId;
            return (
              <div
                key={uni.id}
                className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => handleSelect(uni.id)}
                  className={`${LIST_BTN_BASE} rounded-t-xl rounded-b-none ${
                    isExpanded
                      ? "border-[#00999E] bg-[#00999E] text-white shadow-md border-b-0"
                      : "border-gray-200 bg-gray-50 text-gray-900 hover:border-gray-300 hover:bg-gray-100"
                  }`}
                  aria-expanded={isExpanded}
                  aria-controls={`uni-detail-${uni.id}`}
                  id={`uni-accordion-${uni.id}`}
                >
                  <div
                    className={`h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-full overflow-hidden border border-white/40 bg-gray-100 flex items-center justify-center ${isExpanded ? "ring-2 ring-white/70" : ""}`}
                  >
                    <Image
                      src={uni.universityLogo}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="flex-1 min-w-0 font-medium truncate text-sm sm:text-base">{uni.name}</span>
                  <FaChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isExpanded ? "text-white rotate-90" : "text-gray-400"}`}
                    aria-hidden
                  />
                </button>
                <div
                  id={`uni-detail-${uni.id}`}
                  role="region"
                  aria-labelledby={`uni-accordion-${uni.id}`}
                  className={`grid transition-[grid-template-rows] duration-200 ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    {isExpanded && (
                      <div className="px-2 pb-2 pt-0">
                        <div className="rounded-b-xl border border-t-0 border-gray-200 bg-white overflow-hidden shadow-sm">
                          <UniversityDetailCard uni={uni} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: list + detail side by side */}
        <div className="mt-8 hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            {universities.map((uni) => {
              const isSelected = uni.id === selectedId;
              return (
                <button
                  key={uni.id}
                  type="button"
                  onClick={() => handleSelectDesktop(uni.id)}
                  className={`${LIST_BTN_BASE} ${
                    isSelected
                      ? "border-[#00999E] bg-[#00999E] text-white shadow-md"
                      : "border-gray-200 bg-gray-50 text-gray-900 hover:border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`h-10 w-10 shrink-0 rounded-full overflow-hidden border border-white/40 bg-gray-100 flex items-center justify-center ${isSelected ? "ring-2 ring-white/70" : ""}`}
                  >
                    <Image
                      src={uni.universityLogo}
                      alt={uni.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="flex-1 min-w-0 font-medium truncate">{uni.name}</span>
                  <FaChevronRight className={`h-4 w-4 shrink-0 ${isSelected ? "text-white" : "text-gray-400"}`} aria-hidden />
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-2">
            {selected && (
              <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                <UniversityDetailCard uni={selected} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
