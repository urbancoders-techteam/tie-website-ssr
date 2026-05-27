"use client";

import ModalTrigger from "@/components/ModalTrigger";

export default function BlogCounsellingCard() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B162C] via-[#143C52] to-[#00999E] p-[1px] shadow-[0_20px_60px_rgba(11,22,44,0.20)]">
      <div className="rounded-3xl bg-[#0B162C]/95 px-7 py-8 text-white">
        <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-[#5EEAD4]">
          <span className="opacity-70" aria-hidden>
            —
          </span>{" "}
          Free MBBS Counselling{" "}
          <span className="opacity-70" aria-hidden>
            —
          </span>
        </p>
        <h3 className="mt-4 text-xl font-black leading-snug">
          Find the Right Country for Your MBBS in 2026
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          Our MBBS specialists analyse your NEET score, budget and career goals to recommend the
          right university — at zero cost to you.
        </p>

        <div className="mt-7 grid gap-3">
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
