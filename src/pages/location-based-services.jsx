import React from "react";
import { Link } from "gatsby";

const LocationBasedServicesPage = () => {
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
            📍 Location-Based Services
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
            🌟 Master the art of location intelligence with advanced mapping, geofencing, and proximity services that power next-generation location experiences.
          </p>

          {/* Location Services Animation Section */}
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
            {/* City Map */}
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
              {/* Main roads */}
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
              
              {/* Secondary roads */}
              <div style={{
                position: "absolute",
                top: "25%",
                left: "0",
                width: "100%",
                height: "3px",
                background: "#666",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "75%",
                left: "0",
                width: "100%",
                height: "3px",
                background: "#666",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "25%",
                width: "3px",
                height: "100%",
                background: "#666",
                transform: "translateX(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "75%",
                width: "3px",
                height: "100%",
                background: "#666",
                transform: "translateX(-50%)"
              }}></div>
              
              {/* City blocks */}
              <div style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                width: "60px",
                height: "80px",
                background: "#3a5a3a",
                borderRadius: "5px"
              }}></div>
              <div style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "70px",
                height: "70px",
                background: "#3a5a3a",
                borderRadius: "5px"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "15px",
                left: "15px",
                width: "50px",
                height: "90px",
                background: "#3a5a3a",
                borderRadius: "5px"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                width: "80px",
                height: "60px",
                background: "#3a5a3a",
                borderRadius: "5px"
              }}></div>
              
              {/* GPS tracking zones */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                border: "3px solid #007bff",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite"
              }}></div>
              
              {/* Location markers */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "20px solid #ff6600",
                animation: "pulse 2s ease-in-out infinite 0.5s"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "20px solid #ff6600",
                animation: "pulse 2s ease-in-out infinite 1s"
              }}></div>
            </div>
            
            {/* Floating Globe */}
            <div style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              width: "80px",
              height: "80px",
              border: "3px solid #333",
              borderRadius: "50%",
              animation: "rotate 8s linear infinite"
            }}>
              {/* Globe grid lines */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "2px",
                background: "#333",
                transform: "translateY(-50%)"
              }}></div>
              <div style={{
                position: "absolute",
                top: "0",
                left: "50%",
                width: "2px",
                height: "100%",
                background: "#333",
                transform: "translateX(-50%)"
              }}></div>
            </div>
            
            {/* Floating Pins */}
            <div style={{
              position: "absolute",
              top: "40%",
              right: "25%",
              animation: "float 4s ease-in-out infinite"
            }}>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `${i * 20}px`,
                    left: `${i * 10}px`,
                    width: "20px",
                    height: "20px",
                    background: "#ff6600",
                    borderRadius: "50%",
                    animation: `pulse ${1 + i * 0.2}s ease-in-out infinite`
                  }}
                ></div>
              ))}
            </div>
            
            {/* GPS Signal Waves */}
            <div style={{
              position: "absolute",
              bottom: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "expand 3s ease-in-out infinite"
            }}>
              <div style={{
                width: "60px",
                height: "60px",
                border: "2px solid #00ff88",
                borderRadius: "50%",
                animation: "expand 3s ease-in-out infinite"
              }}></div>
              <div style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                width: "80px",
                height: "80px",
                border: "2px solid #00ff88",
                borderRadius: "50%",
                animation: "expand 3s ease-in-out infinite 0.5s"
              }}></div>
              <div style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "100px",
                height: "100px",
                border: "2px solid #00ff88",
                borderRadius: "50%",
                animation: "expand 3s ease-in-out infinite 1s"
              }}></div>
            </div>
            
            {/* Floating Text */}
            <div style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#007bff",
              fontSize: "1.3rem",
              fontWeight: "600",
              animation: "float 3s ease-in-out infinite"
            }}>
              Location Intelligence
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
              <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🗺️ Interactive Mapping</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Create dynamic, interactive maps with custom markers, routes, and overlays that respond to user location and preferences.
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
              <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🎯 Geofencing</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Implement intelligent geofencing systems that trigger actions and notifications based on user proximity to defined areas.
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
              <h2 style={{ color: "#dc3545", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📡 Real-Time Tracking</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Build sophisticated tracking systems for assets, people, and devices with real-time updates and historical analytics.
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
              <h2 style={{ color: "#17a2b8", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🧭 Navigation Systems</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Develop custom navigation solutions with turn-by-turn directions, route optimization, and contextual guidance.
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
              📍 Master Location Services
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
        
        @keyframes expand {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LocationBasedServicesPage; 