export default function WhyChooseUs() {
  const features = [
    {
      icon: '🎓',
      title: 'Official Admission Guidance',
      description: 'Direct admission support for top Dubai universities with verified processes.'
    },
    {
      icon: '✔️',
      title: '100% Genuine Process',
      description: 'Transparent documentation and ethical counselling you can trust.'
    },
    {
      icon: '🧑‍🏫',
      title: 'Personalized Counselling',
      description: 'Course and university selection based on your academic profile.'
    },
    {
      icon: '💰',
      title: 'Scholarship Guidance',
      description: 'Assistance in securing scholarships and financial planning.'
    },
    {
      icon: '✈️',
      title: 'Visa & Accommodation',
      description: 'Complete support for visa processing and student housing.'
    }
  ]

  return (
    <section className="why-choose-us" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We make your international education journey simple, secure, and successful.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}