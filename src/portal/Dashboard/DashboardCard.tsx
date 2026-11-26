// @ts-nocheck
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React from "react";
import { useNavigate } from "@/portal/navigation";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";

const DashboardCard = ({ data, id, isLoading }) => {
  const navigate = useNavigate();

  // Determine if buttons should be shown
  const showButtons = data.showButtons !== false;
  const showFirstButton = showButtons && data.showFirstButton !== false;
  const showSecondButton = showButtons && data.showSecondButton === true;

  return (
    <Grid
      container
      spacing={0}
      direction={id % 2 === 0 ? "row-reverse" : "row"}
      sx={{
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      {/* TEXT SECTION */}
      <Grid item md={7} sm={12} xs={12} sx={{ p: 0, m: 0 }}>
        <Box
          sx={{
            height: "260px",
            width: "100%",
            position: "relative",
            backgroundColor: "#00999e",
            borderRadius: id % 2 === 0 ? "0 5px 5px 0" : "5px 0 0 5px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
              px: 3,
              py: 2,
            }}
          >
            {/* <Box
              sx={{
                flex: "1 1 auto",
                overflow: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            > */}
            <Typography
              variant="h5"
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                textAlign: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              {data?.title}
            </Typography>
            {/* <Typography
                variant="body1"
                sx={{
                  color: "#ffffff",
                  textAlign: "left",
                  fontSize: "0.9rem",
                  mb: 2,
                }}
              >
                {data?.para || "Your paragraph text goes here..."}
              </Typography> */}
            {/* </Box> */}

            {/* Buttons Container - Only render if at least one button is visible */}
            {(showFirstButton || showSecondButton) && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  paddingTop: 2,
                  flex: "0 0 auto",
                }}
              >
                {showFirstButton && (
                  <ButtonComponent
                    backgroundColor={"#ffffff !important"}
                    hoverbackgroundColor={"#5CD2D6 !important"}
                    text={
                      isLoading
                        ? "loading..."
                        : data?.secondButtonText || "View Details"
                    }
                    color={"#00999E !important"}
                    fontWeight={"600 !important"}
                    width={"150px"}
                    disabled={isLoading}
                    onClick={() => {
                      if (data?.path?.startsWith("http")) {
                        window.open(data?.path);
                      } else {
                        navigate(data?.path);
                      }
                    }}
                  />
                )}

                {showSecondButton && (
                  <ButtonComponent
                    backgroundColor={"#ffffff !important"}
                    disabled={isLoading}
                    hoverbackgroundColor={"#5CD2D6 !important"}
                    text={
                      isLoading
                        ? "loading..."
                        : data?.secondButtonText || "View Plan"
                    }
                    color={"#00999E !important"}
                    fontWeight={"600 !important"}
                    width={"150px"}
                    // to={data?.secondButtonPath}
                    onClick={() =>
                      //   data?.secondButtonAction &&
                      navigate(data.secondButtonPath)
                    }
                  />
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Grid>

      {/* IMAGE SECTION */}
      <Grid item md={5} sm={12} xs={12} sx={{ p: 0, m: 0 }}>
        <Box
          sx={{
            height: "260px",
            width: "100%",
            maxWidth: "100%",
            background: "linear-gradient(to right, #767676, #CFDFE0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: id % 2 === 0 ? "5px 0 0 5px" : "0 5px 5px 0",
            overflow: "hidden",
          }}
        >
          <img
            src={data?.image}
            alt=""
            style={{
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardCard;
