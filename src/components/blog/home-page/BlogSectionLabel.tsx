export default function BlogSectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-[#00999E]">
      <span>{children}</span>
      <span className="h-px flex-1 bg-[#CBECEF]" aria-hidden />
    </div>
  );
}

