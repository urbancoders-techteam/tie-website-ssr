// @ts-nocheck
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import Header from "@/portal/Component/content-component/Header";

const ImmigrationCountryCriteria = ({ data }) => {
  return (
    <>
      <Box sx={{ bgcolor: "#effdff", padding: "40px 0" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 5,
              marginTop: 5,
            }}
          >
            <Header content={data?.heading} textAlign={"center"} />
          </Box>
          <Grid
            container
            spacing={2}
            columns={data?.items?.length >= 4 ? 15 : 12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {data?.items?.map((item) => (
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box>
                  <Box
                    sx={{
                      width: "210px",
                      height: "250px",
                      bgcolor: "#00999E",
                      borderRadius: "10px",
                      border: "2px solid #00999E",
                      boxShadow: " rgba(100, 100, 111, 0.2) 7px 7px 29px 0px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ width: "100px" }}>
                      <img
                        src={item?.img}
                        width={"100%"}
                        alt="immigration-benefit"
                      />
                    </Box>
                    <Box sx={{ width: "180px", padding: "10px 0" }}>
                      <Typography
                        variant="h6"
                        textAlign={"center"}
                        sx={{ color: "#ffffff" }}
                      >
                        {item?.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ImmigrationCountryCriteria;
