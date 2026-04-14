import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";
import {
  trustTaksheelaFeatures,
  trustTaksheelaHero,
  trustTaksheelaIntro,
} from "@/constants/home";
import {
  FaCalculator,
  FaFileAlt,
  FaHeart,
  FaPlane,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const TEAL = "#00a88f";

type IconKey = (typeof trustTaksheelaFeatures)[number]["icon"];

function FeatureIcon({ name }: { name: IconKey }) {
  const className =
    "h-5 w-5 shrink-0 sm:h-[1.35rem] sm:w-[1.35rem] lg:h-4 lg:w-4 xl:h-[1.125rem] xl:w-[1.125rem] 2xl:h-5 2xl:w-5";
  const color = TEAL;
  switch (name) {
    case "trophy":
      return <FaTrophy className={className} style={{ color }} aria-hidden />;
    case "calculator":
      return <FaCalculator className={className} style={{ color }} aria-hidden />;
    case "people":
      return <FaUsers className={className} style={{ color }} aria-hidden />;
    case "document":
      return <FaFileAlt className={className} style={{ color }} aria-hidden />;
    case "heart":
      return <FaHeart className={className} style={{ color }} aria-hidden />;
    case "airplane":
      return <FaPlane className={className} style={{ color }} aria-hidden />;
    default:
      return null;
  }
}

export default function TrustTaksheela() {
  return (
    <section className="w-full bg-white py-10 md:py-12 lg:py-8 xl:py-10 2xl:py-14">
      <ContainerWrapper>
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-8 xl:gap-10 2xl:gap-12">
          {/* Left: image + badge */}
          <div className="relative mx-auto w-full max-w-md shrink-0 sm:max-w-lg lg:mx-0 lg:max-w-[min(100%,28rem)] lg:flex-[0_0_42%] xl:max-w-[min(100%,32rem)] xl:flex-[0_0_44%]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[5/6] lg:aspect-[3/4] lg:max-h-[min(300px,38vh)] xl:max-h-[min(340px,42vh)] 2xl:max-h-[min(420px,50vh)]">
              <Image
                src={trustTaksheelaHero.image}
                alt="Student working on study abroad planning with Taksheela"
                fill
                className="object-cover "
                sizes="(max-width: 1023px) 100vw, 42vw"
                priority={false}
              />
            </div>
            <div
              className="absolute bottom-3 right-3 z-10 rounded-lg px-4 py-2.5 text-white shadow-lg sm:bottom-4 sm:right-4 lg:px-4 lg:py-2 xl:px-5 xl:py-3 2xl:rounded-xl 2xl:px-6 2xl:py-4"
              style={{ backgroundColor: TEAL }}
            >
              <p className="text-xl font-bold leading-none sm:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                {trustTaksheelaHero.badgeValue}
              </p>
              <p className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] sm:text-[0.65rem] lg:text-[0.55rem] lg:tracking-[0.16em] xl:text-xs 2xl:mt-1 2xl:text-xs">
                {trustTaksheelaHero.badgeLabel}
              </p>
            </div>
          </div>

          {/* Right: copy + grid + CTA */}
          <div className="min-w-0 flex-1 lg:pt-0">
            <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#00a88f] sm:text-xs md:tracking-[0.32em] lg:text-left lg:text-[0.6rem] lg:tracking-[0.22em] xl:text-[0.65rem]">
              <span className="text-[#00a88f]/70" aria-hidden>
                —
              </span>{" "}
              {trustTaksheelaIntro.eyebrow}{" "}
              <span className="text-[#00a88f]/70" aria-hidden>
                —
              </span>
            </p>
            <h2 className="mt-3 text-center text-2xl font-bold leading-snug tracking-tight text-[#0f2744] sm:text-3xl md:text-[2rem] md:leading-tight lg:text-left lg:text-[1.7rem] lg:leading-tight xl:text-[1.8rem] 2xl:text-[2rem] 2xl:leading-snug">
              {trustTaksheelaIntro.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-[0.9375rem] lg:mx-0 lg:mt-2 lg:max-w-none lg:text-left lg:text-[0.8125rem] lg:leading-snug xl:text-sm xl:leading-relaxed 2xl:mt-4 2xl:text-base">
              {trustTaksheelaIntro.description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-3 md:mt-9 lg:mt-4 lg:gap-2 xl:mt-5 xl:gap-2.5 2xl:mt-8 2xl:gap-4">
              {trustTaksheelaFeatures.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-[#00a88f]/10 border-l-[3px] border-l-[#00a88f] bg-[#e8f7f5]/60 px-3 py-3 shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-3.5 sm:py-3.5 lg:rounded-md lg:px-2.5 lg:py-2 xl:px-3 xl:py-2.5 2xl:rounded-xl 2xl:border-l-4 2xl:px-4 2xl:py-4"
                >
                  <div className="flex gap-2 sm:gap-2.5 lg:gap-2">
                    <FeatureIcon name={item.icon} />
                    <div className="min-w-0 space-y-1 lg:space-y-0.5 2xl:space-y-1.5">
                      <h3 className="text-sm font-bold leading-tight text-[#0f2744] sm:text-[0.9375rem] lg:text-[0.6875rem] lg:leading-tight xl:text-xs 2xl:text-sm 2xl:leading-snug">
                        {item.heading}
                      </h3>
                      <p className="text-[0.6875rem] leading-snug text-slate-600 sm:text-xs sm:leading-relaxed lg:text-[0.625rem] lg:leading-snug xl:text-[0.6875rem] 2xl:text-[0.8125rem] 2xl:leading-relaxed">
                        {item.subheading}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-center lg:mt-4 lg:justify-start xl:mt-5 2xl:mt-8">
              {trustTaksheelaIntro.ctaHref.startsWith("http") ? (
                <a
                  href={trustTaksheelaIntro.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-xs font-bold text-white shadow-md transition-[transform,box-shadow] duration-200 hover:shadow-lg active:scale-[0.99] sm:px-7 sm:py-3 sm:text-sm lg:px-5 lg:py-2 lg:text-[0.6875rem] xl:px-6 xl:py-2.5 xl:text-xs 2xl:px-8 2xl:py-3.5 2xl:text-base"
                  style={{ backgroundColor: TEAL }}
                >
                  {trustTaksheelaIntro.ctaLabel}
                </a>
              ) : (
                <Link
                  href={trustTaksheelaIntro.ctaHref}
                  className="inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-xs font-bold text-white shadow-md transition-[transform,box-shadow] duration-200 hover:shadow-lg active:scale-[0.99] sm:px-7 sm:py-3 sm:text-sm lg:px-5 lg:py-2 lg:text-[0.6875rem] xl:px-6 xl:py-2.5 xl:text-xs 2xl:px-8 2xl:py-3.5 2xl:text-base"
                  style={{ backgroundColor: TEAL }}
                >
                  {trustTaksheelaIntro.ctaLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
