// @ts-nocheck
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "@/portal/navigation";

const CustomButtonComponent = ({
  fontSize,
  padding,
  text,
  href,
  startIcon,
  endIcon,
  borderRadius,
  backgroundColor,
  color,
  width,
  onClick,
  hoverColor,
  onClose,
  height,
  fontWeight,
  disabled,
  hoverbackgroundColor,
  borderColor,
}) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    window.scrollTo(0, 0);
    navigate(href);
  };

  return (
    <Button
      onClick={onClick ?? handleNavigation}
      onClose={onClose}
      disabled={disabled ?? false}
      startIcon={startIcon ?? null}
      endIcon={endIcon ?? null}
      sx={{
        color: color ?? "#ffffff",
        backgroundColor: backgroundColor ?? "#00999E",
        fontSize: fontSize ?? {
          lg: "14px",
          md: "12px",
          sm: "10px",
          xs: "8px",
        },
        padding: padding ?? {
          lg: "10px 30px",
          md: "10px 20px",
          sm: "8px 15px",
          xs: "5px 10px",
        },
        fontWeight: fontWeight ?? "400",
        textTransform: "capitalize",
        textAlign: "center",
        whiteSpace: "normal", // Allows text to wrap
        overflow: "hidden", // Prevents overflow
        textOverflow: "ellipsis", // Adds ellipsis for overflowed text
        width: width ?? "200px",
        height: height ?? "auto", // Adjusts height based on text
        borderRadius: borderRadius ?? "8px",
        border: borderColor ? `1px solid ${borderColor}` : "none",
        display: "flex", // Ensures flexibility
        alignItems: "center", // Centers items vertically
        justifyContent: "center", // Centers text horizontally
        flexWrap: "wrap", // Wraps text if needed
        "&:hover": {
          backgroundColor: hoverbackgroundColor ?? "#007a76",
          color: hoverColor ?? "#ffffff",
        },
        margin: "0 auto"
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButtonComponent;
