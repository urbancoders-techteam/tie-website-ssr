"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const DEFAULT_SECTION_ID = "teaching-methodology";
const DEFAULT_HEADING_ID = "teaching-methodology-heading";
const MOBILE_TEACHING_AUTOPLAY_MS = 5000;
/** Matches Tailwind `md:hidden` for the carousel — effects must not run on md+ or `scrollIntoView` jumps the page. */
const MOBILE_CAROUSEL_MQ = "(max-width: 767px)";

function subscribeMobileCarouselMq(onChange: () => void) {
  const mq = window.matchMedia(MOBILE_CAROUSEL_MQ);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMobileCarouselVisibleSnapshot() {
  return window.matchMedia(MOBILE_CAROUSEL_MQ).matches;
}

function useMobileCarouselVisible() {
  return useSyncExternalStore(subscribeMobileCarouselMq, getMobileCarouselVisibleSnapshot, () => false);
}

/** Same object shape as `abroadCopy.teaching` or `abroadCopy.career` from `getAbroadFullPageCopy`. */
type TeachingSectionContent = AbroadFullPageCopy["teaching"];
type MethodologyItem = TeachingSectionContent["items"][number];

const SCROLLER_CLASS =
  "flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-visible scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x] [&::-webkit-scrollbar]:hidden";

const SLIDE_WRAP =
  "flex w-[min(100%,calc(100vw-2.5rem))] max-w-[min(400px,calc(100vw-2rem))] shrink-0 snap-center";

interface TeachingMethodologyAbroadProps {
  content: TeachingSectionContent;
  /** Section root `id` for anchors; must be unique when this block appears more than once on a page. */
  sectionId?: string;
  /** Heading `id` for `aria-labelledby`; must be unique when this block appears more than once on a page. */
  headingId?: string;
  /** Accessible name for the mobile carousel region. */
  carouselAriaLabel?: string;
}

function splitIntoTwoRows<T>(items: T[]): [T[], T[]] {
  const firstCount = Math.min(5, items.length);
  return [items.slice(0, firstCount), items.slice(firstCount)];
}

function splitIntoThreeRows<T>(items: T[]): [T[], T[], T[]] {
  const n = items.length;
  const r1 = Math.ceil(n / 3);
  const r2 = Math.ceil((n - r1) / 2);
  return [items.slice(0, r1), items.slice(r1, r1 + r2), items.slice(r1 + r2)];
}

/** Grid classes for a single row by number of cards (tablet & desktop). */
function rowGridClass(rowLength: number): string {
  if (rowLength === 0) return "";
  if (rowLength === 5) {
    return "grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-5";
  }
  if (rowLength === 4) {
    return "grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4 w-full max-w-6xl mx-auto";
  }
  if (rowLength === 3) {
    return "grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5 w-full max-w-5xl mx-auto";
  }
  if (rowLength === 2) {
    return "grid grid-cols-2 gap-4 md:gap-5 w-full max-w-2xl mx-auto";
  }
  if (rowLength === 1) {
    return "grid grid-cols-1 w-full max-w-sm mx-auto";
  }
  return "grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-5";
}

function DesktopRows({ items }: { items: MethodologyItem[] }) {
  const rows = useMemo(() => {
    if (items.length > 8) {
      const [a, b, c] = splitIntoThreeRows(items);
      return [a, b, c].filter((r) => r.length > 0);
    }
    const [a, b] = splitIntoTwoRows(items);
    return [a, b].filter((r) => r.length > 0);
  }, [items]);

  return (
    <div className="mt-9 hidden md:block">
      {rows.map((row, idx) => (
        <div key={idx} className={idx > 0 ? "mt-5 md:mt-6" : ""}>
          <div className={rowGridClass(row.length)}>
            {row.map((item) => (
              <div key={item.title} className="min-h-0 min-w-0">
                <MethodologyCard item={item} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const MethodologyCard = memo(function MethodologyCard({ item }: { item: MethodologyItem }) {
  const { icon, title, description } = item;
  const isLetterBadge = /^[A-Z]{2}$/.test(icon.trim());

  return (
    <article className="flex h-full w-full min-w-0 flex-col items-center rounded-2xl border border-[#E3E8F1] bg-white px-5 py-5 text-center shadow-[0_2px_10px_rgba(15,40,95,0.06)]">
      <div
        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF4F6] leading-none text-[#143C83] ${
          isLetterBadge ? "text-[11px] font-bold tracking-tight" : "text-2xl"
        }`}
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="mt-4 text-[17px] font-semibold leading-snug text-[#143C83] md:text-[18px]">{title}</h3>
      <p className="mt-2 text-[14px] font-medium leading-relaxed text-[#637086] md:text-[15px] md:leading-[1.65]">
        {description}
      </p>
    </article>
  );
});

export default function TeachingMethodologyAbroad({
  content,
  sectionId = DEFAULT_SECTION_ID,
  headingId = DEFAULT_HEADING_ID,
  carouselAriaLabel = "Teaching methodology",
}: TeachingMethodologyAbroadProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollSyncObserverRef = useRef<IntersectionObserver | null>(null);
  const { items } = content;
  const itemCount = items.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const mobileCarouselVisible = useMobileCarouselVisible();

  useEffect(() => {
    setSlideIndex(0);
  }, [content.titlePrimary, content.titleAccent, itemCount]);

  useLayoutEffect(() => {
    if (!mobileCarouselVisible || itemCount === 0) return;
    slideRefs.current[slideIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }, [slideIndex, itemCount, mobileCarouselVisible]);

  useEffect(() => {
    if (!mobileCarouselVisible || itemCount <= 1) return;
    const tick = () => {
      if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
      setSlideIndex((i) => (i + 1) % itemCount);
    };
    const id = setInterval(tick, MOBILE_TEACHING_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [itemCount, mobileCarouselVisible]);

  /** Keep active dot in sync when the user swipes the track (not only autoplay / dot taps). */
  useLayoutEffect(() => {
    if (!mobileCarouselVisible || itemCount <= 1) return;
    const raf = requestAnimationFrame(() => {
      scrollSyncObserverRef.current?.disconnect();
      const root = scrollerRef.current;
      if (!root) return;
      const slides = slideRefs.current.slice(0, itemCount).filter(Boolean) as HTMLDivElement[];
      if (slides.length !== itemCount) return;

      const io = new IntersectionObserver(
        (entries) => {
          let best: IntersectionObserverEntry | undefined;
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
          }
          if (!best?.target) return;
          const idx = slides.indexOf(best.target as HTMLDivElement);
          if (idx >= 0) setSlideIndex(idx);
        },
        { root, rootMargin: "0px", threshold: [0.35, 0.55, 0.75, 1] }
      );
      scrollSyncObserverRef.current = io;
      slides.forEach((el) => io.observe(el));
    });
    return () => {
      cancelAnimationFrame(raf);
      scrollSyncObserverRef.current?.disconnect();
      scrollSyncObserverRef.current = null;
    };
  }, [itemCount, mobileCarouselVisible]);

  const setSlideEl = useCallback((index: number) => (node: HTMLDivElement | null) => {
    slideRefs.current[index] = node;
  }, []);

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" aria-labelledby={headingId} id={sectionId}>
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{content.eyebrow}</p>
            <h2 id={headingId} className={ABROAD_SECTION_TITLE}>
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            {content.intro ? <p className={ABROAD_SECTION_SUBTITLE}>{content.intro}</p> : null}
          </div>

          <div className="relative mt-9 min-w-0 md:hidden">
            <div
              ref={scrollerRef}
              role="region"
              aria-roledescription="carousel"
              aria-label={carouselAriaLabel}
              className={SCROLLER_CLASS}
            >
              {items.map((item, i) => (
                <div key={`${item.title}-${i}`} ref={setSlideEl(i)} className={SLIDE_WRAP}>
                  <MethodologyCard item={item} />
                </div>
              ))}
            </div>

            {itemCount > 1 ? (
              <nav
                className="mt-5 flex flex-wrap items-center justify-center gap-2 px-2"
                aria-label={`${carouselAriaLabel} pagination`}
              >
                {items.map((item, i) => (
                  <button
                    key={`dot-${item.title}-${i}`}
                    type="button"
                    onClick={() => setSlideIndex(i)}
                    className={`h-2 shrink-0 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143C83]/40 ${
                      slideIndex === i
                        ? "w-8 bg-[#143C83]"
                        : "w-2 bg-[#C5CCD8] hover:bg-[#94A3B8]"
                    }`}
                    aria-label={`Go to slide ${i + 1} of ${itemCount}`}
                    aria-current={slideIndex === i ? "true" : undefined}
                  />
                ))}
              </nav>
            ) : null}

            <p className="sr-only" aria-live="polite">
              Card {slideIndex + 1} of {itemCount}
            </p>
          </div>

          <DesktopRows items={items} />
        </div>
      </ContainerWrapper>
    </section>
  );
}
