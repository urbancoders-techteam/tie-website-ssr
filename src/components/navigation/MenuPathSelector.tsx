import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { universityGroups } from "@/constants/navigation/university";

export default function MenuPathSelector({ selected, onSelect, onNavigate }: { selected: number; onSelect: (index: number) => void; onNavigate: () => void }) {
  return <div className="bg-[#f2f9f9] p-4">
    <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#568083]">Explore by path</p>
    <div className="space-y-1.5">{universityGroups.map((item, index) => <button key={item.label} type="button" aria-pressed={selected === index} onClick={() => onSelect(index)} className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00999E] ${selected === index ? "bg-[#0f3441] text-white shadow-sm" : "text-[#34505c] hover:bg-white"}`}><span aria-hidden className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg ${selected === index ? "bg-white/10" : "bg-white shadow-sm"}`}>{item.icon}</span><span className="min-w-0 flex-1">{item.label}</span><FiArrowRight aria-hidden className={`h-4 w-4 shrink-0 ${selected === index ? "text-[#69ded5]" : "text-[#8da4a6]"}`} /></button>)}</div>
    <div className="mt-4 border-t border-[#d8eaea] pt-3">{universityGroups.map(item => <Link key={item.href} href={item.href} onClick={onNavigate} className="group flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-xs font-bold text-[#007f83] transition hover:bg-white">Explore {item.label}<FiArrowRight aria-hidden className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" /></Link>)}</div>
  </div>;
}
