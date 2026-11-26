// @ts-nocheck
/* eslint-disable no-unused-vars */
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Paper, Typography, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { WEB_URL } from "@/portal/config";

export default function CustomSelectedPage({
  SelectedData,
  backendExams = [],
}) {
  // Function to get status from backend data based on exam type
  const getExamStatusFromBackend = (examName) => {
    if (!backendExams || backendExams.length === 0) return null;

    // Convert examName to match backend type format (uppercase)
    const examType = examName.toUpperCase();

    const backendExam = backendExams.find(
      (exam) => exam.type && exam.type.toUpperCase() === examType,
    );

    return backendExam ? backendExam.status : null;
  };

  const token = sessionStorage.getItem("authToken");

  return (
    <Box
      sx={{
        mt: "20px",
        width: { xs: "90%", sm: "85%" },
        margin: "auto",
      }}
    >
      <Paper sx={{ p: 2, borderRadius: "12px", mt: "30px" }}>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "250px", sm: "150px" },
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00999E",
                color: "white",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Tests
            </Box>
            <ArrowForwardIosIcon
              sx={{
                color: "#00999E",
                fontSize: "20px",
                mx: 2,
                display: { xs: "none", sm: "block" },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography
                sx={{ padding: "20px 0px", fontSize: "15px", fontWeight: 600 }}
              >
                {SelectedData?.title || "Select EXAM"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                alignItems: "flex-start",
              }}
            >
              {SelectedData?.data?.map((course, index) => {
                const backendStatus = getExamStatusFromBackend(course.name);
                const displayStatus =
                  backendStatus || course.status || "Enroll Now";

                return (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      padding: "12px",
                      width: { xs: "250px", sm: "150px" },
                      height: "140px",
                      backgroundColor: "#EFFDFF",
                      borderRadius: "12px",
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #B7B7B7",
                    }}
                  >
                    <img
                      src={course.flagUrl}
                      alt={course.name}
                      style={{
                        width: "80px",
                        height: "60px",
                        borderRadius: "10%",
                      }}
                    />

                    <Typography variant="body2" sx={{ fontWeight: 500, mt: 1 }}>
                      {course.name}
                    </Typography>

                    {/* Status display from backend */}
                    <Chip
                      label={displayStatus}
                      size="small"
                      onClick={
                        displayStatus === "Enroll Now"
                          ? () => {
                              const baseUrl = WEB_URL.endsWith("/")
                                ? WEB_URL.slice(0, -1)
                                : WEB_URL;

                              window.location.href = `${baseUrl}/test/${course.name?.toLowerCase()}#=${token}`;
                            }
                          : undefined
                      }
                      clickable={displayStatus === "Enroll Now"}
                      sx={{
                        fontSize: "10px",
                        fontWeight: "500",
                        backgroundColor:
                          displayStatus === "Enrolled"
                            ? "#4CAF50"
                            : displayStatus === "Enroll Now"
                            ? "#FFA726"
                            : "#E0E0E0",
                        color: "white",
                        height: "20px",
                        minWidth: "80px",
                        mt: 1,
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
