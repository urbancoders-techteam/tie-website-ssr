// @ts-nocheck
/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import { Box, Button, List, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "@/portal/navigation";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import TestCalculation from "./TestCalculation";

const TestList = ({ parentId, testType, type }) => {
  const navigate = useNavigate();
  const testTypeParams = testType;

  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTests = async () => {
    const token = sessionStorage.getItem("authToken");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}test/byType`,
        {
          parentId: parentId,
          testType: testType,
          type: type,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success && response.data.data) {
        setTests(response.data.data);
      } else {
        setTests([]);
      }
    } catch (err) {
      setError("Failed to fetch tests.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTests();
  }, [parentId, testType, type]);

  const planId = sessionStorage.getItem("courseId");

  const [dateInfo, setDateInfo] = useState({
    currentTime: "",
    time30MinutesAgo: "",
  });

  const calculateTimes = (time, date) => {
    const [hours, minutes] = time.split(":").map(Number); // Extract hours and minutes
    const baseDate = new Date(date);
    baseDate.setUTCHours(hours, minutes, 0, 0); // Set time to the given hour and minute

    const thirtyMinutesAgo = new Date(baseDate.getTime() - 30 * 60 * 1000); // Subtract 30 minutes

    // Format date and time
    const formatDateTime = (dateObj) => {
      const day = String(dateObj.getUTCDate()).padStart(2, "0");
      const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
      const year = dateObj.getUTCFullYear();
      const hrs = String(dateObj.getUTCHours()).padStart(2, "0");
      const mins = String(dateObj.getUTCMinutes()).padStart(2, "0");
      return `${year}-${month}-${day} ${hrs}:${mins}`;
    };

    return {
      currentTime: formatDateTime(baseDate),
      time30MinutesAgo: formatDateTime(thirtyMinutesAgo),
    };
  };

  useEffect(() => {
    const fetchMockTests = async () => {
      const token = sessionStorage.getItem("authToken");

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}mockTest/userMockTest`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
            params: {
              planId: planId,
            },
          }
        );
        if (response.data.success) {
          const { time, date } = response.data.data;

          const calculatedTimes = calculateTimes(time, date);
          setDateInfo({
            currentTime: calculatedTimes.currentTime,
            time30MinutesAgo: calculatedTimes.time30MinutesAgo,
          });
        }
      } catch (error) {
        console.error("Error fetching mock tests:", error);
      }
    };
    fetchMockTests();
  }, [planId]);

  const currentDate = new Date();
  const time30MinutesAgo = new Date(dateInfo.time30MinutesAgo);
  const [timeCheck, setTimeCheck] = useState(true);

  useEffect(() => {
    if (currentDate >= time30MinutesAgo) setTimeCheck(false);
    else setTimeCheck(true);
  }, [timeCheck, setTimeCheck]);

  // const id = useParams();

  useEffect(() => {
    const fetchMockTests = async () => {
      const token = sessionStorage.getItem("authToken");

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}mockTest/userMockTest`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
            params: {
              planId: planId,
            },
          }
        );
        if (response.data.success) {
        }
      } catch (error) {
        console.error("Error fetching mock tests:", error);
      }
    };
    fetchMockTests();
  }, [planId]);

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      {loading ? (
        <CustomCircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <List
          sx={{
            overflowY: "auto",
            padding: 0,
            width: "100%",
            borderWidth: "2px",
          }}
        >
          {tests.map((item, index) => {
            const testStatus =
              type === "reading"
                ? item.reading[0]?.isTestComplete
                : type === "listening"
                ? item.listening[0]?.isTestComplete
                : type === "aptitude"
                ? item.aptitude[0]?.isTestComplete
                : type === "writing"
                ? item.writing[0]?.isTestComplete
                : item.speaking[0]?.isTestComplete;

            return (
              <>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  mt={1}
                  border={"1px solid grey"}
                  width={"100%"}
                  bgcolor={"#fff"}
                  key={index}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      p: "10px 10px 0px",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    p="10px"
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={4} md={2}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Icon
                            icon="pajamas:question-o"
                            style={{
                              color: "#80869A",
                              fontSize: "20px",
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              display: "flex",
                              pl: "8px",
                              alignItems: "center",
                            }}
                          >
                            {type === "reading"
                              ? item.reading[0]?.individualQuestions
                              : type === "listening"
                              ? item.listening[0]?.individualQuestions
                              : type === "speaking"
                              ? item.speaking[0]?.data?.length
                              : type === "aptitude"
                              ? item.aptitude[0]?.individualQuestions
                              : type === "writing"
                              ? item.writing[0]?.data?.length
                              : item.speaking[0]?.individualQuestions}
                            &nbsp;Questions
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={6} sm={4} md={2}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Icon
                            icon="mingcute:bookmarks-fill"
                            style={{
                              color: "#80869A",
                              fontSize: "20px",
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              display: "flex",
                              pl: "8px",
                              alignItems: "center",
                            }}
                          >
                            {type === "reading"
                              ? item.reading[0]?.marks
                              : type === "listening"
                              ? item.listening[0]?.marks
                              : type === "aptitude"
                              ? item.aptitude[0]?.marks
                              : type === "writing"
                              ? item.writing[0]?.marks
                              : item.speaking[0]?.marks}{" "}
                            Marks
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={2}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Icon
                            icon="wi:time-1"
                            style={{ color: "#80869A", fontSize: "20px" }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              display: "flex",
                              pl: "8px",
                              alignItems: "center",
                            }}
                          >
                            {type === "reading"
                              ? item.reading[0]?.duration
                              : type === "listening"
                              ? item.listening[0]?.duration
                              : type === "aptitude"
                              ? item.aptitude[0]?.duration
                              : type === "writing"
                              ? item.writing[0]?.duration
                              : item.speaking[0]?.duration}{" "}
                            Mins
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Box display="flex" justifyContent="flex-end">
                      <Button
                        variant="contained"
                        disabled={testStatus === "pending"}
                        sx={{
                          width: "150px",
                          mr: "10px",
                          bgcolor: "#00999E",
                          "&:hover": { bgcolor: "#00999E" },
                        }}
                        onClick={() => {
                          if (testStatus === null) {
                            navigate(
                              `/dashboard/mocktest/testpage/${testTypeParams}/${item._id}/${type}`
                            );
                          } else if (testStatus === "pending") {
                            navigate("/dashboard/scorepending");
                          } else if (testStatus === "checked") {
                            navigate(
                              `/dashboard/${item._id}/${type}/scoretable/?testType=${testTypeParams}`
                            );
                          }
                        }}
                      >
                        {testStatus === null
                          ? "Start Now"
                          : testStatus === "pending"
                          ? "Submitted"
                          : testStatus === "checked"
                          ? "View Score"
                          : "Start Now"}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      borderTop: "1px solid grey",
                      bgcolor: "#effdff",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center ",
                      p: "10px",
                    }}
                  >
                    <Icon
                      icon="clarity:language-line"
                      style={{ color: "#00999E", fontSize: "20px" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: "#00999E", pl: "10px" }}
                    >
                      English
                    </Typography>
                  </Box>
                </Box>
                {testStatus === "pending" && <TestCalculation />}
              </>
            );
          })}
        </List>
      )}
    </Box>
  );
};

export default TestList;
