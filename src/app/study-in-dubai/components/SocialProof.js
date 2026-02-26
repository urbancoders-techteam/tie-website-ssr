export default function SocialProof() {
  const stats = [
    { number: '⭐ 1,000+', label: 'Students Successfully Placed in International Universities' },
    { number: '⭐ High', label: 'Visa Success Rate with Expert Guidance' },
    { number: '⭐ Trusted', label: 'By Students Across India' }
  ]

  const testimonials = [
    {
      text: 'The process was smooth and transparent. I got admission and visa without stress.',
      name: 'Rahul S.',
      role: 'BBA Student in Dubai'
    },
    {
      text: 'Best decision of my life. Great campus, global exposure, and amazing support.',
      name: 'Neha K.',
      role: 'MBA Student'
    }
  ]

  return (
    <section className="social-proof">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Student Success & Testimonials</h2>
          <p className="section-subtitle">
            Trusted by students across India with proven admission & visa success.
          </p>
        </div>

        <div className="proof-stats">
          {stats.map((stat, index) => (
            <div className="proof-card" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">“{testimonial.text}”</p>
              <div className="testimonial-user">
                <div className="user-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}