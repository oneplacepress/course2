import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingGear = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1, 1, 0.2, 8]} />
        <meshStandardMaterial color="#16a085" />
      </mesh>
    </Float>
  );
};

const FloatingNodes = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.3;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <group ref={meshRef} position={[3, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#e74c3c" />
        </mesh>
        <mesh position={[0.8, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#f39c12" />
        </mesh>
        <mesh position={[-0.8, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#3498db" />
        </mesh>
      </group>
    </Float>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #16a085 0%, #f4d03f 50%, #e74c3c 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {/* Three.js Background */}
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <FloatingGear />
        <FloatingNodes />
      </Canvas>
    </div>

    {/* Content Overlay */}
    <div style={{ position: "relative", zIndex: 2, padding: "20px" }}>
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
          background: "linear-gradient(45deg, #16a085, #f39c12)",
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
              background: "linear-gradient(45deg, #16a085, #f39c12)",
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
            ⚙️ Automate Everything!
          </a>
        </div>
      </div>
    </div>
  </div>
);

const N8NAutomationPage = () => {
  return (
    <PageLayout title="⚙️ N8N Automation">
      <div style={{ fontSize: "1.2em", lineHeight: "1.8" }}>
        <p style={{ 
          fontSize: "1.3em", 
          textAlign: "center", 
          marginBottom: "30px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          🤖 Supercharge your business with powerful n8n automation workflows. Connect apps, automate tasks, and create intelligent workflows that work 24/7 for your success.
        </p>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px", 
          marginTop: "40px" 
        }}>
          <div style={{ 
            background: "rgba(22,160,133,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(22,160,133,0.3)" 
          }}>
            <h2 style={{ color: "#16a085", marginBottom: "15px" }}>🔗 Workflow Automation</h2>
            <p>Design sophisticated automation workflows that trigger instantly when QR codes are scanned. Capture leads, send emails, update databases, and trigger actions across multiple platforms seamlessly.</p>
          </div>

          <div style={{ 
            background: "rgba(243,156,18,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(243,156,18,0.3)" 
          }}>
            <h2 style={{ color: "#f39c12", marginBottom: "15px" }}>🔌 App Integration</h2>
            <p>Connect over 400+ apps and services including CRM systems, email platforms, social media, and cloud storage. Create powerful integrations that eliminate manual work forever.</p>
          </div>

          <div style={{ 
            background: "rgba(22,160,133,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(22,160,133,0.3)" 
          }}>
            <h2 style={{ color: "#16a085", marginBottom: "15px" }}>🎨 Custom Nodes</h2>
            <p>Build custom n8n nodes for specialized PinPal.io functions. Create reusable components for AI audio generation, QR code creation, and location-based triggers that extend your automation capabilities.</p>
          </div>

          <div style={{ 
            background: "rgba(243,156,18,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(243,156,18,0.3)" 
          }}>
            <h2 style={{ color: "#f39c12", marginBottom: "15px" }}>🎁 Free Workflows</h2>
            <p>Access our library of pre-built n8n workflows specifically designed for PinPal.io users. Get instant QR generation, lead capture, email sequences, and analytics - all completely free!</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default N8NAutomationPage; 