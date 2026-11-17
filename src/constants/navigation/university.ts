export const universityGroups = [
  {
    label: "MBBS Abroad", icon: "🩺", href: "/mbbs",
    countries: [
      { name: "Russia", flag: "🇷🇺", slug: "russia" },
      { name: "Georgia", flag: "🇬🇪", slug: "georgia" },
      { name: "Kazakhstan", flag: "🇰🇿", slug: "kazakhstan" },
      { name: "Kyrgyzstan", flag: "🇰🇬", slug: "kyrgyzstan" },
      { name: "Uzbekistan", flag: "🇺🇿", slug: "uzbekistan" },
    ].map(country => ({ ...country, href: `/mbbs/abroad/${country.slug}` })),
  },
  {
    label: "Study Abroad", icon: "🎓", href: "/study-abroad",
    countries: [
      { name: "USA", flag: "🇺🇸", slug: "USA" },
      { name: "UK", flag: "🇬🇧", slug: "UK" },
      { name: "Ireland", flag: "🇮🇪", slug: "Ireland" },
      { name: "Canada", flag: "🇨🇦", slug: "Canada" },
      { name: "Germany", flag: "🇩🇪", slug: "Germany" },
      { name: "Australia", flag: "🇦🇺", slug: "Australia" },
      { name: "Singapore", flag: "🇸🇬", slug: "Singapore" },
      { name: "Italy", flag: "🇮🇹", slug: "Italy" },
      { name: "France", flag: "🇫🇷", slug: "France" },
      { name: "Dubai", flag: "🇦🇪", slug: "Dubai" },
      { name: "New Zealand", flag: "🇳🇿", slug: "New-Zealand" },
    ].map(country => ({ ...country, href: `/study-abroad/country/${country.slug}` })),
  },
];
