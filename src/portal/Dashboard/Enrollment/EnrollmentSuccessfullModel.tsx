// @ts-nocheck
import React from "react";
import { Dialog, DialogContent, Typography, Box } from "@mui/material";
import { useNavigate } from "@/portal/navigation";
import successImage from "../../asset/ordersuccess.png";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import { Icon } from "@iconify/react";

const EnrollmentSuccessModal = ({ open, handleClose, onEnrolled }) => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    onEnrolled?.();
    handleClose();
    navigate("/dashboard/home");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      sx={{
        padding: "0 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiPaper-root": {
          width: { lg: "900px", md: "700px" },
          maxWidth: "100%",
          borderRadius: "20px",
        },
      }}
    >
      <DialogContent sx={{ textAlign: "center", padding: "40px 24px" }}>
        <Box
          sx={{ display: "flex", justifyContent: "end" }}
          onClick={handleStartJourney}
        >
          <Icon icon="icon-park:close" style={{ fontSize: "30px" }} />
        </Box>
        <Box sx={{ marginBottom: "20px" }}>
          <img src={successImage} alt="success" style={{ width: "150px" }} />
        </Box>

        <MainHeader
          content={"Thank you For Enrolling with us"}
          fontSize={"32px"}
        />
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBottom
          sx={{ p: "20px 0", fontWeight: "500" }}
        >
          {/* We’re excited to help your journey towards <br />
          academic success. Here’s what you can expect <br /> */}
          We're excited to help your journey towards <br />
          academic success. Here's what you can expect <br />
          from our program
        </Typography>
        <ButtonComponent
          onClick={handleStartJourney}
          text={"Start Your Journey"}
          fontWeight={"550"}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentSuccessModal;
