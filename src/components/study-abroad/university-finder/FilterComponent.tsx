/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";

import DropdownComponent from "@/components/DropdownComponent";
import TextField from "@/components/TextFiled";
import { baseUrl } from "@/utils/config";

interface FilterComponentProps {
  filterData: any;
   page: number,
  limit: number,
  onFilterChange: (data: any[], filters: any) => void;
  setIsLoader: (val: boolean) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filterData,
  page,
  limit = 3,
  onFilterChange,
  setIsLoader,
}) => {

    
  const [countries, setCountries] = useState<any[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<string[]>(
    Array.isArray(filterData.countryId) ? filterData.countryId : []
  );
  const [selectedPursue, setSelectedPursue] = useState<string>(
    typeof filterData.pursue === "string" ? filterData.pursue : ""
  );
  const [selectedYear, setSelectedYear] = useState<string[]>(
    Array.isArray(filterData.year) ? filterData.year : []
  );
  const [selectedDuration, setSelectedDuration] = useState<string[]>(
    Array.isArray(filterData.duration) ? filterData.duration : []
  );
  const [selectedIntake, setSelectedIntake] = useState<string[]>(
    Array.isArray(filterData.intake) ? filterData.intake : []
  );
  const [selectedCourses, setSelectedCourses] = useState<string>(
    typeof filterData.courses === "string" ? filterData.courses : ""
  );
  const [selectedScholarship, setSelectedScholarship] = useState<string[]>(
    Array.isArray(filterData.scholarAvailability)
      ? filterData.scholarAvailability
      : []
  );
  const [selectedQualification, setSelectedQualification] = useState<string>(
    typeof filterData.highestQualification === "string"
      ? filterData.highestQualification
      : ""
  );
  const [selectedFee, setSelectedFee] = useState<string>(
    typeof filterData.tutionFee === "string" ? filterData.tutionFee : ""
  );
  const [selectedAdmission, setSelectedAdmission] = useState<string[]>(
    Array.isArray(filterData.admissionRequirement)
      ? filterData.admissionRequirement
      : []
  );

    // Sync filterData props with state when they update
    useEffect(() => {
        setSelectedCountry(Array.isArray(filterData.countryId) ? filterData.countryId : []);
        setSelectedPursue(typeof filterData.pursue === "string" ? filterData.pursue : "");
        setSelectedYear(Array.isArray(filterData.year) ? filterData.year : []);
        setSelectedDuration(Array.isArray(filterData.duration) ? filterData.duration : []);
        setSelectedIntake(Array.isArray(filterData.intake) ? filterData.intake : []);
        setSelectedCourses(typeof filterData.courses === "string" ? filterData.courses : "");
        setSelectedScholarship(Array.isArray(filterData.scholarAvailability) ? filterData.scholarAvailability : []);
        setSelectedQualification(typeof filterData.highestQualification === "string" ? filterData.highestQualification : "");
        setSelectedFee(typeof filterData.tutionFee === "string" ? filterData.tutionFee : "");
        setSelectedAdmission(Array.isArray(filterData.admissionRequirement) ? filterData.admissionRequirement : []);
      }, [filterData]);
      

  // Fetch countries
  useEffect(() => {
    axios
      .get(`${baseUrl}university/countryList`)
      .then((res) => setCountries(res?.data?.data?.formattedData))
      .catch(console.error);
  }, []);

  const handleApplyFilter = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    setIsLoader(true);

    const filterPayload: any = {
      type: "filter",
      courses: selectedCourses || "",
    };
    if (selectedCountry.length) filterPayload.countryId = selectedCountry;
    if (selectedPursue) filterPayload.pursue = selectedPursue;
    if (selectedYear.length) filterPayload.year = selectedYear;
    if (selectedDuration.length) filterPayload.duration = selectedDuration;
    if (selectedFee) filterPayload.tutionFee = selectedFee;
    if (selectedIntake.length) filterPayload.intake = selectedIntake;
    if (selectedAdmission.length)
      filterPayload.admissionRequirement = selectedAdmission;
    if (selectedScholarship.length)
      filterPayload.scholarAvailability = selectedScholarship;
    if (selectedQualification)
      filterPayload.highestQualification = selectedQualification;

    axios
      .post(`${baseUrl}university/universityFilter?page=${page}&limit=${limit}`, filterPayload)
      .then((res) => {
        console.log('res',res)
        onFilterChange(res.data.data.data, filterPayload);
        setIsLoader(false);

        sessionStorage.setItem(
          "formattedData",
          JSON.stringify(res.data.data.data)
        );
        sessionStorage.setItem("filterData", JSON.stringify(filterPayload));
      })
      .catch((err) => {
        console.error("Error applying filter:", err);
        setIsLoader(false);
      });
  };

  const handleResetFilter = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    setIsLoader(true);

    // Reset all filter states
    setSelectedCountry([]);
    setSelectedPursue("");
    setSelectedYear([]);
    setSelectedDuration([]);
    setSelectedIntake([]);
    setSelectedCourses("");
    setSelectedScholarship([]);
    setSelectedQualification("");
    setSelectedFee("");
    setSelectedAdmission([]);

    axios
      .post(`${baseUrl}university/universityFilter?page=${page}&limit=${limit}`, {
        type: "filter",
        countryId: "",
        courses: "",
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
      })
      .then((res) => {
        console.log('res',res.data.data.data)
        onFilterChange(res.data.data.data, {});
        setIsLoader(false);

        sessionStorage.removeItem("formattedData");
        sessionStorage.removeItem("filterData");
      })
      .catch((err) => {
        console.error("Error resetting filters:", err);
        setIsLoader(false);
      });
  };

  return (
    <div className=" border-2 border-[#00999E] rounded-2xl bg-[#effdff] shadow">
      <div className="flex items-center gap-2 p-4 text-black">
        <Icon icon="mdi:filter" className="text-2xl" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="bg-[#00999E] text-white p-4">
        <h3 className="font-semibold text-lg">ELIGIBILITY</h3>
      </div>

      <div className="p-5 space-y-4">
        <DropdownComponent
          label="Country"
          options={countries?.map((c) => ({ value: c._id, label: c.name }))}
          value={selectedCountry}
          onChange={(val) => setSelectedCountry(val as string[])}
          multiSelect
        />

        <DropdownComponent
          label="Planning To Pursue"
          options={["Undergraduate", "Graduate", "PHD", "Certificate Program"]}
          value={selectedPursue}
          onChange={(val) => setSelectedPursue(val as string)}
        />

        <DropdownComponent
          label="Preferred Year"
          options={["2024", "2025", "2026", "2027", "2028", "2029"]}
          value={selectedYear}
          onChange={(val) => setSelectedYear(val as string[])}
          multiSelect
        />

        <DropdownComponent
          label="Preferred Intake"
          options={[
            "Current Dec - Mar",
            "Apr - Jul",
            "Aug - Nov",
            "Upcoming Dec - Mar",
          ]}
          value={selectedIntake}
          onChange={(val) => setSelectedIntake(val as string[])}
          multiSelect
        />

        <DropdownComponent
          label="Preferred Duration"
          options={[
            "less than 1 Year",
            "1-2 year",
            "3-4 year",
            "more than 4 year",
          ]}
          value={selectedDuration}
          onChange={(val) => setSelectedDuration(val as string[])}
          multiSelect
        />

        <TextField
          label="Field of Interest"
          value={selectedCourses}
          onChange={setSelectedCourses}
        />

        <DropdownComponent
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
          value={selectedFee}
          onChange={(val) => setSelectedFee(val as string)}
        />

        <DropdownComponent
          label="Admission Requirements"
          options={["PTE", "IELTS", "TOEFL", "DUOLINGO", "SAT", "GRE/GMAT"]}
          value={selectedAdmission}
          onChange={(val) => setSelectedAdmission(val as string[])}
          multiSelect
        />

        <DropdownComponent
          label="Highest Qualification"
          options={[
            "Higher Secondary",
            "Undergraduate",
            "Graduate",
            "Certificate Program",
          ]}
          value={selectedQualification}
          onChange={(val) => setSelectedQualification(val as string)}
        />

        <DropdownComponent
          label="Scholarship"
          options={[
            "Full Scholarships",
            "Partial Scholarships",
            "No Scholarships",
          ]}
          value={selectedScholarship}
          onChange={(val) => setSelectedScholarship(val as string[])}
          multiSelect
        />

        <button
          onClick={handleApplyFilter}
          className="w-full mt-4 bg-[#00999E] text-white font-medium py-2 rounded cursor-pointer"
        >
          APPLY FILTER
        </button>

        <button
          onClick={handleResetFilter}
          className="w-full mt-2 text-[#00999E] border-2 border-[#00999E] font-medium py-2 rounded cursor-pointer"
        >
          RESET FILTER
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
