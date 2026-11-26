// @ts-nocheck
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "@/portal/navigation";
import Header from "@/portal/Component/content-component/Header";
import { getBatchListAsync } from "@/portal/redux/services/testPrepService";
import CustomBarChart from "./Components/progressChart";
import FacultyConnectBanner from "./Components/TestPrepHome/FacultyConnectBanner";
import ProfileInfo from "./Components/TestPrepHome/ProfileInfo";
import Schedule from "./Components/TestPrepHome/Schedule";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";

const TestPrepHome = () => {
  const dispatch = useDispatch();
  const [dashboardData, setDashboardData] = useState(null);

  const token = sessionStorage.getItem("authToken");
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const planId = query.get("planId");

  const batchId = sessionStorage.getItem("batchId");

  const [refreshing, setRefreshing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { batchList, isLoading } = useSelector((state) => state.testPrep);

  const [selectedBatchId, setSelectedBatchId] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}student/get-student-web`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const value = response.data.data;
        setUserData(value);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [token]);

  useEffect(() => {
    if (userData?._id) {
      dispatch(getBatchListAsync({ studentId: userData?._id, planId }));
    }
  }, [dispatch, planId, userData?._id]);

  useEffect(() => {
    if (batchList?.data?.batchList?.length > 0 && !selectedBatchId) {
      const firstBatch = batchList.data.batchList[0];
      setSelectedBatchId(firstBatch.id);
      sessionStorage.setItem("batchId", firstBatch.id);
    }
  }, [batchList, selectedBatchId]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}test/web-dashboard`,
        {
          headers: {
            Authorization: token,
          },
          params: {
            batchId: batchId,
          },
        }
      );
      if (response.data.success) {
        setDashboardData(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [token, batchId]);

  useEffect(() => {
    if (batchId) {
      fetchData();
    }
  }, [batchId, fetchData, token]);

  const handleRefreshData = async () => {
    try {
      setRefreshing(true);
      await fetchData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <Box sx={{ margin: "0px 20px", display: "flex", flexDirection: "column" }}>
      {/* Pass Student, classes, and latestMockTest data to ProfileInfo */}
      <ProfileInfo
        batchList={batchList}
        isLoading={isLoading}
        selectedBatchId={selectedBatchId}
        setSelectedBatchId={setSelectedBatchId}
        student={userData}
        mocktest={dashboardData?.mockTestProgress}
        classes={dashboardData?.classes}
        practiceAssignment={dashboardData?.practiceAssignmentProgress}
        latestMockTest={dashboardData?.latestMockTest}
        loading={loading}
      />

      {/* Pass UpcomingClasses and upcomingMockTestData to Schedule */}

      <>
        <Schedule
          refreshing={refreshing}
          upcomingClasses={dashboardData?.upcomingClasses}
          upcomingMockTestData={dashboardData?.upcomingMockTests}
          handleRefreshData={handleRefreshData}
          loading={loading}
        />
        <FacultyConnectBanner />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            mt: 5,
          }}
        >
          <Header content={"Milestones"} />
          <Box
            sx={{
              margin: "20px 0",
              padding: "20px 30px",
              bgcolor: "#DDFEFF",
            }}
          >
            <Header content={"My Progress"} fontSize={"24px"} />

            {/* Pass myProgress data to CustomBarChart */}
            {loading ? (
              <CustomCircularProgress />
            ) : (
              <Box sx={{ padding: "20px 0px 20px 20px" }}>
                <CustomBarChart progressData={dashboardData?.myProgress} />
              </Box>
            )}

            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{ color: "#00999E" }}
            >
              No. of Classes Attended / Mock Test Participation
            </Typography>
          </Box>
        </Box>
      </>
    </Box>
  );
};

export default TestPrepHome;
