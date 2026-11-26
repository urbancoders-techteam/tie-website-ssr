// @ts-nocheck
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const CustomCircularProgress = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <CircularProgress size={20} sx={{ color: "#00999E" }} />
      <Typography variant="span" sx={{ marginLeft: "20px", color: "#00999E" }}>
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default CustomCircularProgress;
