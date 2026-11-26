// @ts-nocheck
import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { styled } from '@mui/system';
import Header from "@/portal/Component/content-component/Header";

const FlipCardContainer = styled(Box)(({ theme }) => ({
    perspective: '1000px',
    width: 280,
    height: 280,
    margin: '20px',
    position: 'relative',
    '&:hover .flip-card-inner': {
        transform: 'rotateY(180deg)',
    },
}));

const FlipCardInner = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '50%',
    border: "1px solid #c1c1c1"
}));


const FlipCardFront = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: '#ffffff',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '50%',
}));

const FlipCardBack = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    background: 'linear-gradient(180deg, #00DFE7, #008C90)',
    color: 'white',
    transform: 'rotateY(180deg)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '50%',
}));

const rotate = {
    '@keyframes rotate': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        },
    },
};

const FlipCardBorder = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    zIndex: -1,
    padding: "10px",
    width: 'calc(100% + 10px)',
    height: 'calc(100% + 10px)',
    borderRadius: '50%',
    border: '60px dashed #00999E',
    animation: 'rotate 5s linear infinite',
    ...rotate,
}));

const FlipCard = ({ frontContent, backContent, icon }) => {
    return (
        <FlipCardContainer>
            <FlipCardBorder />

            <Box sx={{ zIndex: 111, padding: "10px", borderRadius: "50%", bgcolor: "#effdff", height: "284px", width: "284px" }}>
                <FlipCardInner className="flip-card-inner">
                    <FlipCardFront className="flip-card-front">
                        <Box>
                            <img src={icon} alt='' />
                        </Box>
                        <Typography variant="h6" sx={{ textAlign: "center", padding: "0px 15px" }}>{frontContent}</Typography>
                    </FlipCardFront>
                    <FlipCardBack className="flip-card-back">
                        <Typography variant="body1" sx={{ fontSize: "14px", textAlign: "center", fontWeight: "500", padding: "0px 10px" }}>{backContent}</Typography>
                    </FlipCardBack>
                </FlipCardInner>
            </Box>
        </FlipCardContainer>
    );
};

const ImmigrationOverview = ({ data }) => {


    return (
        <Box sx={{ bgcolor: "#effdff", padding: "40px 0px" }}>

            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', pt: 4 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 5,
                    }}
                >
                    <Header content={"Immigration Overview"} textAlign={"center"} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={2} >
                        {data?.map((item, index) => (
                            <Grid item lg={4} md={4} sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                                <FlipCard
                                    key={index}
                                    frontContent={item.frontContent}
                                    backContent={item.backContent}
                                    icon={item.icon}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default ImmigrationOverview;
