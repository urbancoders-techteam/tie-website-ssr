// @ts-nocheck
import { Link, TablePagination, TableCell, Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import { useNavigate } from "@/portal/navigation";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";

export default function AdmissionServiceMapTable({
  data,
  loading,
  page,
  rowsPerPage,
  totalCount,
  onPageChange,
  onRowsPerPageChange,
}) {
  const navigate = useNavigate();
  const paginatedRows = data;
  const headerStyle = { backgroundColor: "#00999E", color: "#fff" };
  return (
    <>
      {loading ? (
        <CustomCircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="admission service map">
            <TableHead>
              <TableRow>
                <TableCell sx={headerStyle}>S.No.</TableCell>
                <TableCell sx={headerStyle}>University Name</TableCell>
                <TableCell sx={headerStyle}>SOP/LOR/ESSAY Status</TableCell>
                <TableCell sx={headerStyle}>Country</TableCell>
                <TableCell sx={headerStyle}>Course Name</TableCell>
                <TableCell sx={headerStyle}>Program Website Link</TableCell>
                <TableCell sx={headerStyle}>Duration</TableCell>
                <TableCell sx={headerStyle}>Application Opening Date</TableCell>
                <TableCell sx={headerStyle}>
                  Application Deadline (Round 1, 2)
                </TableCell>
                <TableCell sx={headerStyle}>Application Entry Date</TableCell>
                <TableCell sx={headerStyle}>GRE/GMAT/SAT Requirement</TableCell>
                <TableCell sx={headerStyle}>
                  GRE/GMAT/SAT Minimum Score
                </TableCell>
                <TableCell sx={headerStyle}>
                  English Proficiency Test (TOEFL/IELTS/Duolingo) – Minimum
                  Score
                </TableCell>
                <TableCell sx={headerStyle}>
                  Work Experience Requirement
                </TableCell>
                <TableCell sx={headerStyle}>Minimum Work Experience</TableCell>
                <TableCell sx={headerStyle}>Internships Considered</TableCell>
                <TableCell sx={headerStyle}>
                  Internship in Preferred Fields
                </TableCell>
                <TableCell sx={headerStyle}>Tuition Fee Details</TableCell>
                <TableCell sx={headerStyle}>LORs Required</TableCell>
                <TableCell sx={headerStyle}>No. of LOR</TableCell>
                <TableCell sx={headerStyle}>LOR Type</TableCell>
                <TableCell sx={headerStyle}>
                  SOP/Personal Statement Required
                </TableCell>
                <TableCell sx={headerStyle}>SOP/Personal Word Limit</TableCell>
                <TableCell sx={headerStyle}>
                  Additional Essays Requirement
                </TableCell>
                <TableCell sx={headerStyle}>Additional Essays Topic</TableCell>
                <TableCell sx={headerStyle}>Resume/CV Requirement</TableCell>
                <TableCell sx={headerStyle}>Portfolio Required</TableCell>
                <TableCell sx={headerStyle}>APS (for Germany)</TableCell>
                <TableCell sx={headerStyle}>Interview Requirement</TableCell>
                <TableCell sx={headerStyle}>Interview Mode</TableCell>
                <TableCell sx={headerStyle}>Application Fee</TableCell>
                <TableCell sx={headerStyle}>Online Application Link</TableCell>
                <TableCell sx={headerStyle}>Living Expenses</TableCell>
                <TableCell sx={headerStyle}>Offer Letter Status</TableCell>
                <TableCell sx={headerStyle}>Type of Offer Letter</TableCell>

                <TableCell sx={headerStyle}>
                  Conditional Offer Letter Acceptance Dt
                </TableCell>

                <TableCell sx={headerStyle}>
                  Unconditional Offer Letter Acceptance Dt
                </TableCell>
                <TableCell sx={headerStyle}>Scholarships Details</TableCell>
                <TableCell sx={headerStyle}>Scholarship Amount</TableCell>
                <TableCell sx={headerStyle}>
                  University Contact Email for Admissions
                </TableCell>
                <TableCell sx={headerStyle}>Remarks/Additional Notes</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows?.result?.map((row, index) => (
                <TableRow
                  key={row._id}
                  onClick={() =>
                    navigate(
                      `/dashboard/study-abroad/university/${row?._id}?universityName=${row?.university}`,
                    )
                  }
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Link
                      href={`/dashboard/study-abroad/university/${row?._id}?universityName=${row?.university}`}
                      rel="noopener"
                      color="#00999E"
                    >
                      {row?.university || "-"}
                    </Link>
                  </TableCell>
                  <TableCell>{row.sopLorEssayStatus || "-"}</TableCell>
                  <TableCell>{row.country || "-"}</TableCell>
                  <TableCell>{row.course || "-"}</TableCell>
                  <TableCell sx={{ maxWidth: 200 }}>
                    {row.programWebsiteLink ? (
                      <Tooltip title={row.programWebsiteLink}>
                        <Link
                          href={row.programWebsiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: "inline-block",
                            maxWidth: "100%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: "#00999E",
                            cursor: "pointer",
                          }}
                        >
                          {row.programWebsiteLink}
                        </Link>
                      </Tooltip>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell>{row.duration || "-"}</TableCell>
                  <TableCell>
                    {row.applicationOpeningDate
                      ? dayjs(row.applicationOpeningDate).format("DD MMM YYYY")
                      : "-"}
                  </TableCell>
                  <TableCell>{row.applicationDeadlines || "-"}</TableCell>
                  <TableCell>
                    {row.applicationEntryDate
                      ? dayjs(row.applicationEntryDate).format("DD MMM YYYY")
                      : "-"}
                  </TableCell>
                  <TableCell>{row.greGmatSatRequirement || "-"}</TableCell>
                  <TableCell>{row.greGmatSatMinScore || "-"}</TableCell>
                  <TableCell>{row.englishProficiencyTest || "-"}</TableCell>
                  <TableCell>{row.workExperienceRequirement || "-"}</TableCell>
                  <TableCell>{row.minWorkExperience || "-"}</TableCell>
                  <TableCell>{row.internshipsConsidered || "-"}</TableCell>
                  <TableCell>
                    {row.internshipInPreferredFields || "-"}
                  </TableCell>
                  <TableCell>{row.tuitionFee || "-"}</TableCell>
                  <TableCell>{row.lorsRequired || "-"}</TableCell>
                  <TableCell>{row.noOfLOR || "-"}</TableCell>
                  <TableCell>{row.lorType || "-"}</TableCell>
                  <TableCell>{row.sopRequired || "-"}</TableCell>
                  <TableCell>{row.sopWordLimit || "-"}</TableCell>
                  <TableCell>{row.additionalEssaysRequired || "-"}</TableCell>
                  <TableCell>{row.additionalEssaysTopic || "-"}</TableCell>
                  <TableCell>{row.resumeRequired || "-"}</TableCell>
                  <TableCell>{row.portfolioRequired || "-"}</TableCell>
                  <TableCell>{row.apsRequired || "-"}</TableCell>
                  <TableCell>{row.interviewRequired || "-"}</TableCell>
                  <TableCell>{row.interviewMode || "-"}</TableCell>
                  <TableCell>{row.applicationFee || "-"}</TableCell>
                  {/* <TableCell>{row.onlineApplicationLink || "-"}</TableCell> */}
                  <TableCell sx={{ maxWidth: 200 }}>
                    {" "}
                    {row.onlineApplicationLink ? (
                      <Tooltip title={row.onlineApplicationLink}>
                        <Link
                          href={row.onlineApplicationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: "inline-block",
                            maxWidth: "100%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: "#00999E",
                            cursor: "pointer",
                          }}
                        >
                          {row.onlineApplicationLink}
                        </Link>
                      </Tooltip>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell>{row.livingExpenses || "-"}</TableCell>
                  <TableCell>{row.offerLetterStatus || "-"}</TableCell>
                  <TableCell>{row.typeOfOfferLetter || "-"}</TableCell>

                  <TableCell>
                    {row.conditionalOfferLetterAcceptanceDt
                      ? dayjs(row.conditionalOfferLetterAcceptanceDt).format(
                          "DD MMM YYYY",
                        )
                      : "-"}
                  </TableCell>

                  <TableCell>
                    {row.unconditionalOfferLetterAcceptanceDt
                      ? dayjs(row.unconditionalOfferLetterAcceptanceDt).format(
                          "DD MMM YYYY",
                        )
                      : "-"}
                  </TableCell>

                  <TableCell>{row.scholarshipsDetails || "-"}</TableCell>
                  <TableCell>{row.scholarshipAmount || "-"}</TableCell>
                  <TableCell>{row.universityContactEmail || "-"}</TableCell>
                  <TableCell>{row.admissionServiceRemark || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={totalCount || 0}
            page={page}
            onPageChange={onPageChange}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={onRowsPerPageChange}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
        </TableContainer>
      )}
    </>
  );
}
