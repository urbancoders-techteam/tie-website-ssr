"use client";

import Image from "next/image";
import { useRef, useState, type UIEvent } from "react";
import { FaCheck } from "react-icons/fa";

import ModalTrigger from "@/components/ModalTrigger";
import {
  countryWiseScholarshipContent,
  type ScholarshipCountry,
} from "@/constants/StudyAbroad/countryWiseScholarship";

function ScholarshipCard({ country }: { country: ScholarshipCountry }) {
  return (
    <article className="flex h-full min-h-[490px] w-[250px] shrink-0 snap-start flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_14px_34px_rgba(7,27,58,0.11)] ring-1 ring-[#d7ecea] sm:w-[285px] lg:w-[305px]">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={country.imageSrc}
          alt={country.imageAlt}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 75vw, (max-width: 1280px) 30vw, 305px"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-extrabold text-[#071b3a]">{country.country}</h3>
          <span className="text-[15px] font-extrabold text-[#071b3a]">{country.code}</span>
        </div>

        <ul className="mt-4 space-y-2.5">
          {country.scholarships.map((scholarship) => (
            <li key={scholarship} className="flex gap-2 text-[11px] leading-snug text-[#506070]">
              <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-[#0fb3a9] text-[#0fb3a9]">
                <FaCheck className="h-2 w-2" aria-hidden />
              </span>
              <span>{scholarship}</span>
            </li>
          ))}
        </ul>

        <ModalTrigger
          text={`${country.ctaText} →`}
          variant="custom"
          className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#ddf7f5] px-4 py-2.5 text-center text-[11px] font-extrabold text-[#00777e] transition hover:bg-[#0fb3a9] hover:text-white"
          redirectPath="/thankyou"
        />
      </div>
    </article>
  );
}

const sliderClassName =
  "flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-6 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

export default function CountryWiseScholarship() {
  const { eyebrow, heading, intro, secondaryIntro, countries, primaryCta } =
    countryWiseScholarshipContent;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSliderScroll = (event: UIEvent<HTMLDivElement>) => {
    const slider = event.currentTarget;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex(Math.round((slider.scrollLeft / maxScroll) * (countries.length - 1)));
  };

  const scrollToCard = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    slider.scrollTo({
      left: maxScroll * (index / Math.max(countries.length - 1, 1)),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="overflow-hidden bg-[#eefafa] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-6xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#dff8f6] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#00777e] sm:text-[11px]">
            <span className="text-[#0fb3a9]" aria-hidden>
              •
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#071b3a] sm:text-3xl lg:text-[2.125rem]">
            {heading.prefix} <span className="text-[#0fb3a9]">{heading.highlight}</span>
          </h2>
          <span className="mt-3 block h-px w-12 bg-[#071b3a]" aria-hidden />
          <div className="mt-5 max-w-6xl space-y-4 text-sm leading-relaxed text-[#506070] sm:text-[15px]">
            <p>{intro}</p>
            <p>{secondaryIntro}</p>
          </div>
        </header>

        <div
          ref={sliderRef}
          className={`${sliderClassName} mt-10`}
          aria-label="Country-wise scholarship cards"
          onScroll={handleSliderScroll}
        >
          {countries.map((country) => (
            <ScholarshipCard key={country.code} country={country} />
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-label="Scholarship slider pagination">
          {countries.map((country, index) => (
            <button
              key={country.code}
              type="button"
              onClick={() => scrollToCard(index)}
              aria-label={`Show ${country.country} scholarships`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-7 bg-[#0fb3a9]" : "w-2 bg-[#c9eee9] hover:bg-[#7ddbd3]"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <ModalTrigger
            text={primaryCta}
            variant="custom"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-[#0fb3a9] px-6 py-4 text-center text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(15,179,169,0.35)] transition hover:bg-[#0ca89f] sm:w-auto sm:px-10"
            redirectPath="/thankyou"
          />
        </div>
      </div>
    </section>
  );
}
