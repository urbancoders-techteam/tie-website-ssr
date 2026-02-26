import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import KeyFeatures from '@/components/KeyFeatures'
import Universities from '@/components/Universities'
import SocialProof from '@/components/SocialProof'
import LimitedOffer from '@/components/LimitedOffer'
import FAQ from '@/components/FAQ'
import FooterCTA from '@/components/FooterCTA'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      e.preventDefault()
      const targetId = target.getAttribute('href')
      if (targetId === '#') return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerOffset = 100
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <KeyFeatures />
        <Universities />
        <SocialProof />
        <LimitedOffer />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}