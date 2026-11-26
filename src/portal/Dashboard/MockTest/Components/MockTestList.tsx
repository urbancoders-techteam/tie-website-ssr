// @ts-nocheck
import { Icon } from "@iconify/react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "@/portal/navigation";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import TestList from "./TestList";

const MockTestList = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedTab, setSelectedTab] = useState(false);
  const [availableTests, setAvailableTests] = useState({
    reading: false,
    listening: false,
    writing: false,
    speaking: false,
    aptitude: false,
  });
  const [loading, setLoading] = useState(false);
  const [noTestsFound, setNoTestsFound] = useState(false);
  const { id } = useParams();
  const { type } = useParams();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    const fetchTestTypes = async () => {
      const token = sessionStorage.getItem("authToken");
      setLoading(true);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}test/types`,
          { parentId: id, testType: type },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success && response.data.data) {
          const testTypes = response.data.data;
          setAvailableTests(testTypes);

          // 👇 pehla available tab select karo
          const firstAvailable =
            (testTypes.reading && "reading") ||
            (testTypes.speaking && "speaking") ||
            (testTypes.listening && "listening") ||
            (testTypes.writing && "writing") ||
            (testTypes.aptitude && "aptitude") ||
            false;

          setSelectedTab(firstAvailable);

          setNoTestsFound(false);
        } else {
          setNoTestsFound(true);
        }
      } catch (error) {
        console.error("Error fetching test types", error);
        setNoTestsFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTestTypes();
  }, [id, type]);

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          py: "20px",
          mt: "-5px",
          alignItems: "center",
          position: "fixed",
          zIndex: 1,
          backgroundColor: "#ffffff",
          width: "100%",
        }}
      >
        <Icon
          icon="heroicons:light-bulb"
          style={{ color: "#00999E", fontSize: "28px" }}
        />
        <Box sx={{ pl: "20px" }}>
          <MainHeader
            content={
              type === "PracticeAssignment"
                ? "Practice Assignment"
                : "Mock Test"
            }
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>
      {noTestsFound ? (
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            mt: "100px",
          }}
        >
          <Typography variant="h6" color="textSecondary">
            No test present for the following Mock Test.
          </Typography>
        </Box>
      ) : loading ? (
        <CustomCircularProgress />
      ) : (
        <Box sx={{ padding: 2, mt: "55px" }}>
          {/* Tabs Section */}
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant={isSmallScreen ? "scrollable" : "fullWidth"}
            scrollButtons="auto"
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            sx={{
              "& .MuiTab-root": {
                backgroundColor: "#D6FAFF",
                borderRadius: "8px",
                height: "30px",
                color: "#00999E",
                textTransform: "none",
                fontWeight: "500",
                marginRight: 1,
              },
              "& .MuiTab-root.Mui-selected": {
                backgroundColor: "#00999E",
                color: "#FFFFFF",
              },
            }}
          >
            {availableTests.reading && <Tab value="reading" label="Reading" />}
            {availableTests.speaking && (
              <Tab value="speaking" label="Speaking" />
            )}
            {availableTests.listening && (
              <Tab value="listening" label="Listening" />
            )}
            {availableTests.writing && <Tab value="writing" label="Writing" />}
            {availableTests.aptitude && (
              <Tab value="aptitude" label="Aptitude" />
            )}
          </Tabs>

          <Box sx={{ marginTop: 3 }}>
            {selectedTab === "reading" && availableTests.reading && (
              <TestList
                selectedTab={selectedTab}
                parentId={id}
                testType={type}
                type={"reading"}
              />
            )}
            {selectedTab === "speaking" && availableTests.speaking && (
              <TestList
                selectedTab={selectedTab}
                parentId={id}
                testType={type}
                type={"speaking"}
              />
            )}
            {selectedTab === "listening" && availableTests.listening && (
              <TestList
                selectedTab={selectedTab}
                parentId={id}
                testType={type}
                type={"listening"}
              />
            )}
            {selectedTab === "writing" && availableTests.writing && (
              <TestList
                selectedTab={selectedTab}
                parentId={id}
                testType={type}
                type={"writing"}
              />
            )}
            {selectedTab === "aptitude" && availableTests.aptitude && (
              <TestList
                selectedTab={selectedTab}
                parentId={id}
                testType={type}
                type={"aptitude"}
              />
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MockTestList;
