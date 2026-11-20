"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getUniversityDirectory, universityGroups } from "@/constants/navigation/universityDirectory";

export default function UniversityDirectoryMenu({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const [groupIndex, setGroupIndex] = useState(0);
  const [countryIndex, setCountryIndex] = useState(0);
  const [query, setQuery] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const group = universityGroups[groupIndex];
  const country = group.countries[countryIndex];
  const universities = getUniversityDirectory(groupIndex, country.slug).filter(item => item.name.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const dismiss = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  return <div ref={root} className={mobile ? "py-2" : "relative"} onMouseEnter={() => { if (!mobile) setOpen(true); }} onMouseLeave={() => { if (!mobile) setOpen(false); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }} onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}>
    <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className={`flex items-center gap-1 border-b-[3px] border-transparent pb-1 font-medium text-black hover:text-[#00999E] ${mobile ? "text-base" : "text-sm xl:text-[15px]"}`}>University</button>
    {open && <div className={mobile ? "mt-3" : "absolute left-1/2 top-full z-50 w-[720px] max-w-[90vw] -translate-x-1/2 pt-4"}>
      <div className="grid gap-4 rounded-2xl border border-[#00999E]/20 bg-white p-4 shadow-xl sm:grid-cols-[150px_180px_1fr]">
        <div className="space-y-2">{universityGroups.map((item, index) => <button key={item.label} type="button" aria-pressed={groupIndex === index} onClick={() => { setGroupIndex(index); setCountryIndex(0); setQuery(""); }} className={`w-full rounded-lg border p-3 text-left text-sm font-semibold ${groupIndex === index ? "border-[#00999E] bg-[#effdff] text-[#007c80]" : "border-slate-100 text-slate-700"}`}>{item.icon} {item.label}</button>)}</div>
        <div className="max-h-[300px] space-y-1 overflow-y-auto">{group.countries.map((item, index) => <button key={item.slug} type="button" aria-pressed={countryIndex === index} onClick={() => { setCountryIndex(index); setQuery(""); }} className={`w-full rounded-lg p-2 text-left text-sm ${countryIndex === index ? "bg-[#effdff] font-semibold text-[#007c80]" : "text-slate-700 hover:bg-slate-50"}`}>{item.flag} {item.name}</button>)}</div>
        <div className="min-w-0 rounded-xl bg-[#f6fbfc] p-3"><h2 className="mb-3 font-bold text-slate-900">Universities in {country.name}</h2><input type="search" aria-label="Search universities" placeholder="Search university…" value={query} onChange={event => setQuery(event.target.value)} className="mb-3 w-full rounded-lg border border-[#00999E]/30 bg-white px-3 py-2 text-sm" /><ul className="max-h-[240px] space-y-1 overflow-y-auto">{universities.map(item => <li key={item.slug}><Link href={`/universities/${groupIndex === 0 ? "mbbs" : "study-abroad"}/${country.slug.toLowerCase()}/${item.slug}`} onClick={() => { setOpen(false); onNavigate?.(); }} className="block rounded-lg bg-white p-2 text-sm text-[#007c80] hover:bg-[#e5fbfc]">{item.name}</Link></li>)}{universities.length === 0 && <li className="py-3 text-sm text-slate-500">No universities found.</li>}</ul></div>
      </div>
    </div>}
  </div>;
}
