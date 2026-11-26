// @ts-nocheck
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import { useSnackbar } from "@/portal/Component/Snakbar";
import {
  createProfileBuildingAsync,
  getProfileBuildingAsync,
  updateProfileBuildingAsync,
} from "@/portal/redux/services/studyAbroadServices";
import * as Yup from "yup";

// ✅ Custom validation functions
const validatePercentage = (value) => {
  if (!value) return true; // Allow empty values for optional fields

  // Check for % sign
  if (value.includes("%")) {
    return "Percentage symbol (%) is not allowed. Please enter only numbers (e.g., 85.5 instead of 85.5%).";
  }

  // Check for alphabets and special characters (allow decimal point and numbers)
  if (!/^-?\d*\.?\d*$/.test(value)) {
    return "Only numbers and decimal points are allowed (e.g., 85.5, 90.25).";
  }

  // Check if value is a valid number between 0 and 100
  const numValue = parseFloat(value);
  if (isNaN(numValue)) {
    return "Please enter a valid number.";
  }
  if (numValue < 0 || numValue > 100) {
    return "Percentage must be between 0 and 100.";
  }

  return true;
};

const validateCGPA = (value) => {
  if (!value) return true; // Allow empty values for optional fields

  // Check for % sign
  if (value.includes("%")) {
    return "Percentage symbol (%) is not allowed for CGPA. Please enter only numbers (e.g., 8.5 instead of 8.5%).";
  }

  // Check for alphabets and special characters (allow decimal point and numbers)
  if (!/^-?\d*\.?\d*$/.test(value)) {
    return "Only numbers and decimal points are allowed for CGPA (e.g., 8.5, 9.2).";
  }

  // Check if value is a valid number between 0 and 10
  const numValue = parseFloat(value);
  if (isNaN(numValue)) {
    return "Please enter a valid CGPA.";
  }
  if (numValue < 0 || numValue > 10) {
    return "CGPA must be between 0 and 10.";
  }

  // Validate decimal precision (optional: limit to 2 decimal places)
  const decimalPlaces = value.split(".")[1]?.length || 0;
  if (decimalPlaces > 2) {
    return "CGPA should have maximum 2 decimal places.";
  }

  return true;
};

const validateJeeRank = (value) => {
  if (!value) return true; // Allow empty values for optional fields

  // Check for % sign
  if (value.includes("%")) {
    return "Percentage symbol (%) is not allowed for rank. Please enter only numbers.";
  }

  // Check for alphabets and special characters (only allow numbers for rank)
  if (!/^\d+$/.test(value)) {
    return "Only whole numbers are allowed for rank (e.g., 1500, 5000).";
  }

  // Check if value is a valid positive integer
  const numValue = parseInt(value);
  if (isNaN(numValue) || numValue <= 0) {
    return "Please enter a valid positive rank number.";
  }

  return true;
};

// ✅ Enhanced input formatting for better UX
const formatNumericInput = (value, fieldType) => {
  if (!value) return value;

  // Remove any % signs immediately
  value = value.replace(/%/g, "");

  // For percentage and CGPA fields, allow decimals
  if (fieldType === "percentage" || fieldType === "cgpa") {
    // Allow only numbers and one decimal point
    value = value.replace(/[^\d.]/g, "");

    // Ensure only one decimal point
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    // Limit decimal places to 2
    if (parts.length === 2 && parts[1].length > 2) {
      value = parts[0] + "." + parts[1].substring(0, 2);
    }
  }

  // For rank fields, only allow whole numbers
  if (fieldType === "rank") {
    value = value.replace(/\D/g, "");
  }

  return value;
};

// ✅ Yup Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  city: Yup.string().required("City is required"),
  institution: Yup.string().required("Institution is required"),
  currentCourse: Yup.string().required("Current course is required"),
  intake: Yup.string(),
  careerGoals: Yup.string().required("Career goal is required"),
  overall10: Yup.string()
    .required("10th aggregate is required")
    .test("percentage-10", "Invalid 10th percentage", validatePercentage),
  overall12: Yup.string()
    .required("12th aggregate is required")
    .test("percentage-12", "Invalid 12th percentage", validatePercentage),
  graduationCgpa: Yup.string().test("cgpa", "Invalid CGPA", validateCGPA),
  jeeRank: Yup.string().test("jee-rank", "Invalid JEE Rank", validateJeeRank),
  resume: Yup.mixed().test("required", "Resume is required", (value) => {
    return value instanceof File || typeof value === "string";
  }),
});

