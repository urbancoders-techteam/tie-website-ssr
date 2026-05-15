"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  studyDestinationsContent,
  type StudyDestinationCard,
} from "@/constants/study_abroad/studyDestinations";

function DestinationCard({ destination }: { destination: StudyDestinationCard }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-[0_12px_40px_rgba(7,27,58,0.08)] transition hover:shadow-[0_18px_48px_rgba(7,27,58,0.12)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
        <Image
          src={destination.imageSrc}
          alt={destination.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <p className="absolute left-3 top-3 text-sm font-extrabold tracking-tight text-white drop-shadow sm:left-4 sm:top-4 sm:text-base">
          {destination.countryCode}
        </p>
        <p className="absolute bottom-3 left-3 right-3 text-lg font-extrabold leading-tight text-white drop-shadow sm:bottom-4 sm:left-4 sm:text-xl">
          {destination.countryName}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0d9488] sm:text-xs">
            Best for
          </p>
          <p className="mt-1.5 text-[13px] leading-snug text-[#5a6570] sm:text-sm">{destination.bestFor}</p>
        </div>
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0d9488] sm:text-xs">
            Courses
          </p>
          <p className="mt-1.5 text-[13px] leading-snug text-[#5a6570] sm:text-sm">{destination.courses}</p>
        </div>
        <div className="rounded-lg border border-[#f5d78a] bg-[#fff9e6] px-3 py-2.5 sm:px-3.5 sm:py-3">
          <p className="flex gap-2 text-[12px] font-semibold leading-snug text-[#854d0e] sm:text-[13px]">
            <span className="shrink-0 text-[#d97706]" aria-hidden>
              ★
            </span>
            <span>{destination.highlight}</span>
          </p>
        </div>
      </div>

      <Link
        href={destination.href}
        className="flex items-center justify-between gap-2 border-t border-[#d9f2ef] bg-[#f0fdf9] px-4 py-3.5 text-[13px] font-bold text-[#0d9488] transition hover:bg-[#e6faf8] sm:px-5 sm:text-sm"
      >
        <span>{destination.ctaLabel}</span>
        <span className="text-lg font-normal leading-none" aria-hidden>
          →
        </span>
      </Link>
    </article>
  );
}

const sliderClassName =
  "flex gap-4 overflow-x-auto pb-2 sm:gap-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

/** 4 cards fit in the track on lg+ (3 gaps × 1.25rem). */
const slideClassName =
  "h-full w-[min(88vw,320px)] shrink-0 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]";

const SCROLL_DURATION_MS = 850;
const AUTOPLAY_INTERVAL_MS = 5200;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

export default function StudyDestination() {
  const { eyebrow, heading, description, destinations } = studyDestinationsContent;
  const sliderRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = destinations.length;

  const updateFromScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider || total === 0) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const scrollLeft = slider.scrollLeft;
    if (maxScroll <= 0) {
      activeIndexRef.current = 0;
      setActiveIndex(0);
      return;
    }

    const children = slider.querySelectorAll<HTMLElement>("[data-dest-index]");
    let leading = 0;
    let leadingDist = Infinity;
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - scrollLeft);
      if (dist < leadingDist) {
        leadingDist = dist;
        leading = i;
      }
    });
    activeIndexRef.current = leading;
    setActiveIndex(leading);
  }, [total]);

  const cancelAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    isAnimatingRef.current = false;
  }, []);

  const smoothScrollTo = useCallback(
    (targetLeft: number) => {
      const slider = sliderRef.current;
      if (!slider) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const clampedTarget = Math.min(Math.max(0, targetLeft), maxScroll);
      const startLeft = slider.scrollLeft;
      const distance = clampedTarget - startLeft;

      if (Math.abs(distance) < 1) {
        updateFromScroll();
        return;
      }

      cancelAnimation();
      isAnimatingRef.current = true;
      const startTime = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / SCROLL_DURATION_MS, 1);
        slider.scrollLeft = startLeft + distance * easeInOutCubic(progress);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
          return;
        }

        isAnimatingRef.current = false;
        animationFrameRef.current = null;
        updateFromScroll();
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    },
    [cancelAnimation, updateFromScroll],
  );

  const scrollToIndex = useCallback(
    (index: number, instant = false) => {
      const slider = sliderRef.current;
      if (!slider) return;

      const target = slider.querySelector<HTMLElement>(`[data-dest-index="${index}"]`);
      if (!target) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const left = Math.min(Math.max(0, target.offsetLeft), maxScroll);

      if (instant) {
        cancelAnimation();
        slider.scrollLeft = left;
        updateFromScroll();
        return;
      }

      smoothScrollTo(left);
    },
    [cancelAnimation, smoothScrollTo, updateFromScroll],
  );

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    updateFromScroll();
    slider.addEventListener("scroll", updateFromScroll, { passive: true });
    const ro = new ResizeObserver(() => updateFromScroll());
    ro.observe(slider);

    return () => {
      slider.removeEventListener("scroll", updateFromScroll);
      ro.disconnect();
    };
  }, [updateFromScroll]);

  const scrollToCard = (index: number) => {
    if (isAnimatingRef.current) return;
    scrollToIndex(index);
  };

  const scrollByDirection = useCallback(
    (direction: "prev" | "next") => {
      if (isAnimatingRef.current) return;

      const current = activeIndexRef.current;
      let nextIndex: number;
      let instant = false;

      if (direction === "next") {
        nextIndex = current >= total - 1 ? 0 : current + 1;
        instant = current >= total - 1;
      } else {
        nextIndex = current <= 0 ? total - 1 : current - 1;
        instant = current <= 0;
      }

      scrollToIndex(nextIndex, instant);
    },
    [scrollToIndex, total],
  );

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const tick = () => {
      if (isPausedRef.current || isAnimatingRef.current) return;
      scrollByDirection("next");
    };

    const id = window.setInterval(tick, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [scrollByDirection]);

  useEffect(() => () => cancelAnimation(), [cancelAnimation]);

  return (
    <section className="overflow-hidden bg-[#f7f9fc] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-[#e6faf8] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#0d9488] sm:text-[11px]">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#071b3a] sm:mt-6 sm:text-3xl lg:text-[2.125rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5a6570] sm:mt-5 sm:text-base">
            {description}
          </p>
        </header>

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <div className="mb-4 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollByDirection("prev")}
              aria-label="Previous destination"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9f2ef] bg-white text-lg text-[#0d9488] shadow-sm transition hover:bg-[#e6faf8] disabled:cursor-not-allowed disabled:opacity-40"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection("next")}
              aria-label="Next destination"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9f2ef] bg-white text-lg text-[#0d9488] shadow-sm transition hover:bg-[#e6faf8] disabled:cursor-not-allowed disabled:opacity-40"
            >
              ›
            </button>
          </div>

          <div
            ref={sliderRef}
            className={sliderClassName}
            role="region"
            aria-label="Study destination cards"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onPointerDown={cancelAnimation}
          >
            {destinations.map((destination, index) => (
              <div
                key={`${destination.countryCode}-${destination.countryName}`}
                data-dest-index={index}
                className={slideClassName}
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-label="Destination slider pagination">
          {destinations.map((destination, index) => (
            <button
              key={`${destination.countryCode}-dot`}
              type="button"
              onClick={() => scrollToCard(index)}
              aria-label={`Show ${destination.countryName}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-7 bg-[#0d9488]" : "w-2 bg-[#c9eee9] hover:bg-[#7ddbd3]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
