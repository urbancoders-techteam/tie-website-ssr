"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeTopBar from "@/components/HomeTopBar";
import type { StudyAbroadNavItem } from "./studyAbroadTypes";

export default function StudyAbroadHeader({
  containerClass,
  nav,
}: {
  containerClass: string;
  nav: readonly StudyAbroadNavItem[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <HomeTopBar />
      <div className="border-b border-[#E6D9C4]/80 bg-white/95 shadow-[0_10px_28px_-20px_rgba(198,163,90,0.55)] backdrop-blur">
        <div className={`${containerClass} flex h-[68px] items-center justify-between gap-6`}>
          <Link href="/" className="shrink-0" aria-label="Taksheela Institute of Education">
            <Image
              src="/images/TIE_LOGO.png"
              alt="Taksheela Institute of Education"
              width={132}
              height={48}
              priority
              className="h-auto w-[108px] transition-transform duration-300 ease-out hover:scale-[1.03] sm:w-[128px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Page sections">
            {nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  animation: "study-abroad-nav-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
                  animationDelay: `${90 + index * 70}ms`,
                }}
                className="study-abroad-nav-link relative px-3 py-2 text-[13.5px] font-semibold tracking-[0.01em] text-[#0f2744] transition-colors duration-300 ease-out hover:text-[#C6A35A] focus-visible:text-[#C6A35A]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-colors duration-200 hover:border-[#C6A35A]/30 hover:bg-[#C6A35A]/5 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-[#C6A35A] transition-transform duration-300 ease-out ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-full rounded-full bg-[#C6A35A] transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-[#C6A35A] transition-transform duration-300 ease-out ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav
            className="min-h-0 overflow-hidden border-t border-slate-100"
            aria-label="Page sections"
            aria-hidden={!open}
          >
            {nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${index * 55}ms` : "0ms" }}
                className={`block border-b border-slate-50 px-5 py-3 text-sm font-semibold text-[#0f2744] transition-all duration-300 ease-out last:border-b-0 hover:bg-[#C6A35A]/[0.04] hover:pl-7 hover:text-[#C6A35A] ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-[#C6A35A] via-[#E8D5A3] to-[#122033]" aria-hidden />

      <style>{`
        @keyframes study-abroad-nav-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .study-abroad-nav-link::after {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 4px;
          height: 2px;
          border-radius: 999px;
          background: #C6A35A;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s ease;
        }
        .study-abroad-nav-link:hover::after,
        .study-abroad-nav-link:focus-visible::after {
          transform: scaleX(1);
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes study-abroad-nav-in {
            from, to { opacity: 1; transform: none; }
          }
          .study-abroad-nav-link::after {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}
