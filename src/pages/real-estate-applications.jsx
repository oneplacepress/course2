import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingHouse = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={[-2, 0, 0]}>
        {/* House Base */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[1.5, 1, 1.5]} />
          <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.5} />
        </mesh>
        {/* Roof */}
        <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[1.2, 1, 4]} />
          <meshStandardMaterial color="#dc3545" emissive="#dc3545" emissiveIntensity={0.4} />
        </mesh>
      </group>
    </Float>
  );
};

const FloatingKey = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.8;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group ref={meshRef} position={[2, 0, 0]}>
        {/* Key Handle */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[0.3, 0.1, 8, 16]} />
          <meshStandardMaterial color="#ffc107" emissive="#ffc107" emissiveIntensity={0.6} />
        </mesh>
        {/* Key Shaft */}
        <mesh position={[0.5, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.8]} />
          <meshStandardMaterial color="#28a745" emissive="#28a745" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

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
      {/* Three.js Background - Behind Content */}
      <div style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        zIndex: -1
      }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.8} />
          <FloatingHouse />
          <FloatingKey />
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

          {/* Feature Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
            marginTop: "40px"
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
    </div>
  );
};

export default RealEstateApplicationsPage; 