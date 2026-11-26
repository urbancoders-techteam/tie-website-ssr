// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useDispatch, useSelector } from "react-redux";
import {
  getEnrollmentSupportByTokenAsync,
  postEnrollmentSupportAsync,
} from "@/portal/redux/services/postEnrollmentServices";
import { useSnackbar } from "@/portal/Component/Snakbar";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import { LoadingButton } from "@mui/lab";

// Services to show in UI
const serviceMap = [
  { label: "Education Loan Support", key: "educationLoanSupport" },
  { label: "Visa Support", key: "visaSupport" },
  { label: "Travel & Forex Support", key: "travelAndForexSupport" },
  { label: "Accommodation Support", key: "accommodationSupport" },
];

export default function PostEnrollmentForm() {
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();
  const { getEnrollmentSupportByToken, isLoading, isSubmitting } = useSelector(
    (state) => state.enrollmentSupport
  );

  const [formData, setFormData] = useState(
    serviceMap.reduce((acc, item) => ({ ...acc, [item.key]: null }), {})
  );
  const [dirtyFields, setDirtyFields] = useState({});

  // Fetch data on mount
  useEffect(() => {
    dispatch(getEnrollmentSupportByTokenAsync());
  }, [dispatch]);

  // Fill form state with fetched data
  useEffect(() => {
    if (
      getEnrollmentSupportByToken &&
      typeof getEnrollmentSupportByToken === "object"
    ) {
      const updatedData = {};

      serviceMap.forEach((item) => {
        const supportData = getEnrollmentSupportByToken[item.key];
        if (supportData?.hasOwnProperty("opted")) {
          updatedData[item.key] = {
            opted: supportData.opted,
            status: supportData.status ?? "Not Applied",
          };
        }
      });

      setFormData((prev) => ({
        ...prev,
        ...updatedData,
      }));
    }
  }, [getEnrollmentSupportByToken]);

  // Toggle YES/NO
  const handleSelect = (key, value) => {
    const current = formData[key];
    if (current?.status === "Ongoing") return;

    setFormData((prev) => ({
      ...prev,
      [key]: {
        opted: prev[key]?.opted === value ? null : value,
        status: "",
      },
    }));

    setDirtyFields((prev) => ({
      ...prev,
      [key]: {
        opted: prev[key]?.opted === value ? null : value,
        status: prev[key]?.status,
      },
    }));
  };

  // Submit logic
  const handleSubmit = () => {
    const payload = {};
    const errors = [];

    serviceMap.forEach(({ key }) => {
      const isModified = dirtyFields[key];
      const userValue = formData[key];
      const fallbackValue = getEnrollmentSupportByToken?.[key];

      const source = isModified ? userValue : fallbackValue;

      if (!source || source.opted === null || source.opted === undefined) {
        errors.push(key);
      } else {
        payload[key] = {
          opted: source.opted,
          status: source.status,
        };
      }
    });

    if (errors.length > 0) {
      showSnackbar(
        "Please select YES or NO for all fields (except 'Ongoing') before submitting.",
        "error"
      );
      return;
    }

    dispatch(postEnrollmentSupportAsync(payload)).then((response) => {
      if (response.payload?.status) {
        showSnackbar(response.payload?.message, "success");
        dispatch(getEnrollmentSupportByTokenAsync());
        setDirtyFields({});
      } else {
        console.error("Error submitting form:", response.error);
        showSnackbar("Submission failed. Please try again.", "error");
      }
    });
  };

  // Check if all services are disabled
  const allDisabled = serviceMap.every((service) => {
    const status = formData[service.key]?.status;
    return status === "Ongoing" || status === "Completed";
  });

  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#fff",
        mt: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Post Enrollment Support Form
      </Typography>

      {isLoading ? (
        <CustomCircularProgress />
      ) : (
        <>
          {serviceMap.map((service) => {
            const data = formData[service.key] || {};
            const isDisabled =
              data.status === "Ongoing" || data.status === "Completed";

            return (
              <Grid
                container
                key={service.key}
                spacing={2}
                sx={{ my: 2 }}
                alignItems="center"
              >
                <Grid item xs={12} sm={5}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#00999E",
                      color: "#fff",
                      borderRadius: "30px",
                      textTransform: "none",
                      fontWeight: "bold",
                      minWidth: "160px",
                    }}
                    disableRipple
                  >
                    {service.label}
                  </Button>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={1}
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">{">"}</Typography>
                </Grid>

                {getEnrollmentSupportByToken &&
                Object.keys(getEnrollmentSupportByToken).length > 0 ? (
                  // readonly mode: only status chip
                  <Grid item xs={12} sm={6} container>
                    <Chip
                      label={`Status: ${data.status || "N/A"}`}
                      color={
                        data.status === "Completed"
                          ? "success"
                          : data.status === "Ongoing"
                          ? "warning"
                          : "default"
                      }
                      variant="outlined"
                      sx={{
                        fontSize: "0.75rem",
                        padding: "0 8px",
                        borderRadius: "8px",
                        margin: "auto",
                      }}
                    />
                  </Grid>
                ) : (
                  <>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      container
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item xs={4}>
                        <Button
                          fullWidth
                          variant={
                            data.opted === true ? "contained" : "outlined"
                          }
                          color="success"
                          onClick={() => handleSelect(service.key, true)}
                          sx={{ borderRadius: "30px", textTransform: "none" }}
                          disabled={isDisabled}
                        >
                          YES
                        </Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          fullWidth
                          variant={
                            data.opted === false ? "contained" : "outlined"
                          }
                          color="error"
                          onClick={() => handleSelect(service.key, false)}
                          sx={{ borderRadius: "30px", textTransform: "none" }}
                          disabled={isDisabled}
                        >
                          NO
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            );
          })}
        </>
      )}
      {getEnrollmentSupportByToken &&
      Object.keys(getEnrollmentSupportByToken).length > 0 ? null : (
        <Box textAlign="center" mt={4}>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
            disabled={isSubmitting || allDisabled}
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#00999E",
              color: "white",
              fontSize: "14px",
              width: "fit-content",
              "&:hover": { backgroundColor: "#007a7e" },
            }}
          >
            Submit
          </LoadingButton>
        </Box>
      )}
    </Box>
  );
}
