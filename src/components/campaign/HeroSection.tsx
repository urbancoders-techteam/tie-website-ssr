import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import ModalTrigger from "@/components/ModalTrigger";
import defaultHeroImage from "@/assets/mbbs_russia.png";

export type HeroStat = { value: string; label: string };

export interface HeroSectionProps {
  /** Hero background image. */
  heroImage?: StaticImageData;
  /** Redirect path after CTA (e.g. thank-you page). */
  redirectPath?: string;
  /** Short tagline above the title. */
  tagline?: string;
  /** Main heading. Use titleHighlight to wrap a substring in the accent color. */
  title?: string;
  /** Optional substring of title to highlight (e.g. "Russia", "Georgia"). */
  titleHighlight?: string;
  /** Paragraph below the title. Can be string or ReactNode for rich text. */
  description?: ReactNode;
  /** Optional stats row (e.g. "10+ years", "Trusted by 1M+"). */
  stats?: HeroStat[];
  /** CTA button text. */
  ctaText?: string;
  /** Section id for anchor (e.g. "apply"). */
  sectionId?: string;
}

function renderTitle(title: string, titleHighlight?: string) {
  if (!titleHighlight || !title.includes(titleHighlight)) {
    return title;
  }
  const parts = title.split(titleHighlight);
  return (
    <>
      {parts[0]}
      <span className="text-[#5dd4d9]">{titleHighlight}</span>
      {parts[1]}
    </>
  );
}

const DEFAULT_CTA = "BOOK YOUR FREE COUNSELLING";

export default function HeroSection({
  heroImage = defaultHeroImage,
  redirectPath = "/thankyou",
  tagline = "",
  title = "",
  titleHighlight,
  description = "",
  stats = [],
  ctaText = DEFAULT_CTA,
  sectionId = "apply",
}: HeroSectionProps) {
  const titleContent = title ? renderTitle(title, titleHighlight) : null;

  return (
    <section className="relative overflow-hidden bg-black md:min-h-[560px]">
      {/* Mobile: tagline + heading above the image */}
      <div className="md:hidden relative z-10 bg-gray-900 px-4 pt-4 pb-3">
        {tagline && (
          <p className="text-[11px] sm:text-sm tracking-widest uppercase text-[#5dd4d9] font-bold">{tagline}</p>
        )}
        {titleContent && (
          <h1 className="font-sans text-2xl sm:text-4xl font-extrabold text-white leading-tight mt-1">{titleContent}</h1>
        )}
      </div>
      {/* Image */}
      <div className="relative w-full aspect-[3/2] min-h-[200px] max-h-[280px] bg-gray-900 md:absolute md:inset-0 md:aspect-auto md:h-auto md:min-h-0 md:max-h-none md:bg-transparent">
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-contain object-top md:object-cover md:object-center"
          sizes="100vw"
          priority
          aria-hidden
        />
        <div
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-gray-900/75 from-40% via-gray-900/40 to-transparent"
          aria-hidden
        />
      </div>
      {/* Content */}
      <div className="relative z-10 -mt-24 flex flex-col justify-center bg-gray-900 pt-2 md:mt-0 md:bg-transparent md:absolute md:inset-0 md:min-h-[560px] md:pt-0">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 py-5 sm:py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="hidden md:block">
                {tagline && (
                  <p className="text-[11px] sm:text-sm tracking-widest uppercase text-[#5dd4d9] font-bold">{tagline}</p>
                )}
                {titleContent && (
                  <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    {titleContent}
                  </h1>
                )}
              </div>

              {description != null && description !== "" && (
                <div className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  {typeof description === "string" ? <p>{description}</p> : description}
                </div>
              )}

              {stats.length > 0 && (
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-2 text-xs sm:text-sm text-gray-300">
                  {stats.map((s) => (
                    <div key={s.value}>
                      <div className="font-semibold text-white">{s.value}</div>
                      <div>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-1" id={sectionId}>
                <ModalTrigger text={ctaText} className="text-white" redirectPath={redirectPath} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
