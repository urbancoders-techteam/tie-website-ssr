"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { universityGroups } from "@/constants/navigation/university";

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
        className={`flex items-center gap-1 border-b-[3px] pb-1 font-medium ${mobile ? "text-base" : "text-[13px] xl:text-sm"} ${active ? "border-[#00999E] text-[#00999E]" : "border-transparent text-black hover:text-[#00999E]"}`}>
        University <span aria-hidden className="text-xs">⌄</span>
      </button>
      {open && (
        <div className={mobile ? "mt-3" : "absolute left-1/2 top-full z-50 w-[600px] max-w-[90vw] -translate-x-1/2 pt-4"}>
          <div className="grid gap-4 rounded-2xl border border-[#00999E]/20 bg-white p-4 shadow-xl sm:grid-cols-[190px_1fr]">
            <div className="space-y-3">
              {universityGroups.map((item, index) => (
                <button key={item.label} type="button" aria-pressed={groupIndex === index}
                  onClick={() => { setGroupIndex(index); setQuery(""); }}
                  className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-5 text-left text-sm font-bold transition ${groupIndex === index ? "border-[#00999E] bg-[#effdff] text-[#007c80]" : "border-slate-100 text-slate-700 hover:border-[#00999E]/40"}`}>
                  <span aria-hidden className="text-2xl">{item.icon}</span>{item.label}
                </button>
              ))}
              <Link href="/mbbs" onClick={navigate} className="block px-2 py-2 text-sm font-semibold text-[#00999E] hover:underline">Explore MBBS Abroad →</Link>
              <Link href="/study-abroad" onClick={navigate} className="block px-2 py-2 text-sm font-semibold text-[#00999E] hover:underline">Study Abroad →</Link>
            </div>
            <div className="min-w-0 rounded-xl bg-[#f6fbfc] p-4">
              <h2 className="mb-4 text-xl font-bold text-slate-900">{group.label} Countries</h2>
              <input type="search" aria-label={`Search ${group.label} countries`} placeholder="Search country…" value={query} onChange={event => setQuery(event.target.value)}
                className="mb-3 w-full rounded-lg border border-[#00999E]/30 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00999E]" />
              <ul className="max-h-[280px] space-y-2 overflow-y-auto pr-1">
                {group.countries.filter(country => country.name.toLowerCase().includes(query.trim().toLowerCase())).map(country => (
                  <li key={country.href}><Link href={country.href} onClick={navigate} aria-current={pathname === country.href ? "page" : undefined}
                    className="flex items-center gap-3 rounded-lg border border-[#00999E]/20 bg-white p-3 text-sm font-semibold text-[#007c80] transition hover:border-[#00999E] hover:bg-[#e5fbfc] focus-visible:outline-[#00999E]">
                    <span aria-hidden className="text-2xl">{country.flag}</span>{country.name}
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
