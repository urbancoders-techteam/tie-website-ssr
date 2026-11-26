// @ts-nocheck
import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import DashboardEnrollmentStepper from "./DashboardStepper";

const EnrollmentRequiredDialog = ({ open, onClose, onEnrolled }) => {
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="lg"
      disableEscapeKeyDown
      onClose={(_, reason) => {
        if (reason === "backdropClick") return;
        onClose();
      }}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          maxHeight: "92vh",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          px: { xs: 2, md: 3 },
          pt: 2,
          pb: 1.5,
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#1C2B33" }}>
            Complete Your Enrollment
          </Typography>
          <Typography sx={{ mt: 0.4, fontSize: "13px", color: "#5C6B73" }}>
            Study Abroad and Test Prep stay locked until this form is submitted.
          </Typography>
        </Box>
        <IconButton aria-label="Back to dashboard" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent dividers sx={{ px: { xs: 1.5, md: 3 }, py: 1 }}>
        <DashboardEnrollmentStepper embedded onEnrolled={onEnrolled} />
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentRequiredDialog;
