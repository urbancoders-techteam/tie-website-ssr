// @ts-nocheck
import React from "react";
import CareerMapForm from "../CareerMapForm";
import { Box } from "@mui/material";

export default function CareerSelectedCard() {
  return (
    <Box sx={{ mt: "20px", px: { xs: "16px", sm: "24px" } }}>
      <CareerMapForm />
    </Box>
  );
}
