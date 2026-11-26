// @ts-nocheck
/* eslint-disable no-unused-expressions */
import { Icon } from "@iconify/react";
import {
  Box, Card, CardActions, CardMedia, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { axiosInstance } from "@/portal/utils/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "@/portal/navigation";
import Slider from "react-slick";
import BestSellerCard from "@/portal/Component/card-components/BestSellerCard";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";
import Header from "@/portal/Component/content-component/Header";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import default_profileImg from "../asset/default_profileImg.jpeg";
import "./slider.css";
import { useSnackbar } from "@/portal/Component/Snakbar";
import { WEB_URL } from "@/portal/config";

const DashboardTestPrep = () => {
  const { showSnackbar } = useSnackbar();
  const [bestSellers, setBestSellers] = useState([]);
  const [username, setUsername] = useState("");
  const [recentlyBoughtProducts, setRecentlyBoughtProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isenrolled, setIsEnrolled] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState("pending");
  const [profileImage, setProfileImage] = useState("");

  const navigate = useNavigate();
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("authToken") : "";

  const logRequestError = (label, error) => {
    if (error?.response?.status === 401) return;
    console.error(label, error?.response?.data?.message || error?.message);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options).replace(",", "");
  };

  const handleReadMoreClick = () => {
    if (!isenrolled) {
      showSnackbar("Please enroll before reading", "info");
      navigate("/dashboard/enrollment/enrollment-form");
      return;
    }

    sessionStorage.setItem("readMoreClicked", true);

    const planId = sessionStorage.getItem("courseId");

    let redirectUrl = "/dashboard/user-board";

    if (planId) {
      redirectUrl += `?planId=${planId}`;
    } else {
      showSnackbar(
        "No ID found. Please select a batch or plan first.",
        "error",
      );
      return;
    }

    window.location.href = redirectUrl;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem("authToken");
      if (!token) return;
      try {
        const response = await axiosInstance.get(
          `${process.env.REACT_APP_BASE_URL}student/get-student-web`,
        );
        const data = response.data.data;

        setIsEnrolled(data.isenrolled);
        setEnrollmentStatus(data.enrollmentStatus || "");
        setProfileImage(data.image || default_profileImg);
      } catch (error) {
        logRequestError("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchBestSellers = async () => {
      const token = sessionStorage.getItem("authToken");
      if (!token) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `${process.env.REACT_APP_BASE_URL}banner/web`,
        );
        setBestSellers(response.data.data);
      } catch (error) {
        logRequestError("Error fetching Best Sellers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBestSellers();
  }, []);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    const fetchRecentlyBoughtProducts = async () => {
      const token = sessionStorage.getItem("authToken");
      if (!token) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `${process.env.REACT_APP_BASE_URL}student/student-purchase`,
        );
        setRecentlyBoughtProducts(response.data.data);
      } catch (error) {
        logRequestError("Error fetching recently brought products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecentlyBoughtProducts();
  }, []);

  var settings = {
    dots: true,
    infinite: recentlyBoughtProducts.length > 3,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: recentlyBoughtProducts.length > 1, // Adjusted for single item
          dots: true,
          arrows: true,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: recentlyBoughtProducts.length > 1,
          dots: false,
          arrows: false,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },

      {
        breakpoint: 572,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: recentlyBoughtProducts.length > 1,
          dots: false,
          arrows: false,
          speed: 3000,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <Box sx={{ margin: "0px 35px", display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "auto" }}>
        <Grid
          container
          sx={{ height: { xs: "auto", md: "550px" }, py: { xs: 4, md: 0 } }}
        >
          {/* Text Section */}
          <Grid
            item
            md={6}
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              px: { xs: 2, sm: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <MainHeader
                content="WELCOME"
                fontSize={{ xs: "40px", sm: "60px", md: "54px", lg: "60px" }}
              />
              <MainHeader
                content={username?.toUpperCase()}
                fontSize={{ xs: "40px", sm: "60px", md: "54px", lg: "60px" }}
                color="#454545"
              />
              <Typography
                sx={{
                  py: "16px",
                  color: "#757575",
                  fontWeight: 550,
                  fontSize: { xs: "18px", sm: "20px", md: "24px" },
                }}
              >
                We're Excited To Help You On Your Journey Towards Academic
                Success
              </Typography>

              {!isenrolled && enrollmentStatus !== "pending" && (
                <>
                  <Typography
                    sx={{
                      pb: "20px",
                      color: "#00999E",
                      fontWeight: 500,
                      fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    }}
                  >
                    Please Complete The Enrollment Form
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <ButtonComponent
                      text="Enroll Now"
                      onClick={() =>
                        navigate("/dashboard/enrollment/enrollment-form")
                      }
                      icon={
                        <Icon
                          icon="eva:arrow-forward-fill"
                          style={{ color: "#fff" }}
                        />
                      }
                    />
                  </Box>
                </>
              )}
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                width: { xs: "280px", sm: "100%", md: "400px", lg: "560px" },
                height: { xs: "280px", sm: "100%", md: "200px", lg: "560px" },
                mx: { xs: "auto", md: "0" },
                position: "relative",
                mt: { xs: 4, md: 0 },
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  right: { xs: 0 },
                  width: { xs: "100%", sm: "90%", md: "80%" },
                  maxWidth: "1149px",
                  height: { xs: "280px", sm: "350px", md: "505px" },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00999E54",
                  mx: "auto",
                  p: { xs: 2, md: 4 },
                  borderRadius: "10px",
                  border: "1px solid #999999",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1px solid #00999E",
                    textAlign: "center",
                    width: {
                      xs: "220px",
                      sm: "270px",
                      md: "270px",
                      lg: "320px",
                    },
                    height: {
                      xs: "220px",
                      sm: "270px",
                      md: "270px",
                      lg: "320px",
                    },
                  }}
                >
                  <img
                    src={profileImage || default_profileImg}
                    alt="profile_pic"
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Recently Bought Products */}
      <Box
        sx={{
          mt: { xs: "10px", md: 0 },
        }}
      >
        <Header content={"Recently Bought Product"} />
        {loading ? (
          <CustomCircularProgress />
        ) : recentlyBoughtProducts?.length === 0 ? (
          <Box sx={{ my: 4 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              You have not purchased any product yet!
            </Typography>
            <ButtonComponent
              text="Purchase"
              onClick={() => {
                const baseUrl = WEB_URL.endsWith("/")
                  ? WEB_URL.slice(0, -1)
                  : WEB_URL;

                window.location.href = `${baseUrl}/test#=${token}`;
              }}
              style={{
                width: 198,
                height: 51,
                cursor: "pointer",
              }}
            />
          </Box>
        ) : (
          <Slider {...settings} sx={{ pt: "20px" }}>
            {recentlyBoughtProducts?.map((item) => (
              <Box
                sx={{ textAlign: "-webkit-center", pt: "40px" }}
                key={item._id}
              >
                <Card
                  sx={{
                    width: {
                      xs: "240px",
                      sm: "250px",
                      md: "340px",
                      lg: "320px",
                      xl: "360px",
                    },
                    height: {
                      xs: "370px",
                      sm: "410px",
                      md: "470px",
                      lg: "460px",
                      xl: "480px",
                    },
                    borderRadius: "10px",
                    mb: 3,
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="product image"
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "200px",
                          md: "300px",
                          lg: "290px",
                          xl: "300px",
                        },
                        height: {
                          xs: "150px",
                          sm: "180px",
                          md: "220px",
                          lg: "220px",
                          xl: "240px",
                        },
                        borderRadius: "20px",
                        mx: "auto",
                        border: "1px solid #999999",
                      }}
                    />
                    <Box
                      sx={{
                        px: {
                          xs: 1,
                          sm: 2,
                        },
                        mt: 1,
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#00999E",
                          fontSize: {
                            xs: "12px",
                            sm: "13px",
                            md: "14px",
                          },
                          fontWeight: 600,
                        }}
                      >
                        {formatDate(item.date)}
                      </Typography>

                      <Tooltip
                        title={`${item.courseName}: ${item.title}`}
                        placement="top"
                        arrow
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#1A1A1A",
                            fontSize: {
                              xs: "18px",
                              sm: "20px",
                              md: "24px",
                            },
                            fontWeight: 600,
                            mt: 0.5,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {`${item.courseName}: ${item.title}`}
                        </Typography>
                      </Tooltip>
                      <Tooltip
                        title={item.description || ""}
                        placement="top"
                        arrow
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: {
                              xs: "12px",
                              sm: "13px",
                            },
                            textAlign: "justify",
                            color: "#444",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.description || ""}
                        </Typography>
                      </Tooltip>
                    </Box>
                  </Box>

                  <CardActions sx={{ justifyContent: "flex-start", mt: 2 }}>
                    <Tooltip
                      title={!isenrolled ? "Please enroll before reading" : ""}
                      arrow
                      disableHoverListener={isenrolled}
                    >
                      <div>
                        <ButtonComponent
                          text="Read More →"
                          onClick={() => {
                            sessionStorage.setItem("courseId", item.courseId);
                            sessionStorage.removeItem("batchId");
                            sessionStorage.setItem(
                              "courseName",
                              item.courseName,
                            );
                            handleReadMoreClick();
                          }}
                          disabled={false}
                          style={{
                            width: 198,
                            height: 51,
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Slider>
        )}
      </Box>

      <Box
        sx={{
          padding: "20px 0",
          mb: "50px",
        }}
      >
        <Header content={"Our Best Sellers"} />
        {loading ? (
          <CustomCircularProgress />
        ) : (
          <Slider {...settings} sx={{ py: "20px" }}>
            {bestSellers?.map((item, index) => (
              <Box
                sx={{ textAlign: "-webkit-center", pt: "40px" }}
                key={item._id}
              >
                <BestSellerCard data={item} imageheight={"250"} token={token} />
              </Box>
            ))}
          </Slider>
        )}
      </Box>
    </Box>
  );
};

export default DashboardTestPrep;
