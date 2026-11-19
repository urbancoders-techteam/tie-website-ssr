"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/aboutus", label: "About Us" },
  { href: "/international-relation", label: "International Engagement" },
  { href: "/blogs", label: "Blogs" },
];

export default function ResourceMenu({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = links.some(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`)
  );
  return (
    <div
      className={mobile ? "py-2" : "relative"}
      onMouseEnter={() => {
        if (!mobile) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!mobile) setOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 border-b-[3px] pb-1 font-medium ${
          mobile ? "text-base" : "text-sm xl:text-[15px]"
        } ${
          active
            ? "border-[#00999E] text-[#00999E]"
            : "border-transparent text-black hover:text-[#00999E]"
        }`}
      >
        Resource{" "}
        <span aria-hidden className="relative -top-[2px]">
          ⌄
        </span>
      </button>
      {open && (
        <div
          className={
            mobile
              ? "mt-2 space-y-1 pl-3"
              : "absolute left-0 top-full z-50 w-56 pt-4"
          }
        >
          <div className="rounded-xl border border-[#00999E]/20 bg-white p-2 shadow-xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#effdff] hover:text-[#007c80]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
