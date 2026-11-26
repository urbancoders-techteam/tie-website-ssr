// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Card, CardContent, Button, Typography, Box, IconButton, Divider, List, ListItem, ListItemText, ListItemIcon, CircularProgress } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Icon } from "@iconify/react";
import moment from "moment";
import { useNavigate } from "@/portal/navigation";
import dayjs from "dayjs";
import momentTimeZone from "moment-timezone";
import axios from "axios";

const PlannerHistory = ({ classes, refreshData, handleRefreshData }) => {
  const navigate = useNavigate();
  const handlePracticeAssessment = (parentId) => {
    navigate(`/dashboard/mocktest/mocktestList/${parentId}/PracticeAssignment`);
  };
  const [expandedClasses, setExpandedClasses] = useState({});

  useEffect(() => {
    if (classes?.length) {
      const defaultExpanded = {};
      classes.forEach((item) => {
        defaultExpanded[item._id] = true;
      });
      setExpandedClasses(defaultExpanded);
    }
  }, [classes]);

  const handleToggleClass = (id) => {
    setExpandedClasses((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatDate = (date, duration) => {
    const momentDate = moment.utc(date).format("hh:mm A");
    const extendedDate = moment
      .utc(dayjs(date).add(duration, "minutes").toISOString())
      .format("hh:mm A");
    const startTime = new Date(date);

    const day = startTime.getDate();
    const month = startTime.toLocaleString("en-IN", { month: "short" });
    const year = startTime.getFullYear();

    return `${day} ${month} ${year}, ${momentDate} - ${extendedDate}`;
  };

  const handleClassJoin = async (classId) => {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}planner/class-join`,
      {
        classId: classId,
      },
      {
        headers: {
          Authorization: sessionStorage.getItem("authToken"),
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    classes?.length > 0 &&
    classes?.map((classItem) => {
      const ableBtn = moment
        .utc(classItem.date)
        .subtract(10, "minutes")
        .format("DD-MM-YYYY hh:mm A");
      const currentAbleBtn = momentTimeZone()
        .tz("Asia/Kolkata")
        .format("DD-MM-YYYY hh:mm A");
      const ablebtnValid = ableBtn <= currentAbleBtn;

      return (
        <Box key={classItem._id} sx={{ marginBottom: "20px" }}>
          <Box
            sx={{
              backgroundColor: "#00999E",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Typography variant="h6">{classItem.name}</Typography>
            <IconButton
              onClick={() => handleToggleClass(classItem._id)}
              sx={{ color: "#FFFFFF" }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>

          {expandedClasses[classItem._id] && (
            <Box
              sx={{
                border: "1px solid #E0E0E0",
                borderTop: "none",
                borderRadius: "0 0 8px 8px",
                padding: "20px ",
                backgroundColor: "#FFFFFF",
              }}
            >
              <>
                <Card sx={{ marginBottom: "20px" }}>
                  {refreshData ? (
                    <CircularProgress size={20} sx={{ color: "#00999E" }} />
                  ) : (
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              bgcolor: "rgba(0, 153, 158, 0.3)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: "10px",
                            }}
                          >
                            <Icon
                              icon="gala:video"
                              style={{ fontSize: "24px" }}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography variant="body1">
                              <strong>{classItem.courseName}</strong>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {formatDate(classItem.date, classItem.duration)}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="flex-end"
                          mt={2}
                          gap={2}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              bgcolor: "#00999E",
                              "&:hover": {
                                bgcolor: "#00999E",
                                color: "#fff",
                              },
                              color: "#fff",
                            }}
                            onClick={handleRefreshData}
                          >
                            Refresh
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              bgcolor: "#00999E",
                              "&:hover": {
                                bgcolor: "#00999E",
                                color: "#fff",
                              },
                              color: "#fff",
                            }}
                            href={classItem.meetingLink}
                            onClick={() => handleClassJoin(classItem._id)}
                            target="_blank"
                            disabled={!ablebtnValid}
                          >
                            Join
                          </Button>
                        </Box>
                      </Box>
                      <Grid
                        container
                        spacing={1}
                        sx={{
                          mt: 1,
                          bgcolor: "#DCDCDC",
                          border: "1px solid #B9B9B9",
                        }}
                        display={"flex"}
                        padding={"5px"}
                        justifyContent={"space-between"}
                      >
                        <Grid item>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Icon
                              icon="clarity:hourglass-solid"
                              style={{ color: "#80869A", fontSize: "20px" }}
                            />
                            <Typography variant="body2" sx={{ ml: "10px" }}>
                              Duration: {classItem.duration} min
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Icon
                              icon="wi:time-1"
                              style={{ color: "#80869A", fontSize: "20px" }}
                            />
                            <Typography variant="body2" sx={{ ml: "10px" }}>
                              Time:{" "}
                              {/* {new Date(classItem.date).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )} */}
                              {moment.utc(classItem.date).format("hh:mm A")}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Icon
                              icon="basil:calendar-outline"
                              style={{ color: "#80869A", fontSize: "20px" }}
                            />
                            <Typography variant="body2" sx={{ ml: "10px" }}>
                              Date:{" "}
                              {new Date(classItem.date).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mt={2}
                      >
                        <Box display="flex" alignItems="center">
                          {classItem.isAttend ? (
                            <CheckCircleIcon sx={{ color: "#00999E" }} />
                          ) : (
                            <Icon
                              icon="ic:outline-circle"
                              style={{ color: "#00999E", fontSize: "20px" }}
                            />
                          )}
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            My Attendance
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  )}
                </Card>

                <Card sx={{ marginBottom: "20px" }}>
                  <CardContent>
                    <Typography variant="h6">Learning Booklets</Typography>
                    <Divider sx={{ my: 2 }} />
                    <List>
                      {classItem.learningBooklet.map((booklet) => (
                        <ListItem key={booklet._id}>
                          <ListItemIcon>
                            <Icon
                              icon="ri:booklet-fill"
                              style={{ color: "#80869A", fontSize: "20px" }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={booklet.name} />
                          <Button
                            variant="outlined"
                            sx={{
                              color: "#00999E",
                              border: "1px solid #00999E",
                            }}
                            startIcon={
                              <VisibilityIcon sx={{ color: "#00999E" }} />
                            }
                            onClick={() =>
                              navigate("view-resource-file", {
                                state: booklet.pdf,
                              })
                            }
                            // href={booklet.pdf}
                            // target="_blank"
                          >
                            View
                          </Button>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>

                {/* ---------- Practice Assignement Card ---------- */}
                <Card
                  sx={{
                    backgroundColor: "#D2FEFF",
                    borderRadius: "10px",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "500", fontSize: "16px" }}
                      >
                        {classItem?.practiceAssignment?.name}
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          border: "2px solid #00999E",
                          bgcolor: "#fff",
                          color: "#00999E",
                          fontWeight: "500",
                          "&:hover": {
                            border: "2px solid #00999E",
                            backgroundColor: "#008080",
                            color: "#fff",
                          },
                          // m:'5px'
                        }}
                        onClick={() =>
                          handlePracticeAssessment(
                            classItem?.practiceAssignment?._id
                          )
                        }
                      >
                        Practice Assignment
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </>
            </Box>
          )}
        </Box>
      );
    })
  );
};

export default PlannerHistory;
