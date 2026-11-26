// @ts-nocheck
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const COUNSELLING_LOG_QUERY = { page: 1, limit: 10 };

export function localCounsellingUrl(path) {
  if (typeof window === "undefined") return "";
  const host = window.location.hostname;
  if (host !== "localhost" && host !== "127.0.0.1") return "";
  return `${window.location.origin}/api/counselling/${path}`;
}

export const counsellingButtonSx = {
  borderRadius: 2,
  backgroundColor: "#00999E",
  "&:hover": { backgroundColor: "#007f80", color: "#fff" },
  width: { xs: "110px", sm: "160px" },
  fontSize: 13,
  padding: "7px 4px",
};

export const counsellingInnerCardSx = {
  width: "97%",
  padding: { xs: "16px", sm: "24px" },
  borderRadius: "20px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  margin: { xs: "7px" },
};

export const counsellingLabelSx = { fontSize: { xs: "14px", sm: "16px" } };

export function canJoinMeetingNow(counsellingData, now = dayjs()) {
  if (!counsellingData?.assignedDate) return false;

  const assignedTime = dayjs(counsellingData.assignedDate);
  if (!assignedTime.isValid()) return false;

  const tenMinutesBefore = assignedTime.subtract(10, "minute");
  const meetingDuration = counsellingData?.duration || 60;
  const meetingEnd = assignedTime.add(meetingDuration, "minute");

  if (now.isAfter(meetingEnd)) return false;
  return now.isAfter(tenMinutesBefore) && now.isBefore(meetingEnd);
}

/** Shorter poll when the join window is near; slower when far away or after the session. */
export function joinWindowPollIntervalMs(counsellingData) {
  if (!counsellingData?.assignedDate) return 60_000;

  const now = dayjs();
  const assignedTime = dayjs(counsellingData.assignedDate);
  if (!assignedTime.isValid()) return 60_000;

  const windowStart = assignedTime.subtract(10, "minute");
  const windowEnd = assignedTime.add(counsellingData?.duration || 60, "minute");

  if (now.isAfter(windowEnd)) return 120_000;
  if (now.isBefore(windowStart.subtract(15, "minute"))) return 60_000;
  return 15_000;
}

export function formatAssignedLocal(assignedDate) {
  if (!assignedDate) return null;
  const localTime = dayjs.utc(assignedDate).local();
  if (!localTime.isValid()) return null;
  return {
    dateOnly: localTime.format("DD MMM YYYY"),
    timeOnly: localTime.format("hh:mm A"),
    scheduleSummary: localTime.format("DD MMM YYYY, hh:mm A"),
  };
}
