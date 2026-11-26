// @ts-nocheck
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useNavigate } from "@/portal/navigation";
import Header from "@/portal/Component/content-component/Header";
import { ThemeProvider } from "styled-components";

const imageBaseUrl = process.env.REACT_APP_IMAGE_URL;
const bgImage = imageBaseUrl + "TestPrepDashboard/Frame 1686556186.png";

function CommunitySupportBanner() {
  const navigate = useNavigate();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleButtonClick = () => {
    navigate("joincommunity");
  };

  const handleCreatePosrButtonClick = () => {
    navigate("CreateCommunity");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          minHeight: isSmallScreen ? "60vh" : "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container sx={{ alignItems: "center" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Header */}

            <Box mb={isSmallScreen ? 2 : 4} px={isSmallScreen ? 2 : 4}>
              <Header
                content="Welcome to the Taksheela Community Forum !"
                color="#ffffff"
                alignItems="center"
              />
            </Box>

            {/* Description Box */}
            <Box
              sx={{
                backgroundColor: "rgba(0, 153, 158, 0.8)",
                width: "100%",
                paddingX: isSmallScreen ? "10px" : "140px",
                paddingY: isSmallScreen ? "10px" : "40px",
                textAlign: "start",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
                  fontWeight: 550,
                  lineHeight: 1.2,
                }}
              >
                This is your go-to place for all discussions, questions, and
                doubts related to studying and living abroad. Whether you're
                seeking advice on the UK Skilled Worker Visa, tips for
                university applications, or simply want to connect with fellow
                students, our forum is here to help.
              </Typography>
            </Box>

            {/* {/ Join Box /} */}
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                width: "100%",
                padding: isSmallScreen ? "10px" : "20px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: { xs: 20, sm: 30, md: 40, lg: 50 },
                  fontWeight: 550,
                  lineHeight: 1.2,
                }}
              >
                Join the conversation
              </Typography>
            </Box>

            {/* {/ Content List /} */}
            <Box
              sx={{
                backgroundColor: "rgba(0, 153, 158, 0.8)",
                width: "100%",
                paddingX: isSmallScreen ? "10px" : "140px",
                paddingY: isSmallScreen ? "10px" : "40px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
                  fontWeight: 550,
                  lineHeight: 1.5,
                }}
              >
                <ol style={{ padding: "0 20px", textAlign: "left" }}>
                  <li>
                    Ask Questions: Post your queries about visa processes,
                    university life, and accommodation.
                  </li>
                  <li>Share Experiences: Share your journey to help others.</li>
                  <li>
                    Get Expert Advice: Expert consultants are here to help.
                  </li>
                  <li>Connect with Peers: Build connections with students.</li>
                </ol>
              </Typography>
            </Box>

            {/* {/ Buttons /} */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                marginTop: 3,
              }}
            >
              <Button
                // href={"community/joincommunity"}
                onClick={handleButtonClick}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  border: "2px solid white",
                  borderRadius: "30px",
                  padding: { xs: "5px 10px", sm: "8px 20px" },
                  fontSize: "14px",
                }}
              >
                Join The Taksheela Community
              </Button>

              <Button
                onClick={handleCreatePosrButtonClick}
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "2px solid white",
                  borderRadius: "30px",
                  padding: { xs: "5px 10px", sm: "8px 20px" },
                  fontSize: "14px",
                }}
              >
                Create Post
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default CommunitySupportBanner;
