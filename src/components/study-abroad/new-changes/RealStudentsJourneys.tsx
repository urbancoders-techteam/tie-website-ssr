"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import {
  FaGlobeAmericas,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPassport,
  FaPlaneDeparture,
  FaStar,
} from "react-icons/fa";
import ModalTrigger from "@/components/ModalTrigger";
import ScrollableSlider, {
  SCROLLABLE_SLIDE_COURSES_GRID_CLASS,
  SCROLLABLE_TRACK_COURSES_CLASS,
} from "@/components/study-abroad/new-changes/ScrollableSlider";
import {
  realStudentsJourneysContent,
  type RealStudentsJourneysGalleryItem,
} from "@/constants/study_abroad/realStudentsJourneys";

type SvgIconProps = { className?: string };

const JOURNEY_MILESTONES = ["01", "02", "03", "04"] as const;

const JOURNEY_SLIDER_ARROW_CLASS =
  "flex h-10 w-10 items-center justify-center rounded-full border border-[#1e3a5f]/60 bg-[#0c1525]/80 text-lg text-[#5eead4] shadow-sm transition hover:bg-[#0a1628]";

const JOURNEY_DECO: {
  Icon: ComponentType<SvgIconProps>;
  className: string;
  iconClass: string;
}[] = [
  {
    Icon: FaMapMarkerAlt,
    className: "left-[4%] top-[14%] sm:left-[8%] sm:top-[16%]",
    iconClass: "h-4 w-4 sm:h-6 sm:w-6",
  },
  {
    Icon: FaPlaneDeparture,
    className: "left-[18%] top-[38%] hidden sm:block",
    iconClass: "h-6 w-6 rotate-[-18deg]",
  },
  {
    Icon: FaPassport,
    className: "right-[38%] top-[8%] hidden lg:block",
    iconClass: "h-7 w-7 rotate-12",
  },
  {
    Icon: FaGlobeAmericas,
    className: "right-[2%] bottom-[10%] sm:right-[6%] sm:bottom-[14%]",
    iconClass: "h-7 w-7 sm:h-10 sm:w-10",
  },
  {
    Icon: FaGraduationCap,
    className: "left-[2%] bottom-[16%] sm:left-[10%] sm:bottom-[20%]",
    iconClass: "h-5 w-5 sm:h-7 sm:w-7 -rotate-12",
  },
];

function JourneyBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 50% at 50% 0%, rgba(34,211,238,0.1) 0%, transparent 45%), radial-gradient(ellipse 70% 55% at 15% 20%, rgba(34,211,238,0.1) 0%, transparent 50%), radial-gradient(ellipse 55% 45% at 88% 75%, rgba(20,184,166,0.08) 0%, transparent 48%), radial-gradient(ellipse 40% 30% at 50% 100%, rgba(7,27,58,0.9) 0%, transparent 55%), linear-gradient(165deg, #051129 0%, #071a38 45%, #030a18 100%)",
        }}
      />

      {/* Latitude arcs — desktop/tablet only */}
      <svg
        className="absolute inset-0 hidden h-full w-full text-[#22d3ee]/[0.07] sm:block"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <ellipse cx="600" cy="420" rx="520" ry="280" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="600" cy="420" rx="380" ry="200" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="600" cy="420" rx="240" ry="120" stroke="currentColor" strokeWidth="1" />
        <path d="M0 320 Q600 180 1200 360" stroke="currentColor" strokeWidth="1" />
        <path d="M0 520 Q600 640 1200 480" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Mobile: short bottom journey arc */}
      <svg
        className="absolute bottom-[18%] left-0 h-32 w-full text-[#5eead4]/20 sm:hidden"
        viewBox="0 0 400 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 20 90 Q 120 30, 220 50 T 380 25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          strokeLinecap="round"
        />
        <circle cx="20" cy="90" r="4" fill="#22d3ee" fillOpacity="0.6" />
        <circle cx="380" cy="25" r="4" fill="#22d3ee" fillOpacity="0.6" />
      </svg>

      {/* Curved path — sm+ */}
      <svg
        className="absolute left-0 top-0 hidden h-full w-[58%] text-[#5eead4]/25 sm:block"
        viewBox="0 0 420 700"
        fill="none"
        preserveAspectRatio="xMinYMid slice"
      >
        <defs>
          <linearGradient id="rsj-path-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path
          d="M 48 620 C 90 520, 120 440, 160 360 S 260 200, 320 120 S 380 60, 400 48"
          stroke="url(#rsj-path-grad)"
          strokeWidth="2"
          strokeDasharray="10 14"
          strokeLinecap="round"
        />
        {[
          { cx: 48, cy: 620 },
          { cx: 160, cy: 360 },
          { cx: 280, cy: 200 },
          { cx: 400, cy: 48 },
        ].map((pt, i) => (
          <g key={i}>
            <circle cx={pt.cx} cy={pt.cy} r="14" fill="#051129" stroke="#5eead4" strokeOpacity="0.35" />
            <circle cx={pt.cx} cy={pt.cy} r="5" fill="#22d3ee" fillOpacity="0.7" />
          </g>
        ))}
      </svg>

      <div
        className="absolute right-[6%] top-[10%] hidden h-28 w-28 rounded-full border-2 border-dashed border-[#22d3ee]/20 sm:block lg:right-[12%] lg:h-32 lg:w-32"
        style={{ transform: "rotate(-12deg)" }}
      />
      <div
        className="absolute right-[9%] top-[13%] hidden h-20 w-20 rounded-full border border-[#14b8a6]/25 sm:block lg:right-[14%]"
        style={{ transform: "rotate(8deg)" }}
      />

      <svg
        className="absolute bottom-[10%] left-[3%] h-14 w-14 text-[#22d3ee]/12 sm:bottom-[12%] sm:left-[6%] sm:h-24 sm:w-24 sm:text-[#22d3ee]/15"
        viewBox="0 0 80 80"
        fill="currentColor"
        aria-hidden
      >
        <path d="M40 4 L44 36 L40 40 L36 36 Z" />
        <path d="M40 76 L36 44 L40 40 L44 44 Z" opacity="0.5" />
        <path d="M4 40 L36 36 L40 40 L36 44 Z" opacity="0.35" />
        <path d="M76 40 L44 44 L40 40 L44 36 Z" opacity="0.35" />
        <circle cx="40" cy="40" r="6" fill="#051129" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div
        className="absolute left-0 right-0 top-[46%] hidden h-px sm:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent 6px, rgba(94,234,212,0.2) 6px, rgba(94,234,212,0.2) 10px)",
        }}
      />

      {JOURNEY_DECO.map(({ Icon, className, iconClass }) => (
        <div key={className} className={`absolute text-[#7dd3fc]/35 sm:text-[#7dd3fc]/40 ${className}`}>
          <span className="relative inline-flex">
            <span className="absolute inset-0 scale-[2] rounded-full bg-[#22d3ee]/12 blur-md sm:bg-[#22d3ee]/15" aria-hidden />
            <Icon
              className={`relative ${iconClass} drop-shadow-[0_0_12px_rgba(34,211,238,0.3)] sm:drop-shadow-[0_0_14px_rgba(34,211,238,0.35)]`}
              aria-hidden
            />
          </span>
        </div>
      ))}

      <div className="absolute left-[12%] top-[28%] hidden flex-col gap-16 sm:flex lg:left-[14%]">
        {JOURNEY_MILESTONES.map((step) => (
          <span
            key={step}
            className="font-mono text-[10px] font-bold tracking-widest text-[#5eead4]/25"
          >
            {step}
          </span>
        ))}
      </div>

      <div className="absolute -right-8 top-[42%] h-48 w-48 rounded-full bg-[#14b8a6]/10 blur-[60px] sm:-right-16 sm:top-1/2 sm:h-[min(100%,420px)] sm:w-[min(80%,380px)] sm:-translate-y-1/2 sm:blur-[80px] lg:right-0" />
      <div
        className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-[#0369a1]/12 blur-3xl sm:-left-20 sm:h-56 sm:w-56 lg:h-72 lg:w-72"
        aria-hidden
      />
    </div>
  );
}

function JourneyGalleryMobileCard({
  item,
  index,
}: {
  item: RealStudentsJourneysGalleryItem;
  index: number;
}) {
  return (
    <article className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a1628]/50 shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/[0.06]">
      <span
        className="absolute left-2.5 top-2.5 z-10 rounded-md bg-[#051129]/70 px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#5eead4]/80 backdrop-blur-sm"
        aria-hidden
      >
        {JOURNEY_MILESTONES[index]}
      </span>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-contain object-center p-2"
        sizes="100vw"
      />
    </article>
  );
}

