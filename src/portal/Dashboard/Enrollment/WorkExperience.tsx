// @ts-nocheck
import React from "react";
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  company: yup.string().required("Company is required"),
  designation: yup.string().required("Designation is required"),
  // duration: yup.string().required("Duration is required")
  duration: yup
    .string()
    .matches(/^\d+$/, "Duration must be a number")
    .required("Duration is required"),
});

const WorkExperience = ({ workData, setWorkData }) => {
  const formik = useFormik({
    initialValues: { company: "", designation: "", duration: "" },
    validationSchema,
    onSubmit: (values) => handleAdd(values),
  });

  const handleAdd = (newWork) => {
    // if (
    //   !workData.some((item) =>
    //     Object.keys(item).every((key) => item[key] === newWork[key])
    //   )
    // ) {
    const isDuplicate = workData.some((item) =>
      Object.keys(item).every((key) => item[key] === newWork[key]),
    );

    if (!isDuplicate) {
      const updatedWorkData = [...workData, newWork];
      setWorkData(updatedWorkData);
      formik.resetForm();
    } else alert("Duplicate entry detected!");
  };

  // const handleDelete = (index) =>
  //   setWorkData(workData.filter((_, i) => i !== index));

  const handleDelete = (index) => {
    const updatedWorkData = workData.filter((_, i) => i !== index);
    setWorkData(updatedWorkData);
  };

  return (
    <>
      <Box sx={{ paddingTop: "20px" }}>
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "18px" }, paddingBottom: "10px" }}
        >
          WORK EXPERIENCE
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingTop: "10px" }}>
        {["company", "designation", "duration"].map((field, index) => (
          <Grid key={index} item lg={4} xs={12}>
            <TextField
              // label={field}
              label={
                field === "duration"
                  ? `${capitalize(field)} (in months)`
                  : capitalize(field)
              }
              name={field}
              type={field === "duration" ? "number" : "text"}
              variant="outlined"
              fullWidth
              {...formik.getFieldProps(field)}
              error={formik.touched[field] && Boolean(formik.errors[field])}
              helperText={formik.touched[field] && formik.errors[field]}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingTop: "14px",
        }}
      >
        <Button
          variant="contained"
          onClick={formik.handleSubmit}
          sx={{
            bgcolor: "#00999E",
            color: "#ffffff",
            "&:hover": {
              bgcolor: "#00999E",
              color: "#ffffff",
            },
          }}
        >
          Add
        </Button>
      </Box>
      {workData.length > 0 && (
        <TableContainer component={Paper} sx={{ marginBlock: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.designation}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default WorkExperience;
