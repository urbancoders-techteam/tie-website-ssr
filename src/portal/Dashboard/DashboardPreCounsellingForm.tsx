// @ts-nocheck
import { Box, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormLabel, ListItemText, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const DashboardPreCounsellingForm = () => {
  const [selectedTests, setSelectedTests] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedTests((prevSelectedTests) =>
      prevSelectedTests.includes(value)
        ? prevSelectedTests.filter((test) => test !== value)
        : [...prevSelectedTests, value]
    );
  };

  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleChange = (event) => {
    setSelectedCountries(event.target.value);
  };

  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    setUploadedFileUrl(URL.createObjectURL(file));
  };

  const countries = [
    { value: "egypt", label: "EGYPT" },
    { value: "china", label: "CHINA" },
    { value: "singapore", label: "SINGAPORE" },
    { value: "india", label: "INDIA" },
    { value: "other", label: "OTHER" },
  ];

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Full Name is required"),
    address: Yup.string().required("Address is required"),
    mobile: Yup.string().required("Mobile No. is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    countries: Yup.array().min(1, "Please select at least one country"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      countries: [],
      tests: [],
      mention: "",
      universities: "",
      sources: [],
      date: "",
    },
    validationSchema: validationSchema,
  });

  return (
    // <Container maxWidth="lg">
    <form onSubmit={formik.handleSubmit}>
      <Grid
        item
        md={12}
        lg={12}
        xs={12}
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Box
          sx={{
            margin: "0 20px",
          }}
        >
          <Card sx={{ borderRadius: 2, boxShadow: 3, overflow: "visible" }}>
            <CardContent>
              <Box sx={{ paddingTop: "20px" }}>
                <Typography variant="h6" sx={{ fontSize: "16px" }}>
                  PERSONAL DETAILS
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item lg={4} xs={12} sm={6} md={6}>
                  <TextField
                    label="Full Name"
                    name="fullname"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={4} xs={12} sm={6} md={6}>
                  <TextField
                    label="Address"
                    name="address"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={4} xs={12} sm={6} md={6}>
                  <TextField
                    label="Mobile No."
                    name="mobile"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={4} xs={12} sm={6} md={6}>
                  <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item lg={4} xs={12} sm={6} md={6}>
                  <FormControl sx={{}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>

              <Box sx={{ paddingTop: "30px" }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Typography variant="h6" sx={{ fontSize: "16px" }}>
                      COUNTRY/COUNTRIES YOU WANT TO APPLY TO
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <FormControl sx={{ minWidth: 240 }}>
                      <TextField
                        select
                        label="Countries"
                        value={selectedCountries}
                        onChange={handleChange}
                        SelectProps={{
                          multiple: true,
                          renderValue: (selected) =>
                            selected
                              .map(
                                (val) =>
                                  countries.find(
                                    (country) => country.value === val
                                  )?.label
                              )
                              .join(", "),
                        }}
                        variant="outlined"
                      >
                        {countries.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            <Checkbox
                              checked={
                                selectedCountries.indexOf(country.value) > -1
                              }
                            />
                            <ListItemText primary={country.label} />
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ paddingTop: "30px" }}>
                <Typography variant="h6" sx={{ fontSize: "16px" }}>
                  TEST PREPARATION YOU ARE INTERESTED IN
                </Typography>
              </Box>

              <FormControl>
                <Grid item lg={12} xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="sat"
                        checked={selectedTests.includes("sat")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="SAT"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="gmat"
                        checked={selectedTests.includes("gmat")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="GMAT"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="gre"
                        checked={selectedTests.includes("gre")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="GRE"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="ielts"
                        checked={selectedTests.includes("ielts")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="IELTS"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="toefl"
                        checked={selectedTests.includes("toefl")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="TOEFL"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="pte"
                        checked={selectedTests.includes("pte")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="PTE"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="others"
                        checked={selectedTests.includes("others")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="OTHERS"
                  />
                </Grid>
              </FormControl>

              <Box
                sx={{
                  // display: "flex",
                  alignItems: "start",
                  paddingTop: "30px",
                  width: "100%", // Ensure the Box takes the full width
                  flexDirection: "column",
                  boxSizing: "border-box", //
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    COURSE/SUBJECT/QUALIFICATION YOU WISH TO APPLY FOR
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    sx={{
                      width: "100%",
                      paddingTop: "15px",
                    }}
                    label=""
                    name="mention"
                    variant="outlined"
                    multiline
                    rows={4} // Set the number of rows for the text area
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  // display: "flex",
                  alignItems: "start",
                  paddingTop: "30px",
                  width: "100%", // Ensure the Box takes the full width
                  flexDirection: "column",
                  boxSizing: "border-box", //
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    UNIVERSITY/UNIVERSITIES YOU WISH TO APPLY TO
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    sx={{
                      width: "100%",
                      paddingTop: "15px",
                    }}
                    fullWidth
                    label=""
                    name="mention"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ flex: 1, paddingTop: "30px" }}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    HOW DID YOU HERE ABOUT US:-
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, paddingTop: "30px" }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={[]}
                      multiple
                    >
                      <MenuItem value="website">Website</MenuItem>
                      <MenuItem value="friend/family">Friends/Family</MenuItem>
                      <MenuItem value="google">Google</MenuItem>
                      <MenuItem value="outdoor">Outdoor</MenuItem>
                      <MenuItem value="facebook">Facebook</MenuItem>
                      <MenuItem value="justdial/sulekha">
                        Justdial/Sulekha
                      </MenuItem>
                      <MenuItem value="seminar">Seminar</MenuItem>
                      <MenuItem value="other">Others</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  paddingTop: "30px",
                  width: "100%", // Ensure the Box takes the full width
                  flexDirection: { xs: "column", sm: "row" },
                  boxSizing: "border-box", //
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    paddingTop: "30px",
                    // padding: "0 30px",
                    width: "100%", // Ensure the Box takes the full width
                    flexDirection: "column",
                    boxSizing: "border-box", //
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: "16px" }}>
                      DATE
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <TextField
                      sx={{
                        width: "200px",
                        paddingTop: "15px",
                      }}
                      type="date"
                      name="date"
                      variant="outlined"
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    paddingTop: "30px",
                    width: "100%", // Ensure the Box takes the full width
                    flexDirection: "column",
                    boxSizing: "border-box", //
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: "16px" }}>
                      SIGNATURE
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, paddingTop: "15px" }}>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        bgcolor: "#00999E",
                        "&:hover": {
                          // color: "#00999e",
                          bgcolor: "#00999E",

                          // border: "2px solid #00999e",
                        },
                      }}
                    >
                      Upload File
                      <input
                        type="file"
                        hidden
                        accept="image/*,application/pdf"
                        onChange={handleFileUpload}
                      />
                    </Button>
                  </Box>
                  {uploadedFile && (
                    <Box sx={{ paddingTop: "15px" }}>
                      {uploadedFile.type.startsWith("image/") ? (
                        <img
                          src={uploadedFileUrl}
                          alt="Uploaded"
                          style={{ maxWidth: "100%", maxHeight: "300px" }}
                        />
                      ) : (
                        <a
                          href={uploadedFileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {uploadedFile.name}
                        </a>
                      )}
                    </Box>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Box></Box>
        </Box>
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    // </Container>
  );
};

export default DashboardPreCounsellingForm;
