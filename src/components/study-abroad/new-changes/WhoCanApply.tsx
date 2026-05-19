"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import ModalTrigger from "@/components/ModalTrigger";
import ScrollableSlider, {
  SCROLLABLE_SLIDE_COURSES_GRID_CLASS,
  SCROLLABLE_TRACK_COURSES_CLASS,
} from "@/components/study-abroad/new-changes/ScrollableSlider";
import {
  whoCanApplyContent,
  type WhoCanApplyCard,
  type WhoCanApplyTheme,
} from "@/constants/study_abroad/whoCanApply";

const OVERLAY_BY_THEME: Record<WhoCanApplyTheme, string> = {
  teal: "from-[#0fb3a9]/95 via-[#0fb3a9]/55 to-transparent",
  navy: "from-[#0a192f]/95 via-[#0f2744]/65 to-transparent",
  orange: "from-[#f97316]/95 via-[#f59e0b]/55 to-transparent",
};

const BUTTON_BY_THEME: Record<WhoCanApplyTheme, string> = {
  teal: "bg-[#0fb3a9] hover:bg-[#0ca89f] shadow-[0_10px_28px_rgba(15,179,169,0.35)]",
  navy: "bg-[#0a192f] hover:bg-[#152a45] shadow-[0_10px_28px_rgba(10,25,47,0.35)]",
  orange: "bg-[#f97316] hover:bg-[#ea580c] shadow-[0_10px_28px_rgba(249,115,22,0.35)]",
};

function WhoCanApplyMobileCard({ card }: { card: WhoCanApplyCard }) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-3xl border border-gray-100/90 bg-white shadow-[0_16px_48px_rgba(7,27,58,0.08)]">
      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-t-3xl">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${OVERLAY_BY_THEME[card.theme]}`}
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
          <span className="inline-flex w-fit max-w-full rounded-full bg-white/20 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-[2px]">
            {card.imageBadge}
          </span>
          <h3 className="text-base font-extrabold leading-tight text-white drop-shadow-sm">
            {card.imageTitle}
          </h3>
        </div>
      </div>

      <div className="flex flex-col px-4 pb-5 pt-4">
        <p className="text-sm leading-relaxed text-[#5a6570]">{card.description}</p>
        <ul className="mt-3 space-y-2">
          {card.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-left text-[12px] leading-snug text-[#374151]"
            >
              <FaCheckCircle
                className="mt-0.5 h-4 w-4 shrink-0 text-[#0fb3a9]"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-1">
          <ModalTrigger
            text={card.ctaText}
            variant="custom"
            className={`flex w-full min-w-0 items-center justify-center rounded-xl px-3 py-3 text-center text-xs font-bold text-white transition ${BUTTON_BY_THEME[card.theme]}`}
            redirectPath="/thankyou"
          />
        </div>
      </div>
    </article>
  );
}

function WhoCanApplyCardArticle({ card }: { card: WhoCanApplyCard }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-gray-100/90 bg-white shadow-[0_16px_48px_rgba(7,27,58,0.08)]">
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-t-3xl sm:h-48 md:h-[13rem] lg:h-[10.75rem] xl:h-48">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 88vw, (max-width: 1023px) 50vw, 33vw"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${OVERLAY_BY_THEME[card.theme]}`}
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-4 sm:gap-2 sm:p-5 lg:p-4 lg:gap-1.5 xl:p-5 xl:gap-2">
          <span className="inline-flex w-fit max-w-full rounded-full bg-white/20 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-[2px] sm:px-3 sm:py-1 sm:text-[10px] lg:text-[9px] xl:text-[11px]">
            {card.imageBadge}
          </span>
          <h3 className="text-lg font-extrabold leading-tight text-white drop-shadow-sm sm:text-xl lg:text-lg xl:text-2xl">
            {card.imageTitle}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5 lg:px-4 lg:pb-5 lg:pt-4 xl:px-6 xl:pb-7 xl:pt-6">
        <p className="text-sm leading-relaxed text-[#5a6570] lg:text-[13px] lg:leading-snug xl:text-[15px] xl:leading-relaxed">
          {card.description}
        </p>
        <ul className="mt-3 space-y-2 sm:mt-4 lg:mt-3 lg:space-y-1.5 xl:mt-5 xl:space-y-2">
          {card.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-left text-[12px] leading-snug text-[#374151] sm:text-[13px] lg:text-xs lg:leading-tight xl:text-sm xl:leading-snug"
            >
              <FaCheckCircle
                className="mt-0.5 h-4 w-4 shrink-0 text-[#0fb3a9]"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 sm:pt-5 lg:pt-4 xl:pt-7">
          <ModalTrigger
            text={card.ctaText}
            variant="custom"
            className={`flex w-full min-w-0 items-center justify-center rounded-xl px-3 py-3 text-center text-xs font-bold text-white transition sm:px-4 sm:py-3.5 sm:text-sm lg:px-3 lg:py-2.5 lg:text-xs xl:px-4 xl:py-3.5 xl:text-sm ${BUTTON_BY_THEME[card.theme]}`}
            redirectPath="/thankyou"
          />
        </div>
      </div>
    </article>
  );
}

export default function WhoCanApply() {
  const { eyebrow, heading, subtitle, cards } = whoCanApplyContent;

  return (
    <section className="bg-[#f7f9fc] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#e6faf8] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0d9488] sm:text-[11px]">
            <span className="text-[#0fb3a9]" aria-hidden>
              ●
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#071b3a] sm:mt-6 sm:text-3xl lg:text-[2.125rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#5a6570] sm:mt-5 sm:text-base">
            {subtitle}
          </p>
        </header>

        <ScrollableSlider
          className="mt-10 w-full min-w-0 md:hidden"
          total={cards.length}
          ariaLabel="Who can apply"
          autoplayMs={5200}
          mobileMq="(max-width: 767px)"
          bleedOnMobile={false}
          trackClassName={SCROLLABLE_TRACK_COURSES_CLASS}
          dotsClassName="mt-6 flex justify-center gap-2"
          dotActiveClassName="w-7 bg-[#0fb3a9]"
          dotInactiveClassName="w-2 bg-[#0fb3a9]/30 hover:bg-[#0fb3a9]/50"
          getDotLabel={(index) => cards[index].imageTitle}
        >
          {(setSlideRef) =>
            cards.map((card, index) => (
              <div
                key={card.id}
                ref={setSlideRef(index)}
                className={`${SCROLLABLE_SLIDE_COURSES_GRID_CLASS} flex flex-col`}
              >
                <WhoCanApplyMobileCard card={card} />
              </div>
            ))
          }
        </ScrollableSlider>

        {/* 2 cols tablet (768–1023); 3 cols laptop+ */}
        <div className="mx-auto mt-10 hidden w-full min-w-0 grid-cols-1 gap-6 md:grid md:mt-12 md:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {cards.map((card) => (
            <WhoCanApplyCardArticle key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
