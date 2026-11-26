// @ts-nocheck
import React from "react";
import { Box, Button, Container, TextField, useTheme, useMediaQuery, Card, Typography, Stack, ThemeProvider, CircularProgress } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useFormik } from "formik";
import * as yup from "yup";
import Header from "@/portal/Component/content-component/Header";
import bgImage from "../../../asset/TestPrepDashboard/supportbg.png";
import axios from "axios";
import { useSnackbar } from "@/portal/Component/Snakbar";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

function SupportBanner() {
  const theme = useTheme();
  const { showSnackbar } = useSnackbar();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const token = sessionStorage.getItem("authToken");

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      remark: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}student/get-in-touch`,
          {
            mobile: values.phone,
            email: values.email,
            remark: values.remark,
            source: window.location.href,
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          showSnackbar("Form submitted successfully!", "success");
          resetForm();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        showSnackbar("Failed to submit the form. Please try again.", "error");
      } finally {
        setSubmitting(false); // stop loading after request completes
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${bgImage}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: isSmallScreen
            ? "60vh"
            : isMediumScreen
            ? "70vh"
            : isLargeScreen
            ? "70vh"
            : "75vh",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Container>
          <Grid container>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Container>
                <Header content="Contact Us" color={"#ffffff"} />
                <Typography
                  sx={{
                    color: "#b6b7b8",
                    fontSize: { xs: 12, sm: 12, md: 20, lg: 20 },
                    fontWeight: 550,
                    lineHeight: 1.2,
                    width: "50%",
                  }}
                >
                  Have questions? The quickest way to get in touch with us is
                  using the contact information below.
                </Typography>
              </Container>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <Container>
                <Card
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    maxWidth: "70%",
                    padding: isSmallScreen ? "10px" : "20px",
                    boxShadow: 3,
                  }}
                >
                  <Stack>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "start",
                        fontWeight: "500",
                        color: "#000",
                        p: isSmallScreen ? 0.8 : 1.5,
                      }}
                    >
                      GET IN TOUCH
                    </Typography>
                  </Stack>

                  <form
                    onSubmit={formik.handleSubmit}
                    style={{
                      display: "grid",
                      gap: "10px",
                    }}
                  >
                    <TextField
                      id="phone"
                      name="phone"
                      label="Phone"
                      type="text"
                      variant="outlined"
                      value={formik.values.phone}
                      size={isSmallScreen ? "small" : "medium"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                      required
                      margin="dense"
                    />
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={formik.values.email}
                      size={isSmallScreen ? "small" : "medium"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      required
                      margin="dense"
                    />

                    <TextField
                      id="remark"
                      name="remark"
                      label="Write Your Message"
                      variant="outlined"
                      type="text"
                      value={formik.values.remark}
                      size={isSmallScreen ? "small" : "medium"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.remark && Boolean(formik.errors.remark)
                      }
                      helperText={formik.touched.remark && formik.errors.remark}
                      required
                      margin="dense"
                    />

                    <Box
                      sx={{
                        textAlign: "center",
                        marginTop: 2,
                      }}
                    >
                      <Button
                        type="submit"
                        disabled={formik.isSubmitting}
                        sx={{
                          fontSize: "16px",
                          color: "white",
                          backgroundColor: "#00999e",
                          padding: "10px 20px",
                          "&:disabled": {
                            backgroundColor: "#80cfd1",
                          },
                        }}
                      >
                        {formik.isSubmitting ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : (
                          "SUBMIT"
                        )}
                      </Button>
                    </Box>
                  </form>
                </Card>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SupportBanner;
