// @ts-nocheck
import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React, { useState } from "react";
import "../globle.css";
import ImmigrationOfferCard from "@/portal/Component/card-components/ImmigrationOfferCard";
import Header from "@/portal/Component/content-component/Header";
import immigrationOfferData from "@/portal/json/immigrationOfferData";

const ServiceWeOffer = () => {
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState(null);
  return (
    <div>
      <Stack
        gap={3}
        direction="column"
        sx={{

          textAlign: "center",
          padding: "60px 0",
        }}
      >
        <Header
          content={"Services We Offer"}
          textAlign={"center"}
        />

        <Box
          sx={{
            padding: "50px 0",
          }}
          id="mbbsRules"
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {immigrationOfferData?.map((item, index) => (
                <Grid item xs={12} sm={12} md={4} key={index}>
                  <ImmigrationOfferCard
                    data={item}
                    key={index}
                    setContent={setContent}
                  />
                </Grid>
              ))}
            </Grid>

          </Container>
        </Box>
      </Stack>
    </div>
  );
};

export default ServiceWeOffer;
