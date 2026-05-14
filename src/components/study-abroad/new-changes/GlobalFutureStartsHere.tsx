"use client";

import Link from "next/link";

import ModalTrigger from "@/components/ModalTrigger";
import { globalFutureStartsHereContent } from "@/constants/StudyAbroad/globalFutureStartsHere";

export default function GlobalFutureStartsHere() {
  const { eyebrow, heading, description, primaryCta, secondaryCta } = globalFutureStartsHereContent;

  return (
    <section className="relative isolate overflow-hidden bg-[#08213a] py-12 sm:py-14 lg:py-16">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(3,22,42,0.95)_0,rgba(3,22,42,0.72)_34%,rgba(10,147,145,0.72)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden
      />
      <div
        className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 blur-sm"
        aria-hidden
      />
      <div
        className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#14b8a6]/30 blur-[80px]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/90 backdrop-blur sm:text-[10px]">
            <span className="text-[#5eead4]" aria-hidden>
              •
            </span>
            {eyebrow}
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-3xl lg:text-[2.35rem]">
            <span className="block">{heading.question}</span>
            <span className="mt-2 block text-white/95 sm:mt-3">
              {heading.answerLead}{" "}
              <span className="text-[#5eead4]">{heading.answerHighlight}</span>
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-white/78 sm:text-sm">
            {description}
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ModalTrigger
              text={primaryCta}
              variant="custom"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-white px-6 py-3 text-center text-xs font-extrabold text-[#0f766e] shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition hover:bg-[#ecfeff] sm:w-auto"
              redirectPath="/thankyou"
            />
            <Link
              href={secondaryCta.href}
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-3 text-center text-xs font-extrabold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
            >
              {secondaryCta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
