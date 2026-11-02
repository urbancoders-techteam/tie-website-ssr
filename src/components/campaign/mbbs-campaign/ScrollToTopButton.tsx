"use client";

import { useEffect, useState } from "react";
import { FaChevronUp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const SCROLL_THRESHOLD = 400;
const DURATION_MS = 800;

// Ease-in-out cubic: smooth start and end
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollToTop() {
  const start = window.scrollY;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / DURATION_MS, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, start * (1 - eased));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function ScrollToTopButton({
  phoneNumber,
}: {
  phoneNumber?: string;
}) {
  const DEFAULT_PHONE_NUMBER = "+919831241212";
  const activePhoneNumber = phoneNumber ?? DEFAULT_PHONE_NUMBER;

  // Floating Call + WhatsApp buttons (uses default phone; can be overridden via prop).
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => smoothScrollToTop();

  const floatingCallWhatsApp = activePhoneNumber ? (
    <div
      className={`fixed bottom-21 right-5 z-50 flex flex-col items-end gap-3 sm:${
        visible ? "bottom-22" : "bottom-10"
      }`}
    >
      <a
        href={`tel:${activePhoneNumber.replace(/\s/g, "")}`}
        aria-label={`Call ${activePhoneNumber}`}
        className="inline-flex items-center justify-center rounded-full bg-white/95 border border-[#fa1212] shadow-[0_4px_14px_0_rgba(0,153,158,0.4)] p-3 hover:bg-white hover:shadow-[0_6px_20px_0_rgba(0,153,158,0.5)] transition-colors"
      >
        <FaPhoneAlt
          className="w-5 h-5 text-[#fa1212]"
          aria-hidden
        />
      </a>

      <a
        href={`https://wa.me/${activePhoneNumber.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp: ${activePhoneNumber}`}
        className="inline-flex items-center justify-center rounded-full bg-white/95 border border-[#00999E] shadow-[0_4px_14px_0_rgba(0,153,158,0.4)] p-2 hover:bg-white hover:shadow-[0_6px_20px_0_rgba(0,153,158,0.5)] transition-colors"
      >
        <FaWhatsapp
          className="w-7 h-7 text-[#25D366]"
          aria-hidden
        />
      </a>
    </div>
  ) : null;

  return (
    <>
      {floatingCallWhatsApp}
      {visible && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#00999E] text-white shadow-[0_4px_14px_0_rgba(0,153,158,0.4)] transition hover:bg-[#008c91] hover:shadow-[0_6px_20px_0_rgba(0,153,158,0.5)] focus:outline-none focus:ring-2 focus:ring-[#00999E] focus:ring-offset-2"
        >
          <FaChevronUp className="h-5 w-5" aria-hidden />
        </button>
      )}
    </>
  );
}
