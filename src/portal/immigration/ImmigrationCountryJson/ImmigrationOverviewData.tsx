// @ts-nocheck
const imageBaseUrl = process.env.REACT_APP_IMAGE_URL

const o1 = imageBaseUrl + "immigrationOverview/overview1.png";
const o2 = imageBaseUrl + "immigrationOverview/overview2.png";
const o3 = imageBaseUrl + "immigrationOverview/overview3.png";
const o4 = imageBaseUrl + "immigrationOverview/overview4.png";
const o5 = imageBaseUrl + "immigrationOverview/overview5.png";
const o6 = imageBaseUrl + "immigrationOverview/overview6.png";
const CanadaImmigrationOverview = [
    {
        frontContent: "Immigration Options",
        backContent: "Canada welcomes 40,000-50,000 Indians annually through skilled worker programs, family sponsorship, and study permits.",
        icon: o1
    },
    {
        frontContent: "Processing Times",
        backContent:
            "Immigration application processing times for Indians vary from several months to over a year, depending on the visa category.",
        icon: o2
    },
    {
        frontContent: "Permanent Residency",
        backContent: "Over 1.2 million Indian immigrants hold permanent residency in Canada, making up a significant portion of the population.",
        icon: o3
    },
    {
        frontContent: "Pathway to Citizenship",
        backContent: "Thousands of Indian immigrants naturalise annually, forming one of the largest groups of new Canadian citizens.",
        icon: o4
    },
    {
        frontContent: "Quality of Life",
        backContent: "Canada offers excellent healthcare, education, safety, and social services, with high global quality of life rankings and cultural diversity.",
        icon: o5
    },
    {
        frontContent: "English Language Proficiency",
        backContent: "Indians typically achieve high scores on English proficiency tests like IELTS or CELPIP, meeting immigration requirements.",
        icon: o6
    },

];
const AustraliaImmigrationOverview = [
    {
        frontContent: "Immigration Options",
        backContent: "Australia offers diverse immigration pathways, including skilled migration, family sponsorship, and student visas",
        icon: o1
    },
    {
        frontContent: "Processing Times",
        backContent:
            "Processing times vary from a few months to over a year depending on the visa category and individual circumstances.",
        icon: o2
    },
    {
        frontContent: "Permanent Residency",
        backContent: "Over 700,000 Indian-born individuals reside in Australia, forming a significant part of the immigrant population.",
        icon: o3
    },
    {
        frontContent: "Pathway to Citizenship",
        backContent: "Indians can apply for Australian citizenship after residing in the country for at least four years under certain visa categories",
        icon: o4
    },
    {
        frontContent: "Quality of Life",
        backContent: "Australia consistently ranks high in quality of life indices, offering access to healthcare, education, social services, and natural amenities.",
        icon: o5
    },
    {
        frontContent: "English Language Proficiency",
        backContent: "English proficiency is required for most visa categories, demonstrated through standardized tests like IELTS.",
        icon: o6
    },

];
const UkImmigrationOverview = [
    {
        frontContent: "Immigration Options",
        backContent: "The UK grants over 60,000 visas to Indians annually, including skilled worker, family sponsorship, and student visas.",
        icon: o1
    },
    {
        frontContent: "Processing Times",
        backContent:
            "The UK grants over 60,000 visas to Indians annually, including skilled worker, family sponsorship, and student visas.",
        icon: o2
    },
    {
        frontContent: "Permanent Residency",
        backContent: "Over 700,000 Indian-born individuals reside in the UK, a significant part of the immigrant population.",
        icon: o3
    },
    {
        frontContent: "Pathway to P.R",
        backContent: "Indians can apply for British citizenship after five years under specific visas, with naturalization taking several months.",
        icon: o4
    },
    {
        frontContent: "Quality of Life",
        backContent: "The UK ranks high in quality of life, offering excellent healthcare, education, social services, and cultural amenities.",
        icon: o5
    },
    {
        frontContent: "English Language Proficiency",
        backContent: "Indians typically achieve high scores on English proficiency tests such as IELTS, CELPIP, and UKVI, successfully meeting immigration requirements.",
        icon: o6
    },

];

export {
    CanadaImmigrationOverview,
    AustraliaImmigrationOverview,
    UkImmigrationOverview
};
