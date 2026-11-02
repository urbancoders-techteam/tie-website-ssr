import type { ReactNode } from "react";
import { LuClipboardList, LuInfo, LuLightbulb } from "react-icons/lu";

type DubaiNoteCardProps = {
  title: string;
  items?: ReactNode[];
  children?: ReactNode;
};

function iconFor(title: string) {
  if (title.toLowerCase().includes("note")) return LuInfo;
  if (title.toLowerCase().includes("tip")) return LuLightbulb;
  return LuClipboardList;
}

export default function DubaiNoteCard({ title, items, children }: DubaiNoteCardProps) {
  const Icon = iconFor(title);

  return (
    <div className="mt-8 rounded-2xl border border-[#E6D9C4] bg-white px-5 py-6 text-left shadow-[0_16px_40px_-28px_rgba(18,32,51,0.45)] sm:px-8">
      <h3 className="flex items-center justify-center gap-2 text-center text-xl font-extrabold text-[#122033] sm:text-2xl">
        <Icon className="h-5 w-5 text-[#C6A35A]" aria-hidden />
        {title}
      </h3>
      {items ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#3E4A5A] marker:text-[#C6A35A]">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm leading-7 text-[#3E4A5A]">{children}</p>
      )}
    </div>
  );
}
