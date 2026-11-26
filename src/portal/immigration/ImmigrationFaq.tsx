// @ts-nocheck
import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { Icon } from "@iconify/react";
import Header from "@/portal/Component/content-component/Header";
import ButtonComponent from "@/portal/Component/content-component/ButtonComponent";

const initialDisplayCount = 8;
const ImmigrationQuestions = () => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const handleExploreAllClick = () => {
    setDisplayCount(data.length);
  };

  const handleShowLessClick = () => {
    setDisplayCount(initialDisplayCount);
  };
  return (
    <Box sx={{ padding: "50px 0", background: "#EFFDFF" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "30px",
          }}
        >
          <Header
            content={"Frequently Asked Questions"}
            color="#00999E"
            textAlign={"center"}
          />
        </Box>
        <Grid container spacing={3}>
          {data.slice(0, displayCount).map((item, i) => (
            <Grid item xs={12} md={6} key={item.question}>
              <AccordianCard data={item} i={i} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <ButtonComponent
            borderRadius="50px"
            text={
              displayCount === initialDisplayCount
                ? "Explore All Questions"
                : "Show Less"
            }
            fontSize="18px"
            padding="10px 30px"
            width="auto"
            // href="/"
            onClick={
              displayCount === initialDisplayCount
                ? handleExploreAllClick
                : handleShowLessClick
            }
          />
        </Box>
      </Container>
    </Box>
  );
};
export default ImmigrationQuestions;

const AccordianCard = ({ data, i }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <>
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
              <Box
                component="span"
                sx={{
                  display: "inline-flex",
                  background: "#00999E",
                  borderRadius: "5px",
                  p: "8px",
                }}
              >
                <Icon icon="lucide:minus" color="#fff" />
              </Box>
            ) : (
              <Box
                component="span"
                sx={{
                  display: "inline-flex",
                  background: "#F7F7FF",
                  borderRadius: "5px",
                  p: "8px",
                }}
              >
                <Icon
                  icon="ic:baseline-add"
                  color="#00999E"
                  className="add-icon"
                />
              </Box>
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
                {i + 1}. {data?.question}
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              ml: 1,
              fontSize: { sm: "18px", xs: "16px" },
              fontWeight: "500",
              fontFamily: "Nunito, sans-serif",
              color: "#6F6C90",
            }}
          >
            {data?.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

const data = [
  {
    "question": "What are the main immigration pathways to Canada?",
    "answer": "Common pathways include Express Entry, Provincial Nominee Programs (PNPs), and Family Sponsorship."
  },
  {
    "question": "How do I qualify for Express Entry to Canada?",
    "answer": "Qualification is based on factors like age, education, work experience, language proficiency, and adaptability."
  },
  {
    "question": "What is the Skilled Worker category in the UK?",
    "answer": "It's a visa category for individuals with job offers or in-demand skills needed in the UK."
  },
  {
    "question": "Can I bring my family to the UK on a Skilled Worker visa?",
    "answer": "Yes, you can bring your spouse/partner and dependent children to the UK."
  },
  {
    "question": "What are the major visa categories for immigration to Australia?",
    "answer": "Skilled Migration, Family Visas, and Employer-Sponsored Visas are common categories."
  },
  {
    "question": "How can I immigrate to Australia as a skilled worker?",
    "answer": "Apply through the General Skilled Migration program or seek sponsorship from an Australian employer."
  },
  {
    "question": "What is the Points Test in Australia?",
    "answer": "It's a system that assigns points based on factors like age, English proficiency, work experience, and qualifications."
  },
  {
    "question": "What is the Express Entry system in Canada?",
    "answer": "It's an online system for managing applications for permanent residence under economic immigration programs."
  },
  {
    "question": "Can I apply for Canadian citizenship through Express Entry?",
    "answer": "Yes, after meeting residency requirements and other criteria."
  },
  {
    "question": "How long does it take to process a Spousal Sponsorship application in Canada?",
    "answer": "Processing times vary but can take around 12 to 18 months."
  },
  {
    "question": "What is the Settlement Funds requirement for immigrating to Canada?",
    "answer": "It depends on the number of family members immigrating with you."
  },
  {
    "question": "Do I need a job offer to apply for a Skilled Worker visa in the UK?",
    "answer": "In some cases, yes, but not always. It depends on the visa category and eligibility criteria."
  },
  {
    "question": "What is the Health Requirement for immigration to Australia?",
    "answer": "Applicants must undergo health examinations to ensure they meet health standards."
  },
  {
    "question": "Can I include my partner in my Australian visa application?",
    "answer": "Yes, you can include your spouse, de facto partner, or same-sex partner in your application."
  },
  {
    "question": "How can I sponsor my parents to come to Canada?",
    "answer": "You can apply for the Parents and Grandparents Program (PGP) when it opens for new applications."
  },
  {
    "question": "What is the English language requirement for immigrating to the UK?",
    "answer": "Applicants may need to pass an approved English language test, depending on the visa category."
  },
  {
    "question": "Can I apply for permanent residency in Canada while studying there?",
    "answer": "Yes, through programs like the Canadian Experience Class (CEC) or Provincial Nominee Programs (PNPs)."
  },
  {
    "question": "What is the difference between permanent residency and citizenship in Canada?",
    "answer": "Permanent residency allows you to live, work, and study anywhere in Canada, while citizenship grants additional rights, such as voting."
  },
  {
    "question": "Is there an age limit for immigrating to Australia?",
    "answer": "There is no specific age limit, but age can affect points awarded in the Points Test."
  },
  {
    "question": "Can I apply for a visa to the UK without a job offer?",
    "answer": "Yes, there are visa categories like the Skilled Worker visa and Global Talent visa that don't require a job offer."
  },
  {
    "question": "How can I sponsor my spouse/partner for immigration to Australia?",
    "answer": "You can apply for a Partner visa based on your relationship."
  },
  {
    "question": "What is the Skilled Worker Regional (Provisional) visa in Australia?",
    "answer": "It allows skilled workers to live and work in designated regional areas of Australia for up to five years."
  },
  {
    "question": "What is the difference between a permanent visa and a temporary visa in Australia?",
    "answer": "Permanent visas allow individuals to live and work in Australia indefinitely, while temporary visas have specific time limits."
  },
  {
    "question": "Can I apply for a visa to Canada if I don't speak English or French?",
    "answer": "Yes, but proficiency in English or French may be required for certain visa categories."
  },
  {
    "question": "How can I check my eligibility for immigration to Australia?",
    "answer": "You can use the SkillSelect system or seek advice from a registered migration agent."
  },
  {
    "question": "Are there age restrictions for bringing parents to the UK?",
    "answer": "Yes, sponsors must be at least 18 years old to bring their parents to the UK."
  },
  {
    "question": "Can I work in Canada while studying there as an international student?",
    "answer": "Yes, international students with a valid study permit can work part-time on or off-campus during their studies."
  },
  {
    "question": "Can I apply for a visa to the UK if I have a criminal record?",
    "answer": "It depends on the nature and severity of the offense. Some convictions may make you inadmissible."
  },
  {
    "question": "What is the process for obtaining permanent residency in Canada through the Provincial Nominee Program (PNP)?",
    "answer": "It varies by province, but generally involves obtaining a nomination from a province and then applying for permanent residency to Immigration, Refugees and Citizenship Canada (IRCC)."
  },
  {
    "question": "Is there a fast-track option for immigration to Australia?",
    "answer": "Yes, certain visa categories like the Global Talent Independent Program offer expedited processing for highly skilled individuals."
  }
];


