"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefCallback,
} from "react";

const DEFAULT_AUTOPLAY_MS = 5200;
const DEFAULT_MOBILE_MQ = "(max-width: 639px)";

export const SCROLLABLE_TRACK_CLASS =
  "flex items-stretch gap-3 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-ps-4 scroll-pe-4";

/** One full card on mobile; centered snap */
export const SCROLLABLE_SLIDE_MOBILE_CLASS =
  "flex flex-col w-[calc(100vw-2rem)] max-w-[360px] shrink-0 self-stretch snap-center";

/** Study destinations: 1-up mobile, 2-up sm, 4-up lg */
export const SCROLLABLE_SLIDE_DESTINATION_CLASS =
  "flex flex-col w-[calc(100vw-2rem)] max-w-[360px] shrink-0 self-stretch max-sm:snap-center sm:w-[calc((100%-1.25rem)/2)] sm:max-w-none sm:snap-start lg:w-[calc((100%-3.75rem)/4)]";

/** 2×2 course grid: one panel = full scrollport width */
export const SCROLLABLE_SLIDE_COURSES_GRID_CLASS =
  "box-border w-full min-w-full max-w-full shrink-0 grow-0 snap-center snap-always";

export const SCROLLABLE_TRACK_COURSES_CLASS =
  "flex w-full items-stretch gap-0 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

function clampScrollLeft(slider: HTMLElement, left: number) {
  const max = slider.scrollWidth - slider.clientWidth;
  return Math.min(Math.max(0, left), max);
}

function scrollLeftForSlide(
  slider: HTMLElement,
  slide: HTMLElement,
  centerOnMobile: boolean,
) {
  if (centerOnMobile) {
    const centered = slide.offsetLeft - (slider.clientWidth - slide.offsetWidth) / 2;
    return clampScrollLeft(slider, centered);
  }
  return clampScrollLeft(slider, slide.offsetLeft);
}

export function useScrollableSlider({
  total,
  autoplayMs = DEFAULT_AUTOPLAY_MS,
  mobileMq = DEFAULT_MOBILE_MQ,
}: {
  total: number;
  autoplayMs?: number;
  mobileMq?: string;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pausedRef = useRef(false);
  const activeIndexRef = useRef(0);
  const isMobileRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const setSlideRef = useCallback(
    (index: number): RefCallback<HTMLDivElement> =>
      (el) => {
        slideRefs.current[index] = el;
      },
    [],
  );

  const syncActiveIndex = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider || total === 0) return;

    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (slides.length === 0) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (maxScroll <= 0) {
      activeIndexRef.current = 0;
      setActiveIndex(0);
      return;
    }

    const scrollLeft = slider.scrollLeft;
    const origin = isMobileRef.current
      ? scrollLeft + slider.clientWidth / 2
      : scrollLeft;

    let index = 0;
    let minDist = Infinity;

    slides.forEach((slide, i) => {
      const point = isMobileRef.current
        ? slide.offsetLeft + slide.offsetWidth / 2
        : slide.offsetLeft;
      const dist = Math.abs(point - origin);
      if (dist < minDist) {
        minDist = dist;
        index = i;
      }
    });

    activeIndexRef.current = index;
    setActiveIndex(index);
  }, [total]);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const slider = sliderRef.current;
      const slide = slideRefs.current[index];
      if (!slider || !slide) return;

      const left = scrollLeftForSlide(slider, slide, isMobileRef.current);
      slider.scrollTo({ left, behavior });
    },
    [],
  );

  const step = useCallback(
    (delta: number) => {
      const current = activeIndexRef.current;
      let next = current + delta;
      let instant = false;

      if (next >= total) {
        next = 0;
        instant = true;
      } else if (next < 0) {
        next = total - 1;
        instant = true;
      }

      scrollToIndex(next, instant ? "auto" : "smooth");
    },
    [scrollToIndex, total],
  );

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const mq = window.matchMedia(mobileMq);
    const onMqChange = () => {
      isMobileRef.current = mq.matches;
      syncActiveIndex();
    };
    onMqChange();
    mq.addEventListener("change", onMqChange);

    syncActiveIndex();
    slider.addEventListener("scroll", syncActiveIndex, { passive: true });
    const ro = new ResizeObserver(syncActiveIndex);
    ro.observe(slider);

    return () => {
      mq.removeEventListener("change", onMqChange);
      slider.removeEventListener("scroll", syncActiveIndex);
      ro.disconnect();
    };
  }, [mobileMq, syncActiveIndex]);

  useEffect(() => {
    if (autoplayMs <= 0) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) step(1);
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [autoplayMs, step]);

  const pause = useCallback(() => {
    pausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    pausedRef.current = false;
  }, []);

  const resumeAfterTouch = useCallback(() => {
    window.setTimeout(resume, 2500);
  }, [resume]);

  const trackHandlers = {
    onMouseEnter: pause,
    onMouseLeave: resume,
    onTouchStart: pause,
    onTouchEnd: resumeAfterTouch,
  };

  return {
    sliderRef,
    setSlideRef,
    activeIndex,
    scrollToIndex,
    step,
    trackHandlers,
  };
}

