// @ts-nocheck
import * as React from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  academicLevel: yup.string().required("Academics is required"),
  marks: yup
    .string()
    .required("Marks/CGPA is required")
    .matches(
      /^([1-9][0-9]?(\.\d{1,2})?|100(\.0{1,2})?)$/,
      "Invalid percentage"
    ),
  passingYear: yup
    .string()
    .required("Expected/Year of Passing is required")
    .matches(/^(19|20)\d{2}$/, "Invalid year must be 19XX/ 20XX"),
  degree: yup.string().required("Degree is required"),
  college: yup.string().required("College is required"),
  university: yup.string().required("University is required")
});

const FormField = ({ label, name, formik, ...props }) => (
  <Grid item lg={4} xs={12} sm={4} md={4}>
    <TextField
      label={label}
      name={name}
      variant="outlined"
      fullWidth
      {...formik.getFieldProps(name)}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...props}
    />
  </Grid>
);

const AcademicBackground = ({
  sendDataToParent,
  academicData,
  setAcademicData
}) => {

  useEffect(() => {}, [academicData]);

  const formik = useFormik({
    initialValues: {
      academicLevel: "",
      marks: "",
      passingYear: "",
      degree: "",
      college: "",
      university: ""
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      handleAdd(values);
      sendDataToParent([...academicData, values]); // Update parent with new academic data
    }
  });

  const handleAdd = (newAcademics) => {
    const isDuplicate = academicData.some((item) =>
      Object.keys(item).every((key) => item[key] === newAcademics[key])
    );

    if (!isDuplicate) {
      const updatedAcademicData = [...academicData, newAcademics];
      setAcademicData(updatedAcademicData);
      formik.resetForm();
      sendDataToParent(updatedAcademicData); // Update parent with new academic data
    } else {
      alert("Duplicate entry detected!");
    }
  };

  const handleDelete = (index) => {
    const updatedData = academicData.filter((_, i) => i !== index);
    setAcademicData(updatedData);
  };

  return (
    <div>
      <Box sx={{ paddingTop: "20px" }}>
        <Typography
          variant="h5"
          sx={{ fontSize: "18px", paddingBottom: "10px" }}
        >
          ACADEMIC BACKGROUND
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ paddingTop: "10px" }}>
        <Grid item lg={4} xs={12} sm={4} md={4}>
          <FormControl fullWidth>
            <InputLabel id="academicLevel-label">Academics</InputLabel>
            <Select
              labelId="academicLevel-label"
              id="academicLevel"
              label="Academics"
              {...formik.getFieldProps("academicLevel")}
              error={
                formik.touched.academicLevel &&
                Boolean(formik.errors.academicLevel)
              }
            >
              <MenuItem value="X">X</MenuItem>
              <MenuItem value="XII">XII</MenuItem>
              <MenuItem value="Graduation">Graduation</MenuItem>
              <MenuItem value="Post-Graduation">Post-Graduation</MenuItem>
            </Select>
            {formik.touched.academicLevel && formik.errors.academicLevel && (
              <Typography variant="body2" sx={{ color: "red" }}>
                {formik.errors.academicLevel}
              </Typography>
            )}
          </FormControl>
        </Grid>

        <FormField
          label="%Marks/CGPA"
          name="marks"
          type="number"
          formik={formik}
        />
        <FormField
          label="Expected/Year of Passing"
          name="passingYear"
          type="number"
          formik={formik}
        />
        <FormField label="Degree" name="degree" formik={formik} />
        <FormField label="College" name="college" formik={formik} />
        <FormField label="University" name="university" formik={formik} />
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingTop: "14px"
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
              color: "#ffffff"
            }
          }}
        >
          Add
        </Button>
      </Box>

      {academicData?.length > 0 && (
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Academics</TableCell>
                <TableCell>%Marks/CGPA</TableCell>
                <TableCell>Expected/Year of Passing</TableCell>
                <TableCell>Degree</TableCell>
                <TableCell>College</TableCell>
                <TableCell>University</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {academicData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.academicLevel}</TableCell>
                  <TableCell>{row.marks}</TableCell>
                  <TableCell>{row.passingYear}</TableCell>
                  <TableCell>{row.degree}</TableCell>
                  <TableCell>{row.college}</TableCell>
                  <TableCell>{row.university}</TableCell>
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
    </div>
  );
};

export default AcademicBackground;
