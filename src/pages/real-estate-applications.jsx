import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';

const RealEstateApplicationsPage = () => {
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
      {/* Header */}
      <header style={{
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '16px 0',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img 
              src="https://workmates.live/wp-content/uploads/2025/07/blue-arrow-up-320.png"
              alt="PinPal Logo"
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>
          <nav style={{ 
            display: 'flex', 
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link to="/" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
            <Link to="/story" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Story</Link>
            <Link to="/courses" style={{ color: '#007bff', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Courses</Link>
            <Link to="/gallery" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Gallery</Link>
          </nav>
        </div>
      </header>

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
          <source src="https://workmates.live/wp-content/uploads/2025/07/Finding-a-location-for-your-Dolla-Depot.mp4" type="video/mp4" />
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
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginBottom: "2rem",
              fontSize: "2.5rem",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              color: "rgba(255, 255, 255, 0.9)"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.target.style.transform = "scale(1)";
            }}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            padding: "0 16px"
          }}>
            Real Estate Applications
          </h1>
          <p style={{
            fontSize: "1.3rem",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: "1.6",
            marginBottom: "2rem",
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
          }}>
            Build innovative real estate solutions with virtual tours, property management, and market analytics.
          </p>
          <div style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <a
              href="https://ghost.admins.live/real-estate-applications"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                textDecoration: "none",
                display: "inline-block"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
            >
              Buy Now
            </a>
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
            🏠 Real Estate Applications
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
            🌟 Create comprehensive real estate platforms that revolutionize property discovery, virtual tours, and market analysis for modern real estate professionals.
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
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#dc3545" }}>
                🏘️ Property Listings
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Build comprehensive property listing systems with advanced search, filtering, and recommendation engines.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#007bff" }}>
                🥽 Virtual Tours
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Create immersive 360-degree virtual tours and augmented reality experiences for property showcases.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#28a745" }}>
                📊 Market Analytics
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Implement real-time market analysis, price tracking, and predictive modeling for real estate investments.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#17a2b8" }}>
                📱 Mobile Applications
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Develop mobile-first real estate apps with location-based search, notifications, and offline capabilities.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#6f42c1" }}>
                🤖 AI Integration
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Integrate AI for property valuation, lead scoring, and personalized recommendations for buyers and sellers.
              </p>
            </div>

            <div style={{
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e9ecef"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#fd7e14" }}>
                🚀 Performance Optimization
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Optimize real estate platforms for high traffic, fast loading times, and seamless user experiences.
              </p>
            </div>
          </div>

          {/* Back to Courses Button */}
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link 
              to="/courses"
              style={{
                display: "inline-block",
                backgroundColor: "#dc3545",
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

export default RealEstateApplicationsPage; 