import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

import ModalTrigger from "@/components/ModalTrigger";

export type CustomHeroStat = { value: ReactNode; label: ReactNode };

export type CustomHeroPrimaryCta =
  | {
      kind: "modal";
      text: string;
      redirectPath?: string;
      className?: string;
    }
  | {
      kind: "custom";
      node: ReactNode;
    }
  | null;

export type CustomHeroSecondaryCta =
  | {
      href: string;
      text: string;
      targetBlank?: boolean;
      className?: string;
    }
  | null;

export interface CustomHeroSectionProps {
  /** Optional anchor id for the section */
  id?: string;

  /** Background image (string URL or imported StaticImageData). */
  heroImage: StaticImageData | string;
  /** Decorative by default; pass alt for SEO/a11y. */
  heroImageAlt?: string;
  /** Responsive sizes passed to next/image. */
  imageSizes?: string;
  /** LCP hint for next/image. */
  imagePriority?: boolean;

  /**
   * Direct control over the image className (supports responsive classes like `md:object-cover`).
   * If provided, `imageFit`/`imagePosition` are ignored.
   */
  imageClassName?: string;
  /** Control object-fit behavior (used only when imageClassName not provided). */
  imageFit?: "cover" | "contain";
  /** Control object-position behavior (used only when imageClassName not provided). */
  imagePosition?: "top" | "center";

  /** Add an overlay / gradient above the image. */
  overlay?: ReactNode;

  /** Small label above title. */
  tagline?: ReactNode;
  /** Main heading (visually displayed). */
  title?: ReactNode;
  /** Optional semantic H1 for the page (sr-only). */
  semanticH1?: string;
  /** Description block under title. */
  description?: ReactNode;

  /** Stats row under description. */
  stats?: CustomHeroStat[];

  /** Primary + secondary actions. */
  primaryCta?: CustomHeroPrimaryCta;
  secondaryCta?: CustomHeroSecondaryCta;

  /** Layout knobs (defaults match existing campaign HeroSection look). */
  containerClassName?: string;
  contentClassName?: string;
  minHeightClassName?: string;
  mobileHeaderClassName?: string;
  desktopTitleClassName?: string;
  mobileTitleClassName?: string;

  /** Anchor id where CTAs sit (useful for deep links). */
  ctaAnchorId?: string;
}

const DEFAULT_DESKTOP_TITLE =
  "font-sans text-2xl sm:text-4xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]";
const DEFAULT_MOBILE_TITLE =
  "font-sans text-2xl sm:text-4xl font-extrabold text-white leading-tight mt-1";

