// @ts-nocheck
import React, { useState, useRef, memo } from "react";
import { Alert, Box, Snackbar } from "@mui/material";
import EnrollmentSuccessModal from "./EnrollmentSuccessfullModel";
import EnrollmentProgramForm from "./EnrollmentProgramForm";
import { buildEnrollmentPayload } from "./enrollmentProgram";
import { axiosInstance } from "@/portal/utils/axiosConfig";

const DashboardEnrollmentStepper = ({ embedded = false, onEnrolled }) => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const submitLock = useRef(false);

  const submitFormData = async (profile) => {
    if (submitLock.current) return;
    submitLock.current = true;
    setIsSubmitting(true);
    try {
      await axiosInstance.post(
        "enrollementForm/add-enrollement-form",
        buildEnrollmentPayload(profile),
        { skipGlobalError: true },
      );
      setSuccessModalOpen(true);
    } catch (error) {
      const data = error?.response?.data;
      const message = typeof data === "string" ? data : data?.message;
      setSnackbarMessage(
        typeof message === "string" && message.trim()
          ? message
          : "Failed to submit form. Please try again.",
      );
      setSnackbarOpen(true);
    } finally {
      submitLock.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ width: "100%", padding: embedded ? "8px 4px 16px" : "24px 12px" }}>
      <EnrollmentProgramForm isSubmitting={isSubmitting} onSubmit={submitFormData} />
      <EnrollmentSuccessModal
        open={successModalOpen}
        handleClose={() => setSuccessModalOpen(false)}
        onEnrolled={onEnrolled}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default memo(DashboardEnrollmentStepper);
