// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Box, Button, Icon, Typography } from "@mui/material";
import { useNavigate } from "@/portal/navigation";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import default_profileImg from "../../asset/default_profileImg.jpeg";
import axios from "axios";

// Same points the API awards. A stage total is just the sum of its tasks.
const STEPS = [
  { key: "counselling", name: "Counselling", short: "Counselling", stage: "Mentoring", weight: 10 },
  { key: "profileBuilding", name: "Profile building", short: "Profile", stage: "Mentoring", weight: 10 },
  { key: "psychometric", name: "Psychometric test", short: "Psychometric", stage: "Mentoring", weight: 5 },
  { key: "countries", name: "Countries", short: "Countries", stage: "Career", weight: 10 },
  { key: "courses", name: "Courses", short: "Courses", stage: "Career", weight: 10 },
  { key: "universities", name: "Universities", short: "Universities", stage: "Career", weight: 10 },
  { key: "testPreparation", name: "Test preparation", short: "Test prep", stage: "Admission", weight: 10 },
  { key: "lorSopEssay", name: "LORs, essays and SOPs", short: "SOP / LOR", stage: "Admission", weight: 10 },
  { key: "application", name: "Scholarship", short: "Scholarship", stage: "Admission", weight: 10 },
  { key: "educationLoanSupport", name: "Education loan", short: "Loan", stage: "Enrollment", weight: 5 },
  { key: "visaSupportAndTravel", name: "Visa, travel and forex", short: "Visa", stage: "Enrollment", weight: 5 },
  { key: "accommodationSupport", name: "Accommodation", short: "Stay", stage: "Enrollment", weight: 5 },
];

const STAGE_BANDS = [
  { x1: "Counselling", x2: "Psychometric", label: "Mentoring", share: "25%", fill: "#E7F8F8", accent: "#00999E" },
  { x1: "Countries", x2: "Universities", label: "Career", share: "30%", fill: "#F4F7F8", accent: "#3D7A8C" },
  { x1: "Test prep", x2: "Scholarship", label: "Admission", share: "30%", fill: "#FFF6EE", accent: "#E07A2F" },
  { x1: "Loan", x2: "Stay", label: "Enrollment", share: "15%", fill: "#F6F3FA", accent: "#6E5AA6" },
];

function buildJourney(data) {
  let plan = 0;
  let reached = 0;

  const steps = STEPS.map((step) => {
    plan += step.weight;
    const raw = data?.[step.key];
    const status = !raw || raw === "loading..." ? "Awaiting Action" : raw;
    if (status === "Completed") reached += step.weight;
    return { ...step, status, plan, achieved: reached };
  });

  return [
    {
      key: "start",
      name: "Start",
      short: "Start",
      stage: "Start",
      weight: 0,
      plan: 0,
      achieved: 0,
      status: "Completed",
    },
    ...steps,
  ];
}

function JourneyDot({ cx, cy, payload }) {
  if (cx == null || cy == null) return null;
  if (payload?.status === "In Progress") {
    return (
      <g>
        <circle cx={cx} cy={cy} r={11} fill="#F08A24" opacity={0.18} />
        <circle cx={cx} cy={cy} r={5.5} fill="#F08A24" stroke="#ffffff" strokeWidth={2.5} />
      </g>
    );
  }
  if (payload?.status === "Completed" && payload.weight > 0) {
    return (
      <circle cx={cx} cy={cy} r={5} fill="#00999E" stroke="#ffffff" strokeWidth={2.5} />
    );
  }
  return null;
}

function PlanDot({ cx, cy, payload }) {
  if (cx == null || cy == null) return null;
  if (payload?.status === "Completed" || payload?.status === "In Progress") return null;
  return (
    <circle cx={cx} cy={cy} r={3.5} fill="#ffffff" stroke="#C5D0D6" strokeWidth={2} />
  );
}

function JourneyTooltip({ active, payload }) {
  const row = payload?.[0]?.payload;
  if (!active || !row) return null;
  const accent =
    row.status === "Completed"
      ? "#00999E"
      : row.status === "In Progress"
        ? "#F08A24"
        : "#C5D0D6";
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        border: "1px solid #E6EBEF",
        borderLeft: `3px solid ${accent}`,
        borderRadius: "12px",
        px: 1.5,
        py: 1.1,
        boxShadow: "0 12px 32px rgba(28, 43, 51, 0.12)",
        minWidth: 180,
      }}
    >
      <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#1C2B33" }}>
        {row.name}
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#5C6B73", mt: 0.25 }}>
        {row.stage === "Start" ? row.status : `${row.stage} · ${row.status}`}
      </Typography>
      {row.weight > 0 && (
        <Typography sx={{ fontSize: "12px", color: "#1C2B33", mt: 0.75, fontWeight: 600 }}>
          +{row.weight}% · {row.plan}% of the journey
        </Typography>
      )}
    </Box>
  );
}

