"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

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

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => smoothScrollToTop();

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#00999E] text-white shadow-[0_4px_14px_0_rgba(0,153,158,0.4)] transition hover:bg-[#008c91] hover:shadow-[0_6px_20px_0_rgba(0,153,158,0.5)] focus:outline-none focus:ring-2 focus:ring-[#00999E] focus:ring-offset-2"
    >
      <FaChevronUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
