// @ts-nocheck
import React from "react";
import FlipCard from "@/portal/Component/card-components/FlipCard";
import Header from "@/portal/Component/content-component/Header";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import immigrationChooseData from "@/portal/json/immigrationChooseData";
import Cta from "@/portal/Component/card-components/Cta";
// import LetsGetStarted from "@/portal/Component/LetsGetStarted";

const WhyChooseUs = () => {
  return (
    <Box pt={6} pb={8}>
      {/* <LetsGetStarted top="20px" bottom="20px" /> */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "30px 0",
          }}
        >
          <Header
            content={"Why Choose Us"}
            textAlign={"center"}
          />
        </Box>

        <Grid container spacing={3} columns={{ xs: 12, sm: 16, md: 16, lg: 16 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          {immigrationChooseData?.map((eligibility) => (
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              lg={3}
              xl={3}
              key={eligibility.title}
              sx={{ textAlign: "-webkit-center" }}
            >
              <FlipCard data={eligibility} cardheight="250px" cardwidth="220px" fontSize="13px" />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>

          <Cta title={"BOOK A COUNSELLING SECTION"} />
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