const StudentCounsellorForm = () => {
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();

  const [isEditMode, setIsEditMode] = useState(false);
  const [isFieldsDisabled, setIsFieldsDisabled] = useState(false);
  const [isSaveChangesClicked, setIsSaveChangesClicked] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({}); // Track specific field errors

  const { isProfileCreated, profileData, isLoading, isSubmitting } =
    useSelector((state) => state.studyAbroad);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      city: "",
      institution: "",
      currentCourse: "",
      intake: "",
      careerGoals: "",
      overall10: "",
      overall12: "",
      graduationCgpa: "",
      relevantCourses: "",
      professionalDegrees: "",
      honoursAwards: "",
      jeeRank: "",
      researchProjects: "",
      publications: "",
      researchAssistantships: "",
      projects: "",
      fullTimeJobs: "",
      internships: "",
      partTimeJobs: "",
      certifications: "",
      sports: "",
      musicDance: "",
      arts: "",
      competitions: "",
      clubs: "",
      communityServices: "",
      leadership: "",
      technicalSkills: "",
      softSkills: "",
      languageSkills: "",
      linkedin: "",
      personalWebsite: "",
      socialMedia: "",
      financialPosition: "",
      resume: null,
    },
  });

  // ✅ Enhanced validation before submission
  const validateFormFields = (data) => {
    const newErrors = {};

    // Validate numeric fields
    if (data.overall10) {
      const error = validatePercentage(data.overall10);
      if (error !== true) newErrors.overall10 = error;
    }

    if (data.overall12) {
      const error = validatePercentage(data.overall12);
      if (error !== true) newErrors.overall12 = error;
    }

    if (data.graduationCgpa) {
      const error = validateCGPA(data.graduationCgpa);
      if (error !== true) newErrors.graduationCgpa = error;
    }

    if (data.jeeRank) {
      const error = validateJeeRank(data.jeeRank);
      if (error !== true) newErrors.jeeRank = error;
    }

    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (data) => {
    // Validate form before submission
    if (!validateFormFields(data)) {
      showSnackbar(
        "Please fix the validation errors before submitting.",
        "error",
      );
      return;
    }

    let base64Resume = null;

    // Check if the resume is a File object before converting
    if (data.resume instanceof File) {
      base64Resume = await toBase64(data.resume);
    } else {
      base64Resume = data.resume;
    }

    const payload = {
      name: data.name,
      city: data.city,
      institute: data.institution,
      currentCourse: data.currentCourse,
      intake: data.intake,
      careerGoal: data.careerGoals,
      academicPreparation: {
        tenthOverallAggregate: data.overall10,
        twelfthOverallAggregate: data.overall12,
        graduationCgpa: data.graduationCgpa,
        relevantCompletedCourses: data.relevantCourses,
        professionalDegrees: data.professionalDegrees,
        honoursAndAwards: data.honoursAwards,
        others: data.jeeRank,
      },
      researchExperience: {
        researchProjects: data.researchProjects,
        publications: data.publications,
        researchAssistantships: data.researchAssistantships,
      },
      projects: data.projects,
      workExperience: {
        fullTimeJobExperience: data.fullTimeJobs,
        internships: data.internships,
        partTimeJobs: data.partTimeJobs,
        professinalCertifications: data.certifications,
      },
      extracurricularActivites: {
        sports: data.sports,
        musicAndDance: data.musicDance,
        arts: data.arts,
        competitionAndEvents: data.competitions,
        participationInClubsAndSocieties: data.clubs,
        communityServices: data.communityServices,
      },
      skillsAndCompetencies: {
        leadershipRoles: data.leadership,
        technicalSkills: data.technicalSkills,
        softSkills: data.softSkills,
        languageSkills: data.languageSkills,
      },
      onlinePresence: {
        linkedInProfile: data.linkedin,
        personalWebsite: data.personalWebsite,
        professionalSocialMedia: data.socialMedia,
      },
      financialPosition: data.financialPosition,
      resume: base64Resume,
    };

    try {
      if (isProfileCreated && isEditMode && isSaveChangesClicked) {
        await dispatch(updateProfileBuildingAsync(payload)).unwrap();
        showSnackbar("Profile updated successfully!", "success");
        setIsSaveChangesClicked(false);
        setIsFieldsDisabled(true);
        setIsEditMode(false);
      } else if (!isProfileCreated) {
        const res = await dispatch(
          createProfileBuildingAsync(payload),
        ).unwrap();

        if (res?.success) {
          showSnackbar("Profile created successfully!", "success");
        } else {
          showSnackbar(
            res?.message || "Something went wrong during creation.",
            "error",
          );
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      showSnackbar(
        "Failed to submit profile. Please check all fields and try again.",
        "error",
      );
    }
  };

  useEffect(() => {
    dispatch(getProfileBuildingAsync());
  }, [dispatch]);

  useEffect(() => {
    if (profileData) {
      reset({
        name: profileData.name,
        city: profileData.city,
        institution: profileData.institute,
        currentCourse: profileData.currentCourse,
        intake: profileData.intake,
        careerGoals: profileData.careerGoal,
        overall10: profileData.academicPreparation?.tenthOverallAggregate || "",
        overall12:
          profileData.academicPreparation?.twelfthOverallAggregate || "",
        graduationCgpa: profileData.academicPreparation?.graduationCgpa || "",
        relevantCourses:
          profileData.academicPreparation?.relevantCompletedCourses || "",
        professionalDegrees:
          profileData.academicPreparation?.professionalDegrees || "",
        honoursAwards: profileData.academicPreparation?.honoursAndAwards || "",
        jeeRank: profileData.academicPreparation?.others || "",
        researchProjects:
          profileData.researchExperience?.researchProjects || "",
        publications: profileData.researchExperience?.publications || "",
        researchAssistantships:
          profileData.researchExperience?.researchAssistantships || "",
        projects: profileData.projects || "",
        fullTimeJobs: profileData.workExperience?.fullTimeJobExperience || "",
        internships: profileData.workExperience?.internships || "",
        partTimeJobs: profileData.workExperience?.partTimeJobs || "",
        certifications:
          profileData.workExperience?.professinalCertifications || "",
        sports: profileData.extracurricularActivites?.sports || "",
        musicDance: profileData.extracurricularActivites?.musicAndDance || "",
        arts: profileData.extracurricularActivites?.arts || "",
        competitions:
          profileData.extracurricularActivites?.competitionAndEvents || "",
        clubs:
          profileData.extracurricularActivites
            ?.participationInClubsAndSocieties || "",
        communityServices:
          profileData.extracurricularActivites?.communityServices || "",
        leadership: profileData.skillsAndCompetencies?.leadershipRoles || "",
        technicalSkills:
          profileData.skillsAndCompetencies?.technicalSkills || "",
        softSkills: profileData.skillsAndCompetencies?.softSkills || "",
        languageSkills: profileData.skillsAndCompetencies?.languageSkills || "",
        linkedin: profileData.onlinePresence?.linkedInProfile || "",
        personalWebsite: profileData.onlinePresence?.personalWebsite || "",
        socialMedia: profileData.onlinePresence?.professionalSocialMedia || "",
        financialPosition: profileData.financialPosition || "",
        resume: profileData.resume || "",
      });
      setIsFieldsDisabled(true);
      setIsEditMode(false);
      setFieldErrors({}); // Clear any previous errors
    }
  }, [profileData, reset]);

  // Helper function to convert file to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleEditClick = () => {
    setIsFieldsDisabled(false);
    setIsEditMode(true);
    setFieldErrors({}); // Clear errors when editing
  };

  const handleCancelClick = () => {
    setIsFieldsDisabled(true);
    setIsEditMode(false);
    setFieldErrors({}); // Clear errors when canceling
    // Reset form to original values
    if (profileData) {
      reset({
        name: profileData.name,
        city: profileData.city,
        institution: profileData.institute,
        currentCourse: profileData.currentCourse,
        intake: profileData.intake,
        careerGoals: profileData.careerGoal,
        overall10: profileData.academicPreparation?.tenthOverallAggregate || "",
        overall12:
          profileData.academicPreparation?.twelfthOverallAggregate || "",
        graduationCgpa: profileData.academicPreparation?.graduationCgpa || "",
        relevantCourses:
          profileData.academicPreparation?.relevantCompletedCourses || "",
        professionalDegrees:
          profileData.academicPreparation?.professionalDegrees || "",
        honoursAwards: profileData.academicPreparation?.honoursAndAwards || "",
        jeeRank: profileData.academicPreparation?.others || "",
        researchProjects:
          profileData.researchExperience?.researchProjects || "",
        publications: profileData.researchExperience?.publications || "",
        researchAssistantships:
          profileData.researchExperience?.researchAssistantships || "",
        projects: profileData.projects || "",
        fullTimeJobs: profileData.workExperience?.fullTimeJobExperience || "",
        internships: profileData.workExperience?.internships || "",
        partTimeJobs: profileData.workExperience?.partTimeJobs || "",
        certifications:
          profileData.workExperience?.professinalCertifications || "",
        sports: profileData.extracurricularActivites?.sports || "",
        musicDance: profileData.extracurricularActivites?.musicAndDance || "",
        arts: profileData.extracurricularActivites?.arts || "",
        competitions:
          profileData.extracurricularActivites?.competitionAndEvents || "",
        clubs:
          profileData.extracurricularActivites
            ?.participationInClubsAndSocieties || "",
        communityServices:
          profileData.extracurricularActivites?.communityServices || "",
        leadership: profileData.skillsAndCompetencies?.leadershipRoles || "",
        technicalSkills:
          profileData.skillsAndCompetencies?.technicalSkills || "",
        softSkills: profileData.skillsAndCompetencies?.softSkills || "",
        languageSkills: profileData.skillsAndCompetencies?.languageSkills || "",
        linkedin: profileData.onlinePresence?.linkedInProfile || "",
        personalWebsite: profileData.onlinePresence?.personalWebsite || "",
        socialMedia: profileData.onlinePresence?.professionalSocialMedia || "",
        financialPosition: profileData.financialPosition || "",
        resume: profileData.resume || "",
      });
    }
  };

  const handleSaveChangesClick = () => {
    setIsSaveChangesClicked(true);
  };

  const renderInput = (name, label, options = {}) => {
    const { multiline = false, full = false } =
      typeof options === "boolean" ? { multiline: options } : options;
    const isNumericField = [
      "overall10",
      "overall12",
      "graduationCgpa",
      "jeeRank",
    ].includes(name);
    const fieldType =
      name === "jeeRank"
        ? "rank"
        : name === "graduationCgpa"
          ? "cgpa"
          : "percentage";

    return (
      <Grid item xs={12} sm={full || multiline ? 12 : 6}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              size="small"
              variant="outlined"
              {...field}
              label={label}
              fullWidth
              multiline={multiline}
              minRows={multiline ? 3 : undefined}
              disabled={isFieldsDisabled}
              error={!!errors[name] || !!fieldErrors[name]}
              helperText={errors[name]?.message || fieldErrors[name]}
              onChange={(e) => {
                let value = e.target.value;

                if (isNumericField) {
                  value = formatNumericInput(value, fieldType);
                }

                field.onChange(value);

                if (fieldErrors[name] && value) {
                  setFieldErrors((prev) => {
                    const newErrors = { ...prev };
                    delete newErrors[name];
                    return newErrors;
                  });
                }
              }}
              onBlur={(e) => {
                if (isNumericField && e.target.value) {
                  let validationResult = true;

                  if (name === "overall10" || name === "overall12") {
                    validationResult = validatePercentage(e.target.value);
                  } else if (name === "graduationCgpa") {
                    validationResult = validateCGPA(e.target.value);
                  } else if (name === "jeeRank") {
                    validationResult = validateJeeRank(e.target.value);
                  }

                  if (validationResult !== true) {
                    setFieldErrors((prev) => ({
                      ...prev,
                      [name]: validationResult,
                    }));
                  } else {
                    setFieldErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors[name];
                      return newErrors;
                    });
                  }
                }
              }}
              inputProps={{
                inputMode: isNumericField
                  ? fieldType === "rank"
                    ? "numeric"
                    : "decimal"
                  : "text",
                pattern: isNumericField
                  ? fieldType === "rank"
                    ? "[0-9]*"
                    : "[0-9.]*"
                  : null,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  backgroundColor: isFieldsDisabled ? "#F8F9FB" : "#fff",
                },
              }}
            />
          )}
        />
      </Grid>
    );
  };

  const renderResumeField = () => (
    <Grid item xs={12}>
      <Controller
        name="resume"
        control={control}
        render={({ field }) => {
          const savedResume =
            typeof field.value === "string" &&
            field.value &&
            !field.value.startsWith("data:");
          const selectedFile = field.value instanceof File ? field.value : null;

          return (
            <Box>
              <Typography
                sx={{
                  display: "block",
                  mb: 1,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#344054",
                }}
              >
                Resume *
              </Typography>
              <Box
                sx={{
                  border: "1.5px dashed #00999E",
                  borderRadius: "12px",
                  bgcolor: "#F4FBFB",
                  px: 2,
                  py: 2,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  gap: 1.5,
                }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 600, color: "#181818" }}>
                    {selectedFile
                      ? selectedFile.name
                      : savedResume
                        ? "Resume on file"
                        : "Upload your resume"}
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontSize: 13, color: "#667085" }}>
                    PDF or Word
                  </Typography>
                  {savedResume && field.value.startsWith("http") && (
                    <Typography
                      component="a"
                      href={field.value}
                      target="_blank"
                      rel="noreferrer"
                      sx={{
                        display: "inline-block",
                        mt: 0.5,
                        fontSize: 13,
                        color: "#00999E",
                        fontWeight: 600,
                      }}
                    >
                      View current resume
                    </Typography>
                  )}
                </Box>
                <Button
                  variant="contained"
                  component="label"
                  disabled={isFieldsDisabled}
                  sx={{
                    minWidth: 140,
                    height: 38,
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    bgcolor: "#fff",
                    color: "#00999E",
                    border: "1px solid #00999E",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#E6F6F6", boxShadow: "none" },
                  }}
                >
                  {savedResume || selectedFile ? "Replace" : "Upload"}
                  <input
                    type="file"
                    hidden
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => field.onChange(e.target.files?.[0] || null)}
                  />
                </Button>
              </Box>
              {errors.resume && (
                <Typography color="error" sx={{ mt: 0.75, fontSize: 12 }}>
                  {errors.resume.message}
                </Typography>
              )}
            </Box>
          );
        }}
      />
    </Grid>
  );

  const sectionTitleSx = {
    fontFamily: "Nunito, sans-serif",
    fontWeight: 600,
    fontSize: 16,
    color: "#181818",
    mb: 2,
  };

  const actionButtonSx = {
    height: 42,
    px: 2.5,
    borderRadius: "8px",
    textTransform: "none",
    fontWeight: 600,
    boxShadow: "none",
    bgcolor: "#00999E",
    "&:hover": { bgcolor: "#007f80", boxShadow: "none" },
  };

  return isLoading ? (
    <CustomCircularProgress />
  ) : (
    <Box sx={{ p: { xs: 0.5, sm: 1 }, textAlign: "left" }}>
      {profileData?.remark && (
        <Box
          sx={{
            mb: 3,
            p: 2.5,
            bgcolor: "#E6F6F6",
            borderRadius: "12px",
            borderLeft: "4px solid #00999E",
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "#00999E", mb: 1 }}>
            Counsellor feedback
          </Typography>

          <Typography sx={{ color: "#181818", fontSize: 14, lineHeight: 1.6 }}>
            {profileData.remark}
          </Typography>

          {profileData.timeline && (
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1.5 }}>
              <Typography sx={{ fontSize: 13, color: "#667085" }}>
                Editable until
              </Typography>
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#B42318" }}>
                {new Date(profileData.timeline).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </Typography>
            </Stack>
          )}
        </Box>
      )}

      {Object.keys(fieldErrors).length > 0 && (
        <Box
          sx={{
            mb: 3,
            p: 2,
            bgcolor: "#FEF3F2",
            borderRadius: "12px",
            borderLeft: "4px solid #D92D20",
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "#B42318", mb: 0.5 }}>
            Please fix these fields
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
            {Object.entries(fieldErrors).map(([fieldName, error]) => (
              <Typography component="li" key={fieldName} sx={{ fontSize: 13, color: "#B42318" }}>
                {error}
              </Typography>
            ))}
          </Box>
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>1. Personal details</Typography>
          <Grid container spacing={2.5}>
            {renderInput("name", "Name *")}
            {renderInput("city", "City *")}
            {renderInput("institution", "Institution *")}
            {renderInput("currentCourse", "Current course *")}
            {renderInput("intake", "Intake")}
          </Grid>
        </Box>

        <Box sx={{ mt: 2.5, border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>2. Career goals</Typography>
          <Grid container spacing={2.5}>
            {renderInput("careerGoals", "Career goals *", { multiline: true, full: true })}
          </Grid>
        </Box>

        <Box sx={{ mt: 2.5, border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>3. Academic preparation</Typography>
          <Grid container spacing={2.5}>
            {renderInput("overall10", "10th overall aggregate *")}
            {renderInput("overall12", "12th overall aggregate *")}
            {renderInput("graduationCgpa", "Graduation CGPA")}
            {renderInput("relevantCourses", "Relevant completed courses", { full: true })}
            {renderInput("professionalDegrees", "Professional degrees")}
            {renderInput("honoursAwards", "Honours and awards")}
            {renderInput("jeeRank", "JEE rank / Olympiads")}
          </Grid>
        </Box>

        <Box sx={{ mt: 2.5, border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>4. Research experience</Typography>
          <Grid container spacing={2.5}>
            {renderInput("researchProjects", "Research projects", { full: true })}
            {renderInput("publications", "Publications", { full: true })}
            {renderInput("researchAssistantships", "Research assistantships", { full: true })}
          </Grid>
        </Box>

        <Box sx={{ mt: 2.5, border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>5. Projects</Typography>
          <Grid container spacing={2.5}>
            {renderInput("projects", "Projects", { multiline: true, full: true })}
          </Grid>
        </Box>

        <Box sx={{ mt: 2.5, border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>6. Work experience</Typography>
          <Grid container spacing={2.5}>
            {renderInput("fullTimeJobs", "Full-time jobs", { full: true })}
            {renderInput("internships", "Internships", { full: true })}
            {renderInput("partTimeJobs", "Part-time jobs", { full: true })}
            {renderInput("certifications", "Professional certifications", { full: true })}
          </Grid>
        </Box>

        <Box sx={{ mt: 2.5, border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>7. Extracurricular activities</Typography>
          <Grid container spacing={2.5}>
            {renderInput("sports", "Sports")}
            {renderInput("musicDance", "Music and dance")}
            {renderInput("arts", "Arts")}
            {renderInput("competitions", "Competitions and events")}
            {renderInput("clubs", "Clubs and societies")}
            {renderInput("communityServices", "Community service")}
          </Grid>
        </Box>

        <Box sx={{ mt: 2.5, border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>8. Skills and competencies</Typography>
          <Grid container spacing={2.5}>
            {renderInput("leadership", "Leadership roles")}
            {renderInput("technicalSkills", "Technical skills")}
            {renderInput("softSkills", "Soft skills")}
            {renderInput("languageSkills", "Language skills")}
          </Grid>
        </Box>

        <Box sx={{ mt: 2.5, border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>9. Online presence</Typography>
          <Grid container spacing={2.5}>
            {renderInput("linkedin", "LinkedIn")}
            {renderInput("personalWebsite", "Personal website")}
            {renderInput("socialMedia", "Professional social media", { full: true })}
          </Grid>
        </Box>

        <Box sx={{ mt: 2.5, border: "1px solid #E6E8EC", borderRadius: "16px", p: { xs: 2, sm: 3 } }}>
          <Typography sx={sectionTitleSx}>10. Financial position and resume</Typography>
          <Grid container spacing={2.5}>
            {renderInput("financialPosition", "Financial position", { full: true })}
            {renderResumeField()}
          </Grid>
        </Box>

        {isProfileCreated ? (
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              justifyContent: { xs: "stretch", sm: "flex-end" },
            }}
          >
            {isFieldsDisabled ? (
              new Date(profileData?.timeline) > new Date() ? (
                <Button
                  variant="contained"
                  onClick={handleEditClick}
                  disabled={isSubmitting}
                  sx={actionButtonSx}
                >
                  Edit profile
                </Button>
              ) : (
                <Typography sx={{ color: "#B42318", fontWeight: 600 }}>
                  The editing period for this profile has ended.
                </Typography>
              )
            ) : (
              <>
                <Button
                  variant="outlined"
                  onClick={handleCancelClick}
                  disabled={isSubmitting}
                  sx={{
                    height: 42,
                    px: 2.5,
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    color: "#344054",
                    borderColor: "#D0D5DD",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSaveChangesClick}
                  disabled={isSubmitting || Object.keys(fieldErrors).length > 0}
                  startIcon={
                    isSubmitting && <CircularProgress size={18} color="inherit" />
                  }
                  sx={actionButtonSx}
                >
                  {isSubmitting ? "Saving..." : "Save changes"}
                </Button>
              </>
            )}
          </Box>
        ) : (
          <Box sx={{ mt: 3, display: "flex", justifyContent: { xs: "stretch", sm: "flex-end" } }}>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting || Object.keys(fieldErrors).length > 0}
              startIcon={
                isSubmitting && <CircularProgress size={18} color="inherit" />
              }
              sx={{ ...actionButtonSx, width: { xs: "100%", sm: "auto" } }}
            >
              {isSubmitting ? "Creating..." : "Create profile"}
            </Button>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default StudentCounsellorForm;
