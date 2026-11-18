import type { ReactNode } from "react";

export default function StudyAbroadCta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`study-abroad-cta inline-flex items-center justify-center rounded-full border-2 border-[var(--sa-button-border,transparent)] bg-[var(--sa-accent,#C6A35A)] px-6 py-2.5 text-sm font-semibold text-[var(--sa-on-accent,#122033)] shadow-[0_14px_30px_-16px_color-mix(in_srgb,var(--sa-accent,#C6A35A)_95%,transparent)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--sa-accent-hover,#D4B56E)] ${className}`}
    >
      {children}
    </a>
  );
}
