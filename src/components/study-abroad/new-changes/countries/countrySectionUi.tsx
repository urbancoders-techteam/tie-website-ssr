"use client";

import Image from "next/image";
import React from "react";

function mergeClass(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Shared section shell: scroll offset + bottom spacing with laptop compaction. */
export function sectionShell(className?: string) {
  return mergeClass(
    "mb-8 min-w-0 scroll-mt-[var(--uk-scroll-offset,10rem)] sm:mb-10",
    "lg:mb-7",
    className
  );
}

type SectionTitleProps = {
  children: React.ReactNode;
  as?: "h2" | "h3";
  className?: string;
};

export function SectionTitle({ children, as: Tag = "h2", className }: SectionTitleProps) {
  return (
    <Tag
      className={mergeClass(
        "text-[clamp(1.15rem,2vw,1.35rem)] font-extrabold leading-snug text-[#002147]",
        "lg:text-[1.0625rem]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

type SectionHeadingProps = {
  title: React.ReactNode;
  className?: string;
};

/** Teal left bar + section title (introduction blocks). */
export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div
      className={mergeClass(
        "mb-5 flex items-start gap-3",
        "lg:mb-[0.85rem] lg:gap-2.5",
        className
      )}
    >
      <span
        className="min-h-7 w-1 shrink-0 self-stretch rounded-sm bg-[#00999e] lg:min-h-[1.35rem]"
        aria-hidden
      />
      <SectionTitle>{title}</SectionTitle>
    </div>
  );
}

type SectionIntroProps = {
  children: React.ReactNode;
  className?: string;
  /** `body` matches introduction prose (#4a4a4a); `muted` matches why-study / overview subtitles. */
  tone?: "body" | "muted";
};

export function SectionIntro({ children, className, tone = "muted" }: SectionIntroProps) {
  const toneClass =
    tone === "body"
      ? "text-base leading-[1.85] text-[#4a4a4a] [&_p+p]:mt-4 [&_strong]:font-bold [&_strong]:text-[#002147] lg:text-sm lg:leading-[1.6] lg:[&_p+p]:mt-2"
      : "text-base leading-[1.75] text-[#64748b] [&_p+p]:mt-[0.65rem] lg:text-sm lg:leading-[1.6] lg:[&_p+p]:mt-2";

  return <div className={mergeClass(toneClass, className)}>{children}</div>;
}

export type CountryTableRow = {
  parameter: string;
  details: string;
};

type CountryDataTableProps = {
  rows: CountryTableRow[];
  className?: string;
};

export function CountryDataTable({ rows, className }: CountryDataTableProps) {
  if (!rows.length) return null;

  return (
    <div
      className={mergeClass(
        "mt-5 overflow-hidden rounded-[0.875rem] border border-slate-200 bg-white",
        "lg:mt-[0.85rem] lg:rounded-xl",
        className
      )}
    >
      <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
        <table className="w-full min-w-full border-collapse text-sm leading-normal sm:min-w-[520px] sm:text-[0.9375rem] lg:min-w-0 lg:text-[0.8125rem] lg:leading-snug">
          <thead className="bg-[#002147]">
            <tr>
              <th
                scope="col"
                className="px-[0.85rem] py-3 text-left text-sm font-bold text-white sm:px-[1.15rem] sm:py-[0.9rem] lg:px-[0.7rem] lg:py-[0.55rem] lg:text-xs"
              >
                Parameter
              </th>
              <th
                scope="col"
                className="px-[0.85rem] py-3 text-left text-sm font-bold text-white sm:px-[1.15rem] sm:py-[0.9rem] lg:px-[0.7rem] lg:py-[0.55rem] lg:text-xs"
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.parameter}
                className="border-b border-[#e8edf2] last:border-0 even:bg-[#f4f8fb] odd:bg-white"
              >
                <td className="w-[42%] px-[0.85rem] py-3 align-top font-medium text-[#64748b] sm:w-[38%] sm:px-[1.15rem] sm:py-[0.95rem] lg:w-[36%] lg:px-[0.7rem] lg:py-[0.55rem]">
                  {row.parameter}
                </td>
                <td className="px-[0.85rem] py-3 align-top text-[#334155] sm:px-[1.15rem] sm:py-[0.95rem] lg:px-[0.7rem] lg:py-[0.55rem]">
                  {row.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Alias for migrated country tab sections. */
export const countrySectionShell = sectionShell;

export function CountrySectionHeading({
  title,
  className,
}: {
  title: React.ReactNode;
  className?: string;
}) {
  return <SectionHeading title={title} className={className} />;
}

export function CountrySectionIntro({
  paragraphs,
  className,
}: {
  paragraphs: string[];
  className?: string;
}) {
  if (!paragraphs.length) return null;

  return (
    <SectionIntro className={className}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </SectionIntro>
  );
}

export function CountrySubsectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={mergeClass(
        "mt-7 mb-4 text-[clamp(0.95rem,4vw,1rem)] font-extrabold leading-snug text-[#002147]",
        "lg:mt-4 lg:mb-2.5 lg:text-[0.9rem]",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CountryFeaturedFigure({
  src,
  alt,
  caption,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 65vw",
  variant = "standard",
  captionCentered = false,
  figureClassName,
}: {
  src: string;
  alt: string;
  caption: string;
  sizes?: string;
  variant?: "wide" | "standard";
  captionCentered?: boolean;
  figureClassName?: string;
}) {
  const imageWrap =
    variant === "wide"
      ? "relative w-full min-h-[200px] max-h-[420px] bg-slate-200 aspect-[21/9] md:aspect-[2.4/1] md:min-h-[240px] lg:h-[185px] lg:min-h-0 lg:max-h-[185px] lg:aspect-[2.35/1]"
      : "relative w-full min-h-[180px] max-h-[380px] bg-slate-200 aspect-video lg:h-[185px] lg:min-h-0 lg:max-h-[185px] lg:aspect-[2.35/1]";

  const captionBg =
    variant === "wide" || !captionCentered ? "bg-slate-100" : "bg-slate-50 text-center";

  return (
    <figure
      className={mergeClass(
        "mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 lg:mt-3.5 lg:rounded-lg",
        figureClassName
      )}
    >
      <div className={imageWrap}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          unoptimized
        />
      </div>
      <figcaption
        className={mergeClass(
          "m-0 border-t border-slate-200 px-4 py-3 text-[0.8125rem] italic leading-normal text-slate-400 lg:px-3.5 lg:py-2.5 lg:text-xs lg:leading-snug",
          captionBg
        )}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export function CountryTableBlock({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={mergeClass("min-w-0", className)}>
      <CountrySubsectionTitle className="!mt-0 mb-3.5 lg:mb-2">{title}</CountrySubsectionTitle>
      {children}
    </div>
  );
}

export function CountryTableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white lg:rounded-lg">
      <div className="max-w-full overflow-x-auto [-webkit-overflow-scrolling:touch] lg:overflow-x-visible">
        {children}
      </div>
    </div>
  );
}

const tableShell =
  "w-full table-fixed border-collapse text-sm leading-normal max-lg:table-auto lg:min-w-0 lg:text-[0.8125rem] lg:leading-snug";

const thCell =
  "px-3 py-3.5 text-left align-middle text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-snug";

const tdCell =
  "break-words px-3 py-3 align-top text-slate-500 hyphens-auto [overflow-wrap:anywhere] lg:px-2.5 lg:py-2 lg:text-[0.8125rem]";

export function CountryMarkupTable({
  children,
  minWidthClass = "max-lg:min-w-[520px]",
  className,
}: {
  children: React.ReactNode;
  minWidthClass?: string;
  className?: string;
}) {
  return (
    <table className={mergeClass(tableShell, minWidthClass, className)}>{children}</table>
  );
}

export function CountryTableHead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-[#002147]">{children}</thead>;
}

export function CountryTableHeaderCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th scope="col" className={mergeClass(thCell, className)}>
      {children}
    </th>
  );
}

export function CountryTableBody({ children }: { children: React.ReactNode }) {
  return (
    <tbody className="[&_tr]:border-b [&_tr]:border-[#e8edf2] [&_tr:last-child]:border-b-0">
      {children}
    </tbody>
  );
}

export function CountryTableBodyStriped({ children }: { children: React.ReactNode }) {
  return (
    <tbody className="[&_tr]:border-b [&_tr]:border-[#e8edf2] [&_tr:nth-child(even)]:bg-[#f4f8fb] [&_tr:nth-child(odd)]:bg-white [&_tr:last-child]:border-b-0">
      {children}
    </tbody>
  );
}

export function CountryTableCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={mergeClass(tdCell, className)}>{children}</td>;
}

export function CountryRankBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 min-w-8 items-center justify-center whitespace-nowrap rounded-full bg-[#e0f4f5] px-2 text-[0.8125rem] font-bold text-[#007f83] lg:h-[1.65rem] lg:min-w-[1.65rem] lg:px-1.5 lg:text-[0.6875rem]">
      {children}
    </span>
  );
}

export function CountryWarningNote({
  text,
  icon: Icon,
}: {
  text: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
  return (
    <div
      className="flex min-w-0 overflow-hidden rounded-xl border border-amber-200 bg-amber-50"
      role="note"
    >
      <div className="w-[5px] shrink-0 bg-amber-500" aria-hidden />
      <p className="m-0 px-4 py-4 text-sm leading-relaxed text-stone-500 lg:px-3.5 lg:py-3 lg:text-[0.8125rem] lg:leading-snug">
        <Icon
          className="mr-1.5 inline-block h-[1.1rem] w-[1.1rem] shrink-0 align-[-0.2em] text-amber-500"
          aria-hidden
        />
        <strong className="font-bold text-amber-800">Note:</strong> {text}
      </p>
    </div>
  );
}

export function CountryProTipNote({
  label,
  text,
  icon: Icon,
}: {
  label: string;
  text: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
  return (
    <div
      className="mt-5 flex min-w-0 overflow-hidden rounded-xl border border-[#cbecef] bg-[#f0fafb] lg:mt-3.5"
      role="note"
    >
      <div className="w-[5px] shrink-0 bg-[#00999e]" aria-hidden />
      <p className="m-0 px-4 py-4 text-sm leading-relaxed text-slate-600 lg:px-3.5 lg:py-3 lg:text-[0.8125rem] lg:leading-snug">
        <Icon
          className="mr-1.5 inline-block h-[1.15rem] w-[1.15rem] shrink-0 align-[-0.2em] text-yellow-500"
          aria-hidden
        />
        <strong className="font-bold text-[#00999e]">{label}</strong> {text}
      </p>
    </div>
  );
}

export function CountryGradientBanner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={mergeClass(
        "relative min-w-0 overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#0a4d52] via-[#0d6b6f] to-[#00999e] px-6 py-7",
        "lg:rounded-2xl lg:px-4 lg:py-4",
        className
      )}
    >
      <div
        className="pointer-events-none absolute right-[-3rem] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-white/[0.08] lg:right-[-2rem] lg:h-40 lg:w-40"
        aria-hidden
      />
      <div className="relative z-[1] max-w-xl">{children}</div>
    </div>
  );
}
