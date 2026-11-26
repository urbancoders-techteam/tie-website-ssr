// @ts-nocheck
import React from "react";
import { Box, Paper, Typography, Tooltip, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import right from "@/portal/asset/Right_abroad.svg";
import { ArrowForwardIos } from "@mui/icons-material";

const CustomScrollView = ({ title, subTitle, dataList }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 , mt : 5 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={right} alt="Icon" height={50} width={50} />
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: isSmallScreen ? "100%" : "200px",
                height: "140px",
                padding: "16px 0",
                borderRadius: "12px",
                backgroundColor: "#00999E",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "20px" },
                  fontWeight: "bold",
                }}
              >
                {title && title}
              </Typography>
            </Box>
            <ArrowForwardIos
              sx={{ color: "#00999E", fontSize: { xs: "16px", sm: "24px" } }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              mt: { xs: 2, sm: 8 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "15px" },
                  fontWeight: 600,
                  mb: 2,
                  textAlign: "left",
                }}
              >
                {subTitle && subTitle}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "auto",
                width: "100%",
                maxWidth: "638px",
                backgroundColor: "#00999E",
                borderRadius: "20px",
                display: "flex",
                flexWrap: isSmallScreen ? "wrap" : "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                gap: 2,
              }}
            >
              {dataList?.map((item, index) => (
                <Tooltip
                  key={index}
                  placement={isSmallScreen ? "bottom" : "top"}
                  title={item.about}
                  arrow
                  PopperProps={{
                    modifiers: [
                      {
                        name: "preventOverflow",
                        options: { boundary: "viewport" },
                      },
                    ],
                  }}
                  slotProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "#00999E",
                        color: "white",
                        fontSize: "12px",
                        maxWidth: "140px",
                        borderRadius: "8px",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: "32px",
                      width: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {item.idx}
                  </Box>
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CustomScrollView;
