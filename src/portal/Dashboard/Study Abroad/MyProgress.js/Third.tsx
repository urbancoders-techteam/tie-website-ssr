// @ts-nocheck
import { useEffect, useState } from "react";
import Edit from "@/portal/asset/Edit_abroad.svg";
import Engineering_abroad from "@/portal/asset/Engineering&Technology_abroad.svg";
import Location_abroad from "@/portal/asset/Location_abroad.svg";
import Other_abroad from "@/portal/asset/Other_abroad.svg";
import AdmissionUniversityActionTypeList from "./ThirdPart/AdmissionUniversityActionTypeList";
import CareerSelectedCard from "./ThirdPart/CareerSelectedCard";
import CustomSelectedPage from "./ThirdPart/CustomSelectedPage";
import EducationLoanPage from "./ThirdPart/EducationLoanPage";
import PersonalizedMentoring from "./ThirdPart/PersonalizedMentoring";
import ScholarshipMapContainer from "./ThirdPart/ScholarshipTable";
import Visa from "./ThirdPart/VisaPage";
import IELTS from "./../../../asset/ielts.svg";
import TOEFL from "../../../asset/toefl.svg";
import PTE from "../../../asset/pte.svg";
import GRE from "../../../asset/gre.svg";
import GMAT from "../../../asset/gmat.svg";
import SAT from "../../../asset/sat.svg";
import { Typography, Box } from "@mui/material";
import CustomError from "./ThirdPart/CustomError";

const ErrorCustomData = [
  {
    title: " Sorry! You are not Eligible ",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo morbi risus morbi ullorper volutpat amet lectus vulputate pharetra. Lectus sit ultricies cras curabitur.",
  },
  {
    title: "Dear Student",
    description: "You Have not taken any courses from this website",
  },
];

const SelectedCardCustomData = [
  {
    title: "Selected Courses",
    data: [
      { name: "Engineering & Technology", flagUrl: Engineering_abroad },
      { name: "Engineering & Technology", flagUrl: Engineering_abroad },
      { name: "Edit", flagUrl: Edit },
    ],
  },
  {
    title: "EXAMS",
    data: [
      {
        name: "IELTS",
        flagUrl: IELTS,
      },
      {
        name: "TOEFL",
        flagUrl: TOEFL,
      },
      {
        name: "PTE",
        flagUrl: PTE,
      },
      {
        name: "GRE",
        flagUrl: GRE,
      },
      {
        name: "GMAT",
        flagUrl: GMAT,
      },
      {
        name: "SAT",
        flagUrl: SAT,
      },
    ],
  },
  {
    title: "Selected Accommodation Option",
    data: [
      { name: "University", flagUrl: Engineering_abroad },
      { name: "Rent", flagUrl: Location_abroad },
      { name: "Other", flagUrl: Other_abroad },
    ],
  },
];

export default function Third({ categoryAbout }) {
  const [examStatusData, setExamStatusData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch exam status from backend API
  useEffect(() => {
    const fetchExamStatus = async () => {
      try {
        setLoading(true);
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const apiUrl = `${baseUrl}exam-status`;
        const token =
          localStorage.getItem("token") || sessionStorage.getItem("token");

        const headers = {
          "Content-Type": "application/json",
        };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.data && Array.isArray(data.data)) {
          setExamStatusData(data.data);
        } else if (Array.isArray(data)) {
          setExamStatusData(data);
        } else {
          console.warn("Unexpected API response format:", data);
          setExamStatusData([]);
        }
      } catch (error) {
        console.error("Error fetching exam status:", error);
        setExamStatusData([]);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we're showing the exams section
    if (
      categoryAbout.category === "admission" &&
      categoryAbout.title === "Test Preparation" &&
      categoryAbout.actionType !== "Not Taken"
    ) {
      fetchExamStatus();
    } else {
      setLoading(false);
    }
  }, [categoryAbout.category, categoryAbout.title, categoryAbout.actionType]);

  return (
    <>
      {/* PersonalizedMentoring */}
      {categoryAbout.category === "personalized" &&
        categoryAbout.actionType !== "Not Taken" && (
          <PersonalizedMentoring
            title={categoryAbout.title}
            actionType={categoryAbout.actionType}
          />
        )}

      {/* CareerMapping */}
      {categoryAbout.category === "career" && (
        <>
          {categoryAbout.title === "Career" &&
            categoryAbout.actionType !== "Not Taken" && <CareerSelectedCard />}

          {categoryAbout.title === "Courses" &&
            categoryAbout.actionType !== "Not Taken" && (
              <CustomSelectedPage SelectedData={SelectedCardCustomData[0]} />
            )}
        </>
      )}

      {/* Admission Service */}
      {categoryAbout.category === "admission" && (
        <>
          {categoryAbout.title === "Test Preparation" &&
            categoryAbout.actionType !== "Not Taken" &&
            (loading ? (
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography>Loading exam status...</Typography>
              </Box>
            ) : (
              <CustomSelectedPage
                SelectedData={SelectedCardCustomData[1]}
                backendExams={examStatusData}
              />
            ))}

          {categoryAbout.title === "LORs/ Essays/ SOPs" &&
            categoryAbout.actionType !== "Not Taken" && (
              <AdmissionUniversityActionTypeList />
            )}
          {categoryAbout.title === "Scholarship" &&
            categoryAbout.actionType !== "Not Taken" && (
              <ScholarshipMapContainer />
            )}
        </>
      )}

      {/* Post Service */}
      {categoryAbout.category === "post" && (
        <>
          {categoryAbout.title === "Education Loan" &&
            categoryAbout.actionType !== "Not Taken" && <EducationLoanPage />}

          {categoryAbout.title === "VISA/TRAVEL & FOREX" &&
            categoryAbout.actionType !== "Not Taken" && <Visa />}

          {categoryAbout.title === "ACCOMMODATION" &&
            categoryAbout.actionType !== "Not Taken" && (
              <CustomSelectedPage SelectedData={SelectedCardCustomData[2]} />
            )}
        </>
      )}

      {/* Not Taken fallback */}
      {categoryAbout.actionType === "Not Taken" && (
        <CustomError
          title={categoryAbout.title}
          Errortitle={
            categoryAbout.category === "personalized" ||
            categoryAbout.category === "career"
              ? ErrorCustomData[0].title
              : ErrorCustomData[1].title
          }
          description={
            categoryAbout.category === "personalized" ||
            categoryAbout.category === "career"
              ? ErrorCustomData[0].description
              : ErrorCustomData[1].description
          }
        />
      )}
    </>
  );
}
