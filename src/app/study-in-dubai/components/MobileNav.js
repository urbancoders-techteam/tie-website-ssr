"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function MobileNav() {
  const router = useRouter()

  return (
    <div className="app-footer-nav">
      <Link href="#home" className={`nav-item ${router.asPath === '#home' ? 'active' : ''}`}>
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link href="#home" className="nav-item">
        <i className="fas fa-paper-plane"></i>
        <span>Apply</span>
      </Link>
      <a href="tel:+919831241212" className="nav-item">
        <i className="fas fa-phone"></i>
        <span>Call Us</span>
      </a>
      <a href="mailto:info@taksheela.com" className="nav-item">
        <i className="fas fa-envelope"></i>
        <span>Mail Us</span>
      </a>
    </div>
  )
}