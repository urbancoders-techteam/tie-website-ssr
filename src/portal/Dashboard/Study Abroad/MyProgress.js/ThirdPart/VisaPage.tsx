// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import right from "@/portal/asset/Right_abroad.svg";
import wrong from "@/portal/asset/Wrong_abroad.svg";
import CustomScrollView from "./CustomScrollView";

export default function Visa() {
  const [showScrollView, setShowScrollView] = useState(false);
  const [clickData, setClickData] = useState({});
  const [selectedCourses, setSelectedCourses] = useState([
    {
      name: "VISA",
      flagUrl1: right,
      flagUrl2: wrong,
      yes: "YES",
      no: "NO",
      status: "Status Tracking of the  Visa",
    },
    {
      name: "TRAVEL",
      flagUrl1: right,
      flagUrl2: wrong,
      yes: "YES",
      no: "NO",
      status: "Status Tracking of the  TRAVEL",
    },
    {
      name: "FOREX",
      flagUrl1: right,
      flagUrl2: wrong,
      yes: "YES",
      no: "NO",
      status: "Status Tracking of the  FOREX",
    },
  ]);
  const arrList = [
    { idx: 1, about: "Track the visa application progress" },
    { idx: 2, about: "Show the status of the education loan" },
    { idx: 3, about: "Get updates on required documents" },
    { idx: 4, about: "Contact support for assistance" },
  ];

  return (
    <Box
      sx={{
        mt: "20px",
        width: { xs: "90%", sm: "85%", md: "75%" },
        margin: "auto",        
      }}
    >
      <Paper sx={{ p: "30px", borderRadius: "12px", mt: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            gap: 3,
            ml: { xs: "0", md: "80px" },
          }}
        >
          {selectedCourses.map((course, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                gap: 2,
                width: { xs: "100%", sm: "auto" },
              }}
              onClick={() => setClickData(course)}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: "100%", sm: "170px" },
                  height: "50px",
                  backgroundColor: "#00999E",
                  color: "white",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                onClick={() => setShowScrollView((prev) => !prev)}
              >
                {course.name}
              </Box>

              <ArrowForwardIosIcon
                sx={{
                  color: "#00999E",
                  fontSize: "20px",
                  display: { xs: "none", sm: "block" },
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  mt: { xs: 2, sm: 0 },
                }}
              >
                {[
                  { flag: course.flagUrl1, label: course.yes },
                  { flag: course.flagUrl2, label: course.no },
                ].map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: { xs: "row" },
                      gap: 1,
                      padding: "10px",
                      width: { xs: "100px", sm: "140px" },
                      height: { xs: "40px", sm: "50px" },
                      borderRadius: "20px",
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #B7B7B7",
                    }}
                  >
                    <img
                      src={item.flag}
                      alt={item.label}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#595959",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
      {showScrollView && (
        <CustomScrollView
          title={clickData.name}
          subTitle={clickData.status}
          dataList={arrList}
        />
      )}
    </Box>
  );
}
