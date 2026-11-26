// @ts-nocheck
import { Typography } from "@mui/material";
import React from "react";

const Header = ({ color, textAlign, content, fontSize, content1, sx }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: fontSize ?? { xs: "24px", sm: "26px", md: "36px", lg: "36px" },
        fontFamily: "Nunito, sans-serif",
        color: color ?? "#00999E",
        fontWeight: "600",
        textAlign: textAlign,
        ...sx
      }}
    >
      ~{content}~
    </Typography>
  );
};

export default Header;
