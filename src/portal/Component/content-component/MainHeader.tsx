// @ts-nocheck
import { Typography } from "@mui/material";
import React from "react";

const MainHeader = ({ color, textAlign, content, fontSize, fontWeight }) => {
    return (
        <Typography
            className="flip-header"
            variant="h4"
            sx={{
                fontSize: fontSize ?? { xs: "20px", sm: "26px", md: "36px", lg: "36px" },
                fontFamily: "Nunito, sans-serif",
                color: color ?? "#00999E",
                fontWeight: fontWeight ?? "600",
                textAlign: textAlign,
            }}
        >
            {content}
        </Typography>
    );
};

export default MainHeader;
