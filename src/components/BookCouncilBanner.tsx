"use client";

import ModalTrigger from "@/components/ModalTrigger";
import { MdOutlinePhone } from "react-icons/md";

/** Banner + primary CTA text color (matched) */
const BANNER = "#00a699";

const DEFAULT_PHONE_TEL = "+919831241212";

const PRIMARY_BTN_CLASS = `inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold transition hover:bg-white/95 sm:px-8 sm:text-base`;
const GHOST_BTN_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-transparent px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:px-6 sm:text-base";

export type BookCouncilBannerProps = {
  /** Passed to `ModalTrigger` / registration flow */
  redirectPath: string;
  /** Subheading under the title (defaults to homepage-style line) */
  description?: string;
  /** Main heading */
  heading?: string;
  /** Primary modal button label */
  bookButtonText?: string;
  /** Ghost link label (default “Call Now”) */
  callNowText?: string;
  /**
   * `tel` may include spaces — used for the call link `href`.
   * `label` is accepted for backward compatibility but not shown (ghost uses `callNowText`).
   */
  phone?: { tel: string; label?: string };
  /** Extra classes on the outer `<section>` */
  className?: string;
};

const DEFAULT_DESCRIPTION =
  "Book your FREE counselling session today. 5,000+ students did — and never looked back.";

export default function BookCouncilBanner({
  redirectPath,
  description = DEFAULT_DESCRIPTION,
  heading = "Ready to Write Your Global Story?",
  bookButtonText = "Book Free Consultation",
  callNowText = "Call Now",
  phone = {
    tel: DEFAULT_PHONE_TEL,
  },
  className = "",
}: BookCouncilBannerProps) {
  const telHref = `tel:${phone.tel.replace(/\s/g, "")}`;

  return (
    <section
      className={`w-full py-10 md:py-14 lg:py-16 ${className}`.trim()}
      style={{ backgroundColor: BANNER }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-stretch justify-between gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
          <div className="max-w-2xl shrink-0">
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-[1.75rem] md:text-3xl">
              {heading}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/95 sm:text-base md:mt-3.5">
              {description}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end md:w-auto md:shrink-0 md:gap-4">
            <ModalTrigger
              variant="custom"
              text={bookButtonText}
              redirectPath={redirectPath}
              className={PRIMARY_BTN_CLASS}
              style={{ color: BANNER }}
            />
            <a href={telHref} className={GHOST_BTN_CLASS}>
              <MdOutlinePhone
                className="h-[1.125rem] w-[1.125rem] shrink-0 text-rose-300 sm:h-5 sm:w-5"
                aria-hidden
              />
              {callNowText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
