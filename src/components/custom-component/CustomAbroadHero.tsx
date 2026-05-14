"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ModalTrigger from "@/components/ModalTrigger";
import RegisterForm from "@/components/home/RegisterForm";

export type CustomAbroadHeroStat = {
  label: ReactNode;
  value: ReactNode;
};

export type CustomAbroadHeroAction =
  | {
      kind: "modal";
      text: string;
      className?: string;
      redirectPath?: string;
    }
  | {
      kind: "link";
      text: string;
      href: string;
      className?: string;
      targetBlank?: boolean;
    }
  | {
      kind: "custom";
      node: ReactNode;
    }
  | null;

export type CustomAbroadHeroHighlightStat = {
  value: ReactNode;
  subtitle: ReactNode;
};

export type CustomAbroadHeroMediaCard = {
  image: string | StaticImageData;
  title: string;
  alt?: string;
  subtitle?: string;
  className?: string;
};

export interface CustomAbroadHeroProps {
  backgroundImage?: string | StaticImageData;
  backgroundImageAlt?: string;
  imagePriority?: boolean;
  imageSizes?: string;
  imageClassName?: string;
  showDecorativeLayers?: boolean;
  /**
   * Scrim over the hero background: `default` (stronger contrast), `light` (softer — e.g. study-abroad),
   * or `none` (bare photo).
   */
  imageOverlay?: "default" | "light" | "none";

  eyebrow?: ReactNode;
  eyebrowVariant?: "plain" | "pill";
  eyebrowIcon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;

  primaryCta?: CustomAbroadHeroAction;
  secondaryCta?: CustomAbroadHeroAction;
  quickStats?: CustomAbroadHeroStat[];

  rightStat?: CustomAbroadHeroHighlightStat;
  mediaCards?: CustomAbroadHeroMediaCard[];
  rightColumn?: ReactNode;
  showRegisterForm?: boolean;

  sectionClassName?: string;
  containerClassName?: string;
  gridClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  primaryCtaClassName?: string;
  secondaryCtaClassName?: string;
  statsWrapperClassName?: string;
  statCellClassName?: string;
}

const EYEBROW =
  "text-[11px] sm:text-xs md:text-sm tracking-[0.18em] text-white uppercase font-semibold";
const EYEBROW_PILL =
  "inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#35f0f4] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm sm:text-xs";
const HEADLINE =
  "text-white font-bold leading-tight text-[34px] sm:text-[42px] md:text-[46px]";
const BODY =
  "text-sm sm:text-base md:text-lg leading-relaxed text-white/90 max-w-xl text-left";
const CTA_ROW = "flex flex-col sm:flex-row gap-3";
const BTN_PRIMARY =
  "inline-flex h-12 items-center justify-center rounded-xl bg-[#00999E] px-6 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#007a7f]";
const BTN_SECONDARY =
  "inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm sm:text-base font-semibold text-[#0A6D72] transition-colors hover:bg-white/90";
const QUICK_STATS_WRAP_BASE =
  "grid overflow-hidden rounded-xl border border-[#A7ECEE]/55 bg-[#2A9EA3]/28 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[3px]";
const STAT_CELL = "text-[10px] uppercase tracking-widest text-white";
const STAT_VALUE = "text-lg sm:text-xl font-semibold text-white mt-1";

/** Matches campaign `CustomHeroSection` shell — content reads from the left inside max width */
const DEFAULT_HERO_CONTAINER =
  "relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 py-5 sm:py-12 md:py-14";

type BackdropProps = {
  backgroundImage?: string | StaticImageData;
  backgroundImageAlt?: string;
  imagePriority?: boolean;
  imageSizes?: string;
  imageClassName?: string;
  showDecorativeLayers?: boolean;
  imageOverlay?: "default" | "light" | "none";
};

function HeroBackdrop({
  backgroundImage,
  backgroundImageAlt = "",
  imagePriority = true,
  imageSizes = "100vw",
  imageClassName = "object-cover",
  showDecorativeLayers = false,
  imageOverlay = "default",
}: BackdropProps) {
  return (
    <>
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            priority={imagePriority}
            className={imageClassName}
            sizes={imageSizes}
            aria-hidden={backgroundImageAlt ? undefined : true}
          />
        </div>
      ) : null}
      {imageOverlay !== "none" ? (
        imageOverlay === "light" ? (
          <>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-black/12 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/10" />
          </>
        )
      ) : null}
      {showDecorativeLayers ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(125,240,244,0.34),transparent_42%),radial-gradient(circle_at_92%_18%,rgba(45,212,191,0.30),transparent_36%),radial-gradient(circle_at_58%_100%,rgba(255,220,110,0.18),transparent_42%),linear-gradient(135deg,#0A6268_0%,#10929A_50%,#075159_100%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
        </>
      ) : null}
    </>
  );
}

