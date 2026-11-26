// @ts-nocheck
import { Box } from "@mui/material";
import React from "react";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import { Icon } from "@iconify/react";
import CommunitySupportBanner from "./component/banner";
// import Post from "./component/comunity_post";

const Community = () => {
  
  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mb: "20px"
        }}
      >
        <Box sx={{ pl: "20px", py: 2  }}>
          <MainHeader
            content={"~Welcome to Taksheela Community~"}
            fontWeight={"550"}
            fontSize={"30px"}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", mb: "30px" }}>
        {/* <Icon icon={"medical-icon:i-interpreter-services"} /> */}
        <Box
          sx={{
            bgcolor: "#00999E",
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px"
          }}
        >
          <Icon
            icon={"medical-icon:i-interpreter-services"}
            style={{ fontSize: "25px", color: "#fff" }}
          />
        </Box>
        <Box sx={{ pl: "20px" }}>
          <MainHeader
            content={"Community Forum"}
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>
      <CommunitySupportBanner />
      {/* <Post /> */}
    </Box>
  );
};

export default Community;
