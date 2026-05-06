"use client";

import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import ModalTrigger from "@/components/ModalTrigger";

/** Content model for program-style cards (carousel, grids, listings). */
export type ProgramCardData = {
  id: string;
  /** Shown on the image badge (e.g. duration or country code). */
  duration: string;
  countryCode: string;
  countryName: string;
  description: string;
  tags: string[];
  image: ImageProps["src"];
  /** CTA label; defaults to enquiry copy. */
  ctaLabel?: string;
  /** When set, CTA is a link instead of the enquiry modal. */
  ctaHref?: string;
};

/** Default carousel widths (~4 cards + peek lg). */
export const programCardClassName =
  "flex h-full min-h-[395px] w-[90%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_4px_20px_-8px_rgba(15,39,68,0.12)] sm:w-[calc((100%-0.75rem)/2.08)] md:w-[calc((100%-1.5rem)/3.08)] lg:w-[calc((100%-2.25rem)/4.12)]";

/** Full-width shell for CSS grids (no carousel snap / %-width columns). */
export const programCardGridClassName =
  "flex h-full min-h-[360px] w-full shrink-0 flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_4px_20px_-8px_rgba(15,39,68,0.12)]";

export const programCardImageSizes =
  "(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 31vw, 24vw";

/** Static CTA styling — no hover color shift (consistent card chrome). */
const ctaClassName =
  "shrink-0 rounded-md bg-[#00a88f]/12 px-2.5 py-1.5 text-[0.6875rem] font-semibold text-[#00a88f] sm:px-3 sm:py-2 sm:text-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a88f]/40 focus-visible:ring-offset-2";

type Props = {
  program: ProgramCardData;
  priority?: boolean;
  /** Extra classes on `<article>`. */
  className?: string;
  imageSizes?: string;
  imageAlt?: string;
  /** Immersion carousel uses default widths; grids should pass `false`. */
  carouselSizing?: boolean;
};

export default function ProgramCard({
  program: p,
  priority,
  className,
  imageSizes = programCardImageSizes,
  imageAlt,
  carouselSizing = true,
}: Props) {
  const baseArticle = carouselSizing ? programCardClassName : programCardGridClassName;
  const articleClass = className ? `${baseArticle} ${className}` : baseArticle;
  const resolvedAlt =
    imageAlt ??
    `${p.countryName} (${p.countryCode})${p.duration ? ` — ${p.duration}` : ""}`;
  const ctaLabel = p.ctaLabel ?? "Enquiry Now →";

  return (
    <article className={articleClass} data-program-card>
      <div className="relative aspect-[5/3] w-full bg-slate-100">
        <Image
          src={p.image}
          alt={resolvedAlt}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes={imageSizes}
          draggable={false}
        />
        <span className="absolute left-2 top-2 rounded bg-[#0f2744] px-2 py-0.5 text-[0.625rem] font-semibold tracking-wide text-white shadow-sm sm:left-2.5 sm:top-2.5 sm:px-2.5 sm:py-1 sm:text-[0.6875rem]">
          {p.duration}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-left text-base font-bold leading-snug text-[#0f2744] sm:text-[1.0625rem]">
          <span className="text-[#00a88f]">{p.countryCode}</span> {p.countryName}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-left text-[0.75rem] leading-relaxed text-slate-600 sm:text-[0.8125rem]">
          {p.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {p.tags.map((tag) => (
            <span
              key={`${p.id}-${tag}`}
              className="rounded-full bg-[#00a88f]/10 px-2 py-0.5 text-[0.6rem] font-medium text-[#00a88f] sm:text-[0.65rem]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
          {p.ctaHref ? (
            <Link href={p.ctaHref} className={`${ctaClassName} inline-flex items-center no-underline`}>
              {ctaLabel}
            </Link>
          ) : (
            <ModalTrigger variant="custom" className={ctaClassName}>
              {ctaLabel}
            </ModalTrigger>
          )}
        </div>
      </div>
    </article>
  );
}
