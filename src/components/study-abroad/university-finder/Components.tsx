/* eslint-disable @typescript-eslint/no-explicit-any */

import ContainerWrapper from "@/components/ContainerWrapper";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CountrySelect from "./CountrySelect";
import FormComponent from "./Form";
import CustomMultiSelectDropdown from "./CustomDropdown";
import RangeSelectionBox from "./RangeSelectionBox";
import SelectionBox from "./SelectionBox";
import axios from "axios";
import { baseUrl } from "@/utils/config";
interface FiltersProps {
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  isFormValid?: boolean;
}

export const RegisterYourself: React.FC<FiltersProps> = ({
  filters,
  setFilters,
}) => {
  return (
    <ContainerWrapper>
      <div className="grid grid-cols-1 items-center gap-6 py-6 sm:gap-8 md:grid-cols-2 md:gap-8 lg:gap-12">
        {/* Left Side – Image Block */}
        <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-xl self-center">
          <Image
            src="/images/registerImg.png"
            alt="Register"
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 420px"
            className="object-cover object-center"
          />

          {/* Keep heading inside image's top-right blank region */}
          <div className="absolute inset-0 flex items-start justify-end p-3 sm:p-4 md:p-5">
            <div className="absolute right-2 top-2 w-[58%] text-start sm:right-[-40px]">
              <h1 className="text-base font-semibold leading-tight text-[#00999E] sm:text-xl md:text-2xl lg:text-3xl">
                Welcome
              </h1>
              <p className="mt-1 text-[0.78rem] font-semibold leading-snug text-[#606060] sm:mt-1.5 sm:text-base md:text-lg lg:text-xl">
                Your Global Journey
                <br />
                Begins Here
              </p>
            </div>
          </div>
        </div>

        {/* Right Side – Form Box */}
        <div className="mx-auto h-fit w-full max-w-[560px] rounded-2xl border border-[#00999E]/20 bg-gradient-to-br from-white via-[#f7fcfc] to-[#eef9f9] p-4 text-center shadow-[0_16px_50px_-20px_rgba(0,153,158,0.45)] ring-1 ring-white/70 backdrop-blur-sm sm:p-6 md:max-w-[440px] md:p-7 lg:max-w-[500px] lg:p-8">
          <h2 className="mb-1 text-xl font-extrabold tracking-tight text-[#0f2744] sm:text-2xl">
            Start Your Journey
          </h2>
          <p className="mb-3 text-xs font-medium text-slate-600 sm:mb-4 sm:text-sm">
            Get personalised university matches in minutes.
          </p>
          <FormComponent
            buttonText="Next"
            filters={filters}
            setFilters={setFilters}
            isFormValid={true}
          />
        </div>
      </div>
    </ContainerWrapper>
  );
};

export const Location: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  const defaultFieldOfInterestOptions = [
    { label: "Engineering", value: "Engineering" },
    {
      label: "Computer Science & Information Technology",
      value: "Computer Science & Information Technology",
    },
    { label: "Health Science and Medicine", value: "Health Science and Medicine" },
    { label: "Social Science", value: "Social Science" },
    { label: "Bussiness Management", value: "Bussiness Management" },
    { label: "Physical & Life Science", value: "Physical & Life Science" },
    { label: "Fine & Applied Art", value: "Fine & Applied Art" },
    { label: "Communication & Journalism", value: "Communication & Journalism" },
    { label: "Designing", value: "Designing" },
  ];

  const [selectedCountries, setSelectedCountries] = useState(
    filters.country || []
  );
  const [fieldOfInterestOptions, setFieldOfInterestOptions] = useState<
    Array<{ label: string; value: string }>
  >(defaultFieldOfInterestOptions);
  const [isCourseLoading, setIsCourseLoading] = useState(false);
  const [fieldOfInterestValue, setFieldOfInterestValue] = useState<string[]>(
    Array.isArray(filters.courses)
      ? filters.courses
      : typeof filters.courses === "string"
        ? filters.courses
            .split(",")
            .map((item: string) => item.trim())
            .filter(Boolean)
        : []
  );

  console.log('fieldOfInterestValue', fieldOfInterestValue)

  const handleSelect = (values: string[]) => {
    setFieldOfInterestValue(values);
    setFilters((prev: any) => ({ ...prev, courses: values }));
  };

  const handleCard = (countryId: string) => {
    const updated = selectedCountries?.includes(countryId)
      ? selectedCountries.filter((id: string) => id !== countryId)
      : [...selectedCountries, countryId];

    setSelectedCountries(updated);
    setFilters((prev: any) => ({ ...prev, country: updated }));
  };

  useEffect(() => {
    const fetchCourseList = async () => {
      try {
        setIsCourseLoading(true);
        const response = await axios.get(`${baseUrl}university/courseList`);
        const apiCourses = response?.data?.data?.formattedData;

        if (Array.isArray(apiCourses)) {
          const courseOptions = apiCourses
            .map((course: any) => ({
              label: typeof course?.name === "string" ? course.name.trim() : "",
              value: typeof course?._id === "string" ? course._id : "",
            }))
            .filter((course: { label: string; value: string }) => course.label && course.value);

          const dedupedCourseOptions = courseOptions.filter(
            (course: { label: string; value: string }, index: number) =>
              courseOptions.findIndex(
                (candidate: { label: string; value: string }) =>
                  candidate.value === course.value
              ) === index
          );

          if (dedupedCourseOptions.length) {
            setFieldOfInterestOptions(dedupedCourseOptions);
          }

          const validCourseIds = new Set(dedupedCourseOptions.map((course) => course.value));
          setFieldOfInterestValue((prevValues) => {
            const selectedValidCourseIds = prevValues.filter((id) => validCourseIds.has(id));
            if (selectedValidCourseIds.length !== prevValues.length) {
              setFilters((prev: any) => ({ ...prev, courses: selectedValidCourseIds }));
            }
            return selectedValidCourseIds;
          });
        }
      } catch (error) {
        console.error("Error fetching course list:", error);
      } finally {
        setIsCourseLoading(false);
      }
    };

    fetchCourseList();
  }, [setFilters]);

  return (
    <ContainerWrapper>
      <CustomMultiSelectDropdown
        label="Choose Your Field Of Interest?"
        options={fieldOfInterestOptions}
        selectedValues={fieldOfInterestValue}
        onChange={handleSelect}
        isLoading={isCourseLoading}
        loadingText="Loading courses..."
        placeholder={isCourseLoading ? "Loading courses..." : "Select options"}
      />
      <div className="rounded-lg  flex flex-wrap text-center sm:justify-center md:justify-between items-center border-2 border-[#00999E] p-4 bg-gradient-to-r from-[#a7d6d799] via-[#daf0f180] to-white">
        <h3 className="font-semibold text-lg mb-2 ">
          Where Do You Plan To Study?
        </h3>
        <CountrySelect
          selectedCountries={selectedCountries}
          setSelectedCountries={setSelectedCountries}
          handleCardClick={handleCard}
          setFilters={setFilters}
        />
      </div>
    </ContainerWrapper>
  );
};

