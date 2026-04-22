"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  FaChalkboardTeacher,
  FaClipboardList,
  FaLaptopHouse,
  FaRegFileAlt,
} from "react-icons/fa";
import ContainerWrapper from "../ContainerWrapper";
import HomeSectionHeader from "./HomeSectionHeader";
import ModalTrigger from "../ModalTrigger";
import { testPrepSectionHome } from "@/constants/home";

type TestPrepTest = {
  id: string;
  name: string;
  target: string;
  statEyebrow: string;
  statValue: string;
};

type TestPrepFeature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const NAVY = "#1a2b48";
const TEAL = "#00a699";

const FEATURE_ICONS: Record<
  string,
  { Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; wrap: string; color: string }
> = {
  plans: {
    Icon: FaClipboardList,
    wrap: "bg-amber-100",
    color: "#d97706",
  },
  trainers: {
    Icon: FaChalkboardTeacher,
    wrap: "bg-emerald-100",
    color: "#059669",
  },
  mocks: {
    Icon: FaRegFileAlt,
    wrap: "bg-sky-100",
    color: "#0284c7",
  },
  modes: {
    Icon: FaLaptopHouse,
    wrap: "bg-violet-100",
    color: "#7c3aed",
  },
};

export default function TestPrepSectionHome() {
  const data = testPrepSectionHome;
  const [activeId, setActiveId] = useState(data.tests[0]?.id ?? "ielts");

  const activeTest = useMemo(
    () => data.tests.find((t: TestPrepTest) => t.id === activeId) ?? data.tests[0],
    [activeId, data.tests],
  );

  return (
    <section
      className="w-full py-12 md:py-14 lg:py-16 xl:py-[4.5rem]"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <ContainerWrapper>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          {/* Left — ~60% */}
          <div className="min-w-0 lg:col-span-7">
            <HomeSectionHeader
              headerClassName="text-center lg:text-left"
              eyebrow={data.eyebrow}
              title={data.title}
              subtitle={data.description}
              eyebrowClassName="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.28em] lg:text-left"
              titleClassName="mt-3 text-balance text-center text-2xl font-bold leading-tight text-[#1a2b48] sm:text-3xl md:text-[1.85rem] lg:text-left lg:text-[2rem] xl:text-[2.1rem]"
              subtitleClassName="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] lg:mx-0 lg:max-w-none lg:text-left lg:text-base"
              markerClassName="opacity-70"
              eyebrowStyle={{ color: TEAL }}
            />

            {/* Test cards */}
            <div
              className="mt-8 flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:thin] sm:gap-3 lg:mt-9 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300/90"
              role="tablist"
              aria-label="Select test type"
            >
              {data.tests.map((t: TestPrepTest) => {
                const selected = t.id === activeId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveId(t.id)}
                    className={`min-w-[5.5rem] shrink-0 snap-start rounded-xl border px-3 py-2.5 text-left transition sm:min-w-[6rem] sm:px-3.5 sm:py-3 ${
                      selected
                        ? "shadow-sm"
                        : "border-slate-200/90 bg-white hover:border-slate-300"
                    }`}
                    style={
                      selected
                        ? {
                            borderColor: TEAL,
                            backgroundColor: "#fff",
                          }
                        : undefined
                    }
                  >
                    <span
                      className="block text-[0.8125rem] font-bold sm:text-sm"
                      style={{ color: NAVY }}
                    >
                      {t.name}
                    </span>
                    <span
                      className={`mt-0.5 block text-[0.6875rem] font-medium sm:text-xs ${
                        selected ? "" : "text-slate-500"
                      }`}
                      style={selected ? { color: TEAL } : undefined}
                    >
                      {t.target}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Features 2×2 */}
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 lg:mt-9">
              {data.features.map((f: TestPrepFeature) => {
                const cfg = FEATURE_ICONS[f.icon] ?? FEATURE_ICONS.plans;
                const { Icon } = cfg;
                return (
                  <li key={f.id} className="flex gap-3">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${cfg.wrap}`}
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" style={{ color: cfg.color }} />
                    </span>
                    <div className="min-w-0">
                      <p
                        className="text-sm font-bold leading-snug sm:text-[0.9375rem]"
                        style={{ color: NAVY }}
                      >
                        {f.title}
                      </p>
                      <p className="mt-1 text-[0.8125rem] leading-relaxed text-slate-600 sm:text-sm">
                        {f.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 lg:mt-9">
              <ModalTrigger
                variant="custom"
                className="inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:brightness-105 sm:w-auto sm:px-5 sm:text-base"
           
                style={{ backgroundColor: TEAL }}
              >
                Book a Free Counsellor{" "}
                <span className="ml-1 inline-block" style={{fontSize: "1.5rem"}} aria-hidden>
                  ›
                </span>
              </ModalTrigger>
            </div>
          </div>

          {/* Right — image + stat card */}
          <div className="relative mx-auto w-full max-w-lg lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg ring-1 ring-slate-200/80 sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src={data.heroImage}
                alt="Students preparing for English and aptitude tests with laptops in a modern classroom"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority={false}
              />

              <div
                className="absolute bottom-4 left-4 z-10 max-w-[min(100%,240px)] rounded-xl border border-slate-200/80 bg-white p-4 shadow-lg sm:bottom-5 sm:left-5 sm:max-w-[260px] sm:p-4"
              >
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-[0.625rem]">
                  {activeTest.statEyebrow}
                </p>
                <p
                  className="mt-1.5 text-2xl font-bold leading-none sm:text-[1.65rem]"
                  style={{ color: NAVY }}
                >
                  {activeTest.statValue}
                </p>
                <p className="mt-2 text-[0.75rem] leading-snug text-slate-500 sm:text-[0.8125rem]">
                  After Taksheela coaching
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
