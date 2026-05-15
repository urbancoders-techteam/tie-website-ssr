"use client";

import { FaCheck, FaExclamationTriangle, FaTimes } from "react-icons/fa";

import ModalTrigger from "@/components/ModalTrigger";
import {
  whyNotApplyAloneContent,
  type SelfApplicationStatus,
} from "@/constants/StudyAbroad/whyNotApplyAlone";

function SelfIcon({ type }: { type: SelfApplicationStatus }) {
  if (type === "warning") {
    return <FaExclamationTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f59e0b]" aria-hidden />;
  }

  return <FaTimes className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ef4444]" aria-hidden />;
}

export default function WhyNotApplyAlone() {
  const { eyebrow, heading, description, ctaText, comparisonRows } = whyNotApplyAloneContent;

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#e6faf8] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#00777e] sm:text-[11px]">
            <span className="text-[#0fb3a9]" aria-hidden>
              •
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#071b3a] sm:text-3xl lg:text-[2.125rem]">
            {heading.lineOne}
            <span className="block">{heading.lineTwo}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#506070] sm:text-base">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-6xl sm:mt-12">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_28px_80px_rgba(7,27,58,0.12)] ring-1 ring-[#d8ecea]">
            <div className="overflow-x-auto">
              <table className="min-w-[780px] w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th className="w-[41%] bg-[#071b3a] px-5 py-4 text-xs font-extrabold text-white sm:px-6">
                      Feature / Aspect
                    </th>
                    <th className="w-[26%] bg-[#274463] px-5 py-4 text-xs font-extrabold text-white sm:px-6">
                      <span className="inline-flex items-center gap-2">
                        <FaExclamationTriangle className="h-3.5 w-3.5 text-[#fbbf24]" aria-hidden />
                        Self-Application
                      </span>
                    </th>
                    <th className="w-[33%] bg-[#0fb3a9] px-5 py-4 text-xs font-extrabold text-white sm:px-6">
                      <span className="inline-flex items-center gap-2">
                        <FaCheck className="h-3.5 w-3.5 text-[#d9fff8]" aria-hidden />
                        With Taksheela
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#eefcfc]"}
                    >
                      <td className="border-t border-[#d5ecea] px-5 py-4 text-xs font-extrabold text-[#071b3a] sm:px-6">
                        {row.feature}
                      </td>
                      <td className="border-t border-[#d5ecea] px-5 py-4 text-xs text-[#506070] sm:px-6">
                        <span className="inline-flex items-start gap-1.5">
                          <SelfIcon type={row.selfType} />
                          <span className={row.selfType === "warning" ? "text-[#f97316]" : undefined}>
                            {row.self}
                          </span>
                        </span>
                      </td>
                      <td className="border-t border-[#d5ecea] px-5 py-4 text-xs text-[#506070] sm:px-6">
                        <span className="inline-flex items-start gap-1.5">
                          <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#16a34a]" aria-hidden />
                          <span>{row.taksheela}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-9 flex justify-center sm:mt-10">
          <ModalTrigger
            text={ctaText}
            variant="custom"
            className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-[#0fb3a9] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(15,179,169,0.35)] transition hover:bg-[#0ca89f] sm:w-auto sm:px-10 sm:py-4"
            redirectPath="/thankyou"
          />
        </div>
      </div>
    </section>
  );
}
