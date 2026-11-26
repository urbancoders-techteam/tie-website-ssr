// @ts-nocheck
import React from "react";
import { Card, Typography, Chip, IconButton } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import CircleIcon from "@mui/icons-material/Circle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const StudyAbroadCard = ({ data, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        padding: 3,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: 400,
        margin: "auto",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Arrow Button */}
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <ChevronRightIcon sx={{ color: "#00838F" }} />
      </IconButton>

      <Typography
        variant="body1"
        fontWeight="medium"
        sx={{ fontWeight: "bold", color: "#00838F" }}
      >
        {data?.title}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 2 }}>
        {data?.subtitle}
      </Typography>

      <Grid container spacing={2}>
        {data?.statuses?.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" fontWeight="normal">
                {item.label}
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign="end">
              <Chip
                label={item.status}
                icon={
                  <CircleIcon
                    style={{ color: item.color, fontSize: "small" }}
                  />
                }
                sx={{
                  width: "120px",
                  backgroundColor: "#effdff",
                  color: "black",
                  fontWeight: "medium",
                  borderRadius: "30px",
                }}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Card>
  );
};

export default StudyAbroadCard;
