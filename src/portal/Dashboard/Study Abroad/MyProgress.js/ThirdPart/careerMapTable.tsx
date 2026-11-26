// @ts-nocheck
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "@/portal/navigation";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import { getCounsellorLogListAsync } from "@/portal/redux/services/table";

export default function CareerMapTable({ data, loading, isClickable = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paginatedRows = data;
  useEffect(() => {
    dispatch(getCounsellorLogListAsync());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <CustomCircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  S.no.
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Counsellor
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Universities
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Courses
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Country
                </TableCell>

                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Program Website
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Duration
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Marks Criteria
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Test Requirement
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Work Experience
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Location
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Intake
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Application Deadline
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Fees Structure
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Scholarship
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Remarks
                </TableCell>
                <TableCell sx={{ backgroundColor: "#00999E", color: "#fff" }}>
                  Status
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#00999E", color: "#fff" }}
                >
                  Created At
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, index) => {
                const universityCell =
                  row.universityIds?.length > 0
                    ? row.universityIds.map((u) => u.name).join(", ")
                    : "-";

                return (
                  <TableRow
                    key={index}
                    onClick={() => {
                      if (isClickable) {
                        navigate(
                          `/dashboard/study-abroad/university/${row?._id}?universityName=${universityCell}`
                        );
                      }
                    }}
                    sx={{
                      cursor: isClickable ? "pointer" : "default",
                      "&:hover": isClickable
                        ? { backgroundColor: "#f0f0f0" }
                        : undefined,
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>

                    <TableCell align="center">
                      {row.counsellorId?.name || "-"}
                    </TableCell>

                    <TableCell align="center">{universityCell}</TableCell>

                    <TableCell align="center" sx={{ maxWidth: "300px" }}>
                      {row.courseId?.name || "-"}
                    </TableCell>

                    <TableCell align="center">
                      {row.countryId?.name || "-"}
                    </TableCell>

                    <TableCell align="center">
                      {row.programWebsiteLink ? (
                        <a
                          href={row.programWebsiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#00999E",
                            textDecoration: "underline",
                            fontWeight: "semibold",
                            wordBreak: "break-all",
                            maxWidth: "200px",
                            display: "inline-block",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row.programWebsiteLink}
                        </a>
                      ) : (
                        "-"
                      )}
                    </TableCell>

                    <TableCell align="center">{row.duration || "-"}</TableCell>
                    <TableCell align="center">
                      {row.marksCriteria || "-"}
                    </TableCell>
                    <TableCell align="center">
                      {row.testRequirement || "-"}
                    </TableCell>
                    <TableCell align="center">
                      {row.workExpRequirement || "-"}
                    </TableCell>
                    <TableCell align="center">{row.location || "-"}</TableCell>
                    <TableCell align="center">{row.intake || "-"}</TableCell>
                    <TableCell align="center">
                      {row.applicationDeadline || "-"}
                    </TableCell>
                    <TableCell align="center">
                      {row.feesStructure || "-"}
                    </TableCell>
                    <TableCell align="center">
                      {row.scholarshipDetails || "-"}
                    </TableCell>
                    <TableCell align="center">{row.remarks || "-"}</TableCell>
                    <TableCell align="center">
                      {row.status ? "Active" : "Inactive"}
                    </TableCell>

                    <TableCell align="center">
                      {dayjs(row.createdAt).format("DD MMM YYYY") || "-"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {/* 
        <CustomTablePagination
          count={getCounsellorLogList?.length || 0}
          page={query.page - 1}
          rowsPerPage={query.limit}
          onPageChange={handlePageChange}
          rowsPerPageOptions={[]}
        /> */}
        </TableContainer>
      )}
    </>
  );
}
