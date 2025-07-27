import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingPin = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[-3, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-3, 1, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#28a745" emissive="#28a745" emissiveIntensity={0.4} />
      </mesh>
    </Float>
  );
};

const OrbitingQR = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.x = Math.cos(time) * 3;
      meshRef.current.position.z = Math.sin(time) * 3;
      meshRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 1, 0]}>
      <boxGeometry args={[0.8, 0.8, 0.1]} />
      <meshStandardMaterial color="#dc3545" emissive="#dc3545" emissiveIntensity={0.4} />
    </mesh>
  );
};

const PulsingSphere = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[3, 0, 0]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="#17a2b8" emissive="#17a2b8" emissiveIntensity={0.5} wireframe />
      </mesh>
    </Float>
  );
};

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
      {/* Three.js Background - Visible and Prominent */}
      <div style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        zIndex: -1
      }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.8} />
          <FloatingPin />
          <OrbitingQR />
          <PulsingSphere />
        </Canvas>
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
    </div>
  );
};

export default StoryPage; 