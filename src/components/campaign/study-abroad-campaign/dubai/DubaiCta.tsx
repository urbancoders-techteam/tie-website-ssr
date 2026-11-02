import type { ReactNode } from "react";

export default function DubaiCta({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`dubai-cta inline-flex items-center justify-center rounded-full bg-[#C6A35A] px-6 py-2.5 text-sm font-semibold text-[#122033] shadow-[0_14px_30px_-16px_rgba(198,163,90,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D4B56E] ${className}`}
    >
      {children}
    </a>
  );
}
