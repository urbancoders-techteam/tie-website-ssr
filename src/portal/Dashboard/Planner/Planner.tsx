// @ts-nocheck
/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import CalendarPage from "./components/CalendarComponents";
import PlannerHistory from "./components/PlannerHistory";
import PlannerTimeline from "./components/Timeline";

const Planner = () => {
  const [events, setEvents] = useState([]);
  const [refreshForData, setRefreshForData] = useState("");
  const [plannerDate, setPlannerDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [noDataMessage, setNoDataMessage] = useState("");
  const [refreshData, setRefreshData] = useState(false);
  const [plannerDetails, setPlannerDetails] = useState({
    classes: [],
    mockTests: [],
    practiceAssignment: [],
  });

  const token = sessionStorage.getItem("authToken");
  const batchId = sessionStorage.getItem("batchId");

  const handleDateClick = (info) => {
    fetchPlannerDetails(info.dateStr);
  };

  const handleEventClick = (info) => {
    const clickedDate = new Date(info.event.start);

    const year = clickedDate.getFullYear();
    const month = String(clickedDate.getMonth() + 1).padStart(2, "0");
    const day = String(clickedDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    fetchPlannerDetails(formattedDate);
    setRefreshForData(formattedDate);
  };

  const handleRefreshData = async () => {
    setRefreshData(true);
    await fetchPlannerDetails(refreshForData);
    setRefreshData(false);
  };

  const fetchData = async (year, month) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}planner/student-planner`,
        { year, month, batchId },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      const eventData = response.data.data.flatMap((item) => {
        const events = [];
        if (item.mockTest)
          events.push({ title: "Mock Test", date: item.date, type: "mock" });
        if (item.class)
          events.push({ title: "Class", date: item.date, type: "class" });
        if (item.attendedClass)
          events.push({
            title: "Attended Class",
            date: item.date,
            type: "attended",
          });
        if (item.notAttendedClass)
          events.push({
            title: "Not Attended",
            date: item.date,
            type: "notAttended",
          });
        return events;
      });

      setEvents(eventData);
    } catch (error) {
      console.error("Error fetching calendar data:", error);
    }
  };

  const fetchPlannerDetails = async (date) => {
    setLoading(true);
    setRefreshForData(date);
    setNoDataMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}planner/planner-detail`,
        { date, batchId },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      const {
        date: apiDate,
        class: classes = [],
        mocktest = [],
        practiceAssignment = [],
      } = response.data.data;

      setPlannerDate(apiDate);
      setPlannerDetails({
        classes,
        mockTests: mocktest,
        practiceAssignment,
      });

      const noData =
        classes.length === 0 &&
        mocktest.length === 0 &&
        practiceAssignment.length === 0;

      if (noData) {
        setNoDataMessage("There are no classes or mock tests for today.");
      }
    } catch (error) {
      console.error("Error fetching planner details:", error);
    } finally {
      setLoading(false);
    }
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const todayDate = today.toISOString().split("T")[0];

  useEffect(() => {
    fetchData(year, month);
    fetchPlannerDetails(todayDate);
  }, []);

  const renderDate = !loading && plannerDate && (
    <Typography sx={{ fontSize: "28px", fontWeight: "550", color: "#00999E" }}>
      {new Date(plannerDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </Typography>
  );

  const showTimeline =
    !loading &&
    (plannerDetails.mockTests.length > 0 ||
      plannerDetails.practiceAssignment.length > 0);

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", my: "30px" }}>
        <Icon
          icon="streamline:class-lesson"
          style={{ color: "#00999E", fontSize: "28px" }}
        />
        <Box sx={{ pl: 2 }}>
          <MainHeader content="Planner" fontWeight="550" fontSize="28px" />
        </Box>
      </Box>

      {/* Calendar */}
      <CalendarPage
        events={events}
        fetchData={fetchData}
        onDateClick={handleDateClick}
        onEventClick={handleEventClick}
      />

      {/* Date or Loader */}
      <Box sx={{ mt: "20px", textAlign: "center" }}>
        {loading ? <CustomCircularProgress /> : renderDate}
      </Box>

      {/* Timeline */}
      {showTimeline && (
        <Box sx={{ m: "10px 0" }}>
          <PlannerTimeline
            mockTests={plannerDetails.mockTests}
            practiceAssignments={plannerDetails.practiceAssignment}
          />
        </Box>
      )}

      {/* No Data or History */}
      <Box sx={{ m: "20px 0" }}>
        {!loading &&
          (noDataMessage ? (
            <Typography
              variant="body1"
              color="textSecondary"
              textAlign="center"
            >
              {noDataMessage}
            </Typography>
          ) : (
            <PlannerHistory
              refreshData={refreshData}
              setRefreshData={setRefreshData}
              classes={plannerDetails.classes}
              practiceAssignments={plannerDetails.practiceAssignment}
              handleRefreshData={handleRefreshData}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Planner;
