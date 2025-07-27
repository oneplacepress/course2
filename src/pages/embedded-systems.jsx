import React from "react";
import { Link } from "gatsby";

const EmbeddedSystemsPage = () => {
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
          padding: "50px",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #007bff, #28a745, #17a2b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            ⚡ Embedded Systems
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
            🌟 Master the hardware foundation of PinPal.io technology with comprehensive embedded systems training for location-based applications.
          </p>

          {/* Embedded Systems Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(33,37,41,0.8), rgba(52,58,64,0.9))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}>
            {/* Circuit Board */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "350px",
              height: "250px",
              background: "#0a1a0a",
              borderRadius: "10px",
              border: "2px solid #00ff88"
            }}>
              {/* Circuit traces */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "2px",
                background: "#00ff88",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "50%",
                width: "2px",
                height: "100%",
                background: "#00ff88",
                transform: "translateX(-50%)"
              }}></div>
              
              {/* Additional circuit lines */}
              <div style={{
                position: "absolute",
                top: "25%",
                left: "0",
                width: "100%",
                height: "1px",
                background: "#00ff88",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "75%",
                left: "0",
                width: "100%",
                height: "1px",
                background: "#00ff88",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "25%",
                width: "1px",
                height: "100%",
                background: "#00ff88",
                transform: "translateX(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "75%",
                width: "1px",
                height: "100%",
                background: "#00ff88",
                transform: "translateX(-50%)"
              }}></div>
              
              {/* Component zones */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "40px",
                height: "40px",
                background: "#1a3a1a",
                borderRadius: "5px"
              }}></div>
              <div style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "35px",
                height: "35px",
                background: "#1a3a1a",
                borderRadius: "5px"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                width: "45px",
                height: "30px",
                background: "#1a3a1a",
                borderRadius: "5px"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                width: "50px",
                height: "25px",
                background: "#1a3a1a",
                borderRadius: "5px"
              }}></div>
              
              {/* Power rails */}
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "4px",
                background: "#ff3333"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                height: "4px",
                background: "#3333ff"
              }}></div>
              
              {/* Connection points */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "12px",
                height: "12px",
                background: "#ffaa00",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite"
              }}></div>
            </div>
            
            {/* Floating Microchip */}
            <div style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              animation: "float 4s ease-in-out infinite"
            }}>
              <div style={{
                width: "60px",
                height: "10px",
                background: "#007bff",
                borderRadius: "5px",
                position: "relative"
              }}>
                {/* Chip pins */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: `${(i * 8) + 2}px`,
                      width: "4px",
                      height: "15px",
                      background: "#28a745",
                      borderRadius: "2px"
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Floating Circuit */}
            <div style={{
              position: "absolute",
              top: "40%",
              right: "25%",
              width: "80px",
              height: "80px",
              border: "3px solid #17a2b8",
              borderRadius: "50%",
              animation: "rotate 8s linear infinite"
            }}>
              {/* Circuit pattern */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "2px",
                background: "#17a2b8",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "50%",
                width: "2px",
                height: "100%",
                background: "#17a2b8",
                transform: "translateX(-50%)"
              }}></div>
            </div>
            
            {/* Embedded Sensors */}
            <div style={{
              position: "absolute",
              bottom: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "20px"
            }}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "20px",
                    height: "30px",
                    background: "#ff6600",
                    borderRadius: "10px",
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
              Embedded Hardware Systems
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
              <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🔌 LoRaWAN Integration</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Learn to integrate LoRaWAN modules for long-range, low-power communication in remote location deployments.
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
              <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🛡️ Security Protocols</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Implement robust security measures for embedded devices, including encryption and secure boot processes.
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
              <h2 style={{ color: "#17a2b8", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>⚡ Power Management</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Design energy-efficient systems with advanced power management for extended battery life in field deployments.
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
              <h2 style={{ color: "#6c757d", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📡 Radio Communications</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Master various radio communication protocols including WiFi, Bluetooth, and cellular connectivity options.
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
                background: "linear-gradient(45deg, #007bff, #17a2b8)",
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
              ⚡ Master Embedded Systems
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

export default EmbeddedSystemsPage; 