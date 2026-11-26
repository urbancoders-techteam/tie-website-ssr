// @ts-nocheck
import { Box, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import myImage from "../ScoreEmpty.png";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";

const EmptyScoreBoard = () => {
  return (
    <Box sx={{ padding: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   height: "100vh",
          //   backgroundColor: "#f5f5f5", // Optional background color
        }}
      >
        <img
          src={myImage} // Replace with your image URL
          alt="Example"
          style={{
            maxWidth: "30%",
            height: "30%",
            borderRadius: "8px", // Optional border radius
          }}
        />
      </Box>
      <MainHeader
        content={"Your Test Calculation is in process,"}
        fontWeight={"550"}
        fontSize={"28px"}
        textAlign={"center"}
      />
      <MainHeader
        content={"Please view after sometime."}
        fontWeight={"550"}
        fontSize={"28px"}
        textAlign={"center"}
      />
      <Box
        sx={{
          paddingTop: "20px",
          display: "flex", // Use flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          // minHeight: '100vh',             // Set minimum height to 100% of the viewport height
          //   backgroundColor: "#f5f5f5", // Optional background color
        }}
      >
        <Box
          sx={{
            width: "60%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Nunito, sans-serif", // Set the font family
              fontSize: "15px", // Set the font size
              fontWeight: 400, // Set the font weight
              textAlign: "center", // Center align the text
              color: "#706C6D",
            }}
          >
            {/* Lorem ipsum dolor sit amet consectetur. Vel elementum sollicitudin
            vestibulum ultricies est magna. Pellentesque iaculis risus tellus
            duis interdum in tortor eu ultrices. Eu eu euismod curabitur
            ultricies facilisis. */}
          </Typography>

          <Box
            sx={{
              paddingTop: "10px",
              display: "flex", // Use flexbox
              justifyContent: "center", // Center horizontally
              marginTop: "20px", // Add some spacing above the button
            }}
          >
            <ButtonComponent
              // onClick={handleButtonClick}
              width={"30%"}
              text={"Go To Test Series"}
              icon={
                <Icon icon="eva:arrow-forward-fill" style={{ color: "#fff" }} />
              }
              fontWeight={"550"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyScoreBoard;
