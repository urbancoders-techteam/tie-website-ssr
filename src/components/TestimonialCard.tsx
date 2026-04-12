"use client";

import Image from "next/image";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import type { TestimonialViewModel } from "@/utils/testimonialWeb";
import { initialFromName } from "@/utils/testimonialWeb";

const TEAL = "#00a88f";

export default function TestimonialCard({ data }: { data: TestimonialViewModel }) {
  const [imgFailed, setImgFailed] = useState(false);
  const initial = initialFromName(data.studentName);
  const detailParts = [data.course, data.university].filter(Boolean);
  const detailLine = detailParts.join(" · ");
  const imageUrl = data.studentImage?.trim();
  const showPhoto = Boolean(imageUrl && !imgFailed);

  return (
    <div className="flex h-full min-h-[400px] w-full max-w-full flex-col rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_4px_24px_-12px_rgba(15,39,68,0.1)] sm:p-5 lg:p-6">
      <div className="flex items-start justify-between gap-3">
        <FaQuoteLeft
          className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
          style={{ color: TEAL }}
          aria-hidden
        />
        {data.countryBadge ? (
          <span className="inline-flex max-w-[55%] items-center gap-1.5 rounded-md border border-[#00a88f]/20 bg-[#00a88f]/10 px-2.5 py-1 text-left text-[0.6875rem] font-medium leading-snug text-[#00a88f] sm:text-xs">
            <span className="shrink-0" aria-hidden>
              {data.countryBadge.flag}
            </span>
            <span className="break-words">{data.countryBadge.label}</span>
          </span>
        ) : (
          <span className="w-px shrink-0" aria-hidden />
        )}
      </div>

      <p className="mt-4 flex-1 text-pretty text-sm italic leading-relaxed text-slate-600 sm:text-[0.9375rem]">
        {data.paragraph}
      </p>

      <div className="mt-6 flex gap-3 border-t border-slate-100 pt-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#00a88f]">
          {showPhoto ? (
            <Image
              src={imageUrl!}
              alt={`${data.studentName} photo`}
              fill
              className="object-cover"
              sizes="48px"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-lg font-bold text-white">
              {initial}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-[#0f2744]">{data.studentName}</p>
          {detailLine ? (
            <p className="mt-0.5 text-sm text-slate-500">{detailLine}</p>
          ) : null}
          <div
            className="mt-1 flex gap-0.5"
            aria-label={`Rating ${data.rating} out of 5`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="text-sm sm:text-base"
                style={{ color: TEAL }}
              >
                {i < data.rating ? "★" : "☆"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
