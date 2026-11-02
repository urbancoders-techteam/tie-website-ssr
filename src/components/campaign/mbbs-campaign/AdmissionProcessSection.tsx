"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Slider from "react-slick";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserFriends,
  FaListAlt,
  FaFileSignature,
  FaCheckCircle,
  FaStamp,
  FaPassport,
  FaPlaneDeparture,
  FaHandsHelping,
} from "react-icons/fa";

const BG_IMAGE_URL = "/images/universityViewBanner.png";

/** Few steps (e.g. Russia/Georgia): show as a static grid. More steps (e.g. Kazakhstan): use react-slick. */
const SLIDER_MIN_STEPS = 4;

const ADMISSION_STEP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  FaUserFriends,
  FaListAlt,
  FaFileSignature,
  FaCheckCircle,
  FaStamp,
  FaPassport,
  FaPlaneDeparture,
  FaHandsHelping,
};

export interface AdmissionStepItem {
  stepLabel: string;
  title: string;
  desc: string;
  icon: string;
}

export interface AdmissionProcessSectionProps {
  steps: AdmissionStepItem[];
  countryName?: string;
  countryAdjective?: string;
  /** Replaces the default paragraph under the heading (e.g. Kazakhstan + TIE). */
  introOverride?: ReactNode;
  /** Replaces the teal accent after “Admission Process” (default: “Step-by-Step with Taksheela”). */
  admissionAccent?: ReactNode;
}

