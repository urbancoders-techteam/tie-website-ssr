// @ts-nocheck
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import React from "react";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import SupportBanner from "./component/supportbanner";
import SupportFaq from "./component/supportFaq";

const Support = () => {
  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: "30px",
          alignItems: "center"
        }}
      >
        <Icon
          icon="ic:baseline-contact-phone"
          style={{ color: "#00999E", fontSize: "28px" }}
        />
        <Box sx={{ pl: "20px" }}>
          <MainHeader
            content={"Support"}
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>
      <SupportBanner />
      <SupportFaq />
    </Box>
  );
};

export default Support;
