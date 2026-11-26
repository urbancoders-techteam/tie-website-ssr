// @ts-nocheck
import React from "react";
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import logo from "../../../asset/TIE_LOGO.png";
import { useLocation, useNavigate } from "@/portal/navigation";
import { Link as RouterLink } from "@/portal/navigation";
import { WEB_URL } from "@/portal/config";

// Centralized Nav Config
const navConfig = {
  default: [
    {
      title: "Dashboard",
      icon: <Icon icon="tdesign:dashboard-1" />,
      path: "home",
    },
    {
      title: "Support",
      icon: <Icon icon="ic:baseline-contact-phone" />,
      path: "support",
    },
    { title: "Order", icon: <Icon icon="ion:cart-outline" />, path: "order" },
    {
      title: "Community",
      icon: <Icon icon="heroicons-solid:user-group" />,
      path: "community",
    },
  ],
  studyAbroad: [
    {
      title: "Dashboard",
      icon: <Icon icon="tdesign:dashboard-1" />,
      path: "home",
    },
    {
      title: "Study Abroad Home",
      icon: <Icon icon="ion:home" />,
      path: "admission",
    },
    {
      title: "Document Management",
      icon: <Icon icon="mdi:file-document" />,
      path: "documentsverification",
    },
    {
      title: "Resource",
      icon: <Icon icon="grommet-icons:resources" />,
      path: "resources",
    },
    {
      title: "Support",
      icon: <Icon icon="ic:baseline-contact-phone" />,
      path: "support",
    },
    {
      title: "Order",
      icon: <Icon icon="ion:cart-outline" />,
      path: "order",
    },
    {
      title: "Community",
      icon: <Icon icon="heroicons-solid:user-group" />,
      path: "community",
    },
  ],
  testPrep: [
    {
      title: "Dashboard",
      icon: <Icon icon="tdesign:dashboard-1" />,
      path: "home",
    },
    {
      title: "Test Prep Home",
      icon: <Icon icon="ion:home" />,
      path: "test-prep",
    },

    {
      title: "Support",
      icon: <Icon icon="ic:baseline-contact-phone" />,
      path: "support",
    },
    {
      title: "Order",
      icon: <Icon icon="ion:cart-outline" />,
      path: "order",
    },
    {
      title: "Community",
      icon: <Icon icon="heroicons-solid:user-group" />,
      path: "community",
    },
  ],
  userBoard: [
    {
      title: "Dashboard",
      icon: <Icon icon="tdesign:dashboard-1" />,
      path: "home",
    },
    {
      title: "Test Prep Home",
      icon: <Icon icon="ion:home" />,
      path: "test-prep",
    },
    {
      title: "User Board",
      icon: <Icon icon="mingcute:black-board-2-line" />,
      path: "user-board",
    },
    {
      title: "Planner",
      icon: <Icon icon="streamline:class-lesson" />,
      path: "planner",
    },
    {
      title: "Learning Resources",
      icon: <Icon icon="grommet-icons:resources" />,
      path: "learningresources",
    },
    {
      title: "Test",
      icon: <Icon icon="heroicons:light-bulb" />,
      path: "mocktest",
    },
    {
      title: "Performance",
      icon: <Icon icon="game-icons:progression" />,
      path: "performance",
    },
    {
      title: "Support",
      icon: <Icon icon="ic:baseline-contact-phone" />,
      path: "support",
    },
    {
      title: "Order",
      icon: <Icon icon="ion:cart-outline" />,
      path: "order",
    },
    {
      title: "Community",
      icon: <Icon icon="heroicons-solid:user-group" />,
      path: "community",
    },
  ],
};

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine which nav config to use
  let navItems = navConfig.default;
  if (
    location.pathname.startsWith("/dashboard/admission") ||
    location.pathname.startsWith("/dashboard/studyabroad") ||
    location.pathname.startsWith("/dashboard/study-abroad-plan") ||
    location.pathname.startsWith("/dashboard/documentsverification") ||
    location.pathname.startsWith("/dashboard/resources")
  ) {
    navItems = navConfig.studyAbroad;
  }
  if (
    location.pathname.startsWith("/dashboard/user-board") ||
    location.pathname.startsWith("/dashboard/mocktest") ||
    location.pathname.startsWith("/dashboard/planner") ||
    location.pathname.startsWith("/dashboard/learningresources") ||
    location.pathname.startsWith("/dashboard/performance")
  ) {
    navItems = navConfig.userBoard;
  } else if (location.pathname.startsWith("/dashboard/test-prep")) {
    navItems = navConfig.testPrep;
  }

  const handleLogoClick = () => {
    sessionStorage.removeItem("courseId");
    sessionStorage.removeItem("courseName");
    sessionStorage.removeItem("readMoreClicked");
    navigate("/dashboard/home");
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        px: 1.5,
        py: 2,
      }}
    >
      <Link
        component={RouterLink}
        to={WEB_URL}
        sx={{
          display: "block",
          px: 1,
          py: 0.5,
          cursor: "pointer",
        }}
        onClick={handleLogoClick}
      >
        <img
          src={logo}
          alt="Taksheela Institute of Education"
          style={{ width: "168px", height: "auto", display: "block" }}
        />
      </Link>
      <Typography
        sx={{
          px: 1.5,
          mt: 2,
          mb: 1,
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "#8A979E",
        }}
      >
        STUDENT PORTAL
      </Typography>

      <List sx={{ p: 0, overflowY: "auto" }}>
        {navItems.map((item) => {
          const fullPath = `/dashboard/${item.path}`;

          const isExactMatch = location.pathname === fullPath;
          const isParentMatch =
            location.pathname.startsWith(fullPath + "/") &&
            !navItems.some((i) => {
              const iFull = `/dashboard/${i.path}`;
              return (
                iFull !== fullPath && location.pathname.startsWith(iFull + "/")
              );
            });

          const isSelected = isExactMatch || isParentMatch;

          return (
            <ListItem
              key={item.path}
              sx={{
                mb: 0.5,
                px: 1.5,
                py: 1.1,
                fontWeight: 500,
                backgroundColor: isSelected ? "#E5F6F6" : "transparent",
                color: isSelected ? "#007C80" : "#4E5D66",
                "&:hover": {
                  backgroundColor: isSelected ? "#E5F6F6" : "#F4F7F8",
                  color: "#007C80",
                },
                cursor: "pointer",
                borderRadius: "10px",
              }}
              onClick={() => navigate(fullPath)}
            >
              <ListItemIcon
                sx={{
                  minWidth: "auto",
                  mr: 1.25,
                  fontSize: "18px",
                  color: "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <Typography
                variant="inherit"
                sx={{ fontSize: "14px", fontWeight: isSelected ? 600 : 500 }}
              >
                {item.title}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default NavBar;
