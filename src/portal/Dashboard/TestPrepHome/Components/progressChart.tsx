// @ts-nocheck
import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import Bar from "./bar";

const ChartCard = ({ progressData }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="center">
          <Bar
            attendance={progressData?.attendance}
            mocktest={progressData?.mocktest}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
