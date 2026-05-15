"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

import ModalTrigger from "@/components/ModalTrigger";
import { realStudentsJourneysContent } from "@/constants/study_abroad/realStudentsJourneys";

export default function RealStudentsJourneys() {
  const { eyebrow, headingLine1, headingLine2, description, ctaText, gallery } =
    realStudentsJourneysContent;

  return (
    <section className="bg-[#051129] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-1 flex-col lg:max-w-xl xl:max-w-[26rem]">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/95 sm:text-[11px]">
              <FaStar className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" aria-hidden />
              {eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:mt-6 sm:text-4xl lg:text-[2.35rem] lg:leading-tight xl:text-4xl">
              {headingLine1}{" "}
              <span className="block sm:inline lg:block xl:inline">{headingLine2}</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base lg:text-[15px] lg:leading-relaxed">
              {description}
            </p>

            <div className="mt-8 sm:mt-9">
              <ModalTrigger
                text={ctaText}
                variant="custom"
                className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-gradient-to-r from-[#22d3ee] via-[#14b8a6] to-[#0d9488] px-8 py-3.5 text-center text-sm font-bold text-white shadow-[0_0_24px_rgba(45,212,191,0.45),0_8px_24px_rgba(13,148,136,0.35)] transition hover:brightness-105 sm:w-auto sm:py-4 sm:text-[15px]"
                redirectPath="/thankyou"
              />
            </div>
          </div>

          <div className="relative w-full shrink-0 lg:max-w-[min(100%,28rem)] xl:max-w-[32rem]">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {gallery.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 280px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
