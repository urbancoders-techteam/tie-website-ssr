"use client";

import { useEffect, useRef, useState } from "react";
import {
  DUBAI_CONTAINER,
  RANKED_UNI_HEADERS,
  RANKED_UNI_INTRO,
  RANKED_UNI_LOGOS,
  RANKED_UNI_ROWS,
  RANKED_UNI_TIPS,
} from "./dubaiContent";
import DubaiCta from "./DubaiCta";
import DubaiNoteCard from "./DubaiNoteCard";
import DubaiReveal from "./DubaiReveal";
import DubaiSectionHeading from "./DubaiSectionHeading";
import DubaiTable from "./DubaiTable";

const SLIDE_MS = 2800;

function useVisibleLogos() {
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const tablet = window.matchMedia("(min-width: 640px)");
    const update = () => setVisible(desktop.matches ? 5 : tablet.matches ? 3 : 2);
    update();
    desktop.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return visible;
}

export default function DubaiTopRankedUniversities() {
  const visible = useVisibleLogos();
  const count = RANKED_UNI_LOGOS.length;
  const slides = [...RANKED_UNI_LOGOS, ...RANKED_UNI_LOGOS.slice(0, visible)];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const active = index % count;

  useEffect(() => {
    const node = sliderRef.current;
    if (!node) return;
    const pause = () => setPaused(true);
    const play = () => setPaused(false);
    node.addEventListener("mouseenter", pause);
    node.addEventListener("mouseleave", play);
    return () => {
      node.removeEventListener("mouseenter", pause);
      node.removeEventListener("mouseleave", play);
    };
  }, []);

  useEffect(() => {
    setAnimate(false);
    setIndex(0);
  }, [visible]);

  useEffect(() => {
    if (animate) return;
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current >= count ? current : current + 1));
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  useEffect(() => {
    if (index < count) return;
    const timer = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 620);
    return () => window.clearTimeout(timer);
  }, [index, count]);

  return (
    <section id="universities" className="scroll-mt-28 bg-[#F7F1E6] py-12 lg:py-16">
      <div className={`${DUBAI_CONTAINER} text-center`}>
        <DubaiReveal>
        <DubaiSectionHeading title="Top-Ranked Universities in Dubai" />
        <div className="mx-auto mt-4 max-w-6xl space-y-3 text-left text-sm leading-7 text-slate-700 sm:text-[15px]">
          {RANKED_UNI_INTRO.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div ref={sliderRef} className="mx-auto mt-8 max-w-4xl">
          <div className="overflow-hidden" aria-roledescription="carousel" aria-label="University logos">
            <ul
              className="flex"
              style={{
                width: `${(slides.length / visible) * 100}%`,
                transform: `translateX(-${(index * 100) / slides.length}%)`,
                transition: animate ? "transform 600ms ease" : "none",
              }}
            >
              {slides.map((name, slideIndex) => (
                <li
                  key={`${name}-${slideIndex}`}
                  aria-hidden={slideIndex < index || slideIndex >= index + visible}
                  className="flex min-h-[88px] items-center justify-center px-2"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <span className="flex h-16 w-full items-center justify-center rounded-2xl border border-[#E6D9C4] bg-white px-3 text-center text-[11px] font-extrabold uppercase leading-4 tracking-wide text-[#122033] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C6A35A]">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 flex justify-center gap-2">
            {RANKED_UNI_LOGOS.map((name, dotIndex) => (
              <button
                key={name}
                type="button"
                aria-label={`Show ${name}`}
                aria-current={dotIndex === active ? "true" : undefined}
                onClick={() => {
                  setAnimate(true);
                  setIndex(dotIndex);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${dotIndex === active ? "w-6 bg-[#C6A35A]" : "w-2 bg-[#E6D9C4]"}`}
              />
            ))}
          </div>
        </div>

        <DubaiTable className="mt-8 overflow-x-auto" headers={RANKED_UNI_HEADERS} rows={RANKED_UNI_ROWS} minWidth={820} />

        <DubaiNoteCard title="Quick University Selection Tips" items={[...RANKED_UNI_TIPS]} />

        <DubaiCta href="#counselling" className="mt-8">Talk to Our Trusted Study in Dubai Consultants Today</DubaiCta>
        </DubaiReveal>
      </div>
    </section>
  );
}
