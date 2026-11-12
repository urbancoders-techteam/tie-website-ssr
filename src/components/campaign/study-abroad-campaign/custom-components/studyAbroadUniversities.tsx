"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import StudyAbroadCta from "./studyAbroadCta";
import StudyAbroadReveal from "./studyAbroadReveal";
import StudyAbroadSectionHeading from "./studyAbroadSectionHeading";
import StudyAbroadTable from "./studyAbroadTable";
import type { StudyAbroadCampaignData } from "./studyAbroadTypes";

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

export default function StudyAbroadUniversities({
  containerClass,
  universities,
}: {
  containerClass: string;
  universities: StudyAbroadCampaignData["universities"];
}) {
  const visible = useVisibleLogos();
  const count = universities.logos.length;
  const slides = [...universities.logos, ...universities.logos.slice(0, visible)];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const active = count === 0 ? 0 : index % count;

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
    if (paused || count === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
    <section id={universities.id} className="scroll-mt-28 py-12 lg:py-16" style={{ background: universities.background }}>
      <div className={`${containerClass} text-center`}>
        <StudyAbroadReveal>
          <StudyAbroadSectionHeading title={universities.title} kicker={universities.kicker} />
          <div
            className={`mx-auto mt-4 max-w-6xl space-y-3 text-sm leading-7 text-slate-700 sm:text-[15px] ${
              universities.introAlign === "left" ? "text-left" : "text-center"
            }`}
          >
            {universities.intro.map((paragraph) => (
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
                {slides.map((logo, slideIndex) => (
                  <li
                    key={`${logo.name}-${slideIndex}`}
                    aria-hidden={slideIndex < index || slideIndex >= index + visible}
                    className="flex min-h-[104px] items-center justify-center px-2"
                    style={{ width: `${100 / slides.length}%` }}
                  >
                    <span className="flex h-20 w-full items-center justify-center rounded-2xl border border-[#E6D9C4] bg-white px-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C6A35A]">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={160}
                        height={64}
                        className="h-12 w-auto max-w-full object-contain"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {universities.logos.map((logo, dotIndex) => (
                <button
                  key={logo.name}
                  type="button"
                  aria-label={`Show ${logo.name}`}
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

          <StudyAbroadTable
            className="mt-8 overflow-x-auto"
            headers={universities.headers}
            rows={universities.rows}
            minWidth={universities.minWidth}
            centerColumns={universities.centerColumns}
          />

          {universities.cta && (
            <StudyAbroadCta href={universities.cta.href} className="mt-8">
              {universities.cta.label}
            </StudyAbroadCta>
          )}
        </StudyAbroadReveal>
      </div>
    </section>
  );
}
