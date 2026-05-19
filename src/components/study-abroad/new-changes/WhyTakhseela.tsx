"use client";

import type { ComponentType } from "react";
import {
  FaBook,
  FaComments,
  FaGlobeAmericas,
  FaGraduationCap,
  FaHome,
  FaPlane,
  FaShieldAlt,
  FaSuitcase,
} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

import ModalTrigger from "@/components/ModalTrigger";
import { whatTaksheelaContent } from "@/constants/study_abroad/whatTaksheela";

type SvgIconProps = { className?: string };

const FEATURE_ICONS: Record<string, ComponentType<SvgIconProps>> = {
  roadmap: FaBook,
  match: FaGlobeAmericas,
  documents: FiFileText,
  scholarship: FaGraduationCap,
  visa: FaPlane,
  accommodation: FaHome,
  predeparture: FaSuitcase,
  postenrol: FaComments,
};

/** Icon tile: vivid gradient + ring + glow per card. */
const ICON_TILE: Record<string, { wrap: string; icon: string; glow: string }> = {
  roadmap: {
    wrap: "bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] ring-1 ring-[#93c5fd]/50",
    icon: "text-white drop-shadow-[0_0_6px_rgba(191,219,254,0.9)]",
    glow: "shadow-[0_0_28px_rgba(59,130,246,0.55)]",
  },
  match: {
    wrap: "bg-gradient-to-br from-[#14b8a6] to-[#0d9488] ring-1 ring-[#5eead4]/50",
    icon: "text-white drop-shadow-[0_0_6px_rgba(153,246,228,0.9)]",
    glow: "shadow-[0_0_28px_rgba(20,184,166,0.55)]",
  },
  documents: {
    wrap: "bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] ring-1 ring-[#c4b5fd]/50",
    icon: "text-white drop-shadow-[0_0_6px_rgba(221,214,254,0.9)]",
    glow: "shadow-[0_0_28px_rgba(139,92,246,0.55)]",
  },
  scholarship: {
    wrap: "bg-gradient-to-br from-[#22c55e] to-[#15803d] ring-1 ring-[#86efac]/50",
    icon: "text-white drop-shadow-[0_0_6px_rgba(187,247,208,0.9)]",
    glow: "shadow-[0_0_28px_rgba(34,197,94,0.55)]",
  },
  visa: {
    wrap: "bg-gradient-to-br from-[#38bdf8] to-[#0284c7] ring-1 ring-[#bae6fd]/50",
    icon: "text-white drop-shadow-[0_0_6px_rgba(186,230,253,0.9)]",
    glow: "shadow-[0_0_28px_rgba(56,189,248,0.55)]",
  },
  accommodation: {
    wrap: "bg-gradient-to-br from-[#f59e0b] to-[#d97706] ring-1 ring-[#fcd34d]/50",
    icon: "text-white drop-shadow-[0_0_6px_rgba(254,243,199,0.9)]",
    glow: "shadow-[0_0_28px_rgba(245,158,11,0.55)]",
  },
  predeparture: {
    wrap: "bg-gradient-to-br from-[#e879f9] to-[#c026d3] ring-1 ring-[#f5d0fe]/50",
    icon: "text-white drop-shadow-[0_0_6px_rgba(250,232,255,0.9)]",
    glow: "shadow-[0_0_28px_rgba(232,121,249,0.55)]",
  },
  postenrol: {
    wrap: "bg-gradient-to-br from-[#2dd4bf] to-[#0f766e] ring-1 ring-[#5eead4]/50",
    icon: "text-white drop-shadow-[0_0_6px_rgba(153,246,228,0.9)]",
    glow: "shadow-[0_0_28px_rgba(45,212,191,0.55)]",
  },
};

/** Fixed star positions — stable across renders. */
const STARS: { top: string; left: string; size: number; opacity: number }[] = [
  { top: "4%", left: "8%", size: 1, opacity: 0.5 },
  { top: "7%", left: "22%", size: 2, opacity: 0.35 },
  { top: "12%", left: "45%", size: 1, opacity: 0.6 },
  { top: "9%", left: "67%", size: 1, opacity: 0.45 },
  { top: "15%", left: "82%", size: 2, opacity: 0.4 },
  { top: "18%", left: "14%", size: 1, opacity: 0.55 },
  { top: "22%", left: "91%", size: 1, opacity: 0.5 },
  { top: "28%", left: "5%", size: 2, opacity: 0.3 },
  { top: "31%", left: "33%", size: 1, opacity: 0.65 },
  { top: "35%", left: "58%", size: 1, opacity: 0.4 },
  { top: "38%", left: "76%", size: 2, opacity: 0.35 },
  { top: "42%", left: "18%", size: 1, opacity: 0.5 },
  { top: "48%", left: "94%", size: 1, opacity: 0.45 },
  { top: "52%", left: "42%", size: 2, opacity: 0.3 },
  { top: "55%", left: "7%", size: 1, opacity: 0.55 },
  { top: "61%", left: "28%", size: 1, opacity: 0.4 },
  { top: "64%", left: "71%", size: 2, opacity: 0.35 },
  { top: "68%", left: "52%", size: 1, opacity: 0.5 },
  { top: "72%", left: "88%", size: 1, opacity: 0.45 },
  { top: "76%", left: "12%", size: 2, opacity: 0.3 },
  { top: "80%", left: "38%", size: 1, opacity: 0.6 },
  { top: "84%", left: "63%", size: 1, opacity: 0.4 },
  { top: "88%", left: "25%", size: 1, opacity: 0.5 },
  { top: "92%", left: "79%", size: 2, opacity: 0.35 },
];

