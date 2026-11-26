// @ts-nocheck
import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import dottedline from "../../asset/dottedline.svg";
import { Icon } from "@iconify/react";

const ImmigrationOfferCard = ({ data, setContent, cardWidth }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Box
        position="relative"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "hidden",
          minHeight: "600",
          cursor: 'pointer'
        }}
      >
        <Card
          sx={{
            width: {
              md: cardWidth ?? "300px", xs: "250px"
            },
            height: { md: "250px", xs: "250px" },
            backgroundColor: clicked ? "#00999E" : "f1f1f1",
            color: clicked ? "#FFFFFF" : "inherit",
            transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
            display: "flex",
            justifyContent: "center",
            wordWrap: "wrap",
            padding: "20px",
            border: clicked ? "1px solid #00999E" : "1px solid #00999E",
            textAlign: "center",
            fontWeight: "400",
            fontSize: "20px",
            boxShadow: "5px 5px 17px 5px rgba(0, 0, 0, 0.2);",
          }}
          onClick={() => {
            setClicked(!clicked);
            if (!clicked) setContent(data.description);
            else setContent(null);
          }}
        >
          <Box>
            <Box p={1}>
              <img
                src={data.Image}
                alt={data?.title}
                width="100px"
                height="100px"
              />
            </Box>

            <Typography variant="h6" fontWeight={500}>
              {data?.title}
            </Typography>
          </Box>
        </Card>
        {clicked ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingTop="20px"
            opacity={clicked ? 1 : 0}
            transition="opacity 0.3s"
          >
            <img
              src={dottedline}
              alt="dotted-line"
              width={5}
              height={80}
              style={{ margin: "auto" }}
            />
            <KeyboardArrowDownIcon sx={{ color: "#00999E" }} />
          </Box>
        ) : (
          ''
        )}

        {clicked && (
          <Box
            sx={{
              width: "350px",
              flexDirection: "column",
            }}
          >
            <Card sx={{ width: { md: "350px", sm: "300px", xs: "250px" }, padding: "10px", boxShadow: "5px", border: "1px solid #00999E", ml: { sm: "50px", xs: "50px", md: "0px" } }}>
              <Box sx={{ height: "10px", backgroundColor: "#00999E", borderRadius: "10px" }}></Box>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                  fontFamily: "Nunito, sans-serif",
                  display: "flex",
                  color: "#706C6D",
                  justifyContent: "center",
                  textAlign: "justify",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                {data?.description}
              </Typography>
            </Card>
          </Box>
        )}
        {clicked ? (
          <Box onClick={() => {
            setClicked(!clicked);
            if (!clicked) setContent(data.description);
            else setContent(null);
          }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={5}
            height={80}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              flexDirection: "column",
              paddingTop: "20px",
              fontsize: "30px",
            }}
          >
            <Icon
              icon="gg:arrow-up-o"
              style={{ fontSize: "30px", color: "#00999E" }}
            />
          </Box>
        ) : (
          <Box onClick={() => {
            setClicked(!clicked);
            if (!clicked) setContent(data.description);
            else setContent(null);
          }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={5}
            height={80}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              flexDirection: "column",
              paddingTop: "20px",
              fontsize: "30px",
            }}
          >
            <Icon
              icon="gg:arrow-down-o"
              style={{ fontSize: "30px", color: "#00999E" }}
            />
          </Box>
        )}
      </Box >
    </>
  );
};

export default ImmigrationOfferCard;
