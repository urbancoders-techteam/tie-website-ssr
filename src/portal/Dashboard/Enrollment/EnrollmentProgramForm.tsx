// @ts-nocheck
import { useEffect, useMemo, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { axiosInstance } from "@/portal/utils/axiosConfig";
import {
  APPLICATION_FEE_OPTIONS,
  EMPTY_ACADEMIC_PROFILE,
  EMPTY_TEST_SCORE,
  EXAM_OPTIONS,
  INTAKE_MONTH_OPTIONS,
  NEED_WAIVER_EXAM,
  PREFERRED_DEGREE_OPTIONS,
  QUALIFICATION_OPTIONS,
  SCHOLARSHIP_OPTIONS,
  STUDY_GAP_OPTIONS,
  academicRequirementHint,
  academicRequirementMessage,
  academicRowError,
  applyIntakeSelection,
  bandPlaceholder,
  convertBetweenCurrencies,
  examDisplayName,
  examUsesBand,
  fetchOpenCountries,
  fileMeta,
  formatMoney,
  getInrRatesMap,
  intakeYearOptions,
  isAcademicDraftStarted,
  isAllowedDocument,
  isLikelyEmail,
  isNationalMobile,
  isStudyGapSelected,
  isValidDateOfBirth,
  normalizeAcademicRow,
  sanitizeDigits,
  sanitizeNumericInput,
  sanitizeYearInput,
  scoreLimitError,
  scorePlaceholder,
  validateTestScoreEntry,
  validateTestScores,
} from "./enrollmentProgram";

const TEAL = "#00999E";
const REQUIRED_LABEL = { required: true };

const choiceBoxSx = (error) => ({
  px: 1.25,
  py: 0.65,
  minHeight: 40,
  justifyContent: "center",
  border: "1px solid",
  borderColor: error ? "#d32f2f" : "#D5DEE5",
  borderRadius: "8px",
  bgcolor: "#fff",
});

const addButtonSx = {
  height: 40,
  minWidth: 84,
  px: 2,
  flexShrink: 0,
  bgcolor: TEAL,
  boxShadow: "none",
  "&:hover": { bgcolor: "#007C80", boxShadow: "none" },
};

const radioLabelSx = { my: 0, mr: 1.5, "& .MuiFormControlLabel-label": { fontSize: 13 } };

const CountryFlag = ({ code }) => {
  const iso = String(code || "").trim().toLowerCase();
  if (!/^[a-z]{2}$/.test(iso)) return null;
  return (
    <Box
      component="img"
      alt=""
      src={`https://flagcdn.com/w40/${iso}.png`}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
      sx={{
        width: 18,
        height: 12,
        mr: 1,
        objectFit: "cover",
        borderRadius: "2px",
        boxShadow: "0 0 0 1px rgba(15, 23, 42, 0.12)",
        flexShrink: 0,
      }}
    />
  );
};

const listFromResponse = (response) => {
  const payload = response?.data?.data;
  if (Array.isArray(payload)) return payload;
  return payload?.formattedData || [];
};

const Section = ({ id, title, children }) => (
  <Box
    id={id}
    sx={{
      mt: 1.5,
      p: { xs: 1.5, md: 2 },
      borderRadius: "12px",
      border: "1px solid #E3EEEF",
      bgcolor: "#fff",
    }}
  >
    {title ? (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <Box sx={{ width: 3, height: 14, borderRadius: 4, bgcolor: TEAL }} />
        <Typography sx={{ fontSize: "15px", fontWeight: 700, color: "#12343A" }}>{title}</Typography>
      </Box>
    ) : null}
    {children}
  </Box>
);

const FieldGrid = ({ children, columns = 2 }) => (
  <Box
    sx={{
      display: "grid",
      gap: 1.5,
      alignItems: "start",
      gridTemplateColumns: { xs: "1fr", md: `repeat(${columns}, minmax(0, 1fr))` },
    }}
  >
    {children}
  </Box>
);

const YesNoField = ({ id, label, name, value, onChange, required = false, error = "" }) => (
  <Box id={id}>
    <FormControl fullWidth error={Boolean(error)} sx={choiceBoxSx(error)}>
      <FormLabel sx={{ mb: 0, fontSize: "12px", fontWeight: 600, color: error ? "#d32f2f" : "#334155" }}>
        {label}
        {required ? " *" : ""}
      </FormLabel>
      <RadioGroup row name={name} value={value} onChange={(event) => onChange(event.target.value)}>
        <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" sx={radioLabelSx} />
        <FormControlLabel value="no" control={<Radio size="small" />} label="No" sx={radioLabelSx} />
      </RadioGroup>
      {error ? <FormHelperText sx={{ mx: 0 }}>{error}</FormHelperText> : null}
    </FormControl>
  </Box>
);

const ChoiceField = ({ label, value, options, onChange }) => (
  <FormControl fullWidth sx={choiceBoxSx(false)}>
    <FormLabel sx={{ mb: 0, fontSize: "12px", fontWeight: 600, color: "#334155" }}>{label}</FormLabel>
    <RadioGroup value={value} onChange={(event) => onChange(event.target.value)}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio size="small" />}
          label={option.label}
          sx={{ ...radioLabelSx, mr: 0, alignItems: "flex-start" }}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

const parseYesNo = (value) => {
  if (value === "yes") return true;
  if (value === "no") return false;
  return null;
};

const EnrollmentProgramForm = ({ isSubmitting = false, onSubmit }) => {
  const outerTheme = useTheme();
  const formTheme = useMemo(
    () =>
      createTheme(outerTheme, {
        palette: { primary: { main: TEAL, contrastText: "#ffffff" } },
        shape: { borderRadius: 8 },
        components: {
          MuiTextField: { defaultProps: { fullWidth: true, size: "small" } },
          MuiFormControl: { defaultProps: { size: "small" } },
          MuiAutocomplete: { defaultProps: { size: "small" } },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                backgroundColor: "#ffffff",
                fontSize: "14px",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#D5DEE5" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#00999E" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#00999E" },
              },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              root: { fontSize: "13px", "&.Mui-focused": { color: TEAL } },
            },
          },
          MuiFormLabel: { styleOverrides: { root: { "&.Mui-focused": { color: TEAL } } } },
          MuiFormHelperText: { styleOverrides: { root: { marginLeft: 2, marginTop: 3, fontSize: "11px" } } },
          MuiButton: { styleOverrides: { root: { textTransform: "none", fontWeight: 600, borderRadius: 8, fontSize: "13px" } } },
        },
      }),
    [outerTheme],
  );
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState({});
  const [studentName, setStudentName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dialIso, setDialIso] = useState("IN");
  const [dialCode, setDialCode] = useState("+91");
  const [emailId, setEmailId] = useState("");
  const [cityState, setCityState] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [studentCountries, setStudentCountries] = useState([]);
  const [studentCountriesLoading, setStudentCountriesLoading] = useState(true);
  const [studentCountryError, setStudentCountryError] = useState("");
  const [selectedStudentCountryId, setSelectedStudentCountryId] = useState("");
  const [passportChoice, setPassportChoice] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [countryError, setCountryError] = useState("");
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [campuses, setCampuses] = useState([]);
  const [campusesLoading, setCampusesLoading] = useState(false);
  const [campusError, setCampusError] = useState("");
  const [selectedCampusIds, setSelectedCampusIds] = useState([]);
  const [academicProfiles, setAcademicProfiles] = useState([]);
  const [draftAcademic, setDraftAcademic] = useState(EMPTY_ACADEMIC_PROFILE);
  const [editingAcademicIndex, setEditingAcademicIndex] = useState(null);
  const [preferredCourse, setPreferredCourse] = useState("");
  const [selectedStudyLevels, setSelectedStudyLevels] = useState([]);
  const [selectedIntakes, setSelectedIntakes] = useState([]);
  const [applicationFeePreference, setApplicationFeePreference] = useState("");
  const [scholarshipPreference, setScholarshipPreference] = useState("");
  const [targetYear, setTargetYear] = useState("");
  const [testScores, setTestScores] = useState([]);
  const [draftTestScore, setDraftTestScore] = useState(EMPTY_TEST_SCORE);
  const [editingTestScoreIndex, setEditingTestScoreIndex] = useState(null);
  const [currentlyWorkingChoice, setCurrentlyWorkingChoice] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [totalExperience, setTotalExperience] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [convertedAmountInput, setConvertedAmountInput] = useState("");
  const [amountEditSource, setAmountEditSource] = useState("inr");
  const [inrRates, setInrRates] = useState(null);
  const [studyGap, setStudyGap] = useState("");
  const [studyGapReason, setStudyGapReason] = useState("");
  const [visaRefusalChoice, setVisaRefusalChoice] = useState("");
  const [academicDocuments, setAcademicDocuments] = useState([]);
  const [idProofDocuments, setIdProofDocuments] = useState([]);
  const [cvDocuments, setCvDocuments] = useState([]);
  const [addMoreInformation, setAddMoreInformation] = useState("");

  const selectedStudentCountry = studentCountries.find((item) => item._id === selectedStudentCountryId) || null;
  const phoneCountries = studentCountries.filter((item) => item.dialCode);
  const selectedDialCountry = phoneCountries.find((item) => item._id === dialIso) || null;
  const clearError = () => {
    setFormError("");
    setErrors({});
  };
  const reportError = (field, message) => {
    setErrors(field ? { [field]: message } : {});
    setFormError(message);
    setTimeout(() => {
      document.getElementById(field ? `enrollment-${field}` : "enrollment-form-error")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 30);
  };

  useEffect(() => {
    let cancelled = false;
    fetchOpenCountries()
      .then((list) => {
        if (!cancelled) setStudentCountries(list);
      })
      .catch(() => {
        if (!cancelled) setStudentCountryError("Unable to load countries.");
      })
      .finally(() => {
        if (!cancelled) setStudentCountriesLoading(false);
      });

    axiosInstance
      .get("partner-enquiries/destination-countries", { skipGlobalError: true })
      .then((response) => {
        if (cancelled) return;
        setCountries(listFromResponse(response));
        setCountryError("");
      })
      .catch(() => {
        if (!cancelled) {
          setCountries([]);
          setCountryError("Unable to load countries.");
        }
      })
      .finally(() => {
        if (!cancelled) setCountriesLoading(false);
      });

    axiosInstance
      .get("student/get-student-web", { skipGlobalError: true })
      .then((response) => {
        if (cancelled) return;
        const student = response?.data?.data || {};
        const phone = String(student.mobile || "").replace(/\D/g, "").slice(-10);
        setStudentName((current) => current || student.username || "");
        setEmailId((current) => current || student.email || "");
        setMobileNumber((current) => current || phone);
        setCityState((current) => current || student.location || "");
      })
      .catch(() => {});

    getInrRatesMap()
      .then((rates) => {
        if (!cancelled) setInrRates(rates);
      })
      .catch(() => {
        if (!cancelled) setInrRates(null);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const selectedCountryIds = useMemo(
    () =>
      selectedDestinations
        .map((name) => countries.find((country) => country.name === name)?._id || "")
        .filter(Boolean),
    [countries, selectedDestinations],
  );
  const selectedCountryKey = selectedCountryIds.join(",");

  useEffect(() => {
    if (!selectedCountryKey) {
      setCampuses([]);
      setCampusError("");
      return undefined;
    }
    let cancelled = false;
    setCampusesLoading(true);
    axiosInstance
      .get("university/campusList", { params: { countryIds: selectedCountryKey }, skipGlobalError: true })
      .then((response) => {
        if (cancelled) return;
        setCampuses(listFromResponse(response));
        setCampusError("");
      })
      .catch(() => {
        if (!cancelled) {
          setCampuses([]);
          setCampusError("Unable to load campuses.");
        }
      })
      .finally(() => {
        if (!cancelled) setCampusesLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedCountryKey]);

  const budgetCurrencyCode = selectedStudentCountry?.currencyCode || "INR";
  const budgetCurrencySymbol = selectedStudentCountry?.currencySymbol || "₹";

  const countryConversions = useMemo(() => {
    const budgetValue = Number(budgetAmount);
    const hasBudget = Boolean(budgetAmount) && !Number.isNaN(budgetValue) && budgetValue > 0;
    return selectedDestinations
      .map((countryName) => {
        const country = countries.find((item) => item.name === countryName);
        const code = country?.currencyCode || "";
        const symbol = country?.currencySymbol || "";
        if (!code) return null;
        const converted = hasBudget
          ? convertBetweenCurrencies(budgetValue, budgetCurrencyCode, code, inrRates)
          : null;
        return {
          country: countryName,
          code,
          symbol,
          amount: converted == null ? "" : String(converted),
          display: converted == null ? "" : `${symbol} ${formatMoney(converted)}`.trim(),
        };
      })
      .filter(Boolean);
  }, [budgetAmount, budgetCurrencyCode, countries, inrRates, selectedDestinations]);

  const singleConversion = countryConversions.length === 1 ? countryConversions[0] : null;
  const convertedFieldValue =
    amountEditSource === "foreign" && singleConversion ? convertedAmountInput : singleConversion?.amount || "";

  useEffect(() => {
    if (countryConversions.length !== 1 && amountEditSource === "foreign") {
      setAmountEditSource("inr");
      setConvertedAmountInput("");
    }
  }, [amountEditSource, countryConversions.length]);

  const enteredBudgetDisplay =
    budgetAmount && Number(budgetAmount) > 0 ? `${budgetCurrencySymbol}${formatMoney(Number(budgetAmount))}` : "";
  const convertedBudgetDisplay = countryConversions
    .filter((item) => item.display)
    .map((item) => (countryConversions.length > 1 ? `${item.display} (${item.country})` : item.display))
    .join(" · ");
  const estimatedBudget =
    enteredBudgetDisplay && convertedBudgetDisplay
      ? `${enteredBudgetDisplay} ≈ ${convertedBudgetDisplay}`
      : enteredBudgetDisplay;

  const selectedQualificationSet = new Set(
    academicProfiles
      .filter((_, index) => index !== editingAcademicIndex)
      .map((item) => item.qualification)
      .filter(Boolean),
  );

  const selectedExamSet = new Set(
    testScores
      .filter((_, index) => index !== editingTestScoreIndex)
      .map((item) => item.exam)
      .filter(Boolean),
  );
  const isNeedWaiverDraft = draftTestScore.exam === NEED_WAIVER_EXAM;
  const examTakenValues = new Set(selectedExamSet);
  if (selectedExamSet.has(NEED_WAIVER_EXAM) || isNeedWaiverDraft) {
    EXAM_OPTIONS.forEach((option) => {
      if (option.value !== NEED_WAIVER_EXAM) examTakenValues.add(option.value);
    });
  }
  const showTestBandField = !draftTestScore.exam || examUsesBand(draftTestScore.exam);
  const scoreFieldsDisabled = !draftTestScore.exam || isNeedWaiverDraft;

  const campusChoices = useMemo(() => {
    const allowed = new Set(selectedCountryIds);
    const showCountry = selectedDestinations.length > 1;
    return campuses
      .filter((item) => item.countryId && allowed.has(String(item.countryId)))
      .map((item) => ({
        value: item._id,
        label: showCountry && item.countryName ? `${item.campus} (${item.countryName})` : item.campus,
      }));
  }, [campuses, selectedCountryIds, selectedDestinations.length]);

  const handleStudentCountryChange = (countryId) => {
    setSelectedStudentCountryId(countryId);
    const match = studentCountries.find((item) => item._id === countryId);
    if (match?.dialCode) {
      setDialIso(match._id);
      setDialCode(match.dialCode);
    }
    setBudgetAmount("");
    setConvertedAmountInput("");
    setAmountEditSource("inr");
    clearError();
  };

  const addAcademicRow = () => {
    const nextRow = normalizeAcademicRow(draftAcademic);
    if (!nextRow.qualification) {
      reportError("qualification", "Please select a qualification.");
      return;
    }
    const rowError = academicRowError(nextRow);
    if (rowError) {
      reportError("qualification", rowError);
      return;
    }
    if (selectedQualificationSet.has(nextRow.qualification)) {
      reportError("qualification", "This qualification is already added.");
      return;
    }
    setAcademicProfiles((current) =>
      editingAcademicIndex === null
        ? [...current, nextRow]
        : current.map((item, index) => (index === editingAcademicIndex ? nextRow : item)),
    );
    setEditingAcademicIndex(null);
    setDraftAcademic(EMPTY_ACADEMIC_PROFILE);
    clearError();
  };

  const addTestScoreRow = () => {
    const exam = draftTestScore.exam.trim();
    if (!exam) {
      reportError("tests", "Select an exam, or leave the test score fields empty.");
      return;
    }
    if (selectedExamSet.has(exam)) {
      reportError("tests", "This exam is already added.");
      return;
    }
    if (selectedExamSet.has(NEED_WAIVER_EXAM)) {
      reportError("tests", "Remove Need Waiver before adding another exam.");
      return;
    }
    const nextRow = {
      exam,
      score: draftTestScore.score.trim(),
      noBandLessThan: examUsesBand(exam) ? draftTestScore.noBandLessThan.trim() : "",
    };
    const scoreError = validateTestScoreEntry(nextRow);
    if (scoreError) {
      reportError("tests", scoreError);
      return;
    }
    setTestScores((current) =>
      editingTestScoreIndex === null
        ? [...current, nextRow]
        : current.map((item, index) => (index === editingTestScoreIndex ? nextRow : item)),
    );
    setEditingTestScoreIndex(null);
    setDraftTestScore(EMPTY_TEST_SCORE);
    clearError();
  };

  const appliedTestScores = () => {
    const rows = testScores.map((item, index) =>
      index === editingTestScoreIndex
        ? {
            exam: draftTestScore.exam.trim(),
            score: draftTestScore.score.trim(),
            noBandLessThan: examUsesBand(draftTestScore.exam) ? draftTestScore.noBandLessThan.trim() : "",
          }
        : item,
    );
    if (editingTestScoreIndex === null && draftTestScore.exam.trim()) {
      rows.push({
        exam: draftTestScore.exam.trim(),
        score: draftTestScore.score.trim(),
        noBandLessThan: examUsesBand(draftTestScore.exam) ? draftTestScore.noBandLessThan.trim() : "",
      });
    }
    return rows.filter((item) => item.exam);
  };

  const updateFiles = (setter) => (event) => {
    const picked = Array.from(event.target.files || []);
    event.target.value = "";
    if (picked.some((file) => !isAllowedDocument(file))) {
      reportError("", "Only image, PDF, and DOC files are allowed.");
      return;
    }
    setter((current) => [...current, ...picked]);
    clearError();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const passportAvailable = parseYesNo(passportChoice);
    const visaRefusalHistory = parseYesNo(visaRefusalChoice);
    const scores = appliedTestScores();

    if (!studentName.trim()) return reportError("studentName", "Please enter student name.");
    if (!dialCode) return reportError("mobile", "Please select a country code.");
    if (!isNationalMobile(dialCode, mobileNumber)) {
      return reportError(
        "mobile",
        dialCode === "+91"
          ? "Please enter a valid 10-digit mobile number."
          : "Please enter a valid mobile number.",
      );
    }
    if (!emailId.trim() || !isLikelyEmail(emailId)) return reportError("email", "Please enter a valid email ID.");
    if (dateOfBirth && !isValidDateOfBirth(dateOfBirth)) {
      return reportError("dob", "Please enter a valid date of birth.");
    }
    if (passportAvailable === null) return reportError("passport", "Please select passport availability.");
    if (!selectedStudentCountryId) return reportError("studentCountry", "Please select a country.");

    const draftRow = normalizeAcademicRow(draftAcademic);
    let profiles = academicProfiles.map(normalizeAcademicRow);
    if (isAcademicDraftStarted(draftAcademic)) {
      const rowError = academicRowError(draftRow);
      if (rowError) return reportError("qualification", rowError);
      const duplicate = profiles.some(
        (item, index) => item.qualification === draftRow.qualification && index !== editingAcademicIndex,
      );
      if (duplicate) return reportError("qualification", "This qualification is already added.");
      profiles =
        editingAcademicIndex === null
          ? [...profiles, draftRow]
          : profiles.map((item, index) => (index === editingAcademicIndex ? draftRow : item));
    }
    const invalidAcademic = profiles.map(academicRowError).find(Boolean);

    if (profiles.length === 0) return reportError("qualification", "Please add at least one academic qualification.");
    if (invalidAcademic) return reportError("qualification", invalidAcademic);
    if (selectedStudyLevels.length === 0) return reportError("degree", "Please select a preferred degree.");
    const academicError = academicRequirementMessage(selectedStudyLevels, profiles);
    if (academicError) return reportError("qualification", academicError);
    if (!preferredCourse.trim()) return reportError("course", "Please enter preferred course / specialization.");
    if (!selectedDestinations.length) return reportError("country", "Please select country preference.");
    if (currentlyWorkingChoice === "yes" && !companyName.trim()) {
      return reportError("company", "Please enter the company name.");
    }
    if (currentlyWorkingChoice === "yes" && !totalExperience.trim()) {
      return reportError("experience", "Please enter total experience.");
    }
    if (isStudyGapSelected(studyGap) && !studyGapReason.trim()) {
      return reportError("studyGap", "Please enter the study gap reason.");
    }
    if (visaRefusalHistory === null) return reportError("visa", "Please select visa refusal history.");
    const testScoreError = validateTestScores(scores);
    if (testScoreError) return reportError("tests", testScoreError);

    const campusNames = campusChoices
      .filter((item) => selectedCampusIds.includes(item.value))
      .map((item) => item.label);

    await onSubmit({
      studentName: studentName.trim(),
      dialCode,
      mobileCountryIso: dialIso,
      mobileNumber,
      emailId: emailId.trim(),
      cityState: cityState.trim(),
      dateOfBirth,
      countryId: selectedStudentCountryId,
      countryName: selectedStudentCountry?.name || "",
      citizenshipName: selectedStudentCountry?.name || "",
      passportAvailable,
      academicProfiles: profiles,
      preferredCourse: preferredCourse.trim(),
      preferredStudyLevels: selectedStudyLevels,
      preferredIntakes: selectedIntakes,
      applicationFeePreference,
      scholarshipPreference,
      targetYear,
      destinations: selectedDestinations,
      campusIds: selectedCampusIds,
      campuses: campusNames,
      testScores: scores,
      currentlyWorking: parseYesNo(currentlyWorkingChoice),
      companyName: currentlyWorkingChoice === "yes" ? companyName.trim() : "",
      totalExperience: currentlyWorkingChoice === "yes" ? totalExperience.trim() : "",
      estimatedBudget,
      studyGap,
      studyGapReason: isStudyGapSelected(studyGap) ? studyGapReason.trim() : "",
      visaRefusalHistory,
      addMoreInformation: addMoreInformation.trim(),
      documents: {
        academic: fileMeta(academicDocuments),
        idProof: fileMeta(idProofDocuments),
        cv: fileMeta(cvDocuments),
      },
    });
  };

  const countriesDisabled = countriesLoading || countries.length === 0;
  const countryPlaceholder = countriesLoading
    ? "Loading countries..."
    : countryError || (countries.length === 0 ? "No countries available" : "Select countries");
  const requirementHint = academicRequirementHint(selectedStudyLevels);

  return (
    <ThemeProvider theme={formTheme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card sx={{ borderRadius: "14px", border: "1px solid #E3EEEF", boxShadow: "0 8px 24px rgba(16, 42, 46, 0.05)", bgcolor: "#F4FAFA" }}>
        <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
          <Box sx={{ mb: 1.5, px: 0.5 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "#102A2E", lineHeight: 1.2 }}>Enrollment Form</Typography>
            <Typography sx={{ mt: 0.4, fontSize: "13px", color: "#64748B" }}>
              Required fields are marked with *.
            </Typography>
          </Box>
          <form onSubmit={handleSubmit} noValidate>
            <Section title="Basic Information">
              <FieldGrid>
                <TextField
                  id="enrollment-studentName"
                  label="Student Name"
                  placeholder="Enter full student name"
                  value={studentName}
                  error={Boolean(errors.studentName)}
                  helperText={errors.studentName || undefined}
                  InputLabelProps={REQUIRED_LABEL}
                  onChange={(event) => {
                    setStudentName(event.target.value);
                    clearError();
                  }}
                  sx={{ gridColumn: { md: "1 / -1" } }}
                />
                <Box id="enrollment-mobile" sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                  <Autocomplete
                    size="small"
                    disableClearable={Boolean(selectedDialCountry)}
                    options={phoneCountries}
                    loading={studentCountriesLoading}
                    disabled={studentCountriesLoading || phoneCountries.length === 0}
                    value={selectedDialCountry}
                    onChange={(_, value) => {
                      setDialIso(value?._id || "");
                      setDialCode(value?.dialCode || "");
                      clearError();
                    }}
                    getOptionLabel={(option) => option?.dialCode || ""}
                    isOptionEqualToValue={(option, value) => option._id === value._id}
                    filterOptions={(options, state) => {
                      const query = state.inputValue.trim().toLowerCase();
                      if (!query) return options;
                      return options.filter((option) =>
                        option.name.toLowerCase().includes(query) ||
                        option.dialCode.toLowerCase().includes(query.replace(/\s/g, "")) ||
                        option._id.toLowerCase().includes(query),
                      );
                    }}
                    renderOption={(props, option) => {
                      const { key, ...optionProps } = props;
                      return (
                        <Box component="li" key={key} {...optionProps}>
                          <CountryFlag code={option._id} />
                          <Box component="span" sx={{ flex: 1 }}>{option.name}</Box>
                          <Box component="span" sx={{ ml: 1, color: "#64748B", fontSize: "12px" }}>{option.dialCode}</Box>
                        </Box>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Code"
                        error={Boolean(errors.mobile)}
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <>
                              {selectedDialCountry ? <CountryFlag code={selectedDialCountry._id} /> : null}
                              {params.InputProps.startAdornment}
                            </>
                          ),
                        }}
                      />
                    )}
                    slotProps={{ paper: { sx: { minWidth: 260 } } }}
                    sx={{ width: 148, flexShrink: 0 }}
                  />
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    placeholder={dialCode === "+91" ? "10-digit mobile number" : "Mobile number"}
                    value={mobileNumber}
                    error={Boolean(errors.mobile)}
                    helperText={errors.mobile || undefined}
                    InputLabelProps={REQUIRED_LABEL}
                    inputProps={{ inputMode: "numeric", maxLength: dialCode === "+91" ? 10 : 15 }}
                    onChange={(event) => {
                      setMobileNumber(sanitizeDigits(event.target.value, dialCode === "+91" ? 10 : 15));
                      clearError();
                    }}
                  />
                </Box>
                <TextField
                  id="enrollment-email"
                  type="email"
                  label="Email ID"
                  placeholder="Enter email ID"
                  value={emailId}
                  error={Boolean(errors.email)}
                  helperText={errors.email || undefined}
                  InputLabelProps={REQUIRED_LABEL}
                  onChange={(event) => {
                    setEmailId(event.target.value);
                    clearError();
                  }}
                />
                <TextField
                  label="City/State"
                  placeholder="Enter city / state"
                  value={cityState}
                  onChange={(event) => setCityState(event.target.value)}
                />
                <DatePicker
                  label="Date of Birth"
                  format="DD/MM/YYYY"
                  value={dateOfBirth ? dayjs(dateOfBirth) : null}
                  maxDate={dayjs()}
                  minDate={dayjs("1940-01-01")}
                  onChange={(next) => {
                    setDateOfBirth(next?.isValid?.() ? next.format("YYYY-MM-DD") : "");
                    clearError();
                  }}
                  slotProps={{
                    textField: {
                      id: "enrollment-dob",
                      fullWidth: true,
                      size: "small",
                      error: Boolean(errors.dob),
                      helperText: errors.dob || undefined,
                    },
                  }}
                />
                <Autocomplete
                  id="enrollment-studentCountry"
                  fullWidth
                  size="small"
                  options={studentCountries}
                  loading={studentCountriesLoading}
                  disabled={studentCountriesLoading || studentCountries.length === 0}
                  value={selectedStudentCountry}
                  onChange={(_, value) => handleStudentCountryChange(value?._id || "")}
                  getOptionLabel={(option) => option?.name || ""}
                  isOptionEqualToValue={(option, value) => option._id === value._id}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;
                    return (
                      <Box component="li" key={key} {...optionProps}>
                        <CountryFlag code={option._id} />
                        {option.name}
                      </Box>
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country"
                      placeholder={studentCountriesLoading ? "Loading countries..." : "Search and select a country"}
                      error={Boolean(studentCountryError || errors.studentCountry)}
                      helperText={errors.studentCountry || studentCountryError || undefined}
                      InputLabelProps={REQUIRED_LABEL}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <>
                            {selectedStudentCountry ? <CountryFlag code={selectedStudentCountry._id} /> : null}
                            {params.InputProps.startAdornment}
                          </>
                        ),
                      }}
                    />
                  )}
                />
                <YesNoField
                  id="enrollment-passport"
                  required
                  error={errors.passport}
                  name="passportAvailable"
                  label="Passport Available"
                  value={passportChoice}
                  onChange={(value) => {
                    setPassportChoice(value);
                    clearError();
                  }}
                />
              </FieldGrid>
            </Section>

            <Section id="enrollment-qualification" title="Academic Profile">
              {requirementHint ? (
                <Typography sx={{ mb: 1.5, fontSize: "12px", color: "#64748B" }}>{requirementHint}.</Typography>
              ) : null}
              <FieldGrid columns={3}>
                <TextField
                  select
                  label="Current Qualification"
                  value={draftAcademic.qualification}
                  error={Boolean(errors.qualification)}
                  helperText={errors.qualification || undefined}
                  InputLabelProps={REQUIRED_LABEL}
                  onChange={(event) =>
                    setDraftAcademic((current) => ({ ...current, qualification: event.target.value }))
                  }
                >
                  <MenuItem value="">Select qualification</MenuItem>
                  {QUALIFICATION_OPTIONS.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      disabled={selectedQualificationSet.has(option.value)}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="School/College/University"
                  placeholder="Enter school / college / university"
                  value={draftAcademic.institutionName}
                  disabled={!draftAcademic.qualification}
                  onChange={(event) =>
                    setDraftAcademic((current) => ({ ...current, institutionName: event.target.value }))
                  }
                  sx={{ gridColumn: { md: "span 2" } }}
                />
                <TextField
                  label="Course/Stream"
                  placeholder="Enter course / stream"
                  value={draftAcademic.courseStream}
                  disabled={!draftAcademic.qualification}
                  onChange={(event) =>
                    setDraftAcademic((current) => ({ ...current, courseStream: event.target.value }))
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      addAcademicRow();
                    }
                  }}
                />
                <TextField
                  label="Passing Year"
                  placeholder="e.g. 2024"
                  value={draftAcademic.passingYear}
                  disabled={!draftAcademic.qualification}
                  onChange={(event) =>
                    setDraftAcademic((current) => ({
                      ...current,
                      passingYear: sanitizeYearInput(event.target.value),
                    }))
                  }
                />
                <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                  <TextField
                    fullWidth
                    label="Percentage/CGPA"
                    InputLabelProps={REQUIRED_LABEL}
                    placeholder="Enter percentage or CGPA"
                    value={draftAcademic.percentageCgpa}
                    disabled={!draftAcademic.qualification}
                    onChange={(event) =>
                      setDraftAcademic((current) => ({
                        ...current,
                        percentageCgpa: sanitizeNumericInput(event.target.value),
                      }))
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        addAcademicRow();
                      }
                    }}
                  />
                  <Button type="button" variant="contained" onClick={addAcademicRow} sx={addButtonSx}>
                    {editingAcademicIndex !== null ? "Update" : "Add"}
                  </Button>
                </Box>
              </FieldGrid>
              <EntryTable
                emptyText="No academic qualifications added yet"
                columns={["Qualification", "Institution", "Course / Stream", "Year", "Score"]}
                rows={academicProfiles.map((row) => [
                  row.qualification,
                  row.institutionName,
                  row.courseStream,
                  row.passingYear,
                  row.percentageCgpa,
                ])}
                editingIndex={editingAcademicIndex}
                onEdit={(index) => {
                  setDraftAcademic({ ...academicProfiles[index] });
                  setEditingAcademicIndex(index);
                }}
                onRemove={(index) => {
                  setAcademicProfiles((current) => current.filter((_, itemIndex) => itemIndex !== index));
                  if (editingAcademicIndex === index) {
                    setDraftAcademic(EMPTY_ACADEMIC_PROFILE);
                    setEditingAcademicIndex(null);
                  }
                }}
              />
            </Section>

            <Section title="Prefer Study Level">
              <TextField
                id="enrollment-course"
                fullWidth
                label="Preferred Course/Specialization"
                placeholder="e.g. Computer Science"
                value={preferredCourse}
                error={Boolean(errors.course)}
                helperText={errors.course || undefined}
                InputLabelProps={REQUIRED_LABEL}
                onChange={(event) => {
                  setPreferredCourse(event.target.value);
                  clearError();
                }}
                sx={{ mb: 2 }}
              />
              <FieldGrid>
                <TextField
                  id="enrollment-degree"
                  select
                  label="Preferred Degree"
                  value={selectedStudyLevels[0] || ""}
                  error={Boolean(errors.degree)}
                  helperText={errors.degree || undefined}
                  InputLabelProps={REQUIRED_LABEL}
                  onChange={(event) => {
                    setSelectedStudyLevels(event.target.value ? [event.target.value] : []);
                    clearError();
                  }}
                >
                  <MenuItem value="">Select preferred degree</MenuItem>
                  {PREFERRED_DEGREE_OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Autocomplete
                  fullWidth
                  multiple
                  options={INTAKE_MONTH_OPTIONS}
                  getOptionLabel={(option) => option.label}
                  value={INTAKE_MONTH_OPTIONS.filter((option) => selectedIntakes.includes(option.value))}
                  onChange={(_, value) =>
                    setSelectedIntakes(applyIntakeSelection(selectedIntakes, value.map((item) => item.value)))
                  }
                  renderInput={(params) => (
                    <TextField {...params} size="small" label="Preferred Intake" placeholder="Select intake" />
                  )}
                />
                <ChoiceField
                  label="Application fee"
                  value={applicationFeePreference}
                  options={APPLICATION_FEE_OPTIONS}
                  onChange={setApplicationFeePreference}
                />
                <ChoiceField
                  label="Scholarship"
                  value={scholarshipPreference}
                  options={SCHOLARSHIP_OPTIONS}
                  onChange={setScholarshipPreference}
                />
                <TextField select label="Intake Year" value={targetYear} onChange={(event) => setTargetYear(event.target.value)}>
                  <MenuItem value="">Select year</MenuItem>
                  {intakeYearOptions().map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>
                <Autocomplete
                  id="enrollment-country"
                  fullWidth
                  multiple
                  disabled={countriesDisabled}
                  options={countries}
                  getOptionLabel={(option) => option.name || ""}
                  isOptionEqualToValue={(option, value) => option.name === value.name}
                  value={countries.filter((country) => selectedDestinations.includes(country.name))}
                  onChange={(_, value) => {
                    const names = value.map((item) => item.name);
                    const allowedIds = new Set(value.map((item) => String(item._id)));
                    setSelectedDestinations(names);
                    setSelectedCampusIds((current) =>
                      current.filter((id) => {
                        const campus = campuses.find((item) => item._id === id);
                        return campus?.countryId && allowedIds.has(String(campus.countryId));
                      }),
                    );
                    setAmountEditSource("inr");
                    setConvertedAmountInput("");
                    clearError();
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country Preference"
                      placeholder={countryPlaceholder}
                      helperText={errors.country || countryError || undefined}
                      error={Boolean(countryError || errors.country)}
                      InputLabelProps={REQUIRED_LABEL}
                    />
                  )}
                />
                <Autocomplete
                  fullWidth
                  multiple
                  disabled={!selectedDestinations.length}
                  options={campusChoices}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) => option.value === value.value}
                  value={campusChoices.filter((item) => selectedCampusIds.includes(item.value))}
                  onChange={(_, value) => setSelectedCampusIds(value.map((item) => item.value))}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Campus"
                      placeholder={
                        !selectedDestinations.length
                          ? "Select countries first"
                          : campusesLoading
                            ? "Loading campuses..."
                            : "Select campuses (optional)"
                      }
                      helperText={campusError || undefined}
                      error={Boolean(campusError)}
                    />
                  )}
                  sx={{ gridColumn: { md: "1 / -1" } }}
                />
              </FieldGrid>

              <Typography id="enrollment-tests" sx={{ mt: 3, mb: 1.5, fontSize: "16px", fontWeight: 700, color: TEAL }}>
                Test Scores
              </Typography>
              {errors.tests ? (
                <Typography sx={{ mb: 1, fontSize: "12px", color: "#d32f2f" }}>{errors.tests}</Typography>
              ) : null}
              <FieldGrid columns={showTestBandField ? 4 : 3}>
                <TextField
                  select
                  label="Exam"
                  value={draftTestScore.exam}
                  disabled={selectedExamSet.has(NEED_WAIVER_EXAM)}
                  onChange={(event) => {
                    const exam = event.target.value;
                    if (draftTestScore.exam === exam) {
                      setDraftTestScore(EMPTY_TEST_SCORE);
                      return;
                    }
                    const isWaiver = exam === NEED_WAIVER_EXAM;
                    setDraftTestScore({
                      exam,
                      score: isWaiver ? "" : draftTestScore.score,
                      noBandLessThan: isWaiver || !examUsesBand(exam) ? "" : draftTestScore.noBandLessThan,
                    });
                  }}
                >
                  <MenuItem value="">Select exam</MenuItem>
                  {EXAM_OPTIONS.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      disabled={examTakenValues.has(option.value) && option.value !== draftTestScore.exam}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Score"
                  value={draftTestScore.score}
                  disabled={scoreFieldsDisabled}
                  placeholder={scorePlaceholder(draftTestScore.exam)}
                  error={Boolean(scoreLimitError(draftTestScore.exam, "score", draftTestScore.score))}
                  helperText={scoreLimitError(draftTestScore.exam, "score", draftTestScore.score)}
                  onChange={(event) =>
                    setDraftTestScore((current) => ({ ...current, score: sanitizeNumericInput(event.target.value) }))
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      addTestScoreRow();
                    }
                  }}
                />
                {showTestBandField ? (
                  <TextField
                    label="No Band Less Than"
                    value={draftTestScore.noBandLessThan}
                    disabled={scoreFieldsDisabled}
                    placeholder={bandPlaceholder(draftTestScore.exam)}
                    error={Boolean(scoreLimitError(draftTestScore.exam, "band", draftTestScore.noBandLessThan))}
                    helperText={
                      scoreLimitError(draftTestScore.exam, "band", draftTestScore.noBandLessThan) ||
                      (draftTestScore.exam === "TOEFL" ? "Lowest section score, out of 30" : "")
                    }
                    onChange={(event) =>
                      setDraftTestScore((current) => ({
                        ...current,
                        noBandLessThan: sanitizeNumericInput(event.target.value),
                      }))
                    }
                  />
                ) : null}
                <Button type="button" variant="contained" onClick={addTestScoreRow} sx={addButtonSx}>
                  {editingTestScoreIndex !== null ? "Update" : "Add"}
                </Button>
              </FieldGrid>
              <EntryTable
                emptyText="No exam scores added yet"
                columns={["Exam", "Score", "No Band Less Than"]}
                rows={testScores.map((row) => [examDisplayName(row.exam), row.score || "—", row.noBandLessThan || "—"])}
                editingIndex={editingTestScoreIndex}
                onEdit={(index) => {
                  setDraftTestScore({ ...testScores[index] });
                  setEditingTestScoreIndex(index);
                }}
                onRemove={(index) => {
                  setTestScores((current) => current.filter((_, itemIndex) => itemIndex !== index));
                  if (editingTestScoreIndex === index) {
                    setDraftTestScore(EMPTY_TEST_SCORE);
                    setEditingTestScoreIndex(null);
                  }
                }}
              />
            </Section>

            <Section title="Work Experience (If Applicable)">
              <YesNoField
                name="currentlyWorking"
                label="Currently Working"
                value={currentlyWorkingChoice}
                onChange={setCurrentlyWorkingChoice}
              />
              {currentlyWorkingChoice === "yes" ? (
                <FieldGrid>
                  <TextField
                    id="enrollment-company"
                    label="Company Name"
                    placeholder="Enter company name"
                    value={companyName}
                    error={Boolean(errors.company)}
                    helperText={errors.company || undefined}
                    InputLabelProps={REQUIRED_LABEL}
                    onChange={(event) => {
                      setCompanyName(event.target.value);
                      clearError();
                    }}
                  />
                  <TextField
                    id="enrollment-experience"
                    label="Total Experience"
                    placeholder="e.g. 2 years"
                    value={totalExperience}
                    error={Boolean(errors.experience)}
                    helperText={errors.experience || undefined}
                    InputLabelProps={REQUIRED_LABEL}
                    onChange={(event) => {
                      setTotalExperience(event.target.value);
                      clearError();
                    }}
                  />
                </FieldGrid>
              ) : null}
            </Section>

            <Section title="Financial Planning">
              <FieldGrid>
                <TextField
                  label={`Estimated Budget Yearly Tuition Fee (${budgetCurrencySymbol})`}
                  value={budgetAmount}
                  placeholder={`Enter amount in ${budgetCurrencyCode} (optional)`}
                  sx={singleConversion ? undefined : { gridColumn: { md: "1 / -1" } }}
                  onChange={(event) => {
                    setAmountEditSource("inr");
                    setBudgetAmount(sanitizeNumericInput(event.target.value));
                  }}
                />
                {singleConversion ? (
                  <TextField
                    label={`Converted Amount · ${singleConversion.country} (${singleConversion.symbol} ${singleConversion.code})`}
                    value={convertedFieldValue}
                    placeholder="Enter converted amount"
                    onChange={(event) => {
                      const nextValue = sanitizeNumericInput(event.target.value);
                      setAmountEditSource("foreign");
                      setConvertedAmountInput(nextValue);
                      if (!nextValue) {
                        setBudgetAmount("");
                        return;
                      }
                      const budgetValue = convertBetweenCurrencies(
                        Number(nextValue),
                        singleConversion.code,
                        budgetCurrencyCode,
                        inrRates,
                      );
                      if (budgetValue != null) setBudgetAmount(String(budgetValue));
                    }}
                  />
                ) : countryConversions.length === 0 ? (
                  <TextField
                    disabled
                    label="Converted Amount"
                    value=""
                    placeholder="Select countries to see converted amounts"
                  />
                ) : null}
              </FieldGrid>
              {countryConversions.length > 1 ? (
                <FieldGrid columns={3}>
                  {countryConversions.map((item) => (
                    <Box
                      key={`${item.country}-${item.code}`}
                      sx={{ mt: 0.5, p: 1.5, borderRadius: 2, border: "1px solid #E2E8F0", bgcolor: "#F8FAFC" }}
                    >
                      <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#64748B" }}>{item.country}</Typography>
                      <Typography sx={{ mt: 0.5, fontSize: "14px", fontWeight: 700 }}>
                        {item.display || `${item.symbol} —`}
                      </Typography>
                      <Typography sx={{ fontSize: "11px", color: "#94A3B8" }}>{item.code}</Typography>
                    </Box>
                  ))}
                </FieldGrid>
              ) : null}
            </Section>

            <Section title="Additional Information">
              <FieldGrid>
                <TextField
                  select
                  label="Study Gap"
                  value={studyGap}
                  onChange={(event) => {
                    const value = event.target.value;
                    setStudyGap(value);
                    if (!isStudyGapSelected(value)) setStudyGapReason("");
                    clearError();
                  }}
                >
                  {STUDY_GAP_OPTIONS.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <YesNoField
                  id="enrollment-visa"
                  required
                  error={errors.visa}
                  name="visaRefusalHistory"
                  label="Visa Refusal History"
                  value={visaRefusalChoice}
                  onChange={(value) => {
                    setVisaRefusalChoice(value);
                    clearError();
                  }}
                />
                {isStudyGapSelected(studyGap) ? (
                  <TextField
                    id="enrollment-studyGap"
                    label="Study Gap Reason"
                    placeholder="Enter the reason for the study gap"
                    value={studyGapReason}
                    error={Boolean(errors.studyGap)}
                    helperText={errors.studyGap || undefined}
                    InputLabelProps={REQUIRED_LABEL}
                    onChange={(event) => {
                      setStudyGapReason(event.target.value);
                      clearError();
                    }}
                    sx={{ gridColumn: { md: "1 / -1" } }}
                  />
                ) : null}
              </FieldGrid>
            </Section>

            <Section title="Documents">
              <FieldGrid>
                <FilePicker
                  id="academic-documents"
                  label="Academic Documents"
                  helper="10th, 12th, Bachelor's, or Master's marksheets. PDF, JPG, PNG, or DOC."
                  files={academicDocuments}
                  onPick={updateFiles(setAcademicDocuments)}
                  onRemove={(index) =>
                    setAcademicDocuments((current) => current.filter((_, itemIndex) => itemIndex !== index))
                  }
                />
                <FilePicker
                  id="id-proof-documents"
                  label="ID Card and Address Proof (Optional)"
                  helper="Passport, Aadhaar, driving licence, voter ID, or address proof."
                  files={idProofDocuments}
                  onPick={updateFiles(setIdProofDocuments)}
                  onRemove={(index) =>
                    setIdProofDocuments((current) => current.filter((_, itemIndex) => itemIndex !== index))
                  }
                />
                <FilePicker
                  id="cv-documents"
                  label="Add CV / Other Files (Optional)"
                  helper="CV, LOR, SOP, or essay."
                  files={cvDocuments}
                  onPick={updateFiles(setCvDocuments)}
                  onRemove={(index) => setCvDocuments((current) => current.filter((_, itemIndex) => itemIndex !== index))}
                />
              </FieldGrid>
            </Section>

            <Section title="">
              <TextField
                fullWidth
                multiline
                minRows={2}
                size="small"
                label="Add More Information"
                placeholder="Any extra details — preferred university, special notes, or other information..."
                value={addMoreInformation}
                onChange={(event) => setAddMoreInformation(event.target.value)}
              />
            </Section>

            {formError ? (
              <Alert id="enrollment-form-error" severity="error" sx={{ mt: 2 }}>
                {formError}
              </Alert>
            ) : null}

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ minWidth: 180, height: 40, bgcolor: TEAL, "&:hover": { bgcolor: "#007C80" } }}
              >
                {isSubmitting ? "Submitting..." : "Submit Enrollment"}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </LocalizationProvider>
    </ThemeProvider>
  );
};

