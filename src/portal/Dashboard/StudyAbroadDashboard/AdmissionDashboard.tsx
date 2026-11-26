// @ts-nocheck
import { Box } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "@/portal/navigation";
import { getStudyAbroadStatusAsync } from "@/portal/redux/services/studyAbroadServices";
import ProgressChart from "./ProgressChart";
import StudyAbroadCard from "./StudyAbroadCard";

const STATUS_COLOR = {
  Completed: "#4ADF86",
  "In Progress": "#FF914D",
  "Not Applicable": "#333333",
  "Awaiting Action": "rgb(61, 144, 160)",
};

const CARD_SUBTITLE = "Information and usages of your current plan";

// Static description of the page. Status values come from the API at render time.
const SECTIONS = [
  {
    title: "PERSONALIZED MENTORING",
    navigateTo: "/dashboard/studyabroad?category=personalized&status=counselling",
    items: [
      { label: "Counselling", key: "counselling" },
      { label: "Profile Building", key: "profileBuilding" },
      { label: "Psychometric Test", key: "psychometric" },
    ],
  },
  {
    title: "Career Mapping",
    navigateTo: "/dashboard/studyabroad?category=career&status=countries",
    items: [
      { label: "Countries", key: "countries" },
      { label: "Courses", key: "courses" },
      { label: "Universities", key: "universities" },
    ],
  },
  {
    title: "Admission Service",
    navigateTo: "/dashboard/studyabroad?category=admission&status=test",
    items: [
      { label: "Test Preparation", key: "testPreparation" },
      { label: "LORs/ essays/ SOPs", key: "lorSopEssay" },
      { label: "Scholarship", key: "application" },
    ],
  },
  {
    title: "Post Enrollment Support",
    navigateTo: "/dashboard/studyabroad?category=post&status=education",
    items: [
      { label: "Education Loan", key: "educationLoanSupport" },
      { label: "VISA/IMMIGRATION/TRAVEL & FOREX", key: "visaSupportAndTravel" },
      { label: "ACCOMMODATION", key: "accommodationSupport" },
    ],
  },
];

function statusColor(status) {
  return STATUS_COLOR[status] || "#333333";
}

const AdmissionDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dashboardData, isLoading } = useSelector(
    (state) => state.studyAbroad,
  );

  useEffect(() => {
    dispatch(getStudyAbroadStatusAsync());
  }, [dispatch]);

  const sections = SECTIONS.map((section) => ({
    title: section.title,
    subtitle: CARD_SUBTITLE,
    navigateTo: section.navigateTo,
    statuses: section.items.map((item) => {
      const status = isLoading ? "loading..." : dashboardData?.[item.key];
      return { label: item.label, status, color: statusColor(status) };
    }),
  }));

  return (
    <Box sx={{  display: "flex", flexDirection: "column" }}>
      <ProgressChart chartData={dashboardData} isLoading={isLoading} />

      <Box marginTop="20px">
        <Grid container spacing={2}>
          {sections.map((section) => (
            <Grid item xs={12} sm={6} key={section.navigateTo}>
              <StudyAbroadCard
                data={section}
                onClick={() => navigate(section.navigateTo)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AdmissionDashboard;
