// @ts-nocheck
  import { Typography } from "@mui/material";
  import React from "react";

  const ParaData = ({ color, textAlign, content, fontWeight, fontSize, sx }) => {
    return (
      <Typography
        sx={{
          fontSize: `${fontSize}`,
          fontFamily: "Nunito, sans-serif",
          margin: "8px 0",
          color: `${color}`,
          fontWeight: `${fontWeight}`,
          textAlign: textAlign ?? "left",
          ...sx,
              }}
      >
        {content}
      </Typography>
    );
  };

  export default ParaData;
