/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/utils/config";
import ContainerWrapper from "@/components/ContainerWrapper";
import LetsStart from "@/components/immersion/LetsStart";
import FilterComponent from "@/components/study-abroad/university-finder/FilterComponent";
import UniversityItem from "@/components/study-abroad/university-finder/UniversityItem";
import {
  ButtonComponent,
  UniversityFinderBanner,
} from "@/components/study-abroad/university-finder/ViewComponents";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import {
  deriveTotalPages,
  readUniFinderMetaFromStorage,
  type UniversityFilterResult,
  writeUniFinderMetaToStorage,
} from "@/utils/universityFinderFilters";

const UniversityView: React.FC = () => {
  const router = useRouter();
  const UNIVERSITY_FINDER_LIMIT = 12;

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const [universityData, setUniversityData] = useState<any[]>([]);
  const [filterData, setFilterData] = useState<any>({});
  const [hydrated, setHydrated] = useState(false);

  const [shortlisted, setShortlisted] = useState<string[]>([]);
  const [compared, setCompared] = useState<string[]>([]);
  const [allShortlisted, setAllShortlisted] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [count, setCount] = useState(0);
  const [openUniversityId, setOpenUniversityId] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [limit] = useState(UNIVERSITY_FINDER_LIMIT);
  const [totalPages, setTotalPages] = useState(1);

  const scrollToTop = () => window.scrollTo({ top: 530, behavior: "smooth" });

  useEffect(() => {
    const storedFilters = sessionStorage.getItem("filterData");
    const storedData = sessionStorage.getItem("formattedData");
    const meta = readUniFinderMetaFromStorage();

    if (storedFilters) {
      try {
        setFilterData(JSON.parse(storedFilters));
      } catch {
        /* ignore */
      }
    }
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        if (Array.isArray(parsed)) setUniversityData(parsed);
      } catch {
        /* ignore */
      }
    }
    if (meta) {
      setCount(meta.count);
      setTotalPages(deriveTotalPages(meta.count, meta.totalPages, limit));
    }
    setHydrated(true);
  }, [limit]);

  useEffect(() => {
    if (!hydrated) return;
    fetchFilteredData(page, limit);
  }, [hydrated, limit, page]);

  useEffect(() => {
    if (!universityData.length) {
      setOpenUniversityId(null);
      return;
    }

    setOpenUniversityId((prev) => {
      if (prev && universityData.some((item) => item?._id === prev)) return prev;
      return universityData[0]?._id ?? null;
    });
  }, [universityData]);

  useEffect(() => {
    document.body.style.overflow = showMobileFilter ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileFilter]);

  const fetchFilteredData = async (pageNum: number, pageLimit: number) => {
    setIsLoader(true);
    try {
      const response = await fetch(
        `${baseUrl}university/universityFilter?page=${pageNum}&limit=${pageLimit}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "filter", ...filterData }),
        }
      );

      const data = await response.json();
      const formatted = data?.data?.data || [];
      const totalCount = data?.data?.count ?? 0;
      const apiTotalPages = data?.data?.totalPages ?? 0;
      const pages = deriveTotalPages(totalCount, apiTotalPages, pageLimit);

      setUniversityData(formatted);
      setTotalPages(pages);
      setCount(totalCount);
      if (totalCount === 0) setPage(1);

      sessionStorage.setItem("formattedData", JSON.stringify(formatted));
      sessionStorage.setItem("filterData", JSON.stringify(filterData));
      writeUniFinderMetaToStorage({ count: totalCount, totalPages: pages });
    } catch (error) {
      console.error("Failed to fetch universities:", error);
    } finally {
      setIsLoader(false);
    }
  };

  const handleBack = () => {
    router.push("/study-abroad/university-finder");
    scrollToTop();
  };

  const handleFilterChange = (result: UniversityFilterResult) => {
    setUniversityData(result.universityData);
    setFilterData(result.filterPayload);
    setPage(1);
    setCount(result.count);
    setTotalPages(
      deriveTotalPages(result.count, result.totalPages, limit)
    );

    sessionStorage.setItem(
      "formattedData",
      JSON.stringify(result.universityData)
    );
    sessionStorage.setItem("filterData", JSON.stringify(result.filterPayload));
    writeUniFinderMetaToStorage({
      count: result.count,
      totalPages: deriveTotalPages(result.count, result.totalPages, limit),
    });
  };

  const handleShortlist = (id: string) => {
    setShortlisted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShortlistAll = () => {
    setAllShortlisted((prev) => {
      const newValue = !prev;
      setShortlisted(newValue ? universityData.map((u) => u._id) : []);
      return newValue;
    });
  };

  const handleDownload = (ids: string | string[]) => {
    const idList = Array.isArray(ids) ? ids.join(",") : ids;
    const url = `${baseUrl}university/csv?ids=${idList}`;
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "university.csv";
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  };

  const handleDownloadAll = () => {
    if (shortlisted.length === 0) return alert("No universities shortlisted.");
    handleDownload(shortlisted);
  };

  const handleCompare = (id: string) => {
    setCompared((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAccordionToggle = (id: string) => {
    // Allow the same button to both open and close the panel.
    setOpenUniversityId((prev) => (prev === id ? null : id));
  };

  const handleCompareClick = async () => {
    try {
      const res = await fetch(`${baseUrl}university/compareUniveristy`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: compared }),
      });

      if (res.ok) {
        const ids = compared.join(",");
        router.push(`/study-abroad/university-finder/view/compare?ids=${ids}`);
        scrollToTop();
      } else {
        alert("Comparison failed.");
      }
    } catch (err) {
      console.error("Compare error:", err);
    }
  };

  const listLoading = !hydrated || isLoader;
  const rangeStart =
    count === 0 ? 0 : Math.min((page - 1) * limit + 1, count);
  const rangeEnd = count === 0 ? 0 : Math.min(page * limit, count);
  const countLabel =
    count === 1 ? "1 Course found" : `${count} Courses found`;

  return (
    <>
      <UniversityFinderBanner />
      <BreadcrumbSchema />
      <div className="sticky top-[120px] sm:top-[104px] md:top-[120px] z-[40]">
        <div className="bg-[#00999E] py-4 text-white font-semibold">
          <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-4 px-4">
            <p>
              {!hydrated ? (
                <span className="opacity-90">Loading…</span>
              ) : listLoading ? (
                <span className="opacity-90">Updating results…</span>
              ) : (
                countLabel
              )}
            </p>
            {!listLoading && count > 0 && totalPages > 1 ? (
              <p className="text-xs font-medium opacity-95 sm:text-sm">
                Showing {rangeStart}–{rangeEnd} of {count}
              </p>
            ) : null}
          </div>
        </div>
   

        <div className="border-b border-[#00999E]/20 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-2">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <ButtonComponent text="Back" width={100} onClick={handleBack} />
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg border border-[#00999E] px-3 py-2 text-sm font-semibold text-[#00999E] lg:hidden"
                  onClick={() => setShowMobileFilter(true)}
                >
                  Filters
                </button>
              </div>

              {compared.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2 rounded-xl border-2 border-[#00999E] bg-[#effdff] px-3 py-1.5 shadow-sm">
                  <span className="text-sm font-medium sm:text-sm">
                    {compared.length} university{compared.length > 1 ? "ies" : ""}{" "}
                    added to compare
                  </span>
                  <ButtonComponent
                    text="Compare"
                    fontWeight="550"
                    onClick={handleCompareClick}
                  />
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox accent-[#00999E]"
                    checked={allShortlisted}
                    onChange={handleShortlistAll}
                  />
                  <span className="ml-2 md:text-md text-sm">Shortlist All</span>
                </label>
                <ButtonComponent
                  text="Download"
                  onClick={handleDownloadAll}
                  backgroundColor={shortlisted.length === 0 ? "#c1c1c1" : "#00999E"}
                  disabled={shortlisted.length === 0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContainerWrapper>
        <div className="px-4 py-4">
          <div className="mt-6 flex flex-col gap-4 lg:flex-row">
            <div className="hidden lg:block lg:w-[320px] xl:w-[360px] shrink-0">
              <FilterComponent
                setIsLoader={setIsLoader}
                filterData={filterData}
                onFilterChange={handleFilterChange}
                limit={limit}
              />
            </div>

            <div className="w-full min-w-0 flex-1">
              {listLoading ? (
                <div className="flex items-center justify-center py-8 text-gray-600">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-cyan-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span className="text-sm font-medium">
                    Loading, please wait...
                  </span>
                </div>
              ) : universityData.length === 0 ? (
                <h2 className="text-center text-[#00999e] text-xl font-semibold">
                  There are no universities present for the selected filters.
                </h2>
              ) : (
                universityData.map((university) => (
                  <UniversityItem
                    key={university._id}
                    university={university}
                    onCompare={() => handleCompare(university._id)}
                    isCompared={compared.includes(university._id)}
                    onShortlist={() => handleShortlist(university._id)}
                    onDownload={() => handleDownload(university._id)}
                    isShortlisted={shortlisted.includes(university._id)}
                    isOpen={openUniversityId === university._id}
                    onToggle={() => handleAccordionToggle(university._id)}
                  />
                ))
              )}
            </div>
          </div>
          {!listLoading && (totalPages > 1 || totalPages === 0) && (
            <div className="mt-6 flex flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                className="rounded border bg-[#00999e] px-4 py-2 text-sm text-white cursor-pointer hover:bg-[#00777A] disabled:opacity-50 sm:px-8"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page <= 1 || totalPages === 0}
              >
                Prev
              </button>
              <span className="text-sm font-medium sm:text-base">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                className="rounded border bg-[#00999e] px-4 py-2 text-sm text-white cursor-pointer hover:bg-[#00777A] disabled:opacity-50 sm:px-8"
                onClick={() =>
                  setPage((prev) =>
                    totalPages <= 0
                      ? prev
                      : Math.min(prev + 1, totalPages)
                  )
                }
                disabled={totalPages === 0 || page >= totalPages}
              >
                Next
              </button>
            </div>
          )}

        </div>

        <LetsStart />
      </ContainerWrapper>

      {showMobileFilter ? (
        <div className="fixed inset-0 z-[1210] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-black/40"
            aria-label="Close filters drawer"
            onClick={() => setShowMobileFilter(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[92vw] max-w-[420px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <h2 className="text-base font-semibold text-slate-900">Filters</h2>
              <button
                type="button"
                className="rounded-md px-2 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-100"
                onClick={() => setShowMobileFilter(false)}
              >
                Close
              </button>
            </div>
            <div className="h-[calc(100vh-57px)] overflow-y-auto p-3">
              <FilterComponent
                setIsLoader={setIsLoader}
                filterData={filterData}
                onFilterChange={(result) => {
                  handleFilterChange(result);
                  setShowMobileFilter(false);
                }}
                limit={limit}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UniversityView;
