import React from 'react'

const AboutUs = () => {
  const values = [
    {
      icon: '🛡️',
      title: 'Security First',
      description: 'We prioritize the highest security standards in all our data wiping solutions, ensuring complete data destruction.'
    },
    {
      icon: '👥',
      title: 'Customer Focused',
      description: 'Our solutions are designed with user experience in mind, making secure data wiping accessible to everyone.'
    },
    {
      icon: '🎓',
      title: 'Expertise',
      description: 'Our team combines years of cybersecurity experience with knowledge in data destruction.'
    }
  ]

  const teamMembers = [
    {
      name: 'vineeth',
      role: 'android developer',
      image: '👨‍💻'
    },
    {
      name: 'Chirag S',
      role: 'linux expert',
      image: '👨‍💻'
    }
  ]

  return (
    <div>
      <section className="about-hero">
        <div className="container">
          <h1>About Our Mission</h1>
          <p>
            We are a passionate  team focused on building practical, 
            secure, and user-friendly solutions to protect sensitive data and promote safe IT asset recycling.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="about-content">
        
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            These core principles guide everything we do and every solution we create.
          </p>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <div className="feature-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The experts behind our secure data wiping solutions.
          </p>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.image}</div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Secure Your Data?</h2>
          <p>
            Join thousands of users who trust our solutions for their data security needs.
          </p>
          <a href="/" className="cta-btn">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}

export default AboutUs