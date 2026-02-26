"use client"
export default function LimitedOffer() {
  return (
    <section className="limited-offer" id="mbbsrasia">
      <div className="offer-container">
        <div className="offer-badge">
          ⏳ Limited-Time Offer
        </div>

        <h2>Admissions Open for 2026 Intake</h2>
        <p className="offer-subtext">
          Start your global education journey with exclusive benefits.
        </p>

        <div className="offer-grid">
          <div className="offer-card">
            <div className="icon">🎓</div>
            <h4>Limited Seats</h4>
            <p>Only a few seats available for the upcoming intake.</p>
          </div>

          <div className="offer-card">
            <div className="icon">💰</div>
            <h4>Scholarships</h4>
            <p>Merit-based scholarships for eligible students.</p>
          </div>

          <div className="offer-card">
            <div className="icon">⚡</div>
            <h4>Priority Processing</h4>
            <p>Early applicants get faster admission & visa processing.</p>
          </div>
        </div>

        <p className="deadline-text">
          🚨 Apply before seats fill up!
        </p>

        <a href="#home" className="apply-btn">
          Apply Now
        </a>
      </div>
    </section>
  )
}