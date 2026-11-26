// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ServicesCard = ({
  id,
  icon,
  title,
  hoverIcon,
  isDottedLine,
  ind,
  lastIndex
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Check for small screens
  const isFullScreen = useMediaQuery((theme) => theme.breakpoints.down("lg")); // Check for small screens
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md")); // Check for small screens
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const hexagonContainerStyle = {
    position: "relative",
    width: isSmScreen ? "160.21px" : isMediumScreen ? "124.2px" : "167px",
    height: isSmScreen ? "160.21px" : isMediumScreen ? "124.2px" : "167px",
    borderColor: "red"
  };

  const hexagonStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    backgroundColor: isHovered ? "#5cd2d6" : "#E0F2F3",
    color: isHovered ? "white" : "#606060",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s, color 0.3s",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)"
  };

  const hexagonImageContainerStyle = {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",

    width: "40%", // Adjust size as needed
    height: "40%", // Adjust size as needed
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    transition: "background-color 0.3s, color 0.3s"
    // border: isHovered ? "2px solid white" : "2px solid white",
  };
  const hexagonBorder = {
    content: '""',
    width: "100%",
    height: "100%",
    backgroundColor: isHovered ? "#5cd2d6" : "#E0F2F3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const hexagonImageStyle = {
    width: "100%",
    height: "100%"
  };

  // const smallCircleStyle = {
  //   position: "absolute",
  //   top: "-120px",
  //   left: "50%",
  //   transform: "translateX(-50%)",
  //   width: isSmScreen ? "32px" : isMediumScreen ? "38px" : "40px",
  //   height: isSmScreen ? "32px" : isMediumScreen ? "38px" : "40px",
  //   borderRadius: "50%",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   cursor: "pointer",
  //   border: "2px solid #5cd2d6",
  //   transition: "background-color 0.3s, color 0.3s",
  //   backgroundColor: isHovered ? "#5cd2d6" : "#E0F2F3",
  //   color: isHovered ? "white" : "black",
  //   "&:hover": {
  //     backgroundColor: "#00999e",
  //     color: "white",
  //   },
  // };

  const dottedLineStyle = {
    zIndex: 0,
    content: '""',
    position: "absolute",
    width: isMediumScreen
      ? "170px "
      : isFullScreen
      ? "215px"
      : isLargeScreen
      ? "267px"
      : isSmScreen
      ? "75px"
      : "267px",
    height: "0",
    borderBottom: "3px dashed #5cd2d6",
    top: "calc(50% - 3px)",
    left: isMediumScreen
      ? "-170px"
      : isFullScreen
      ? "-215px"
      : isLargeScreen
      ? "-267px"
      : "-267px"
  };

  const For3CarddottedLineStyle = {
    zIndex: 0,
    content: '""',
    position: "absolute",
    width: isMediumScreen
      ? "180px "
      : isFullScreen
      ? "280px"
      : isLargeScreen
      ? "335px"
      : "335px",
    height: "0",
    borderBottom: "3px dashed #5cd2d6",
    top: "calc(50% - 3px)",
    left: isMediumScreen
      ? "-180px"
      : isFullScreen
      ? "-280px"
      : isLargeScreen
      ? "-335px"
      : "-335px"
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "100px",
            alignItems: "center"
          }}
        >
          <div style={{ width: `calc(50%  - 16px)` }}>
            {ind === 0 || isMediumScreen ? null : (
              <div style={{ borderBottom: "3px dashed #5cd2d6" }}></div>
            )}
          </div>
          <div
            style={{
              width: isSmScreen ? "32px" : isMediumScreen ? "38px" : "40px",
              height: isSmScreen ? "32px" : isMediumScreen ? "38px" : "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "2px solid #5cd2d6",
              transition: "background-color 0.3s, color 0.3s",
              backgroundColor: isHovered ? "#5cd2d6" : "#E0F2F3",
              color: isHovered ? "white" : "black",
              "&:hover": {
                backgroundColor: "#00999e",
                color: "white"
              }
            }}
          >
            <Typography variant="subtitle1">{id}</Typography>
            {/* {id !== 1 && id !== 5 && !isSmScreen &&
          <div style={isDottedLine ? For3CarddottedLineStyle : dottedLineStyle} ></div>} */}
          </div>
          <div style={{ width: `calc(50%  - 16px)` }}>
            {lastIndex === ind || isMediumScreen ? null : (
              <div style={{ borderBottom: "3px dashed #5cd2d6" }}></div>
            )}
          </div>
        </div>
        <div
          style={hexagonContainerStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Paper elevation={3} style={hexagonStyle}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontFamily: "Nunito, sans-serif",
                fontSize: {
                  xs: "12.979px",
                  sm: "13.979px",
                  md: "16.979px",
                  lg: "16.979px"
                },
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                textTransform: "capitalize",
                padding: 5
              }}
            >
              {title}
            </Typography>
          </Paper>
          <div style={hexagonImageContainerStyle}>
            <Paper elevation={3} style={hexagonStyle}>
              <Paper style={hexagonBorder}>
                {isHovered ? (
                  <img alt="Hexagon_Image" src={hoverIcon} />
                ) : (
                  <img alt="Hexagon_Image" src={icon} />
                )}
              </Paper>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
