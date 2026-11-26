// @ts-nocheck
import { Box, Button, Card, Container } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import ComingSoonImg from "../asset/comingsoon.jpg";
import { WEB_URL } from "@/portal/config";

const ComingSoon = () => {
  return (
    <>
      
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              padding: "25px",
              m: 6,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: " center",

                paddingLeft: {
                  xs: "10px",
                  sm: "40px",
                  md: "40px",
                  lg: "40px",
                },
              }}
            >
              <Box sx={{ width: { xs: "300px", md: "500px" } }}>
                <img
                  src={ComingSoonImg}
                  alt="Coming_Soon_image"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Box>

            <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
              <Button
                onClick={() => (window.location.href = `${WEB_URL}`)}
                variant="contained"
                sx={{
                  backgroundColor: "#00999E",
                  width: "200px",
                  "&:hover": {
                    bgcolor: "#00999E",
                  },
                }}
                startIcon={<Icon icon="solar:arrow-left-linear" />}
              >
                Go Home
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
      {" "}
    </>
  );
};

export default ComingSoon;
