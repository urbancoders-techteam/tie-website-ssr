"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type LikeCounterEasing = "easeOutCubic" | "linear";

type LikeCounterProps = {
  target: number;
  durationMs?: number;
  /** Wait this long after intersecting before the count starts (staggered columns). */
  startDelayMs?: number;
  /** `linear` keeps digits changing steadily; `easeOutCubic` is the default elsewhere. */
  easing?: LikeCounterEasing;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  useGrouping?: boolean;
  className?: string;
};

export default function LikeCounter({
  target,
  durationMs = 1200,
  startDelayMs = 0,
  easing = "easeOutCubic",
  prefix = "",
  suffix = "",
  decimals = 0,
  useGrouping = true,
  className = "",
}: LikeCounterProps) {
  /** Start at target so SSR/crawlers see real figures, not zero. */
  const [value, setValue] = useState(target);
  const [started, setStarted] = useState(false);
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(target);
      return;
    }

    let frameId = 0;
    const startAt = performance.now();

    const applyEasing = (progress: number) => {
      if (easing === "linear") return progress;
      return 1 - (1 - progress) ** 3;
    };

    const tick = (now: number) => {
      const deadline = startAt + startDelayMs;
      if (now < deadline) {
        frameId = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - deadline;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = applyEasing(progress);
      setValue(target * eased);
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, target, durationMs, startDelayMs, easing]);

  const formatted = useMemo(() => {
    const rounded =
      decimals > 0 ? Number(value.toFixed(decimals)) : Math.round(value);
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping,
    }).format(rounded);
  }, [value, decimals, useGrouping]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
