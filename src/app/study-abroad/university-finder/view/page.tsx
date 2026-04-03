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

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const [universityData, setUniversityData] = useState<any[]>([]);
  const [filterData, setFilterData] = useState<any>({});
  const [hydrated, setHydrated] = useState(false);

  const [shortlisted, setShortlisted] = useState<string[]>([]);
  const [compared, setCompared] = useState<string[]>([]);
  const [allShortlisted, setAllShortlisted] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [count, setCount] = useState(0);

  const [page, setPage] = useState(1);
  const [limit] = useState(4);
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
    count === 1 ? "1 university found" : `${count} Courses found`;

  return (
    <>
      <UniversityFinderBanner />
      <BreadcrumbSchema />
      <div className="bg-[#00999E] py-4 text-white font-semibold">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p>
            {!hydrated ? (
              <span className="opacity-90">Loading…</span>
            ) : listLoading ? (
              <span className="opacity-90">Updating results…</span>
            ) : (
              countLabel
            )}
          </p>
          {!listLoading && count > 0 && totalPages > 1 && (
            <p className="text-sm font-medium opacity-95">
              Showing {rangeStart}–{rangeEnd} of {count}
            </p>
          )}
        </div>
      </div>

      <ContainerWrapper>
        <div className="flex justify-start gap-4 px-4 mt-4 ">
          <ButtonComponent text="Back" width={100} onClick={handleBack} />
        </div>

        {compared.length > 0 && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#effdff] border-2 border-[#00999E] rounded-2xl shadow p-4 max-w-md w-full z-50 flex justify-between items-center">
            <span className="text-sm font-medium">
              {compared.length} university{compared.length > 1 ? "ies" : ""}{" "}
              added to compare
            </span>
            <ButtonComponent
              text="Compare"
              fontWeight="550"
              onClick={handleCompareClick}
            />
          </div>
        )}

        <div className="px-4 py-4">
          <div className="flex justify-end mb-4 gap-4">
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

          <div className="flex flex-wrap justify-between gap-4 mt-12">
            <button
              type="button"
              className="md:hidden w-full self-end px-4 py-2 bg-[#00999E] text-white text-sm rounded shadow"
              onClick={() => setShowMobileFilter((prev) => !prev)}
            >
              {showMobileFilter ? "Hide Filters" : "Show Filters"}
            </button>

            <div
              className={`flex-1 ${showMobileFilter ? "block" : "hidden"} md:block`}
            >
              <FilterComponent
                setIsLoader={setIsLoader}
                filterData={filterData}
                onFilterChange={handleFilterChange}
                limit={limit}
              />
            </div>

            <div className="flex-2 w-full">
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
                  />
                ))
              )}
            </div>
          </div>

          {!listLoading && (totalPages > 1 || totalPages === 0) && (
            <div className="flex flex-wrap justify-end items-center gap-2 mt-6">
              <button
                type="button"
                className="px-10 py-2 border rounded disabled:opacity-50 cursor-pointer bg-[#00999e] text-white hover:bg-[#00777A] text-sm"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page <= 1 || totalPages === 0}
              >
                Prev
              </button>
              <span className="font-medium">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                className="px-10 py-2 border rounded disabled:opacity-50 cursor-pointer bg-[#00999e] text-white hover:bg-[#00777A] text-sm"
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
    </>
  );
};

export default UniversityView;