export const ProgramAndPreferredYear: React.FC<FiltersProps> = ({
  filters,
  setFilters,
}) => {
  const handleChange = (field: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <ContainerWrapper>
      <SelectionBox
        label="What Are You Planning To Pursue?"
        options={["Undergraduate", "Graduate", "PHD", "Certificate Program"]}
        selectedValue={filters.pursue}
        onSelect={(value: any) => handleChange("pursue", value)}
      />
      <CustomMultiSelectDropdown
        label="What Is Your Preferred Year?"
        options={["2025", "2026", "2027", "2028"]}
        selectedValues={Array.isArray(filters.year) ? filters.year : []}
        onChange={(values) => handleChange("year", values)}
      />
      <CustomMultiSelectDropdown
        label="What Is Your Preferred Intake?"
        options={[
          "Current Dec - Mar",
          "Apr - Jul",
          "Aug - Nov",
          "Upcoming Dec - Mar",
        ]}
        selectedValues={Array.isArray(filters.intake) ? filters.intake : []}
        onChange={(values) => handleChange("intake", values)}
      />
      <CustomMultiSelectDropdown
        label="What Is Your Preferred Duration?"
        options={[
          "less than 1 Year",
          "1-2 year",
          "3-4 year",
          "more than 4 year",
        ]}
        selectedValues={Array.isArray(filters.duration) ? filters.duration : []}
        onChange={(values) => handleChange("duration", values)}
      />
    </ContainerWrapper>
  );
};

export const FieldOfStudy: React.FC<FiltersProps> = ({
  filters,
  setFilters,
}) => {
  const handleChange = (key: string, val: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: val }));
  };

  return (
    <ContainerWrapper>
      <CustomMultiSelectDropdown
        label="Scholarship Availability"
        options={[
          "Full Scholarships",
          "Partial Scholarships",
          "No Scholarships",
        ]}
        selectedValues={Array.isArray(filters.scholarship) ? filters.scholarship : []}
        onChange={(values) => handleChange("scholarship", values)}
      />

      <RangeSelectionBox
        label="Yearly Tuition Fee"
        value={Number(filters.tutionfee || 0)} 
        onChange={(val) => handleChange("tutionfee", val)}
      />
    </ContainerWrapper>
  );
};

export const AdmissionRequirements: React.FC<FiltersProps> = ({
  filters,
  setFilters,
}) => {
  const handleChange = (field: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <ContainerWrapper>
      <CustomMultiSelectDropdown
        label="Admission Requirement"
        options={["PTE", "IELTS", "TOEFL", "DUOLINGO", "SAT", "GRE/GMAT"]}
        selectedValues={Array.isArray(filters.admission) ? filters.admission : []}
        onChange={(values) => handleChange("admission", values)}
      />
      <SelectionBox
        label="Highest Qualification"
        options={[
          "Higher Secondary",
          "Undergraduate",
          "Graduate",
          "Certificate Program",
        ]}
        selectedValue={filters.qualification}
        onSelect={(value: any) => handleChange("qualification", value)}
      />
    </ContainerWrapper>
  );
};
