// @ts-nocheck
const imageBaseUrl = process.env.REACT_APP_IMAGE_URL

const c1 = imageBaseUrl + 'immigrationCriteria/criteria1.png'
const c2 = imageBaseUrl + 'immigrationCriteria/criteria2.png'
const c3 = imageBaseUrl + 'immigrationCriteria/criteria3.png'
const c4 = imageBaseUrl + 'immigrationCriteria/criteria4.png'
const c5 = imageBaseUrl + 'immigrationCriteria/criteria5.png'


const CanadaImmigrationCriteria = {
    heading: "Canada Criteria for Points System",
    items: [

        {
            title: "Age",
            img: c1,
        },
        {
            title: "Language Proficiency (English/French)",
            img: c2,
        },
        {
            title: "Work Experience",
            img: c3,
        },
        {
            title: "Education Qualifications",
            img: c4,
        },
        {
            title: "Adaptability Factors",
            img: c5,
        },



    ]
};
const UkImmigrationCriteria = {
    heading: "United Kingdom Criteria for Points System",

    items: [

        {
            title: "Age",
            img: c1,
        },
        {
            title: "English Language Proficiency",
            img: c2,
        },
        {
            title: "Work Experience",
            img: c3,
        },
        {
            title: "Education Qualifications",
            img: c4,
        },
        {
            title: "Financial Stability",
            img: c5,
        },

    ]
};
const AustraliaImmigrationCriteria = {
    heading: "Australia Criteria for Points System",

    items: [

        {
            title: "Age",
            img: c1,
        },
        {
            title: "English Language Proficiency",
            img: c2,
        },

        {
            title: "Skilled Employment",
            img: c3,
        },
        {
            title: "Education Qualifications",
            img: c4,
        },
        {
            title: "Other Factors",
            img: c5,
        },


    ]
};

export { CanadaImmigrationCriteria, UkImmigrationCriteria, AustraliaImmigrationCriteria }