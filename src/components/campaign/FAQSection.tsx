"use client";

import { useState, type ReactNode, Fragment } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const highlight = (text: string) => (
  <span className="text-[#00999E] font-bold">{text}</span>
);

export interface FAQItem {
  question: string;
  answer: string;
  highlightTerms?: string[];
}

function renderAnswer(answer: string, highlightTerms?: string[]): ReactNode {
  if (!highlightTerms?.length) return answer;
  const matches: { start: number; end: number; term: string }[] = [];
  for (const term of highlightTerms) {
    const idx = answer.indexOf(term);
    if (idx !== -1) matches.push({ start: idx, end: idx + term.length, term });
  }
  matches.sort((a, b) => a.start - b.start);
  const parts: ReactNode[] = [];
  let lastEnd = 0;
  for (const m of matches) {
    if (m.start > lastEnd) parts.push(answer.slice(lastEnd, m.start));
    parts.push(highlight(m.term));
    lastEnd = m.end;
  }
  if (lastEnd < answer.length) parts.push(answer.slice(lastEnd));
  return parts.length > 0
    ? parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)
    : answer;
}

export interface FAQSectionProps {
  items: FAQItem[];
}

function formatNumber(n: number) {
  return String(n).padStart(2, "0");
}

export default function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-14 md:py-18 bg-[#f9fafb] scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-gray-900">
          <span className="relative inline-block pb-1">
            Frequently asked{" "}
            <span className="text-[#00999E]">Questions</span>
          </span>{" "}
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-sm font-medium flex items-center justify-center">
                    {formatNumber(index + 1)}
                  </span>
                  <span className="flex-1 font-medium text-gray-800 text-sm md:text-base leading-snug pr-2">
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#00999E]"
                    aria-hidden
                  >
                    {isOpen ? (
                      <FaMinus className="w-4 h-4" />
                    ) : (
                      <FaPlus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pt-0 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100">
                      {renderAnswer(item.answer, item.highlightTerms)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
