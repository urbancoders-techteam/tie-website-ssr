"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import ContainerWrapper from "../ContainerWrapper";
import {
  globalReachDestinations,
  globalReachIntro,
} from "@/constants/home";

const TEAL = "#00a88f";
const NAVY = "#101827";

export default function GlobalReach() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const total = globalReachDestinations.length;
  const frIndex = useMemo(
    () => globalReachDestinations.findIndex((d) => d.id === "fr"),
    [],
  );
  const initial = frIndex >= 0 ? frIndex : 0;

  const [activeIndex, setActiveIndex] = useState(initial);

  const updateFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || total === 0) return;

    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setActiveIndex(0);
      return;
    }

    const viewportCenter = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    const children = el.querySelectorAll<HTMLElement>("[data-dest-index]");
    children.forEach((child, i) => {
      const cardCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(viewportCenter - cardCenter);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActiveIndex(best);
  }, [total]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || total === 0) return;

    const target = el.querySelector<HTMLElement>(
      `[data-dest-index="${initial}"]`,
    );
    if (target) {
      target.scrollIntoView({ inline: "center", block: "nearest" });
      requestAnimationFrame(updateFromScroll);
    }
  }, [initial, total, updateFromScroll]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateFromScroll();
    el.addEventListener("scroll", updateFromScroll, { passive: true });
    const ro = new ResizeObserver(() => updateFromScroll());
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateFromScroll);
      ro.disconnect();
    };
  }, [updateFromScroll]);

  return (
    <section className="w-full py-12 md:py-14 lg:py-12 xl:py-14" style={{ backgroundColor: NAVY }}>
      <ContainerWrapper>
        <header className="mx-auto mb-8 max-w-4xl text-center md:mb-10 lg:mb-8">
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] sm:text-xs md:tracking-[0.32em]"
            style={{ color: TEAL }}
          >
            <span className="opacity-70" aria-hidden>
              —
            </span>{" "}
            {globalReachIntro.eyebrow}{" "}
            <span className="opacity-70" aria-hidden>
              —
            </span>
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[1.75rem] lg:text-[1.65rem] xl:text-[1.85rem] 2xl:text-[2rem]">
            {globalReachIntro.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-[1.7] text-white/60 sm:text-[0.9375rem] lg:mt-2.5 lg:text-[0.9rem] xl:text-base">
            {globalReachIntro.subtitle}
          </p>
        </header>

        <div
          ref={scrollRef}
          role="region"
          aria-label="Study abroad destinations"
          className="-mx-2 flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth px-2 pb-2 [-ms-overflow-style:none] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [scrollbar-width:thin] sm:-mx-1 sm:gap-3.5 sm:px-1 md:mx-0 md:gap-4 md:px-0 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25 [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {globalReachDestinations.map((dest, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={dest.id}
                data-dest-index={idx}
                className="h-full w-[min(78vw,300px)] shrink-0 snap-start sm:w-[min(42vw,300px)] md:w-[min(32vw,280px)] lg:w-[min(24vw,260px)] xl:w-[min(22vw,280px)]"
              >
                <article
                  className={`relative mx-auto h-full overflow-hidden rounded-[14px] border-2 border-transparent transition-[border-color,box-shadow] duration-300 xl:rounded-2xl ${
                    isActive
                      ? "border-[#00a88f] shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)]"
                      : "shadow-[0_10px_32px_-18px_rgba(0,0,0,0.45)]"
                  } `}
                >
                  <div className="relative aspect-[3/4] w-full min-h-[210px] sm:aspect-[4/5] sm:min-h-[230px] lg:aspect-[3/4] lg:min-h-[min(230px,30vh)]">
                    <Image
                      src={dest.image}
                      alt={`${dest.name} — ${dest.tagline}`}
                      fill
                      draggable={false}
                      className="pointer-events-none object-cover object-center select-none"
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 32vw, 22vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/[0.82] via-black/20 to-transparent"
                      aria-hidden
                    />
                    <span className="absolute right-3 top-3 text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-white/75 sm:right-3.5 sm:top-3.5 sm:text-[0.6875rem]">
                      {dest.code}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 px-3 pb-3.5 pt-10 sm:px-4 sm:pb-4">
                      <h3 className="text-[1.05rem] font-bold leading-tight tracking-tight text-white sm:text-lg md:text-xl">
                        {dest.name}
                      </h3>
                      <p className="mt-1.5 text-[0.75rem] font-normal leading-relaxed text-white/80 sm:text-[0.8125rem]">
                        {dest.tagline}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </ContainerWrapper>
    </section>
  );
}
