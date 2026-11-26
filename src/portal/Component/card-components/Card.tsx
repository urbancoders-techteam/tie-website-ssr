// @ts-nocheck
import { Box, Typography } from "@mui/material";
import React from "react";

const Card = ({
  borderRadius,
  data,
  width,
  height,
  hoverHeight,
  listStyle,
  fontSize,
  textAlign,
  initialheight,
  padding,
  cardWidth,
  cardHeight,
  isContent = true,
  margin,
  titleFontSize,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: cardWidth ?? "230px",
        height: cardHeight ?? "280px",
        position: "relative",
        padding: "15px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        "&:hover .childBox": {
          height: hoverHeight ?? "100%",
        },
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <img
        src={data?.image || data?.Image || undefined}
        alt={data?.title}
        width={width}
        height={height}
        style={{
          borderRadius: borderRadius,
        }}
      />

      <Box
        className="childBox"
        sx={{
          position: "absolute",
          left: "0",
          bottom: "0",
          width: "100%",
          height: initialheight ?? "22%",
          backgroundColor: "#0A9DA2",
          borderRadius: "10px",
          color: "#ffffff",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          transition: "all 0.5s linear",
          "&:hover": {
            height: hoverHeight ?? "100%",
          },
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontSize: titleFontSize ?? "20px",
              fontWeight: "500",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {data?.title}
          </Typography>
          <Box sx={{ mt: 3, padding: padding ?? 0, ml: 1 }}>
            {isContent && <Typography>{data?.content}</Typography>}

            <ul>
              {data?.items?.map((item, index) => (
                <li
                  key={`${index}-${item}`}
                  style={{
                    fontSize: fontSize ?? "12px",
                    fontFamily: "Nunito, sans-serif",
                    textAlign: textAlign ?? "center",
                    margin: margin ?? "10px",
                    listStyle: listStyle ?? "disc",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
