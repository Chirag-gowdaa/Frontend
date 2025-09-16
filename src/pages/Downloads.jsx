import React from 'react'

const Downloads = () => {
  const downloads = [
    {
      name: 'Windows Data Wiper',
      version: 'v2.1.0',
      size: '15.2 MB',
      description: 'Complete data wiping solution for Windows systems with GUI interface.',
      downloadLink: '/downloads/windows-wiper.exe',
      requirements: ['Windows 10 or later', '4GB RAM minimum', 'Administrator privileges'],
      features: ['NTFS/FAT32 support', 'DoD 5220.22-M standard', 'Progress tracking', 'Verification reports']
    },
    {
      name: 'Linux Data Wiper',
      version: 'v2.0.5',
      size: '8.7 MB',
      description: 'Command-line and GUI tools for comprehensive Linux data destruction.',
      downloadLink: '/downloads/linux-wiper',
      requirements: ['Linux kernel 4.0+', '2GB RAM minimum', 'Root access for system drives'],
      features: ['Multi-filesystem support', 'CLI & GUI options', 'Batch processing', 'Custom algorithms']
    },
    {
      name: 'Android Data Wiper',
      version: 'v1.8.2',
      size: '12.4 MB',
      description: 'Mobile-optimized secure wiping for Android devices and storage.',
      downloadLink: '/downloads/android-wiper.apk',
      requirements: ['Android 8.0+', '1GB free space', 'Storage permissions'],
      features: ['Internal storage wipe', 'SD card support', 'Root & non-root modes', 'Secure deletion']
    }
  ]

  const handleDownload = (link, name) => {
    alert(`Download would start for ${name}. File: ${link}`)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Downloads</h1>
          <p>
            Get the latest versions of our secure data wiping tools. All downloads are free 
            and include comprehensive documentation.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="main-content">
        <div className="container">
          {downloads.map((download, index) => (
            <div key={index} className="download-item">
              <div className="download-header">
                <h3>{download.name}</h3>
                <span className="version-badge">{download.version}</span>
                <span className="size-badge">{download.size}</span>
              </div>
              
              <p>{download.description}</p>

              <div className="download-content">
                <div className="download-info">
                  <div className="info-section">
                    <h4>Key Features</h4>
                    <ul>
                      {download.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="info-section requirements">
                    <h4>System Requirements</h4>
                    <ul>
                      {download.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="download-action">
                  <button
                    onClick={() => handleDownload(download.downloadLink, download.name)}
                    className="download-btn"
                  >
                    📥 Download Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Notice */}
      <section className="main-content">
        <div className="container">
          <div className="security-notice">
            <h3>Important Security Notice</h3>
            <p>
              <strong>Data wiping is irreversible.</strong> Please ensure you have backed up any important 
              data before using our tools. Our software is designed to permanently destroy data and 
              cannot recover information once the wiping process is complete.
            </p>
            <ul>
              <li>Always verify you're wiping the correct drive or partition</li>
              <li>Ensure adequate power supply during the wiping process</li>
              <li>Keep verification reports for compliance documentation</li>
              <li>Test the software on non-critical systems first</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Need Help?</h2>
          <p>
            Our comprehensive documentation and support team are here to help you get started.
          </p>
          <div className="btn-group">
            <a href="#" className="cta-btn">
              View Documentation
            </a>
            <a href="/about" className="btn-secondary">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Downloads