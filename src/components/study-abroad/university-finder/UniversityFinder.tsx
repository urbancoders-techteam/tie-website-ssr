/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { baseUrl } from "@/utils/config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  AdmissionRequirements,
  FieldOfStudy,
  Location,
  ProgramAndPreferredYear,
  RegisterYourself,
} from "./Components";
import ContainerWrapper from "@/components/ContainerWrapper";
import {
  deriveTotalPages,
  writeUniFinderMetaToStorage,
} from "@/utils/universityFinderFilters";

interface Filters {
  country?: string[];
  pursue?: string;
  year?: string | string[];
  intake?: string | string[];
  duration?: string | string[];
  tutionfee?: string | number;
  courses?: string;
  admission?: string[];
  qualification?: string;
  scholarship?: string[];
  name?: string;
  phone?: string;
  email?: string;
  fieldOfInterestValue: string[];
}

const steps = [
  "Create Your Profile",
  "Programs & Destinations",
  "Academic Plan",
  "Field of Study",
  "Prerequisites",
];
const UNIVERSITY_FINDER_LIMIT = 12;

/** Same shape as FilterComponent handleApplyFilter — used for sessionStorage + view page filters */
function normalizeToArray(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function buildFilterPayloadFromFilters(filters: Filters): Record<string, unknown> {
  const selectedCourse = typeof filters.courses === "string" ? filters.courses.trim() : "";
  const selectedYears = normalizeToArray(filters.year);
  const selectedDurations = normalizeToArray(filters.duration);
  const selectedIntakes = normalizeToArray(filters.intake);

  const filterPayload: Record<string, unknown> = {
    type: "filter",
    courses: selectedCourse,
  };
  if (filters.country?.length) filterPayload.countryId = filters.country;
  if (filters.pursue) filterPayload.pursue = filters.pursue;
  if (selectedYears.length) filterPayload.year = selectedYears;
  if (selectedDurations.length) filterPayload.duration = selectedDurations;
  if (selectedIntakes.length) filterPayload.intake = selectedIntakes;
  if (filters.tutionfee != null && filters.tutionfee !== "" && Number(filters.tutionfee) > 0) {
    filterPayload.tutionFee = String(filters.tutionfee);
  }
  if (filters.admission?.length) filterPayload.admissionRequirement = filters.admission;
  if (filters.scholarship?.length) filterPayload.scholarAvailability = filters.scholarship;
  if (filters.qualification) filterPayload.highestQualification = filters.qualification;
  return filterPayload;
}

const UniversityFinder: React.FC = () => {
  const router = useRouter();
  const [filters, setFilters] = useState<Filters>({ fieldOfInterestValue: [] });
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = async () => {
    if (
      activeStep === 0 &&
      (!filters.name || !filters.phone || !filters.email)
    ) {
      toast.error(
        "Please fill in all required fields: Name, Phone, and Email."
      );
      return;
    }

    if (!validateStep()) return;

    if (activeStep === 0) {
      setIsSubmitting(false);
      setActiveStep((prev) => prev + 1);
      toast.success("Registered Successfully");
    } else {
      setActiveStep((prev) => prev + 1);
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const validateStep = (): boolean => {
    switch (activeStep) {
      case 1:
        if (!filters.courses || !filters.courses.trim()) {
          toast.error("Please select a field of interest");
          setIsSubmitting(false);
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const selectedCourse = typeof filters.courses === "string" ? filters.courses.trim() : "";
      const selectedYears = normalizeToArray(filters.year);
      const selectedDurations = normalizeToArray(filters.duration);
      const selectedIntakes = normalizeToArray(filters.intake);

      const payload: Record<string, any> = {
        type: "submit",
        name: filters.name || "",
        phone: filters.phone || "",
        email: filters.email || "",
        ...(selectedCourse && { courses: selectedCourse }),
        ...(filters.country && { countryId: filters.country }),
        ...(filters.pursue && { pursue: filters.pursue }),
        ...(selectedYears.length && { year: selectedYears }),
        ...(filters.tutionfee && { tutionFee: filters.tutionfee }),
        ...(selectedDurations.length && { duration: selectedDurations }),
        ...(selectedIntakes.length && { intake: selectedIntakes }),
        ...(filters.admission && { admissionRequirement: filters.admission }),
        ...(filters.scholarship && {
          scholarAvailability: filters.scholarship,
        }),
        ...(filters.qualification && {
          highestQualification: filters.qualification,
        }),
      };

      const res = await fetch(`${baseUrl}university/universityFilter?page=1&limit=${UNIVERSITY_FINDER_LIMIT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        const filterPayload = buildFilterPayloadFromFilters(filters);
        const inner = data?.data;
        const totalCount = inner?.count ?? 0;
        const apiTotalPages = inner?.totalPages ?? 0;
        const pages = deriveTotalPages(totalCount, apiTotalPages, UNIVERSITY_FINDER_LIMIT);

        sessionStorage.setItem("formattedData", JSON.stringify(data.data.data));
        sessionStorage.setItem("filterData", JSON.stringify(filterPayload));
        writeUniFinderMetaToStorage({ count: totalCount, totalPages: pages });

        router.push("/study-abroad/university-finder/view");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <RegisterYourself filters={filters} setFilters={setFilters} />;
      case 1:
        return <Location filters={filters} setFilters={setFilters} />;
      case 2:
        return (
          <ProgramAndPreferredYear filters={filters} setFilters={setFilters} />
        );
      case 3:
        return <FieldOfStudy filters={filters} setFilters={setFilters} />;
      case 4:
        return (
          <AdmissionRequirements filters={filters} setFilters={setFilters} />
        );
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <section id="university-finder-section" className="min-h-screen bg-white">
      <ContainerWrapper>
        <div className="py-6 sm:py-8">
          <h1 className="text-balance text-2xl font-extrabold tracking-tight text-[#0f2744] sm:text-3xl md:text-4xl">
            Find the Best Universities Abroad with Taksheela&apos;s University Finder
          </h1>
          <p className="mt-2 max-w-3xl text-pretty text-sm font-medium text-slate-600 sm:text-base">
            Get personalised university recommendations based on your goals in just a few steps.
          </p>
        </div>
      </ContainerWrapper>
      <div className="w-full py-6 bg-[#effdff]">
        <div className="relative flex items-center justify-between px-4">
          {/* Trimmed horizontal line */}
          <div className="absolute top-1/3 left-[10%] right-[10%] h-0.5 bg-gray-300 z-0 -translate-y-1/2" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center flex-1"
            >
              {/* Number Circle */}
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold 
            ${
              activeStep === i
                ? "bg-[#00999E] text-white border-[#00999E]"
                : "bg-white text-black border-black"
            }`}
              >
                {i + 1}
              </div>

              {/* Step Label */}
              <span
                className={`text-sm text-center mt-2 ${
                  activeStep === i ? "font-semibold" : "font-base"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>{renderStepContent(activeStep)}</div>
      <ContainerWrapper>
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={activeStep === 0}
            className={`px-4 py-2 rounded font-bold text-white ${
              activeStep === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#00999E] cursor-pointer"
            }`}
          >
            {` <---- Previous`}
          </button>

          {activeStep === steps.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-4 py-2 rounded font-bold bg-[#00999E] text-white hover:bg-[#007b8f] ${
                isSubmitting ? "cursor-not-allowed opacity-80" : "cursor-pointer"
              }`}
              
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className={`px-4 py-2 font-bold rounded bg-[#00999E] text-white hover:bg-[#007b8f] ${
                isSubmitting ? "cursor-not-allowed opacity-80" : "cursor-pointer"
              }`}
            >
              {isSubmitting ? "Loading..." : "Next ---->"}
            </button>
          )}
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default UniversityFinder;
