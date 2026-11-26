// @ts-nocheck
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "@/portal/navigation";

const BackRouteContainer = ({ path, logo, title }
) => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        window.scrollTo(0, 0);
        navigate(path);
    };
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    // alignItems: "center",
                    pl: { md: "50px", xs: "20px", sm: "30px" },
                    pt: { md: "20px", xs: "10px", sm: "20px" },
                    pb: { md: "20px", xs: "10px", sm: "20px" },
                }}
            >
                <Container >
                    <Box sx={{ display: "flex", justifyContent: "left", alignItems: "center" }} onClick={handleNavigation}>
                        <img
                            src={logo}
                            alt=""
                            onClick={handleNavigation}
                            height={"45px"} width={"45px"}
                        />
                        <Typography sx={{
                            varient: "h4",
                            fontSize: "20px",
                            fontWeight: "400",
                            pl: "20px",
                            '&:hover': {
                                color: "#00999E",
                            }

                        }}>
                            {title}
                        </Typography>
                    </Box>

                </Container>
            </Box>
        </>
    );
};

export default BackRouteContainer;