function StepCard({
  step,
  className = "",
  hideStepLabel = false,
}: {
  step: AdmissionStepItem;
  className?: string;
  /** Hide “Step N” line when shown above the card (timeline column). */
  hideStepLabel?: boolean;
}) {
  const Icon = ADMISSION_STEP_ICONS[step.icon];
  return (
    <div
      className={`rounded-2xl border min-h-[260px] border-white/15 bg-white/5 backdrop-blur-md p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 rounded-xl bg-white/10 border border-[#5dd4d9]/15 flex items-center justify-center shrink-0">
          {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
        </div>
        <div>
          {!hideStepLabel && <div className="text-white/70 text-xs">{step.stepLabel}</div>}
          <h3 className={`text-[#5dd4d9] font-bold leading-snug ${hideStepLabel ? "" : "mt-1"}`}>{step.title}</h3>
        </div>
      </div>
      <p className="text-white/80 text-sm mt-3 leading-relaxed">{step.desc}</p>
    </div>
  );
}

/** Tailwind sm/lg ke saath align: 1 / 2 / 3 columns */
function useAdmissionGridColumns(): 1 | 2 | 3 {
  const [cols, setCols] = useState<1 | 2 | 3>(1);
  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqSm = window.matchMedia("(min-width: 640px)");
    const update = () => {
      if (mqLg.matches) setCols(3);
      else if (mqSm.matches) setCols(2);
      else setCols(1);
    };
    update();
    mqLg.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);
  return cols;
}

/** Dot + step label + card; padosi dots se line — gap/padding bridge se continuous. */
function StepTimelineColumn({
  step,
  className = "",
  layout,
  index,
  total,
  gridCols,
}: {
  step: AdmissionStepItem;
  className?: string;
  layout: "grid" | "slider";
  index: number;
  total: number;
  /** Sirf layout === "grid" */
  gridCols: 1 | 2 | 3;
}) {
  let lineLeft = false;
  let lineRight = false;
  if (layout === "slider") {
    lineLeft = index > 0;
    lineRight = index < total - 1;
  } else {
    const isFirstInRow = index % gridCols === 0;
    const isLastInRow = index === total - 1 || (index + 1) % gridCols === 0;
    lineLeft = !isFirstInRow;
    lineRight = !isLastInRow;
  }

  const isGrid = layout === "grid";

  return (
    <div className={`flex flex-col items-stretch ${className}`}>
      <div className="relative flex h-10 w-full shrink-0 items-center justify-center">
        {lineLeft && (
          <div
            className={
              isGrid
                ? "absolute top-1/2 z-0 h-px -translate-y-1/2 bg-white/25 left-[-0.75rem] w-[calc(50%+0.75rem)]"
                : "absolute top-1/2 z-0 h-px -translate-y-1/2 bg-white/25 left-[-0.5rem] w-[calc(50%+0.5rem)] md:left-[-0.75rem] md:w-[calc(50%+0.75rem)]"
            }
            aria-hidden
          />
        )}
        {lineRight && (
          <div
            className={
              isGrid
                ? "absolute left-1/2 top-1/2 z-0 h-px -translate-y-1/2 bg-white/25 w-[calc(50%+0.75rem)]"
                : "absolute left-1/2 top-1/2 z-0 h-px -translate-y-1/2 bg-white/25 w-[calc(50%+0.5rem)] md:w-[calc(50%+0.75rem)]"
            }
            aria-hidden
          />
        )}
        <div
          className="relative z-10 h-3 w-3 shrink-0 rounded-full bg-[#00999E] ring-4 ring-[#00999E]/25"
          aria-hidden
        />
      </div>
      <p className="mt-2 text-center text-xs font-semibold tracking-wide text-white/90">{step.stepLabel}</p>
      <StepCard step={step} hideStepLabel className="mt-4 h-full w-full flex-1" />
    </div>
  );
}

export default function AdmissionProcessSection({
  steps,
  countryName = "Russia",
  countryAdjective = "Russian",
  introOverride,
  admissionAccent,
}: AdmissionProcessSectionProps) {
  const accentNode =
    admissionAccent ?? (
      <span className="text-[#5dd4d9]">Step-by-Step with Taksheela{" "}</span>
    );

  const stepCount = steps.length;
  const useSlider = stepCount >= SLIDER_MIN_STEPS;
  const sliderRef = useRef<Slider | null>(null);
  const gridCols = useAdmissionGridColumns();

  const sliderSettings: React.ComponentProps<typeof Slider> = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 8,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section id="admission-process" className="py-14 md:py-18 scroll-mt-24">
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        <div className="relative mx-auto max-w-7xl ">
          <div className=" rounded-3xl p-6 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-white">
                  MBBS in {countryName}{" "}
                </h2>
                <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-white">
                  Admission Process {accentNode}
                </h2>
                <p className="text-white/85 mt-3 max-w-4xl text-sm md:text-base leading-relaxed">
                  {introOverride ?? (
                    <>
                      The admission process for{" "}
                      <span className="text-[#5dd4d9] font-bold">MBBS in {countryName}</span> is simple and transparent
                      compared to many private medical colleges in India. {countryAdjective} universities generally do
                      not require additional entrance examinations or capitation fees. With the expert support of{" "}
                      <span className="text-[#5dd4d9] font-bold">Taksheela Institute of Education</span>, students can
                      complete the entire process smoothly and confidently.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Dot + step number + card per column (grid ya slider) */}
            <div className="mt-10">
              {useSlider ? (
                <>
                  <div className="admission-process-slider -mx-2 md:-mx-3 [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full [&_.slick-track]:flex [&_.slick-track]:items-stretch">
                    <Slider ref={sliderRef} {...sliderSettings}>
                      {steps.map((s, i) => (
                        <div key={s.stepLabel} className="px-2 md:px-3 h-full">
                          <StepTimelineColumn
                            step={s}
                            className="h-full"
                            layout="slider"
                            index={i}
                            total={stepCount}
                            gridCols={gridCols}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="mt-6 flex justify-center gap-3">
                    <button
                      type="button"
                      aria-label="Previous admission steps"
                      onClick={() => sliderRef.current?.slickPrev()}
                      className="h-10 w-10 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur transition-colors"
                    >
                      <FaChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next admission steps"
                      onClick={() => sliderRef.current?.slickNext()}
                      className="h-10 w-10 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur transition-colors"
                    >
                      <FaChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                  {steps.map((s, i) => (
                    <StepTimelineColumn
                      key={s.stepLabel}
                      step={s}
                      layout="grid"
                      index={i}
                      total={stepCount}
                      gridCols={gridCols}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
