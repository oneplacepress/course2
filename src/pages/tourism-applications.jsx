import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingPlane = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.x = Math.sin(time * 0.5) * 3;
      meshRef.current.position.y = Math.cos(time * 0.3) * 1;
      meshRef.current.rotation.z = Math.sin(time * 0.7) * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
      <group ref={meshRef} position={[0, 0, 0]}>
        {/* Plane Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 2]} />
          <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.6} />
        </mesh>
        {/* Wings */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[3, 0.1, 0.5]} />
          <meshStandardMaterial color="#28a745" emissive="#28a745" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

const FloatingCompass = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.6;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.3;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={0.6} floatIntensity={1.5}>
      <group ref={meshRef} position={[2, 1, -2]}>
        {/* Compass Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.2]} />
          <meshStandardMaterial color="#6c757d" emissive="#6c757d" emissiveIntensity={0.4} />
        </mesh>
        {/* Compass Needle */}
        <mesh position={[0, 0.15, 0]}>
          <coneGeometry args={[0.1, 0.6, 4]} />
          <meshStandardMaterial color="#dc3545" emissive="#dc3545" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </Float>
  );
};

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
          <FloatingPlane />
          <FloatingCompass />
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
    </div>
  );
};

export default TourismApplicationsPage; 