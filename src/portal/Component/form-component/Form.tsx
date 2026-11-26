// @ts-nocheck
import { Box, TextField } from "@mui/material";
import { Typography, useMediaQuery } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useSnackbar } from "../Snakbar";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

function FormComponent({
  handleCloseDialog,
  filters,
  setFilters = () => {},
  isFormValid,
}) {
  const { showSnackbar } = useSnackbar();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [isErrorShow, setIsErrorShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (values) => {
    setFilters(values); // Update the parent state with form values
    if (isFormValid) {
      setIsErrorShow(!values.name || !values.phone || !values.email);
      if (!values.name) errors.name = "Name is required";
      if (!values.phone) errors.phone = "Phone is required";
      if (!values.email) errors.email = "email is required";
      if (isErrorShow) return;
    }
    showSnackbar("Form submitted successfully!", "success");
    if (handleCloseDialog) handleCloseDialog();
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Formik
        initialValues={{
          name: filters?.name || "",
          phone: filters?.phone || "",
          email: filters?.email || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form
            style={{
              padding: "20px",
              display: "grid",
              alignContent: "space-between",
            }}
          >
            <Field
              as={TextField}
              id="name"
              label="Name"
              variant="outlined"
              color="#eeeeee"
              name="name"
              size={isSmallScreen ? "small" : "medium"}
              required
              margin="normal"
              onChange={(e) => {
                handleChange(e);
                setFilters((prev) => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
              onBlur={handleBlur}
            />
            {isFormValid && !values.name && (
              <Typography sx={{ color: "red" }}>Name is required</Typography>
            )}

            <Field
              as={TextField}
              id="phone"
              label="Phone"
              type="text"
              variant="outlined"
              color="#eeeeee"
              name="phone"
              size={isSmallScreen ? "small" : "medium"}
              required
              margin="normal"
              onChange={(e) => {
                handleChange(e);
                setFilters((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }));
              }}
              onBlur={handleBlur}
              inputProps={{ maxLength: 10 }}
            />
            {isFormValid && !values.phone && (
              <Typography sx={{ color: "red" }}>
                Phone Number is required
              </Typography>
            )}

            <Field
              as={TextField}
              id="email"
              label="Email"
              variant="outlined"
              color="#eeeeee"
              type="email"
              name="email"
              size={isSmallScreen ? "small" : "medium"}
              required
              margin="normal"
              onChange={(e) => {
                handleChange(e);
                setFilters((prev) => ({
                  ...prev,
                  email: e.target.value,
                })); // Update filters
              }}
              onBlur={handleBlur}
            />
            {isFormValid && !values.email && (
              <Typography sx={{ color: "red" }}>Email is required</Typography>
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default FormComponent;
