// @ts-nocheck
import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { Icon } from "@iconify/react";
import Header from "@/portal/Component/content-component/Header";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";

const initialDisplayCount = 8;


const TestFaq = ({ faqData, backgroundColor }) => {
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);

    const handleExploreAllClick = () => {
        setDisplayCount(faqData.length);
    };

    const handleShowLessClick = () => {
        setDisplayCount(initialDisplayCount);
    };
    return (
        <Box
            sx={{
                padding: { xs: "20px 0", sm: "30px 0", md: "50px 0", lg: "50px 0" },
                background: backgroundColor ?? "#EFFDFF",
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "30px 0",
                    }}
                >
                    <Header
                        content={"Frequently Asked Questions"}
                        // color="#18181B"
                        textAlign={"center"}
                    />
                </Box>
                <Grid container spacing={3}>
                    {faqData?.slice(0, displayCount).map((item, i) => (
                        <Grid item xs={12} md={6}>
                            <AccordianCard data={item} i={i} />
                        </Grid>
                    ))}
                </Grid>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        // margin: "15px 0",
                        marginTop: "25px",
                        marginBottom: "25px",
                    }}
                >

                    <ButtonComponent
                        borderRadius="30px"
                        text={displayCount === initialDisplayCount ? "Explore All Questions" : "Show Less"}
                        fontSize="18px"
                        padding="10px 10px"
                        // href="/"
                        width="220px"
                        onClick={displayCount === initialDisplayCount ? handleExploreAllClick : handleShowLessClick}
                    />

                </Box>
            </Container>
        </Box>
    );
};

export default TestFaq;

const AccordianCard = ({ data, i }) => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Accordion
            key={i}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
            sx={{
                background: expanded === `panel${i}` ? "#DDFEFF" : "#fff",
                borderRadius: "15px",
                boxShadow: "5px 11px 14px -4px rgba(0,0,0,0.1)",
                mb: 3,
                ":before": {
                    backgroundColor: "transparent ",
                },
                minHeight: "100px",
                alignContent: "center",
            }}
        >
            <AccordionSummary
                expandIcon={
                    expanded === `panel${i}` ? (
                        <IconButton
                            sx={{
                                background: "#00999E",
                                borderRadius: "5px",
                                ":hover": { background: "#00999E" },
                            }}
                        >
                            <Icon icon="lucide:minus" color="#fff" />
                        </IconButton>
                    ) : (
                        <IconButton
                            sx={{
                                background: "#F7F7FF",
                                borderRadius: "5px",
                                ":hover": { background: "#F7F7FF" },
                            }}
                        >
                            <Icon
                                icon="ic:baseline-add"
                                color="#00999E"
                                className="add-icon"
                            />
                        </IconButton>
                    )
                }
                aria-controls={`panel${i}-content`}
                id={`panel${i}-header`}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box ml={1}>
                        <Typography
                            sx={{
                                fontSize: { sm: "20px", xs: "17px" },
                                fontWeight: "600",
                                fontFamily: "Nunito, sans-serif",
                                color: "#170F49",
                            }}
                        >
                            {i + 1}. {data?.title}
                        </Typography>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                {data?.fees && (
                    <table
                        border="1"
                        style={{
                            borderCollapse: "collapse",
                            width: "100%",
                            textAlign: "left",
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={{ padding: "3px", fontSize: "16px" }}>GMAT</th>
                                <th style={{ padding: "3px", fontSize: "16px" }}>Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.fees?.map((item, i) => (
                                <tr key={i}>
                                    <td style={{ padding: "3px", fontSize: "14px" }}>
                                        {item?.GMAT}
                                    </td>
                                    <td style={{ padding: "3px", fontSize: "14px" }}>
                                        {item?.FEES}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <Typography
                    sx={{
                        ml: 1,
                        fontSize: { sm: "18px", xs: "16px" },
                        fontWeight: "500",
                        fontFamily: "Nunito, sans-serif",
                        color: "#6F6C90",
                    }}
                >
                    {data?.Desc}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

