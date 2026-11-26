// @ts-nocheck
import { Icon } from "@iconify/react";
import { Box, Container, Dialog, DialogTitle, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React, { useState } from "react";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";
import Header from "@/portal/Component/content-component/Header";
import FormComponent from "@/portal/Component/form-component/Form";

const ImmigrationCountryBenefit = ({ data }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    return (
        <Box sx={{ padding: "40px 0" }}>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 5,
                    }}
                >
                    <Header content={"Benefits"} textAlign={"center"} />
                </Box>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        data?.map((item, index) => (
                            <Grid item lg={3} md={4} sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>


                                <Box>
                                    <Box
                                        sx={{
                                            width: "280px",
                                            height: "330px",
                                            bgcolor: "#ffffff",
                                            borderRadius: "35px",
                                            border: "2px solid #c1c1c1",
                                            boxShadow: " rgba(100, 100, 111, 0.2) 7px 7px 29px 0px",
                                            "&:hover": { bgcolor: "#effdff" },
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center", alignItems: "center"
                                        }}
                                    >
                                        <Box sx={{ width: "130px" }}>
                                            <img src={item?.img} width={"100%"} alt="immigration-benefit" />
                                        </Box>
                                        <Box sx={{ width: "240px", padding: "10px 0" }}>
                                            <Typography variant="h6" textAlign={"center"}>{item?.title}</Typography>
                                        </Box>

                                    </Box>
                                </Box></Grid>
                        ))
                    }
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

export default ImmigrationCountryBenefit;
