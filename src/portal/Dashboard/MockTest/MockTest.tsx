// @ts-nocheck
import { Icon } from "@iconify/react";
import { Box, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "@/portal/navigation";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";

const Mocktest = () => {
  const navigate = useNavigate();
  const [mockTests, setMockTests] = useState([]);
  const [mockTestMessage, setMockTestMessage] = useState([]);
  const [loading, setLoading] = useState(true);

  const batchId = sessionStorage.getItem("batchId");

  const handleButtonClickTestList = (parentId) => {
    navigate(`mocktestList/${parentId}/MockTest`);
  };
  const planId = sessionStorage.getItem("courseId");

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
              batchId: batchId,
            },
          }
        );
        if (response.data.success) {
          setMockTests(response.data.data);
        }
        setMockTestMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching mock tests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMockTests();
  }, [batchId, planId]);

  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        mt: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: "30px",
          alignItems: "center",
        }}
      >
        <Icon
          icon="heroicons:light-bulb"
          style={{ color: "#00999E", fontSize: "28px" }}
        />
        <Box sx={{ pl: "20px" }}>
          <MainHeader
            content={"Mock Test"}
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>
      {loading ? (
        <CustomCircularProgress />
      ) : (
        <Grid container spacing={3}>
          {mockTests.length !== 0 ? (
            mockTests?.map((item, index) => (
              <Grid
                item
                md={4}
                xs={12}
                key={item._id}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    width: "340px",
                    border: "1px solid #00999E",
                    borderRadius: "20px",
                    background: `linear-gradient(to bottom, 
              rgba(167, 214, 215, 0.4) 5%,   
              rgba(218, 240, 241, 0.5) 40%, 
              rgba(255, 255, 255, 1) 100%)`,
                    padding: "14px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      mb: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#00999E",
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                    >
                      {"Date : " +
                        new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#00999E",
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                    >
                      {"Time : " + item.time}
                    </Typography>
                  </Box>
                  <Tooltip title={item.name}>
                    <Box
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                        color: "#1a1a1a",
                        fontWeight: "550",
                        fontSize: "24px",
                      }}
                    >
                      {item.name}
                    </Box>
                  </Tooltip>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      mt: "20px ",
                      mb: "50px",
                    }}
                  >
                    <Typography
                      sx={{ color: "#667085", fontWeight: "500", pl: "10px" }}
                    >
                      Course Name
                    </Typography>
                    <Box
                      sx={{
                        height: "25px",
                        ml: "auto",
                        borderRadius: "5px",
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{ color: "#667085", fontWeight: "500", pl: "10px" }}
                      >
                        {" "}
                        {item.courseName}
                      </Typography>
                    </Box>
                  </Box>
                  <ButtonComponent
                    width={"100%"}
                    onClick={() => handleButtonClickTestList(item._id)}
                    text={"Go To Test Series"}
                    icon={
                      <Icon
                        icon="eva:arrow-forward-fill"
                        style={{ color: "#fff" }}
                      />
                    }
                    fontWeight={"550"}
                  />
                </Box>
              </Grid>
            ))
          ) : (
            <Typography
              variant="span"
              sx={{ marginLeft: "20px", color: "gray" }}
            >
              {mockTestMessage}
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Mocktest;
