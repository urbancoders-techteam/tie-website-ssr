"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import ModalTrigger from "@/components/ModalTrigger";
import RegisterForm from "@/components/home/RegisterForm";
import { countryData } from "@/constants/mbbs";
import type { AbroadHeroContent } from "@/constants/abroad/russiaAbroadConstent";

type AspectItem = {
  title?: string;
  items?: string[];
};

type CollegeItem = {
  title?: string;
  items?: string[];
  Image?: string;
  image?: string;
};

export type AbroadCountry = {
  title: string;
  path: string;
  content?: string;
  aspectAndFacts?: AspectItem[];
  colleges?: CollegeItem[];
};

type HeroStat = { label: string; value: string };

const COUNTRY_CODES: Record<string, string> = {
  russia: "RU",
  georgia: "GE",
  bangladesh: "BD",
  canada: "CA",
  germany: "DE",
  philippines: "PH",
  australia: "AU",
  nepal: "NP",
  usa: "US",
  uk: "GB",
  kazakhstan: "KZ",
  kyrgyzstan: "KG",
  uzbekistan: "UZ",
};

/** Fallback “Total Fees” line when `hero` copy is not passed (generic country pages). */
const COUNTRY_FEES_FROM: Record<string, string> = {
  russia: "Rs. 2.7L",
  georgia: "₹4L",
  bangladesh: "Rs. 8L",
  canada: "CAD 20K",
  germany: "Low Tuition",
  philippines: "Rs. 3L",
  australia: "AUD 70K",
  nepal: "Rs. 10L",
  usa: "USD 30K",
  uk: "GBP 15K",
  kazakhstan: "Rs. 2.5L",
  kyrgyzstan: "Rs. 2L",
  uzbekistan: "Rs. 2.2L",
};

const DEFAULT_FEES_FROM = "Affordable";

const DEFAULT_QUICK_STATS = (feesFrom: string): HeroStat[] => [
  { label: "Tuition Fees", value: feesFrom },
  { label: "Duration", value: "6 Years" },
  { label: "Medium", value: "English" },
  { label: "Intake", value: "Sep / Feb" },
  { label: "Universities", value: "50+" },
];

const EYEBROW =
  "text-[11px] sm:text-xs md:text-sm tracking-[0.18em] text-white uppercase font-semibold";
const HEADLINE =
  "mt-3 text-white font-bold leading-tight text-[34px] sm:text-[42px] md:text-[46px]";
const BODY = "mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white max-w-2xl";
const CTA_ROW = "mt-7 flex flex-col sm:flex-row gap-3";
const BTN_PRIMARY =
  "inline-flex h-12 items-center justify-center rounded-xl bg-[#00999E] px-6 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#007a7f]";
const BTN_SECONDARY =
  "inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm sm:text-base font-semibold text-[#0A6D72] transition-colors hover:bg-white/90";
const QUICK_STATS_WRAP_BASE =
  "mt-7 grid overflow-hidden rounded-xl border border-[#A7ECEE]/55 bg-[#2A9EA3]/28 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[3px]";
const STAT_CELL = "text-[10px] uppercase tracking-widest text-white";
const STAT_VALUE = "text-lg sm:text-xl font-semibold text-white mt-1";

function getSlugFromPath(path: string) {
  return path.split("/").filter(Boolean).pop()?.toLowerCase() ?? "";
}

function getShortDescription(text: string, maxLength = 260) {
  if (text.length <= maxLength) return text;
  const clipped = text.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(" ");
  if (lastSpace > 0) {
    return `${clipped.slice(0, lastSpace).trimEnd()}...`;
  }
  return `${clipped.trimEnd()}...`;
}

function firstCollegeImageUrl(colleges?: CollegeItem[]): string | null {
  const hit =
    colleges?.find((c) => typeof c.Image === "string" && c.Image) ??
    colleges?.find((c) => typeof c.image === "string" && c.image);
  return hit?.Image ?? hit?.image ?? null;
}

function getHeroBackgroundImage(country: AbroadCountry): string | null {
  const direct = firstCollegeImageUrl(country.colleges);
  if (direct) return direct;

  type CountryDataEntry = { title: string; path: string; colleges?: CollegeItem[] };
  const fallback = (countryData as CountryDataEntry[]).find(
    (c) => c.path.toLowerCase() === country.path.toLowerCase(),
  );
  return firstCollegeImageUrl(fallback?.colleges) ?? null;
}

