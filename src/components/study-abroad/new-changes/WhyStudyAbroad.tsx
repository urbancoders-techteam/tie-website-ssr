"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import {
  FiAward,
  FiBookOpen,
  FiDollarSign,
  FiGlobe,
  FiLayers,
  FiMap,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import ModalTrigger from "@/components/ModalTrigger";
import { whyStudyAbroadContent } from "@/constants/study_abroad/whyStudyAbroad";

type SvgIconProps = { className?: string };
const FEATURE_ICONS: Record<string, ComponentType<SvgIconProps>> = {
  global: FiGlobe,
  career: FiTrendingUp,
  degrees: FiAward,
  research: FiLayers,
  earning: FiDollarSign,
  visa: FiMap,
  courses: FiBookOpen,
  alumni: FiUsers,
};

export default function WhyStudyAbroad() {
  const { eyebrow, heading, description, mainImageSrc, mainImageAlt, secondaryImageSrc, secondaryImageAlt, floatingCard, features, ctaText } =
    whyStudyAbroadContent;

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          {/* Visual column — layered: main (back) → secondary bottom-right; floating card inset top of main */}
          <div className="flex w-full justify-center lg:order-1">
            <div className="relative w-full max-w-[360px] pb-16 pr-2 pt-1 sm:max-w-[400px] sm:pb-20 sm:pr-3 lg:max-w-[420px]">
            {/* z-1: Main photo — large, top-left, deepest layer */}
            <div className="relative z-[1] mx-auto w-[88%] sm:w-[86%]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-[0_20px_48px_rgba(7,27,58,0.12)] sm:rounded-[2.5rem]">
                <Image
                  src={mainImageSrc}
                  alt={mainImageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 85vw, 400px"
                  priority
                />
              </div>

              {/* Floating card — top inset, inside main image bounds */}
              <div className="pointer-events-none absolute left-2.5 top-2.5 z-[3] w-[min(calc(100%-1.25rem),200px)] sm:left-3 sm:top-3 sm:w-[210px]">
                <div className="pointer-events-auto rounded-xl border border-gray-100/90 bg-white p-3 shadow-[0_16px_36px_rgba(7,27,58,0.14)] sm:rounded-[1.125rem] sm:p-4">
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#d9f2f0] text-[#0fb3a9] shadow-inner sm:h-10 sm:w-10">
                      <FiGlobe className="h-5 w-5 sm:h-[22px] sm:w-[22px]" aria-hidden />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-[15px] font-extrabold leading-tight tracking-tight text-[#0fb3a9] sm:text-base">
                        {floatingCard.value} {floatingCard.valueLabel}
                      </p>
                      <p className="mt-1 text-[11px] font-medium leading-snug text-[#6b7c8d] sm:text-xs">
                        {floatingCard.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* z-2: Secondary — smaller, overlaps bottom-right of main, white rim */}
            <div className="absolute bottom-0 right-0 z-[2] w-[56%] max-w-[230px] sm:w-[54%] sm:max-w-[250px]">
              <div className="relative overflow-hidden rounded-[1.35rem] border-[3px] border-white bg-white shadow-[0_18px_44px_rgba(7,27,58,0.16)] sm:rounded-[1.85rem]">
                <div className="relative aspect-[5/3] w-full">
                  <Image
                    src={secondaryImageSrc}
                    alt={secondaryImageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 250px"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:order-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e6faf8] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#078a86] sm:px-3.5 sm:py-2 sm:text-[11px]">
              <span className="text-[#0fb3a9]" aria-hidden>
                •
              </span>
              {eyebrow}
            </p>
            <h2 className="mt-3 text-[1.65rem] font-extrabold leading-tight tracking-[-0.02em] text-[#071b3a] sm:mt-4 sm:text-3xl lg:text-[2rem] lg:leading-[1.15]">
              {heading}
            </h2>
            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-[#506070] sm:mt-4 sm:text-sm">{description}</p>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:mt-6">
              {features.map((f) => {
                const Icon = FEATURE_ICONS[f.id] ?? FiGlobe;
                return (
                  <div
                    key={f.id}
                    className="flex gap-2.5 rounded-xl border border-gray-100 bg-white p-3 shadow-[0_6px_18px_rgba(7,27,58,0.05)] transition hover:border-[#c5ebe8] hover:shadow-[0_10px_26px_rgba(15,179,169,0.1)] sm:gap-3 sm:rounded-2xl sm:p-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0fbfb] text-[#0fb3a9] sm:h-9 sm:w-9 sm:rounded-xl">
                      <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-bold leading-snug text-[#071b3a] sm:text-sm">{f.title}</p>
                      <p className="mt-0.5 text-[11px] leading-snug text-[#5a6b7c] sm:mt-1 sm:text-xs">{f.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 sm:mt-7">
              <ModalTrigger
                text={ctaText}
                variant="custom"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0fb3a9] px-7 py-3 text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(15,179,169,0.32)] transition hover:bg-[#0ca89f] sm:w-auto sm:px-9 sm:py-3.5 sm:text-sm"
                redirectPath="/thankyou"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