const EntryTable = ({ columns, rows, emptyText, editingIndex, onEdit, onRemove }) => (
  <Box sx={{ mt: 2, overflowX: "auto", border: "1px solid #E2E8F0", borderRadius: "12px" }}>
    {!rows.length ? (
      <Typography sx={{ px: 1.5, py: 1.25, fontSize: "13px", color: "#94A3B8" }}>{emptyText}</Typography>
    ) : (
      <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px" }}>
        <Box component="thead">
          <Box component="tr" sx={{ bgcolor: "#F4FBFC" }}>
            {columns.map((column) => (
              <Box component="th" key={column} sx={{ px: 1.5, py: 1.1, textAlign: "left", color: "#475569", fontWeight: 700 }}>
                {column}
              </Box>
            ))}
            <Box component="th" sx={{ px: 1.5, py: 1.1 }} />
          </Box>
        </Box>
        <Box component="tbody">
          {rows.map((cells, index) => (
            <Box component="tr" key={`${cells[0]}-${index}`} sx={{ bgcolor: editingIndex === index ? "#E7F8F8" : "#fff" }}>
              {cells.map((cell, cellIndex) => (
                <Box component="td" key={cellIndex} sx={{ px: 1.5, py: 1, borderTop: "1px solid #E2E8F0", color: "#1E293B" }}>
                  {cell || "—"}
                </Box>
              ))}
              <Box component="td" sx={{ px: 1, py: 0.5, borderTop: "1px solid #E2E8F0", whiteSpace: "nowrap", textAlign: "right" }}>
                <IconButton size="small" aria-label={`Edit row ${index + 1}`} onClick={() => onEdit(index)}>
                  <EditOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" aria-label={`Remove row ${index + 1}`} onClick={() => onRemove(index)}>
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    )}
  </Box>
);

const FilePicker = ({ id, label, helper, files, onPick, onRemove }) => (
  <Box sx={{ p: 1.25, height: "100%", border: "1px dashed #C5D4DB", borderRadius: "10px", bgcolor: "#F8FBFC" }}>
    <Typography sx={{ mb: 0.75, fontSize: "12px", fontWeight: 700, color: "#334155" }}>{label}</Typography>
    <Button component="label" htmlFor={id} variant="outlined" sx={{ borderColor: "#B7C8CE", color: "#12343A", bgcolor: "#fff" }}>
      Choose files
      <input
        id={id}
        hidden
        multiple
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp,.gif,image/*"
        onChange={onPick}
      />
    </Button>
    <Typography sx={{ mt: 1, fontSize: "12px", lineHeight: 1.5, color: "#64748B" }}>{helper}</Typography>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: files.length ? 1.25 : 0 }}>
      {files.map((file, index) => (
        <Chip key={`${file.name}-${index}`} size="small" label={file.name} onDelete={() => onRemove(index)} />
      ))}
    </Box>
  </Box>
);

export default EnrollmentProgramForm;
