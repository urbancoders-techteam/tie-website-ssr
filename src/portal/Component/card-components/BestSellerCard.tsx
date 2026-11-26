// @ts-nocheck
import { Box, Card, CardMedia, Tooltip, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../content-component/ButtonComponent";

import "../../Dashboard/slider.css";
import { WEB_URL } from "@/portal/config";

const BestSellerCard = ({ data, imageheight, imagewidth, token }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options).replace(",", ""); // Replace comma for desired format
  };

  const handleExploreClick = () => {
    let route = "";
    switch (data.courseName) {
      case "IELTS ACADEMICS":
      case "IELTS GENERAL":
        route = "ielts";
        break;
      case "GMAT BASICS":
      case "GMAT ULTIMATE":
        route = "gmat";
        break;
      case "GRE BASICS":
      case "GRE ULTIMATE":
        route = "gre";
        break;
      case "PTE BASICS":
      case "PTE ULTIMATE":
        route = "pte";
        break;
      case "TOEFL BASICS":
      case "TOEFL ULTIMATE":
        route = "toefl";
        break;
      case "SAT BASICS":
      case "SAT ULTIMATE":
        route = "sat";
        break;
      default:
        route = "";
    }

    if (route) {
      // navigate(`/test/${route}`);
      window.location.href = `${WEB_URL}test/${route}#=${token}`;
    }
  };

  return (
    <Card
      sx={{
        width: {
          xs: "240px",
          sm: "260px",
          md: "320px",
          lg: "320px",
          xl: "360px",
        },
        height: {
          xs: "370px",
          sm: "410px",
          md: "470px",
          lg: "440px",
          xl: "480px",
        },
        borderRadius: "10px",
        mb: 3,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        p: 2,
        border: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: data.length === 1 ? "flex-start" : "center",
        }}
      >
        <CardMedia
          component="img"
          image={data.image}
          sx={{
            width: {
              xs: "200px",
              sm: "220px",
              md: "270px",
              lg: "290px",
              xl: "300px",
            },
            height: {
              xs: "150px",
              sm: "180px",
              md: "220px",
              lg: "200px",
              xl: "200px",
            },
            borderRadius: "20px",
            mx: "auto",
            border: "1px solid #999999",
          }}
          alt="news image"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "left",
            flexGrow: 1,
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
              mt: 2,
            }}
          >
            {formatDate(data.date)}
          </Typography>
          <Tooltip
            title={`${data.courseName}: ${data.title}`}
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
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {data.courseName}: {data.title}
            </Typography>
          </Tooltip>
          <Tooltip title={data.description || ""} placement="top" arrow>
            <Box
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                  },
                  color: "#444",
                }}
              >
                {data.description || ""}
              </Typography>
            </Box>
          </Tooltip>
          <ButtonComponent
            fontSize="14px"
            padding="10px 20px"
            text="Explore →"
            onClick={handleExploreClick}
            sx={{ justifyContent: "flex-start" }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default BestSellerCard;
