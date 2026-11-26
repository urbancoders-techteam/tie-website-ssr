// @ts-nocheck
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import Cta from "@/portal/Component/card-components/Cta";
const imageBaseUrl = process.env.REACT_APP_IMAGE_URL
const Girlimg = imageBaseUrl + 'GirlImageImmigration.svg'


const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(16, 144, 203, 0.1)",
        height: "auto",
        padding: { xs: "30px 15px ", sm: "40px 40px " }
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Grid
            item
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Box>
              <MainHeader
                color="rgba(0, 0, 0, 0.7)"
                content={
                  <Box sx={{ fontSize: { xs: "20px", sm: "40px" } }}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: "#00999E",
                        display: "inline-block",
                        fontWeight: "inherit",
                        fontSize: "inherit"
                      }}
                    >
                      Immigration:{" "}
                    </Typography>{" "}
                    Where dreams take flight and cultures unite.
                  </Box>
                }
              />

              <Box sx={{ my: { xs: 2, sm: 5 } }}>
                <Cta title={"BOOK A COUNSELLING SECTION"} />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                width: "100%",
                height: { md: "300px", sm: "300px", xs: "250px", lg: "450px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundRepeat : "no-repeat",
              }}
            >
              <img
                src={Girlimg}
                height={"100%"}
                width={"100%"}
                style={{ objectFit: "cover" }}
                alt="banner"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
