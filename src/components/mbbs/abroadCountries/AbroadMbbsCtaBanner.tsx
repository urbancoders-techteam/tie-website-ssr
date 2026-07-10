"use client";

import ModalTrigger from "@/components/ModalTrigger";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import { FaClipboardList, FaPhone } from "react-icons/fa";

/** Matches infographic CTA strip (~Material Red 600). */
const BANNER_RED = "bg-[#0A9DA2]";
const BANNER_RED_TEXT = "text-[#0A9DA2]";

type CtaContent = AbroadFullPageCopy["ctaBanner"];

interface AbroadMbbsCtaBannerProps {
  content: CtaContent;
  /**
   * Country slug for a stable section anchor, e.g. `georgia` → `id="mbbs-abroad-cta-georgia"`.
   * Omit to use `mbbs-abroad-cta`.
   */
  sectionSlug?: string;
  /** Post-registration redirect; pass the current abroad URL when helpful. */
  redirectPath?: string;
}

export default function AbroadMbbsCtaBanner({ content, sectionSlug, redirectPath }: AbroadMbbsCtaBannerProps) {
  const sectionId = sectionSlug ? `mbbs-abroad-cta-${sectionSlug}` : "mbbs-abroad-cta";
  const headingId = "mbbs-abroad-cta-heading";
  const telHref = `tel:${content.phoneTel.replace(/\s/g, "")}`;

  return (
    <section
      id={sectionId}
      className={`${BANNER_RED} scroll-mt-24 overflow-x-hidden py-10 sm:py-12 md:py-14`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto min-w-0 max-w-4xl px-4 text-center sm:px-4">
        <h2
          id={headingId}
          className="font-serif text-[1.35rem] font-semibold leading-snug text-white sm:text-2xl md:text-[2.5rem] md:leading-tight"
        >
          {content.heading ? (
            content.heading
          ) : (
            <>
              Ready to Begin Your MBBS in{" "}
              <span className="font-semibold text-black">{content.countryLabel}</span> Journey?
            </>
          )}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/95 sm:text-base">
          {content.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <ModalTrigger
            variant="custom"
            className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-md font-semibold ${BANNER_RED_TEXT} shadow-md transition hover:bg-white/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
            redirectPath={redirectPath}
            aria-label={content.primaryCtaLabel}
          >
            <FaClipboardList className="h-4 w-4 shrink-0" aria-hidden />
            {content.primaryCtaLabel}
          </ModalTrigger>
          <a
            href={telHref}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FaPhone className="h-4 w-4 shrink-0" aria-hidden />
            Call {content.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
