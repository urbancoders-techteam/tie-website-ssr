"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import ContainerWrapper from "../ContainerWrapper";
import HomeSectionHeader from "./HomeSectionHeader";
import { ProgramCard, type ProgramCardData } from "@/components/custom-component";
import { studyInIndiaHome } from "@/constants/home";

/** Pixel gap between cards (`gap-3`). */
const GAP_PX = 12;

/** Matches Tailwind `lg` / `md` — use media queries so mobile/tablet/desktop track CSS, not just `resize`. */
function visibleCountFromMedia(): number {
  if (typeof window === "undefined") return 1;
  if (window.matchMedia("(min-width: 1024px)").matches) return 4;
  if (window.matchMedia("(min-width: 768px)").matches) return 2;
  return 1;
}

const studyIndiaCardHoverClass =
  "w-full min-h-[360px] transition-[transform,box-shadow,border-color] duration-300 ease-out motion-safe:hover:-translate-y-1 hover:border-[#00a88f]/30 hover:shadow-[0_18px_50px_-18px_rgba(15,39,68,0.22)]";

/** Slide motion — duration + easing tuned for on-brand, low-jank GPU transforms. */
const SLIDE_DURATION_MS = 640;
/** Must exceed slide duration so frames settle before the next advance. */
const AUTOPLAY_MS = 5600;

const arrowBtnClass =
  "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-bold leading-none text-[#00a88f] shadow-md transition-colors hover:border-[#00a88f]/40 hover:bg-[#00a88f]/8 disabled:pointer-events-none disabled:opacity-40 md:h-11 md:w-11";