const DEFAULT_DOT_ACTIVE = "w-7 bg-[#0d9488]";
const DEFAULT_DOT_INACTIVE = "w-2 bg-[#c9eee9] hover:bg-[#7ddbd3]";
const DEFAULT_ARROW_CLASS =
  "flex h-10 w-10 items-center justify-center rounded-full border border-[#d9f2ef] bg-white text-lg text-[#0d9488] shadow-sm transition hover:bg-[#e6faf8]";

export type ScrollableSliderProps = {
  total: number;
  ariaLabel: string;
  children: (setSlideRef: (index: number) => RefCallback<HTMLDivElement>) => ReactNode;
  className?: string;
  trackClassName?: string;
  bleedOnMobile?: boolean;
  autoplayMs?: number;
  mobileMq?: string;
  showArrows?: boolean;
  showSwipeHint?: boolean;
  arrowsClassName?: string;
  dotsClassName?: string;
  dotsAriaLabel?: string;
  getDotLabel?: (index: number) => string;
  dotActiveClassName?: string;
  dotInactiveClassName?: string;
};

export default function ScrollableSlider({
  total,
  ariaLabel,
  children,
  className = "",
  trackClassName = SCROLLABLE_TRACK_CLASS,
  bleedOnMobile = true,
  autoplayMs,
  mobileMq,
  showArrows = true,
  showSwipeHint = true,
  arrowsClassName = DEFAULT_ARROW_CLASS,
  dotsClassName = "mt-5 flex justify-center gap-2 sm:mt-6",
  dotsAriaLabel = "Slider pagination",
  getDotLabel,
  dotActiveClassName = DEFAULT_DOT_ACTIVE,
  dotInactiveClassName = DEFAULT_DOT_INACTIVE,
}: ScrollableSliderProps) {
  const {
    sliderRef,
    setSlideRef,
    activeIndex,
    scrollToIndex,
    step,
    trackHandlers,
  } = useScrollableSlider({ total, autoplayMs, mobileMq });

  return (
    <div className={className}>
      {(showArrows || showSwipeHint) && (
        <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4 sm:justify-end">
          {showSwipeHint ? (
            <p className="text-xs font-semibold text-[#5a6570] sm:hidden">Swipe or tap arrows</p>
          ) : (
            <span className="sm:hidden" />
          )}
          {showArrows ? (
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous slide"
                className={arrowsClassName}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next slide"
                className={arrowsClassName}
              >
                ›
              </button>
            </div>
          ) : null}
        </div>
      )}

      <div className={bleedOnMobile ? "max-sm:-mx-4" : undefined}>
        <div
          ref={sliderRef}
          className={trackClassName}
          role="region"
          aria-label={ariaLabel}
          {...trackHandlers}
        >
          {children(setSlideRef)}
        </div>
      </div>

      {total > 1 ? (
        <div className={dotsClassName} aria-label={dotsAriaLabel}>
          {Array.from({ length: total }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={getDotLabel?.(index) ?? `Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? dotActiveClassName : dotInactiveClassName
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
