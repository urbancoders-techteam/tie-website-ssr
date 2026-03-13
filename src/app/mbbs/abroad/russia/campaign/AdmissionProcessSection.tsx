"use client";

import { useMemo, useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaUserFriends,
  FaListAlt,
  FaFileSignature,
} from "react-icons/fa";

const BG_IMAGE_URL = "/images/universityViewBanner.png";

type Step = {
  stepLabel: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function AdmissionProcessSection() {
  const steps = useMemo<Step[]>(
    () => [
      {
        stepLabel: "Step 1",
        title: "Personalised Counselling",
        desc: "Our experienced advisors at Taksheela begin with a counselling session to understand your academic background, career goals, and preferences. Based on this discussion, we guide you on the most suitable pathway for pursuing MBBS in Russia.",
        icon: FaUserFriends,
      },
      {
        stepLabel: "Step 2",
        title: "Profile Assessment and University Selection",
        desc: "Our team carefully reviews your academic profile, eligibility, and budget to help you shortlist NMC-compliant and globally recognised Russian medical universities that match your goals.",
        icon: FaListAlt,
      },
      {
        stepLabel: "Step 3",
        title: "Application and Documentation",
        desc: "Once the university is selected, Taksheela assists you with the complete application process. We help organise, verify, and prepare the required documents before submitting the application to the chosen university.",
        icon: FaFileSignature,
      },
    ],
    []
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<{
    isDragging: boolean;
    startX: number;
    startScrollLeft: number;
    lastX: number;
    lastT: number;
    velocity: number; // px per ms (positive = scroll right)
    rafId: number | null;
  }>({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
    lastX: 0,
    lastT: 0,
    velocity: 0,
    rafId: null,
  });

  // Momentum/glide after drag release
  const startMomentum = (initialVelocity: number) => {
    if (!scrollRef.current) return;
    const state = dragStateRef.current;
    if (state.rafId) cancelAnimationFrame(state.rafId);

    let v = initialVelocity;
    const friction = 0.0025; // higher = stops sooner
    let last = performance.now();

    const tick = (now: number) => {
      if (!scrollRef.current) return;
      if (dragStateRef.current.isDragging) return; // stop if user starts dragging again

      const dt = now - last;
      last = now;

      // Apply friction
      const decay = Math.exp(-friction * dt);
      v *= decay;

      if (Math.abs(v) < 0.02) {
        dragStateRef.current.rafId = null;
        return;
      }

      scrollRef.current.scrollLeft += v * dt;
      dragStateRef.current.rafId = requestAnimationFrame(tick);
    };

    dragStateRef.current.rafId = requestAnimationFrame(tick);
  };

  const scrollByCards = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const delta = dir === "left" ? -420 : 420;
    scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section
      id="admission-process"
      className="py-14 md:py-18 scroll-mt-24"
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay (only over the background image area) */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        <div className="relative mx-auto max-w-7xl ">
          <div className=" rounded-3xl p-6 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-white">
                  MBBS in Russia {" "}
                </h2>
                <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-white">
                  Admission Process{" "}
                  <span className="text-[#5dd4d9]">Step-by-Step with Taksheela {" "}</span>
                </h2>
                <p className="text-white/85 mt-3 max-w-4xl text-sm md:text-base leading-relaxed">
                  The admission process for <span className="text-[#5dd4d9] font-bold">MBBS in Russia</span> is simple and transparent compared to many private medical colleges in India. Russian universities generally do not require additional entrance examinations or capitation fees. With the expert support of <span className="text-[#5dd4d9] font-bold">Taksheela Institute of Education</span>, students can complete the entire process smoothly and confidently.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <div className="mx-auto max-w-5xl px-4">
                <div className="relative h-6">
                  {/* Inset line (prevents awkward edge-to-edge look) */}
                  <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-px bg-white/25" />

                  {/* Dots */}
                  <div className="absolute left-[10%] top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#00999E] ring-4 ring-[#00999E]/25" />
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#00999E] ring-4 ring-[#00999E]/25" />
                  <div className="absolute left-[90%] top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#00999E] ring-4 ring-[#00999E]/25" />
                </div>

                {/* Step labels under dots */}
                <div className="relative mt-2 h-5 text-white/70 text-xs md:text-sm">
                  <div className="absolute left-[10%] -translate-x-1/2 whitespace-nowrap">
                    {steps[0]?.stepLabel}
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
                    {steps[1]?.stepLabel}
                  </div>
                  <div className="absolute left-[90%] -translate-x-1/2 whitespace-nowrap">
                    {steps[2]?.stepLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="mt-6">
              <div
                ref={scrollRef}
                onWheel={(e) => {
                  // Translate vertical wheel scrolling into horizontal scrolling.
                  // This keeps the scrollbar hidden but still allows intuitive scrolling.
                  if (!scrollRef.current) return;
                  if (e.shiftKey) return; // allow normal horizontal wheel behavior
                  if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
                  e.preventDefault();
                  scrollRef.current.scrollBy({ left: e.deltaY, behavior: "smooth" });
                }}
                onPointerDown={(e) => {
                  if (!scrollRef.current) return;
                  // Only left click / primary pointer
                  if (e.button !== 0) return;
                  // Stop any ongoing momentum
                  if (dragStateRef.current.rafId) {
                    cancelAnimationFrame(dragStateRef.current.rafId);
                    dragStateRef.current.rafId = null;
                  }
                  dragStateRef.current.isDragging = true;
                  dragStateRef.current.startX = e.clientX;
                  dragStateRef.current.startScrollLeft = scrollRef.current.scrollLeft;
                  dragStateRef.current.lastX = e.clientX;
                  dragStateRef.current.lastT = performance.now();
                  dragStateRef.current.velocity = 0;
                  scrollRef.current.setPointerCapture?.(e.pointerId);
                }}
                onPointerMove={(e) => {
                  if (!scrollRef.current) return;
                  if (!dragStateRef.current.isDragging) return;
                  e.preventDefault();
                  const dx = e.clientX - dragStateRef.current.startX;
                  scrollRef.current.scrollLeft =
                    dragStateRef.current.startScrollLeft - dx;

                  const now = performance.now();
                  const dt = Math.max(1, now - dragStateRef.current.lastT);
                  const ddx = e.clientX - dragStateRef.current.lastX;
                  // Convert pointer movement to scroll velocity (invert to match scroll direction)
                  dragStateRef.current.velocity = (-ddx) / dt;
                  dragStateRef.current.lastX = e.clientX;
                  dragStateRef.current.lastT = now;
                }}
                onPointerUp={(e) => {
                  if (!scrollRef.current) return;
                  dragStateRef.current.isDragging = false;
                  scrollRef.current.releasePointerCapture?.(e.pointerId);
                  startMomentum(dragStateRef.current.velocity);
                }}
                onPointerCancel={() => {
                  dragStateRef.current.isDragging = false;
                }}
                onPointerLeave={() => {
                  dragStateRef.current.isDragging = false;
                }}
                className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none touch-pan-x overscroll-x-contain lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none lg:cursor-default lg:select-auto"
                role="region"
                aria-label="Admission process steps"
              >
                {steps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.stepLabel}
                      className="min-w-[320px] max-w-[360px] w-[360px] snap-start lg:min-w-0 lg:max-w-none lg:w-auto"
                    >
                      <div className="rounded-2xl border min-h-[260px] border-white/15 bg-white/5 backdrop-blur-md p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                        <div className="flex items-start gap-3">
                          <div className="h-11 w-11 rounded-xl bg-white/10 border border-[#5dd4d9]/15 flex items-center justify-center shrink-0">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="text-white/70 text-xs">
                              {s.stepLabel}
                            </div>
                            <h3 className="text-[#5dd4d9] font-bold leading-snug mt-1">
                              {s.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-white/80 text-sm mt-3 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile controls */}
              <div className="md:hidden mt-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCards("left")}
                  className="h-9 w-9 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center backdrop-blur"
                  aria-label="Previous steps"
                >
                  <FaArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCards("right")}
                  className="h-9 w-9 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center backdrop-blur"
                  aria-label="Next steps"
                >
                  <FaArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

