// @ts-nocheck
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "@/portal/navigation";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import learning from "../../asset/TestPrepDashboard/learning.svg";

const LearningResources = () => {
  const navigate = useNavigate();
  const [bookletsData, setBookletsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = sessionStorage.getItem("authToken");
  const planId = sessionStorage.getItem("courseId");

  useEffect(() => {
    const fetchLearningResources = async () => {
      setLoading(true); // start loading
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}learningResource/userLearingResource`,
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

        if (response.status === 200 && response.data.success) {
          setBookletsData(response.data.data);
        } else {
          console.error("Failed to fetch learning resources");
        }
      } catch (error) {
        console.error("Error fetching learning resources:", error);
      } finally {
        setLoading(false); // end loading
      }
    };

    fetchLearningResources();
  }, [planId, token]);

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexDirection: "row", my: "20px" }}>
        <img src={learning} alt="" style={{ fontSize: "48px" }} />
        <Box sx={{ pl: "20px" }}>
          <MainHeader
            content={"Learning Resources"}
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
          }}
        >
          <CustomCircularProgress />
        </Box>
      ) : bookletsData?.length === 0 ? (
        <Typography variant="span" sx={{ color: "gray" }}>
          Your learning resources will appear here once available.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {bookletsData?.map((item, index) => (
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
                  padding: "10px",
                }}
              >
                <Typography
                  sx={{ color: "#00999E", fontWeight: "500", mb: "8px" }}
                >
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Typography>
                <MainHeader
                  content={item.name}
                  color={"#1a1a1a"}
                  fontWeight={"550"}
                  fontSize={"20px"}
                />
                {item?.pdf?.map((pdfItem, i) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      m: "10px 0",
                    }}
                    key={i}
                  >
                    <Icon icon="ri:booklet-fill" style={{ color: "#667085" }} />
                    <Typography
                      sx={{ color: "#667085", fontWeight: "500", pl: "10px" }}
                    >
                      {pdfItem.name}
                    </Typography>
                    <Box
                      sx={{
                        height: "25px",
                        ml: "auto",
                        border: "1px solid #667085",
                        borderRadius: "5px",
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      // onClick={() => window.open(pdfItem.pdf, "_blank")}
                      onClick={() => {
                        navigate("view-resource-file", { state: pdfItem.pdf });
                      }}
                    >
                      <Icon
                        icon={"carbon:view-filled"}
                        style={{ color: "#667085" }}
                      />
                      <Typography
                        sx={{ color: "#667085", fontWeight: "500", pl: "10px" }}
                      >
                        View
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default LearningResources;
