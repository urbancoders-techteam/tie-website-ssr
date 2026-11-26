// @ts-nocheck
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs"; // Add this import
import moment from "moment";
import momentTimeZone from "moment-timezone";
import { useNavigate } from "@/portal/navigation";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import calendaricon from "../../../../asset/TestPrepDashboard/calendaricon.png";
import calendarImg from "../../../../asset/TestPrepDashboard/calendartop.png";
import videoicon from "../../../../asset/TestPrepDashboard/video.png";

// Function to format date and time
const formatDateTime = (date, duration) => {
  const startTime = dayjs(date).subtract(5, "hour").subtract(30, "minute");
  const endTime = startTime.add(duration, "minute");

  const formattedDate = startTime.format("D MMM, YYYY");
  const formattedStartTime = startTime.format("h:mm A");
  const formattedEndTime = endTime.format("h:mm A");

  return `${formattedDate}, ${formattedStartTime} - ${formattedEndTime}`;
};

const Schedule = ({
  refreshing,
  handleRefreshData,
  upcomingClasses,
  upcomingMockTestData,
  loading,
}) => {
  const navigate = useNavigate();

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
    <Box sx={{ display: "flex", flexDirection: "row", my: "20px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <MainHeader
          content={"Exam Date"}
          fontWeight={"500"}
          fontSize={"24px"}
        />

        <Box
          sx={{
            mt: "20px",
            width: "320px",
            height: "320px",
            border: "1px solid #B9B9B9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            flexDirection: "column",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onClick={() => navigate("/dashboard/mocktest")}
        >
          {loading ? (
            <CustomCircularProgress />
          ) : (
            <>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "186px",
                  margin: "auto ",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "60px",
                    backgroundImage: `url(${calendarImg})`,
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "32px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {upcomingMockTestData && upcomingMockTestData.length > 0
                      ? dayjs(upcomingMockTestData[0].date).format("MMM")
                      : "Month"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #BDBDBD",
                    height: "100px",
                    margin: "0 3px 3px 3px",
                    borderRadius: "0px 0px 10px 10px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "52px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {upcomingMockTestData && upcomingMockTestData.length > 0
                      ? dayjs(upcomingMockTestData[0].date).date()
                      : "--"}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  border: "1px solid #B9B9B9",
                  mt: "auto",
                  height: "40px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <img src={calendaricon} alt="" />
                <Typography
                  sx={{ color: "#00999E", fontWeight: "500", pl: "15px" }}
                >
                  {upcomingMockTestData && upcomingMockTestData.length > 0
                    ? Math.ceil(
                        dayjs(upcomingMockTestData[0].date).diff(dayjs(), "day")
                      ) + " days"
                    : "N/A"}
                </Typography>
                <Typography
                  sx={{ color: "#777777", fontWeight: "500", pl: "5px" }}
                >
                  {" "}
                  to go {">>>>"}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          pl: "20px",
          flexDirection: "column",
        }}
      >
        <Box display="flex" justifyContent="space-between" gap={2}>
          <MainHeader
            content={"Upcoming Classes"}
            fontWeight={"500"}
            fontSize={"24px"}
          />
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              height: "36px",
              color: "#00999E",
              borderColor: "#00999E",
              "&:hover": {
                borderColor: "#007c7f",
                color: "#007c7f",
              },
            }}
            onClick={handleRefreshData}
            disabled={refreshing}
          >
            {refreshing ? "Refreshing..." : "Refresh"}
          </Button>
        </Box>

        <Box
          sx={{
            mt: 2,
            width: "100%",
            height: "320px",
            border: "1px solid #B9B9B9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "10px",
            overflowY: "auto",
          }}
        >
          {loading || refreshing ? (
            <CustomCircularProgress />
          ) : upcomingClasses && upcomingClasses.length > 0 ? (
            upcomingClasses.map((classItem) => {
              const ableBtn = moment
                .utc(classItem.date)
                .subtract(10, "minutes")
                .format("DD-MM-YYYY hh:mm A");
              const currentAbleBtn = momentTimeZone()
                .tz("Asia/Kolkata")
                .format("DD-MM-YYYY hh:mm A");
              const ablebtnValid = ableBtn <= currentAbleBtn;

              return (
                <Box
                  key={classItem._id}
                  sx={{
                    width: "100%",
                    height: "110px",
                    border: "1px solid #B9B9B9",
                    display: "flex",
                    flexDirection: "row",
                    padding: "0 20px",
                    alignItems: "center",
                  }}
                >
                  <img src={videoicon} alt="Class Icon" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0 20px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: "#4C4C4C", fontWeight: "500" }}
                    >
                      {classItem?.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#838383", fontWeight: "500" }}
                    >
                      {formatDateTime(classItem.date, classItem.duration)}
                    </Typography>
                  </Box>
                  <Box
                    ml={"auto"}
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
                      href={classItem.meetingLink}
                      onClick={() => handleClassJoin(classItem._id)}
                      target="_blank"
                      disabled={!ablebtnValid}
                    >
                      Join
                    </Button>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Typography>No upcoming classes available.</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Schedule;
