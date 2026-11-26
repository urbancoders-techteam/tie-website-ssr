// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, CircularProgress, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { Icon } from "@iconify/react";
import Header from "@/portal/Component/content-component/Header";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";

const initialDisplayCount = 8;

const SupportFaq = () => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}master/web-list`,
          {
            method: "GET",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setFaqData(data?.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  const handleExploreAllClick = () => {
    setDisplayCount(faqData.length);
  };

  const handleShowLessClick = () => {
    setDisplayCount(initialDisplayCount);
  };

  return (
    <Box sx={{ padding: "50px 0", background: "#EFFDFF" }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", mb: "30px" }}>
          <Header
            content={"Frequently Asked Questions"}
            color="#00999E"
            textAlign={"center"}
          />
        </Box>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {faqData?.slice(0, displayCount).map((item, i) => (
              <Grid item xs={12} md={6} key={item._id}>
                <AccordianCard data={item} i={i} />
              </Grid>
            ))}
          </Grid>
        )}
        {!loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <ButtonComponent
              borderRadius="50px"
              text={
                displayCount === initialDisplayCount
                  ? "Explore All Questions"
                  : "Show Less"
              }
              fontSize="18px"
              padding="10px 30px"
              width="auto"
              onClick={
                displayCount === initialDisplayCount
                  ? handleExploreAllClick
                  : handleShowLessClick
              }
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default SupportFaq;

const AccordianCard = ({ data, i }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Accordion
      expanded={expanded === `panel${i}`}
      onChange={handleChange(`panel${i}`)}
      sx={{
        background: expanded === `panel${i}` ? "#DDFEFF" : "#fff",
        borderRadius: "15px",
        boxShadow: "5px 11px 14px -4px rgba(0,0,0,0.1)",
        mb: 3,
        ":before": { backgroundColor: "transparent" },
        minHeight: "100px",
        alignContent: "center",
      }}
    >
      <AccordionSummary
        expandIcon={
          expanded === `panel${i}` ? (
            <IconButton
              sx={{
                background: "#00999E",
                borderRadius: "5px",
                ":hover": { background: "#00999E" },
              }}
            >
              <Icon icon="lucide:minus" color="#fff" />
            </IconButton>
          ) : (
            <IconButton
              sx={{
                background: "#F7F7FF",
                borderRadius: "5px",
                ":hover": { background: "#F7F7FF" },
              }}
            >
              <Icon icon="ic:baseline-add" color="#00999E" />
            </IconButton>
          )
        }
        aria-controls={`panel${i}-content`}
        id={`panel${i}-header`}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box ml={1}>
            <Typography
              sx={{
                fontSize: { sm: "20px", xs: "17px" },
                fontWeight: "600",
                fontFamily: "Nunito, sans-serif",
                color: "#170F49",
              }}
            >
              {i + 1}. {data?.question}
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            ml: 1,
            fontSize: { sm: "18px", xs: "16px" },
            fontWeight: "500",
            fontFamily: "Nunito, sans-serif",
            color: "#6F6C90",
          }}
        >
          {data?.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
