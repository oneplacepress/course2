import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingGlobe = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} position={[-2, 0, 0]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial color="#007bff" wireframe emissive="#007bff" emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
};

const FloatingPins = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
      <group ref={groupRef} position={[2, 0, 0]}>
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const radius = 2;
          return (
            <group key={i}>
              {/* Pin Body */}
              <mesh position={[Math.cos(angle) * radius, Math.sin(clock.getElapsedTime() + i) * 0.2, Math.sin(angle) * radius]}>
                <cylinderGeometry args={[0.05, 0.05, 0.8]} />
                <meshStandardMaterial color="#28a745" emissive="#28a745" emissiveIntensity={0.3} />
              </mesh>
              {/* Pin Head */}
              <mesh position={[Math.cos(angle) * radius, 0.5 + Math.sin(clock.getElapsedTime() + i) * 0.2, Math.sin(angle) * radius]}>
                <sphereGeometry args={[0.15]} />
                <meshStandardMaterial color="#dc3545" emissive="#dc3545" emissiveIntensity={0.2} />
              </mesh>
            </group>
          );
        })}
      </group>
    </Float>
  );
};

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
          <FloatingGlobe />
          <FloatingPins />
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

          {/* Feature Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
            marginTop: "40px"
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
    </div>
  );
};

export default LocationBasedServicesPage; 