function ProgressChart({ chartData, isLoading }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [isenrolled, setIsEnrolled] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState("pending");
  const [profileImage, setProfileImage] = useState("");

  const token = sessionStorage.getItem("authToken");

  const handleBack = () => {
    navigate(-1);
  };

  // -------------------------------
  // UPDATED MILESTONES (Backend Driven)
  // -------------------------------
  const journey = buildJourney(chartData);
  const score = journey[journey.length - 1]?.achieved || 0;
  const completedSteps = journey.filter(
    (step) => step.status === "Completed" && step.weight > 0,
  ).length;

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}student/get-student-web`,
          {
            headers: {
              Authorization: token,
            },
          },
        );
        const data = response.data.data;

        setIsEnrolled(data.isenrolled);
        setEnrollmentStatus(data.enrollmentStatus || "");
        setProfileImage(data.image || default_profileImg);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [token]);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        border: "1px solid #E4EEEF",
        borderRadius: "20px",
        boxShadow: "0 16px 40px rgba(0, 124, 128, 0.07)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 3 },
          pt: { xs: 2, md: 2.5 },
          pb: 2,
          background: "linear-gradient(180deg, #F3FBFB 0%, #FFFFFF 72%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, minWidth: 0 }}>
          <Button
            onClick={handleBack}
            startIcon={<NavigateBeforeRoundedIcon />}
            sx={{
              bgcolor: "#00999E",
              color: "#ffffff",
              "&:hover": { bgcolor: "#007C80" },
              fontWeight: 700,
              borderRadius: "10px",
              minWidth: { xs: "80px", md: "100px" },
              textTransform: "none",
              boxShadow: "0 8px 16px rgba(0, 153, 158, 0.22)",
            }}
          >
            Back
          </Button>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "#1C2B33" }}>
              My progress
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#5C6B73" }}>
              {isLoading
                ? "Track your study abroad journey"
                : `${completedSteps} of ${STEPS.length} steps completed`}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            px: 2,
            py: 1.15,
            borderRadius: "16px",
            background: "linear-gradient(135deg, #00999E 0%, #007C80 100%)",
            color: "#ffffff",
            minWidth: 112,
            boxShadow: "0 10px 20px rgba(0, 124, 128, 0.22)",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: 700, lineHeight: 1 }}>
            {score}%
          </Typography>
          <Typography sx={{ fontSize: "11px", opacity: 0.85, mt: 0.4 }}>
            of the journey
          </Typography>
        </Box>
      </Box>

      {isLoading ? (
        <Box sx={{ py: 6 }}>
          <CustomCircularProgress />
        </Box>
      ) : (
        <Box sx={{ px: { xs: 1.5, md: 2.5 }, pb: { xs: 2, md: 2.5 } }}>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
            {STAGE_BANDS.map((band) => (
              <Box
                key={band.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: 1.25,
                  py: 0.55,
                  borderRadius: "999px",
                  bgcolor: band.fill,
                  border: "1px solid #E6EBEF",
                }}
              >
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: band.accent }} />
                <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#1C2B33" }}>
                  {band.label}
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#5C6B73" }}>{band.share}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ width: "100%", height: 360 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={journey}
                margin={{ top: 18, right: 8, left: 0, bottom: 4 }}
              >
                <defs>
                  <linearGradient id="journeyFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00999E" stopOpacity={0.42} />
                    <stop offset="55%" stopColor="#00999E" stopOpacity={0.12} />
                    <stop offset="100%" stopColor="#00999E" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                {STAGE_BANDS.map((band) => (
                  <ReferenceArea
                    key={band.label}
                    x1={band.x1}
                    x2={band.x2}
                    fill={band.fill}
                    fillOpacity={0.9}
                  />
                ))}
                <CartesianGrid vertical={false} stroke="#E7EEF0" />
                <XAxis
                  dataKey="short"
                  interval={0}
                  angle={-38}
                  textAnchor="end"
                  height={72}
                  tick={{ fill: "#5C6B73", fontSize: 11, fontFamily: "Nunito, sans-serif" }}
                  axisLine={{ stroke: "#E6EBEF" }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fill: "#8A979E", fontSize: 12, fontFamily: "Nunito, sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                  width={44}
                />
                <Tooltip
                  content={<JourneyTooltip />}
                  cursor={{ stroke: "#00999E", strokeOpacity: 0.18, strokeWidth: 1 }}
                />
                <Line
                  type="stepAfter"
                  dataKey="plan"
                  stroke="#C5D0D6"
                  strokeDasharray="4 5"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  dot={<PlanDot />}
                  activeDot={false}
                  isAnimationActive={false}
                />
                <Area
                  type="stepAfter"
                  dataKey="achieved"
                  stroke="#00999E"
                  strokeWidth={3}
                  strokeLinejoin="round"
                  fill="url(#journeyFill)"
                  connectNulls={false}
                  dot={<JourneyDot />}
                  activeDot={{ r: 7, fill: "#007C80", stroke: "#ffffff", strokeWidth: 3 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 0.5 }}>
            {[
              { label: "Completed", mark: { width: 16, height: 3, bgcolor: "#00999E", borderRadius: 2 } },
              { label: "In progress", mark: { width: 8, height: 8, borderRadius: "50%", bgcolor: "#F08A24" } },
              { label: "Still ahead", mark: { width: 16, height: 0, borderTop: "2px dashed #C5D0D6" } },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: 1.1,
                  py: 0.45,
                  borderRadius: "999px",
                  bgcolor: "#F7FAFA",
                }}
              >
                <Box sx={item.mark} />
                <Typography sx={{ fontSize: "12px", color: "#5C6B73", fontWeight: 600 }}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ProgressChart;
