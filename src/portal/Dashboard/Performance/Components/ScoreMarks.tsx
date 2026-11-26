// @ts-nocheck
/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "@/portal/navigation";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";

const fetchMockTests = async (type) => {
  const token = sessionStorage.getItem("authToken");
  const planId = sessionStorage.getItem("courseId");
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}test/user-mock-list`,
    {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type, planId }),
    }
  );
  const data = await response.json();
  return data.data;
};

const ScoreMarks = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [mockTests, setMockTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const types = ["reading", "speaking", "aptitude", "listening", "writing"];

  useEffect(() => {
    setLoading(true);
    fetchMockTests(types[selectedTab])
      .then((data) => {
        setMockTests(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [selectedTab]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const selectedType = types[selectedTab];

  return (
    <Box sx={{ padding: 2 }}>
      {/* Tabs Section */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="fullWidth"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          "& .MuiTab-root": {
            backgroundColor: "#EFFDFF",
            borderRadius: "8px",
            height: "30px",
            color: "#00999E", // Selected tab text color
            textTransform: "none",
            fontWeight: "500",
            marginRight: 1,
          },
          "& .Mui-selected": {
            backgroundColor: "#00999E",
            color: "#ffffff !important",
          },
        }}
      >
        {types.map((type) => (
          <Tab
            key={type}
            label={type.charAt(0).toUpperCase() + type.slice(1)}
          />
        ))}
      </Tabs>

      <Box sx={{ marginTop: 3 }}>
        {loading ? (
          <CustomCircularProgress />
        ) : mockTests?.length > 0 ? (
          mockTests?.map((test) => (
            <Box
              key={test._id}
              sx={{
                padding: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                mb: 3,
              }}
            >
              <Box display="flex" flexDirection={"column"} mb={2}>
                <Typography
                  variant="h6"
                  fontWeight="500"
                  sx={{ color: "GrayText" }}
                >
                  {test.mockTestName}
                </Typography>
                <Typography variant="body2" sx={{ color: "GrayText" }}>
                  Conducted On{" "}
                  {dayjs(test.mockTestDate).format("DD/MM/YYY, HH:MM A")} given
                  at {dayjs(test.mockTestTime, "HH:mm").format("hh:mm A")}
                </Typography>
              </Box>

              <Grid container spacing={2} mb={2}>
                {selectedType !== "writing" && (
                  <Grid item xs={4} sm={2}>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Icon
                        icon="pajamas:question-o"
                        style={{
                          color: "#80869A",
                          fontSize: "20px",
                        }}
                      />
                      &nbsp;
                      {test.testTotalQuestions} Questions
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={4} sm={2}>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Icon
                      icon="mingcute:bookmarks-fill"
                      style={{ color: "#80869A", fontSize: "20px" }}
                    />
                    {test.testMarks} Marks
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={2}>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Icon
                      icon="wi:time-1"
                      style={{ color: "#80869A", fontSize: "20px" }}
                    />
                    {test.testDuration} Mins
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      sx={{ mr: "10px", bgcolor: "#00999E" }}
                      onClick={() => {
                        navigate(
                          `/dashboard/mocktest/testpage/mockTest/${test.testId}/${selectedType}`
                        );
                      }}
                    >
                      Re-attempt test
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ border: "2px solid #00999E", color: "#00999E" }}
                      onClick={() => {
                        navigate(
                          `/dashboard/${test.testId}/${selectedType}/scoretable?testType=MockTest`
                        );
                      }}
                    >
                      View detailed marks
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              {/* Overview Section */}
              <Box mb={2}>
                <Typography
                  variant="h6"
                  fontWeight="500"
                  sx={{ color: "GrayText" }}
                >
                  Overview
                </Typography>
                <Typography variant="body2" sx={{ color: "GrayText" }}>
                  Summary of marks scored in the test attempted on
                  {new Date(test.mockTestDate).toLocaleString()}
                </Typography>

                <Grid container spacing={2} mt={2}>
                  {selectedType !== "writing" && (
                    <>
                      <Grid item xs={6} sm={3}>
                        <Box
                          sx={{
                            textAlign: "center",
                            padding: 1,
                            borderRadius: 2,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "GrayText",
                              fontWeight: "500",
                              mb: "10px",
                            }}
                          >
                            Total Correct
                          </Typography>
                          <Box
                            sx={{
                              border: "1px solid #00999E",
                              borderRadius: "8px",
                              p: "5px 0",
                            }}
                          >
                            <Typography variant="h6" sx={{ color: "#00999E" }}>
                              {test[selectedType]?.totalCorrect || 0} Points
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box
                          sx={{
                            textAlign: "center",
                            padding: 1,
                            borderRadius: 2,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "GrayText",
                              fontWeight: "500",
                              mb: "10px",
                            }}
                          >
                            Unanswered
                          </Typography>
                          <Box
                            sx={{
                              border: "1px solid #F9C45B",
                              borderRadius: "8px",
                              p: "5px 0",
                            }}
                          >
                            <Typography variant="h6" sx={{ color: "#F9C45B" }}>
                              {test[selectedType]?.totalUnanswered || 0} Points
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box
                          sx={{
                            textAlign: "center",
                            padding: 1,
                            borderRadius: 2,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "GrayText",
                              fontWeight: "500",
                              mb: "10px",
                            }}
                          >
                            Incorrect
                          </Typography>
                          <Box
                            sx={{
                              border: "1px solid #DD5B63",
                              borderRadius: "8px",
                              p: "5px 0",
                            }}
                          >
                            <Typography variant="h6" sx={{ color: "#DD5B63" }}>
                              {test[selectedType]?.totalIncorrect || 0} Points
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={6} sm={3}>
                    <Box
                      sx={{ textAlign: "center", padding: 1, borderRadius: 2 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "GrayText",
                          fontWeight: "500",
                          mb: "10px",
                        }}
                      >
                        Total Marks
                      </Typography>
                      <Box
                        sx={{
                          border: "1px solid #000000",
                          borderRadius: "8px",
                          p: "5px 0",
                        }}
                      >
                        <Typography variant="h6" sx={{ color: "#000000" }}>
                          {test[selectedType]?.obtainMarks}/
                          {test[selectedType]?.totalMarks} Points
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary">
            No mock test data available for this type.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ScoreMarks;
