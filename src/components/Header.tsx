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

export const Header = ({ itemupdate }: any) => {


   const [token, setToken] = useState<string | null>(null);
   let profileImage;

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


  const currentLocation = usePathname();
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  useEffect(() => {
    navbarData.forEach((menuItem, index) => {
      if (
        menuItem.subMenu.some((subItem) => currentLocation === subItem.link)
      ) {
        setExpanded(index as any);
      }
    });
  }, [currentLocation]);

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

    if(token){
      fetchCartData();
    }
    
  }, [itemupdate, token]);

  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [homeSubMenuOpen, setHomeSubMenuOpen] = useState(false);
  const [studyAbroadOpen, setStudyAbroadOpen] = useState(false);
  const [immersionOpen, setImmersionOpen] = useState(false);
  const [iROpen, setIROpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handlePhoneIconClick = () => {
    window.open(`tel:${+919831241212}`);
  };

  const HoverTypography = ({ children }: any) => (
    <Typography
      variant="h6"
      component="div"
      color="inherit"
      sx={{
        textDecoration: "none",
        underline: "none",
        border: "2px solid white",
        borderRadius: 2,
        padding: {
          xs: "5px 0px 5px 0px",
          sm: "5px 0px 5px 0px",
          md: "5px 8px 5px 8px",
          lg: "5px 20px 5px 20px",
        },
        fontSize: { xs: "14px", md: "14px", lg: "16px" },
        lineHeight: "28px",
        letterSpacing: "0.2px",
        "&:hover": {
          color: "#00999e",
          cursor: "pointer",
        },
      }}
    >
      {children}
    </Typography>
  );

  const NavLinkCss = ({
    isActive,
  }: {
    isActive: boolean;
  }): React.CSSProperties => ({
    color: isActive ? "#00999e" : "",
    border: isActive ? "2px solid #00999e" : "",
    borderRadius: isActive ? 8 : "",
    position: "relative",
  });

  const handleHomeMouseEnter = () => {
    setHomeSubMenuOpen(true);
  };

  const handleHomeMouseLeave = () => {
    setHomeSubMenuOpen(false);
  };

  const handleStudyAbroadEnter = () => {
    setStudyAbroadOpen(true);
  };
  const handleStudyAbroadLeave = () => {
    setStudyAbroadOpen(false);
  };

  const handleImmersionEnter = () => {
    setImmersionOpen(true);
  };
  const handleImmersionLeave = () => {
    setImmersionOpen(false);
  };

  const handleIREnter = () => {
    setIROpen(true);
  };
  const handleIRLeave = () => {
    setIROpen(false);
  };

  const [selectedParentMenu, setSelectedParentMenu] = useState<any>(null);

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
        color="default"
        sx={{ backgroundColor: "white" }}
      >
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80px",
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
                    <Image
                      src={"/images/TIE_LOGO.png"}
                      alt="Logo"
                      width={150}
                      height={60}
                    />
                  </Link>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton aria-label="cart" sx={{ pr: "40px" }}>
                      <Badge
                        badgeContent={cartList?.length || 0}
                        color="primary"
                      >
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
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
              <Link href="/" className="custom-link">
                <Image
                  src={"/images/TIE_LOGO.png"}
                  alt="Logo"
                  width={150}
                  height={60}
                />
              </Link>
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
                      isMobile || isSmScreen || isMediumScreen ? "60%" : 300,
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
                      <Image
                        src={"/images/TIE_LOGO.png"}
                        alt="Logo"
                        width={150}
                        height={60}
                      />
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
                      <AccordionDetails sx={{ fontSize: "14px" }}>
                        {menuItem.subMenu.map((subItem, subIndex) => {
                          const isActive = activeSubMenu === subItem.title;

                          return (
                            <Typography
                              key={subIndex}
                              sx={{
                                fontSize: "12px",
                                // py: 0.5,
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
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                  <Link
                    href="/contact"
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
                      Contact Us
                    </HoverTypography>
                  </Link>
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
                    <Link
                      href={`${navURL}login`}
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
                        Login
                      </HoverTypography>
                    </Link>
                  )}
                </List>
              </Drawer>
            ) : (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, md: 0, sm: 4 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                paddingTop={1}
                paddingBottom={1}
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
                          isParentMenuSelected("Home") || location === "/",
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
                      
                      border="4px solid white"
                      isActive={isParentMenuSelected("Home")}
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
                    >
                      {homeSubMenues?.map((subMenu) => (
                        <Link
                          href={subMenu?.link || "/"}
                          key={subMenu.title}
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
                            
                            border="4px solid white"
                            style={{
                              color:
                                activeSubMenu === subMenu.title
                                  ? "blue"
                                  : "inherit",
                            }}
                          >
                            {subMenu.title}
                          </HoverTypography>
                        </Link>
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
                          location === "/study-abroad",
                      }) as React.CSSProperties
                    }
                  >
                    <HoverTypography
                      fontSize={{
                        xs: "10px",
                        sm: "10px",
                        md: "13px",
                        lg: "15px",
                      }}
                      border="4px solid white"
                      
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
                    >
                      {studyAbroadsubMenues?.map((subMenu) => (
                        <Link
                          href={subMenu?.link}
                          key={subMenu.title}
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
                            
                            border="4px solid white"
                            style={{
                              color: location === subMenu.link ? "#00999e" : "",
                            }}
                          >
                            {subMenu?.title}
                          </HoverTypography>
                        </Link>
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
                          location === "/international-relation",
                      }) as React.CSSProperties
                    }
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
                    >
                      {iRSubMenues?.map((subMenu) => (
                        <Link
                          href={subMenu.link}
                          key={subMenu.title}
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
                            
                            border="4px solid white"
                            style={{
                              color:
                                activeSubMenu === subMenu.title
                                  ? "blue"
                                  : "inherit",
                            }}
                          >
                            {subMenu.title}
                          </HoverTypography>
                        </Link>
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
                          isParentMenuSelected("custom-link") ||
                          location === "/custom-link",
                      }) as React.CSSProperties
                    }
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
                    >
                      {immersionSubMenues.map((subMenu) => (
                        <Link
                          href={subMenu.link}
                          key={subMenu.title}
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
                            
                            border="4px solid white"
                            style={{
                              color: location === subMenu.link ? "#00999e" : "",
                            }}
                          >
                            {subMenu.title}
                          </HoverTypography>
                        </Link>
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
                  <Link
                    href={`${navURL}login`}
                    className="custom-link"
                    // style={NavLinkCss}
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
                      Login
                    </HoverTypography>
                  </Link>
                )}
              </Stack>
            )}
            {!isSmScreen && !isMediumScreen && (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                pr={"20px"}
              >
                <Stack direction="row">
                  <Link href={`/cart`} className="custom-link">
                    <Badge badgeContent={cartList?.length} color="secondary">
                      <ShoppingCartIcon color="action" />
                    </Badge>
                  </Link>
                </Stack>
              </Stack>
            )}

            {!isSmScreen && !isMediumScreen && (
              <Box>
                <HoverTypography>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Stack
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={"/images/phone.svg"}
                        style={{ width: "2.5rem" }}
                        width={20}
                        height={20}
                        alt="Phone"
                      />
                    </Stack>
                    <Stack ml={1} onClick={handlePhoneIconClick}>
                      <Typography sx={{ color: "grey" }}>
                        Say Hello !
                      </Typography>
                      <Typography>+91 9831241212</Typography>
                    </Stack>
                  </Box>
                </HoverTypography>
              </Box>
            )}
          </Box>
        </Container>
      </AppBar>
    </>
  );
};
