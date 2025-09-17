import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Linux from "./linux";
const Home = () => {
  const [gmail, setGmail] = useState("");

  const handleDownload = (link, osName) => {
    if (osName === "Linux") {
      window.location.href = "/linux"; // navigate to Linux page
    } else {
      alert(`Download would start for ${osName}. File: ${link}`);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(to right, #4f46e5, #9333ea)",
          color: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>
          Secure Data Wiping
        </h1>
        <p style={{ fontSize: "20px", opacity: 0.9, marginBottom: "20px" }}>
          Trusted IT Asset Recycling Made Simple
        </p>
        <p style={{ maxWidth: "600px", margin: "0 auto 30px", color: "#ddd" }}>
          Professional-grade data wiping solutions that ensure your sensitive
          information is permanently and securely removed from all storage
          devices.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              padding: "10px",
              borderRadius: "6px 0 0 6px",
              border: "none",
              outline: "none",
              minWidth: "220px",
              color: "#111",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "0 6px 6px 0",
              border: "none",
              background: "#fff",
              color: "#4f46e5",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Notify Me
          </button>
        </div>
      </section>

      {/* Operating Systems Section */}
      <section style={{ padding: "60px 20px", background: "#f9fafb" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>
          Choose Your Platform
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "40px" }}>
          Download our secure data wiping tools for your operating system. All tools
          meet international data destruction standards.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Windows Block */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "48px" }}>🪟</div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
              Windows
            </h3>
            <p style={{ color: "#555", marginTop: "8px" }}>
              Secure data wiping solution for Windows devices. Erases all user
              data including hidden areas (HPA/DCO, SSD sectors) and generates a
              tamper-proof wipe certificate aligned with NIST SP 800-88 standards.
            </p>
            <ul style={{ marginTop: "12px", paddingLeft: "20px", color: "#444" }}>
              <li>NTFS Support</li>
              <li>DoD 5220.22-M Standard</li>
              <li>GUI Interface</li>
            </ul>
            <button
              onClick={() =>
                handleDownload("/downloads/windows-wiper.exe", "Windows")
              }
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "10px",
                background: "#4f46e5",
                color: "#fff",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              📥 Download for Windows
            </button>
          </div>

          {/* Linux Block */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "48px" }}>🐧</div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
              Linux
            </h3>
            <p style={{ color: "#555", marginTop: "8px" }}>
              Cross-platform wiping tool for Linux systems. Securely erases
              partitions and hidden storage areas while producing digitally signed,
              verifiable certificates to ensure compliance.
            </p>
            <ul style={{ marginTop: "12px", paddingLeft: "20px", color: "#444" }}>
              <li>Multi-FS Support</li>
              <li>CLI & GUI</li>
              <li>Open Source</li>
            </ul>
            <button
              onClick={() => handleDownload("/linux", "Linux")}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "10px",
                background: "#4f46e5",
                color: "#fff",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <Link to="/Linux" style={{ color: "#fff", textDecoration: "none" }}>
                📥 Setup for Linux
              </Link>

            </button>
          </div>

          {/* Android Block */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "48px" }}>🤖</div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
              Android
            </h3>
            <p style={{ color: "#555", marginTop: "8px" }}>
              Trusted wiping app for Android devices. Permanently removes personal
              data, cache, and residual storage traces, with auditable wipe reports
              to support safe recycling and reuse.
            </p>
            <ul style={{ marginTop: "12px", paddingLeft: "20px", color: "#444" }}>
              <li>Internal Storage</li>
              <li>SD Card Support</li>
              <li>Root & Non-Root</li>
            </ul>
            <button
              onClick={() =>
                handleDownload("/downloads/android-wiper.apk", "Android")
              }
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "10px",
                background: "#4f46e5",
                color: "#fff",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              📥 Download for Android
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>
          Why Choose Our Solution?
        </h2>

        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>🔒</div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Military Grade</h3>
            <p style={{ color: "#555" }}>DoD 5220.22-M compliant data destruction</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>⚡</div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Fast & Efficient</h3>
            <p style={{ color: "#555" }}>Optimized algorithms for quick processing</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>📋</div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Compliance Ready</h3>
            <p style={{ color: "#555" }}>Meets GDPR, HIPAA, and SOX requirements</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>🛡️</div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Verified Secure</h3>
            <p style={{ color: "#555" }}>Cryptographic verification of data removal</p>
          </div>
        </div>
      </section>
    </div>
  );
};
<Footer />
export default Home;
