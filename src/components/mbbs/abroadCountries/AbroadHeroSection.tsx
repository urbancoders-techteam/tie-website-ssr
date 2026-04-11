"use client";

import Image from "next/image";
import Link from "next/link";
import ModalTrigger from "@/components/ModalTrigger";
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

type HeroMetrics = {
  students: string;
  universities: string;
  feesFrom: string;
  tradition: string;
};

const DEFAULT_METRICS: HeroMetrics = {
  students: "20,000+",
  universities: "50+",
  feesFrom: "Affordable",
  tradition: "100+",
};

const COUNTRY_METRICS: Record<string, HeroMetrics> = {
  russia: { students: "10,000+", universities: "50+", feesFrom: "Rs. 2.7L", tradition: "200+" },
  georgia: { students: "15,000+", universities: "15+", feesFrom: "₹4L", tradition: "30+" },
  bangladesh: { students: "8,000+", universities: "25+", feesFrom: "Rs. 8L", tradition: "75+" },
  canada: { students: "5,000+", universities: "30+", feesFrom: "CAD 20K", tradition: "100+" },
  germany: { students: "6,000+", universities: "35+", feesFrom: "Low Tuition", tradition: "120+" },
  philippines: { students: "15,000+", universities: "40+", feesFrom: "Rs. 3L", tradition: "90+" },
  australia: { students: "4,000+", universities: "20+", feesFrom: "AUD 70K", tradition: "110+" },
  nepal: { students: "7,500+", universities: "18+", feesFrom: "Rs. 10L", tradition: "60+" },
  usa: { students: "3,000+", universities: "45+", feesFrom: "USD 30K", tradition: "150+" },
  uk: { students: "4,500+", universities: "30+", feesFrom: "GBP 15K", tradition: "130+" },
  kazakhstan: { students: "12,000+", universities: "35+", feesFrom: "Rs. 2.5L", tradition: "70+" },
  kyrgyzstan: { students: "11,000+", universities: "30+", feesFrom: "Rs. 2L", tradition: "60+" },
  uzbekistan: { students: "9,000+", universities: "28+", feesFrom: "Rs. 2.2L", tradition: "65+" },
};

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

function getHeroBackgroundImage(country: AbroadCountry): string | null {
  const fromColleges =
    country.colleges?.find((c) => typeof c?.Image === "string" && c.Image)?.Image ??
    country.colleges?.find((c) => typeof c?.image === "string" && c.image)?.image ??
    null;

  if (fromColleges) return fromColleges;

  type CountryDataCollege = { Image?: string; image?: string };
  type CountryDataEntry = { title: string; path: string; colleges?: CountryDataCollege[] };

  const fallback = (countryData as CountryDataEntry[]).find((c) => c.path.toLowerCase() === country.path.toLowerCase());

  const fallbackImg =
    fallback?.colleges?.find((c) => typeof c?.Image === "string" && c.Image)?.Image ??
    fallback?.colleges?.find((c) => typeof c?.image === "string" && c.image)?.image ??
    null;

  return fallbackImg;
}

interface AbroadHeroSectionProps {
  country: AbroadCountry;
  /** When set, all hero copy and metrics come from this object (fully custom). */
  hero?: AbroadHeroContent;
}

