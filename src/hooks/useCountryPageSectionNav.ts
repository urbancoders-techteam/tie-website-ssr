"use client";

import { useCallback, useEffect, useRef } from "react";

/** Which section is active based on scroll position (below sticky header + tabs). */
export function getActiveSectionId(
  sectionIds: string[],
  scrollOffset: number
): string {
  if (!sectionIds.length) return "";
  const position = window.scrollY + scrollOffset + 4;
  let active = sectionIds[0];

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= position) active = id;
    else break;
  }

  return active;
}

type UseCountryPageSectionNavOptions = {
  sectionIds: string[];
  /** Pixels from viewport top (header + sticky tab bar). */
  scrollOffset: number;
  onActiveChange: (sectionId: string) => void;
};

export function useCountryPageSectionNav({
  sectionIds,
  scrollOffset,
  onActiveChange,
}: UseCountryPageSectionNavOptions) {
  const isScrollingToRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onActiveChangeRef = useRef(onActiveChange);
  onActiveChangeRef.current = onActiveChange;

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      isScrollingToRef.current = true;
      onActiveChangeRef.current(sectionId);

      const top = el.getBoundingClientRect().top + window.scrollY - scrollOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = setTimeout(() => {
        isScrollingToRef.current = false;
      }, 900);
    },
    [scrollOffset]
  );

  useEffect(() => {
    const updateActive = () => {
      if (isScrollingToRef.current) return;
      const next = getActiveSectionId(sectionIds, scrollOffset);
      if (next) onActiveChangeRef.current(next);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, [sectionIds, scrollOffset]);

  return { scrollToSection };
}
