// @ts-nocheck
import React from "react";
import { Card, CardContent, Button, Typography, Box } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Icon } from "@iconify/react";
import { useNavigate } from "@/portal/navigation";
import dayjs from "dayjs";

const PlannerTimeline = ({ mockTests }) => {
  const navigate = useNavigate();

  const handleButtonClickTestList = (parentId) => {
    navigate(`/dashboard/mocktest/mocktestList/${parentId}/MockTest`);
  };

  const getIsStartEnabled = (date, time) => {
    const now = dayjs(); // Current time
    const startDateTime = dayjs(`${date.split("T")[0]}T${time}`); // Date + Time
    return now.isAfter(startDateTime); // Enable if now is after start time
  };

  return (
    <Box sx={{ padding: "20px 0" }}>
      <Timeline position="right">
        {mockTests?.map((test) => {
          const startDateTime = dayjs(
            `${test.date.split("T")[0]}T${test.time}`
          );
          const buttonEnabled = getIsStartEnabled(test.date, test.time);

          return (
            <TimelineItem key={test._id}>
              <TimelineOppositeContent sx={{ flex: 0 }} />
              <TimelineSeparator>
                <TimelineDot
                  color="error"
                  style={{
                    color: "#00999E !important",
                    borderRadius: "2px solid #00999E",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ backgroundColor: "#D2FEFF", borderRadius: "10px" }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 500, fontSize: "16px" }}
                    >
                      {test.name}
                    </Typography>
                    <Box
                      display="flex"
                      flexDirection="column"
                      mt={1}
                      border="1px solid grey"
                      width="100%"
                      bgcolor="#fff"
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 500, fontSize: "16px", p: "10px" }}
                      >
                        {test.courseName}
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        p="10px"
                      >
                        <Typography
                          variant="body2"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Icon
                            icon="wi:time-1"
                            style={{
                              color: "#80869A",
                              fontSize: "20px",
                              marginRight: "6px",
                            }}
                          />
                          {startDateTime.format("h:mm A")}{" "}
                          {/* 8:55 PM format */}
                        </Typography>

                        <Box display="flex" justifyContent="flex-end">
                          <Button
                            variant="contained"
                            sx={{ mr: "10px", bgcolor: "#00999E" }}
                            onClick={() => handleButtonClickTestList(test._id)}
                            disabled={!buttonEnabled}
                          >
                            Start Now
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default PlannerTimeline;