function PaperPlaneDecoration() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-[2%] top-[5%] sm:right-[5%] sm:top-[6%] lg:right-[7%]"
    >
      <div className="absolute left-0 top-8 h-20 w-20 -translate-x-6 rounded-full bg-[#22d3ee]/20 blur-2xl sm:h-24 sm:w-24" />
      <svg
        className="relative h-[72px] w-[200px] sm:h-[88px] sm:w-[240px] lg:h-[96px] lg:w-[260px]"
        viewBox="0 0 260 96"
        fill="none"
      >
        <defs>
          <linearGradient id="why-plane-trail" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="35%" stopColor="#22d3ee" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="why-plane-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
          <linearGradient id="why-plane-wing" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
          <filter id="why-plane-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Curved flight path */}
        <path
          d="M8 68 C 52 58, 88 42, 128 32 C 148 26, 168 22, 188 20"
          stroke="url(#why-plane-trail)"
          strokeWidth="1.5"
          strokeDasharray="4 7"
          strokeLinecap="round"
        />
        {[
          [42, 58],
          [78, 46],
          [112, 36],
          [152, 26],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 3 ? 2.5 : 2}
            fill="#5eead4"
            fillOpacity={0.25 + i * 0.12}
          />
        ))}

        {/* Origami paper plane */}
        <g filter="url(#why-plane-glow)" transform="translate(178, 6) rotate(-12)">
          {/* bottom wing */}
          <path
            d="M14 52 L62 28 L48 58 L14 52 Z"
            fill="url(#why-plane-wing)"
            fillOpacity="0.85"
            stroke="#99f6e4"
            strokeWidth="0.6"
            strokeOpacity="0.5"
          />
          {/* top wing / body */}
          <path
            d="M0 24 L62 28 L38 44 L0 24 Z"
            fill="url(#why-plane-body)"
            stroke="#e0f2fe"
            strokeWidth="0.75"
            strokeOpacity="0.65"
          />
          {/* nose fold */}
          <path
            d="M0 24 L62 28 L14 52 L0 24 Z"
            fill="url(#why-plane-body)"
            fillOpacity="0.95"
            stroke="#cffafe"
            strokeWidth="0.75"
            strokeOpacity="0.7"
          />
          {/* center crease */}
          <path
            d="M0 24 L62 28"
            stroke="#f0fdfa"
            strokeWidth="0.5"
            strokeOpacity="0.55"
          />
          <path
            d="M62 28 L38 44"
            stroke="#ccfbf1"
            strokeWidth="0.4"
            strokeOpacity="0.4"
          />
        </g>
      </svg>
    </div>
  );
}

function SectionBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Base depth gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -8%, rgba(14,116,144,0.22) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30,58,95,0.45) 0%, transparent 50%), linear-gradient(180deg, #07101f 0%, #050a14 42%, #030712 100%)",
        }}
      />

      {/* Star field */}
      {STARS.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Horizontal cyan beam behind heading */}
      <div
        className="absolute left-1/2 top-[12%] h-px w-[min(92%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#22d3ee]/50 to-transparent blur-[1px] sm:top-[14%]"
      />
      <div className="absolute left-1/2 top-[11%] h-16 w-[min(85%,640px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18)_0%,transparent_72%)] blur-2xl sm:top-[13%] sm:h-20" />

      {/* Diagonal light streak — top right */}
      <div
        className="absolute -right-[10%] top-[6%] h-[2px] w-[55%] max-w-xl origin-top-right rotate-[-28deg] bg-gradient-to-r from-transparent via-[#38bdf8]/25 to-transparent blur-[0.5px]"
      />
      <div className="absolute -right-8 top-[4%] h-40 w-72 rotate-[-32deg] bg-gradient-to-br from-[#0ea5e9]/12 via-[#22d3ee]/8 to-transparent blur-3xl sm:h-52 sm:w-96" />

      {/* Ambient corner glows */}
      <div className="absolute -right-20 -top-28 h-[380px] w-[380px] rounded-full bg-[#0fb3a9]/20 blur-[100px] sm:h-[460px] sm:w-[460px]" />
      <div className="absolute -bottom-36 -left-28 h-[340px] w-[340px] rounded-full bg-[#0369a1]/25 blur-[90px] sm:h-[420px] sm:w-[420px]" />
      <div className="absolute left-1/2 top-0 h-64 w-[min(100%,900px)] -translate-x-1/2 rounded-full bg-[#0e7490]/12 blur-[80px]" />

      {/* Faint world-map line art — left */}
      <svg
        className="absolute bottom-[18%] left-[2%] h-44 w-44 text-white/[0.04] sm:h-56 sm:w-56 lg:left-[4%]"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
      >
        <ellipse cx="100" cy="100" rx="88" ry="52" />
        <path d="M30 95c25-18 55-22 70-8s45 8 70-12" />
        <path d="M45 115c30 12 60 8 90 4s40-4 65 14" />
        <path d="M55 75c20-10 50-6 75 6" />
      </svg>

      {/* Faint university building — right */}
      <svg
        className="absolute bottom-[12%] right-[3%] hidden h-40 w-40 text-[#38bdf8]/[0.06] sm:block lg:right-[6%] lg:h-52 lg:w-52"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M60 8L8 42v70h104V42L60 8z" />
        <path d="M60 8v104M8 42h104M35 52h8v28H35V52zm42 0h8v28H77V52z" />
        <path d="M48 112V72h24v40" />
      </svg>

      <PaperPlaneDecoration />
    </div>
  );
}

