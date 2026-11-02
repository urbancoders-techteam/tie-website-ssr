"use client";

import { useLayoutEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export default function DubaiReveal({
  as,
  className = "",
  delay = 0,
  children,
}: {
  as?: ElementType;
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("shown");
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setState("shown");
      return;
    }
    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setState("shown");
        observer.disconnect();
      },
      { threshold: 0.16 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: state === "shown" ? `${delay}ms` : "0ms" }}
      className={`transition duration-700 ease-out ${
        state === "hidden" ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
