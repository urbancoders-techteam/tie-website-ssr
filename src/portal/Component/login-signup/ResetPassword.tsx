// @ts-nocheck
import React from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "@/portal/navigation";
import resetpassword from "../../asset/resetpassword.png";

const ResetPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("New password is required")
        .min(8, "Password must be at least 8 characters long"),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      navigate("/login");
    },
  });

  return (
    <Box>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { lg: "500px", xs: "300px" },
          }}
        >
          <Box sx={{ width: { lg: "400px", xs: "300px" }, padding: "20px 0" }}>
            <img
              src={resetpassword}
              alt="reset-password_image"
              width={"100%"}
            />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: "500" }} gutterBottom>
            Reset Your Password
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
            Enter your new password.
          </Typography>

          <TextField
            fullWidth
            id="newPassword"
            name="newPassword"
            label="New Password"
            type="password"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            sx={{ mb: 2 }}
          />

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
            Reset Password
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ResetPassword;
