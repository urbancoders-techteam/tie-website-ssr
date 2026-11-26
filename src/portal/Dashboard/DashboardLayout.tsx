// @ts-nocheck
"use client";

import React from "react";
import { Box } from "@mui/material";
import NavBar from "@/portal/Component/dashboard/navbar/NavBar";
import TopBar from "@/portal/Component/dashboard/TopBar";
import { useLocation, useNavigate } from "@/portal/navigation";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import EnrollmentRequiredDialog from "@/portal/Dashboard/Enrollment/EnrollmentRequiredDialog";
import {
  isEnrollmentGated,
  useEnrollmentAccess,
} from "@/portal/Dashboard/Enrollment/enrollmentAccess";

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { enrolled, checked, markEnrolled } = useEnrollmentAccess();
  const gated = isEnrollmentGated(location.pathname);
  const waiting = gated && !checked;
  const locked = gated && checked && !enrolled;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        bgcolor: "#F3F6F8",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          width: 260,
          flexShrink: 0,
          height: "100vh",
          bgcolor: "#ffffff",
          borderRight: "1px solid #E6EBEF",
        }}
      >
        <NavBar />
      </Box>

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexShrink: 0, position: "sticky", top: 0, zIndex: 1000 }}>
          <TopBar />
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: { xs: 2, md: 3 },
            py: { xs: 2, md: 3 },
          }}
        >
          {waiting ? (
            <CustomCircularProgress />
          ) : locked ? (
            <EnrollmentRequiredDialog
              open
              onClose={() => navigate("/dashboard/home")}
              onEnrolled={markEnrolled}
            />
          ) : (
            children
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
