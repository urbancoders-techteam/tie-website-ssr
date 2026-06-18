"use client";

import ModalTrigger from "@/components/ModalTrigger";

export default function BlogCounsellingCard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B162C] via-[#143C52] to-[#00999E] p-[1px] shadow-[0_20px_60px_rgba(11,22,44,0.20)] sm:rounded-3xl">
      <div className="rounded-2xl bg-[#0B162C]/95 px-5 py-6 text-white sm:rounded-3xl sm:px-7 sm:py-8">
        <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-[#5EEAD4] sm:text-[0.7rem] sm:tracking-[0.28em]">
          <span className="opacity-70" aria-hidden>
            —
          </span>{" "}
          Free MBBS Counselling{" "}
          <span className="opacity-70" aria-hidden>
            —
          </span>
        </p>
        <h3 className="mt-3 text-balance text-lg font-black leading-snug sm:mt-4 sm:text-xl">
          Find the Right Country for Your MBBS in 2026
        </h3>
        <p className="mt-2.5 text-pretty text-sm leading-relaxed text-white/75 sm:mt-3">
          Our MBBS specialists analyse your NEET score, budget and career goals to recommend the
          right university — at zero cost to you.
        </p>

        <div className="mt-5 grid gap-2.5 sm:mt-7 sm:gap-3">
          <ModalTrigger
            variant="custom"
            text="Book Free Session"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#1BB7B6] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(27,183,182,0.28)] transition hover:bg-[#12A7A6]"
          />
          <a
            href="tel:+919831241212"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-extrabold text-white/90 backdrop-blur transition hover:bg-white/15"
          >
            Call Our MBBS Team
          </a>
        </div>
      </div>
    </div>
  );
}
