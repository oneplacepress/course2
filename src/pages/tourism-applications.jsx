import React from "react";
import { Link } from "gatsby";

const TourismApplicationsPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "white",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Background */}
      <div style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        zIndex: -1,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        opacity: 0.1
      }}>
        {/* Animated circles */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "rgba(0, 123, 255, 0.1)",
          animation: "float 6s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(40, 167, 69, 0.1)",
          animation: "float 8s ease-in-out infinite reverse"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "20%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(220, 53, 69, 0.1)",
          animation: "float 7s ease-in-out infinite"
        }}></div>
      </div>

      {/* Content Overlay */}
      <div style={{ 
        position: "relative", 
        zIndex: 1, 
        padding: "20px",
        minHeight: "100vh"
      }}>
        <header style={{ marginBottom: "40px" }}>
          <nav style={{ 
            background: "rgba(255,255,255,0.95)", 
            padding: "15px 25px", 
            borderRadius: "15px", 
            backdropFilter: "blur(10px)",
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
            ✈️ Tourism Applications
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
            🌟 Create unforgettable travel experiences with AI-powered audio guides that transform any destination into an interactive journey.
          </p>

          {/* Tourism Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(40,167,69,0.8), rgba(25,135,84,0.9))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}>
            {/* Tourism Destination Map */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "350px",
              height: "250px",
              background: "#2a4a3a",
              borderRadius: "10px",
              border: "2px solid #8b4513"
            }}>
              {/* Tourist pathways */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "6px",
                background: "#8b4513",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "50%",
                width: "6px",
                height: "100%",
                background: "#a0522d",
                transform: "translateX(-50%)"
              }}></div>
              
              {/* Additional trails */}
              <div style={{
                position: "absolute",
                top: "25%",
                left: "0",
                width: "100%",
                height: "3px",
                background: "#a0522d",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "75%",
                left: "0",
                width: "100%",
                height: "3px",
                background: "#a0522d",
                transform: "translateY(-50%)"
              }}></div>
              
              {/* Tourist attractions */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "40px",
                height: "40px",
                background: "#4a7a4a",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite"
              }}></div>
              <div style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "35px",
                height: "35px",
                background: "#4a7a4a",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite 0.5s"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                width: "45px",
                height: "45px",
                background: "#4a7a4a",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite 1s"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                width: "50px",
                height: "50px",
                background: "#4a7a4a",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite 1.5s"
              }}></div>
              
              {/* Points of interest */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60px",
                height: "60px",
                border: "3px solid #ff6600",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite"
              }}></div>
              
              {/* Tourism landmarks */}
              <div style={{
                position: "absolute",
                top: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "20px solid #ff6600",
                animation: "pulse 2s ease-in-out infinite 0.3s"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "20px solid #ff6600",
                animation: "pulse 2s ease-in-out infinite 0.7s"
              }}></div>
            </div>
            
            {/* Floating Airplane */}
            <div style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              animation: "float 4s ease-in-out infinite"
            }}>
              <div style={{
                width: "80px",
                height: "20px",
                background: "#007bff",
                borderRadius: "10px",
                position: "relative"
              }}>
                {/* Wings */}
                <div style={{
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "40px",
                  background: "#28a745",
                  borderRadius: "20px"
                }}></div>
              </div>
            </div>
            
            {/* Floating Compass */}
            <div style={{
              position: "absolute",
              top: "40%",
              right: "25%",
              width: "60px",
              height: "60px",
              border: "3px solid #6c757d",
              borderRadius: "50%",
              animation: "rotate 8s linear infinite"
            }}>
              {/* Compass needle */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "0",
                height: "0",
                borderLeft: "4px solid transparent",
                borderRight: "4px solid transparent",
                borderBottom: "30px solid #dc3545"
              }}></div>
            </div>
            
            {/* Travel Guidebooks */}
            <div style={{
              position: "absolute",
              bottom: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "15px"
            }}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "25px",
                    height: "35px",
                    background: "#ff6600",
                    borderRadius: "3px",
                    animation: `float ${2 + i * 0.5}s ease-in-out infinite`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Natural features */}
            <div style={{
              position: "absolute",
              top: "15%",
              left: "15%",
              display: "flex",
              gap: "8px"
            }}>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#0a5a0a",
                    borderRadius: "50%",
                    animation: `pulse ${1.5 + i * 0.2}s ease-in-out infinite`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Floating Text */}
            <div style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontSize: "1.3rem",
              fontWeight: "600",
              animation: "float 3s ease-in-out infinite"
            }}>
              Smart Tourism Experiences
            </div>
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
              background: "rgba(255,255,255,0.9)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              backdropFilter: "blur(10px)"
            }}>
              <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🏛️ Historical Sites</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Bring ancient monuments and historical landmarks to life with immersive audio narratives that transport visitors through time.
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
              <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🌍 Cultural Experiences</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Create authentic cultural tours that share local stories, traditions, and hidden gems that only locals know about.
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
              <h2 style={{ color: "#dc3545", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🗺️ Self-Guided Tours</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Enable tourists to explore at their own pace with QR-triggered audio content at key points of interest.
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
              <h2 style={{ color: "#6c757d", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📱 Multilingual Support</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Offer tours in multiple languages with AI voice synthesis, making destinations accessible to international visitors.
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
              ✈️ Discover Tourism Solutions
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default TourismApplicationsPage; 