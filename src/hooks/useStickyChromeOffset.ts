"use client";

import { useEffect, useState } from "react";

/** Height of `[data-site-sticky-chrome]` (header + breadcrumbs). */
export function useStickyChromeOffset(fallbackPx = 120) {
  const [offsetPx, setOffsetPx] = useState(fallbackPx);

  useEffect(() => {
    const measure = () => {
      const chrome = document.querySelector<HTMLElement>("[data-site-sticky-chrome]");
      if (chrome) setOffsetPx(chrome.offsetHeight);
    };

    measure();
    window.addEventListener("resize", measure);

    const chrome = document.querySelector<HTMLElement>("[data-site-sticky-chrome]");
    const ro = chrome ? new ResizeObserver(measure) : null;
    if (chrome && ro) ro.observe(chrome);

    return () => {
      window.removeEventListener("resize", measure);
      ro?.disconnect();
    };
  }, []);

  return offsetPx;
}
