export default function KeyFeatures() {
  const features = [
    {
      icon: '🎓',
      title: 'Popular Programs',
      points: ['BBA, B.Tech, BCA', 'MBA, MSc, Engineering, IT', 'Business & more specializations']
    },
    {
      icon: '💼',
      title: 'Career Advantages',
      points: ['Part-time work opportunities', 'Exposure to global companies', 'Strong placement & internship networks']
    },
    {
      icon: '🌍',
      title: 'Student-Friendly Environment',
      points: ['Safe & modern city', 'Multicultural campus life', 'Easy connectivity to India']
    }
  ]

  return (
    <section className="key-features" id="universities">
      <div className="container">
        <h2 className="section-title">Key Features & Benefits</h2>
        <p className="section-subtitle">
          Discover why studying in Dubai is the right choice for your global future.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <ul>
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}