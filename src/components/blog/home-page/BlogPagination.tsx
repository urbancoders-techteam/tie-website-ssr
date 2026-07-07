"use client";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
};

function getVisiblePages(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const pages = new Set<number>([1, total, current, current - 1, current + 1]);
  const sorted = [...pages].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  let previous = 0;

  for (const page of sorted) {
    if (previous && page - previous > 1) {
      result.push("ellipsis");
    }
    result.push(page);
    previous = page;
  }

  return result;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  totalCount,
  pageSize,
  onPageChange,
  disabled = false,
}: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const rangeStart = totalCount === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const rangeEnd = Math.min(currentPage * pageSize, totalCount);
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav
      className="mt-10 flex flex-col items-center gap-4 sm:mt-12"
      aria-label="Blog pagination"
    >
      <p className="text-sm text-slate-600">
        Showing{" "}
        <span className="font-semibold text-[#0B162C]">
          {rangeStart}–{rangeEnd}
        </span>{" "}
        of <span className="font-semibold text-[#0B162C]">{totalCount}</span> articles
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={disabled || currentPage <= 1}
          aria-label="Go to previous page"
          className="inline-flex h-10 items-center gap-1 rounded-xl border border-[#CBECEF] bg-white px-3 text-sm font-semibold text-[#0B162C] transition hover:border-[#00B2B8] hover:text-[#00B2B8] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <MdChevronLeft className="h-5 w-5" aria-hidden />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-1">
          {visiblePages.map((page, index) =>
            page === "ellipsis" ? (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-sm font-semibold text-slate-400"
                aria-hidden
              >
                …
              </span>
            ) : (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                disabled={disabled}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
                className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${
                  page === currentPage
                    ? "border-[#00B2B8] bg-[#00B2B8] text-white shadow-sm"
                    : "border-[#CBECEF] bg-white text-[#0B162C] hover:border-[#00B2B8] hover:text-[#00B2B8]"
                }`}
              >
                {page}
              </button>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={disabled || currentPage >= totalPages}
          aria-label="Go to next page"
          className="inline-flex h-10 items-center gap-1 rounded-xl border border-[#CBECEF] bg-white px-3 text-sm font-semibold text-[#0B162C] transition hover:border-[#00B2B8] hover:text-[#00B2B8] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="hidden sm:inline">Next</span>
          <MdChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </nav>
  );
}
