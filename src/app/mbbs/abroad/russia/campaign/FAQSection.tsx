"use client";

import { useState, type ReactNode } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const highlight = (text: string) => (
  <span className="text-[#00999E] font-bold">{text}</span>
);

const FAQ_ITEMS: { question: string; answer: string | ReactNode }[] = [
  {
    question: "What hostel and food facilities are available for Indian students in Russia?",
    answer: (
      <>
        Most Russian medical universities provide dedicated {highlight("hostels for international students")} with essential amenities such as security, internet access, and study spaces. Many universities also offer {highlight("Indian food or mess facilities")}, helping students adjust comfortably to life abroad. {highlight("Taksheela Institute of Education")} guides students in selecting universities with suitable accommodation and dining options.
      </>
    ),
  },
  {
    question: "What is the duration of MBBS in Russia?",
    answer: "MBBS in Russia is typically 6 years, including 1 year of internship. The course is taught in English at most NMC-approved universities.",
  },
  {
    question: "What is the approximate cost of studying MBBS in Russia?",
    answer: "One of the main advantages of studying MBBS in Russia is its affordability. The total tuition fees for the entire program generally range between ₹18 lakh and ₹40 lakh, depending on the university. With guidance from Taksheela, students can explore universities that match their academic goals as well as their budget.",
  },
  {
    question: "Is Russia safe for Indian students pursuing MBBS?",
    answer: "Russia is considered a safe destination for international students, including those from India. Many universities have well-developed campuses, student hostels, and support services for international students. Taksheela also assists students with pre-departure guidance so they can adapt smoothly to their new environment.",
  },
  {
    question: "Is MBBS in Russia taught in English",
    answer: "Yes. Many reputed Russian medical universities offer MBBS programs in English for international students. Students may also learn basic Russian during the course, which helps with communication during clinical training and daily life.",
  },
  {
    question: "What is the duration of MBBS in Russia?",
    answer: "The MBBS program in Russia typically lasts 6 years, including academic study and clinical training in hospitals affiliated with the university.",
  },
  {
    question: "How many Indian students study MBBS in Russia?",
    answer: "Russia hosts thousands of Indian medical students every year, making it one of the most popular destinations for studying MBBS abroad.",
  },
  {
    question: "Is an MBBS degree from Russia valid in India?",
    answer: "Yes, an MBBS degree from Russia can be recognised in India if the university is approved by the National Medical Commission (NMC). After completing the program, graduates must qualify the required licensing examination in India, such as FMGE or NExT, according to current regulations",
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
                  className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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
