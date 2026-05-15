"use client";

import Image from "next/image";
import { useState, type FocusEvent } from "react";
import { FaArrowRight, FaLightbulb } from "react-icons/fa";
import { FiMic, FiTriangle } from "react-icons/fi";

import ModalTrigger from "@/components/ModalTrigger";
import {
  testPreparationContent,
  type TestPreparationCategory,
  type TestPreparationExam,
} from "@/constants/study_abroad/testPreparation";

const CATEGORY_ICONS = {
  academic: FiTriangle,
  english: FiMic,
} as const;

function ExamCard({
  exam,
  isExpanded,
  onActivate,
  onDeactivate,
}: {
  exam: TestPreparationExam;
  isExpanded: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    const nextFocusedElement = event.relatedTarget as Node | null;

    if (!nextFocusedElement || !event.currentTarget.contains(nextFocusedElement)) {
      onDeactivate();
    }
  };

  return (
    <article
      tabIndex={0}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={handleBlur}
      className={`group rounded-2xl border bg-white p-4 shadow-[0_8px_24px_rgba(7,27,58,0.04)] outline-none transition-all duration-300 ease-out ${
        isExpanded
          ? "border-[#10bdb5] shadow-[0_14px_36px_rgba(16,189,181,0.13)]"
          : "border-[#cfe9e7] hover:border-[#10bdb5] focus:border-[#10bdb5]"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eefcfc]">
          <Image src={exam.iconSrc} alt="" width={18} height={18} aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-extrabold leading-tight text-[#071b3a]">{exam.title}</h3>
          <p className="mt-1 text-[11px] leading-snug text-[#506070]">{exam.subtitle}</p>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
          isExpanded ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[12px] leading-relaxed text-[#506070]">{exam.description}</p>
          <ModalTrigger
            variant="custom"
            redirectPath="/thankyou"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#071b3a] px-4 py-2 text-[11px] font-extrabold text-white shadow-[0_8px_18px_rgba(7,27,58,0.18)] transition hover:bg-[#0fb3a9]"
          >
            Learn More
            <FaArrowRight className="h-3 w-3" aria-hidden />
          </ModalTrigger>
        </div>
      </div>
    </article>
  );
}

function ExamColumn({ category }: { category: TestPreparationCategory }) {
  const [expandedExamId, setExpandedExamId] = useState<string | null>(null);
  const Icon = CATEGORY_ICONS[category.id];

  return (
    <div className="min-w-0">
      <div className="mb-4 flex items-center gap-3 border-b border-[#cfe9e7] pb-3">
        <Icon className="h-5 w-5 text-[#7c6f91]" aria-hidden />
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#00999e]">
          {category.title}
        </p>
      </div>

      <div className="space-y-3">
        {category.exams.map((exam) => (
          <ExamCard
            key={exam.id}
            exam={exam}
            isExpanded={expandedExamId === exam.id}
            onActivate={() => setExpandedExamId(exam.id)}
            onDeactivate={() => setExpandedExamId(null)}
          />
        ))}
      </div>
    </div>
  );
}

export default function TestPreparation() {
  const { eyebrow, heading, intro, secondaryIntro, image, categories, note } = testPreparationContent;

  return (
    <section className="bg-[#f1fbfa] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#dff8f6] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#00777e] sm:text-[11px]">
            <span className="text-[#0fb3a9]" aria-hidden>
              •
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#071b3a] sm:text-3xl lg:text-[2.125rem]">
            {heading.prefix} <span className="text-[#0fb3a9]">{heading.highlight}</span>
          </h2>
          <span className="mt-3 block h-px w-12 bg-[#071b3a]" aria-hidden />
          <div className="mt-5 max-w-3xl space-y-4 text-sm leading-relaxed text-[#506070] sm:text-[15px]">
            <p>{intro}</p>
            <p>{secondaryIntro}</p>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_280px_1fr] lg:items-start xl:grid-cols-[1fr_320px_1fr] xl:gap-8">
          <ExamColumn category={categories[0]} />

          <div className="relative order-first mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-[2rem] shadow-[0_22px_50px_rgba(7,27,58,0.12)] lg:order-none lg:mt-12 xl:max-w-[300px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 260px, 320px"
            />
          </div>

          <ExamColumn category={categories[1]} />
        </div>

        <div className="mt-10 rounded-2xl border border-[#f8bd5a] bg-[#fff8e8] px-5 py-5 sm:px-7 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <FaLightbulb className="mt-1 h-5 w-5 shrink-0 text-[#f59e0b]" aria-hidden />
              <div>
                <h3 className="text-sm font-extrabold text-[#071b3a]">{note.title}</h3>
                <p className="mt-2 max-w-4xl text-xs leading-relaxed text-[#506070] sm:text-[13px]">
                  {note.body}
                </p>
              </div>
            </div>
            <ModalTrigger
              text={note.ctaText}
              variant="custom"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[#0fb3a9] px-6 py-3 text-center text-xs font-extrabold text-white shadow-[0_10px_26px_rgba(15,179,169,0.28)] transition hover:bg-[#0ca89f] sm:w-auto"
              redirectPath="/thankyou"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
