
export default function FooterCTA() {
  return (
    <section className="footer-cta">
      <div className="container">
        <div className="footer-cta-box">
          <div className="footer-cta-content">
            <h2>Start Your Dubai Study Journey Today 🚀</h2>
            <p>
              Get expert guidance, fast admission, and a global career path.
            </p>

            <div className="footer-cta-buttons">
              <a href="tel:+919831241212" className="btn btn-primary">
                <i className="fas fa-phone"></i> Call Now
              </a>

              <a href="https://wa.me/919831241212" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <i className="fab fa-whatsapp"></i> WhatsApp Chat
              </a>

              <a href="#home" className="btn btn-light">
                <i className="fas fa-user-graduate"></i> Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}