function JourneyGalleryCard({
  item,
  index,
  className = "",
}: {
  item: RealStudentsJourneysGalleryItem;
  index: number;
  className?: string;
}) {
  return (
    <article
      className={`group relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a1628]/50 shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/[0.06] transition duration-300 lg:hover:border-[#5eead4]/35 lg:hover:shadow-[0_16px_48px_rgba(34,211,238,0.15)] ${className}`}
    >
      <span
        className="absolute left-2.5 top-2.5 z-10 rounded-md bg-[#051129]/70 px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#5eead4]/80 backdrop-blur-sm"
        aria-hidden
      >
        {JOURNEY_MILESTONES[index]}
      </span>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-contain object-center p-2 transition duration-500 lg:group-hover:scale-[1.03]"
        sizes="280px"
      />
    </article>
  );
}

export default function RealStudentsJourneys() {
  const { eyebrow, headingLine1, headingLine2, description, ctaText, gallery } =
    realStudentsJourneysContent;

  return (
    <section className="relative overflow-hidden bg-[#051129] py-10 sm:py-14 lg:py-20">
      <JourneyBackground />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-1 flex-col lg:max-w-xl xl:max-w-[26rem]">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/95 sm:px-4 sm:py-2 sm:text-[11px]">
              <FaStar className="h-3 w-3 shrink-0 text-[#5eead4] drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] sm:h-3.5 sm:w-3.5" aria-hidden />
              {eyebrow}
            </p>

            <h2 className="mt-4 text-2xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:mt-6 sm:text-4xl lg:text-[2.35rem] lg:leading-tight xl:text-4xl">
              {headingLine1}{" "}
              <span className="block sm:inline lg:block xl:inline">{headingLine2}</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base lg:text-[15px] lg:leading-relaxed">
              {description}
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-9">
              <ModalTrigger
                text={ctaText}
                variant="custom"
                className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-gradient-to-r from-[#22d3ee] via-[#14b8a6] to-[#0d9488] px-7 py-3.5 text-center text-sm font-bold text-white shadow-[0_0_24px_rgba(45,212,191,0.45),0_8px_24px_rgba(13,148,136,0.35)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:py-4 sm:text-[15px]"
                redirectPath="/thankyou"
              />
            </div>
          </div>

          <div className="relative w-full min-w-0 shrink-0 lg:max-w-[min(100%,28rem)] xl:max-w-[32rem]">
            <div
              aria-hidden
              className="absolute -right-2 -top-3 z-0 hidden h-[calc(100%+12px)] w-[calc(100%+8px)] rotate-[2deg] rounded-2xl border border-white/[0.06] bg-white/[0.03] lg:block"
            />
            <div
              aria-hidden
              className="absolute -bottom-2 -left-3 z-0 hidden h-[calc(100%+8px)] w-[calc(100%+12px)] -rotate-[3deg] rounded-2xl border border-[#22d3ee]/10 bg-[#0a1628]/40 lg:block"
            />

            <ScrollableSlider
              className="w-full min-w-0 lg:hidden"
              total={gallery.length}
              ariaLabel="Student journey gallery"
              autoplayMs={4500}
              mobileMq="(max-width: 1023px)"
              bleedOnMobile={false}
              trackClassName={SCROLLABLE_TRACK_COURSES_CLASS}
              arrowsClassName={JOURNEY_SLIDER_ARROW_CLASS}
              dotActiveClassName="w-7 bg-[#5eead4]"
              dotInactiveClassName="w-2 bg-[#5eead4]/30 hover:bg-[#5eead4]/50"
              getDotLabel={(index) => gallery[index].alt}
            >
              {(setSlideRef) =>
                gallery.map((item, index) => (
                  <div
                    key={item.id}
                    ref={setSlideRef(index)}
                    className={`${SCROLLABLE_SLIDE_COURSES_GRID_CLASS} flex flex-col`}
                  >
                    <JourneyGalleryMobileCard item={item} index={index} />
                  </div>
                ))
              }
            </ScrollableSlider>

            {/* Desktop: 2×2 grid */}
            <div className="relative z-[1] hidden grid-cols-2 gap-3 sm:gap-4 lg:grid">
              {gallery.map((item, index) => (
                <JourneyGalleryCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
