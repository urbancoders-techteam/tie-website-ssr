 "use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";
import { globalImmersionHome } from "@/constants/home";
import HomeSectionHeader from "./HomeSectionHeader";
import ModalTrigger from "../ModalTrigger";

/** ~4 cards + peek (lg+); 3 (md); 2 (sm); 1+ (base) */
const cardClass =
  "flex h-full min-h-[395px] w-[90%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_4px_20px_-8px_rgba(15,39,68,0.12)] sm:w-[calc((100%-0.75rem)/2.08)] md:w-[calc((100%-1.5rem)/3.08)] lg:w-[calc((100%-2.25rem)/4.12)]";

const scrollerClass =
  "-mx-1 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto overflow-y-hidden scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:thin] sm:px-0 md:mx-0 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300/80 [&::-webkit-scrollbar-track]:bg-slate-100";

const imgSizes =
  "(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 31vw, 24vw";

type Program = (typeof globalImmersionHome.programs)[number];

function ProgramCard({ program: p, priority }: { program: Program; priority?: boolean }) {
  return (
    <article className={cardClass} data-program-card>
      <div className="relative aspect-[5/3] w-full bg-slate-100">
        <Image
          src={p.image}
          alt={`${p.countryName} immersion — ${p.duration}`}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes={imgSizes}
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
          {/* <span className="text-sm font-bold text-[#00a88f] sm:text-base">{p.price}</span> */}
          <ModalTrigger
            variant="custom"
            className="shrink-0 rounded-md bg-[#00a88f]/12 px-2.5 py-1.5 text-[0.6875rem] font-semibold text-[#00a88f] transition hover:bg-[#00a88f]/18 sm:px-3 sm:py-2 sm:text-xs"
          >
            Enquiry Now →
          </ModalTrigger>
        </div>
      </div>
    </article>
  );
}

export default function GlobalImmersionHome() {
  const { eyebrow, title, description, programs, viewAllCta } = globalImmersionHome;
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = scroller.querySelectorAll<HTMLElement>("[data-program-card]");
    const firstCard = cards[0];
    const lastCard = cards[cards.length - 1];
    if (!firstCard || !lastCard) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const scrollerRect = scroller.getBoundingClientRect();
    const firstRect = firstCard.getBoundingClientRect();
    const lastRect = lastCard.getBoundingClientRect();
    const epsilon = 4;

    const firstCardInView = firstRect.left >= scrollerRect.left - epsilon;
    const lastCardInView = lastRect.right <= scrollerRect.right + epsilon;

    setCanScrollLeft(!firstCardInView);
    setCanScrollRight(!lastCardInView);
  }, []);

  const scrollPrograms = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (direction === "left" && !canScrollLeft) return;
    if (direction === "right" && !canScrollRight) return;
    const scrollAmount = Math.max(scroller.clientWidth * 0.9, 260);
    scroller.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const rafId = window.requestAnimationFrame(updateScrollState);
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.cancelAnimationFrame(rafId);
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, programs.length]);

  return (
    <section className="w-full bg-white py-12 md:py-14 lg:py-16 xl:py-[4.5rem]">
      <ContainerWrapper>
        <HomeSectionHeader
          headerClassName="mx-auto mb-8 max-w-3xl text-center md:mb-9 lg:mb-10"
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          eyebrowClassName="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#00a88f] sm:text-xs sm:tracking-[0.28em]"
          titleClassName="mt-3 text-balance text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl md:text-[1.85rem] lg:text-[2rem]"
          subtitleClassName="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] md:text-base"
        />

        <div ref={scrollerRef} role="region" aria-label="Immersion programs" className={scrollerClass}>
          {programs.map((p, index) => (
            <ProgramCard key={p.id} program={p} priority={index === 0} />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => scrollPrograms("left")}
            aria-label="Scroll programs left"
            aria-disabled={!canScrollLeft}
            disabled={!canScrollLeft}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#00a88f] bg-[#00a88f]/10 text-lg font-bold text-[#00a88f] transition hover:bg-[#00a88f]/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-45"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollPrograms("right")}
            aria-label="Scroll programs right"
            aria-disabled={!canScrollRight}
            disabled={!canScrollRight}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#00a88f] bg-[#00a88f]/10 text-lg font-bold text-[#00a88f] transition hover:bg-[#00a88f]/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-45"
          >
            ›
          </button>
        </div>

        <div className="mt-5 flex justify-center sm:mt-10">
          <Link
            href={viewAllCta.href}
            className="inline-flex items-center justify-center rounded-lg bg-[#00a88f] px-8 py-2.5 text-sm font-semibold text-white shadow transition hover:brightness-105 sm:px-10 sm:py-2.5 sm:text-base"
          >
            {viewAllCta.label}
          </Link>
     
        </div>
      </ContainerWrapper>
    </section>
  );
}
