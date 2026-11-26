// @ts-nocheck
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./flipcard.css";
import MainHeader from "../content-component/MainHeader";

const FlipCard = ({
    data,
    AbleTitle = true,
    backPaddingTop,
    fontSize,
    isFlip = true,
    isHover = false,
    cardwidth,
    cardheight,
    titlefontsize,
    padding, pb, sx, listalign,
    liststyle
}) => {
    return (
        <Container sx={sx}>
            <Box
                className="flip-card"
                sx={{
                    justifyContent: "center",
                    display: "flex",
                    width: cardwidth ?? "230px",
                    "&:hover .flip-card-inner": {
                        transform: isFlip ? "rotateY(-180deg)" : "none",
                    },
                    "&:hover .flip-card-front": {
                        backgroundColor: isHover ? "#00999E" : "#ffffff",
                    },
                    "&:hover .flip-card-front .flip-header": {
                        color: isHover ? "#ffffff" : "#000000",
                    }
                }}
            >
                <Box className="flip-card-inner">
                    <Box className="flip-card-front">
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                paddingTop: "10px",
                                pb: pb ?? "10px",
                            }}
                        >
                            <img
                                src={data?.Image}
                                alt="EligibilityImage"
                                style={{
                                    borderRadius: "50%",
                                    width: "100px",
                                    height: "100px",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                p: padding ?? "20px",
                            }}
                        >
                            <MainHeader
                                content={data?.title}
                                fontSize={titlefontsize ?? "22px"}
                                color={"#18181B"}
                            />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: "11px", color: "#706C6D", pl: "5px", pr: "8px" }}>
                                {data?.content}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flip-card-back">
                        {AbleTitle && (<Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                pt: "20px",
                                pb: "10px",
                                // px:"10px"
                            }}
                        >
                            <MainHeader
                                content={data?.title}
                                fontSize={"22px"}
                                color={"#fff"}
                            />
                        </Box>)}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",

                                paddingTop: backPaddingTop ?? "10px",
                                pb: "5px",
                            }}
                        >
                            <ul>
                                {data?.items?.map((item, index) => (
                                    <li
                                        key={`${index}-${item}`}
                                        style={{
                                            fontSize: fontSize ?? "12px",
                                            fontFamily: "Nunito, sans-serif",
                                            textAlign: listalign ?? "center",
                                            marginLeft: "20px",
                                            marginRight: "20px",
                                            listStyle: liststyle ?? "none",
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
        </Container>
    );
};

export default FlipCard;
