// @ts-nocheck
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";
import bannerimg1 from "../../../../asset/TestPrepDashboard/homebanner1.png";
import bannerimg2 from "../../../../asset/TestPrepDashboard/homebanner2.png";
import bannericon from "../../../../asset/TestPrepDashboard/bannericon.png";
import { useNavigate } from "@/portal/navigation";

const FacultyConnectBanner = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        background: "linear-gradient(to right, #D9FBFE, #D9FBFE)",
        border: "2px solid #00999E",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "10px", sm: "20px" },
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          mb: "20px",
          border: "2px solid white",
          padding: { xs: "10px 20px", sm: "10px 30px" },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "30px",
          background: "linear-gradient(to right, #dff6fb, #dae8ee)",
        }}
      >
        <img
          src={bannericon}
          alt=""
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
        />
        <Typography
          sx={{
            padding: "0 10px",
            fontSize: { xs: "18px", sm: "24px" },
            color: "#4d4d4d",
            textAlign: "center",
          }}
        >
          Connect With Our Faculty
        </Typography>
      </Box>
      <Typography
        sx={{
          padding: "0 15px",
          fontSize: { xs: "18px", sm: "24px" },
          color: "#4d4d4d",
          textAlign: "center",
          mb: "20px",
        }}
      >
        <Typography
          sx={{
            padding: "0 15px",
            fontSize: { xs: "20px", sm: "28px" },
            fontWeight: "500",
            color: "#000",
          }}
        >
          Schedule Your Initial Orientation & Doubt Clearance <br />
          sessions with our faculty
        </Typography>
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ width: "100%", maxWidth: { xs: "300px", md: "350px" } }}>
            <img
              src={bannerimg1}
              alt={"group-image"}
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 2, md: 0 },
          }}
        >
          <ButtonComponent
            text={"SCHEDULE"}
            onClick={() => {
              navigate("/dashboard/scheduleForm");
            }}
            fontWeight={"550"}
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              padding: { xs: "8px 16px", sm: "10px 20px" },
            }}
          />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box>
            <img
              src={bannerimg2}
              alt={"group-image"}
              style={{ width: "100%", maxWidth: "300px", objectFit: "contain" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FacultyConnectBanner;
