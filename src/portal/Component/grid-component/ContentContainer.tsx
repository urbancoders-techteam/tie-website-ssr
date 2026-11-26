// @ts-nocheck
import { Box, Container } from "@mui/material";
import { useNavigate } from "@/portal/navigation";
import Tooltip from "@mui/material/Tooltip";

const ContentContainer = ({ Header, Content, images, style, button }) => {
  const navigate = useNavigate();
  const handleNavigation = (page, section) => {
    window.scrollTo(0, 0);
    navigate(page + section);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Container style={style}>
          {Header}
          {Content}
          {images && images.length > 0 && (
            <Container  style={{ paddingTop: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  width: { md: "70%", sm: "70%", xs: "90%" },
                  height: "50%",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                    lg: "row",
                    sm: "row",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: { md: "60%", sm: "60%", xs: "80%" },
                    height: "30%",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "left",
                      lg: "left",
                    },
                    alignItems: "center",
                  }}
                >
                  {images?.map((data, index) => (
                    <>
                      <Tooltip title={data?.title}>
                        <Box
                          key={index}
                          sx={{
                            width: { md: "80px", xs: "100px", },
                            height: "50px",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",

                          }}
                          onClick={() =>
                            handleNavigation(data?.page, data?.section)
                          }
                        >
                          <img
                            src={data?.image}
                            alt={`ContentImage ${index + 1}`}
                            width={"40px"}
                            height="40px"
                          />
                        </Box>
                      </Tooltip>
                    </>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: { xs: "center" },
                    marginLeft: {
                      xs: "-55px",
                      sm: "0px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  {button}
                </Box>
              </Box>
            </Container>
          )}
        </Container>
      </Box>
    </>
  );
};

export default ContentContainer;
