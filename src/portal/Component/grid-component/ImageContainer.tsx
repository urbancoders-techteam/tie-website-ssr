// @ts-nocheck
import { Box } from "@mui/material";
import React from "react";

const ImageContainer = ({ img, alt ="img" }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={img} alt={alt} width="85%" height="85%" />
      </Box>
    </>
  );
};

export default ImageContainer;
