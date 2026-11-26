// @ts-nocheck
import React from "react";
import { Box, Typography } from "@mui/material";
import Abroad from "../MyProgress.js/FirstCard";

export const ProgressGraphUI = () => {
  const progressSteps = [
    { label: "10%", left: "5%" },
    { label: "20%", left: "20%" },
    { label: "30%", left: "35%" },
    { label: "40%", left: "50%" },
    { label: "50%", left: "65%" },
    { label: "60%", left: "80%" },
  ];

  return (
    <Box
      mt={5}
      sx={{
        backgroundColor: "#E0F7FA",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        width: "100%", // Adjusted width
        maxWidth: "1000px", // Limit the maximum width
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#00838F" }}
      >
        ~My Progress~
      </Typography>

      {/* Progress Area */}
      <Box
        sx={{
          position: "relative",
          height: "200px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          overflow: "hidden",
          margin: "20px auto",
          width: "90%",
          maxWidth: "800px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Gradient Effect */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            background: "linear-gradient(to top, #00ACC1, transparent)",
            zIndex: 1,
          }}
        />

        {/* Progress Line */}
        <Box
          sx={{
            position: "absolute",
            bottom: "50px",
            left: "5%",
            width: "90%",
            height: "4px",
            backgroundColor: "#00ACC1",
            zIndex: 2,
          }}
        />

        {/* Progress Circles */}
        {progressSteps?.map((step, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              bottom: "40px",
              left: step.left,
              transform: "translateX(-50%)",
              zIndex: 3,
              textAlign: "center",
            }}
          >
            {/* Circle */}
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                border: "4px solid #00ACC1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#00838F" }}
              >
                {step?.label}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "#00838F", marginTop: "10px" }}
      >
        ~Track Your Study Abroad Journey~
      </Typography>
    </Box>
  );
};

// ==================================================

export default function ProgressUI() {
  return <Abroad />;
}
