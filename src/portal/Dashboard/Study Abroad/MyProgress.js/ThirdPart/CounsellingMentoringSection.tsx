// @ts-nocheck
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "@/portal/Component/Snakbar";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import { CreateTableAsync } from "@/portal/redux/services/table";
import {
  counsellingButtonSx,
  counsellingInnerCardSx,
  counsellingLabelSx,
  formatAssignedLocal,
} from "./counsellingMeetingUtils";
import CounsellingDetailRow from "./CounsellingDetailRow";
import { useJoinMeetingWindow } from "./useJoinMeetingWindow";
import { useStudentCounselling } from "./useStudentCounselling";

const BasicTable = lazy(() => import("./Table"));
const RescheduleMeetingDialog = lazy(() => import("./RescheduleMeetingDialog"));

function MeetingCardSkeleton() {
  return (
    <Box sx={counsellingInnerCardSx}>
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} height={36} sx={{ mb: 1 }} />
      ))}
    </Box>
  );
}

export default function CounsellingMentoringSection() {
  const { showSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { counsellingData, isLoading, reload } = useStudentCounselling();

  const [hasJoinedMeeting, setHasJoinedMeeting] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [logVersion, setLogVersion] = useState(0);

  const assignedLocal = useMemo(
    () => formatAssignedLocal(counsellingData?.assignedDate),
    [counsellingData?.assignedDate],
  );

  useEffect(() => {
    setHasJoinedMeeting(Boolean(counsellingData?.joinedAt));
  }, [
    counsellingData?._id,
    counsellingData?.joinedAt,
    counsellingData?.assignedDate,
  ]);

  const meetingDuration = counsellingData?.duration ?? 60;
  const hasMeetingLink = Boolean(counsellingData?.meetingLink);
  const isJoinEnabled = useJoinMeetingWindow(counsellingData);

  const refreshLog = useCallback(() => {
    setLogVersion((version) => version + 1);
  }, []);

  const handleRescheduleSuccess = useCallback(() => {
    setHasJoinedMeeting(false);
    reload();
    refreshLog();
  }, [reload, refreshLog]);

  const handleJoinMeeting = useCallback(() => {
    if (!counsellingData?.meetingLink) {
      showSnackbar("No meeting link available", "error");
      return;
    }

    window.open(counsellingData.meetingLink, "_blank");
    setHasJoinedMeeting(true);

    dispatch(
      CreateTableAsync({
        shouldCreateLog: true,
        counsellorId: counsellingData?.counsellorId?._id,
        assignedDate: counsellingData?.assignedDate,
        meetingId: counsellingData?._id,
      }),
    )
      .then((res) => {
        if (res.payload?.status === 200) {
          showSnackbar("Meeting joined successfully!", "success");
          reload();
          refreshLog();
        } else if (res.payload?.status === 400) {
          showSnackbar(res.payload.message, "error");
        }
      })
      .catch(() => {
        showSnackbar("Error joining meeting", "error");
      });
  }, [counsellingData, dispatch, refreshLog, reload, showSnackbar]);

  return (
    <>
      {isLoading && !counsellingData ? (
        <MeetingCardSkeleton />
      ) : (
        <Box sx={counsellingInnerCardSx}>
          <CounsellingDetailRow
            label="Counsellor Name"
            value={counsellingData?.counsellorId?.name ?? "- Not Assigned -"}
          />
          <CounsellingDetailRow
            label="Meeting Link"
            action={
              <Button
                variant="contained"
                disabled={!isJoinEnabled || !hasMeetingLink || hasJoinedMeeting}
                sx={{
                  ...counsellingButtonSx,
                  backgroundColor: hasJoinedMeeting ? "success.main" : "#00999E",
                  "&:hover": {
                    backgroundColor: hasJoinedMeeting
                      ? "success.dark"
                      : "#007f80",
                    color: "#fff",
                  },
                }}
                onClick={handleJoinMeeting}
              >
                {hasJoinedMeeting ? "Joined" : "Join Now"}
              </Button>
            }
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              width: "100%",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
              pt: 1,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="subtitle2" sx={counsellingLabelSx}>
                Counselling Schedule
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {assignedLocal
                  ? `${assignedLocal.scheduleSummary} · ${meetingDuration} min`
                  : "No session scheduled yet"}
              </Typography>
            </Box>
            <Button
              disabled={!hasMeetingLink}
              variant="contained"
              sx={{ ...counsellingButtonSx, flexShrink: 0 }}
              onClick={() => setIsRescheduleOpen(true)}
            >
              Re-schedule
            </Button>
          </Box>
        </Box>
      )}

      <Typography
        variant="h5"
        sx={{ fontWeight: 600, my: 4, color: "#00999E" }}
      >
        Student Counselling Log
      </Typography>
      
        <Suspense fallback={<CustomCircularProgress />}>
          <BasicTable
            scheduledMeeting={counsellingData}
            refreshKey={logVersion}
          />
        </Suspense>

      {isRescheduleOpen && (
        <Suspense fallback={null}>
          <RescheduleMeetingDialog
            open={isRescheduleOpen}
            onClose={() => setIsRescheduleOpen(false)}
            onSuccess={handleRescheduleSuccess}
            currentAssignedDate={counsellingData?.assignedDate}
            meetingDuration={meetingDuration}
          />
        </Suspense>
      )}
    </>
  );
}
