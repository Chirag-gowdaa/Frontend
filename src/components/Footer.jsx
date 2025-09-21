import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#111827', // gray-900
        color: '#d1d5db', // gray-300
        padding: '40px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
        }}
      >
        {/* Brand / Project Info */}
        <div>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '12px',
            }}
          >
            Secure Data Wiping
          </h2>
          <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
            Trusted IT asset recycling and secure data wiping solutions for
            businesses and individuals. Ensuring your data is safe, forever.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '12px',
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Home', 'About Us', 'Services', 'Contact'].map((link, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                  style={{ fontSize: '14px', color: '#d1d5db', textDecoration: 'none' }}
                  onMouseOver={(e) => (e.target.style.color = 'white')}
                  onMouseOut={(e) => (e.target.style.color = '#d1d5db')}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '12px',
            }}
          >
            Contact
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Mail size={16} />
              <a
                href="mailto:info@securewipe.com"
                style={{ fontSize: '14px', color: '#d1d5db', textDecoration: 'none' }}
                onMouseOver={(e) => (e.target.style.color = 'white')}
                onMouseOut={(e) => (e.target.style.color = '#d1d5db')}
              >
                info@securewipe.com
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Phone size={16} />
              <a
                href="tel:+919876543210"
                style={{ fontSize: '14px', color: '#d1d5db', textDecoration: 'none' }}
                onMouseOver={(e) => (e.target.style.color = 'white')}
                onMouseOut={(e) => (e.target.style.color = '#d1d5db')}
              >
                +91 98765 43210
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} />
              <span style={{ fontSize: '14px' }}>Bangalore, India</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '12px',
            }}
          >
            Follow Us
          </h3>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{ color: '#d1d5db' }}
                onMouseOver={(e) => (e.target.style.color = 'white')}
                onMouseOut={(e) => (e.target.style.color = '#d1d5db')}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          borderTop: '1px solid #374151',
          marginTop: '40px',
          paddingTop: '24px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#9ca3af',
        }}
      >
        © 2025 Secure Data Wiping. All rights reserved. | Trusted IT Asset Recycling Made Simple
      </div>
    </footer>
  )
}

export default Footer
