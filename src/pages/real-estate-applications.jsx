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
        🏠 Loading Real Estate Visualization...
      </div>
    );
  }

  return children;
};

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

const RealEstateScene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#007bff" />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      
      {/* Real Estate Neighborhood Map Background */}
      <group position={[0, -2, -3]}>
        {/* Base neighborhood map */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 12]} />
          <meshStandardMaterial color="#2a4a2a" />
        </mesh>
        
        {/* Residential streets */}
        {/* Main street */}
        <mesh position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 0.4]} />
          <meshStandardMaterial color="#555" />
        </mesh>
        {/* Cross streets */}
        {[-4, -2, 0, 2, 4].map(offset => (
          <mesh key={offset} position={[offset, -0.95, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <planeGeometry args={[12, 0.3]} />
            <meshStandardMaterial color="#666" />
          </mesh>
        ))}
        
        {/* Property lots */}
        {[...Array(20)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          const width = 1.2 + Math.random() * 0.8;
          const depth = 1.5 + Math.random() * 1;
          return (
            <mesh key={i} position={[x, -0.9, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[width, depth]} />
              <meshStandardMaterial color="#3a5a3a" />
            </mesh>
          );
        })}
        
        {/* Property showcase zones */}
        {[...Array(8)].map((_, i) => {
          const x = (Math.random() - 0.5) * 10;
          const z = (Math.random() - 0.5) * 8;
          return (
            <mesh key={i} position={[x, -0.85, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.8]} />
              <meshStandardMaterial color="#4a7a4a" emissive="#ff6600" emissiveIntensity={0.2} transparent opacity={0.7} />
            </mesh>
          );
        })}
        
        {/* Property markers */}
        {[...Array(12)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          return (
            <mesh key={i} position={[x, -0.7, z]}>
              <coneGeometry args={[0.1, 0.4]} />
              <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.5} />
            </mesh>
          );
        })}
        
        {/* Landscaping elements */}
        {[...Array(15)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          return (
            <mesh key={i} position={[x, -0.88, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.3 + Math.random() * 0.2]} />
              <meshStandardMaterial color="#0a4a0a" />
            </mesh>
          );
        })}
      </group>
      
      {/* House Models */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <group position={[-2, 0, 0]}>
          {/* House Base */}
          <mesh position={[0, -0.5, 0]}>
            <boxGeometry args={[1.5, 1, 1.5]} />
            <meshStandardMaterial color="#444" />
          </mesh>
          {/* Roof */}
          <mesh position={[0, 0.2, 0]}>
            <coneGeometry args={[1.2, 0.8, 4]} />
            <meshStandardMaterial color="#666" />
          </mesh>
        </group>
      </Float>
      
      {/* QR Codes floating around properties */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[2, 1, -1]}>
          <boxGeometry args={[0.8, 0.8, 0.05]} />
          <meshStandardMaterial color="#000" />
          <mesh position={[0, 0, 0.03]}>
            <boxGeometry args={[0.6, 0.6, 0.02]} />
            <meshStandardMaterial color="#fff" />
          </mesh>
        </mesh>
      </Float>
      
      {/* Virtual tour cameras */}
      {[...Array(4)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 4;
        const radius = 3;
        return (
          <Float key={i} speed={1.5 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.8}>
            <group position={[Math.cos(angle) * radius, Math.sin(angle) * 1, Math.sin(angle) * radius]}>
              {/* Camera body */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.3, 0.2, 0.4]} />
                <meshStandardMaterial color="#333" emissive="#007bff" emissiveIntensity={0.3} />
              </mesh>
              {/* Camera lens */}
              <mesh position={[0, 0, 0.25]}>
                <cylinderGeometry args={[0.08, 0.08, 0.1]} />
                <meshStandardMaterial color="#111" emissive="#fff" emissiveIntensity={0.1} />
              </mesh>
            </group>
          </Float>
        );
      })}
      
      {/* Property data connections */}
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
          <mesh position={[Math.sin(i * 1.5) * 2.5, Math.cos(i * 1.2) * 0.8, Math.cos(i * 1.5) * 2.5]} rotation={[0, i * 0.8, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 2.5]} />
            <meshStandardMaterial color="#555" emissive="#00ccff" emissiveIntensity={0.4} transparent opacity={0.8} />
          </mesh>
        </Float>
      ))}
      
      {/* Floating Text */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          position={[0, 3, 0]}
          fontSize={0.6}
          color="#fff"
          anchorX="center"
          anchorY="middle"
        >
          Smart Real Estate Tours
        </Text>
      </Float>
    </>
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
        <ClientOnly>
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.8} />
            <FloatingHouse />
            <FloatingKey />
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
            position: "relative",
            zIndex: 10
          }}>
            <ClientOnly>
              <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                <RealEstateScene />
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