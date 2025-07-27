import React from "react";
import { Link } from "gatsby";

const RealEstateApplicationsPage = () => {
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
          background: "rgba(220, 53, 69, 0.1)",
          animation: "float 8s ease-in-out infinite reverse"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "20%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255, 193, 7, 0.1)",
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
            background: "linear-gradient(45deg, #007bff, #dc3545, #ffc107)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            🏠 Real Estate Applications
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
            🌟 Transform property showcases with intelligent audio tours that bring listings to life through AI-powered storytelling.
          </p>

          {/* Real Estate Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(52,58,64,0.8), rgba(73,80,87,0.9))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}>
            {/* Neighborhood Map */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "350px",
              height: "250px",
              background: "#2a4a2a",
              borderRadius: "10px",
              border: "2px solid #555"
            }}>
              {/* Streets */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "6px",
                background: "#555",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "50%",
                width: "6px",
                height: "100%",
                background: "#555",
                transform: "translateX(-50%)"
              }}></div>
              
              {/* Property lots */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "60px",
                height: "80px",
                background: "#3a5a3a",
                borderRadius: "5px"
              }}></div>
              <div style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "70px",
                height: "70px",
                background: "#3a5a3a",
                borderRadius: "5px"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "30px",
                width: "50px",
                height: "90px",
                background: "#3a5a3a",
                borderRadius: "5px"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "20px",
                right: "30px",
                width: "80px",
                height: "60px",
                background: "#3a5a3a",
                borderRadius: "5px"
              }}></div>
              
              {/* Property markers */}
              <div style={{
                position: "absolute",
                top: "15px",
                left: "50px",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "20px solid #ff6600",
                animation: "pulse 2s ease-in-out infinite"
              }}></div>
              <div style={{
                position: "absolute",
                top: "15px",
                right: "55px",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "20px solid #ff6600",
                animation: "pulse 2s ease-in-out infinite 0.5s"
              }}></div>
            </div>
            
            {/* Floating House */}
            <div style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              animation: "float 4s ease-in-out infinite"
            }}>
              <div style={{
                width: "60px",
                height: "40px",
                background: "#007bff",
                borderRadius: "5px 5px 0 0"
              }}></div>
              <div style={{
                width: "0",
                height: "0",
                borderLeft: "30px solid transparent",
                borderRight: "30px solid transparent",
                borderBottom: "25px solid #dc3545",
                marginTop: "-5px"
              }}></div>
            </div>
            
            {/* Floating Key */}
            <div style={{
              position: "absolute",
              top: "40%",
              right: "25%",
              animation: "rotate 3s linear infinite"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                border: "4px solid #ffc107",
                borderRadius: "50%",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "30px",
                  height: "4px",
                  background: "#28a745",
                  transform: "translate(-50%, -50%)"
                }}></div>
              </div>
            </div>
            
            {/* QR Code */}
            <div style={{
              position: "absolute",
              bottom: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "80px",
              background: "#000",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "bounce 2s ease-in-out infinite"
            }}>
              <div style={{
                width: "60px",
                height: "60px",
                background: "#fff",
                borderRadius: "4px",
                position: "relative"
              }}>
                {/* QR code pattern */}
                <div style={{
                  position: "absolute",
                  top: "8px",
                  left: "8px",
                  width: "12px",
                  height: "12px",
                  background: "#000"
                }}></div>
                <div style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  width: "12px",
                  height: "12px",
                  background: "#000"
                }}></div>
                <div style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "8px",
                  width: "12px",
                  height: "12px",
                  background: "#000"
                }}></div>
              </div>
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
              Smart Real Estate Tours
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
              <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🏘️ Virtual Property Tours</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Create immersive audio experiences for property viewings, highlighting key features and neighborhood amenities with AI-generated narration.
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
              <h2 style={{ color: "#dc3545", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📊 Market Analytics</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Integrate real-time market data and neighborhood statistics into your audio tours for informed decision-making.
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
              <h2 style={{ color: "#ffc107", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🔑 Smart Open Houses</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Enable self-guided tours with QR-activated audio guides that provide detailed information about each room and feature.
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
              <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📱 Mobile Integration</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Seamlessly integrate with mobile apps and listing platforms for enhanced buyer engagement and lead generation.
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
                background: "linear-gradient(45deg, #007bff, #dc3545)",
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
              🏠 Explore Real Estate Solutions
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
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default RealEstateApplicationsPage; 