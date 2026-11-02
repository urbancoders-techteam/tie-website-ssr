type DubaiSectionHeadingProps = {
  title: string;
  kicker?: string;
  align?: "center" | "left";
  size?: "md" | "lg";
  tone?: "ink" | "light";
  className?: string;
};

export default function DubaiSectionHeading({
  title,
  kicker = "Dubai",
  align = "center",
  size = "lg",
  tone = "ink",
  className = "",
}: DubaiSectionHeadingProps) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <div className={`${centered ? "mx-auto text-center" : "text-left"} ${className}`}>
      <p
        className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
          centered ? "justify-center" : ""
        } ${light ? "text-[#E8D5A3]" : "text-[#A7843E]"}`}
      >
        <span className={`h-px w-8 ${light ? "bg-[#E8D5A3]" : "bg-[#C6A35A]"}`} aria-hidden />
        <span className={`h-1.5 w-1.5 rotate-45 ${light ? "bg-[#E8D5A3]" : "bg-[#C6A35A]"}`} aria-hidden />
        {kicker}
        <span className={`h-1.5 w-1.5 rotate-45 ${light ? "bg-[#E8D5A3]" : "bg-[#C6A35A]"}`} aria-hidden />
        <span className={`h-px w-8 ${light ? "bg-[#E8D5A3]" : "bg-[#C6A35A]"}`} aria-hidden />
      </p>
      <h2
        className={`mt-3 font-extrabold tracking-tight ${
          light ? "text-white" : "text-[#122033]"
        } ${size === "lg" ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl lg:text-[28px]"}`}
      >
        {title}
      </h2>
    </div>
  );
}
