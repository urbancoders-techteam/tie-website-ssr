// @ts-nocheck
import React from "react";
import FlipCard from "@/portal/Component/card-components/FlipCard";
import Header from "@/portal/Component/content-component/Header";
import immigrationEligibilityData from "@/portal/json/immigrationEligibilityData";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/GridLegacy";

import Cta from "@/portal/Component/card-components/Cta";

const EligibilityCriteria = () => {
  
  return (
    <>
      <Box sx={{ padding: "50px 0" }} id="indiaCriteria">
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0 50px",
            }}
          >
            <Header
              content={"Eligibility Criteria"}
              textAlign={"center"}
            />
          </Box>

          <Grid container spacing={4} columns={{ xs: 12, sm: 12, md: 14, lg: 16, xl: 16 }} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {immigrationEligibilityData?.map((eligibility) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={3}
                xl={3}
                key={eligibility.title}
                sx={{ textAlign: "-webkit-center" }}
              >
                <FlipCard data={eligibility} height="270px" width="220px" isFlip={false} isHover={true} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: { xs: 2, sm: 8, textAlign: 'center' } }}>
            <Cta title={"BOOK A COUNSELLING SECTION"} />

          </Box>
        </Container>
      
      </Box>
    </>
  );
};

export default EligibilityCriteria;
