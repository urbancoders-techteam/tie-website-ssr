"use client"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Tie Transcend Boundaries</h3>
            <p style={{ color: '#B0B7C3', marginBottom: '20px', textAlign: 'justify' }}>
              Dubai has become a vibrant educational center in the Middle East, drawing students worldwide, including India. With its modern infrastructure and diverse academic offerings, Dubai provides Indian students with exceptional opportunities for growth.
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <a href="#" style={{ color: '#B0B7C3', fontSize: '1.2rem' }}><i className="fab fa-facebook-f"></i></a>
              <a href="#" style={{ color: '#B0B7C3', fontSize: '1.2rem' }}><i className="fab fa-twitter"></i></a>
              <a href="#" style={{ color: '#B0B7C3', fontSize: '1.2rem' }}><i className="fab fa-instagram"></i></a>
              <a href="#" style={{ color: '#B0B7C3', fontSize: '1.2rem' }}><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="#home"><i className="fas fa-chevron-right"></i> Home</Link></li>
              <li><Link href="#about"><i className="fas fa-chevron-right"></i> About</Link></li>
              <li><Link href="#universities"><i className="fas fa-chevron-right"></i> Universities</Link></li>
              <li><Link href="#dubaitopuniversities"><i className="fas fa-chevron-right"></i> Dubai Top Universities</Link></li>
              <li><Link href="#contact"><i className="fas fa-chevron-right"></i> Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Information</h3>
            <ul className="footer-links">
              <li>
                <a href="https://maps.google.com/?q=Delhi+office+Hub+Hive+11+1st+Floor+262+Plot+1+ITDC+Western+Margin+Near+Saket+Metro+New+Delhi+110017" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-map-marker-alt"></i> Delhi office: Hub Hive 11, 1st Floor, 262, Plot 1, ITDC Western Marg, Near Saket Metro, New Delhi 110017
                </a>
              </li>
              <li>
                <a href="tel:+919831241212">
                  <i className="fas fa-phone"></i> +91-9831241212
                </a>
              </li>
              <li>
                <a href="mailto:info@taksheela.com">
                  <i className="fas fa-envelope"></i> info@taksheela.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026-27 Tie Transcend Boundaries. All rights reserved. | 
            <Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}> Privacy Policy</Link> | 
            <Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}