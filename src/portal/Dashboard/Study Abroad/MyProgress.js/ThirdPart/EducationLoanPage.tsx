// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  createTheme,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import right from "@/portal/asset/Right_abroad.svg";
import Wrong from "@/portal/asset/Wrong_abroad.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function EducationLoanPage() {
  const screenFor = createTheme({
    breakpoints: {
      values: {
        xsF: 600,
      },
    },
  });
  const xsScreen = useMediaQuery(screenFor.breakpoints.down("xsF"));

  const [openModal, setOpenModal] = useState(false);
  const [showScrollView, setShowScrollView] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([
    { name: "Yes", flagUrl: right },
    { name: "No", flagUrl: Wrong },
  ]);

  const handleOpenModal = () => {
    setOpenModal(true);
    setShowScrollView((prev) => !prev);
  };
  const [clickData, setClickData] = useState({});

  return (
    <Box
      sx={{
        mt: "20px",
        width: { xs: "100%", sm: "85%" },
        margin: {
          xs: 0,
          sm: "auto",
        },
      }}
    >
      <Paper sx={{ p: "20px 0", borderRadius: "12px" }}>
        <Box
          sx={{
            mt: 3,
            ml: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: 2, sm: 3 },
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
            width={xsScreen ? "80%" : "transparent"}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "170px" },
                height: {
                  xs: "130px",
                  sm: "100px",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00999E",
                color: "white",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                flexWrap: "wrap",
              }}
              onClick={handleOpenModal}
            >
              Educational Loan
            </Box>

            {xsScreen ? (
              <KeyboardArrowDownIcon
                sx={{
                  color: "#00999E",
                  fontSize: "40px",
                  mx: 2,
                  display: { sm: "block" },
                }}
              />
            ) : (
              <ArrowForwardIosIcon
                sx={{
                  color: "#00999E",
                  fontSize: "20px",
                  mx: 2,
                  display: { sm: "block" },
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {selectedCourses.map((course, index) => (
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
                  width: { xs: "100%", sm: "180px" },
                  height: "120px",
                  backgroundColor: "#EFFDFF",
                  borderRadius: "12px",
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #B7B7B7",
                }}
                onClick={() => setClickData(course)}
              >
                <img
                  src={course.flagUrl}
                  alt={course.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "10%",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#595959",
                    textAlign: "center",
                  }}
                >
                  {course.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
      {/* {showScrollView && (
        <CustomScrollView
          title={"Educational Loan"}
          subTitle={"Status Tracking of the Education Loan"}
          dataList={arrList}
        />
      )} */}
    </Box>
  );
}
