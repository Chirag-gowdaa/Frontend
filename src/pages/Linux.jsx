import React, { useState } from "react";
import { Copy } from "lucide-react";

const Linux = () => {
  const [copied, setCopied] = useState(false);
  const commands = `wget https://github.com/Chirag-gowdaa/Done/releases/download/v1.0/wiper_1.0.deb
sudo dpkg -i wiper_1.0.deb`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #eef2ff, #fdf4ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #4f46e5, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🐧 Linux Installation Guide
        </h1>
        <p style={{ color: "#4b5563", marginTop: "10px", fontSize: "18px" }}>
          Follow the steps below to set up <b>Wipe-Ease</b> on your Linux system.
        </p>
      </div>

      {/* Installation Card */}
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "white",
          padding: "32px",
          borderRadius: "20px",
          boxShadow: "0 12px 40px rgba(79,70,229,0.15)",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          📌 Step 1: Run these commands
        </h2>

        <div
          style={{
            position: "relative",
            backgroundColor: "#0f172a",
            color: "#a7f3d0",
            fontFamily: "monospace",
            padding: "20px",
            borderRadius: "12px",
            overflowX: "auto",
            boxShadow: "0 0 25px rgba(16,185,129,0.3)",
          }}
        >
          <pre style={{ margin: 0, fontSize: "15px" }}>{commands}</pre>
          <button
            onClick={copyToClipboard}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: copied
                ? "linear-gradient(to right, #10b981, #059669)"
                : "#374151",
              color: "white",
              padding: "6px 14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: "500",
              transition: "all 0.2s ease",
              transform: copied ? "scale(1.05)" : "scale(1)",
            }}
          >
            <Copy size={16} />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Step 2 */}
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "32px",
            marginBottom: "16px",
            color: "#111827",
          }}
        >
          📌 Step 2: Access the App
        </h2>
        <p style={{ color: "#374151", fontSize: "16px" }}>
          Once installed, open{" "}
          <span
            style={{
              backgroundColor: "#e0e7ff",
              padding: "4px 10px",
              borderRadius: "6px",
              fontFamily: "monospace",
              color: "#3730a3",
              fontWeight: "500",
            }}
          >
            http://localhost:5000
          </span>{" "}
          in your browser to launch the tool.
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "50px",
          padding: "16px 24px",
          background: "linear-gradient(to right, #4f46e5, #9333ea)",
          borderRadius: "12px",
          color: "white",
          fontSize: "14px",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(79,70,229,0.3)",
        }}
      >
        ⚡ Pro Tip: Run the commands as <b>sudo</b> if you face any permission
        issues.
      </div>
    </div>
  );
};

export default Linux;
