"use client"
import { useState } from 'react'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you, ${formData.name}! Your consultation request has been received. Our education consultant will contact you at ${formData.phone} or ${formData.email} within 24 hours.`)
    setFormData({ name: '', email: '', phone: '' })
  }

  return (
    <section className="hero-banner" id="home">
      <div className="container">
        <div className="hero-container">
          {/* LEFT CONTENT */}
          <div className="hero-content">
            <h1>
              Study in <strong>Dubai</strong> at Top International <strong>Universities</strong>
            </h1>
            <p className="hero-subtitle">
              Get Global Degrees with High ROI & Career Opportunities.
            </p>

            <ul className="hero-points">
              <li><i className="fas fa-check-circle"></i> International Degree with Global Recognition</li>
              <li><i className="fas fa-check-circle"></i> High Employability & Internship Opportunities</li>
              <li><i className="fas fa-check-circle"></i> Study in One of the Safest Cities</li>
              <li><i className="fas fa-check-circle"></i> Easy Visa Process for Indian Students</li>
              <li><i className="fas fa-check-circle"></i> Dedicated Admission Support</li>
            </ul>

            <div className="hero-cta">
              <a href="tel:+919831241212" className="btn btn-primary">
                <i className="fas fa-phone"></i> Talk to Expert
              </a>
              <a href="#universities" className="btn btn-secondary">
                View Universities
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="hero-form">
            <h3>Free Consultation</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name*" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address*" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number*" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="form-btn">
                Apply Now
              </button>

              <p className="form-note">
                Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}