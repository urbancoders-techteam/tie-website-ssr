// @ts-nocheck
import React from "react";
import {
  Box,
  Typography,
  Paper,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import WrongIcon from "../../../../asset/Wrong_abroad.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomError = ({ title, description, Errortitle }) => {
  const screenFor = createTheme({
    breakPoint: {
      xs: 0,
      sm: 600,
    },
  });
  const isSmallScreen = useMediaQuery(screenFor.breakpoints.down("sm"));
  return (
    <Paper
    elevation={4}
    sx={{
      padding: { xs: "1rem", sm: "2rem", md: "3rem" }, // Adjust padding for all breakpoints
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack items vertically on small screens
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: { xs: 0, sm: 3 },
          marginBottom: { xs: "1rem", sm: 0 },
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#00999E",
            color: "white",
            padding: { xs: "2rem", sm: "3rem", md: "3rem 2rem" },
            borderRadius: 5,
            marginRight: { xs: 2, sm: 3 },
          }}
        >
          {title}
        </Box>
        <Box sx={{ color: "#00999E" }}>
          {isSmallScreen ? (
            <KeyboardArrowDownIcon
              sx={{
                color: "#00999E",
                fontSize: "30px",
                mx: 2,
                mt: 3,
              }}
            />
          ) : (
            <ArrowForwardIosIcon
              sx={{
                color: "#00999E",
                fontSize: "20px",
                mx: 2,
              }}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "662px", md: "700px" },
          padding: { xs: "30px 15px", sm: "40px", md: "50px" },
          borderRadius: "10px",
          backgroundColor: "#E2FEFF",
          margin: "0 auto",
          border: "1px solid #ccc",
        }}
      >
        <Box
          sx={{
            padding: { xs: 2, sm: "20px", md: "40px 20px" },
            borderRadius: "20px",
            border: "1px solid #ccc",
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "8px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "36px" },
              fontWeight: "bold",
              color: "#FF0000",
            }}
          >
            <img src={WrongIcon} alt="wrong" style={{ maxWidth: "100%" }} />
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "24px" },
              fontWeight: "bold",
              color: "#595959",
            }}
          >
            {Errortitle}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              color: "#0A0707",
              display: "flex",
              flexWrap: "wrap",
              flex: 1,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Paper>
  );
};

export default CustomError;
