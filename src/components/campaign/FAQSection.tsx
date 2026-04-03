"use client";

import { useCallback, useState, type ReactNode, Fragment, memo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ABROAD_SECTION_ACCENT, ABROAD_SECTION_TITLE } from "@/constants/abroadSectionTheme";

export interface FAQItem {
  question: string;
  /** Single-block answer (default). */
  answer?: string;
  /** When set with `answerBullets`, shows intro paragraph + list + closing instead of `answer`. */
  answerIntro?: string;
  answerBullets?: string[];
  /** Text after bullets; `highlightTerms` apply to this (and `answer` when used). */
  answerClosing?: string;
  highlightTerms?: string[];
}

const ACCENT = "text-[#00999E]";

function renderAnswer(
  answer: string,
  highlightTerms: string[] | undefined,
  renderHighlight: (text: string) => ReactNode
): ReactNode {
  if (!highlightTerms?.length) return answer;

  const matches: { start: number; end: number; term: string }[] = [];
  for (const term of highlightTerms) {
    const idx = answer.indexOf(term);
    if (idx !== -1) matches.push({ start: idx, end: idx + term.length, term });
  }
  if (matches.length === 0) return answer;

  matches.sort((a, b) => a.start - b.start);

  const merged: { start: number; end: number }[] = [];
  for (const m of matches) {
    const prev = merged[merged.length - 1];
    if (prev && m.start < prev.end) {
      prev.end = Math.max(prev.end, m.end);
    } else {
      merged.push({ start: m.start, end: m.end });
    }
  }

  const parts: ReactNode[] = [];
  let lastEnd = 0;
  for (const m of merged) {
    if (m.start > lastEnd) parts.push(answer.slice(lastEnd, m.start));
    parts.push(renderHighlight(answer.slice(m.start, m.end)));
    lastEnd = m.end;
  }
  if (lastEnd < answer.length) parts.push(answer.slice(lastEnd));

  return parts.length > 0 ? (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  ) : (
    answer
  );
}

function formatItemNumber(n: number) {
  return String(n).padStart(2, "0");
}

export interface FAQSectionProps {
  items: FAQItem[];
  /** `abroad` uses TIE navy + serif title (MBBS abroad pages). Accent teal matches site theme. */
  variant?: "default" | "abroad";
  /**
   * Country slug for a stable section anchor, e.g. `georgia` → `id="faq-georgia"`.
   * Omit to keep `id="faq"` (campaign pages and backward-compatible links).
   */
  sectionSlug?: string;
  /** Root id for the section heading (`abroad`); defaults to `faq-heading`. */
  headingId?: string;
}

type FAQCardProps = {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  idPrefix: string;
  variant: "default" | "abroad";
  renderHighlight: (text: string) => ReactNode;
};

const FAQCard = memo(function FAQCard({
  item,
  index,
  isOpen,
  onToggle,
  idPrefix,
  variant,
  renderHighlight,
}: FAQCardProps) {
  const qId = `${idPrefix}-question-${index}`;
  const aId = `${idPrefix}-answer-${index}`;

  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50/50"
        aria-expanded={isOpen}
        aria-controls={aId}
        id={qId}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600">
          {formatItemNumber(index + 1)}
        </span>
        <span
          className={`min-w-0 flex-1 pr-2 text-sm font-medium leading-snug md:text-base ${
            variant === "abroad" ? "text-[#143C83]" : "text-gray-800"
          }`}
        >
          {item.question}
        </span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${ACCENT}`} aria-hidden>
          {isOpen ? <FaMinus className="h-4 w-4" /> : <FaPlus className="h-4 w-4" />}
        </span>
      </button>
      <div
        id={aId}
        role="region"
        aria-labelledby={qId}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 border-t border-gray-100 px-5 pb-4 pt-0 text-sm leading-relaxed text-gray-600 md:text-base">
            {item.answerBullets?.length ? (
              <>
                {item.answerIntro ? <p className="mb-0">{item.answerIntro}</p> : null}
                <ul className="list-disc space-y-1.5 pl-5 marker:text-gray-400">
                  {item.answerBullets.map((line, i) => (
                    <li key={i} className="min-w-0 break-words">
                      {line}
                    </li>
                  ))}
                </ul>
                {item.answerClosing ? (
                  <p className="mb-0 break-words">
                    {renderAnswer(item.answerClosing, item.highlightTerms, renderHighlight)}
                  </p>
                ) : null}
              </>
            ) : (
              <p className="mb-0 break-words">
                {renderAnswer(item.answer ?? "", item.highlightTerms, renderHighlight)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default function FAQSection({
  items,
  variant = "default",
  sectionSlug,
  headingId = "faq-heading",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /** Prefix for question/answer region ids — `faq-georgia-*` when slug set, else `faq-*` (campaigns). */
  const idPrefix = sectionSlug ? `faq-${sectionSlug}` : "faq";

  /** Public section anchor: `faq-{slug}` when slug set; otherwise stable `faq` for campaigns. */
  const sectionDomId = sectionSlug ? `faq-${sectionSlug}` : "faq";

  const renderHighlight = useCallback((text: string) => <span className={`${ACCENT} font-bold`}>{text}</span>, []);

  const heading =
    variant === "abroad" ? (
      <h2 id={headingId} className={`text-center ${ABROAD_SECTION_TITLE}`}>
        Frequently asked <span className={ABROAD_SECTION_ACCENT}>Questions</span>
      </h2>
    ) : (
      <h2 className="font-sans text-xl font-[700] text-gray-900 sm:text-2xl md:text-4xl">
        <span className="relative inline-block pb-1">
          Frequently asked <span className="text-[#00999E]">Questions</span>
        </span>
      </h2>
    );

  return (
    <section
      id={sectionDomId}
      className="scroll-mt-24 overflow-x-hidden bg-[#f9fafb] py-12 sm:py-14 md:py-16"
      aria-labelledby={variant === "abroad" ? headingId : undefined}
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4">
        {heading}

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {items.map((item, index) => (
            <FAQCard
              key={`${item.question}-${index}`}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
              idPrefix={idPrefix}
              variant={variant}
              renderHighlight={renderHighlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
