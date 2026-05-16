"use client";

import LikeCounter from "@/components/LikeCounter";
import Marquee from "react-fast-marquee";
import {
  studyAbroadImpactCountryLinks,
  studyAbroadImpactStats,
} from "@/constants/study_abroad/study-abroad";

export default function OurImpact() {
  return (
    <section className="overflow-hidden bg-[#eefaf8]">
      <div className="overflow-hidden bg-[#0fb3a9] text-white">
        <Marquee
          speed={60}
          gradient={false}
          autoFill
          className="overflow-hidden py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&_.rfm-marquee]:overflow-hidden [&_.rfm-marquee-container]:overflow-hidden [&_.rfm-marquee-container]:[-ms-overflow-style:none] [&_.rfm-marquee-container]:[scrollbar-width:none] [&_.rfm-marquee-container::-webkit-scrollbar]:hidden"
        >
          {studyAbroadImpactCountryLinks.map((item) => (
            <span
              key={item}
              className="mx-8 inline-flex items-center gap-2 whitespace-nowrap text-[11px] font-extrabold uppercase tracking-wide sm:mx-10"
            >
              {item}
              <span className="text-white/80" aria-hidden>
                +
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#078a86]">
          + Our Impact
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#071b3a] sm:text-4xl lg:text-[44px]">
          A Decade of Turning Global Dreams Into Reality
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#506070] sm:text-base">
          Indian students continue to choose UK, Germany, Ireland, Australia,
          Canada and Europe for globally recognised degrees, strong career
          outcomes and life-changing experiences.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {studyAbroadImpactStats.map((stat, index) => (
            <article
              key={stat.label}
              className={`group flex min-h-[150px] flex-col items-center justify-center rounded-[24px] px-5 py-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(7,27,58,0.16)] sm:min-h-[165px] ${stat.cardClassName}`}
            >
              <div className="text-2xl transition duration-300 group-hover:scale-110 sm:text-3xl">
                {stat.icon}
              </div>
              <div
                className={`mt-4 text-4xl font-black leading-none tracking-[-0.04em] tabular-nums sm:text-[42px] ${stat.valueClassName}`}
              >
                <LikeCounter
                  target={stat.value}
                  durationMs={1600}
                  startDelayMs={index * 120}
                  suffix={stat.suffix}
                  useGrouping
                />
              </div>
              <p className="mt-3 text-xs font-bold leading-snug opacity-85">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
