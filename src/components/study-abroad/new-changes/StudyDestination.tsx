"use client";

import Image from "next/image";
import Link from "next/link";

import {
  studyDestinationsContent,
  type StudyDestinationCard,
} from "@/constants/study_abroad/studyDestinations";

import ScrollableSlider, {
  SCROLLABLE_SLIDE_DESTINATION_CLASS,
  SCROLLABLE_TRACK_CLASS,
} from "./ScrollableSlider";

const DESTINATION_TRACK_CLASS = `${SCROLLABLE_TRACK_CLASS} max-sm:scroll-ps-4 max-sm:scroll-pe-4 sm:gap-5`;

const fieldLabelClass =
  "text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0d9488] sm:text-xs";

const fieldValueClass = "mt-1.5 text-[13px] leading-snug text-[#5a6570] sm:text-sm";

function DestinationField({ label, children }: { label: string; children: string }) {
  return (
    <div className="min-h-[3.5rem]">
      <p className={fieldLabelClass}>{label}</p>
      <p className={fieldValueClass}>{children}</p>
    </div>
  );
}

function DestinationCard({ destination }: { destination: StudyDestinationCard }) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-[0_12px_40px_rgba(7,27,58,0.08)] transition hover:shadow-[0_18px_48px_rgba(7,27,58,0.12)]">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-t-2xl">
        <Image
          src={destination.imageSrc}
          alt={destination.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <p className="absolute left-3 top-3 text-sm font-extrabold tracking-tight text-white drop-shadow sm:left-4 sm:top-4 sm:text-base">
          {destination.countryCode}
        </p>
        <p className="absolute bottom-3 left-3 right-3 text-lg font-extrabold leading-tight text-white drop-shadow sm:bottom-4 sm:left-4 sm:text-xl">
          {destination.countryName}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5">
        <DestinationField label="Best for">{destination.bestFor}</DestinationField>
        <DestinationField label="Courses">{destination.courses}</DestinationField>
        <div className="flex min-h-[5.5rem] flex-1 flex-col rounded-lg border border-[#f5d78a] bg-[#fff9e6] px-3 py-2.5 sm:min-h-[6rem] sm:px-3.5 sm:py-3">
          <p className="flex gap-2 text-[12px] font-semibold leading-snug text-[#854d0e] sm:text-[13px]">
            <span className="shrink-0 text-[#d97706]" aria-hidden>
              ★
            </span>
            <span className="line-clamp-4">{destination.highlight}</span>
          </p>
        </div>
      </div>

      <Link
        href={destination.href}
        className="mt-auto flex shrink-0 items-center justify-between gap-2 border-t border-[#d9f2ef] bg-[#f0fdf9] px-4 py-3.5 text-[13px] font-bold text-[#0d9488] transition hover:bg-[#e6faf8] sm:px-5 sm:text-sm"
      >
        <span>{destination.ctaLabel}</span>
        <span className="text-lg font-normal leading-none" aria-hidden>
          →
        </span>
      </Link>
    </article>
  );
}

export default function StudyDestination() {
  const { eyebrow, heading, description, destinations } = studyDestinationsContent;

  return (
    <section className="overflow-hidden bg-[#f7f9fc] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-[#e6faf8] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#0d9488] sm:text-[11px]">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#071b3a] sm:mt-6 sm:text-3xl lg:text-[2.125rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5a6570] sm:mt-5 sm:text-base">
            {description}
          </p>
        </header>

        <div className="mt-8 sm:mt-12 lg:mt-14">
          <ScrollableSlider
            total={destinations.length}
            ariaLabel="Study destination cards"
            trackClassName={DESTINATION_TRACK_CLASS}
            dotsAriaLabel="Destination slider pagination"
            getDotLabel={(index) => `Show ${destinations[index].countryName}`}
          >
            {(setSlideRef) =>
              destinations.map((destination, index) => (
                <div
                  key={destination.countryCode}
                  ref={setSlideRef(index)}
                  className={SCROLLABLE_SLIDE_DESTINATION_CLASS}
                >
                  <DestinationCard destination={destination} />
                </div>
              ))
            }
          </ScrollableSlider>
        </div>
      </div>
    </section>
  );
}
