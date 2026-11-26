// @ts-nocheck
import React from "react";
import { Box, Typography } from "@mui/material";

const Bar = ({ attendance = 0, practice = 0 }) => {
  const combinedCount = attendance + practice;

  // Define progress thresholds
  const progressSteps = [
    { threshold: 4, percent: 20 },
    { threshold: 7, percent: 40 },
    { threshold: 11, percent: 60 },
    { threshold: 14, percent: 80 },
    { threshold: 17, percent: 100 },
  ];

  // Find how many thresholds have been crossed (<= combinedCount)
  const activeThresholds = progressSteps.filter(
    (step) => combinedCount >= step.threshold
  );

  // Always show at least one bar: either 0% or the reached levels
  const finalBars =
    activeThresholds.length === 0
      ? [{ percent: 0 }]
      : [...Array(activeThresholds.length).keys()].map((i) => ({
          percent: progressSteps[i].percent,
        }));

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-end">
      {finalBars.map((bar, index) => (
        <Box
          key={index}
          position="relative"
          width={40}
          height={60 + index * 20}
          marginX={0.5}
          bgcolor={bar.percent === 0 ? "transparent" : "#008080"}
          border={bar.percent === 0 ? "2px solid #008080" : "none"}
          borderRadius="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="caption"
            color={bar.percent === 0 ? "#008080" : "white"}
          >
            {bar.percent}%
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Bar;
