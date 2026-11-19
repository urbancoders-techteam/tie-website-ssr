/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
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

import { navbarData } from "@/constants/navbar";
import UniversityMenu from "@/components/navigation/UniversityMenu";
import UniversityDirectoryMenu from "@/components/navigation/UniversityDirectoryMenu";
import Popover from "@mui/material/Popover";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { baseUrl, navURL } from "@/utils/config";

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

  const location = usePathname();
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  const [cartList, setCartList] = useState<any>([]);


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

  const [selectedParentMenu, setSelectedParentMenu] = useState<any>("Home");

  // Sync selected menu with current pathname so correct item shows active + bottom underline
  useEffect(() => {
    if (location === "/") setSelectedParentMenu("Home");
    else if (location === "/aboutus") setSelectedParentMenu("About Us");
    else if (
      location === "/study-abroad" ||
      location.startsWith("/study-abroad/")
    )
      setSelectedParentMenu("study-abroad");
    else if (location === "/test" || location.startsWith("/test/"))
      setSelectedParentMenu("Test Prep");
    else if (
      location === "/international-relation" ||
      location.startsWith("/international-relation/")
    )
      setSelectedParentMenu("international-relation");
    else if (location === "/immersion" || location.startsWith("/immersion/"))
      setSelectedParentMenu("Immersion");
    else if (location === "/blogs" || location.startsWith("/blogs/"))
      setSelectedParentMenu("Blogs");
    else if (location === "/mbbs" || location.startsWith("/mbbs/"))
      setSelectedParentMenu("mbbs");
    else setSelectedParentMenu(null);
  }, [location]);

  const isParentMenuSelected = (parentMenu: string | null) =>
    selectedParentMenu === parentMenu;

  useEffect(() => {
    if (scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
      window.history.replaceState({}, document.title);
    }
  }, [location, scrollTo]);

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
                  {navbarData.map(menuItem => menuItem.menu.name === "University" ? (
                    <Box key="university"><UniversityMenu mobile onNavigate={handleDrawerClose} /><UniversityDirectoryMenu mobile onNavigate={handleDrawerClose} /></Box>
                  ) : (
                    <Box key={menuItem.menu.link} sx={{ py: 1.5 }}>
                      <Link href={menuItem.menu.link} className="custom-link" onClick={handleDrawerClose}>
                        <HoverTypography isActive={location === menuItem.menu.link} sx={{ fontSize: "16px", fontWeight: 500 }}>
                          {menuItem.menu.name}
                        </HoverTypography>
                      </Link>
                    </Box>
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
                    <>
                      <Box sx={{ py: 0.75 }}>
                        <Link
                          href="/blogs"
                          className="custom-link"
                          onClick={handleDrawerClose}
                          style={{ display: "block" }}
                        >
                          <HoverTypography sx={{ fontSize: "16px", fontWeight: 600 }}>
                            Blogs
                          </HoverTypography>
                        </Link>
                      </Box>
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
                    </>
                  ) : (
                    <>

                      <Box sx={{ py: 0.75 }}>
                        <Link
                          href="/blogs"
                          className="custom-link"
                          onClick={handleDrawerClose}
                          style={{ display: "block" }}
                        >
                          <HoverTypography sx={{ fontSize: "16px", fontWeight: 600 }}>
                            Blogs
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
                sx={{
                  "& a.custom-link": { textDecoration: "none" },
                  minWidth: 0,
                }}
              >
                <Link
                  href="/"
                  className="custom-link"
                  style={NavLinkCss({ isActive: isParentMenuSelected("Home") }) as React.CSSProperties}
                  onClick={() => setSelectedParentMenu("Home")}
                >
                  <HoverTypography
                    isActive={isParentMenuSelected("Home")}
                    sx={{ fontSize: isLgDown ? "13px" : "14px", fontWeight: 500 }}
                  >
                    Home
                  </HoverTypography>
                </Link>

                <Link
                  href="/aboutus"
                  className="custom-link"
                  style={NavLinkCss({ isActive: isParentMenuSelected("About Us") }) as React.CSSProperties}
                  onClick={() => setSelectedParentMenu("About Us")}
                >
                  <HoverTypography
                    isActive={isParentMenuSelected("About Us")}
                    sx={{ fontSize: isLgDown ? "13px" : "14px", fontWeight: 500 }}
                  >
                    About Us
                  </HoverTypography>
                </Link>

                <UniversityMenu />
                <UniversityDirectoryMenu />


                <Link
                  href="/test"
                  className="custom-link"
                  style={NavLinkCss({ isActive: isParentMenuSelected("Test Prep") }) as React.CSSProperties}
                  onClick={() => setSelectedParentMenu("Test Prep")}
                >
                  <HoverTypography
                    isActive={isParentMenuSelected("Test Prep")}
                    sx={{ fontSize: isLgDown ? "13px" : "14px", fontWeight: 500 }}
                  >
                    Test Prep
                  </HoverTypography>
                </Link>

                <Link
                  href="/international-relation"
                  className="custom-link"
                  style={NavLinkCss({ isActive: isParentMenuSelected("international-relation") }) as React.CSSProperties}
                  onClick={() => setSelectedParentMenu("international-relation")}
                >
                  <HoverTypography
                    isActive={isParentMenuSelected("international-relation")}
                    sx={{ fontSize: isLgDown ? "13px" : "14px", fontWeight: 500 }}
                  >
                    International Engagement
                  </HoverTypography>
                </Link>

                <Link
                  href="/immersion"
                  className="custom-link"
                  style={NavLinkCss({ isActive: isParentMenuSelected("Immersion") }) as React.CSSProperties}
                  onClick={() => setSelectedParentMenu("Immersion")}
                >
                  <HoverTypography
                    isActive={isParentMenuSelected("Immersion")}
                    sx={{ fontSize: isLgDown ? "13px" : "14px", fontWeight: 500 }}
                  >
                    Immersion
                  </HoverTypography>
                </Link>

                <Link
                  href="/blogs"
                  className="custom-link"
                  style={
                    NavLinkCss({
                      isActive:
                        isParentMenuSelected("Blogs") ||
                        location === "/blogs" ||
                        location.startsWith("/blogs/"),
                    }) as React.CSSProperties
                  }
                  onClick={() => setSelectedParentMenu("Blogs")}
                >
                  <HoverTypography
                    sx={{
                      fontSize: isLgDown ? "13px" : "14px",
                      fontWeight: 500,
                    }}
                    isActive={
                      isParentMenuSelected("Blogs") ||
                      location === "/blogs" ||
                      location.startsWith("/blogs/")
                    }
                  >
                    Blogs
                  </HoverTypography>
                </Link>

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
                ) : null}
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

                {!token && (<Button component={Link} href={navURL + "login"} variant="outlined" sx={{ borderColor: "#00999E", color: "#007c80", borderRadius: "999px", textTransform: "none", fontWeight: 700, px: 2.5, py: 0.9, "&:hover": { backgroundColor: "#effdff", borderColor: "#007c80" } }}>Login</Button>)}
                <Link href={`/cart`} className="custom-link">
                  <Badge badgeContent={cartList?.length} color="secondary">
                    <ShoppingCartIcon
                      color="action"
                      sx={{ fontSize: isLgDown ? 22 : 24 }}
                    />
                  </Badge>
                </Link>
              </Stack>
            )}
          </Box>
        </Container>
      </AppBar>
    </>
  );
};
