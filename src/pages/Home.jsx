import React from 'react'

const Home = () => {
  const operatingSystems = [
    {
      name: 'Windows',
      description: 'Secure data wiping solution for Windows devices. Erases all user data including hidden areas (HPA/DCO, SSD sectors) and generates a tamper-proof wipe certificate aligned with NIST SP 800-88 standards.',
      downloadLink: '/downloads/windows-wiper.exe',
      logo: '🪟',
      features: ['NTFS Support', 'DoD 5220.22-M Standard', 'GUI Interface']
    },
    {
      name: 'Linux',
      description: 'Cross-platform wiping tool for Linux systems. Securely erases partitions and hidden storage areas while producing digitally signed, verifiable certificates to ensure full compliance with data sanitization standards.',
      downloadLink: '/downloads/linux-wiper',
      logo: '🐧',
      features: ['Multi-FS Support', 'CLI & GUI', 'Open Source']
    },
    {
      name: 'Android',
      description: 'Trusted wiping app for Android devices. Permanently removes personal data, cache, and residual storage traces, with auditable wipe reports to support safe recycling and reuse of smartphones.',
      downloadLink: '/downloads/android-wiper.apk',
      logo: '🤖',
      features: ['Internal Storage', 'SD Card Support', 'Root & Non-Root']
    }
  ]

  const handleDownload = (link, osName) => {
    // In a real application, this would trigger the actual download
    alert(`Download would start for ${osName}. File: ${link}`)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Secure Data Wiping</h1>
          <p>Trusted IT Asset Recycling Made Simple</p>
          <p className="subtitle">
            Professional-grade data wiping solutions that ensure your sensitive information 
            is permanently and securely removed from all types of storage devices.
          </p>
        </div>
      </section>

      {/* Operating Systems Section */}
      <section className="main-content">
        <div className="container">
          <h2 className="section-title">Choose Your Platform</h2>
          <p className="section-subtitle">
            Download our secure data wiping tools for your operating system. 
            All tools meet international data destruction standards.
          </p>

          <div className="os-grid">
            {operatingSystems.map((os, index) => (
              <div key={index} className="os-card">
                <div className="os-logo">{os.logo}</div>
                <h3>{os.name}</h3>
                <p>{os.description}</p>

                <div>
                  <h4>Key Features:</h4>
                  <ul className="features-list">
                    {os.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleDownload(os.downloadLink, os.name)}
                  className="download-btn"
                >
                  📥 Download for {os.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Solution?</h2>

          <div className="features-grid">
            {[
              {
                icon: '🔒',
                title: 'Military Grade',
                description: 'DoD 5220.22-M compliant data destruction'
              },
              {
                icon: '⚡',
                title: 'Fast & Efficient',
                description: 'Optimized algorithms for quick processing'
              },
              {
                icon: '📋',
                title: 'Compliance Ready',
                description: 'Meets GDPR, HIPAA, and SOX requirements'
              },
              {
                icon: '🛡️',
                title: 'Verified Secure',
                description: 'Cryptographic verification of data removal'
              }
            ].map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home