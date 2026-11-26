// @ts-nocheck
import React, { useState } from "react";
import {
  Card,
  Stack,
  Typography,
  TextField,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbar } from "../Snakbar";

function CustomCard({ brochureUrl, setOpenDialog, showBrochers = false }) {
  const { showSnackbar } = useSnackbar();
  const theme = useTheme();
  const currentPathname = window.location.pathname;
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isMediumToLargeScreen = useMediaQuery(
    theme.breakpoints.between("md", "lg")
  );

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true); // Start loading
      await handleSubmit(values);
      setLoading(false); // Stop loading after submission
    },
  });

  const handleSubmit = async (payload) => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}student/schedule-meeting`,
        payload,
        {
          headers: {
            Authorization: `${sessionStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        showSnackbar("Successfully created Unlock Your Dreams", "success");
        if (!showBrochers) setOpenDialog(false);
        setShowDownloadButton(true);
      } else {
        showSnackbar("Unlock Your Dreams Not Created", "error");
        setShowDownloadButton(true);
        formik.resetForm();
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      const msg =
        error?.response?.data?.message || "Unlock Your Dreams Not Created";
      showSnackbar(msg, "error");
      if (setOpenDialog) setOpenDialog(false);
      else formik.resetForm();
    }
  };

  const handleDownloadBrochure = () => {
    if (brochureUrl) window.open(brochureUrl, "_blank");
    setOpenDialog(false);
  };

  return (
    <Card
      sx={{
        padding: "0px 12px 20px 12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        width: "100%", // Ensure it takes full width for small screens
        maxWidth:
          currentPathname === "/" ? { xs: "100%", md: "300px" } : "400px", // Add a max width for larger screens
        boxSizing: "border-box",
        boxShadow: "none",
        backgroundColor: currentPathname === "/" ? "none" : "transparent",
        ...(isSmallScreen
          ? {
              position: "relative", // No specific positioning for small screens
              maxWidth: "100%", // Allow full width on small screens
              marginRight: "0", // Ensure no right margin on small screens
            }
          : {
              position: currentPathname === "/" ? "absolute" : "relative",
              top:
                currentPathname === "/"
                  ? isMediumToLargeScreen
                    ? "14%"
                    : "20%"
                  : "0",
              left: currentPathname === "/" ? "56%" : "0",
              bottom: "auto", // Adjust as needed,
            }),
        marginTop: currentPathname !== "/" ? "15px" : 0,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          backgroundColor: "none",
          width: currentPathname === "/" && isSmallScreen ? "100%" : "auto",
          marginTop:
            currentPathname === "/" && isSmallScreen ? 2 : "transparent",
          // border : isSmallScreen && currentPathname === "/" ? '.1px solid black'  : "none"
        }}
      >
        {/* <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 500, backgroundColor: "#00999E", color: "white", padding: "12px", borderRadius: 2 }}> */}
        <Typography
          variant={currentPathname === "/" ? "h6" : "h5"}
          sx={{
            textAlign: "center",
            fontWeight: 500,
            backgroundColor: "#00999E",
            color: "white",
            padding: isSmallScreen ? "8px" : "12px",
            minWidth: currentPathname === "/" ? "300px" : "transparent",
            borderRadius: currentPathname !== "/" ? 2 : 0,
          }}
        >
          Register Now
        </Typography>

        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "grid",
            gap: "10px",
            width: "100%",
            padding: currentPathname === "/" ? "0 20px" : "transparent",
            backgroundColor: "none",
            boxShadow: "none",
          }}
        >
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            required
          />

          <TextField
            id="phone"
            name="phone"
            label="Phone"
            variant="outlined"
            {...formik.getFieldProps("phone")}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            required
            inputProps={{ maxLength: 10 }}
          />

          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            required
          />

          <Box sx={{ marginTop: "3px" }}>
            {/* Updated Button to LoadingButton */}
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loading} // Controlled by state
              disabled={loading}
              sx={{
                backgroundColor: "#00999E",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
                width: "100%",
                "&:hover": { backgroundColor: "#007a7e" },
              }}
            >
              Schedule A Meeting
            </LoadingButton>

            {showDownloadButton && showBrochers && (
              <Button
                variant="contained"
                onClick={handleDownloadBrochure}
                sx={{
                  marginTop: 2,
                  backgroundColor: "#00999E",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  width: "100%",
                  "&:hover": { backgroundColor: "#007a7e" },
                }}
              >
                Download Brochure
              </Button>
            )}
          </Box>
        </form>
      </Stack>
    </Card>
  );
}

export default CustomCard;
