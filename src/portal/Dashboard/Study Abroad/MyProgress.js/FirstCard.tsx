// @ts-nocheck
import { Box, Button, Card, Container, Paper, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "@/portal/navigation";
import { useSearchParams } from "@/portal/navigation";

import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Header from "../../../Component/content-component/Header";
import Second from "./Second";
import PostEnrollmentForm from "./PostEnrollmentForm";

import "../../../globle.css";
import { webIconsUrl } from "@/portal/config";

const personalizedMentoringIcon = `${webIconsUrl}mentoring.png`;
const careerMappingIcon = `${webIconsUrl}career-path.png`;
const admissionServiceIcon = `${webIconsUrl}university_1.png`;
const postEnrollmentSupportIcon = `${webIconsUrl}clipboard_with_pencil.png `;

const steps = [
  {
    title: "Personalized Mentoring",
    text: 1,
    icon: personalizedMentoringIcon,
    defaultIcon: personalizedMentoringIcon,
    category: "personalized",
  },
  {
    title: "Career Mapping",
    text: 2,
    icon: careerMappingIcon,
    defaultIcon: careerMappingIcon,
    category: "career",
  },
  {
    title: "Admission Service",
    text: 3,
    icon: admissionServiceIcon,
    defaultIcon: admissionServiceIcon,
    category: "admission",
  },
  {
    title: "Post Enrollment Support",
    text: 4,
    icon: postEnrollmentSupportIcon,
    defaultIcon: postEnrollmentSupportIcon,
    category: "post",
  },
];

function Connector({ width, startX, endX }) {
  const drop = 40;
  const height = 96;
  const endY = height - 8;
  const sameColumn = Math.abs(startX - endX) < 16;
  const d = sameColumn
    ? `M ${startX} 1 V ${endY}`
    : `M ${startX} 1 V ${drop} H ${endX} V ${endY}`;

  return (
    <Box aria-hidden sx={{ width: "100%", height, pointerEvents: "none" }}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        <path
          d={d}
          fill="none"
          stroke="#00999E"
          strokeWidth="1.25"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray="8 4"
        />
        <polyline
          points={`${endX - 4},${endY - 2} ${endX},${height - 4} ${endX + 4},${endY - 1}`}
          fill="none"
          stroke="#00999E"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}

const Abroad = () => {
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get("category");
  const urlStatus = searchParams.get("status");

  const theme = useTheme();
  const navigate = useNavigate();
  const [hoveredStep, setHoveredStep] = useState(null);
  const [popup, setPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || null);
  const [categoryAbout, setCategoryAbout] = useState({
    title: "",
    actionType: "",
    category: "",
  });

  const trackRef = useRef(null);
  const buttonRefs = useRef({});
  const [connector, setConnector] = useState(null);

  const handleBack = () => navigate("/dashboard/admission");

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const button = buttonRefs.current[selectedCategory];
      if (!selectedCategory || !track || !button) {
        setConnector(null);
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      const next = {
        width: Math.round(trackRect.width),
        startX: Math.round(
          buttonRect.left + buttonRect.width / 2 - trackRect.left,
        ),
        endX: Math.round(trackRect.width / 2),
      };

      setConnector((current) =>
        current &&
        current.width === next.width &&
        current.startX === next.startX &&
        current.endX === next.endX
          ? current
          : next,
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [selectedCategory]);

  const handleButtonClick = (category) => {
    navigate(`/dashboard/studyabroad?category=${category}`);
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 3, md: 5 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 44,
            mb: { xs: 4, md: 6 },
          }}
        >
          <Button
            onClick={handleBack}
            variant="contained"
            startIcon={<NavigateBeforeRoundedIcon fontSize="small" />}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#00999E",
              color: "#ffffff",
              "&:hover": {
                color: "#00999E",
                backgroundColor: "#f0f0f0",
              },
              fontWeight: 600,
              borderRadius: "8px",
              textTransform: "none",
              px: 2,
            }}
          >
            Back
          </Button>

          <Header
            color="#00999e"
            textAlign="center"
            content="Track Your Study Abroad Journey"
            sx={{ width: "100%", px: { xs: 9, sm: 14 } }}
          />
        </Box>

        <Box ref={trackRef}>
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {steps.map((item) => {
            const isActive =
              selectedCategory === item.category || hoveredStep === item.text;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={item.category}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 280,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Card
                    onMouseEnter={() => setHoveredStep(item.text)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className="pseudo-partial-border"
                    sx={{
                      width: "100%",
                      minHeight: 220,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      backgroundColor: isActive ? "#00999E" : "#fff",
                      color: isActive ? "#fff" : "#181818",
                      textAlign: "center",
                      boxShadow: isActive
                        ? "0 10px 24px rgba(0, 153, 158, 0.22)"
                        : "0 4px 20px rgba(0, 0, 0, 0.06)",
                      transition: "background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
                      px: 2.5,
                      py: 3,
                      ...(isActive && {
                        "&::before, &::after": {
                          borderColor: "#fff",
                        },
                      }),
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        height: 32,
                        width: 32,
                        position: "absolute",
                        top: 14,
                        right: 14,
                        borderRadius: "50%",
                        backgroundColor: isActive ? "#fff" : "#E6F6F6",
                        border: "1px solid",
                        borderColor: isActive ? "#fff" : "#00999E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 700, color: "#00999E", lineHeight: 1 }}
                      >
                        {item.text}
                      </Typography>
                    </Paper>

                    <Box
                      sx={{
                        mb: 2,
                        p: "15px",
                        borderRadius: "50%",
                        backgroundColor: isActive ? "#fff" : "#00999E",
                        borderColor: isActive ? "#fff" : "#00999E",
                        border: `1px solid ${isActive ? "#fff" : "#00999E"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      <Box
                        component="img"
                        src={isActive ? item.icon : item.defaultIcon}
                        alt=""
                        sx={{
                          height: 60,
                          width: 60,
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        lineHeight: 1.3,
                        letterSpacing: "0.01em",
                        color: isActive ? "#fff" : "#00999E",
                        minHeight: 44,
                        px: 1,
                        transition: "color 0.2s ease",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Card>

                  <Button
                    ref={(node) => {
                      buttonRefs.current[item.category] = node;
                    }}
                    onClick={() => handleButtonClick(item.category)}
                    variant="contained"
                    aria-expanded={selectedCategory === item.category}
                    endIcon={
                      selectedCategory === item.category ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )
                    }
                    sx={{
                      mt: 2,
                      minWidth: 150,
                      height: 40,
                      borderRadius: "8px",
                      textTransform: "none",
                      fontWeight: 600,
                      backgroundColor: "#00999E",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#007f80",
                        boxShadow: "none",
                      },
                    }}
                  >
                    View More
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {connector && (
          <Connector
            width={connector.width}
            startX={connector.startX}
            endX={connector.endX}
          />
        )}
        </Box>

        {selectedCategory && (
          <Box>
            {selectedCategory === "post" ? (
              <PostEnrollmentForm />
            ) : (
              <Second
                theme={theme}
                popup={popup}
                setPopup={setPopup}
                categoryAbout={categoryAbout}
                setCategoryAbout={setCategoryAbout}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                urlStatus={urlStatus}
              />
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Abroad;
