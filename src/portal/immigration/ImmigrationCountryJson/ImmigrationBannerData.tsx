// @ts-nocheck
const imageBaseUrl = process.env.REACT_APP_IMAGE_URL

const australia = imageBaseUrl + "immigrationcountrybanner/australia.png";
const uk = imageBaseUrl + "immigrationcountrybanner/uk.png";
const canada =  imageBaseUrl + "immigrationcountrybanner/canada.png";



const CanadaImmigrationBanner =
{
    title: "Canada",
    content: "Canada, known for its diverse landscapes and inclusive society, welcomes immigrants seeking new opportunities. It embraces newcomers, fostering an environment where everyone can thrive. From vibrant cities to peaceful rural areas, Canada offers high-quality living, excellent healthcare, and abundant economic prospects. Its strong economy, peaceful society, and stunning natural beauty make it a promising destination for all.",
    image: canada,
};
const UkImmigrationBanner =
{
    title: "United Kingdom",
    content: "Welcome to the United Kingdom, where history meets innovation and diversity thrives. From London's vibrant streets to Scotland's serene countryside, opportunities for growth and exploration abound. Our nation embraces global talent, offering a renowned education system, a thriving job market, and a rich cultural heritage. Join us in celebrating inclusivity and diversity as we forge a brighter future together.",
    image: uk,
};
const AustraliaImmigrationBanner =
{
    title: "Australia",
    content: "From the bustling metropolises of Sydney and Melbourne to the rugged beauty of the Outback, Australia offers a unique blend of urban sophistication and natural splendor. With a high standard of living, world-class healthcare, and a robust economy, it's no surprise that Australia consistently ranks among the top destinations for immigrants seeking a better future. Whether drawn by its renowned education system, thriving job market, or a safe and welcoming environment to raise a family, Australia has much to offer.",
    image: australia,
};

export { CanadaImmigrationBanner, UkImmigrationBanner, AustraliaImmigrationBanner };