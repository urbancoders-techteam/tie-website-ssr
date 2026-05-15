import Image from "next/image";
import Link from "next/link";

import { studyDestinationsContent } from "@/constants/study_abroad/studyDestinations";

export default function StudyDestination() {
  const { eyebrow, heading, description, destinations } = studyDestinationsContent;

  return (
    <section className="bg-[#f7f9fc] py-14 sm:py-16 lg:py-20">
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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {destinations.map((d) => (
            <article
              key={`${d.countryCode}-${d.countryName}`}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-[0_12px_40px_rgba(7,27,58,0.08)] transition hover:shadow-[0_18px_48px_rgba(7,27,58,0.12)]"
            >
              {/* Image header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={d.imageSrc}
                  alt={d.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <p className="absolute left-3 top-3 text-sm font-extrabold tracking-tight text-white drop-shadow sm:left-4 sm:top-4 sm:text-base">
                  {d.countryCode}
                </p>
                <p className="absolute bottom-3 left-3 right-3 text-lg font-extrabold leading-tight text-white drop-shadow sm:bottom-4 sm:left-4 sm:text-xl">
                  {d.countryName}
                </p>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-4 px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0d9488] sm:text-xs">
                    Best for
                  </p>
                  <p className="mt-1.5 text-[13px] leading-snug text-[#5a6570] sm:text-sm">{d.bestFor}</p>
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0d9488] sm:text-xs">
                    Courses
                  </p>
                  <p className="mt-1.5 text-[13px] leading-snug text-[#5a6570] sm:text-sm">{d.courses}</p>
                </div>
                <div className="rounded-lg border border-[#f5d78a] bg-[#fff9e6] px-3 py-2.5 sm:px-3.5 sm:py-3">
                  <p className="flex gap-2 text-[12px] font-semibold leading-snug text-[#854d0e] sm:text-[13px]">
                    <span className="shrink-0 text-[#d97706]" aria-hidden>
                      ★
                    </span>
                    <span>{d.highlight}</span>
                  </p>
                </div>
              </div>

              {/* CTA footer */}
              <Link
                href={d.href}
                className="flex items-center justify-between gap-2 border-t border-[#d9f2ef] bg-[#f0fdf9] px-4 py-3.5 text-[13px] font-bold text-[#0d9488] transition hover:bg-[#e6faf8] sm:px-5 sm:text-sm"
              >
                <span>{d.ctaLabel}</span>
                <span className="text-lg font-normal leading-none" aria-hidden>
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
