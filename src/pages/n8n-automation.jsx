import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';

const N8NAutomationPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Fullscreen Video Background */}
      <div style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden"
      }}>
        <video
          ref={videoRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1
          }}
          poster=""
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="https://workmates.live/wp-content/uploads/2025/07/Choosing-a-suite-of-services-for-your-Dolla-Depot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay Content */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#fff",
          padding: "20px"
        }}>
          {/* Custom Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginBottom: "2rem",
              fontSize: "2rem",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 1)";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
              e.target.style.transform = "scale(1)";
            }}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
          }}>
            N8N Automation
          </h1>
          <p style={{
            fontSize: "1.3rem",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: "1.6",
            marginBottom: "2rem",
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
          }}>
            Master workflow automation with N8N to streamline your business processes and increase efficiency.
          </p>
          <div style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
            >
              Start Learning
            </button>
            <Link 
              to="/courses"
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                padding: "10px 22px",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#fff";
              }}
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: "60px 20px" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#333"
          }}>
            ⚙️ N8N Automation
          </h2>
          
          <p style={{
            fontSize: "1.3rem",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#666",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto 3rem auto"
          }}>
            🌟 Master the N8N automation platform to create powerful workflows that connect applications, automate tasks, and streamline business processes.
          </p>

          {/* Course Content */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "3rem"
          }}>
            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#6c757d" }}>
                🔗 Workflow Design
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Learn to design and build complex automation workflows using N8N's visual workflow editor and node-based architecture.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#007bff" }}>
                🔌 API Integration
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Connect to hundreds of services and APIs to automate data transfer, notifications, and system interactions.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#28a745" }}>
                📊 Data Processing
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Transform, filter, and process data between different systems using N8N's powerful data manipulation nodes.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#dc3545" }}>
                ⏰ Scheduling & Triggers
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Set up automated triggers based on time, events, webhooks, and external conditions to run workflows automatically.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#17a2b8" }}>
                🛠️ Custom Nodes
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Create custom nodes and functions to extend N8N's capabilities for your specific business needs and integrations.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#fd7e14" }}>
                🚀 Deployment & Scaling
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Deploy N8N workflows to production environments and scale automation systems for enterprise-level operations.
              </p>
            </div>
          </div>

          {/* Back to Courses Button */}
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link 
              to="/courses"
              style={{
                display: "inline-block",
                backgroundColor: "#6c757d",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem"
              }}
            >
              ← Back to Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default N8NAutomationPage; 