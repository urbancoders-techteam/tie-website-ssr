// @ts-nocheck
import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import Post from "./component/comunity_post";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";
import { useNavigate } from "@/portal/navigation";

const JoinCommunity = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mb: "20px",
        }}
      >
        <Box sx={{ pl: "20px", py: 2 }}>
          <MainHeader
            content={"~Welcome to Taksheela Community~"}
            fontWeight={"550"}
            fontSize={"30px"}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: 2,
          justifyContent: isSmallScreen ? "center" : "space-between",
          paddingRight: "20px",
          paddingLeft: "20px",
          mb: "20px",
          alignItems: "center",
        }}
      >
        <ButtonComponent text="Back" onClick={handleBack} />
        <ButtonComponent text="Create Post" href="createcommunitypost" />
      </Box>
      <Post />
    </Box>
  );
};

export default JoinCommunity;
