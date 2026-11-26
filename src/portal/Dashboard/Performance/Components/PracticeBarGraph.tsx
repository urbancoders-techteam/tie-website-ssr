// @ts-nocheck
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";

const PracticeBarGraph = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const maxBarsVisible = 5;

  const token = sessionStorage.getItem("authToken");
  const planId = sessionStorage.getItem("courseId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}test/practice-graph`,
          {
            headers: {
              Authorization: token,
            },
            params: {
              planId: planId,
            },
          }
        );
        const apiData = response.data.data;

        // Transforming the API data into the required format
        const transformedData = apiData.map((item) => ({
          name: item.mockTestName,
          reading: item.marks.reading?.obtainMarks || 0,
          listening: item.marks.listening?.obtainMarks || 0,
          writing: item.marks.writing?.obtainMarks || 0,
          speaking: item.marks.speaking?.obtainMarks || 0,
          aptitude: item.marks.aptitude?.obtainMarks || 0,
        }));

        setData(transformedData);
      } catch (error) {
        console.error("Error fetching API data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [planId, token]);

  const handleSlide = (direction) => {
    if (direction === "left" && startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else if (
      direction === "right" &&
      startIndex < data.length - maxBarsVisible
    ) {
      setStartIndex(startIndex + 1);
    }
  };

  if (loading) {
    return <CustomCircularProgress />;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", margin: "20px" }}>
      {data.length === 0 ? ( // Handle empty data
        <Typography>No data available for the selected period.</Typography>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Detailed Analysis PER WEEK</Typography>
            <Box
              sx={{
                border: "2px solid #00999E",
                padding: "5px 10px",
                borderRadius: "20px",
              }}
            >
              <Typography variant="body2">Weekly MT : {data.length}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                width: "1000px",
              }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={data.slice(startIndex, startIndex + maxBarsVisible)}
                >
                  <CartesianGrid strokeDasharray="12 0 " />
                  <XAxis dataKey="name" />
                  <YAxis
                    label={{
                      value: "Score 1-10",
                      angle: -90,
                    }}
                    domain={[1, 100]}
                    ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                  />
                  <Tooltip />
                  <Bar dataKey="reading" fill="#025356" name="Reading" />
                  <Bar dataKey="listening" fill="#0A9DA2" name="Listening" />
                  <Bar dataKey="writing" fill="#1DC6CC" name="Writing" />
                  <Bar dataKey="speaking" fill="#4FEBF1" name="Speaking" />
                  <Bar dataKey="aptitude" fill="#B1FCFF" name="Aptitude" />
                </BarChart>
              </ResponsiveContainer>

              {/* The rest of your UI remains unchanged */}

              <MainHeader
                content={"Topic/Week Analysis"}
                color={"#000"}
                textAlign={"center"}
                fontSize={"20px"}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                {/* Legends */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      backgroundColor: "#025356",
                      mr: 1,
                    }}
                  />
                  <Typography>Over All</Typography>
                </Box>
                {/* Add more legends as needed */}
              </Box>

              {/* Slide buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#00999E",
                    mr: "20px",
                  }}
                  onClick={() => handleSlide("left")}
                  disabled={startIndex === 0}
                >
                  {"<"}------
                </Button>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "10px", backgroundColor: "#00999E" }}
                  onClick={() => handleSlide("right")}
                  disabled={startIndex >= data.length - maxBarsVisible}
                >
                  ------{">"}
                </Button>
              </Box>
            </Box>
            {/* <Box
              sx={{
                width: "350px",
                bgcolor: "#CBFDFF",
                ml: "20px",
                padding: "20px",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <MainHeader
                content={"Improvement Plans:"}
                fontSize={"18px"}
                color={"#000"}
              />
              <MainHeader
                content={"Plan Based On the Analysis"}
                fontSize={"14px"}
                color={"#667085"}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <MainHeader
                  content={"Writing Plan"}
                  fontSize={"14px"}
                  color={"#667085"}
                />
                <Icon
                  icon="flowbite:download-solid"
                  color="#667085"
                  fontSize={"24px"}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <MainHeader
                  content={"Grammar Plan"}
                  fontSize={"14px"}
                  color={"#667085"}
                />
                <Icon
                  icon="flowbite:download-solid"
                  color="#667085"
                  fontSize={"24px"}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <MainHeader
                  content={"Listening Plan"}
                  fontSize={"14px"}
                  color={"#667085"}
                />
                <Icon
                  icon="flowbite:download-solid"
                  color="#667085"
                  fontSize={"24px"}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <MainHeader
                  content={"Speaking Plan"}
                  fontSize={"14px"}
                  color={"#667085"}
                />
                <Icon
                  icon="flowbite:download-solid"
                  color="#667085"
                  fontSize={"24px"}
                />
              </Box>
              <ButtonComponent
                text={"View Details"}
                width={"100%"}
                height={"50px"}
                fontWeight={"550"}
                icon={<Icon icon="grommet-icons:link-next" />}
              />
            </Box> */}
          </Box>
        </>
      )}
    </Box>
  );
};

export default PracticeBarGraph;
