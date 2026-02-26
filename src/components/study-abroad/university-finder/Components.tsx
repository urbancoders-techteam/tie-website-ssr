/* eslint-disable @typescript-eslint/no-explicit-any */

import ContainerWrapper from "@/components/ContainerWrapper";
import Image from "next/image";
import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import CustomTextField from "./CustomeTextField";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center items-center  h-fit py-10">
        {/* Left Side – Image Block */}
        <div className="relative w-full h-auto self-center">
          <Image
            src="/images/registerImg.png"
            alt="Register"
            width={600}
            height={600}
            className="w-full h-auto rounded-md object-cover"
          />

          {/* Centered Welcome Text */}
          <div className="absolute top-0 md:top-3 right-0 w-fit items-end text-center px-0 md:px-10">
            <h1 className="text-xl md:text-4xl font-semibold text-[#00999E] leading-tight break-words">
              Welcome
            </h1>
            <p className="mt-2  text-md md:text-2xl text-[#606060] font-semibold leading-snug break-words">
              Your Global Journey
              <br />
              Begins Here
            </p>
          </div>
        </div>

        {/* Right Side – Form Box */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full md:w-[60%] h-fit self-center text-center">
          <h2 className="font-bold text-2xl mb-4">Start Your Journey</h2>
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
  const [fieldOfInterestValue, setFieldOfInterestValue] = useState(
    filters.courses || ""
  );

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
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
      <CustomTextField
        label="Choose Your Field Of Interest?"
        value={fieldOfInterestValue}
        onChange={handleSelect}
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
      <SelectionBox
        label="What Is Your Preferred Year?"
        options={["2025", "2026", "2027", "2028"]}
        multiple
        selectedValue={filters.year}
        onSelect={(value: any) => handleChange("year", value)}
      />
      <SelectionBox
        label="What Is Your Preferred Intake?"
        options={[
          "Current Dec - Mar",
          "Apr - Jul",
          "Aug - Nov",
          "Upcoming Dec - Mar",
        ]}
        multiple
        selectedValue={filters.intake}
        onSelect={(value: any) => handleChange("intake", value)}
      />
      <SelectionBox
        label="What Is Your Preferred Duration?"
        options={[
          "less than 1 Year",
          "1-2 year",
          "3-4 year",
          "more than 4 year",
        ]}
        multiple
        selectedValue={filters.duration}
        onSelect={(value: any) => handleChange("duration", value)}
      />
    </ContainerWrapper>
  );
};

export const FieldOfStudy: React.FC<FiltersProps> = ({
  filters,
  setFilters,
}) => {
  const handleChange = (key: string, val: number) => {
    setFilters((prev: any) => ({ ...prev, [key]: val }));
  };

  return (
    <ContainerWrapper>
      <SelectionBox
        multiple
        label="Scholarship Availability"
        options={[
          "Full Scholarships",
          "Partial Scholarships",
          "No Scholarships",
        ]}
        selectedValue={filters.scholarship}
        onSelect={(value: any) => handleChange("scholarship", value)}
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
      <SelectionBox
        label="Admission Requirement"
        options={["PTE", "IELTS", "TOEFL", "DUOLINGO", "SAT", "GRE/GMAT"]}
        multiple
        selectedValue={filters.admission}
        onSelect={(value: any) => handleChange("admission", value)}
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
