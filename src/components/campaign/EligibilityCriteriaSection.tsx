"use client";

import { useState } from "react";
import doctorImage from "@/assets/doctor.png";

const doctorImageSrc =
  typeof doctorImage === "object" && doctorImage != null && "src" in doctorImage
    ? (doctorImage as { src: string }).src
    : String(doctorImage);

export interface EligibilityCriteriaSectionProps {
  criteriaCards: { title: string; titleHighlight?: boolean; desc: string }[];
  countryName?: string;
  countryAdjective?: string;
}

export default function EligibilityCriteriaSection({
  criteriaCards,
  countryName = "Russia",
  countryAdjective = "Russian",
}: EligibilityCriteriaSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="eligibility-criteria"
      className="py-14 md:py-18 bg-white scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-gray-900">
          MBBS in{" "}
          <span className="relative inline-block  border-[#00999E] pb-0.5">
            <span className="text-[#00999E]">{countryName}</span>
          </span>{" "}
          Eligibility Criteria for Indian Students
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg text-justify">
          Students planning to pursue <span className="text-[#00999E] font-bold">MBBS in {countryName}</span> must meet certain academic and regulatory requirements. With guidance from <span className="text-[#00999E] font-bold">Taksheela Institute of Education</span>, Indian students can clearly understand these eligibility conditions and prepare their applications accordingly. These requirements are based on the admission standards of {countryAdjective} medical universities as well as the guidelines set by India’s <span className="text-[#00999E] font-bold">National Medical Commission (NMC)</span>.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 lg:items-stretch lg:h-[480px]">
          <div className="flex justify-center items-center w-full min-h-[280px] sm:min-h-[360px] lg:min-h-0 lg:h-full">
            <div className="relative w-full max-w-[240px] h-[320px] sm:max-w-[300px] sm:h-[400px] lg:max-w-[350px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b1b1c] via-[#0a3d40] to-[#00999E] shadow-xl shrink-0">
              <div
                className="absolute inset-x-0 top-0 h-[70%] w-full"
                style={{
                  clipPath: "ellipse(90% 85% at 50% -15%)",
                  background: "linear-gradient(180deg, #e0f7f8 0%, #b8e8ea 50%, rgba(0,153,158,0.3) 100%)",
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center pt-[6%]"
                style={{ clipPath: "ellipse(75% 80% at 50% 6%)" }}
              >
                <div className="relative w-[85%] aspect-[3/4] max-h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#b8e8ea] to-[#00999E]/30">
                  {!imageError && (
                    // eslint-disable-next-line @next/next/no-img-element -- native img required for reliable onError fallback
                    <img
                      src={doctorImageSrc}
                      alt={`Student pursuing MBBS in ${countryName}`}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      onError={() => setImageError(true)}
                    />
                  )}
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#b8e8ea] to-[#00999E]/30 ${imageError ? "" : "hidden"}`}
                    aria-hidden={!imageError}
                  >
                    <span className="text-[#00999E] font-semibold text-sm sm:text-lg">Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="eligibility-criteria-scroll h-[420px] lg:h-full min-h-[360px] overflow-y-auto rounded-xl border border-gray-200 bg-gray-50/50 p-5">
            <div className="space-y-4 pr-2">
              {criteriaCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl bg-white border border-gray-200 shadow-sm p-6"
                >
                  <h3 className={`font-bold text-lg ${card.titleHighlight ? "text-[#00999E]" : "text-gray-900"}`}>
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
