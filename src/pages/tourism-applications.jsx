import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

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
        🗺️ Loading Tourism Visualization...
      </div>
    );
  }

  return children;
};

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

const TourismScene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#007bff" />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      
      {/* Tourism Destination Map Background */}
      <group position={[0, -2, -3]}>
        {/* Base destination map */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 12]} />
          <meshStandardMaterial color="#2a4a3a" />
        </mesh>
        
        {/* Tourist pathways */}
        {/* Main tourist route */}
        <mesh position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 0.3]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
        {/* Walking trails */}
        {[-3, 0, 3].map(offset => (
          <mesh key={offset} position={[offset, -0.95, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <planeGeometry args={[12, 0.2]} />
            <meshStandardMaterial color="#a0522d" />
          </mesh>
        ))}
        
        {/* Tourist attractions */}
        {[...Array(12)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          const size = 0.5 + Math.random() * 0.8;
          return (
            <mesh key={i} position={[x, -0.9, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[size]} />
              <meshStandardMaterial color="#4a7a4a" />
            </mesh>
          );
        })}
        
        {/* Points of interest zones */}
        {[...Array(8)].map((_, i) => {
          const x = (Math.random() - 0.5) * 10;
          const z = (Math.random() - 0.5) * 8;
          return (
            <mesh key={i} position={[x, -0.85, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.8]} />
              <meshStandardMaterial color="#5a8a5a" emissive="#ff6600" emissiveIntensity={0.2} transparent opacity={0.7} />
            </mesh>
          );
        })}
        
        {/* Tourism landmarks */}
        {[...Array(10)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          return (
            <mesh key={i} position={[x, -0.7, z]}>
              <coneGeometry args={[0.15, 0.5]} />
              <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.5} />
            </mesh>
          );
        })}
        
        {/* Natural features */}
        {[...Array(16)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          return (
            <mesh key={i} position={[x, -0.88, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.2 + Math.random() * 0.3]} />
              <meshStandardMaterial color="#0a5a0a" />
            </mesh>
          );
        })}
        
        {/* Tourist information points */}
        {[...Array(6)].map((_, i) => {
          const x = (Math.random() - 0.5) * 10;
          const z = (Math.random() - 0.5) * 8;
          return (
            <mesh key={i} position={[x, -0.8, z]}>
              <cylinderGeometry args={[0.1, 0.1, 0.4]} />
              <meshStandardMaterial color="#444" emissive="#007bff" emissiveIntensity={0.4} />
            </mesh>
          );
        })}
      </group>
      
      {/* Airplane */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <group position={[0, 0, 0]}>
          {/* Plane Body */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 2]} />
            <meshStandardMaterial color="#333" emissive="#007bff" emissiveIntensity={0.6} />
          </mesh>
          {/* Wings */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[3, 0.1, 0.5]} />
            <meshStandardMaterial color="#444" emissive="#28a745" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </Float>
      
      {/* Compass */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh position={[2, -1, 0]}>
          <torusGeometry args={[0.8, 0.2, 8, 16]} />
          <meshStandardMaterial color="#444" />
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.5]} />
            <meshStandardMaterial color="#666" />
          </mesh>
        </mesh>
      </Float>
      
      {/* Travel guidebooks */}
      {[...Array(4)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 4;
        const radius = 3;
        return (
          <Float key={i} speed={1.3 + i * 0.1} rotationIntensity={0.4} floatIntensity={0.8}>
            <group position={[Math.cos(angle) * radius, Math.sin(angle) * 1, Math.sin(angle) * radius]}>
              {/* Guidebook */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.3, 0.5, 0.05]} />
                <meshStandardMaterial color="#444" emissive="#ff6600" emissiveIntensity={0.3} />
              </mesh>
              {/* Pages */}
              <mesh position={[0, 0, 0.03]}>
                <boxGeometry args={[0.28, 0.48, 0.02]} />
                <meshStandardMaterial color="#fff" />
              </mesh>
            </group>
          </Float>
        );
      })}
      
      {/* Tourist flow connections */}
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={1.8} rotationIntensity={0.1} floatIntensity={0.5}>
          <mesh position={[Math.sin(i * 2.2) * 2.5, Math.cos(i * 1.7) * 0.8, Math.cos(i * 2.2) * 2.5]} rotation={[0, i * 0.9, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 2.8]} />
            <meshStandardMaterial color="#555" emissive="#007bff" emissiveIntensity={0.4} transparent opacity={0.8} />
          </mesh>
        </Float>
      ))}
      
      {/* Floating Text */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          position={[0, 3, 0]}
          fontSize={0.7}
          color="#fff"
          anchorX="center"
          anchorY="middle"
        >
          Smart Tourism Experiences
        </Text>
      </Float>
    </>
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
        <ClientOnly>
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.8} />
            <FloatingPlane />
            <FloatingCompass />
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

          {/* Tourism Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(40,167,69,0.8), rgba(25,135,84,0.9))",
            position: "relative",
            zIndex: 10
          }}>
            <ClientOnly>
              <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                <TourismScene />
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