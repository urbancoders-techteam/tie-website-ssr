// @ts-nocheck
import { Box, Chip, CircularProgress, Link, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTablePagination from "@/portal/Component/customtablepagination/CustomTablePagination";
import {
  CreateTableAsync,
  getCounsellorLogListAsync,
} from "@/portal/redux/services/table";
import { formatAssignedLocal } from "./counsellingMeetingUtils";

const headerCellSx = {
  backgroundColor: "#00999E",
  color: "#fff",
  fontWeight: 600,
  whiteSpace: "nowrap",
};

function formatWhen(value, pattern) {
  const schedule = formatAssignedLocal(value);
  if (!schedule) return "—";
  if (pattern === "time") return schedule.timeOnly;
  if (pattern === "date") return schedule.dateOnly;
  return schedule.scheduleSummary;
}

function attendanceColor(attendance) {
  if (attendance === "Joined") return "success";
  if (attendance === "Did not join") return "error";
  if (attendance === "Rescheduled") return "info";
  return "warning";
}

function sameInstant(left, right) {
  const first = new Date(left).getTime();
  const second = new Date(right).getTime();
  return Number.isFinite(first) && first === second;
}

function attendanceFor(meeting) {
  if (meeting?.attendance) {
    return {
      attendance: meeting.attendance,
      joined: Boolean(meeting.joined || meeting.joinedAt),
      joinedAt: meeting.joinedAt || null,
    };
  }

  if (meeting?.joinedAt) {
    return {
      attendance: "Joined",
      joined: true,
      joinedAt: meeting.joinedAt,
    };
  }

  // Older log rows were written only after the student joined.
  if (!meeting?.meetingLink && meeting?.createdBy) {
    return {
      attendance: "Joined",
      joined: true,
      joinedAt: meeting.createdAt || meeting.assignedDate || null,
    };
  }

  const start = new Date(meeting?.assignedDate);
  const end = new Date(start.getTime() + (Number(meeting?.duration) || 0) * 60000);
  if (!Number.isFinite(start.getTime()) || Date.now() < end.getTime()) {
    return { attendance: "Not joined yet", joined: false, joinedAt: null };
  }
  return { attendance: "Did not join", joined: false, joinedAt: null };
}

function asLogRow(meeting) {
  if (!meeting?.assignedDate && !meeting?._id && !meeting?.id) return null;
  return {
    id: meeting.id || meeting._id || String(meeting.assignedDate),
    assignedDate: meeting.assignedDate,
    duration: meeting.duration,
    counsellorName:
      meeting.counsellorName || meeting.counsellorId?.name || "—",
    meetingLink: meeting.meetingLink || "",
    counsellorId: meeting.counsellorId?._id || meeting.counsellorId || "",
    isReschedule: Boolean(meeting.isReschedule),
    rescheduleNumber: Number(meeting.rescheduleNumber) || 0,
    previousAssignedDate: meeting.previousAssignedDate || null,
    scheduleLabel:
      meeting.scheduleLabel ||
      (meeting.isReschedule
        ? `Reschedule ${meeting.rescheduleNumber || ""}`.trim()
        : "Scheduled"),
    ...attendanceFor(meeting),
  };
}

function meetingRows(apiRows, scheduledMeeting) {
  const rows = (Array.isArray(apiRows) ? apiRows : [])
    .map(asLogRow)
    .filter(Boolean);

  const current = asLogRow(scheduledMeeting);
  if (!current) return rows;

  const alreadyListed = rows.some(
    (row) =>
      String(row.id) === String(current.id) ||
      sameInstant(row.assignedDate, current.assignedDate),
  );
  if (!alreadyListed) rows.push(current);

  return rows.sort(
    (left, right) =>
      new Date(right.assignedDate).getTime() -
      new Date(left.assignedDate).getTime(),
  );
}

export default function BasicTable({
  scheduledMeeting = null,
  refreshKey = 0,
}) {
  const dispatch = useDispatch();

  const { getCounsellorLogList, isLoading, totalCount, rescheduleCount } =
    useSelector((store) => store.counsellorList);

  const [query, setQuery] = React.useState({
    page: 1,
    limit: 10,
  });

  const handlePageChange = (event, newPage) => {
    setQuery((prev) => ({
      ...prev,
      page: newPage + 1,
    }));
  };

  const recordJoin = (row) => {
    dispatch(
      CreateTableAsync({
        shouldCreateLog: true,
        meetingId: row.id,
        counsellorId: row.counsellorId,
        assignedDate: row.assignedDate,
      }),
    ).finally(() => {
      dispatch(getCounsellorLogListAsync(query));
    });
  };

  useEffect(() => {
    dispatch(getCounsellorLogListAsync(query));
  }, [dispatch, query, refreshKey]);

  const rows = meetingRows(getCounsellorLogList, scheduledMeeting);
  const rowCount = Math.max(Number(totalCount) || 0, rows.length);
  const rescheduledTimes =
    Number(rescheduleCount) ||
    rows.filter((row) => row.isReschedule).length;

  return (
    <Box>
      {rowCount > 0 && (
        <Typography variant="body2" sx={{ mb: 1.5, color: "#0f766e" }}>
          {rowCount} schedule{rowCount === 1 ? "" : "s"}
          {rescheduledTimes > 0
            ? ` · Rescheduled ${rescheduledTimes} time${rescheduledTimes === 1 ? "" : "s"}`
            : ""}
        </Typography>
      )}
    <TableContainer component={Paper} sx={{ width: "100%", overflowX: "auto" }}>
      <Table sx={{ minWidth: 980 }} aria-label="student counselling log">
        <TableHead>
          <TableRow>
            <TableCell sx={headerCellSx}>S.no.</TableCell>
            <TableCell sx={headerCellSx}>Schedule</TableCell>
            <TableCell sx={headerCellSx}>Date</TableCell>
            <TableCell sx={headerCellSx}>Time</TableCell>
            <TableCell sx={headerCellSx}>Duration</TableCell>
            <TableCell sx={headerCellSx}>Counsellor</TableCell>
            <TableCell sx={headerCellSx}>Meeting link</TableCell>
            <TableCell sx={headerCellSx}>Attendance</TableCell>
            <TableCell sx={headerCellSx}>Joined at</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {isLoading && rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                <CircularProgress size={24} sx={{ color: "#00999E" }} />
              </TableCell>
            </TableRow>
          ) : rows.length > 0 ? (
            rows.map((row, index) => (
              <TableRow key={row.id || index} hover>
                <TableCell>
                  {(query.page - 1) * query.limit + index + 1}
                </TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {row.scheduleLabel || "Scheduled"}
                  </Typography>
                  {row.previousAssignedDate && (
                    <Typography variant="caption" color="text.secondary">
                      from {formatWhen(row.previousAssignedDate, "both")}
                    </Typography>
                  )}
                </TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  {formatWhen(row.assignedDate, "date")}
                </TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  {formatWhen(row.assignedDate, "time")}
                </TableCell>
                <TableCell>
                  {row.duration ? `${row.duration} min` : "—"}
                </TableCell>
                <TableCell>{row.counsellorName || "—"}</TableCell>
                <TableCell>
                  {row.meetingLink ? (
                    <Link
                      href={row.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      sx={{ color: "#00999E", fontWeight: 600 }}
                      onClick={() => recordJoin(row)}
                    >
                      Open link
                    </Link>
                  ) : (
                    "—"
                  )}
                </TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={row.attendance || "Not joined yet"}
                    color={attendanceColor(row.attendance)}
                    variant={row.attendance === "Did not join" ? "filled" : "outlined"}
                  />
                </TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  {row.joined || row.attendance === "Joined"
                    ? formatWhen(row.joinedAt, "both")
                    : "Not joined"}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No counselling sessions scheduled yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <CustomTablePagination
        count={rowCount}
        page={query.page - 1}
        rowsPerPage={query.limit}
        onPageChange={handlePageChange}
        rowsPerPageOptions={[]}
      />
      </TableContainer>
    </Box>
  );
}
