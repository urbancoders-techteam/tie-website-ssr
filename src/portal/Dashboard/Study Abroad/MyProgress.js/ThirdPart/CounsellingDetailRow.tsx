// @ts-nocheck
import { Box, Typography } from "@mui/material";
import { memo } from "react";
import { counsellingLabelSx } from "./counsellingMeetingUtils";

function CounsellingDetailRow({ label, value, action }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        gap: 2,
        flexWrap: { xs: "wrap", sm: "nowrap" },
      }}
    >
      <Typography variant="subtitle2" sx={counsellingLabelSx}>
        {label}
      </Typography>
      {action ?? (
        <Typography
          sx={{
            ...counsellingLabelSx,
            textAlign: { xs: "left", sm: "right" },
          }}
        >
          {value}
        </Typography>
      )}
    </Box>
  );
}

export default memo(CounsellingDetailRow);