type BackdropProps = {
  bg: string | StaticImageData | null;
  imageAlt: string;
  /** Extra teal layers used only on generic (non–full-copy) heroes. */
  decorativeLayers: boolean;
};

function HeroBackdrop({ bg, imageAlt, decorativeLayers }: BackdropProps) {
  return (
    <>
      {bg ? (
        <div className="absolute inset-0">
          <Image src={bg} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        </div>
      ) : null}
      {/* Made the upper layer lighter: changed bg-black/55 to bg-black/35 */}
      <div className="absolute inset-0 bg-black/45" />
      {/* Optionally, further reduce the opacity of the gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/10" />
      {decorativeLayers ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(125,240,244,0.34),transparent_42%),radial-gradient(circle_at_92%_18%,rgba(45,212,191,0.30),transparent_36%),radial-gradient(circle_at_58%_100%,rgba(255,220,110,0.18),transparent_42%),linear-gradient(135deg,#0A6268_0%,#10929A_50%,#075159_100%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
        </>
      ) : null}
    </>
  );
}

function QuickStatsGrid({ stats }: { stats: HeroStat[] }) {
  const cols = stats.length >= 5 ? "grid-cols-2 sm:grid-cols-5" : "grid-cols-2 sm:grid-cols-4";
  return (
    <div className={`${QUICK_STATS_WRAP_BASE} ${cols}`}>
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`px-4 py-3 ${i < stats.length - 1 ? "border-r border-[#A7ECEE]/35" : ""}`}
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

function HeroRightStatCard({ value, subtitle }: { value: string; subtitle: string }) {
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

interface AbroadHeroSectionProps {
  country: AbroadCountry;
  hero?: AbroadHeroContent;
}

export default function AbroadHeroSection({ country, hero }: AbroadHeroSectionProps) {
  const slug = getSlugFromPath(country.path);
  const code = COUNTRY_CODES[slug] ?? country.title.slice(0, 2).toUpperCase();
  const feesFrom = COUNTRY_FEES_FROM[slug] ?? DEFAULT_FEES_FROM;

  const bg = hero?.backgroundImage ?? getHeroBackgroundImage(country);
  const imageAlt = `${country.title} university`;

  const description = hero
    ? getShortDescription(hero.description, hero.descriptionMaxLength ?? 260)
    : getShortDescription(country.content ?? "");
  const rightStat = hero?.rightStat ?? {
    value: "100000+",
    subtitle: `Students currently pursuing MBBS in ${country.title}`,
  };

  return (
    <section className="relative overflow-hidden bg-[#0B7A80]">
      <HeroBackdrop bg={bg} imageAlt={imageAlt} decorativeLayers={!hero} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:gap-12 items-start lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="min-w-0 lg:pr-2">
            {hero ? (
              <>
                <p className={EYEBROW}>{hero.eyebrow}</p>
                <h1 className={HEADLINE}>
                  {hero.headline.line1}{" "}
                  <span className="text-[#FFD465]">{hero.headline.line2Accent}</span>
                  <span className="block">{hero.headline.line3}</span>
                </h1>
                <p className={BODY}>{description}</p>
                <div className={CTA_ROW}>
                  <ModalTrigger text={hero.cta.primaryText} variant="custom" className={BTN_PRIMARY} />
                  <Link href={hero.cta.secondaryHref} className={BTN_SECONDARY}>
                    {hero.cta.secondaryText}
                  </Link>
                </div>
                <QuickStatsGrid stats={hero.quickStats} />
              </>
            ) : (
              <>
                <p className={EYEBROW}>
                  {code} MBBS in {country.title} 2026-27 - Admissions Open
                </p>
                <h1 className={HEADLINE}>
                  Study MBBS in {country.title}
                  <span className="block text-[#FFD465] italic">Where Affordability Meets</span>
                  <span className="block">Global Medical Excellence.</span>
                </h1>
                <p className={BODY}>{description}</p>
                <div className={CTA_ROW}>
                  <ModalTrigger text="Book Free Counselling ->" variant="custom" className={BTN_PRIMARY} />
                  <Link href="#indiaCriteria" className={BTN_SECONDARY}>
                    View Universities
                  </Link>
                </div>
                <QuickStatsGrid stats={DEFAULT_QUICK_STATS(feesFrom)} />
              </>
            )}
          </div>

          <div className="flex min-w-0 flex-col gap-5">
              <HeroRightStatCard
                value={rightStat.value}
                subtitle={rightStat.subtitle}
              />
            <HeroRegisterColumn />
          </div>
        </div>
      </div>
    </section>
  );
}
