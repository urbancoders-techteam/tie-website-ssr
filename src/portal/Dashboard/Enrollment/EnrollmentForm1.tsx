// @ts-nocheck
import AcademicBackground from "./AcademicBackground";
import PermanentAndMailingAddress from "./PermanentAndMailingAddress";
import WorkExperience from "./WorkExperience";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useCallback, useState } from "react";

import {
  Typography, Box, TextField, Radio, FormControlLabel, RadioGroup, FormControl, FormLabel, CardContent, Card } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import dayjs from "dayjs";

const DashboardEnrollmentForm = ({
  formData,
  setFormData,
  setPermanentAddress,
  permanentAddress,
  academicData,
  setAcademicData,
  mailingAddress,
  setMailingAddress,
}) => {
  const [dob, setDob] = useState(null);
  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    let error = "";

    if (
      ["firstName", "lastName", "studentEmail", "mobileNumber", "dob"].includes(
        field
      )
    ) {
      if (!value) {
        error = "This field is required.";
      }
    }

    if (field === "studentEmail" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Enter a valid email address.";
      }
    }

    if ((field === "mobileNumber" || field === "guardianMobile") && value) {
      const numberRegex = /^[0-9]{10}$/;
      if (!numberRegex.test(value)) {
        error = "Enter a valid 10-digit mobile number.";
      }
    }

    return error;
  };

  const handleFieldChange = (field, value) => {
    const error = validateField(field, value);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  // A new inline function every render would retrigger the child's effect,
  // and that effect calls setFormData, which renders again. Functional update
  // also avoids copying a stale formData snapshot over fields typed later.
  const syncAddresses = useCallback(
    ({ permanentAddress: nextPermanent, mailingAddress: nextMailing }) => {
      setFormData((prev) => {
        if (
          prev.permanentAddress === nextPermanent &&
          prev.mailingAddress === nextMailing
        ) {
          return prev;
        }
        return {
          ...prev,
          permanentAddress: nextPermanent,
          mailingAddress: nextMailing,
        };
      });
    },
    [setFormData]
  );

  const formFields = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid item md={12} lg={12} xs={12} sx={{ paddingTop: "20px" }}>
        <Box sx={{ margin: "0 20px" }}>
          <Card sx={{ borderRadius: 2, boxShadow: 3, overflow: "visible" }}>
            <CardContent>
              <SectionTitle title="INFORMATION" />
              <Grid container spacing={2}>
                {formFields.map((field, index) => (
                  <Grid key={index} item lg={3} xs={6}>
                    <TextField
                      label={field.label}
                      name={field.name}
                      variant="outlined"
                      fullWidth
                      value={formData[field.name] || ""}
                      error={!!errors[field.name]}
                      helperText={errors[field.name]}
                      // onChange={(e) =>
                      //   setFormData({
                      //     ...formData,
                      //     [field.name]: e.target.value,
                      //   })
                      // }
                      onChange={(e) =>
                        handleFieldChange(e.target.name, e.target.value)
                      }
                    />
                  </Grid>
                ))}
                <Grid item lg={2} xs={6}>
                  <DatePicker
                    label="DOB"
                    format="DD/MM/YYYY"
                    value={dob}
                    maxDate={dayjs()}
                    onChange={(newValue) => {
                      // The picker must keep a dayjs object. A formatted string
                      // has no isValid(), and AdapterDayjs crashes on it.
                      const next = newValue?.isValid?.() ? newValue : null;
                      setDob(next);
                      setFormData((prev) => ({
                        ...prev,
                        dob: next ? next.format("DD-MMM-YYYY") : null,
                      }));
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors.dob,
                        helperText: errors.dob,
                      },
                    }}
                  />
                </Grid>
                <Grid item lg={4} xs={6}>
                  <FormControl sx={{ paddingLeft: "10px" }}>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                      row
                      name="gender"
                      value={formData.gender || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    >
                      <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="others"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <AcademicBackground
                formData={formData.academicData}
                academicData={academicData}
                setAcademicData={setAcademicData}
                sendDataToParent={(academicData) => {
                  setFormData({
                    ...formData,
                    academicBackground: academicData,
                  });
                }}
              />
              <WorkExperience
                workData={formData.workExperience || []}
                setWorkData={(workData) => {
                  setFormData({ ...formData, workExperience: workData });
                }}
              />
              <SectionTitle title="STUDENT DETAILS" />
              <Grid container spacing={2}>
                {[
                  { label: "Student Email ID", name: "studentEmail" },
                  { label: "Mobile Number", name: "mobileNumber" },
                  { label: "Guardian Name", name: "guardianName" },
                  { label: "Guardian Mobile Number", name: "guardianMobile" },
                ].map((field, index) => (
                  <Grid key={index} item lg={3} xs={6}>
                    <TextField
                      label={field.label}
                      name={field.name}
                      variant="outlined"
                      type={
                        field.name === "mobileNumber" ||
                        field.name === "guardianMobile"
                          ? "number"
                          : "text"
                      }
                      fullWidth
                      value={formData[field.name] || ""}
                      // onChange={(e) =>
                      //   setFormData({
                      //     ...formData,
                      //     [field.name]: e.target.value,
                      //   })
                      // }

                      error={!!errors[field.name]}
                      helperText={errors[field.name]}
                      inputProps={{
                        maxLength:
                          field.name === "mobileNumber" ||
                          field.name === "guardianMobile"
                            ? 10
                            : undefined,
                      }}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (
                          (field.name === "mobileNumber" ||
                            field.name === "guardianMobile") &&
                          value.length > 10
                        ) {
                          return; // Prevent typing beyond 10 digits
                        }
                        handleFieldChange(field.name, value);
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ paddingTop: "14px" }}>
                <PermanentAndMailingAddress
                  mailingAddress={mailingAddress}
                  setMailingAddress={setMailingAddress}
                  permanentAddress={permanentAddress}
                  setPermanentAddress={setPermanentAddress}
                  sendDataToParent={syncAddresses}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </LocalizationProvider>
  );
};

export default DashboardEnrollmentForm;

const SectionTitle = ({ title }) => (
  <Typography
    variant="h5"
    sx={{ fontSize: { xs: "18px" }, paddingBottom: "10px" }}
  >
    {title}
  </Typography>
);
