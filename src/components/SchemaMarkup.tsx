import React from "react";

// App Router: do not use next/head — use script in layout head instead
const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Taksheela Institute Of Education",
    "image": "https://www.taksheela.com/images/TIE_LOGO.png",
    "@id": "https://www.taksheela.com/",
    "url": "https://www.taksheela.com/",
    "telephone": "+91-9831241212",
    "priceRange": "Varies",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "79/16 Palm Avenue, Ballygunje Phari",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700019",
      "addressCountry": "IN"
    },
    "description":
      "Taksheela Institute Of Education provides expert guidance in overseas education, test preparation, visa support, and career counselling to help students achieve global academic success.",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5726,
      "longitude": 88.3639
    },
    "sameAs": [
      "https://www.instagram.com/taksheelaedu/",
      "https://www.twitter.com/TIE_Taksheela",
      "https://www.facebook.com/taksheelainstituteofeducation/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Services by Taksheela Institute Of Education",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Study Abroad Consulting",
            "description":
              "Expert counselling for studying abroad in top destinations like Canada, UK, USA, Germany, and Australia."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Test Preparation (IELTS, GRE, SAT, TOEFL)",
            "description":
              "Personalized coaching programs to help students achieve high scores in globally recognized entrance exams."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visa Assistance",
            "description":
              "Comprehensive support for student visa documentation, submission, and interview guidance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Counselling",
            "description":
              "Professional counselling to help students choose the right course and destination for career success."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "University Admission Support",
            "description":
              "Assistance with university shortlisting, application process, and securing admission to top global institutions." 
          }
        }
      ]
    }
  };

  return (
    <script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
};

export default SchemaMarkup;
