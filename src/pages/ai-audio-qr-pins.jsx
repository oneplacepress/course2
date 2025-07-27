import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingQR = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 0.2]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
    </Float>
  );
};

const AudioWave = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.5;
      meshRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 2) * 0.1);
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[3, 0, 0]}>
        <torusGeometry args={[0.8, 0.3, 16, 100]} />
        <meshStandardMaterial color="#4ecdc4" wireframe />
      </mesh>
    </Float>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {/* Three.js Background */}
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingQR />
        <AudioWave />
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
          background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
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
              background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
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
            🚀 Try PinPal.io Now!
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AIAudioQRPinsPage = () => {
  return (
    <PageLayout title="🎵 AI Audio QR Pins">
      <div style={{ fontSize: "1.2em", lineHeight: "1.8" }}>
        <p style={{ 
          fontSize: "1.3em", 
          textAlign: "center", 
          marginBottom: "30px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          🌟 Welcome to the future of interactive experiences. Our AI Audio QR Pins course will teach you how to create, deploy, and manage AI-powered audio tours that can be accessed instantly through a QR code.
        </p>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px", 
          marginTop: "40px" 
        }}>
          <div style={{ 
            background: "rgba(255,107,107,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(255,107,107,0.3)" 
          }}>
            <h2 style={{ color: "#ff6b6b", marginBottom: "15px" }}>🚀 Instant QR Code Generation</h2>
            <p>Learn how to use our n8n automation workflows to instantly generate QR codes with AI-powered audio. No more manual processes - everything happens automatically!</p>
          </div>

          <div style={{ 
            background: "rgba(78,205,196,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(78,205,196,0.3)" 
          }}>
            <h2 style={{ color: "#4ecdc4", marginBottom: "15px" }}>🎧 Immersive Audio Tours</h2>
            <p>Discover how to create captivating audio tours for any location in the world. We'll cover everything from scriptwriting to voice synthesis using cutting-edge AI.</p>
          </div>

          <div style={{ 
            background: "rgba(255,107,107,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(255,107,107,0.3)" 
          }}>
            <h2 style={{ color: "#ff6b6b", marginBottom: "15px" }}>📡 LoRaWAN & Private Networks</h2>
            <p>Understand how to leverage LoRaWAN and private networks for secure and reliable communication between your pins and our servers.</p>
          </div>

          <div style={{ 
            background: "rgba(78,205,196,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(78,205,196,0.3)" 
          }}>
            <h2 style={{ color: "#4ecdc4", marginBottom: "15px" }}>🗺️ Routing and Mapping</h2>
            <p>Learn how to create custom maps and routes for your audio tours, providing users with a seamless and intuitive experience.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AIAudioQRPinsPage; 