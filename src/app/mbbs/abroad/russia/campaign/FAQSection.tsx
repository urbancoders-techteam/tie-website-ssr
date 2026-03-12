"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Is MBBS from Russia valid in India?",
    answer: "Yes. MBBS degrees from NMC-recognised Russian medical universities are valid in India. Graduates must clear the FMGE (Foreign Medical Graduates Examination) to practise in India.",
  },
  {
    question: "What is the duration of MBBS in Russia?",
    answer: "MBBS in Russia is typically 6 years, including 1 year of internship. The course is taught in English at most NMC-approved universities.",
  },
  {
    question: "What is the fee structure for MBBS in Russia?",
    answer: "Annual tuition ranges from approximately ₹2.5 lakh to ₹8.5 lakh depending on the university. Living and other costs are additional.",
  },
  {
    question: "Is NEET required for MBBS in Russia?",
    answer: "Yes. NEET-UG qualification with 3-year validity is mandatory for Indian students who wish to practise in India after completing MBBS abroad.",
  },
  {
    question: "How is the Hostel and Food Facility for Indian Students in Russia?",
    answer: "Most universities offer on-campus hostels and mess facilities. Indian food options are available in many cities. Universities often assist with accommodation.",
  },
  {
    question: "When does the academic session start?",
    answer: "The primary intake is in September. Some universities also have a February intake. Applications usually open several months before the session.",
  },
  {
    question: "Are Russian medical degrees recognised globally?",
    answer: "Yes. Degrees from WHO and ECFMG-listed Russian universities are recognised globally, enabling graduates to pursue further studies or practice in many countries.",
  },
  {
    question: "What documents are required for admission?",
    answer: "You typically need 10th & 12th mark sheets, NEET score card, valid passport, passport-sized photographs, birth certificate, and other documents as specified by the university.",
  },
  {
    question: "Can I get education loan for MBBS in Russia?",
    answer: "Yes. Many Indian banks offer education loans for studying MBBS abroad. Eligibility and terms depend on the bank and the university you choose.",
  },
  {
    question: "How does Taksheela help with admission?",
    answer: "Taksheela provides end-to-end support: counselling, profile evaluation, university shortlisting, application and documentation assistance, and visa guidance.",
  },
];

function formatNumber(n: number) {
  return String(n).padStart(2, "0");
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="font-sans py-14 md:py-18 bg-[#f9fafb] scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          <span className="relative inline-block pb-1">
            Frequently asked
            <span
              className="absolute left-0 bottom-0 w-full h-0.5 bg-[#00999E] rounded-full"
              aria-hidden
            />
          </span>{" "}
          <span className="text-[#00999E]">Questions</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {FAQ_ITEMS.map((item, index) => {
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
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pt-0 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100">
                      {item.answer}
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