export default function WhyTaksheela() {
  const { eyebrow, heading, description, features, trustBanner, ctaText } =
    whatTaksheelaContent;

  return (
    <section className="relative overflow-hidden bg-[#030712] py-12 sm:py-14 lg:py-16">
      <SectionBackground />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="relative mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#22d3ee]/25 bg-[#0a1628]/80 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/95 shadow-[0_0_24px_rgba(34,211,238,0.08)] backdrop-blur-sm sm:text-[11px]">
            <span className="text-[#5eead4]" aria-hidden>
              ✦
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:mt-7 sm:text-3xl sm:leading-[1.2] lg:text-[2rem] xl:text-[2.125rem] xl:leading-snug">
            {heading.before}{" "}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#38bdf8] bg-clip-text text-transparent">
              {heading.highlightA}
            </span>{" "}
            {heading.middle}{" "}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#38bdf8] bg-clip-text text-transparent">
              {heading.highlightB}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 sm:mt-5 sm:text-base">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {features.map((f, index) => {
            const Icon = FEATURE_ICONS[f.id] ?? FaBook;
            const tile = ICON_TILE[f.id] ?? ICON_TILE.roadmap;
            const num = String(index + 1).padStart(2, "0");

            return (
              <article
                key={f.id}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-[#1e3a5f]/60 bg-[#0c1525]/75 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-5"
              >
                <Icon
                  className="pointer-events-none absolute -bottom-3 -right-3 h-24 w-24 text-white/[0.04] sm:h-28 sm:w-28"
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-2">
                  <span
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tile.wrap} ${tile.glow}`}
                  >
                    <span
                      className="absolute inset-[2px] rounded-[10px] bg-gradient-to-b from-white/25 to-transparent"
                      aria-hidden
                    />
                    <Icon className={`relative h-[22px] w-[22px] ${tile.icon}`} aria-hidden />
                  </span>
                  <span className="text-sm font-bold tabular-nums text-[#22d3ee]/90">{num}</span>
                </div>
                <h3 className="relative mt-4 text-[15px] font-bold leading-snug text-white sm:text-base">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-[13px] leading-relaxed text-slate-400 sm:text-sm">
                  {f.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="relative mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-[#1e3a5f]/50 bg-[#0c1525]/70 px-5 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-md sm:mt-10 sm:px-6 sm:py-5">
          <svg
            className="pointer-events-none absolute bottom-0 right-0 h-28 w-36 text-[#38bdf8]/[0.07] sm:h-36 sm:w-44"
            viewBox="0 0 120 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden
          >
            <path d="M60 8L8 42v70h104V42L60 8z" />
            <path d="M48 112V72h24v40" />
          </svg>
          <p className="relative flex items-center gap-3 text-left text-sm font-bold leading-snug text-white sm:text-base">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0fb3a9]/15 text-[#5eead4] ring-1 ring-[#22d3ee]/20">
              <FaShieldAlt className="h-5 w-5" aria-hidden />
            </span>
            {trustBanner}
          </p>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <ModalTrigger
            variant="custom"
            className="inline-flex w-full max-w-xl items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00d2ff] via-[#0fb3a9] to-[#06b6d4] px-6 py-3.5 text-center text-sm font-bold text-[#041018] shadow-[0_0_40px_rgba(34,211,238,0.45),0_12px_32px_rgba(15,179,169,0.3)] transition hover:brightness-110 sm:w-auto sm:px-10 sm:py-4 sm:text-[15px]"
            redirectPath="/thankyou"
          >
            {ctaText}
            <span aria-hidden>→</span>
          </ModalTrigger>
        </div>
      </div>
    </section>
  );
}
