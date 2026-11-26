// @ts-nocheck
import { Box, Paper, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CounsellingMentoringSection from "./CounsellingMentoringSection";
import ProfileBuildingForm from "./ProfileBuildingForm";
import PsychometricTestSection from "./PsychometricTestSection";

const shellSx = {
  display: { xs: "none", sm: "flex" },
  flexDirection: "column",
  padding: { xs: "10px", sm: "3rem" },
  margin: "auto",
  maxWidth: "100%",
  boxSizing: "border-box",
};

const innerPanelSx = {
  padding: { xs: "0px", sm: "32px" },
  borderRadius: "10px",
  backgroundColor: "#E2FEFF",
  border: "1px solid #ccc",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  flex: 2,
  width: "100%",
  boxSizing: "border-box",
};

const profileBuildingWrapSx = {
  width: "100%",
  padding: "16px",
  borderRadius: "20px",
  border: "1px solid #ccc",
  backgroundColor: "#FFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: 2,
  mx: "auto",
};

export default function PersonalizedMentoring({ title }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={4} sx={shellSx}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box sx={innerPanelSx}>
            <Box sx={{ textAlign: "center", mb: 2, p: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "20px", sm: "24px", md: "32px" },
                  fontWeight: "600",
                  color: "#00999E",
                }}
              >
                {title}
              </Typography>
            </Box>

            {title === "Profile Building" && (
              <Box sx={profileBuildingWrapSx}>
                <ProfileBuildingForm />
              </Box>
            )}

            {title === "Psychometric Test" && <PsychometricTestSection />}

            {title === "Counselling" && <CounsellingMentoringSection />}
          </Box>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
}
