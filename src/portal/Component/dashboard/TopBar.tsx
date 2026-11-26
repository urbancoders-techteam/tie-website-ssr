// @ts-nocheck
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "@/portal/navigation";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "@/portal/navigation";
import logo from "../../asset/TIE_LOGO.png";
// import SearchIcon from "@mui/icons-material/Search";
import { Icon } from "@iconify/react";
import { axiosInstance } from "@/portal/utils/axiosConfig";
import { WEB_URL } from "@/portal/config";
import DashboardBreadcrumbs from "@/portal/Component/dashboard/DashboardBreadcrumbs";

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
      title: "Mock Test",
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

const TopBar = () => {
  const navigate = useNavigate();
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const readMoreClicked = sessionStorage.getItem("readMoreClicked");
    if (readMoreClicked) {
    }
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  useEffect(() => {
    const cachedImage = sessionStorage.getItem("profileImg");
    if (cachedImage) setProfileImage(cachedImage);

    const fetchUserData = async () => {
      const token = sessionStorage.getItem("authToken");
      if (!token) return;
      try {
        const response = await axiosInstance.get("student/get-student-web", {
          skipGlobalError: true,
        });
        const data = response.data.data;
        const image = data?.image || "";
        setProfileImage(image);
        if (image) sessionStorage.setItem("profileImg", image);
        else sessionStorage.removeItem("profileImg");
      } catch (error) {
        if (error?.response?.status === 401) return;
        // Keep the cached avatar. The header can render without a fresh profile photo.
      }
    };

    fetchUserData();
  }, [location.pathname]);
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleLogout = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoClick = () => {
    sessionStorage.removeItem("courseId");
    sessionStorage.removeItem("courseName");
    sessionStorage.removeItem("readMoreClicked");

    // navigate("/dashboard/home");
  };

  const confirmLogout = () => {
    sessionStorage.clear();

    setLogoutDialogOpen(false);
    navigate("/login");
  };

  const username = sessionStorage.getItem("username");

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

  return (
    <Box
      sx={{
        width: "100%",
        height: 68,
        bgcolor: "#ffffff",
        borderBottom: "1px solid #E6EBEF",
        px: { xs: 1.5, md: 3 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 0 }}>
                <Box sx={{ display: { md: "none", xs: "block" } }}>
            <Box sx={{ display: "flex", flexDirection: "row", color: "#1C2B33" }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerClose}
              ModalProps={{ keepMounted: true }}
              sx={{
                "& .MuiDrawer-paper": {
                  width: { sm: 300, xs: "78%" },
                  px: 1.5,
                  py: 1,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Link
                  component={RouterLink}
                  to={WEB_URL}
                  onClick={handleLogoClick}
                  className="custom-link"
                >
                  <img width="150px" src={logo} alt="Logo" />
                </Link>
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{ alignSelf: "flex-start" }}
                >
                  <CloseIcon sx={{ color: "#00999E" }} />
                </IconButton>
              </Box>
              <List
                sx={{
                  marginTop: "20px",
                }}
              >
                {navItems.map((item, index) => {
                  const fullPath = `/dashboard/${item.path}`;

                  // Check if this path exactly matches or is a parent of the current location
                  const isExactMatch = location.pathname === fullPath;
                  const isParentMatch =
                    location.pathname.startsWith(fullPath + "/") &&
                    !navItems.some((i) => {
                      const iFull = `/dashboard/${i.path}`;
                      return (
                        iFull !== fullPath &&
                        location.pathname.startsWith(iFull + "/")
                      );
                    });

                  const isSelected = isExactMatch || isParentMatch;

                  return (
                    <ListItem
                      key={index}
                      sx={{
                        mb: 0.5,
                        px: 1.5,
                        py: 1.1,
                        fontWeight: 500,
                        backgroundColor: isSelected ? "#E5F6F6" : "transparent",
                        color: isSelected ? "#007C80" : "#4E5D66",
                        "&:hover": {
                          backgroundColor: "#E5F6F6",
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
                          marginRight: "10px",
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
            </Drawer>
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    sx={{
                      display: { xs: "none", md: "block" },
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      color: "#8A979E",
                    }}
                  >
                    STUDENT PORTAL
                  </Typography>
                  <DashboardBreadcrumbs />
                </Box>
              </Box>
            </Box>
          </Box>
      <Box
        sx={{ display: " flex", flexDirection: "row", alignItems: "center" }}
      >
        <Box
          sx={{
            border: "1px solid #E6EBEF",
            bgcolor: "#F7FAFA",
            borderRadius: "999px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            cursor: "pointer",
            padding: "4px 6px 4px 14px",
            ml: 1,
          }}
          onClick={() => {
            navigate("/dashboard/profileupdate");
          }}
        >
          <Typography
            sx={{
              color: "#1C2B33",
              fontWeight: 600,
              fontSize: "14px",
              mr: 1.25,
            }}
          >
            {username || "Student"}
          </Typography>
          {!profileImage ? (
            <Avatar />
          ) : (
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid #00999E",
                boxShadow: "none",

                width: "40px",
                height: "40px",
              }}
            >
              <img
                src={profileImage}
                alt="profile_pic"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}
        </Box>

        <IconButton
          aria-label="Log out"
          onClick={handleLogout}
          sx={{
            ml: 1,
            color: "#5C6B73",
            border: "1px solid #E6EBEF",
            width: 40,
            height: 40,
          }}
        >
          <Icon icon="ep:switch-button" style={{ fontSize: "20px" }} />
        </IconButton>
      </Box>

      <Dialog
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
        sx={{
          "& .MuiDialog-paper": {
            width: { sm: "450px", xs: "300px" },
          },
        }}
      >
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setLogoutDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={confirmLogout}>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TopBar;
