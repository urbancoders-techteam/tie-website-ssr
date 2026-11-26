// @ts-nocheck
import { Icon } from "@iconify/react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import CustomCard from "./custom-cardFormController";
import CustomButtonComponent from "./custom-buttonCardComponent";

const Cta = ({ title ,}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box>
      <CustomButtonComponent
        fontSize={{sm:"18px", xs:'16px'}}
        // width="auto"
        padding={{md:"10px 30px", xs:"6px 20px"}}
        text={title || "Register Now"}
        onClick={handleOpenDialog}
      />
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "13px",
            maxWidth: "320px",
          },
        }}
      >
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "inherit",
            }}
          >
            <Icon icon="bitcoin-icons:cross-outline" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <CustomCard setOpenDialog={setOpenDialog}  />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Cta;
