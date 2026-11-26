// @ts-nocheck
import { Box, Container, Dialog, DialogTitle, IconButton } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React, { useState } from 'react';
import MainHeader from "@/portal/Component/content-component/MainHeader";
import "@/portal/Component/card-components/flipcard.css";
import { Icon } from '@iconify/react';
import FormComponent from "@/portal/Component/form-component/Form";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";
import Header from "@/portal/Component/content-component/Header";

const ImmigrationVisaCard = ({ data }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    return (
        <Box sx={{ bgcolor: "#ffffff", padding: "40px 0" }}>
            <Container >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 5,
                        marginTop: 5
                    }}
                >
                    <Header content={data?.heading} textAlign={"center"} />
                </Box>
                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                    {data?.item?.map((data, index) => (
                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>

                            <Box
                                className="flip-card"
                                sx={{
                                    justifyContent: "center",
                                    display: "flex",
                                    width: "260px",
                                    height: "290px",
                                    "&:hover .flip-card-inner": {
                                        transform: "rotateY(-180deg)",
                                    },
                                    "&:hover .flip-card-front": {
                                        backgroundColor: "#00999E",
                                    },
                                    "&:hover .flip-card-front .flip-header": {
                                        color: "#ffffff",
                                    }
                                }}
                            >
                                <Box className="flip-card-inner">
                                    <Box className="flip-card-front" sx={{
                                        position: 'relative',
                                        bgcolor: "#00999E",
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${data?.img})`, // Add your background image path here
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }} >

                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: '20px', // Adjust this value to move it up or down
                                                left: '20px', // Adjust this value to move it left or right

                                            }}
                                        >
                                            <MainHeader
                                                content={data?.title}
                                                fontSize={"18px"}
                                                color={"#fff"}
                                            />
                                        </Box>

                                    </Box>
                                    <Box className="flip-card-back" sx={{ bgcolor: "#effdff", position: "absolute", bottom: "0px", overflow: "hidden" }} >

                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                pt: "20px",
                                                pb: "5px"
                                            }}
                                        >
                                            <MainHeader
                                                content={data?.title}
                                                fontSize={"16px"}
                                                color={"#000"}
                                            />
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                paddingTop: "5px",

                                            }}
                                        >
                                            <ul>
                                                {data?.items?.map((item, index) => (
                                                    <li
                                                        key={index} // Add a key prop for each list item
                                                        style={{
                                                            fontSize: "12px",
                                                            fontFamily: "Nunito, sans-serif",
                                                            textAlign: "justify",
                                                            margin: "0px 20px",

                                                            listStyle: "disc",
                                                            color: "grey"
                                                        }}
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ mt: { xs: 2, sm: 8, textAlign: 'center' } }}>
                    <ButtonComponent
                        width={"auto"}
                        fontSize="20px"
                        text="BOOK A COUNSELLING SECTION"
                        onClick={handleOpenDialog}
                    />
                </Box>

            </Container>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>
                    Register Now
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseDialog}
                        sx={{ position: "absolute", right: 8, top: 8, color: "inherit" }}
                    >
                        <Icon icon="bitcoin-icons:cross-outline" />
                    </IconButton>
                </DialogTitle>
                <FormComponent
                    handleCloseDialog={handleCloseDialog}
                    setOpenDialog={setOpenDialog}
                />
            </Dialog>
        </Box>
    );
};

export default ImmigrationVisaCard;
