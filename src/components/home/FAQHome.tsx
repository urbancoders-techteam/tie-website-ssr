"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import ContainerWrapper from "../ContainerWrapper";
import { faqHome } from "@/constants/home";

const TEAL = "#00a88f";
const TITLE = "#0B162C";

export default function FAQHome() {
  const { eyebrow, title, description, cta, items } = faqHome;
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20" id="faq" aria-labelledby={`${baseId}-heading`}>
      <ContainerWrapper>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <div className="flex flex-col lg:col-span-5 lg:pt-0.5">
            <p
              className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] sm:text-xs"
              style={{ color: TEAL }}
            >
              <span className="opacity-70" aria-hidden>
                —
              </span>{" "}
              {eyebrow}{" "}
              <span className="opacity-70" aria-hidden>
                —
              </span>
            </p>
            <h2
              id={`${baseId}-heading`}
              className="mt-2.5 text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-[1.75rem] lg:text-[1.85rem]"
              style={{ color: TITLE }}
            >
              {title}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              {description}
            </p>
            <Link
              href={cta.href}
              className="mt-6 inline-flex w-fit items-center gap-0.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              style={{ backgroundColor: TEAL }}
            >
              {cta.label}
              <MdChevronRight className="h-[18px] w-[18px] shrink-0" aria-hidden />
            </Link>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-1.5 lg:col-span-7 lg:self-start">
            {items.map((item) => {
              const isOpen = openId === item.id;
              const qId = `${baseId}-q-${item.id}`;
              const aId = `${baseId}-a-${item.id}`;
              return (
                <div
                  key={item.id}
                  className={`rounded-lg border bg-white transition-[border-color,box-shadow] duration-150 ${
                    isOpen
                      ? "border-[#00a88f]/90 shadow-[0_1px_0_0_rgba(0,168,143,0.06)]"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    id={qId}
                    className="flex w-full items-start gap-2.5 px-3 py-2.5 text-left sm:px-3.5 sm:py-3"
                    aria-expanded={isOpen}
                    aria-controls={aId}
                    onClick={() => toggle(item.id)}
                  >
                    <span
                      className="min-w-0 flex-1 text-[13px] font-medium leading-snug tracking-tight sm:text-sm"
                      style={{ color: TITLE }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="mt-px flex h-6 w-6 shrink-0 items-center justify-center text-[#00a88f] transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(180deg)" : undefined }}
                      aria-hidden
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
                    <div className="min-h-0 overflow-hidden">
                      <p className="border-t border-slate-100 px-3 pb-2.5 pt-2 text-[13px] leading-relaxed text-slate-600 sm:px-3.5 sm:pb-3 sm:pt-2.5 sm:text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
