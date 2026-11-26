// @ts-nocheck
import { Box, Tooltip, Typography, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import Third from "./Third";
import { useNavigate } from "@/portal/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getPsychometricTestStatusAsync } from "@/portal/redux/services/psycometricServices";
import { getStudyAbroadStatusAsync } from "@/portal/redux/services/studyAbroadServices";

const titleStatusMap = {
  Counselling: "counselling",
  "Profile Building": "profile",
  "Psychometric Test": "psychometric",
  Career: "career",
  "Test Preparation": "test",
  "LORs/ Essays/ SOPs": "lor",
  Scholarship: "scholarship",
  "Education Loan": "educationloan",
  "VISA/TRAVEL & FOREX": "visa",
  ACCOMMODATION: "accommodation",
};

const statusTitleMap = {
  counselling: "Counselling",
  profile: "Profile Building",
  psychometric: "Psychometric Test",
  career: "Career",
  test: "Test Preparation",
  lor: "LORs/ Essays/ SOPs",
  scholarship: "Scholarship",
  educationloan: "Education Loan",
  visa: "VISA/TRAVEL & FOREX",
  accommodation: "ACCOMMODATION",
};

function statusColors(actionType) {
  const dot =
    {
      "Awaiting Action": "#F67A07",
      Completed: "#20CF10",
      "Not Applicable": "#1C1C1C",
      "In Progress": "#F5D90A",
    }[actionType] || "#ffffff";

  const ring = actionType === "Not Taken" ? "#828282" : "#ffffff";
  return { dot, ring };
}

function DropLine() {
  return (
    <Box
      aria-hidden
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 1,
      }}
    >
      <svg width="2" height="36" viewBox="0 0 2 36">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="36"
          stroke="#00999E"
          strokeWidth="1.25"
          strokeDasharray="5 4"
        />
      </svg>
      <KeyboardArrowDownIcon sx={{ color: "#00999E", fontSize: 18, mt: -0.5 }} />
    </Box>
  );
}

export default function Second({
  setCategoryAbout,
  selectedCategory,
  categoryAbout,
  urlStatus,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stackSteps = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [show, setShow] = useState(false);

  const { getPsychometricTestStatus } = useSelector(
    (state) => state.psychometric,
  );
  const psychometricStatus = getPsychometricTestStatus?.psychometricTestStatus;
  const { dashboardData, isLoading } = useSelector(
    (state) => state.studyAbroad,
  );

  const allData = {
    personalized: [
      {
        title: "Counselling",
        actionType: isLoading ? "loading..." : dashboardData?.counselling,
      },
      {
        title: "Profile Building",
        actionType: isLoading ? "loading..." : dashboardData?.profileBuilding,
      },
      {
        title: "Psychometric Test",
        actionType: isLoading ? "loading..." : dashboardData?.psychometric,
        isApproved: !psychometricStatus,
      },
    ],
    career: [
      {
        title: "Career",
        actionType: isLoading ? "loading..." : dashboardData?.universities,
      },
    ],
    admission: [
      {
        title: "Test Preparation",
        actionType: isLoading ? "loading..." : dashboardData?.testPreparation,
      },
      {
        title: "LORs/ Essays/ SOPs",
        actionType: isLoading ? "loading..." : dashboardData?.lorSopEssay,
      },
      {
        title: "Scholarship",
        actionType: isLoading ? "loading..." : dashboardData?.application,
      },
    ],
    post: [
      {
        title: "Education Loan",
        actionType: isLoading
          ? "loading..."
          : dashboardData?.educationLoanSupport,
      },
      {
        title: "VISA/TRAVEL & FOREX",
        actionType: isLoading
          ? "loading..."
          : dashboardData?.visaSupportAndTravel,
      },
      {
        title: "ACCOMMODATION",
        actionType: isLoading
          ? "loading..."
          : dashboardData?.accommodationSupport,
      },
    ],
  };

  const steps = allData[selectedCategory] || [];

  const handleChangeProcess = (e, title, actionType) => {
    if (e) e.preventDefault();

    navigate(
      `/dashboard/studyabroad?category=${selectedCategory}&status=${titleStatusMap[title]}`,
    );

    setCategoryAbout({
      title,
      actionType,
      category: selectedCategory,
    });
    setShow(true);
  };

  useEffect(() => {
    dispatch(getStudyAbroadStatusAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPsychometricTestStatusAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!selectedCategory || !steps.length) return;

    const matchedItem = steps.find(
      (item) => item.title === statusTitleMap[urlStatus],
    );
    const defaultItem = matchedItem || steps[0];

    handleChangeProcess(null, defaultItem.title, defaultItem.actionType);
    // Select the step from the URL once the category is known.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, urlStatus]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1.5, md: 0 },
        }}
      >
        {steps.map((item, index) => {
          const isActive = show && item.title === categoryAbout.title;
          const { dot, ring } = statusColors(item.actionType);
          const isLast = index === steps.length - 1;

          return (
            <Box
              key={item.title}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                width: { xs: "100%", md: "auto" },
                maxWidth: { xs: 280, md: "none" },
              }}
            >
              <Box sx={{ position: "relative", width: { xs: "100%", md: 200 } }}>
              <Box
                role="button"
                tabIndex={item.isApproved ? -1 : 0}
                onClick={(e) =>
                  handleChangeProcess(e, item.title, item.actionType)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleChangeProcess(e, item.title, item.actionType);
                  }
                }}
                sx={{
                  width: "100%",
                  minHeight: 132,
                  px: 2,
                  py: 2,
                  borderRadius: "12px",
                  backgroundColor: "#00999E",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  cursor: item.isApproved ? "default" : "pointer",
                  opacity: item.isApproved ? 0.5 : 1,
                  pointerEvents: item.isApproved ? "none" : "auto",
                  outline: isActive
                    ? "2px solid #00999E"
                    : "2px solid transparent",
                  outlineOffset: 4,
                  boxShadow: isActive
                    ? "0 8px 20px rgba(0, 153, 158, 0.22)"
                    : "none",
                }}
              >
                <Typography sx={{ fontSize: 14, fontWeight: 700, lineHeight: 1.35 }}>
                  {item.title}
                </Typography>
                <Tooltip title={item.actionType || ""} arrow placement="top">
                  <Box
                    sx={{
                      mt: 1.25,
                      px: 1,
                      py: 0.4,
                      maxWidth: "100%",
                      borderRadius: 999,
                      backgroundColor: "#B1FCFF",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        flexShrink: 0,
                        borderRadius: "50%",
                        backgroundColor: dot,
                        border: `2px solid ${ring}`,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#111",
                        fontSize: 12,
                        fontWeight: 600,
                        maxWidth: 110,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.actionType}
                    </Typography>
                  </Box>
                </Tooltip>
              </Box>
              {!stackSteps && isActive && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                  }}
                >
                  <DropLine />
                </Box>
              )}
              </Box>

              {!stackSteps && !isLast && (
                <ArrowForwardIosIcon
                  sx={{ color: "#00999E", fontSize: 16, mx: { md: 1.5, lg: 2.5 } }}
                />
              )}

              {stackSteps && isActive && (
                <Box sx={{ width: "100%", mt: 1 }}>
                  <DropLine />
                  <Third categoryAbout={categoryAbout} />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {!stackSteps && show && (
        <Box sx={{ mt: 7 }}>
          <Third categoryAbout={categoryAbout} />
        </Box>
      )}
    </Box>
  );
}
