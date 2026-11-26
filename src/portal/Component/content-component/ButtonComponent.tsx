// @ts-nocheck
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "@/portal/navigation";

const ButtonComponent = ({
  sx,
  fontSize,
  padding,
  text,
  href,
  icon,
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
      sx={{
        color: color ?? "#ffffff",
        backgroundColor: backgroundColor ?? "#00999E",
        fontSize: { fontSize } ?? {
          lg: "10px",
          md: "10px",
          sm: "10px",
          xs: "5px"
        },
        padding: { padding } ?? {
          lg: "10px 30px",
          md: "10px 30px",
          sm: "5px 30px",
          xs: "3px 5px"
        },
        fontWeight: fontWeight ?? "200",
        textTransform: "capitalize",
        textAlign: "center",
        width: width ?? "200px",
        height: height ?? "40px",
        borderRadius: borderRadius ?? "8px",
        border: borderColor ? `1px solid ${borderColor}` : "none", 
        "&:hover": {
          backgroundColor: hoverbackgroundColor ?? "#00999E",
          color: hoverColor ?? "#ffffff"
        },
        ...sx
      }}
      endIcon={icon ? icon : ""}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
