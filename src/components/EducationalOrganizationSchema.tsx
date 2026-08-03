/** Global EducationalOrganization JSON-LD (one site-wide org entity). */
export default function EducationalOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://taksheela.com/#organization",
    name: "Taksheela Institute of Education",
    url: "https://taksheela.com",
    logo: "https://taksheela.com/images/TIE_LOGO.png",
    email: "info@taksheela.com",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "79/16 Palm Avenue, Ballygunje Phari",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700019",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress:
          "Hub Hive 11, 1st Floor, 262, Plot 1, ITDC Western Marg, Near Saket Metro",
        addressLocality: "New Delhi",
        postalCode: "110017",
        addressCountry: "IN",
      },
    ],
    sameAs: [
      "https://www.facebook.com/taksheelainstituteofeducation/",
      "https://www.instagram.com/taksheela_studyabroad/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
