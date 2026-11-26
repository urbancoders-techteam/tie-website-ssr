// @ts-nocheck
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";
import { useSnackbar } from "@/portal/Component/Snakbar";
import { rescheduleCounsellorMeeting } from "./counsellingApi";

dayjs.extend(utc);

export default function RescheduleMeetingDialog({
  open,
  onClose,
  onSuccess,
  currentAssignedDate,
  meetingDuration,
}) {
  const { showSnackbar } = useSnackbar();
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!open) {
      setSelectedDateTime(null);
      setError("");
      return;
    }
    if (currentAssignedDate) {
      const local = dayjs.utc(currentAssignedDate).local();
      setSelectedDateTime(local.isValid() ? local : null);
    }
  }, [open, currentAssignedDate]);

  const handleClose = () => {
    if (isSubmitting) return;
    onClose();
  };

  const handleSubmit = async () => {
    if (!selectedDateTime || !selectedDateTime.isValid()) {
      setError("Please select a valid date and time.");
      return;
    }
    if (selectedDateTime.isBefore(dayjs())) {
      setError("Please choose a future date and time.");
      return;
    }
    setError("");

    try {
      setIsSubmitting(true);
      const data = await rescheduleCounsellorMeeting({
        assignedDate: selectedDateTime.toISOString(),
        duration: meetingDuration,
      });
      showSnackbar(data.message, "success");
      onSuccess?.();
      onClose();
    } catch (err) {
      console.error("Error rescheduling the meeting:", err);
      showSnackbar(
        err?.response?.data?.message || "Could not reschedule the meeting.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Re-schedule Meeting</DialogTitle>
      <DialogContent>
        <DateTimePicker
          label="Select Date & Time"
          value={selectedDateTime}
          format="DD-MMM-YYYY hh:mm A"
          minDate={dayjs()}
          views={["year", "month", "day", "hours", "minutes"]}
          onChange={(newValue) => {
            setSelectedDateTime(newValue ? dayjs(newValue) : null);
            if (error) setError("");
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              sx: { my: 2 },
              error: Boolean(error),
              helperText: error || " ",
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ px: 2, pb: 2 }}>
        <Button onClick={handleClose} color="error" disabled={isSubmitting}>
          Cancel
        </Button>
        <LoadingButton
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          loading={isSubmitting}
        >
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
