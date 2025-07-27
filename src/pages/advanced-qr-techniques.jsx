import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingQRCube = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.6;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#8e44ad" wireframe />
      </mesh>
    </Float>
  );
};

const ScanningEffect = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.8;
      meshRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 3) * 0.2);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[3, -1, 0]}>
        <ringGeometry args={[0.8, 1.2, 32]} />
        <meshStandardMaterial color="#e67e22" wireframe />
      </mesh>
    </Float>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #8e44ad 0%, #e67e22 50%, #2c3e50 100%)",
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
        <FloatingQRCube />
        <ScanningEffect />
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
          background: "linear-gradient(45deg, #8e44ad, #e67e22)",
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
              background: "linear-gradient(45deg, #8e44ad, #e67e22)",
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
            📱 Master Advanced QR Techniques!
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AdvancedQRTechniquesPage = () => {
  return (
    <PageLayout title="📱 Advanced QR Techniques">
      <div style={{ fontSize: "1.2em", lineHeight: "1.8" }}>
        <p style={{ 
          fontSize: "1.3em", 
          textAlign: "center", 
          marginBottom: "30px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          🚀 Push the boundaries of QR code technology. Learn advanced techniques for dynamic codes, custom designs, video hosting, and AI-powered audio generation.
        </p>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px", 
          marginTop: "40px" 
        }}>
          <div style={{ 
            background: "rgba(142,68,173,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(142,68,173,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🔄 Dynamic QR Codes</h2>
            <p>Create QR codes that can be updated without reprinting. Change destinations, track scans, and gather analytics while keeping the same physical code in place.</p>
          </div>

          <div style={{ 
            background: "rgba(230,126,34,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(230,126,34,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🎨 Designer QR Codes</h2>
            <p>Design beautiful, branded QR codes that maintain scannability while incorporating logos, colors, and custom styling. Learn error correction and artistic QR techniques.</p>
          </div>

          <div style={{ 
            background: "rgba(142,68,173,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(142,68,173,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🎬 Video Hosting for Job Applicants</h2>
            <p>Revolutionary feature allowing job seekers to create video resumes accessible via QR codes. Boost interview chances with compelling video introductions delivered instantly.</p>
          </div>

          <div style={{ 
            background: "rgba(230,126,34,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(230,126,34,0.3)" 
          }}>
                         <h2 style={{ color: "white", marginBottom: "15px" }}>🤖 Instant QR + AI Audio Generation</h2>
            <p>Combine instant QR code generation with AI-powered audio creation using n8n workflows. Generate codes with custom audio content automatically triggered by user interactions.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdvancedQRTechniquesPage; 