// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { Helmet } from "@/portal/helmet";
import { Link as RouterLink, useLocation, useNavigate } from "@/portal/navigation";
import { WEB_URL } from "@/portal/config";
import logo from "../../asset/dashboard-logo.png";
import Login from "./Login";

const highlights = [
  "Counselling that matches courses to your profile",
  "Application updates in one student portal",
  "Test prep resources when you are ready",
];

const LoginSignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getPathType = (pathname) =>
    pathname === "/signup" ? "register" : "login";

  const [type, setType] = useState(getPathType(location.pathname));
  const isLogin = type === "login";

  useEffect(() => {
    setType(getPathType(location.pathname));
  }, [location.pathname]);

  const handleLoginClick = () => {
    setType("login");
    navigate("/login", { state: location.state });
  };

  const handleRegisterClick = () => {
    setType("register");
    navigate("/signup", { state: location.state });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        bgcolor: "#f3f6f6",
      }}
    >
      <Helmet>
        <title>
          {isLogin ? "Student Portal Login" : "Create Account"} | Taksheela
          Institute of Education
        </title>
        <meta
          name="description"
          content="Access the Taksheela student portal for seamless login, course updates, study abroad guidance, test prep resources, student support, and more. Login now!"
        />
      </Helmet>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flex: "1 1 46%",
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          background:
            "linear-gradient(165deg, #042f32 0%, #0a6b6f 52%, #00999E 100%)",
          flexDirection: "column",
          justifyContent: "space-between",
          px: { md: 6, lg: 8 },
          py: 6,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            top: -120,
            right: -80,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
            bottom: -80,
            left: -60,
          }}
        />

        <Link
          component={RouterLink}
          to={WEB_URL}
          sx={{ position: "relative", width: 148, lineHeight: 0 }}
        >
          <Box
            component="img"
            src={logo}
            alt="Taksheela Institute of Education"
            sx={{
              width: "100%",
              bgcolor: "#fff",
              borderRadius: "10px",
              p: 1,
            }}
          />
        </Link>

        <Box sx={{ position: "relative", maxWidth: 460 }}>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.78)",
              mb: 2,
            }}
          >
            Student portal
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { md: "2.4rem", lg: "2.75rem" },
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              mb: 2,
            }}
          >
            We are glad to be part of your journey.
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.86)",
              mb: 4,
            }}
          >
            Study abroad guidance, course updates, and test prep — kept together
            so you can move from shortlist to offer without losing the thread.
          </Typography>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
            {highlights.map((item) => (
              <Box
                component="li"
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  mb: 1.75,
                  fontSize: 15,
                  lineHeight: 1.5,
                }}
              >
                <Box
                  sx={{
                    mt: "7px",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#b8f3f4",
                    flexShrink: 0,
                  }}
                />
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        <Typography
          sx={{ position: "relative", fontSize: 13, color: "rgba(255,255,255,0.7)" }}
        >
          Taksheela Institute of Education
        </Typography>
      </Box>

      <Box
        sx={{
          flex: "1 1 54%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2.5, sm: 4 },
          py: { xs: 4, sm: 6 },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 440 }}>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Link component={RouterLink} to={WEB_URL} sx={{ width: 140, lineHeight: 0 }}>
              <Box
                component="img"
                src={logo}
                alt="Taksheela Institute of Education"
                sx={{ width: "100%" }}
              />
            </Link>
          </Box>

          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00999E",
              mb: 1,
            }}
          >
            {isLogin ? "Sign in" : "Get started"}
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.85rem", sm: "2.1rem" },
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#102224",
              lineHeight: 1.2,
              m: 0,
            }}
          >
            {isLogin ? "Welcome back" : "Create your account"}
          </Typography>
          <Typography sx={{ mt: 1.25, mb: 3, color: "#5c6f72", fontSize: 15, lineHeight: 1.6 }}>
            {isLogin
              ? "Sign in to pick up counselling, applications, and course updates."
              : "Register once to use the student portal for guidance and test prep."}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0.5,
              p: 0.5,
              mb: 3,
              bgcolor: "#e7f4f4",
              borderRadius: "12px",
            }}
          >
            <Button
              onClick={handleLoginClick}
              disableElevation
              variant={isLogin ? "contained" : "text"}
              sx={toggleButtonSx(isLogin)}
            >
              Login
            </Button>
            <Button
              onClick={handleRegisterClick}
              disableElevation
              variant={!isLogin ? "contained" : "text"}
              sx={toggleButtonSx(!isLogin)}
            >
              Register
            </Button>
          </Box>

          <Login type={type} />
        </Box>
      </Box>
    </Box>
  );
};

const toggleButtonSx = (active) => ({
  borderRadius: "10px",
  py: 1.1,
  textTransform: "none",
  fontWeight: 600,
  fontSize: 15,
  boxShadow: "none",
  backgroundColor: active ? "#00999E" : "transparent",
  color: active ? "#fff" : "#3d5558",
  "&:hover": {
    backgroundColor: active ? "#007f83" : "rgba(0,153,158,0.08)",
    boxShadow: "none",
  },
  "&:focus": {
    outline: "none",
  },
});

export default LoginSignUp;