function renderAction(
  action: CustomAbroadHeroAction | undefined,
  fallbackClassName: string,
) {
  if (!action) return null;

  if (action.kind === "custom") {
    return action.node;
  }

  if (action.kind === "modal") {
    return (
      <ModalTrigger
        text={action.text}
        variant="custom"
        className={action.className ?? fallbackClassName}
        redirectPath={action.redirectPath}
      />
    );
  }

  return (
    <Link
      href={action.href}
      target={action.targetBlank ? "_blank" : undefined}
      rel={action.targetBlank ? "noopener noreferrer" : undefined}
      className={action.className ?? fallbackClassName}
    >
      {action.text}
    </Link>
  );
}

function QuickStatsGrid({
  stats,
  wrapperClassName,
  statCellClassName,
}: {
  stats: CustomAbroadHeroStat[];
  wrapperClassName?: string;
  statCellClassName?: string;
}) {
  const cols = stats.length >= 5 ? "grid-cols-2 sm:grid-cols-5" : "grid-cols-2 sm:grid-cols-4";
  return (
    <div className={wrapperClassName ?? `${QUICK_STATS_WRAP_BASE} ${cols}`}>
      {stats.map((stat, i) => (
        <div
          key={typeof stat.label === "string" ? stat.label : `stat-${i}`}
          className={
            statCellClassName ??
            `px-4 py-3 ${i < stats.length - 1 ? "border-r border-[#A7ECEE]/35" : ""}`
          }
        >
          <p className={STAT_CELL}>{stat.label}</p>
          <p className={STAT_VALUE}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function HeroRegisterColumn() {
  return (
    <div className="flex w-full min-w-0 flex-col lg:pl-2">
      <div className="mx-auto flex w-full max-w-[360px] justify-center lg:mx-auto lg:max-w-[340px] [&>div]:w-full [&>div]:md:!max-w-none">
        <RegisterForm floating={false} />
      </div>
    </div>
  );
}

function HeroRightStatCard({ value, subtitle }: CustomAbroadHeroHighlightStat) {
  return (
    <div className="flex w-full min-w-0 flex-col lg:pl-2">
      <div className="mx-auto w-full max-w-[360px] lg:max-w-[340px]">
        <div className="overflow-hidden rounded-xl border border-[#A7ECEE]/55 bg-[#2A9EA3]/28 px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[3px] sm:px-5 sm:py-4">
          <p className="text-center text-[34px] font-extrabold leading-none tracking-tight text-[#FFD465] sm:text-[40px] lg:text-[36px] xl:text-[38px]">
            {value}
          </p>
          <p className="mt-1.5 text-center text-[11px] font-semibold leading-snug text-white/90 sm:text-xs lg:text-[11px]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroMediaCards({ cards }: { cards: CustomAbroadHeroMediaCard[] }) {
  if (cards.length === 0) return null;

  const [featuredCard, ...secondaryCards] = cards;

  return (
    <div className="mx-auto w-full max-w-[390px] space-y-4 lg:max-w-[390px]">
      {featuredCard ? (
        <div
          className={`group relative h-[235px] overflow-hidden rounded-[28px] shadow-[0_22px_60px_rgba(0,0,0,0.28)] ${
            featuredCard.className ?? ""
          }`}
        >
          <Image
            src={featuredCard.image}
            alt={featuredCard.alt ?? featuredCard.title}
            fill
            sizes="(max-width: 1024px) 100vw, 390px"
            className="object-cover transition duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition duration-500 group-hover:from-black/85" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-sm font-extrabold drop-shadow">{featuredCard.title}</p>
            {featuredCard.subtitle ? (
              <p className="mt-1 text-xs font-semibold text-white/80">{featuredCard.subtitle}</p>
            ) : null}
          </div>
        </div>
      ) : null}

      {secondaryCards.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {secondaryCards.map((card) => (
            <div
              key={card.title}
              className={`group relative h-[108px] overflow-hidden rounded-[18px] shadow-[0_16px_36px_rgba(0,0,0,0.24)] ${
                card.className ?? ""
              }`}
            >
              <Image
                src={card.image}
                alt={card.alt ?? card.title}
                fill
                sizes="(max-width: 1024px) 50vw, 190px"
                className="object-cover transition duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition duration-500 group-hover:from-black/85" />
              <p className="absolute bottom-3 left-3 right-3 text-xs font-extrabold text-white drop-shadow">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function CustomAbroadHero({
  backgroundImage,
  backgroundImageAlt,
  imagePriority,
  imageSizes,
  imageClassName,
  showDecorativeLayers,
  imageOverlay = "default",
  eyebrow,
  eyebrowVariant = "plain",
  eyebrowIcon,
  title,
  description,
  primaryCta,
  secondaryCta,
  quickStats = [],
  rightStat,
  mediaCards = [],
  rightColumn,
  showRegisterForm = false,
  sectionClassName = "relative flex min-h-[560px] items-center overflow-hidden bg-[#0B7A80] lg:min-h-[calc(100vh-96px)]",
  containerClassName,
  gridClassName,
  eyebrowClassName = EYEBROW,
  titleClassName = HEADLINE,
  descriptionClassName = BODY,
  primaryCtaClassName = BTN_PRIMARY,
  secondaryCtaClassName = BTN_SECONDARY,
  statsWrapperClassName,
  statCellClassName,
}: CustomAbroadHeroProps) {
  const hasActions = Boolean(primaryCta || secondaryCta);
  const hasRightColumn = Boolean(rightStat || mediaCards.length > 0 || rightColumn || showRegisterForm);
  const resolvedContainerClassName = containerClassName ?? DEFAULT_HERO_CONTAINER;
  const resolvedEyebrowClassName =
    eyebrowClassName === EYEBROW && eyebrowVariant === "pill" ? EYEBROW_PILL : eyebrowClassName;
  const resolvedGridClassName =
    gridClassName ??
    (hasRightColumn
      ? "grid grid-cols-1 gap-8 md:gap-12 items-start lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
      : "grid grid-cols-1 gap-8 md:gap-12 items-start");

  return (
    <section className={sectionClassName}>
      <HeroBackdrop
        backgroundImage={backgroundImage}
        backgroundImageAlt={backgroundImageAlt}
        imagePriority={imagePriority}
        imageSizes={imageSizes}
        imageClassName={imageClassName}
        showDecorativeLayers={showDecorativeLayers}
        imageOverlay={imageOverlay}
      />

      <div className={resolvedContainerClassName}>
        <div className={resolvedGridClassName}>
          <div
            className={
              hasRightColumn
                ? "min-w-0 lg:pr-2"
                : "min-w-0 w-full max-w-3xl lg:max-w-4xl"
            }
          >
            <div className="flex flex-col gap-5 sm:gap-6">
            {eyebrow ? (
              <p className={resolvedEyebrowClassName}>
                {eyebrowVariant === "pill" ? (
                  <span className="text-[#35f0f4]" aria-hidden>
                    {eyebrowIcon ?? "◆"}
                  </span>
                ) : null}
                {eyebrow}
              </p>
            ) : null}
            <h1 className={titleClassName}>{title}</h1>
            {description ? <div className={descriptionClassName}>{description}</div> : null}

            {hasActions ? (
              <div className={CTA_ROW}>
                {renderAction(primaryCta, primaryCtaClassName)}
                {renderAction(secondaryCta, secondaryCtaClassName)}
              </div>
            ) : null}

            {quickStats.length > 0 ? (
              statsWrapperClassName ? (
                <QuickStatsGrid
                  stats={quickStats}
                  wrapperClassName={statsWrapperClassName}
                  statCellClassName={statCellClassName}
                />
              ) : (
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                  <QuickStatsGrid stats={quickStats} statCellClassName={statCellClassName} />
                </div>
              )
            ) : null}
            </div>
          </div>

          {hasRightColumn ? (
            <div className="flex min-w-0 flex-col gap-5">
              {rightStat ? (
                <HeroRightStatCard value={rightStat.value} subtitle={rightStat.subtitle} />
              ) : null}
              <HeroMediaCards cards={mediaCards} />
              {rightColumn}
              {showRegisterForm ? <HeroRegisterColumn /> : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
