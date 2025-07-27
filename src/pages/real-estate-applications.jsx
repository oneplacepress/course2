import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingHouse = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef}>
        {/* House base */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[1.5, 1, 1.5]} />
          <meshStandardMaterial color="#e74c3c" />
        </mesh>
        {/* Roof */}
        <mesh position={[0, 0.2, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[1.2, 0.8, 4]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
      </group>
    </Float>
  );
};

const FloatingKey = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.3;
      meshRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 3) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[-3, 1, 0]}>
        <torusGeometry args={[0.3, 0.1, 8, 16]} />
        <meshStandardMaterial color="#f39c12" />
      </mesh>
    </Float>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #2c3e50 0%, #3498db 50%, #e74c3c 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}
  >
         {/* Three.js Background */}
     <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <FloatingHouse />
        <FloatingKey />
      </Canvas>
    </div>

         {/* Content Overlay */}
     <div style={{ position: "relative", zIndex: 10, padding: "20px" }}>
      <header style={{ marginBottom: "40px" }}>
        <nav style={{ background: "rgba(255,255,255,0.1)", padding: "15px", borderRadius: "15px", backdropFilter: "blur(10px)" }}>
          <Link 
            to="/" 
            style={{ 
              color: "white", 
              textDecoration: "none", 
              fontSize: "18px",
              fontWeight: "bold",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}
          >
            🏠 Home
          </Link>
        </nav>
      </header>
      
      <div style={{ 
        background: "rgba(255,255,255,0.1)", 
        padding: "40px", 
        borderRadius: "20px", 
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
      }}>
        <h1 style={{ 
          fontSize: "3em", 
          marginBottom: "20px", 
          textAlign: "center",
          background: "linear-gradient(45deg, #e74c3c, #f39c12)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none"
        }}>{title}</h1>
        {children}
        
        {/* Call to Action Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="https://pinpal.io"
            style={{
              display: "inline-block",
              padding: "15px 30px",
              background: "linear-gradient(45deg, #e74c3c, #f39c12)",
              color: "white",
              textDecoration: "none",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease",
              border: "none"
            }}
            onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            🏘️ Transform Your Real Estate Business!
          </a>
        </div>
      </div>
    </div>
  </div>
);

const RealEstateApplicationsPage = () => {
  return (
    <PageLayout title="🏘️ Real Estate Applications">
      <div style={{ fontSize: "1.2em", lineHeight: "1.8" }}>
        <p style={{ 
          fontSize: "1.3em", 
          textAlign: "center", 
          marginBottom: "30px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          🌟 Transform your real estate business with AI-powered location technology. Learn how to create immersive property experiences that wow clients and close deals faster.
        </p>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px", 
          marginTop: "40px" 
        }}>
          <div style={{ 
            background: "rgba(231,76,60,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(231,76,60,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🏡 Virtual Open Houses</h2>
            <p>Create stunning virtual open houses with AI-powered audio narration. Prospects can tour properties remotely while hearing detailed descriptions of every room and feature.</p>
          </div>

          <div style={{ 
            background: "rgba(243,156,18,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(243,156,18,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🎯 Interactive Property Tours</h2>
            <p>Set up QR pins throughout properties that trigger location-specific audio content. Visitors learn about features, neighborhood amenities, and property history as they explore.</p>
          </div>

          <div style={{ 
            background: "rgba(231,76,60,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(231,76,60,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>📈 Lead Capture & Automation</h2>
            <p>Automatically capture leads when prospects scan QR codes. Follow up with personalized content and schedule showings using our n8n automation workflows.</p>
          </div>

          <div style={{ 
            background: "rgba(243,156,18,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(243,156,18,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🎬 Video Resumes for Agents</h2>
            <p>Create compelling video introductions that prospects can access via QR codes. Build trust and personal connections before ever meeting in person.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RealEstateApplicationsPage; 