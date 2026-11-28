"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { universityGroups } from "@/constants/navigation/university";
import { FiArrowRight, FiGlobe, FiSearch } from "react-icons/fi";
import MenuPathSelector from "./MenuPathSelector";

export default function UniversityMenu({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [groupIndex, setGroupIndex] = useState(0);
  const [query, setQuery] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const group = universityGroups[groupIndex];
  const active = pathname.startsWith("/mbbs") || pathname.startsWith("/study-abroad/country/");

  useEffect(() => {
    setOpen(false);
    setGroupIndex(pathname.startsWith("/study-abroad/country/") ? 1 : 0);
  }, [pathname]);

  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  const navigate = () => { setOpen(false); onNavigate?.(); };

  return (
    <div ref={root} className={mobile ? "py-2" : "relative"}
      onMouseEnter={() => { if (!mobile) setOpen(true); }}
      onMouseLeave={() => { if (!mobile) setOpen(false); }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
      onKeyDown={event => { if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); } }}>
      <button ref={trigger} type="button" aria-expanded={open} onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 border-b-[3px] pb-1 font-medium ${mobile ? "text-base" : "text-sm xl:text-[15px]"} ${active ? "border-[#00999E] text-[#00999E]" : "border-transparent text-black hover:text-[#00999E]"}`}>
        Country
      </button>
      {open && (
        <div className={mobile ? "mt-3" : "absolute left-1/2 top-full z-50 w-[600px] max-w-[90vw] -translate-x-1/2 pt-4"}>
          <div className={`overflow-hidden rounded-2xl border border-[#dbe9eb] bg-white shadow-[0_20px_55px_-18px_rgba(15,39,68,0.3)] ${mobile ? "" : "grid grid-cols-[200px_minmax(0,1fr)]"}`}>
            <MenuPathSelector selected={groupIndex} onSelect={index => { setGroupIndex(index); setQuery(""); }} onNavigate={navigate} />
            <div className="min-w-0 p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e4f7f6] text-[#00999E]"><FiGlobe aria-hidden className="h-5 w-5" /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00999E]">Find your destination</p><h2 className="mt-0.5 text-base font-bold text-[#102c3b]">{group.label} Countries</h2></div></div>
              <div className="relative mb-3"><FiSearch aria-hidden className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input type="search" aria-label={`Search ${group.label} countries`} placeholder="Search country…" value={query} onChange={event => setQuery(event.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-[#f8fafb] py-2.5 pl-9 pr-3 text-sm text-slate-800 outline-none focus:border-[#00999E] focus:ring-2 focus:ring-[#00999E]/20" /></div>
              <ul className={`grid max-h-[252px] gap-2 overflow-y-auto pr-1 ${mobile ? "grid-cols-1" : "grid-cols-2"}`}>
                {group.countries.filter(country => country.name.toLowerCase().includes(query.trim().toLowerCase())).map(country => (
                  <li key={country.href}><Link href={country.href} onClick={navigate} aria-current={pathname === country.href ? "page" : undefined}
                    className="group flex min-h-[48px] items-center gap-2.5 rounded-xl border border-[#e5eeee] bg-white px-3 py-2 text-sm font-semibold text-[#24434e] transition hover:border-[#8ed5d2] hover:bg-[#f0fbfa] hover:text-[#007f83] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00999E]">
                    <span aria-hidden className="text-xl">{country.flag}</span><span className="min-w-0 flex-1">{country.name}</span><FiArrowRight aria-hidden className="h-4 w-4 shrink-0 text-[#8ca8aa] transition group-hover:translate-x-0.5 group-hover:text-[#00999E]" />
                  </Link></li>
                ))}
                {!group.countries.some(country => country.name.toLowerCase().includes(query.trim().toLowerCase())) && <li className="py-4 text-sm text-slate-500">No countries found.</li>}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
