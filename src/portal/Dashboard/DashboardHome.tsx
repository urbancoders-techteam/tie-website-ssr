// @ts-nocheck
import React, { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import Header from "@/portal/Component/content-component/Header";
import { useDispatch, useSelector } from "react-redux";
import { getPlanStatusForHomePageAsync } from "@/portal/redux/services/studyAbroadServices";
import { studyAbroadImageUrl, WEB_URL } from "@/portal/config";

const studyAbroadAsset = (file) => `${studyAbroadImageUrl || ""}${file}`;

const SERVICES = [
  {
    file: "study-abroad.svg",
    title: "STUDY ABROAD",
    path: "/dashboard/admission",
    para: "Discover top universities and programs worldwide to advance your education and career. Our experts guide you through admissions, visas, and scholarships.",
    secondButtonPath: "/dashboard/study-abroad-plan",
    requiresApproval: true,
  },
  {
    file: "immersion.svg",
    title: "IMMERSION",
    path: `${WEB_URL}immersion`,
    para: "Strengthen global networks and foster cross-cultural collaboration for academic and professional growth. We help you navigate international partnerships and exchanges.",
  },
  {
    file: "mbbs.svg",
    title: "MBBS Abroad",
    path: `${WEB_URL}international-relation`,
    para: "Experience deep cultural and language learning through tailored programs abroad. Accelerate fluency while living and studying in your target country.",
  },
  {
    file: "test-prep.svg",
    title: "TEST PREP",
    path: "/dashboard/test-prep",
    para: "Achieve your best scores with personalized coaching for exams like IELTS, TOEFL, PTE, GRE, GMAT, SAT. Our proven strategies boost confidence and performance.",
    secondButtonPath: "/test",
  },
];

function toCard(service, isStudyAbroadApproved) {
  const approved = Boolean(isStudyAbroadApproved);
  return {
    image: studyAbroadAsset(service.file),
    title: service.title,
    path: service.path,
    para: service.para,
    showFirstButton: service.requiresApproval ? approved : true,
    showSecondButton: service.requiresApproval ? !approved : false,
    secondButtonPath: service.secondButtonPath,
  };
}

const DashboardHome = () => {
  const dispatch = useDispatch();
  const planStatus = useSelector(
    (state) => state.studyAbroad.getPlanStatusForHomePage,
  );
  const { isStudyAbroadApproved, isLoading } = planStatus || {};
  const [username] = useState(() =>
    typeof window === "undefined" ? "" : sessionStorage.getItem("username") || "",
  );

  useEffect(() => {
    dispatch(getPlanStatusForHomePageAsync());
  }, [dispatch]);

  return (
    <Container maxWidth="xl" >
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#00999E" }}>
          Welcome To Student Dashboard
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "32px" },
            fontWeight: 700,
            color: "#1C2B33",
            lineHeight: 1.15,
          }}
        >
          {username || "Student"}
        </Typography>
      </Box>
      <Box sx={{ mb: "20px", }}>
        <Header color="#00999e" textAlign="center" content="Our Services" />
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "0 16px",
        }}
      >
        {SERVICES.map((service, index) => (
          <Grid
            item
            key={service.path}
            xs={12}
            sm={6}
            md={6}
            lg={5.8}
            xl={5.8}
            display="flex"
            justifyContent="center"
          >
            <DashboardCard
              data={toCard(service, isStudyAbroadApproved)}
              id={index + 1}
              isLoading={isLoading}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardHome;
