import React from "react";
import { Link } from "gatsby";

const AdvancedQRTechniquesPage = () => {
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
            📱 Advanced QR Techniques
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
            🌟 Unlock the full potential of QR technology with advanced encoding techniques, dynamic content delivery, and innovative applications for modern businesses.
          </p>

          {/* QR Technology Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(240,240,240,0.8), rgba(250,250,250,0.9))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}>
            {/* Tech Grid Background */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "350px",
              height: "250px",
              background: "#1a2a1a",
              borderRadius: "10px",
              border: "2px solid #00ff88"
            }}>
              {/* Grid lines */}
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: `
                  linear-gradient(90deg, #00ff88 1px, transparent 1px),
                  linear-gradient(0deg, #00ff88 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
                opacity: 0.3
              }}></div>
              
              {/* Data nodes */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "8px",
                height: "8px",
                background: "#0066cc",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite"
              }}></div>
              <div style={{
                position: "absolute",
                top: "60px",
                right: "30px",
                width: "8px",
                height: "8px",
                background: "#0066cc",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite 0.5s"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "40px",
                left: "50px",
                width: "8px",
                height: "8px",
                background: "#0066cc",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite 1s"
              }}></div>
              
              {/* QR scan zones */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60px",
                height: "60px",
                border: "2px solid #ff6600",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite"
              }}></div>
            </div>
            
            {/* Floating QR Cube */}
            <div style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              animation: "float 4s ease-in-out infinite"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                background: "#000",
                borderRadius: "8px",
                position: "relative",
                border: "2px solid #333"
              }}>
                {/* QR pattern */}
                <div style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  width: "60px",
                  height: "60px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "2px"
                }}>
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "18px",
                        height: "18px",
                        background: i % 2 === 0 ? "#fff" : "#000",
                        borderRadius: "2px"
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Scanning Effect */}
            <div style={{
              position: "absolute",
              top: "40%",
              right: "25%",
              width: "100px",
              height: "100px",
              border: "3px solid #333",
              borderRadius: "50%",
              animation: "rotate 6s linear infinite"
            }}>
              {/* Scanning line */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "2px",
                background: "#ff0088",
                transform: "translateY(-50%)",
                animation: "scan 2s ease-in-out infinite"
              }}></div>
            </div>
            
            {/* Data Stream */}
            <div style={{
              position: "absolute",
              bottom: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px"
            }}>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "#ff0088",
                    borderRadius: "50%",
                    animation: `pulse ${1 + i * 0.1}s ease-in-out infinite`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Additional QR Codes */}
            <div style={{
              position: "absolute",
              top: "20%",
              right: "15%",
              width: "60px",
              height: "60px",
              background: "#000",
              borderRadius: "6px",
              animation: "float 5s ease-in-out infinite reverse"
            }}>
              <div style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                width: "44px",
                height: "44px",
                background: "#fff",
                borderRadius: "4px"
              }}></div>
            </div>
            
            <div style={{
              position: "absolute",
              bottom: "20%",
              left: "15%",
              width: "50px",
              height: "50px",
              background: "#000",
              borderRadius: "5px",
              animation: "float 3s ease-in-out infinite"
            }}>
              <div style={{
                position: "absolute",
                top: "6px",
                left: "6px",
                width: "38px",
                height: "38px",
                background: "#fff",
                borderRadius: "3px"
              }}></div>
            </div>
            
            {/* Floating Text */}
            <div style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#333",
              fontSize: "1.3rem",
              fontWeight: "600",
              animation: "float 3s ease-in-out infinite"
            }}>
              Advanced QR Technology
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
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🎥 Video QR Codes</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Create dynamic QR codes that instantly deliver video content for job applications, company introductions, and product demonstrations.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>💼 Professional Applications</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Implement QR solutions for recruitment, networking events, business cards, and professional portfolio presentations.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h2 style={{ color: "#dc3545", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🔐 Secure QR Systems</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Master advanced security protocols including encryption, authentication, and access control for sensitive QR applications.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h2 style={{ color: "#17a2b8", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📊 Analytics & Tracking</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Implement comprehensive analytics to track QR code performance, user engagement, and conversion metrics.
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
              📱 Master Advanced QR Techniques
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
        
        @keyframes scan {
          0% { transform: translateY(-50%) scaleX(0); }
          50% { transform: translateY(-50%) scaleX(1); }
          100% { transform: translateY(-50%) scaleX(0); }
        }
      `}</style>
    </div>
  );
};

export default AdvancedQRTechniquesPage; 