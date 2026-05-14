export type WhyStudyAbroadFeature = {
  id: string;
  title: string;
  description: string;
};

export const whyStudyAbroadContent = {
  eyebrow: "Why study abroad?",
  heading: "Open Doors That Stay Open for a Lifetime",
  description:
    "Studying abroad is one of the most transformative decisions you can make. It shapes how you think, how you lead, and how you grow — with global exposure, recognised degrees, and career pathways that last a lifetime.",
  mainImageSrc:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  mainImageAlt: "Students collaborating outdoors with a laptop",
  secondaryImageSrc:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  secondaryImageAlt: "Team discussion in a modern meeting room",
  floatingCard: {
    value: "14+",
    valueLabel: "Countries",
    subtitle: "Guided by experts",
  },
  features: [
    {
      id: "global",
      title: "Global Exposure",
      description: "Diverse cultures, international peers & world-class teaching",
    },
    {
      id: "career",
      title: "Career Acceleration",
      description: "International degrees unlock global employer networks",
    },
    {
      id: "degrees",
      title: "Globally Recognised Degrees",
      description: "UK, Australia, Europe degrees respected worldwide",
    },
    {
      id: "research",
      title: "Research-Led Learning",
      description: "World-class labs, research facilities & industry ties",
    },
    {
      id: "earning",
      title: "Higher Earning Potential",
      description: "International graduates earn significantly more globally",
    },
    {
      id: "visa",
      title: "Post-Study Work Visas",
      description: "UK, Australia, Canada offer 2-4 year work-after-study rights",
    },
    {
      id: "courses",
      title: "Wider Course Choices",
      description: "Niche, interdisciplinary & industry-aligned programmes",
    },
    {
      id: "alumni",
      title: "Global Alumni Network",
      description: "Lifelong connections across industries & continents",
    },
  ] satisfies WhyStudyAbroadFeature[],
  ctaText: "Explore Your Options — Free Counselling",
} as const;
