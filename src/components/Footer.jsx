import React from 'react'

const Footer = () => {
  const teamMembers = [
    {
      name: 'Punithraj R',
      role: 'Team lead and windows specialist',
      email: '',
      phone: 'xxxxx9'
    },
    {
      name: 'vineeth',
      role: 'Android Developer',
      email: '',
      phone: 'xxxxxx'
    },
    {
      name: 'Chirag S',
      role: 'linux expert',
      email: '',
      phone: 'xxxxx9'
    },
    {
      name: 'prajwal G',
      role: 'web developer',
      email: '',
      phone: 'xxxxx9'
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3>Project Team</h3>
            <p>
              Meet our dedicated team working to provide secure data wiping solutions.
            </p>
          </div>
          
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h4>{member.name}</h4>
              <div className="role">{member.role}</div>
              
              <div className="contact-info">
                <a href={`mailto:${member.email}`}>
                  {member.email}
                </a>
              </div>
              
              <div className="contact-info">
                <a href={`tel:${member.phone}`}>
                  {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p>
            © 2025 Secure Data Wiping. All rights reserved. | Trusted IT Asset Recycling Made Simple
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer