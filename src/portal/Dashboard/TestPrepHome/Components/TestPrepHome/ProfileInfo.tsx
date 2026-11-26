// @ts-nocheck
import { CircularProgress } from "@mui/material";
import { Box, FormControl, MenuItem, Select, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import Header from "@/portal/Component/content-component/Header";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import img from "../../../../asset/TestPrepDashboard/profile.png";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";

const ProfileInfo = ({
  batchList,
  isLoading,
  selectedBatchId,
  setSelectedBatchId,
  student,
  classes,
  mocktest,
  practiceAssignment,
  latestMockTest,
  loading,
}) => {
  const username = student?.name || "Student";
  const attendanceRate =
    (classes?.attendClass / classes?.totalClass) * 100 || 0;
  const practiceRate =
    (practiceAssignment?.completedPracticeAssignments /
      practiceAssignment?.totalPracticeAssignments) *
      100 || 0;

  const mockTestRate =
    (mocktest?.completedMockTests / mocktest?.totalMockTests) * 100 || 0;

  // Combine Practice and MockTest Progress
  const combinedPracticeMockRate = (practiceRate + mockTestRate) / 2 || 0;

  const totalScore = latestMockTest?.obtainScore || 0;
  const courseName = sessionStorage.getItem("courseName");

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "transparent",
          borderRadius: "0px 0px 200px 200px",
          background: "linear-gradient(to bottom, #D9FEFF, #00959A)",
        }}
      >
        <Box sx={{ padding: "50px 0 20px", textAlign: "center" }}>
          <Header content={"Welcome Back"} color={"#000"} fontSize={"30px"} />
          <MainHeader content={username} color={"#000"} fontSize={"30px"} />
          <Typography variant="body2" sx={{ pt: 5 }}>
            Let’s start your preparation with <br />
            Upcoming Classes of{" "}
            <span style={{ fontWeight: "bold" }}>{courseName}</span>
          </Typography>
        </Box>

        {isLoading ? (
          <CircularProgress size={20} sx={{ color: "#0C7D81" }} />
        ) : !batchList?.success || !batchList?.data?.batchList?.length ? (
          <Tooltip title={batchList?.message || "No batch assigned"} arrow>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                padding: "4px 16px",
                border: "1px solid #0C7D81",
                borderRadius: "50px",
                fontSize: "0.75rem",
              }}
            >
              Batch Not Assigned Yet
            </Typography>
          </Tooltip>
        ) : (
          <FormControl
            fullWidth
            sx={{
              mb: 2,
              border: "1px solid #0C7D81",
              borderRadius: "50px",
              height: 36,
              justifyContent: "center",
              px: 1.5,
              minWidth: "fit-content",
              width: 150,
              maxWidth: 250,
            }}
          >
            <Select
              value={selectedBatchId}
              onChange={(e) => {
                const batchId = e.target.value;
                setSelectedBatchId(batchId);
                sessionStorage.setItem("batchId", batchId);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Select Batch" }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    mt: 1,
                    borderRadius: 2,
                    maxHeight: 250,
                    "& .MuiMenuItem-root": {
                      py: 0.5,
                    },
                  },
                },
              }}
              sx={{
                height: "100%",
                borderRadius: "50px",
                color: "#0C7D81",
                fontSize: "0.8rem",
                fontWeight: "bold",
                px: 1,
                "& fieldset": { border: "none" },
              }}
            >
              {batchList?.data?.batchList.map((batch) => (
                <MenuItem
                  key={batch.id}
                  value={batch.id}
                  sx={{
                    fontSize: "0.8rem",
                    px: 2,
                    borderRadius: "25px",
                    m: "4px",
                    color: "#0C7D81",
                    "&.Mui-selected": {
                      backgroundColor: "#E0F7F8",
                      fontWeight: 600,
                    },
                    "&:hover": {
                      backgroundColor: "#F1FBFC",
                    },
                  }}
                >
                  {batch.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        <Box
          sx={{
            mt: "auto",
            mb: "30px",
            width: "240px",
            height: "300px",
            borderRadius: "0px 0px 120px 120px",
            overflow: "hidden",
          }}
        >
          <img
            src={student?.image || img}
            alt="profile_pic"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>

      {/* Score & Certification Section */}
      <Box sx={{ padding: "10px", width: "100%" }}>
        <Typography
          variant="h5"
          sx={{ py: 2.5, px: 3, color: "#00999E", fontWeight: "550" }}
        >
          Score & Certification
        </Typography>

        <Grid container justifyContent="center" alignItems="center">
          {/* Attendance Rate */}
          <Grid item md={6} sm={12} sx={{ px: 2 }}>
            <ScoreBox
              title="Attendance Rate"
              value={
                isNaN(attendanceRate) ? "0%" : `${attendanceRate.toFixed(0)}%`
              }
              items={[
                {
                  label: "Online Class",
                  marks: `${classes?.attendClass ?? 0}/${
                    classes?.totalClass ?? 0
                  }`,
                },
              ]}
              loading={loading}
            />
          </Grid>

          {/* Submission Rate */}
          <Grid item md={6} sm={12} sx={{ px: 2 }}>
            <ScoreBox
              title="Submission Rate"
              value={
                isNaN(combinedPracticeMockRate)
                  ? "0%"
                  : `${combinedPracticeMockRate.toFixed(0)}%`
              }
              items={[
                {
                  label: "Assignment",
                  marks: `${
                    practiceAssignment?.completedPracticeAssignments ?? 0
                  }/${practiceAssignment?.totalPracticeAssignments ?? 0}`,
                },
                {
                  label: "Mock Test",
                  marks: `${mocktest?.completedMockTests ?? 0}/${
                    mocktest?.totalMockTests ?? 0
                  }`,
                },
              ]}
              loading={loading}
            />
          </Grid>

          {/* Mock Test */}
          <Grid item sm={12} sx={{ px: 2, pt: 2 }}>
            <Box
              sx={{
                border: "2px solid #00999E",
                borderRadius: "20px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SectionHeader title="Mock Test" />
              {loading ? (
                <CustomCircularProgress />
              ) : (
                <Grid container padding={2}>
                  <Grid item md={6} xs={12} align="center">
                    <ScoreTile
                      label="Last Score"
                      value={totalScore || 0}
                      color="#9C5050"
                      loading
                    />
                    <ScoreTile
                      label="Target Score"
                      value={latestMockTest?.totalScore || 0}
                      color="#00999E"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Box sx={{ padding: "20px 10px" }}>
                      <ClassCard
                        label="Reading"
                        color="#CCFDFF"
                        textcolor="#000"
                        marks={latestMockTest?.tests?.reading || 0}
                      />
                      <ClassCard
                        label="Listening"
                        color="#CCFDFF"
                        textcolor="#000"
                        marks={latestMockTest?.tests?.listening || 0}
                      />
                      <ClassCard
                        label="Writing"
                        color="#CCFDFF"
                        textcolor="#000"
                        marks={latestMockTest?.tests?.writing || 0}
                      />
                      <ClassCard
                        label="Aptitude"
                        color="#CCFDFF"
                        textcolor="#000"
                        marks={latestMockTest?.tests?.aptitude || 0}
                      />
                      <ClassCard
                        label="Speaking"
                        color="#CCFDFF"
                        textcolor="#000"
                        marks={latestMockTest?.tests?.speaking || 0}
                      />
                    </Box>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const SectionHeader = ({ title }) => (
  <Box
    sx={{
      borderBottom: "2px solid #00999E",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Typography variant="body1" sx={{ padding: "10px", color: "#00999E" }}>
      {title}
    </Typography>
  </Box>
);

const ScoreBox = ({ title, value, items, loading }) => (
  <Box
    sx={{
      border: "2px solid #00999E",
      borderRadius: "20px",
      height: "250px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <SectionHeader title={title} />
    {loading ? (
      <CustomCircularProgress />
    ) : (
      <>
        <Box
          sx={{
            backgroundColor: "#00999E",
            height: "30px",
            width: "60px",
            mr: "10px",
            mt: 1,
            borderRadius: "20px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: "auto",
          }}
        >
          {value}
        </Box>

        <Box sx={{ padding: "20px 10px" }}>
          {items.map((item, i) => (
            <ClassCard key={i} label={item.label} marks={item.marks} />
          ))}
        </Box>
      </>
    )}
  </Box>
);

const ScoreTile = ({ label, value, color }) => (
  <Box
    sx={{
      border: "2px solid #00999E",
      width: "160px",
      height: "125px",
      mb: 2,
    }}
  >
    <Box
      sx={{
        height: "40px",
        background: "linear-gradient(to bottom, #00C5CB, #007579)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      {label}
    </Box>
    <Box
      sx={{
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "40px",
          border: `2px solid ${color}`,
          padding: "10px",
          bgcolor: "white",
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: color,
        }}
      >
        {value}
      </Box>
    </Box>
  </Box>
);

const ClassCard = ({ label, color, textcolor, marks }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      background: color ?? "linear-gradient(to right, #0C7D81, #46F8FE)",
      borderRadius: "50px",
      height: "40px",
      mb: 2,
    }}
  >
    <Box
      sx={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        border: "2px solid #00999E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mr: 2,
        color: "#00999E",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="body2" fontWeight="550">
        {marks}
      </Typography>
    </Box>
    <Typography
      variant="body2"
      sx={{
        color: textcolor ?? "#fff",
        pl: { xs: "10px", lg: "30px" },
        fontWeight: "500",
      }}
    >
      {label}
    </Typography>
  </Box>
);

export default ProfileInfo;
