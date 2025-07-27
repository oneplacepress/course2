import React from "react";
import { Link } from "gatsby";

const N8nAutomationPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "white",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      padding: "20px"
    }}>
      <header style={{ marginBottom: "40px" }}>
        <nav style={{ 
          background: "rgba(255,255,255,0.95)", 
          padding: "15px 25px", 
          borderRadius: "15px", 
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          <Link 
            to="/" 
            style={{ 
              color: "#007bff",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}
          >
            🏠 Back to Home
          </Link>
        </nav>
      </header>
      
      {/* Main Content */}
      <div style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(15px)",
        borderRadius: "25px",
        padding: "50px",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #007bff, #28a745, #dc3545)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          ⚙️ N8N Automation
        </h1>
        
        <p style={{
          fontSize: "1.3rem",
          textAlign: "center",
          marginBottom: "3rem",
          color: "#666",
          lineHeight: "1.6",
          maxWidth: "800px",
          margin: "0 auto 3rem auto"
        }}>
          🌟 Master advanced workflow automation with N8N to create powerful, scalable integrations that transform how your applications communicate and process data.
        </p>

        {/* Placeholder for 3D Animation */}
        <div style={{
          height: "400px",
          width: "100%",
          marginBottom: "50px",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          background: "linear-gradient(135deg, rgba(10,10,10,0.95), rgba(30,30,30,0.9))",
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.5rem"
        }}>
          🎮 Interactive N8N Automation Visualization
        </div>

        {/* Feature Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "40px",
          padding: "0 10px"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease"
          }}>
            <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>⚡ Workflow Design</h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Create sophisticated automation workflows using n8n's visual interface to orchestrate complex business processes and integrations.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.9)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease",
            backdropFilter: "blur(10px)"
          }}>
            <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🔗 API Integrations</h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Master seamless integrations with 200+ services including AI platforms, databases, and communication tools for complete automation.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.9)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease",
            backdropFilter: "blur(10px)"
          }}>
            <h2 style={{ color: "#17a2b8", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🎯 Trigger Systems</h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Implement intelligent trigger systems that respond to QR scans, location changes, and user interactions in real-time.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.9)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease",
            backdropFilter: "blur(10px)"
          }}>
            <h2 style={{ color: "#ffc107", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📊 Data Processing</h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Transform and process data flows with advanced logic, conditional branching, and custom JavaScript functions.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <a
            href="https://pinpal.io"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "linear-gradient(45deg, #007bff, #28a745)",
              color: "white",
              textDecoration: "none",
              borderRadius: "50px",
              fontSize: "1.2rem",
              fontWeight: "600",
              boxShadow: "0 8px 25px rgba(0,123,255,0.3)",
              transition: "all 0.3s ease",
              border: "none"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 12px 30px rgba(0,123,255,0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 8px 25px rgba(0,123,255,0.3)";
            }}
          >
            🔧 Automate with n8n
          </a>
        </div>
      </div>
    </div>
  );
};

export default N8nAutomationPage; 