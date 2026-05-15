"use client";

import { FaCheck, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import RegisterForm from "@/components/home/RegisterForm";
import { getStartedTodayContent } from "@/constants/StudyAbroad/getStartedToday";

export default function GetStartedToday() {
  const { eyebrow, heading, description, benefits, contact } = getStartedTodayContent;

  return (
    <section className="relative isolate overflow-hidden bg-[#0a1830] py-14 sm:py-16 lg:py-20">
      <div
        className="absolute inset-y-0 right-0 w-full bg-[#00999e] lg:w-[44%]"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 left-[54%] hidden w-24 -skew-x-[7deg] bg-[#0a1830] lg:block"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(20,184,166,0.16)_0,transparent_28%),radial-gradient(circle_at_90%_75%,rgba(255,255,255,0.12)_0,transparent_24%)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:gap-14 lg:px-8">
        <div className="max-w-xl text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/85 ring-1 ring-white/15">
            <span className="text-[#5eead4]" aria-hidden>
              •
            </span>
            {eyebrow}
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.55rem]">
            {heading}
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/76 sm:text-base">
            {description}
          </p>

          <ul className="mt-7 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm leading-snug text-white/86">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#5eead4] ring-1 ring-white/12">
                  <FaCheck className="h-3 w-3" aria-hidden />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 space-y-3 text-sm text-white/78">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="h-3.5 w-3.5 text-[#5eead4]" aria-hidden />
              <span>{contact.phone}</span>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="h-3.5 w-3.5 text-[#5eead4]" aria-hidden />
              <span>{contact.email}</span>
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <RegisterForm floating={false} />
        </div>
      </div>
    </section>
  );
}
