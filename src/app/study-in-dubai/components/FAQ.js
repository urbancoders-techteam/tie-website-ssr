"use client"

import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What is the minimum eligibility for Dubai universities?',
      answer: 'Most programs require 55–60% in previous academics, depending on the course.'
    },
    {
      question: 'Q2. Is IELTS mandatory?',
      answer: 'Not always. Some universities offer internal English tests or waivers.'
    },
    {
      question: 'Q3. Can students work part-time in Dubai?',
      answer: 'Yes, eligible students can work part-time as per UAE regulations.'
    },
    {
      question: 'Q4. What is the average tuition fee?',
      answer: 'Starting from approximately ₹6–8 lakhs per year, depending on the program.'
    },
    {
      question: 'Q5. How long does the admission process take?',
      answer: 'Usually 2–4 weeks for offer letter and visa processing.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about studying in Dubai.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}