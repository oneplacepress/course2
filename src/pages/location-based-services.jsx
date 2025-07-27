import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Text } from "@react-three/drei";

// Client-side only wrapper
const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div style={{
        height: "400px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, rgba(10,10,10,0.95), rgba(30,30,30,0.9))",
        color: "white",
        fontSize: "1.5rem",
        borderRadius: "20px"
      }}>
        📍 Loading Location Services Visualization...
      </div>
    );
  }

  return children;
};

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
        <meshStandardMaterial color="#333" wireframe />
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
                <meshStandardMaterial color="#444" />
              </mesh>
              {/* Pin Head */}
              <mesh position={[Math.cos(angle) * radius, 0.5 + Math.sin(clock.getElapsedTime() + i) * 0.2, Math.sin(angle) * radius]}>
                <sphereGeometry args={[0.15]} />
                <meshStandardMaterial color="#000" />
              </mesh>
            </group>
          );
        })}
      </group>
    </Float>
  );
};

// Location Services Scene with enhanced map background
const LocationServicesScene = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[0, 10, 0]} intensity={0.8} />
      
      {/* Enhanced City Map Background */}
      <group position={[0, -2, -3]}>
        {/* Base city map */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 12]} />
          <meshStandardMaterial color="#2a4a2a" />
        </mesh>
        
        {/* Street network */}
        {/* Main roads */}
        <mesh position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 0.4]} />
          <meshStandardMaterial color="#555" />
        </mesh>
        <mesh position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[12, 0.4]} />
          <meshStandardMaterial color="#555" />
        </mesh>
        
        {/* Secondary roads */}
        {[-3, 3].map(offset => (
          <mesh key={offset} position={[offset, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[15, 0.2]} />
            <meshStandardMaterial color="#666" />
          </mesh>
        ))}
        {[-2, 2].map(offset => (
          <mesh key={offset} position={[0, -0.95, offset]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <planeGeometry args={[12, 0.2]} />
            <meshStandardMaterial color="#666" />
          </mesh>
        ))}
        
        {/* City blocks */}
        {[...Array(16)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          const size = 0.5 + Math.random() * 0.8;
          return (
            <mesh key={i} position={[x, -0.9, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <boxGeometry args={[size, size, 0.1]} />
              <meshStandardMaterial color="#3a5a3a" />
            </mesh>
          );
        })}
        
        {/* GPS tracking zones */}
        {[...Array(8)].map((_, i) => {
          const x = (Math.random() - 0.5) * 10;
          const z = (Math.random() - 0.5) * 8;
          return (
            <mesh key={i} position={[x, -0.85, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.6]} />
              <meshStandardMaterial color="#4a7a4a" emissive="#007bff" emissiveIntensity={0.3} transparent opacity={0.7} />
            </mesh>
          );
        })}
        
        {/* Location markers */}
        {[...Array(10)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          return (
            <mesh key={i} position={[x, -0.7, z]}>
              <coneGeometry args={[0.1, 0.4]} />
              <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.5} />
            </mesh>
          );
        })}
      </group>
      
      {/* GPS Satellites */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
        <group position={[0, 0, 0]}>
          {/* Central GPS receiver */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 0.3, 16]} />
            <meshStandardMaterial color="#222" emissive="#007bff" emissiveIntensity={0.4} />
          </mesh>
          
          {/* Signal waves */}
          {[...Array(4)].map((_, i) => (
            <mesh key={i} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[1.5 + i * 0.5, 0.05, 8, 32]} />
              <meshStandardMaterial color="#333" emissive="#00ff88" emissiveIntensity={0.3} transparent opacity={0.6} />
            </mesh>
          ))}
        </group>
      </Float>
      
      {/* Floating location pins */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 6;
        const radius = 3;
        return (
          <Float key={i} speed={1.2 + i * 0.1} rotationIntensity={0.4} floatIntensity={0.8}>
            <group position={[Math.cos(angle) * radius, Math.sin(angle * 1.2) * 1, Math.sin(angle) * radius]}>
              {/* Pin base */}
              <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.3]} />
                <meshStandardMaterial color="#444" emissive="#ff6600" emissiveIntensity={0.5} />
              </mesh>
              {/* Pin top */}
              <mesh position={[0, 0.4, 0]}>
                <coneGeometry args={[0.2, 0.4]} />
                <meshStandardMaterial color="#333" emissive="#ff6600" emissiveIntensity={0.6} />
              </mesh>
            </group>
          </Float>
        );
      })}
      
      {/* Data connections between pins */}
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
          <mesh position={[Math.sin(i * 2) * 2, Math.cos(i * 1.5) * 0.8, Math.cos(i * 2) * 2]} rotation={[0, i * 0.8, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 3]} />
            <meshStandardMaterial color="#555" emissive="#00ccff" emissiveIntensity={0.4} transparent opacity={0.8} />
          </mesh>
        </Float>
      ))}
      
      {/* Floating title */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          position={[0, 3.5, 0]}
          fontSize={0.7}
          color="#fff"
          anchorX="center"
          anchorY="middle"
        >
          Location Intelligence
        </Text>
      </Float>
    </>
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
        <ClientOnly>
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.6} />
            <FloatingGlobe />
            <FloatingPins />
            {/* Dark particles for visibility */}
            <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
              <group>
                {[...Array(30)].map((_, i) => (
                  <mesh key={i} position={[
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 15
                  ]}>
                    <sphereGeometry args={[0.03]} />
                    <meshStandardMaterial color="#333" opacity={0.7} transparent />
                  </mesh>
                ))}
              </group>
            </Float>
          </Canvas>
        </ClientOnly>
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
            position: "relative",
            zIndex: 10
          }}>
            <ClientOnly>
              <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                <LocationServicesScene />
              </Canvas>
            </ClientOnly>
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
    </div>
  );
};

export default LocationBasedServicesPage; 