export default function CustomHeroSection({
  id,
  heroImage,
  heroImageAlt = "",
  imageSizes = "100vw",
  imagePriority = true,
  imageClassName,
  imageFit = "cover",
  imagePosition = "center",
  overlay,
  tagline,
  title,
  semanticH1,
  description,
  stats = [],
  primaryCta = { kind: "modal", text: "BOOK YOUR FREE COUNSELLING", redirectPath: "/thankyou" },
  secondaryCta = null,
  containerClassName = "mx-auto max-w-7xl w-full px-4 sm:px-6 py-5 sm:py-12 md:py-20",
  contentClassName = "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center",
  minHeightClassName = "md:min-h-[560px]",
  mobileHeaderClassName = "md:hidden relative z-10 bg-gray-900 px-4 pt-4 pb-3",
  desktopTitleClassName = DEFAULT_DESKTOP_TITLE,
  mobileTitleClassName = DEFAULT_MOBILE_TITLE,
  ctaAnchorId = "apply",
}: CustomHeroSectionProps) {
  const fitClass = imageFit === "contain" ? "object-contain" : "object-cover";
  const posClass = imagePosition === "top" ? "object-top" : "object-center";
  const computedImageClassName =
    imageClassName ?? `${fitClass} ${posClass} md:${fitClass} md:${posClass}`;
  const h1Text = semanticH1 ?? (typeof title === "string" ? title : null);
  const decorativeTitle = semanticH1 ? null : title;

  return (
    <section id={id} className={`relative overflow-hidden bg-black ${minHeightClassName}`}>
      <div className={mobileHeaderClassName}>
        {tagline ? (
          <div className="text-[11px] sm:text-sm tracking-widest uppercase text-[#5dd4d9] font-bold">
            {tagline}
          </div>
        ) : null}
        {h1Text ? (
          <h1 className={mobileTitleClassName}>{h1Text}</h1>
        ) : decorativeTitle ? (
          <div className={mobileTitleClassName} aria-hidden="true">
            {decorativeTitle}
          </div>
        ) : null}
      </div>

      <div className="relative w-full aspect-[3/2] min-h-[200px] max-h-[280px] bg-gray-900 md:absolute md:inset-0 md:aspect-auto md:h-auto md:min-h-0 md:max-h-none md:bg-transparent">
        <Image
          src={heroImage}
          alt={heroImageAlt || ""}
          fill
          className={computedImageClassName}
          sizes={imageSizes}
          priority={imagePriority}
          aria-hidden={heroImageAlt ? undefined : true}
        />

        {overlay ?? (
          <div
            className="hidden md:block absolute inset-0 bg-gradient-to-r from-gray-900/75 from-40% via-gray-900/40 to-transparent"
            aria-hidden
          />
        )}
      </div>

      <div className="relative z-10 -mt-24 flex flex-col justify-center bg-gray-900 pt-2 md:mt-0 md:bg-transparent md:absolute md:inset-0 md:min-h-[560px] md:pt-0">
        <div className={containerClassName}>
          <div className={contentClassName}>
            <div className="space-y-4 sm:space-y-6">
              <div className="hidden md:block">
                {tagline ? (
                  <div className="text-[11px] sm:text-sm tracking-widest uppercase text-[#5dd4d9] font-bold">
                    {tagline}
                  </div>
                ) : null}
                {h1Text ? (
                  <h1 className={desktopTitleClassName}>{h1Text}</h1>
                ) : decorativeTitle ? (
                  <div className={desktopTitleClassName} aria-hidden="true">
                    {decorativeTitle}
                  </div>
                ) : null}
              </div>

              {description != null && description !== "" ? (
                <div className="text-gray-200 text-justify text-sm sm:text-base md:text-lg max-w-xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  {typeof description === "string" ? <p>{description}</p> : description}
                </div>
              ) : null}

              {stats.length > 0 ? (
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 pt-4 sm:pt-2 text-gray-300">
                  {stats.map((s, idx) => (
                    <div
                      key={typeof s.label === "string" ? s.label : `stat-${idx}`}
                      className="min-w-0 rounded-lg bg-white/5 px-3 py-2.5 sm:bg-transparent sm:px-0 sm:py-0 sm:rounded-none"
                    >
                      <div className="text-base sm:text-lg font-semibold text-white break-words">
                        {s.value}
                      </div>
                      <div className="text-[11px] sm:text-sm mt-0.5 leading-snug line-clamp-2 sm:line-clamp-none">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {(primaryCta || secondaryCta) && (
                <div className="flex flex-col sm:flex-row gap-3 pt-1" id={ctaAnchorId}>
                  {primaryCta?.kind === "modal" ? (
                    <ModalTrigger
                      text={primaryCta.text}
                      className={primaryCta.className ?? "text-white"}
                      redirectPath={primaryCta.redirectPath ?? "/thankyou"}
                    />
                  ) : primaryCta?.kind === "custom" ? (
                    primaryCta.node
                  ) : null}

                  {secondaryCta ? (
                    <a
                      href={secondaryCta.href}
                      target={secondaryCta.targetBlank ? "_blank" : undefined}
                      rel={secondaryCta.targetBlank ? "noopener noreferrer" : undefined}
                      className={
                        secondaryCta.className ??
                        "inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
                      }
                    >
                      {secondaryCta.text}
                    </a>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

