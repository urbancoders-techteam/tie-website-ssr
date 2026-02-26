import Image from 'next/image'

export default function Universities() {
  const universities = [
    {
      id: 1,
      name: 'Middlesex University Dubai – UK-Based Global University',
      image: '/images/middlesex.webp',
      description: 'Middlesex University Dubai is the first overseas campus of Middlesex University London, offering internationally recognized UK degrees in the heart of Dubai. Established in 2005, the university provides career-focused programs in Business, Law, Media, Computer Science, Psychology, and more.',
      additionalInfo: 'With modern classrooms, innovation labs, and strong industry connections, students gain practical exposure, internship opportunities, and global career pathways.',
      brochure: 'images/Taksheela-Brochure.pdf'
    },
    {
      id: 2,
      name: 'American University of Ras Al Khaimah (AURAK) – US-Style Education System',
      image: '/images/aurak.webp',
      description: 'The American University of Ras Al Khaimah (AURAK) offers an American-style education system focused on academic excellence, innovation, and research. The university provides accredited undergraduate and postgraduate programs in Engineering, Business, Biotechnology, and more.',
      additionalInfo: 'AURAK features advanced laboratories, smart classrooms, research centers, and student housing. Its strong industry partnerships and technology-driven curriculum prepare students for global careers.',
      brochure: 'images/Taksheela-Brochure.pdf'
    }
  ]

  return (
    <section style={{ padding: '60px 20px', background: '#f5f7f6' }} id="dubaitopuniversities">
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', color: '#0d2c6c', marginBottom: '10px' }}>
            Top Universities in Dubai
          </h2>
          <p style={{ color: '#555', fontSize: '16px' }}>
            Explore world-class universities in Dubai offering globally recognized degrees and career-focused education.
          </p>
        </div>

        {universities.map((uni) => (
          <div className="university-card" key={uni.id}>
            <div className="university-image">
              <Image 
                src={uni.image} 
                alt={uni.name}
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="university-content">
              <h3>{uni.name}</h3>
              <p>{uni.description}</p>
              <p>{uni.additionalInfo}</p>
              <a 
                href={uni.brochure} 
                className="download-btn"
                target={uni.brochure === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
              >
                Download Brochure
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}