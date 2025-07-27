import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingPlane = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.5) * 2;
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={meshRef}>
        {/* Plane body */}
        <mesh>
          <cylinderGeometry args={[0.1, 0.2, 2, 8]} />
          <meshStandardMaterial color="#3498db" />
        </mesh>
        {/* Wings */}
        <mesh position={[0, 0, -0.5]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.1, 1.5, 0.2]} />
          <meshStandardMaterial color="#2980b9" />
        </mesh>
      </group>
    </Float>
  );
};

const FloatingCompass = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[3, -1, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 16]} />
        <meshStandardMaterial color="#27ae60" />
      </mesh>
    </Float>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #00b894 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}
  >
         {/* Three.js Background */}
     <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingPlane />
        <FloatingCompass />
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
          background: "linear-gradient(45deg, #74b9ff, #00b894)",
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
              background: "linear-gradient(45deg, #74b9ff, #00b894)",
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
            ✈️ Revolutionize Tourism!
          </a>
        </div>
      </div>
    </div>
  </div>
);

const TourismApplicationsPage = () => {
  return (
    <PageLayout title="✈️ Tourism Applications">
      <div style={{ fontSize: "1.2em", lineHeight: "1.8" }}>
        <p style={{ 
          fontSize: "1.3em", 
          textAlign: "center", 
          marginBottom: "30px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          🌍 Create unforgettable travel experiences with AI-powered audio tours. Transform how tourists explore destinations and connect with local culture and history.
        </p>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px", 
          marginTop: "40px" 
        }}>
          <div style={{ 
            background: "rgba(116,185,255,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(116,185,255,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🚶‍♂️ Self-Guided Tours</h2>
            <p>Enable tourists to explore at their own pace with AI-narrated audio guides. QR pins at key locations trigger immersive stories about local history, culture, and hidden gems.</p>
          </div>

          <div style={{ 
            background: "rgba(0,184,148,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(0,184,148,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🏛️ Interactive Museum Exhibits</h2>
            <p>Transform museums and cultural sites with interactive audio experiences. Visitors scan QR codes to hear detailed explanations, stories, and multimedia content about exhibits.</p>
          </div>

          <div style={{ 
            background: "rgba(116,185,255,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(116,185,255,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🎮 Gamified Tours</h2>
            <p>Create engaging scavenger hunts and interactive games using QR pins. Tourists collect digital badges, unlock rewards, and compete with friends while exploring destinations.</p>
          </div>

          <div style={{ 
            background: "rgba(0,184,148,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(0,184,148,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>💝 Personalized Experiences</h2>
            <p>Use AI to customize tours based on visitor preferences, interests, and time constraints. Each tourist gets a unique, tailored experience that matches their perfect vacation.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TourismApplicationsPage; 