export default function AbroadHeroSection({ country, hero }: AbroadHeroSectionProps) {
  const slug = getSlugFromPath(country.path);
  const metrics = COUNTRY_METRICS[slug] ?? DEFAULT_METRICS;
  const code = COUNTRY_CODES[slug] ?? country.title.slice(0, 2).toUpperCase();
  const bgImage = getHeroBackgroundImage(country);

  if (hero) {
    const maxLen = hero.descriptionMaxLength ?? 260;
    const description = getShortDescription(hero.description, maxLen);

    return (
      <section className="relative overflow-hidden bg-[#0B7A80]">
        {bgImage ? (
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt={`${country.title} university`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ) : null}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 md:gap-12 items-start">
            {/* Left Side ~60% */}
            <div className="min-w-0 lg:pr-2">
              <p className="text-[11px] sm:text-xs md:text-sm tracking-[0.18em] text-white uppercase font-semibold">
                {hero.eyebrow}
              </p>
              <h1 className="mt-3 text-white font-bold leading-tight text-[34px] sm:text-[42px] md:text-[46px]">
                {hero.headline.line1}{" "}
                <span className="text-[#FFD465]">{ hero.headline.line2Accent}</span>
                <span className="block">{hero.headline.line3}</span>
              </h1>
              <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white max-w-2xl">{description}</p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <ModalTrigger
                  text={hero.cta.primaryText}
                  variant="custom"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#00999E] px-6 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#007a7f]"
                />
                <Link
                  href={hero.cta.secondaryHref}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm sm:text-base font-semibold text-[#0A6D72] transition-colors hover:bg-white/90"
                >
                  {hero.cta.secondaryText}
                </Link>
              </div>

              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 overflow-hidden rounded-xl border border-[#A7ECEE]/55 bg-[#2A9EA3]/28 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[3px]">
                {hero.quickStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-4 py-3 ${i < 3 ? "border-r border-[#A7ECEE]/35" : ""}`}
                  >
                    <p className="text-[10px] uppercase tracking-widest text-white">{stat.label}</p>
                    <p className="text-lg sm:text-xl font-semibold text-white mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side ~40% (compact, vertically centered vs left on lg) */}
            <div className="flex w-full min-w-0 flex-col lg:pl-2">
              {/* {flagImageSrc ? <HeroCountryFlagImage src={flagImageSrc} countryTitle={country.title} /> : null} */}
              <div className="rounded-xl border border-[#B8F2F4]/60 bg-gradient-to-b from-[#35AEB3]/30 to-[#188A90]/24 px-4 py-3.5 text-center shadow-[0_10px_22px_rgba(0,0,0,0.16)] backdrop-blur-sm">
                <p className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#FFD465]">{hero.spotlight.value}</p>
                <p className="text-xs sm:text-sm text-white/85 mt-1.5 leading-snug">{hero.spotlight.caption}</p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {hero.statGrid.map((card) => (
                  <div
                    key={`${card.label}-${card.value}`}
                    className="rounded-lg border border-[#B8F2F4]/55 bg-gradient-to-b from-[#35AEB3]/30 to-[#188A90]/24 px-2.5 py-2.5 text-center shadow-[0_8px_18px_rgba(0,0,0,0.14)] backdrop-blur-sm"
                  >
                    <p className="text-lg sm:text-xl font-bold leading-tight text-white">{card.value}</p>
                    <p className="text-[10px] sm:text-[11px] text-white/75 mt-0.5 leading-tight">{card.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#0B7A80]">
      {bgImage ? (
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt={`${country.title} university`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(125,240,244,0.34),transparent_42%),radial-gradient(circle_at_92%_18%,rgba(45,212,191,0.30),transparent_36%),radial-gradient(circle_at_58%_100%,rgba(255,220,110,0.18),transparent_42%),linear-gradient(135deg,#0A6268_0%,#10929A_50%,#075159_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 md:gap-12 items-start">
          {/* Left Side ~60% */}
          <div className="min-w-0 lg:pr-2">
            <p className="text-[11px] sm:text-xs md:text-sm tracking-[0.18em] text-white uppercase font-semibold">
              {code} MBBS in {country.title} 2026-27 - Admissions Open
            </p>
            <h1 className="mt-3 text-white font-bold leading-tight text-[34px] sm:text-[42px] md:text-[46px]">
              Study MBBS in {country.title}
              <span className="block text-[#FFD465] italic">Where Affordability Meets</span>
              <span className="block">Global Medical Excellence.</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white max-w-2xl">
              {getShortDescription(country.content ?? "")}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <ModalTrigger
                text="Book Free Counselling ->"
                variant="custom"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#00999E] px-6 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#007a7f]"
              />
              <Link
                href="#indiaCriteria"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm sm:text-base font-semibold text-[#0A6D72] transition-colors hover:bg-white/90"
              >
                View Universities
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 overflow-hidden rounded-xl border border-[#A7ECEE]/55 bg-[#2A9EA3]/28 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[3px]">
              <div className="px-4 py-3 border-r border-[#A7ECEE]/35">
                <p className="text-[10px] uppercase tracking-widest text-white">Total Fees</p>
                <p className="text-lg sm:text-xl font-semibold text-white mt-1">{metrics.feesFrom}</p>
              </div>
              <div className="px-4 py-3 border-r border-[#A7ECEE]/35">
                <p className="text-[10px] uppercase tracking-widest text-white">Duration</p>
                <p className="text-lg sm:text-xl font-semibold text-white mt-1">6 Years</p>
              </div>
              <div className="px-4 py-3 border-r border-[#A7ECEE]/35">
                <p className="text-[10px] uppercase tracking-widest text-white">Medium</p>
                <p className="text-lg sm:text-xl font-semibold text-white mt-1">English</p>
              </div>
              <div className="px-4 py-3">
                <p className="text-[10px] uppercase tracking-widest text-white">Intake</p>
                <p className="text-lg sm:text-xl font-semibold text-white mt-1">Sep / Feb</p>
              </div>
            </div>
          </div>

          {/* Right Side ~40% (compact, vertically centered vs left on lg) */}
          <div className="flex w-full min-w-0 flex-col lg:pl-2">
            <div className="rounded-xl border border-[#B8F2F4]/60 bg-gradient-to-b from-[#35AEB3]/30 to-[#188A90]/24 px-4 py-3.5 text-center shadow-[0_10px_22px_rgba(0,0,0,0.16)] backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#FFD465]">{metrics.students}</p>
              <p className="text-xs sm:text-sm text-white/85 mt-1.5 leading-snug">
                Students currently pursuing MBBS in {country.title}
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <div className="rounded-lg border border-[#B8F2F4]/55 bg-gradient-to-b from-[#35AEB3]/30 to-[#188A90]/24 px-2.5 py-2.5 text-center shadow-[0_8px_18px_rgba(0,0,0,0.14)] backdrop-blur-sm">
                <p className="text-lg sm:text-xl font-bold leading-tight text-white">{metrics.universities}</p>
                <p className="text-[10px] sm:text-[11px] text-white/75 mt-0.5 leading-tight">NMC-Compliant Universities</p>
              </div>
              <div className="rounded-lg border border-[#B8F2F4]/55 bg-gradient-to-b from-[#35AEB3]/30 to-[#188A90]/24 px-2.5 py-2.5 text-center shadow-[0_8px_18px_rgba(0,0,0,0.14)] backdrop-blur-sm">
                <p className="text-lg sm:text-xl font-bold leading-tight text-white">{metrics.tradition}</p>
                <p className="text-[10px] sm:text-[11px] text-white/75 mt-0.5 leading-tight">Years Medical Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
