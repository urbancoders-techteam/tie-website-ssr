// @ts-nocheck
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import HexagonalCard from "@/portal/Component/HexagonalCard";
import Header from "@/portal/Component/content-component/Header";
const imageBaseUrl = process.env.REACT_APP_IMAGE_URL

const icon1 = imageBaseUrl + "counselling.svg";
const icon2 = imageBaseUrl + "profile.svg";
const icon3 = imageBaseUrl + "editing.svg";
const icon4 = imageBaseUrl + "visa.svg";
const hovericon1 = imageBaseUrl + "img1.svg";
const hovericon2 = imageBaseUrl + "img2.svg";
const hovericon3 = imageBaseUrl + "img3.svg";
const hovericon4 = imageBaseUrl + "img4.svg";

const StepsForImmigration = () => {
  return (
    <Box backgroundColor="#EFFDFF" py={5}>
      <Container>
        <Box mb={5}>

          <Header
            content={"Steps For Immigration"}
            color="#00999E"
            textAlign={"center"}
          />
        </Box>
        <Grid container
          rowSpacing={3}
          sx={{

            justifyContent: "center",

            alignItems: "center",

          }}
        >
          {cardDetails.map((card, index) => {

            return (
              <Grid item md={3} sm={12} xs={12} mb={{ md: "100px", xs: "10px" }} key={card.id}>
                <HexagonalCard
                  lastIndex={cardDetails.length - 1}
                  ind={index}
                  id={card.id}
                  sx={{ backgroundColor: "#E0F2F3" }}
                  hoverIcon={card?.hoverIcon}
                  icon={card.icon}
                  title={card.title}
                />
              </Grid>
            );
          })}
        </Grid>

        <Grid container
          rowSpacing={3}
          sx={{

            justifyContent: "center",
            // flexWrap: "wrap",
            // gap: { xs: "140px", sm: "26px", md: "26px", lg: "90px" },
            // marginTop: { xs: "120px", sm: "160px", md: "170px", lg: "170px" },
            // flexDirection: { xs: "col", sm: "row", md: "row", lg: "row" },
            alignItems: "center",
            // padding: { xs: "10px", sm: "10px", md: "35px", lg: "35px" },
          }}
        >
          {cardDetails2.map((card, index) => {
            return (
              <Grid item md={3} sm={12} xs={12} key={card.id}>
                <HexagonalCard
                  lastIndex={cardDetails2.length - 1}
                  ind={index}
                  id={card.id}
                  sx={{ backgroundColor: "#E0F2F3" }}
                  hoverIcon={card?.hoverIcon}
                  icon={card.icon}
                  title={card.title}
                />
              </Grid>
            );
          })}
        </Grid>

      </Container>
    </Box>
  );
};

export default StepsForImmigration;

const cardDetails = [
  {
    id: 1,

    icon: icon2,
    hoverIcon: hovericon2,
    title: "Free Consultation",
  },
  {
    id: 2,
    icon: icon1,
    hoverIcon: hovericon1,
    title: "Eligibility",
  },
  {
    id: 3,
    icon: icon4,
    hoverIcon: hovericon4,
    title: "Documents Checklist",
  },
  {
    id: 4,
    icon: icon1,
    hoverIcon: hovericon1,
    title: "Budget Preparation",
  },


];

const cardDetails2 = [

  {
    id: 5,
    icon: icon3,
    hoverIcon: hovericon3,
    title: "Application Submission",
  },
  {
    id: 6,
    icon: icon3,
    hoverIcon: hovericon3,
    title: "Follow-Up and Updates",
  },
  {
    id: 7,
    icon: icon2,
    hoverIcon: hovericon2,
    title: "Visa Approval",
  },
];
