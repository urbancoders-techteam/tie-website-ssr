/* eslint-disable @typescript-eslint/no-explicit-any */

import ContainerWrapper from "@/components/ContainerWrapper";
import Image from "next/image";
import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import FormComponent from "./Form";
import RangeSelectionBox from "./RangeSelectionBox";
import SelectionBox from "./SelectionBox";
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
      <div className="grid grid-cols-1 items-center gap-4 py-6 sm:gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
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
  const [selectedCountries, setSelectedCountries] = useState(
    filters.country || []
  );
  const [fieldOfInterestValue, setFieldOfInterestValue] = useState<string>(
    typeof filters.courses === "string" ? filters.courses : ""
  );

  const handleFieldOfInterestChange = (value: string) => {
    setFieldOfInterestValue(value);
    setFilters((prev: any) => ({ ...prev, courses: value }));
  };

  const handleCard = (countryId: string) => {
    const updated = selectedCountries?.includes(countryId)
      ? selectedCountries.filter((id: string) => id !== countryId)
      : [...selectedCountries, countryId];

    setSelectedCountries(updated);
    setFilters((prev: any) => ({ ...prev, country: updated }));
  };

  return (
    <ContainerWrapper>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-1 lg:gap-3">
        <div className="rounded-lg border-2 border-[#00999E] bg-gradient-to-r from-[#a7d6d799] via-[#daf0f180] to-white p-4 flex items-center gap-3">
          <label
            htmlFor="field-of-interest"
            className="text-sm font-semibold text-[#0f2744] whitespace-nowrap mb-0"
          >
            Enter Your Field Of Interest?
          </label>
          <input
            id="field-of-interest"
            type="text"
            value={fieldOfInterestValue}
            onChange={(e) => handleFieldOfInterestChange(e.target.value)}
            placeholder="Enter field of interest"
            className="flex-1 rounded-md border border-[#00999E] bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-[#007f85] focus:ring-2 focus:ring-[#00999E]/25"
          />
        </div>

        <div className="rounded-lg flex flex-wrap text-center sm:justify-center md:justify-between items-center border-2 border-[#00999E] p-4 bg-gradient-to-r from-[#a7d6d799] via-[#daf0f180] to-white">
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
      <div className="grid grid-cols-1 gap-y-2 gap-x-4 lg:grid-cols-2 lg:gap-y-3 lg:gap-x-6">
        <SelectionBox
          label="What Are You Planning To Pursue?"
          options={["Undergraduate", "Graduate", "PHD", "Certificate Program"]}
          selectedValue={typeof filters.pursue === "string" ? filters.pursue : ""}
          onSelect={(value: any) => handleChange("pursue", value)}
        />
        <SelectionBox
          label="What Is Your Preferred Year?"
          options={["2025", "2026", "2027", "2028"]}
          selectedValue={
            Array.isArray(filters.year)
              ? filters.year
              : typeof filters.year === "string" && filters.year
                ? [filters.year]
                : []
          }
          onSelect={(value: any) => handleChange("year", value)}
          multiple
        />
        <SelectionBox
          label="What Is Your Preferred Intake?"
          options={[
            "Current Dec - Mar",
            "Apr - Jul",
            "Aug - Nov",
            "Upcoming Dec - Mar",
          ]}
          selectedValue={
            Array.isArray(filters.intake)
              ? filters.intake
              : typeof filters.intake === "string" && filters.intake
                ? [filters.intake]
                : []
          }
          onSelect={(value: any) => handleChange("intake", value)}
          multiple
        />
        <SelectionBox
          label="What Is Your Preferred Duration?"
          options={[
            "less than 1 Year",
            "1-2 year",
            "3-4 year",
            "more than 4 year",
          ]}
          selectedValue={
            Array.isArray(filters.duration)
              ? filters.duration
              : typeof filters.duration === "string" && filters.duration
                ? [filters.duration]
                : []
          }
          onSelect={(value: any) => handleChange("duration", value)}
          multiple
        />
      </div>
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
      <div className="grid grid-cols-1 gap-y-2 gap-x-4 lg:grid-cols-2 lg:gap-y-3 lg:gap-x-6">
        <SelectionBox
          label="Scholarship Availability"
          options={[
            "Full Scholarships",
            "Partial Scholarships",
            "No Scholarships",
          ]}
          selectedValue={Array.isArray(filters.scholarship) ? filters.scholarship : []}
          onSelect={(value: any) => handleChange("scholarship", value)}
          multiple
        />

        <RangeSelectionBox
          label="Yearly Tuition Fee"
          value={Number(filters.tutionfee || 0)} 
          onChange={(val) => handleChange("tutionfee", val)}
        />
      </div>
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
      <div className="grid grid-cols-1 gap-y-2 gap-x-4 lg:grid-cols-2 lg:gap-y-3 lg:gap-x-6">
        <SelectionBox
          label="Admission Requirement"
          options={["PTE", "IELTS", "TOEFL", "DUOLINGO", "SAT", "GRE/GMAT"]}
          selectedValue={Array.isArray(filters.admission) ? filters.admission : []}
          onSelect={(value: any) => handleChange("admission", value)}
          multiple
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
      </div>
    </ContainerWrapper>
  );
};
