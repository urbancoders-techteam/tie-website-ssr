// @ts-nocheck
import { Box, Container, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";


const MainContainer = ({ com1, com2, color, dir }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Box sx={{ backgroundColor: `${color}`, padding: { xs: "20px 0", sm: "30px 0", md: "50px 0", lg: "50px 0" } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} direction={isSmallScreen ? dir : "row"}>
          <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }} >
            {com1}
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
            {com2}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContainer;
