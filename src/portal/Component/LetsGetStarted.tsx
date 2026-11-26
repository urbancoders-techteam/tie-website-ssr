// @ts-nocheck
import React from "react";
import {
  Button,
  Stack,
  useMediaQuery,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "@/portal/navigation";

const LetsGetStarted = ({ top, bottom, marginBottom , marginTop }) => {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isXLargeScreen = useMediaQuery((theme) => theme.breakpoints.down("xl"));

  return (
    <Container maxWidth={isXLargeScreen ? "lg" : "xl"} sx={{ mb: marginBottom ?? "60px" , mt: marginTop }}>
      <Stack
        sx={{
          // height: { xs: "70px", sm: "50px", md: "50px", lg: "80px" },
          // backgroundColor: "#E0F2F3",
          background:
            "linear-gradient(to right, rgba(0, 153, 158, 0.33), rgba(0, 153, 158, 0.20))",
          padding: { xm: "15px", md: "20px", xs: "15px", lg: "30px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px",
          gap: { xm: "2rem", md: "2rem", xs: "2rem", lg: "2rem" },
          marginLeft: { xs: "0px", sm: "40px", md: "40px", lg: "40px" },
          marginRight: { xs: "0px", sm: "40px", md: "40px", lg: "40px" },
          position: "relative",
          top: { top },
          bottom: { bottom },
          flexDirection: { xs: "col", sm: "row", md: "row", lg: "row" },
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "22px", md: "24px", lg: "35px" },
              fontWeight: 500,
              paddingLeft: "15px",
              textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
            }}
          >
            So, what are you waiting for?
          </Typography>
        </Stack>
        <Stack>
          <Link to="/contact" className="custom-link">
            <Button
              variant="contained"
              fullWidth
              sx={{
                "&:hover": {
                  bgcolor: "#00999E",
                },
                backgroundColor: "#00999e",
                width: { xm: "280px", md: "400px", xs: "200px", lg: "420px" },
                height: { sm: "40px", md: "45px", xs: "30px", lg: "50px" },
                fontWeight: 700,
                marginTop: isSmScreen ? "-25px" : "0px",
                fontSize: { xm: "10px", md: "15px", xs: "13px", lg: "15px" },
              }}
            >
              Let's Get Started
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default LetsGetStarted;
