"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import {
  FaChartBar,
  FaHome,
  FaMoneyBillWave,
  FaPassport,
  FaPhone,
  FaShieldAlt,
} from "react-icons/fa";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ModalTrigger from "@/components/ModalTrigger";
import {
  forParentsContent,
  type ForParentsFeature,
  type ForParentsFeatureIcon,
} from "@/constants/StudyAbroad/forParents";

const FEATURE_ICONS: Record<
  ForParentsFeatureIcon,
  ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  shield: FaShieldAlt,
  chart: FaChartBar,
  money: FaMoneyBillWave,
  visa: FaPassport,
  home: FaHome,
  phone: FaPhone,
};

const ICON_STYLES: Record<ForParentsFeatureIcon, string> = {
  shield: "bg-blue-100 text-blue-600 ring-blue-200/80",
  chart: "bg-amber-100 text-amber-700 ring-amber-200/80",
  money: "bg-emerald-100 text-emerald-700 ring-emerald-200/80",
  visa: "bg-slate-100 text-slate-700 ring-slate-200/80",
  home: "bg-orange-100 text-orange-700 ring-orange-200/80",
  phone: "bg-pink-100 text-pink-600 ring-pink-200/80",
};

const MOBILE_SLIDER_SETTINGS: Settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
};

const mobileSliderClassName =
  "lg:hidden [&_.slick-list]:mx-[-6px] [&_.slick-list]:overflow-visible [&_.slick-slide]:px-1.5 [&_.slick-slide>div]:h-full [&_ul.slick-dots]:!bottom-[-36px] [&_ul.slick-dots>li]:!m-0 [&_ul.slick-dots>li>button:before]:!text-[#14b8a6] [&_ul.slick-dots>li>button:before]:!text-[11px] [&_ul.slick-dots>li>button:before]:!opacity-35 [&_ul.slick-dots>li.slick-active>button:before]:!opacity-100";

function ParentFeatureCard({ feature }: { feature: ForParentsFeature }) {
  const Icon = FEATURE_ICONS[feature.icon];
  const iconRing = ICON_STYLES[feature.icon];

  return (
    <article className="group flex h-full min-w-0 gap-3 rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-[0_6px_22px_rgba(0,31,63,0.05)] transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:border-[#14b8a6]/65 hover:shadow-[0_18px_40px_rgba(20,184,166,0.18),0_8px_20px_rgba(0,31,63,0.08)] hover:ring-2 hover:ring-[#14b8a6]/25 sm:gap-3.5 sm:rounded-3xl sm:p-4">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-2 ring-inset transition-transform duration-300 ease-out group-hover:scale-110 sm:h-12 sm:w-12 ${iconRing}`}
      >
        <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-extrabold leading-snug text-[#001f3f] transition-colors duration-300 group-hover:text-[#0f2847] sm:text-[15px]">
          {feature.title}
        </h3>
        <p className="mt-1 text-[12px] leading-relaxed text-[#5a6570] transition-colors duration-300 group-hover:text-[#4b5563] sm:mt-1.5 sm:text-[13px]">
          {feature.description}
        </p>
      </div>
    </article>
  );
}

export default function ForParents() {
  const { eyebrow, heading, description, heroImageSrc, heroImageAlt, stats, features, ctaText } =
    forParentsContent;

  return (
    <section className="bg-[#f0f4f9] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left — hero image + stats */}
          <div className="min-w-0">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,31,63,0.12)] sm:max-w-lg lg:mx-0 lg:max-w-none">
              <Image
                src={heroImageSrc}
                alt={heroImageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-3 pb-5 pt-16 sm:px-5 sm:pb-6 sm:pt-20">
                <div className="grid grid-cols-3 gap-2 text-center sm:gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="min-w-0">
                      <p className="text-lg font-extrabold tabular-nums text-[#5eead4] sm:text-xl lg:text-2xl">
                        {s.value}
                      </p>
                      <p className="mt-0.5 text-[10px] font-semibold leading-tight text-white/90 sm:text-[11px]">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy, feature grid / slider, CTA */}
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e6faf8] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0d9488] sm:text-[11px]">
              <span className="text-[#14b8a6]" aria-hidden>
                ●
              </span>
              {eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#001f3f] sm:mt-5 sm:text-3xl lg:text-[1.85rem] xl:text-[2rem]">
              {heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5a6570] sm:mt-5 sm:text-base">
              {description}
            </p>

            <div className={`${mobileSliderClassName} mt-8 pb-10 sm:mt-10`}>
              <Slider {...MOBILE_SLIDER_SETTINGS}>
                {features.map((f) => (
                  <div key={f.id}>
                    <ParentFeatureCard feature={f} />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="mt-8 hidden min-h-0 grid-cols-2 gap-3 sm:gap-4 lg:mt-10 lg:grid">
              {features.map((f) => (
                <ParentFeatureCard key={f.id} feature={f} />
              ))}
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-10">
              <ModalTrigger
                text={ctaText}
                variant="custom"
                className="inline-flex w-full max-w-lg items-center justify-center rounded-full bg-[#14b8a6] px-6 py-3.5 text-center text-sm font-bold text-white shadow-[0_10px_28px_rgba(20,184,166,0.35)] transition hover:bg-[#0d9488] sm:w-auto sm:px-10 sm:py-4 sm:text-[15px]"
                redirectPath="/thankyou"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
