// @ts-nocheck
import React from "react";
import { Container, Stack, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "@/portal/navigation";
const imageBaseUrl = process.env.REACT_APP_IMAGE_URL;
const image1 = imageBaseUrl + "TestPrepDashboard/Mock-Test.png";

const TestCalculation = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 5 }}>
      <Stack spacing={4} alignItems="center">
        <Box
          component="img"
          src={image1}
          alt="Test Calculation Illustration"
          sx={{ maxWidth: "100%", height: "auto" }}
        />
        <Typography
          variant="h5"
          color="#00999E"
          sx={{ fontWeight: 550, fontSize: "28px" }}
        >
          Your Test Calculation is in process,
          <br />
          Please view after sometime
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Lorem Ipsum Dolor Sit Amet Consectetur. Vel Elementum Sollicitudin Vestibulum Ultricies Est Magna. 
          Pellentesque Iaculis Risus Tellus Duis Interdum In Tortor Eu Ultrices. Eu Eu Euismod Curabitur Ultricies Facilisis. */}
        </Typography>
        <Button
          variant="contained"
          onClick={handleGoBack}
          sx={{
            width: "200px",
            backgroundColor: "#00999e",
            "&:hover": { backgroundColor: "#007b80" },
          }}
        >
          Go Back
        </Button>
      </Stack>
    </Container>
  );
};

export default TestCalculation;
