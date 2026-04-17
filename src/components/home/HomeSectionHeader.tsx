import type { CSSProperties, ReactNode } from "react";

type HomeSectionHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  headerClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  marker?: string;
  markerClassName?: string;
  eyebrowStyle?: CSSProperties;
};

export default function HomeSectionHeader({
  eyebrow,
  title,
  subtitle,
  headerClassName = "mx-auto max-w-4xl text-center",
  eyebrowClassName = "text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#00a88f] sm:text-xs",
  titleClassName = "mt-3 text-balance text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl md:text-[1.85rem] lg:text-[2rem]",
  subtitleClassName = "mx-auto mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] md:text-base",
  marker = "—",
  markerClassName = "text-[#00a88f]/70",
  eyebrowStyle,
}: HomeSectionHeaderProps) {
  return (
    <header className={headerClassName}>
      <p className={eyebrowClassName} style={eyebrowStyle}>
        <span className={markerClassName} aria-hidden>
          {marker}
        </span>{" "}
        {eyebrow}{" "}
        <span className={markerClassName} aria-hidden>
          {marker}
        </span>
      </p>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
    </header>
  );
}
