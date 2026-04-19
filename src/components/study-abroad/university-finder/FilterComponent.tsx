/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

import CustomMultiSelectDropdown from "./CustomDropdown";
import { baseUrl } from "@/utils/config";
import {
  clearUniFinderMetaFromStorage,
  deriveTotalPages,
  type UniversityFilterResult,
  writeUniFinderMetaToStorage,
} from "@/utils/universityFinderFilters";

interface FilterComponentProps {
  filterData: any;
  limit: number;
  onFilterChange: (result: UniversityFilterResult) => void;
  setIsLoader: (val: boolean) => void;
}

type DropdownOption = { label: string; value: string };

const parseStringArray = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string");
  if (typeof value === "string" && value.trim()) {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

const parseSingleSelect = (value: unknown): string[] => {
  if (typeof value === "string" && value.trim()) return [value];
  if (value != null && value !== "") return [String(value)];
  return [];
};

const parseCourses = (data: any): string[] => {
  if (Array.isArray(data?.courseId)) return data.courseId;
  if (Array.isArray(data?.courses)) return data.courses;
  return parseStringArray(data?.courses);
};

const mapCoursesToOptions = (apiCourses: any[]): DropdownOption[] => {
  const parsed = apiCourses
    .map((course: any) => ({
      label: typeof course?.name === "string" ? course.name.trim() : "",
      value: typeof course?._id === "string" ? course._id : "",
    }))
    .filter((course: DropdownOption) => course.label && course.value);

  return parsed.filter(
    (course: DropdownOption, index: number) =>
      parsed.findIndex((candidate: DropdownOption) => candidate.value === course.value) === index
  );
};

function parseFilterResponse(res: any, filterPayload: any): UniversityFilterResult {
  const inner = res?.data?.data;
  const list = inner?.data;
  return {
    universityData: Array.isArray(list) ? list : [],
    filterPayload,
    count: typeof inner?.count === "number" ? inner.count : 0,
    totalPages: typeof inner?.totalPages === "number" ? inner.totalPages : 0,
  };
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filterData,
  limit = 3,
  onFilterChange,
  setIsLoader,
}) => {
  const [countries, setCountries] = useState<any[]>([]);
  const [courseOptions, setCourseOptions] = useState<DropdownOption[]>([]);
  const [isCourseLoading, setIsCourseLoading] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState<string[]>(
    parseStringArray(filterData.countryId)
  );
  const [selectedPursue, setSelectedPursue] = useState<string[]>(
    parseSingleSelect(filterData.pursue)
  );
  const [selectedYear, setSelectedYear] = useState<string[]>(
    parseStringArray(filterData.year)
  );
  const [selectedDuration, setSelectedDuration] = useState<string[]>(
    parseStringArray(filterData.duration)
  );
  const [selectedIntake, setSelectedIntake] = useState<string[]>(
    parseStringArray(filterData.intake)
  );
  const [selectedCourses, setSelectedCourses] = useState<string[]>(parseCourses(filterData));
  const [selectedScholarship, setSelectedScholarship] = useState<string[]>(
    parseStringArray(filterData.scholarAvailability)
  );
  const [selectedQualification, setSelectedQualification] = useState<string[]>(
    parseSingleSelect(filterData.highestQualification)
  );
  const [selectedFee, setSelectedFee] = useState<string[]>(parseSingleSelect(filterData.tutionFee));
  const [selectedAdmission, setSelectedAdmission] = useState<string[]>(
    parseStringArray(filterData.admissionRequirement)
  );

  useEffect(() => {
    setSelectedCountry(parseStringArray(filterData.countryId));
    setSelectedPursue(parseSingleSelect(filterData.pursue));
    setSelectedYear(parseStringArray(filterData.year));
    setSelectedDuration(parseStringArray(filterData.duration));
    setSelectedIntake(parseStringArray(filterData.intake));
    setSelectedCourses(parseCourses(filterData));
    setSelectedScholarship(parseStringArray(filterData.scholarAvailability));
    setSelectedQualification(parseSingleSelect(filterData.highestQualification));
    setSelectedFee(parseSingleSelect(filterData.tutionFee));
    setSelectedAdmission(parseStringArray(filterData.admissionRequirement));
  }, [filterData]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        setIsCourseLoading(true);
        const [countryRes, courseRes] = await Promise.all([
          axios.get(`${baseUrl}university/countryList`),
          axios.get(`${baseUrl}university/courseList`),
        ]);

        setCountries(countryRes?.data?.data?.formattedData ?? []);
        const apiCourses = courseRes?.data?.data?.formattedData;
        if (Array.isArray(apiCourses)) {
          setCourseOptions(mapCoursesToOptions(apiCourses));
        } else {
          setCourseOptions([]);
        }
      } catch (error) {
        console.error("Error fetching filter options:", error);
      } finally {
        setIsCourseLoading(false);
      }
    };

    fetchFilterOptions();
  }, []);

  const handleApplyFilter = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    setIsLoader(true);

    const filterPayload: any = {
      type: "filter",
    };
    if (selectedCourses.length) filterPayload.courseId = selectedCourses;
    if (selectedCountry.length) filterPayload.countryId = selectedCountry;
    if (selectedPursue.length) filterPayload.pursue = selectedPursue[0];
    if (selectedYear.length) filterPayload.year = selectedYear;
    if (selectedDuration.length) filterPayload.duration = selectedDuration;
    if (selectedFee.length) filterPayload.tutionFee = selectedFee[0];
    if (selectedIntake.length) filterPayload.intake = selectedIntake;
    if (selectedAdmission.length)
      filterPayload.admissionRequirement = selectedAdmission;
    if (selectedScholarship.length)
      filterPayload.scholarAvailability = selectedScholarship;
    if (selectedQualification.length)
      filterPayload.highestQualification = selectedQualification[0];

    const applyPage = 1;
    axios
      .post(
        `${baseUrl}university/universityFilter?page=${applyPage}&limit=${limit}`,
        filterPayload
      )
      .then((res) => {
        const parsed = parseFilterResponse(res, filterPayload);
        const totalPages = deriveTotalPages(
          parsed.count,
          parsed.totalPages,
          limit
        );
        const result: UniversityFilterResult = {
          ...parsed,
          totalPages,
        };
        onFilterChange(result);
        setIsLoader(false);

        sessionStorage.setItem(
          "formattedData",
          JSON.stringify(result.universityData)
        );
        sessionStorage.setItem("filterData", JSON.stringify(filterPayload));
        writeUniFinderMetaToStorage({
          count: result.count,
          totalPages: result.totalPages,
        });
      })
      .catch((err) => {
        console.error("Error applying filter:", err);
        toast.error("Could not apply filters. Please try again.");
        setIsLoader(false);
      });
  };

  const handleResetFilter = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    setIsLoader(true);

    setSelectedCountry([]);
    setSelectedPursue([]);
    setSelectedYear([]);
    setSelectedDuration([]);
    setSelectedIntake([]);
    setSelectedCourses([]);
    setSelectedScholarship([]);
    setSelectedQualification([]);
    setSelectedFee([]);
    setSelectedAdmission([]);

    const resetPage = 1;
    const emptyBody = {
      type: "filter",
      countryId: "",
      courseId: "",
      stateId: "",
      pursue: "",
      year: "",
      tutionFee: "",
      duration: "",
      intake: "",
      admissionRequirement: "",
      scholarAvailability: "",
      language: "",
      highestQualification: "",
    };

    axios
      .post(
        `${baseUrl}university/universityFilter?page=${resetPage}&limit=${limit}`,
        emptyBody
      )
      .then((res) => {
        const parsed = parseFilterResponse(res, {});
        const totalPages = deriveTotalPages(
          parsed.count,
          parsed.totalPages,
          limit
        );
        const result: UniversityFilterResult = {
          universityData: parsed.universityData,
          filterPayload: {},
          count: parsed.count,
          totalPages,
        };
        onFilterChange(result);
        setIsLoader(false);

        sessionStorage.removeItem("formattedData");
        sessionStorage.removeItem("filterData");
        clearUniFinderMetaFromStorage();
      })
      .catch((err) => {
        console.error("Error resetting filters:", err);
        toast.error("Could not reset filters. Please try again.");
        setIsLoader(false);
      });
  };

  return (
    <div className=" border-2 border-[#00999E] rounded-2xl bg-[#effdff] shadow">
      <div className="flex items-center justify-between p-4 text-black bg-[#00999E] rounded-t-2xl">
        <div className="flex items-center gap-2">
          <Icon icon="mdi:filter" className="text-2xl text-white" />
          <h2 className="text-lg font-semibold text-white">Filters</h2>
        </div>
        <div>
          <h3 className="font-semibold text-base sm:text-lg text-white">ELIGIBILITY</h3>
        </div>
      </div>
 

      <div className="p-5 space-y-4">
        <CustomMultiSelectDropdown
          label="Country"
          options={countries?.map((c) => ({ value: c._id, label: c.name }))}
          selectedValues={selectedCountry}
          onChange={(values) => setSelectedCountry(values)}
          compact
          isLoading={isCourseLoading}
          loadingText="Loading filters..."
          placeholder="Select options"
        />

        <CustomMultiSelectDropdown
          label="Planning To Pursue"
          options={["Undergraduate", "Graduate", "PHD", "Certificate Program"]}
          selectedValues={selectedPursue}
          onChange={(values) =>
            setSelectedPursue(values.length ? [values[values.length - 1]] : [])
          }
          compact
          placeholder="Select options"
        />

        <CustomMultiSelectDropdown
          label="Preferred Year"
          options={["2024", "2025", "2026", "2027", "2028", "2029"]}
          selectedValues={selectedYear}
          onChange={(values) => setSelectedYear(values)}
          compact
          placeholder="Select options"
        />

        <CustomMultiSelectDropdown
          label="Preferred Intake"
          options={[
            "Current Dec - Mar",
            "Apr - Jul",
            "Aug - Nov",
            "Upcoming Dec - Mar",
          ]}
          selectedValues={selectedIntake}
          onChange={(values) => setSelectedIntake(values)}
          compact
          placeholder="Select options"
        />

        <CustomMultiSelectDropdown
          label="Preferred Duration"
          options={[
            "less than 1 Year",
            "1-2 year",
            "3-4 year",
            "more than 4 year",
          ]}
          selectedValues={selectedDuration}
          onChange={(values) => setSelectedDuration(values)}
          compact
          placeholder="Select options"
        />

        <CustomMultiSelectDropdown
          label="Field of Interest"
          options={courseOptions}
          selectedValues={selectedCourses}
          onChange={(values) => setSelectedCourses(values)}
          compact
          isLoading={isCourseLoading}
          loadingText="Loading courses..."
          showFullSelectedText
          placeholder={isCourseLoading ? "Loading courses..." : "Select options"}
        />

        <CustomMultiSelectDropdown
          label="Tuition Fee (Optional)"
          options={[
            "0",
            "50000",
            "100000",
            "150000",
            "200000",
            "250000",
            "300000",
            "350000",
            "400000",
            "450000",
            "500000",
          ]}
          selectedValues={selectedFee}
          onChange={(values) =>
            setSelectedFee(values.length ? [values[values.length - 1]] : [])
          }
          compact
          placeholder="Select options"
        />

        <CustomMultiSelectDropdown
          label="Admission Requirements"
          options={["PTE", "IELTS", "TOEFL", "DUOLINGO", "SAT", "GRE/GMAT"]}
          selectedValues={selectedAdmission}
          onChange={(values) => setSelectedAdmission(values)}
          compact
          placeholder="Select options"
        />

        <CustomMultiSelectDropdown
          label="Highest Qualification"
          options={[
            "Higher Secondary",
            "Undergraduate",
            "Graduate",
            "Certificate Program",
          ]}
          selectedValues={selectedQualification}
          onChange={(values) =>
            setSelectedQualification(values.length ? [values[values.length - 1]] : [])
          }
          compact
          placeholder="Select options"
        />

        <CustomMultiSelectDropdown
          label="Scholarship"
          options={[
            "Full Scholarships",
            "Partial Scholarships",
            "No Scholarships",
          ]}
          selectedValues={selectedScholarship}
          onChange={(values) => setSelectedScholarship(values)}
          compact
          placeholder="Select options"
        />

        <div className="flex w-full gap-4 mt-6">
          <button
            type="button"
            onClick={handleResetFilter}
            className="flex-1 border-2 border-[#00999E] text-[#00999E] font-semibold py-2 rounded-lg cursor-pointer bg-white transition-all duration-150 hover:bg-[#e5fafb] hover:border-[#007e81] hover:text-[#007e81] shadow-sm"
            style={{ maxWidth: "50%" }}
          >
            Reset Filter
          </button>
          <button
            type="button"
            onClick={handleApplyFilter}
            className="flex-1 bg-gradient-to-r from-[#0acdc1] to-[#00999E] text-white font-semibold py-2 rounded-lg cursor-pointer transition-all duration-150 hover:bg-[#007e81] shadow-md border-2 border-[#00999E] hover:from-[#00999E] hover:to-[#0acdc1]"
            style={{ maxWidth: "50%" }}
          >
            Apply Filter
          </button>
        </div>

   
      </div>
    </div>
  );
};

export default FilterComponent;
