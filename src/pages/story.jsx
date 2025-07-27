import React from "react";
import { Link } from "gatsby";

const StoryPage = () => {
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
          background: "rgba(23, 162, 184, 0.1)",
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
          padding: "60px",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h1 style={{
            fontSize: "4rem",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #007bff, #28a745, #17a2b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            Our Story
          </h1>
          
          <p style={{
            fontSize: "1.4rem",
            textAlign: "center",
            marginBottom: "4rem",
            color: "#666",
            lineHeight: "1.8",
            maxWidth: "800px",
            margin: "0 auto 4rem auto"
          }}>
            🌟 Discover how PinPal.io revolutionizes location-based experiences through cutting-edge technology and innovation.
          </p>

          {/* People Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(0,123,255,0.1), rgba(40,167,69,0.1))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}>
            {/* City Map Background */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "200px",
              background: "#2d5a27",
              borderRadius: "10px",
              border: "2px solid #666"
            }}>
              {/* Roads */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "4px",
                background: "#666",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "50%",
                width: "4px",
                height: "100%",
                background: "#666",
                transform: "translateX(-50%)"
              }}></div>
              
              {/* Buildings */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "30px",
                width: "40px",
                height: "30px",
                background: "#8b4513",
                borderRadius: "3px"
              }}></div>
              <div style={{
                position: "absolute",
                top: "20px",
                right: "30px",
                width: "35px",
                height: "25px",
                background: "#654321",
                borderRadius: "3px"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "40px",
                width: "30px",
                height: "35px",
                background: "#a0522d",
                borderRadius: "3px"
              }}></div>
              
              {/* Park areas */}
              <div style={{
                position: "absolute",
                top: "60px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "40px",
                background: "#228b22",
                borderRadius: "20px"
              }}></div>
            </div>
            
            {/* Animated People */}
            <div style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              animation: "walk 4s ease-in-out infinite"
            }}>
              <div style={{
                width: "20px",
                height: "20px",
                background: "#007bff",
                borderRadius: "50%",
                marginBottom: "5px"
              }}></div>
              <div style={{
                width: "30px",
                height: "40px",
                background: "#007bff",
                borderRadius: "15px 15px 5px 5px"
              }}></div>
            </div>
            
            <div style={{
              position: "absolute",
              top: "40%",
              right: "25%",
              animation: "walk 3s ease-in-out infinite reverse"
            }}>
              <div style={{
                width: "20px",
                height: "20px",
                background: "#28a745",
                borderRadius: "50%",
                marginBottom: "5px"
              }}></div>
              <div style={{
                width: "30px",
                height: "40px",
                background: "#28a745",
                borderRadius: "15px 15px 5px 5px"
              }}></div>
            </div>
            
            <div style={{
              position: "absolute",
              bottom: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "bounce 2s ease-in-out infinite"
            }}>
              <div style={{
                width: "20px",
                height: "20px",
                background: "#17a2b8",
                borderRadius: "50%",
                marginBottom: "5px"
              }}></div>
              <div style={{
                width: "30px",
                height: "40px",
                background: "#17a2b8",
                borderRadius: "15px 15px 5px 5px"
              }}></div>
            </div>
            
            {/* Floating Text */}
            <div style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#007bff",
              fontSize: "1.2rem",
              fontWeight: "600",
              animation: "float 3s ease-in-out infinite"
            }}>
              Connecting People & Places
            </div>
          </div>

          {/* Story Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
            marginTop: "40px"
          }}>
            <div style={{
              background: "rgba(255,255,255,0.9)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              backdropFilter: "blur(10px)"
            }}>
              <h2 style={{ 
                color: "#007bff", 
                marginBottom: "1rem", 
                fontSize: "1.6rem",
                fontWeight: "600"
              }}>
                🚀 Innovation Born
              </h2>
              <p style={{ 
                color: "#555", 
                lineHeight: "1.7",
                fontSize: "1.1rem"
              }}>
                Founded with a vision to bridge the physical and digital worlds, PinPal.io emerged from the need for seamless location-based interactions that enhance real-world experiences.
              </p>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.9)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              backdropFilter: "blur(10px)"
            }}>
              <h2 style={{ 
                color: "#28a745", 
                marginBottom: "1rem", 
                fontSize: "1.6rem",
                fontWeight: "600"
              }}>
                🎯 Technology Focus
              </h2>
              <p style={{ 
                color: "#555", 
                lineHeight: "1.7",
                fontSize: "1.1rem"
              }}>
                Our breakthrough AI audio QR pins technology combines LoRaWAN networks, embedded systems, and intelligent automation to create immersive experiences for real estate and tourism industries.
              </p>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.9)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              backdropFilter: "blur(10px)"
            }}>
              <h2 style={{ 
                color: "#17a2b8", 
                marginBottom: "1rem", 
                fontSize: "1.6rem",
                fontWeight: "600"
              }}>
                🌍 Global Impact
              </h2>
              <p style={{ 
                color: "#555", 
                lineHeight: "1.7",
                fontSize: "1.1rem"
              }}>
                Today, we're transforming how people interact with spaces worldwide, from luxury real estate showcases to immersive cultural tours, making every location tell its unique story.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
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
              🚀 Start Your Journey with PinPal.io
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
        
        @keyframes walk {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(50px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default StoryPage; 