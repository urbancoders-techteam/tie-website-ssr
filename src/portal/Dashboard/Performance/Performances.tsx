// @ts-nocheck
import { Icon } from "@iconify/react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import BarGraph from "./Components/BarGraph";
import PracticeBarGraph from "./Components/PracticeBarGraph";
import PracticeScoreMarks from "./Components/PracticeScoreMarks";
import ScoreMarks from "./Components/ScoreMarks";
const username = sessionStorage.getItem("username");

const Performances = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [overallSelectedTab, setOverallSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleOverallChange = (event, newValue) => {
    setOverallSelectedTab(newValue);
  };

  return (
    <Box sx={{ padding: "30px", display: "flex", flexDirection: "column" }}>
      {/* top @start*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: "30px",
          alignItems: "center",
        }}
      >
        <Icon
          icon="game-icons:progression"
          style={{ color: "#00999E", fontSize: "28px" }}
        />
        <Box sx={{ pl: "20px" }}>
          <MainHeader
            content={"Performance"}
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <MainHeader content={"Hello,"} fontSize={"20px"} />

          <MainHeader content={username} color={"#454545"} fontSize={"20px"} />
        </Box>
        <Typography
          sx={{
            pt: "8px",
            pb: "25px",
            color: "#757575",
            fontWeight: "550",
            fontSize: "18px",
          }}
        >
          You are doing great. Keep practicing
        </Typography>
      </Box>
      {/* top @end*/}
      <MainHeader
        content={"Overall Practice Assignment Analyze Performance"}
        color={"#000000"}
        fontSize={"20px"}
      />

      <Box
        sx={{
          my: "20px",
          border: "1px solid #a4a4a4",
          boxShadow: 2,
          p: "10px",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="standard"
          textColor="inherit"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#00999E",
            },
          }}
        >
          <Tab label="Score Marks" />
          <Tab label="Analyze Performance" />
        </Tabs>

        <Box sx={{ padding: 2 }}>
          {selectedTab === 0 && <PracticeScoreMarks />}
          {selectedTab === 1 && <PracticeBarGraph />}
        </Box>
      </Box>

      {/* overall */}

      <MainHeader
        content={"Overall Mocktest Analyze Performance"}
        color={"#000000"}
        fontSize={"20px"}
      />

      <Box
        sx={{
          my: "20px",
          border: "1px solid #a4a4a4",
          boxShadow: 2,
          p: "10px",
        }}
      >
        <Tabs
          value={overallSelectedTab}
          onChange={handleOverallChange}
          variant="standard"
          textColor="inherit"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#00999E",
            },
          }}
        >
          <Tab label="Score Marks" />
          <Tab label="Analyze Performance" />
        </Tabs>

        <Box sx={{ padding: 2 }}>
          {overallSelectedTab === 0 && <ScoreMarks />}
          {overallSelectedTab === 1 && <BarGraph />}
        </Box>
      </Box>
    </Box>
  );
};

export default Performances;
