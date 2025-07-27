import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingChip = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.2, 1.2, 0.2]} />
        <meshStandardMaterial color="#9b59b6" />
      </mesh>
    </Float>
  );
};

const FloatingCircuit = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
      meshRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 2) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[-3, 0, 0]}>
        <torusGeometry args={[0.8, 0.2, 16, 100]} />
        <meshStandardMaterial color="#e67e22" wireframe />
      </mesh>
    </Float>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #8e44ad 0%, #3498db 50%, #e67e22 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {/* Three.js Background */}
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars radius={100} depth={50} count={3500} factor={4} saturation={0} fade />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <FloatingChip />
        <FloatingCircuit />
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
          background: "linear-gradient(45deg, #9b59b6, #e67e22)",
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
              background: "linear-gradient(45deg, #9b59b6, #e67e22)",
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
            ⚡ Power Up With Embedded Systems!
          </a>
        </div>
      </div>
    </div>
  </div>
);

const EmbeddedSystemsPage = () => {
  return (
    <PageLayout title="⚡ Embedded Systems">
      <div style={{ fontSize: "1.2em", lineHeight: "1.8" }}>
        <p style={{ 
          fontSize: "1.3em", 
          textAlign: "center", 
          marginBottom: "30px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          🔧 Master the hardware foundation of location-based technology. Learn to design, build, and deploy embedded systems that power our AI audio QR pins and IoT networks.
        </p>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px", 
          marginTop: "40px" 
        }}>
          <div style={{ 
            background: "rgba(155,89,182,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(155,89,182,0.3)" 
          }}>
            <h2 style={{ color: "#9b59b6", marginBottom: "15px" }}>🔌 Hardware Design</h2>
            <p>Learn to design custom PCBs and select components for location-based devices. Master power management, signal integrity, and miniaturization techniques for portable QR pin systems.</p>
          </div>

          <div style={{ 
            background: "rgba(230,126,34,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(230,126,34,0.3)" 
          }}>
            <h2 style={{ color: "#e67e22", marginBottom: "15px" }}>💻 Firmware Development</h2>
            <p>Program microcontrollers using C/C++ and embedded Linux. Implement real-time systems, interrupt handling, and low-level hardware interfaces for our pin technology.</p>
          </div>

          <div style={{ 
            background: "rgba(155,89,182,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(155,89,182,0.3)" 
          }}>
            <h2 style={{ color: "#9b59b6", marginBottom: "15px" }}>📡 LoRaWAN & Private Networks</h2>
            <p>Configure LoRaWAN modules and establish private network infrastructure. Learn mesh networking protocols and long-range communication for remote pin deployments.</p>
          </div>

          <div style={{ 
            background: "rgba(230,126,34,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(230,126,34,0.3)" 
          }}>
            <h2 style={{ color: "#e67e22", marginBottom: "15px" }}>🔋 Power Management</h2>
            <p>Optimize battery life and implement energy harvesting solutions. Design sleep modes, power rails, and charging circuits for long-term autonomous operation.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EmbeddedSystemsPage; 