export default function StudyInIndiaHome() {
  const { eyebrow, titleBefore, titleHighlight, titleAfter, description, programs } = studyInIndiaHome;
  const cards = programs as ProgramCardData[];
  const n = cards.length;

  const viewportRef = useRef<HTMLDivElement>(null);
  /** Mobile-first default — `useLayoutEffect` measures real width before paint. */
  const [visibleCount, setVisibleCount] = useState(1);
  const [cardWidth, setCardWidth] = useState(280);
  const [activeIndex, setActiveIndex] = useState(0);
  /** Pause autoplay only while keyboard focus is inside the slider viewport (not on hover). */
  const [focusPaused, setFocusPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const maxIndex = Math.max(0, n - visibleCount);
  const stepPx = cardWidth + GAP_PX;

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqMd = window.matchMedia("(min-width: 768px)");

    const measure = () => {
      const vc = visibleCountFromMedia();
      setVisibleCount(vc);
      const vw = el.clientWidth;
      const effectiveVc = Math.min(vc, Math.max(1, n));
      const cw = Math.max(
        200,
        Math.floor((vw - (effectiveVc - 1) * GAP_PX) / effectiveVc)
      );
      setCardWidth(cw);
    };

    measure();
    window.addEventListener("resize", measure);
    mqLg.addEventListener("change", measure);
    mqMd.addEventListener("change", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      window.removeEventListener("resize", measure);
      mqLg.removeEventListener("change", measure);
      mqMd.removeEventListener("change", measure);
      ro.disconnect();
    };
  }, [n]);

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (maxIndex <= 0 ? 0 : i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (maxIndex <= 0 ? 0 : i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (focusPaused) return;
    if (maxIndex <= 0) return;

    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      goNext();
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [focusPaused, goNext, maxIndex]);

  const trackTransition = reduceMotion
    ? `transform ${Math.min(120, SLIDE_DURATION_MS)}ms linear`
    : `transform ${SLIDE_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`;

  const translatePx = Math.round(activeIndex * stepPx);

  const navDisabled = maxIndex <= 0;

  return (
    <section className="w-full bg-white py-12 md:py-14 lg:py-16 xl:py-[4.5rem]">
      <ContainerWrapper>
        <HomeSectionHeader
          headerClassName="mx-auto mb-8 max-w-3xl text-center md:mb-10 lg:mb-11"
          eyebrow={eyebrow}
          title={
            <>
              {titleBefore}
              <span className="text-[#00a88f]">{titleHighlight}</span>
              {titleAfter}
            </>
          }
          subtitle={description}
          eyebrowClassName="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#00a88f] sm:text-xs sm:tracking-[0.28em]"
          titleClassName="mt-3 text-balance text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl md:text-[1.85rem] lg:text-[2rem]"
          subtitleClassName="mx-auto mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] md:text-base"
        />

        <div className="relative md:px-12 lg:px-14">
          <button
            type="button"
            aria-label="Previous slide"
            aria-controls="study-india-slider"
            disabled={navDisabled}
            onClick={goPrev}
            className={`absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex ${arrowBtnClass}`}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next slide"
            aria-controls="study-india-slider"
            disabled={navDisabled}
            onClick={goNext}
            className={`absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex ${arrowBtnClass}`}
          >
            ›
          </button>

          <div
            id="study-india-slider"
            ref={viewportRef}
            role="region"
            aria-label="Study in India programs"
            aria-roledescription="carousel"
            className="-mx-1 overflow-hidden px-1 touch-pan-y [contain:layout] [overscroll-behavior-x:contain] sm:mx-0 sm:px-0"
            onFocusCapture={() => setFocusPaused(true)}
            onBlurCapture={(e) => {
              const next = e.relatedTarget;
              if (next instanceof Node && e.currentTarget.contains(next)) return;
              setFocusPaused(false);
            }}
            onTouchStart={(e) => {
              const t = e.touches[0];
              touchStartX.current = t?.clientX ?? null;
              touchStartY.current = t?.clientY ?? null;
            }}
            onTouchEnd={(e) => {
              const startX = touchStartX.current;
              const startY = touchStartY.current;
              touchStartX.current = null;
              touchStartY.current = null;
              if (startX == null || startY == null || navDisabled) return;
              const endTouch = e.changedTouches[0];
              const endX = endTouch?.clientX ?? startX;
              const endY = endTouch?.clientY ?? startY;
              const dx = endX - startX;
              const dy = endY - startY;
              const absX = Math.abs(dx);
              const absY = Math.abs(dy);
              /** Ignore sideways intent when the user is clearly scrolling vertically. */
              if (absY > absX && absY > 24) return;
              if (absX < 48 || absX < absY * 1.15) return;
              if (dx > 0) goPrev();
              else goNext();
            }}
          >
            <div
              className="flex gap-3 will-change-[transform] transform-gpu backface-hidden"
              style={{
                transform: `translate3d(-${translatePx}px, 0, 0)`,
                transition: trackTransition,
              }}
            >
              {cards.map((program, index) => (
                <div
                  key={program.id}
                  className="min-w-0 shrink-0"
                  style={{ width: cardWidth }}
                  aria-hidden={
                    index < activeIndex || index >= activeIndex + visibleCount ? true : undefined
                  }
                >
                  <ProgramCard
                    program={program}
                    priority={index < 4}
                    carouselSizing={false}
                    className={studyIndiaCardHoverClass}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {maxIndex > 0 ? (
          <nav
            aria-label="Slide pagination"
            className="mt-4 flex flex-wrap justify-center gap-x-1 gap-y-2 px-1 md:mt-5 md:gap-2 md:px-0"
          >
            {Array.from({ length: maxIndex + 1 }, (_, page) => (
              <button
                key={page}
                type="button"
                aria-label={`Show slide group ${page + 1} of ${maxIndex + 1}`}
                aria-current={page === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(page)}
                className="flex min-h-11 min-w-11 items-center justify-center md:min-h-0 md:min-w-0"
              >
                <span
                  className={`block h-2 rounded-full transition-[width,background-color] duration-300 ease-out ${
                    page === activeIndex ? "w-8 bg-[#00a88f]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-hidden
                />
              </button>
            ))}
          </nav>
        ) : null}

        <div className="mt-3 flex items-center justify-center gap-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            aria-controls="study-india-slider"
            disabled={navDisabled}
            className={`${arrowBtnClass} min-h-11 min-w-11`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            aria-controls="study-india-slider"
            disabled={navDisabled}
            className={`${arrowBtnClass} min-h-11 min-w-11`}
          >
            ›
          </button>
        </div>
      </ContainerWrapper>
    </section>
  );
}
