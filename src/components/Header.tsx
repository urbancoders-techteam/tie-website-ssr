/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import {
  homeSubMenues,
  immersionSubMenues,
  iRSubMenues,
  mbbsSubMenues,
  navbarData,
  studyAbroadsubMenues,
} from "@/constants/navbar";
import Popover from "@mui/material/Popover";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { baseUrl, navURL } from "@/utils/config";

const PHONE_TEL = "+919831241212";

export const Header = ({ itemupdate }: any) => {


   const [token, setToken] = useState<string | null>(null);
   const profileImage: string | undefined = undefined;

  useEffect(() => {
    // Step 1: check from URL hash
    const hash = window.location.hash;
    let extractedToken = "";

    if (hash && hash.startsWith("#=")) {
      extractedToken = hash.replace("#=", "");
      sessionStorage.setItem("authToken", extractedToken);
    } else {
      // Step 2: check from storage
      extractedToken = sessionStorage.getItem("authToken") || "";
    }

    // Step 3: update state
    if (extractedToken) {
      setToken(extractedToken);
    }
  }, []);

  const router = useRouter();
  const location = usePathname();
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");
  const subMenuTitle = searchParams.get("subMenuTitle");
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const [cartList, setCartList] = useState<any>([]);


  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  useEffect(() => {
    navbarData.forEach((menuItem, index) => {
      if (
        menuItem.subMenu.some((subItem) => location === subItem.link)
      ) {
        setExpanded(index as any);
      }
    });
  }, [location]);

  useEffect(() => {
    const fetchCartData = async () => {
      if (token) {
        try {
          const response = await axios.get(`${baseUrl}order/get-cart`, {
            headers: {
              Authorization: token,
            },
          });
          const data = response.data;
          if (data.success) {
            const apiCartList = data.data.flatMap((order: any) =>
              order.items.map((item: any) => ({
                id: item._id,
                title: item.planName,
                packagePrice: item.amount,
                planId: item.planId,
              }))
            );
            setCartList(apiCartList);
          }
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      } else {
        const cartData = localStorage.getItem("cart");
        const localCart = cartData ? JSON.parse(cartData) : [];

        setCartList(localCart);
      }
    };

    fetchCartData();
  }, [itemupdate, token]);

  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const [homeSubMenuOpen, setHomeSubMenuOpen] = useState(false);
  const [studyAbroadOpen, setStudyAbroadOpen] = useState(false);
  const [mbbsOpen, setMbbsOpen] = useState(false);
  const [immersionOpen, setImmersionOpen] = useState(false);
  const [iROpen, setIROpen] = useState(false);

  // Close all submenus on route change so they don't stay open on other pages
  useEffect(() => {
    setHomeSubMenuOpen(false);
    setStudyAbroadOpen(false);
    setMbbsOpen(false);
    setImmersionOpen(false);
    setIROpen(false);
  }, [location]);

  // Close all submenus when clicking outside (backup for missed mouseLeave)
  useEffect(() => {
    const closeAllSubmenus = () => {
      setHomeSubMenuOpen(false);
      setStudyAbroadOpen(false);
      setMbbsOpen(false);
      setImmersionOpen(false);
      setIROpen(false);
    };
    document.addEventListener("click", closeAllSubmenus);
    return () => document.removeEventListener("click", closeAllSubmenus);
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const HoverTypography = (allProps: any) => {
    const { children, sx, fontSize, border, ...rest } = allProps;
    const isActive = Boolean(rest.isActive);
    // prevent React warning: don't forward non-DOM props
    delete rest.isActive;

    return (
      <Typography
        variant="h6"
        component="span"
        color="inherit"
        {...rest}
        sx={{
          fontFamily: '"Nunito", sans-serif',
          fontWeight: 500,
          textDecoration: "none",
          underline: "none",
          border: "none",
          borderRadius: 0,
          px: 0,
          py: 0,
          fontSize: { xs: "14px", md: "14px" },
          lineHeight: "18px",
          letterSpacing: "0.2px",
          color: "#000",
          position: "relative",
          "&:hover": {
            color: "#00999e",
            cursor: "pointer",
          },
          ...(fontSize ? { fontSize } : {}),
          ...(border ? { border } : {}),
          ...(isActive
            ? {
                color: "#00999E",
                fontWeight: 600,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "-10px",
                  width: { md: 28, lg: 34 },
                  height: "3px",
                  borderRadius: "999px",
                  backgroundColor: "#00999E",
                  boxShadow: "0 2px 6px rgba(0,153,158,0.35)",
                },
              }
            : {}),
          ...sx,
        }}
      >
        {children}
      </Typography>
    );
  };

  const NavLinkCss = ({
    isActive,
  }: {
    isActive: boolean;
  }): React.CSSProperties => ({
    color: isActive ? "#00999e" : "",
    display: "inline-block",
    position: "relative",
    borderBottom: "3px solid transparent",
    paddingBottom: "4px",
    // marginBottom: "-4px",
  });

  // Fast submenu: quick open animation, immediate close on leave
  const submenuDropDownSx = {
    animation: "headerSubmenuIn 0.1s ease-out",
    "@keyframes headerSubmenuIn": {
      from: { opacity: 0, transform: "translateY(-4px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
  };

  const closeAllDesktopSubmenus = () => {
    setHomeSubMenuOpen(false);
    setStudyAbroadOpen(false);
    setMbbsOpen(false);
    setImmersionOpen(false);
    setIROpen(false);
  };

  // Ensure only ONE submenu is open at a time (fixes sticky/multiple-open cases)
  const handleHomeMouseEnter = () => {
    closeAllDesktopSubmenus();
    setHomeSubMenuOpen(true);
  };

  const handleHomeMouseLeave = () => {
    setHomeSubMenuOpen(false);
  };

  const handleStudyAbroadEnter = () => {
    closeAllDesktopSubmenus();
    setStudyAbroadOpen(true);
  };
  const handleStudyAbroadLeave = () => {
    setStudyAbroadOpen(false);
  };

  const handleMBBSEnter = () => {
    closeAllDesktopSubmenus();
    setMbbsOpen(true);
  };
  const handleMBBSLeave = () => {
    setMbbsOpen(false);
  };

  const handleImmersionEnter = () => {
    closeAllDesktopSubmenus();
    setImmersionOpen(true);
  };
  const handleImmersionLeave = () => {
    setImmersionOpen(false);
  };

  const handleIREnter = () => {
    closeAllDesktopSubmenus();
    setIROpen(true);
  };
  const handleIRLeave = () => {
    setIROpen(false);
  };

  const [selectedParentMenu, setSelectedParentMenu] = useState<any>("Home");

  // Sync selected menu with current pathname so correct item shows active + bottom underline
  useEffect(() => {
    if (location === "/" || location === "/aboutus") setSelectedParentMenu("Home");
    else if (
      location === "/study-abroad" ||
      location.startsWith("/study-abroad/") ||
      location === "/test" ||
      location.startsWith("/test/")
    )
      setSelectedParentMenu("study-abroad");
    else if (
      location === "/international-relation" ||
      location.startsWith("/international-relation/")
    )
      setSelectedParentMenu("international-relation");
    else if (location === "/immersion" || location.startsWith("/immersion/"))
      setSelectedParentMenu("Immersion");
    else if (location === "/mbbs" || location.startsWith("/mbbs/"))
      setSelectedParentMenu("mbbs");
    else setSelectedParentMenu(null);
  }, [location]);

  const isParentMenuSelected = (parentMenu: string | null) =>
    selectedParentMenu === parentMenu;

  const handleSubMenuClick = (e: any, subMenu: any) => {
    e.preventDefault();

    if (subMenu.url) {
      window.open(subMenu.url, "_blank");
      return;
    }

    if (subMenu.link && subMenu.id) {
      if (subMenu.link.startsWith("http")) {
        window.open(subMenu.link, "_blank");
        return;
      }

      if (location === subMenu.link) {
        const section = document.getElementById(subMenu.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveSubMenu(subMenu.title);
          setDrawerOpen(false);
        }
      } else {
        router.push(
          `${subMenu.link}?scrollTo=${
            subMenu.id
          }&subMenuTitle=${encodeURIComponent(subMenu.title)}`
        );
        setDrawerOpen(false);
      }
      return;
    }

    if (subMenu.link) {
      if (subMenu.link.startsWith("http")) {
        window.open(subMenu.link, "_blank");
      } else {
        router.push(subMenu.link);
        setActiveSubMenu(subMenu.title);
      }
      return;
    }

    if (subMenu.id) {
      if (location === "/" || location === "/international-relation") {
        const section = document.getElementById(subMenu.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveSubMenu(subMenu.title);
        }
      } else {
        router.push(
          `/?scrollTo=${subMenu.id}&subMenuTitle=${encodeURIComponent(
            subMenu.title
          )}`
        );
      }
      return;
    }
  };

  useEffect(() => {
    if (scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveSubMenu(subMenuTitle as any);
        }
      }, 500);
      window.history.replaceState({}, document.title);
    } else {
      if (location === "/") {
        setActiveSubMenu("");
      } else {
        const activeMenu = homeSubMenues.find((menu) => menu.link === location);
        setActiveSubMenu(activeMenu ? activeMenu.title : "");
      }
    }
  }, [location, scrollTo, subMenuTitle]);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        color="default"
        sx={{
          backgroundColor: "white",
          fontFamily: "Nunito",
          borderBottom: "3px solid #09999E",
          boxShadow: "0 4px 20px -6px #09999e55",
        }}
      >
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "80px",
              gap: { md: 1.25, lg: 2 },
            }}
          >
            {isSmScreen || isMediumScreen ? (
              <Grid
                container
                component="div"
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box>
                  <Link
                    href="/"
                    className="custom-link"
                    onClick={handleDrawerClose}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: 120, sm: 150 },
                        height: { xs: 68, sm: 60 },
                      }}
                    >
                      <Image
                        src={"/images/TIE_LOGO.png"}
                        alt="Logo"
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 600px) 120px, 150px"
                      />
                    </Box>
                  </Link>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Link href="/cart" className="custom-link">
                      <IconButton aria-label="cart">
                        <Badge
                          badgeContent={cartList?.length || 0}
                          color="primary"
                        >
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                    </Link>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={handleDrawerOpen}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  minWidth: { md: 130, lg: 160 },
                  flexShrink: 0,
                }}
              >
                <Link href="/" className="custom-link">
                  <Image
                    src={"/images/TIE_LOGO.png"}
                    alt="Logo"
                    width={isLgDown ? 110 : 120}
                    height={60}
                  />
                </Link>
              </Box>
            )}

            {isSmScreen || isMediumScreen ? (
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                ModalProps={{ keepMounted: true }}
                sx={{
                  "& .MuiDrawer-paper": {
                    width:
                      isMobile ? "80%" : isSmScreen || isMediumScreen ? "60%" : 300,
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
                  {(isSmScreen || isMediumScreen) && (
                    <Link
                      href="/"
                      className="custom-link"
                      onClick={handleDrawerClose}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: { xs: 120, sm: 150 },
                          height: { xs: 68, sm: 60 },
                        }}
                      >
                        <Image
                          src={"/images/TIE_LOGO.png"}
                          alt="Logo"
                          fill
                          style={{ objectFit: "contain" }}
                          sizes="(max-width: 600px) 120px, 150px"
                        />
                      </Box>
                    </Link>
                  )}
                  <IconButton
                    onClick={handleDrawerClose}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    <CloseIcon sx={{ color: "#00999E" }} />
                  </IconButton>
                </Box>
                <List sx={{ padding: "0px 20px" }}>
                  {navbarData.map((menuItem, index) => (
                    <Accordion
                      key={index}
                      disableGutters
                      elevation={0}
                      expanded={expanded === index}
                      onChange={() => handleAccordionChange(index)}
                      sx={{
                        borderBottom: "none",
                        boxShadow: "none",
                        "&:before": { display: "none" },
                      }}
                    >
                      <AccordionSummary
                        sx={{ px: 0 }}
                        expandIcon={<ExpandMoreIcon sx={{ zIndex: 100 }} />}
                      >
                        <Box onClick={() => router.push(menuItem.menu.link)}>
                          <Typography
                            sx={{
                              fontSize: "16px",
                      
                              margin: "0px !important",
                              padding: "0px !important",
                              display: "flex",
                              alignItems: "center",
                              lineHeight: "1",
                            }}
                          >
                            {menuItem.menu.name}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails sx={{ fontSize: "12px", p: 0 }}>
                        {menuItem.subMenu.map((subItem, subIndex) => {
                          const isActive = activeSubMenu === subItem.title;

                          return (
                            <Box
                              key={subIndex}
                              sx={{
                                borderBottom:
                                  subIndex < menuItem.subMenu.length - 1
                                    ? "1px solid #00999e"
                                    : "none",
                                py: 0.75,
                                // px: 2,
                              }}
                            >
                              <Typography
                                component="div"
                                sx={{
                                  // fontSize: "12px",
                                  color: isActive ? "#00999e" : "inherit",
                                  fontWeight: isActive ? "bold" : "normal",
                                }}
                              >
                                <Link
                                  href={subItem.link || "/"}
                                  key={subItem.title}
                                  className="custom-link"
                                  onClick={(e) => handleSubMenuClick(e, subItem)}
                                  style={{
                                    color:
                                      activeSubMenu === subItem.title
                                        ? "#00999E"
                                        : "",
                                  }}
                                >
                                  <HoverTypography
                                    fontSize="12px"
                                    border="4px solid white"
                                    style={{
                                      color:
                                        activeSubMenu === subItem.title
                                          ? "blue"
                                          : "inherit",
                                    }}
                                  >
                                    {subItem.title}
                                  </HoverTypography>
                                </Link>
                              </Typography>
                            </Box>
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                  <Box sx={{ py: 0.75 }}>
                    <Link
                      href="/contact"
                      className="custom-link"
                      onClick={handleDrawerClose}
                      style={{ display: "block" }}
                    >
                      <HoverTypography sx={{ fontSize: "16px", fontWeight: 600 }}>
                        Contact Us
                      </HoverTypography>
                    </Link>
                  </Box>
                  {token ? (
                    <Box>
                      <Link
                        href={`${navURL}dashboard/home`}
                        className="custom-link"
                        onClick={handleDrawerClose}
                      >
                        <HoverTypography
                          fontSize={{
                            xs: "14px",
                            sm: "16px",
                            md: "16px",
                            lg: "17px",
                          }}
                          
                          sx={{ width: "60px" }}
                        >
                          Dashboard
                        </HoverTypography>
                      </Link>
                    </Box>
                  ) : (
                    <>
                      <Box sx={{ py: 0.75 }}>
                        <Link
                          href={`/mbbs`}
                          className="custom-link"
                          onClick={handleDrawerClose}
                          style={{ display: "block" }}
                        >
                          <HoverTypography sx={{ fontSize: "16px", fontWeight: 600 }}>
                            MBBS
                          </HoverTypography>
                        </Link>
                      </Box>
                      <Box sx={{ py: 0.75 }}>
                        <Link
                          href={`${navURL}login`}
                          className="custom-link"
                          onClick={handleDrawerClose}
                          style={{ display: "block" }}
                        >
                          <HoverTypography sx={{ fontSize: "16px", fontWeight: 600 }}>
                            Login
                          </HoverTypography>
                        </Link>
                      </Box>
                    </>
                  )}
                </List>

                <Box sx={{ px: 2, pb: 2, pt: 1 }}>
                  <Box
                    component="a"
                    href={`tel:${PHONE_TEL}`}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      userSelect: "none",
                      mb: 1.5,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <Box sx={{ width: 24, height: 24, position: "relative" }}>
                      <Image
                        src={"/images/phone.svg"}
                        fill
                        style={{ objectFit: "contain" }}
                        alt="Phone"
                      />
                    </Box>
                    <Box sx={{ lineHeight: 1 }}>
                      <Typography sx={{ color: "grey", fontSize: "12px" }}>
                        Say Hello!
                      </Typography>
                      <Typography sx={{ fontSize: "13px", fontWeight: 700 }}>
                        +91 9831241212
                      </Typography>
                    </Box>
                  </Box>

                  <Link href="/contact" className="custom-link" onClick={handleDrawerClose}>
                    <Button
                      fullWidth
                      variant="contained"
                      disableElevation
                      sx={{
                        backgroundColor: "#00999E",
                        color: "white",
                        borderRadius: "999px",
                        textTransform: "none",
                        fontWeight: 800,
                        fontSize: "13px",
                        py: 1.1,
                        "&:hover": { backgroundColor: "#007c80" },
                      }}
                    >
                      Free Consultation
                    </Button>
                  </Link>
                </Box>
              </Drawer>
            ) : (
              <Stack
                direction="row"
                spacing={isLgDown ? 2 : 3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                paddingTop={1}
                paddingBottom={1}
                onMouseLeave={closeAllDesktopSubmenus}
                sx={{
                  "& a.custom-link": { textDecoration: "none" },
                  minWidth: 0,
                }}
              >
                <div
                  onMouseEnter={handleHomeMouseEnter}
                  onMouseLeave={handleHomeMouseLeave}
                  className="relative"
                >
                  <Link
                    href="/"
                    className="custom-link"
                    style={
                      NavLinkCss({
                        isActive:
                          isParentMenuSelected("Home") ||
                          location === "/" ||
                          location === "/aboutus",
                      }) as React.CSSProperties
                    }
                    onClick={() => setSelectedParentMenu("Home")}
                  >
                    <HoverTypography
                      fontSize={{
                        xs: "10px",
                        sm: "10px",
                        md: "13px",
                        lg: "20px",
                      }}
                      isActive={isParentMenuSelected("Home")}
                      sx={{
                        fontSize: isLgDown ? "13px" : "14px",
                        fontWeight: 500,
                      }}
                    >
                      Home
                    </HoverTypography>
                  </Link>

                  {homeSubMenuOpen && (
                    <Box
                      position="absolute"
                      left="0"
                      bgcolor="white"
                      boxShadow={3}
                      zIndex={999999}
                      sx={submenuDropDownSx}
                    >
                      {homeSubMenues?.map((subMenu, index) => (
                        <Box
                          key={subMenu.title}
                          sx={{
                            borderBottom:
                              index < (homeSubMenues?.length ?? 1) - 1
                                ? "0.2px solid #00999e"
                                : "none",
                            py: 0.5,
                            px: 1.5,
                          }}
                        >
                          <Link
                            href={subMenu?.link || "/"}
                            className="custom-link"
                            onClick={(e) => handleSubMenuClick(e, subMenu)}
                            style={{
                              color:
                                activeSubMenu === subMenu.title ? "#00999E" : "",
                            }}
                          >
                            <HoverTypography
                              fontSize={{
                                xs: "10px",
                                sm: "10px",
                                md: "13px",
                                lg: "15px",
                              }}
                              sx={{
                                lineHeight: "1.5",
                                fontSize: "13px",
                                color:
                                  activeSubMenu === subMenu.title
                                    ? "#00999E"
                                    : "#000",
                              }}
                            >
                              {subMenu.title}
                            </HoverTypography>
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  )}
                </div>

                <div
                  onMouseEnter={handleStudyAbroadEnter}
                  onMouseLeave={handleStudyAbroadLeave}
                  className="relative"
                >
                  <Link
                    href="/study-abroad"
                    className="custom-link"
                    style={
                      NavLinkCss({
                        isActive:
                          isParentMenuSelected("study-abroad") ||
                          location === "/study-abroad" ||
                          location.startsWith("/study-abroad/") ||
                          location === "/test" ||
                          location.startsWith("/test/"),
                      }) as React.CSSProperties
                    }
                    onClick={() => setSelectedParentMenu("study-abroad")}
                  >
                    <HoverTypography
                      sx={{
                        fontSize: isLgDown ? "13px" : "14px",
                        fontWeight: 500,
                      }}
                      isActive={
                        isParentMenuSelected("study-abroad") ||
                        location === "/study-abroad" ||
                        location.startsWith("/study-abroad/") ||
                        location === "/test" ||
                        location.startsWith("/test/")
                      }
                    >
                      Study Abroad
                    </HoverTypography>
                  </Link>
                  {studyAbroadOpen && (
                    <Box
                      position="absolute"
                      left="0"
                      bgcolor="white"
                      boxShadow={3}
                      zIndex={999999}
                      sx={submenuDropDownSx}
                    >
                      {studyAbroadsubMenues?.map((subMenu, index) => (
                        <Box
                          key={subMenu.title}
                          sx={{
                            borderBottom:
                              index < (studyAbroadsubMenues?.length ?? 1) - 1
                                ? "0.2px solid #00999e"
                                : "none",
                            py: 0.5,
                            px: 1.5,
                          }}
                        >
                          <Link
                            href={subMenu?.link}
                            className="custom-link"
                            style={{
                              color: location === subMenu.link ? "#00999e" : "",
                            }}
                          >
                            <HoverTypography
                              fontSize={{
                                xs: "10px",
                                sm: "10px",
                                md: "13px",
                                lg: "15px",
                              }}
                              component="span"
                              style={{
                                color: location === subMenu.link ? "#00999e" : "",
                              }}
                              sx={{ fontSize: "13px" }}
                            >
                              {subMenu?.title}
                            </HoverTypography>
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  )}
                </div>

                <div
                  onMouseEnter={handleMBBSEnter}
                  onMouseLeave={handleMBBSLeave}
                  className="relative"
                >
                  <Link
                    href="/mbbs"
                    className="custom-link"
                    style={
                      NavLinkCss({
                        isActive:
                          isParentMenuSelected("mbbs") ||
                          location === "/mbbs" ||
                          location.startsWith("/mbbs/"),
                      }) as React.CSSProperties
                    }
                    onClick={() => setSelectedParentMenu("mbbs")}
                  >
                    <HoverTypography
                      sx={{
                        fontSize: isLgDown ? "13px" : "14px",
                        fontWeight: 500,
                      }}
                      isActive={
                        isParentMenuSelected("mbbs") ||
                        location === "/mbbs" ||
                        location.startsWith("/mbbs/")
                      }
                    >
                      MBBS
                    </HoverTypography>
                  </Link>
                  {mbbsOpen && (
                    <Box
                      position="absolute"
                      left="0"
                      bgcolor="white"
                      boxShadow={3}
                      zIndex={999999}
                      sx={submenuDropDownSx}
                    >
                      {mbbsSubMenues?.map((subMenu, index) => (
                        <Box
                          key={subMenu.title}
                          sx={{
                            borderBottom:
                              index < (mbbsSubMenues?.length ?? 1) - 1
                                ? "0.2px solid #00999e"
                                : "none",
                            py: 0.5,
                            px: 1.5,
                          }}
                        >
                          <Link
                            href={subMenu?.link}
                            className="custom-link"
                            style={{
                              color: location === subMenu.link ? "#00999e" : "",
                            }}
                          >
                            <HoverTypography
                              fontSize={{
                                xs: "10px",
                                sm: "10px",
                                md: "13px",
                                lg: "15px",
                              }}
                              component="span"
                              style={{
                                color: location === subMenu.link ? "#00999e" : "",
                              }}
                              sx={{ fontSize: "13px" }}
                            >
                              {subMenu?.title}
                            </HoverTypography>
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  )}
                </div>

                <div
                  onMouseEnter={handleIREnter}
                  onMouseLeave={handleIRLeave}
                  className="relative"
                >
                  <Link
                    href="/international-relation"
                    className="custom-link"
                    style={
                      NavLinkCss({
                        isActive:
                          isParentMenuSelected("international-relation") ||
                          location === "/international-relation" ||
                          location.startsWith("/international-relation/"),
                      }) as React.CSSProperties
                    }
                    onClick={() => setSelectedParentMenu("international-relation")}
                  >
                    <HoverTypography
                      fontSize={{
                        xs: "10px",
                        sm: "10px",
                        md: "13px",
                        lg: "20px",
                      }}
                      sx={{
                        fontSize: isLgDown ? "13px" : "14px",
                        fontWeight: 500,
                      }}
                      isActive={
                        isParentMenuSelected("international-relation") ||
                        location === "/international-relation" ||
                        location.startsWith("/international-relation/")
                      }
                    >
                      International Engagement
                    </HoverTypography>
                  </Link>
                  {iROpen && (
                    <Box
                      position="absolute"
                      left="0"
                      bgcolor="white"
                      boxShadow={3}
                      zIndex={999999}
                      sx={submenuDropDownSx}
                    >
                      {iRSubMenues?.map((subMenu, index) => (
                        <Box
                          key={subMenu.title}
                          sx={{
                            borderBottom:
                              index < (iRSubMenues?.length ?? 1) - 1
                                ? "0.2px solid #00999e"
                                : "none",
                            py: 0.5,
                            px: 1.5,
                          }}
                        >
                          <Link
                            href={subMenu.link}
                            className="custom-link"
                            onClick={(e) => handleSubMenuClick(e, subMenu)}
                            style={{
                              color:
                                activeSubMenu === subMenu.title ? "#00999E" : "",
                            }}
                          >
                            <HoverTypography
                              fontSize={{
                                xs: "10px",
                                sm: "10px",
                                md: "13px",
                                lg: "15px",
                              }}
                              sx={{
                                fontSize: "13px",
                                color:
                                  activeSubMenu === subMenu.title
                                    ? "#00999E"
                                    : "#000",
                              }}
                            >
                              {subMenu.title}
                            </HoverTypography>
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  )}
                </div>

                <div
                  onMouseEnter={handleImmersionEnter}
                  onMouseLeave={handleImmersionLeave}
                  className="relative"
                >
                  <Link
                    href="/immersion"
                    className="custom-link"
                    style={
                      NavLinkCss({
                        isActive:
                          isParentMenuSelected("Immersion") ||
                          location === "/immersion" ||
                          location.startsWith("/immersion/"),
                      }) as React.CSSProperties
                    }
                    onClick={() => setSelectedParentMenu("Immersion")}
                  >
                    <HoverTypography
                      sx={{
                        fontSize: isLgDown ? "13px" : "14px",
                        fontWeight: 500,
                      }}
                      isActive={
                        isParentMenuSelected("Immersion") ||
                        location === "/immersion" ||
                        location.startsWith("/immersion/")
                      }
                    >
                      Immersion
                    </HoverTypography>
                  </Link>

                  {immersionOpen && (
                    <Box
                      position="absolute"
                      left="0"
                      bgcolor="white"
                      boxShadow={3}
                      zIndex={999999}
                      sx={submenuDropDownSx}
                    >
                      {immersionSubMenues.map((subMenu, index) => (
                        <Box
                          key={subMenu.title}
                          sx={{
                            borderBottom:
                              index < immersionSubMenues.length - 1
                                ? "0.2px solid #00999e"
                                : "none",
                            py: 0.5,
                            px: 1.5,
                          }}
                        >
                          <Link
                            href={subMenu.link}
                            className="custom-link"
                            style={{
                              color: location === subMenu.link ? "#00999e" : "",
                            }}
                          >
                            <HoverTypography
                              fontSize={{
                                xs: "10px",
                                sm: "10px",
                                md: "13px",
                                lg: "15px",
                              }}
                              style={{
                                color: location === subMenu.link ? "#00999e" : "",
                              }}
                              sx={{ fontSize: "13px" }}
                            >
                              {subMenu.title}
                            </HoverTypography>
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  )}
                </div>

                {token ? (
                  <Box
                    sx={{
                      padding: {
                        xs: "5px 0px 5px 0px",
                        sm: "5px 0px 5px 0px",
                        md: "5px 8px 5px 8px",
                        lg: "5px 20px 5px 20px",
                      },
                    }}
                  >
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <div>
                          <Button {...bindTrigger(popupState)}>
                      
                              <Box
                                sx={{
                                  borderRadius: "50%",
                                  overflow: "hidden",
                                  border: "1px solid #00999E",
                                  boxShadow: 10,

                                  width: "40px",
                                  height: "40px",
                                }}
                              >
                                <Avatar
                                  src={profileImage}
                                  sx={{ width: "38px", height: "38px" }}
                                />
                              </Box>
                       
                          </Button>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <Link
                              href={`${navURL}dashboard/home`}
                              className="custom-link"
                            >
                              <HoverTypography
                                fontSize={{
                                  xs: "10px",
                                  sm: "10px",
                                  md: "13px",
                                  lg: "20px",
                                }}
                                border="4px solid white"
                                
                              >
                                Dashboard
                              </HoverTypography>
                            </Link>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </Box>
                ) : (
                  <>
                      <Link
                        href={`${navURL}login`}
                        className="custom-link"
                        style={NavLinkCss({ isActive: false }) as React.CSSProperties}
                      >
                          <HoverTypography
                            fontSize={{
                              xs: "10px",
                              sm: "10px",
                              md: "13px",
                              lg: "20px",
                            }}
                            sx={{
                              fontSize: isLgDown ? "13px" : "14px",
                              fontWeight: 500,
                            }}
                            isActive={false}

                          >
                            Login
                          </HoverTypography>
                        </Link></>
                )}
              </Stack>
            )}
            {!isSmScreen && !isMediumScreen && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={isLgDown ? 1.25 : 2}
                sx={{
                  flexShrink: 0,
                  minWidth: { md: 250, lg: 340 },
                }}
              >
                <Link href={`/cart`} className="custom-link">
                  <Badge badgeContent={cartList?.length} color="secondary">
                    <ShoppingCartIcon
                      color="action"
                      sx={{ fontSize: isLgDown ? 22 : 24 }}
                    />
                  </Badge>
                </Link>

                <Box
                  component="a"
                  href={`tel:${PHONE_TEL}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    userSelect: "none",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Box sx={{ width: 28, height: 28, position: "relative" }}>
                    <Image
                      src={"/images/phone.svg"}
                      fill
                      style={{ objectFit: "contain" }}
                      alt="Phone"
                    />
                  </Box>
                  <Box sx={{ lineHeight: 1 }}>
                    {!isLgDown && (
                      <Typography sx={{ color: "grey", fontSize: "12px" }}>
                        Say Hello!
                      </Typography>
                    )}
                    <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                      +91 9831241212
                    </Typography>
                  </Box>
                </Box>

                <Link href="/contact" className="custom-link">
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      backgroundColor: "#00999E",
                      color: "white",
                      borderRadius: "999px",
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: isLgDown ? "12px" : "13px",
                      px: isLgDown ? 2 : 2.5,
                      py: isLgDown ? 0.85 : 1,
                      "&:hover": { backgroundColor: "#007c80" },
                    }}
                  >
                    Free Consultation
                  </Button>
                </Link>
              </Stack>
            )}
          </Box>
        </Container>
      </AppBar>
    </>
  );
};
