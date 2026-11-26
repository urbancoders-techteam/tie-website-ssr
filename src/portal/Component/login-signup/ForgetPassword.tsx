// @ts-nocheck
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "@/portal/navigation";
import forgetpassword from "../../asset/forgetpassword.png";

const ForgetPassword = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phone: "",
      otp: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Phone number is not valid"), // Assuming a 10-digit phone number
      otp: Yup.string().when("otpSent", {
        is: true,
        then: Yup.string().required("OTP is required"),
      }),
    }),
    onSubmit: (values) => {
      if (!otpSent) {
        setOtpSent(true);
      } else {
        navigate("/reset-password");
      }
    },
  });

  const handleOtpChange = (index, event) => {
    const value = event.target.value;
    if (/\d/.test(value) || value === "") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Move to the next input box if a digit is entered
      if (value !== "" && index < otpValues.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleOtpKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otpValues[index]) {
      if (index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };

  return (
    <Box>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: { lg: "500px", xs: "300px" },
          }}
        >
          <Box sx={{ width: { lg: "350px", xs: "300px" }, padding: "20px 0" }}>
            <img
              src={forgetpassword}
              alt="forget-password_image"
              width={"100%"}
            />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: "500" }} gutterBottom>
            Forgot Your Password?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              textAlign: "center",
              padding: "10px 30px",
            }}
            gutterBottom
          >
            Enter your phone number and we will send you "OTP" to reset your
            password.
          </Typography>

          {!otpSent && (
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              sx={{ mb: 2 }}
            />
          )}

          {otpSent && (
            <Grid container spacing={1} sx={{ mb: 2 }}>
              {otpValues.map((otp, index) => (
                <Grid item xs={2} key={index}>
                  <TextField
                    fullWidth
                    id={`otp-${index}`}
                    name={`otp-${index}`}
                    value={otp}
                    onChange={(e) => handleOtpChange(index, e)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: "center" },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          <Button
            color="primary"
            variant="contained"
            sx={{
              backgroundColor: "#00999E",
              "&:hover": { backgroundColor: "#00999E" },
            }}
            fullWidth
            type="submit"
          >
            {otpSent ? "Verify OTP" : "Send OTP"}
          </Button>

          <Button
            fullWidth
            sx={{ mt: 2, color: "#00999E" }}
            onClick={() => navigate("/login")}
          >
            Back to login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgetPassword;
