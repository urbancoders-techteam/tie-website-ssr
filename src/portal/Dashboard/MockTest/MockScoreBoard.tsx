// @ts-nocheck
/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
import MainHeader from "@/portal/Component/content-component/MainHeader";

import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { useNavigate } from "@/portal/navigation";
import AnswerTable from "./Components/ScoreTable";

const MockScoreBoardtest = ({ completed = false }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: "30px",
          paddingTop: "20px",
        }}
      >
        <Button
          onClick={handleBack}
          variant="contained"
          size="small"
          color="primary"
          startIcon={<NavigateBeforeRoundedIcon fontSize="18px" />}
          sx={{
            backgroundColor: "#00999E",
            color: "#ffffff",
            "&:hover": {
              color: "#00999E",
              backgroundColor: "#f0f0f0",
            },
            fontWeight: 600,
            mr: 2,
            borderRadius: "5px",
          }}
        >
          Back
        </Button>
        <Icon
          icon="heroicons:light-bulb"
          style={{ color: "#00999E", fontSize: "28px" }}
        />
        <Box sx={{ pl: "20px" }}>
          <MainHeader
            content={"Score Board "}
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>

      <Box sx={{ padding: 2 }}>
        <Box sx={{ marginTop: 1 }}>
          <AnswerTable />
        </Box>
      </Box>
    </Box>
  );
};

export default MockScoreBoardtest;
