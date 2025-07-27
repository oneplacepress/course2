import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingPin = ({ position, color, speed = 1 }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * speed;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed * 2) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={position}>
        {/* Pin Head */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color={color} />
        </mesh>
        {/* Pin Body */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
      </group>
    </Float>
  );
};

const OrbitingQR = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2, 3].map(i => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.8} floatIntensity={0.5}>
          <mesh 
            position={[
              Math.cos((i * Math.PI) / 2) * 4,
              Math.sin(i * 0.5) * 2,
              Math.sin((i * Math.PI) / 2) * 4
            ]}
          >
            <boxGeometry args={[0.8, 0.8, 0.1]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#e74c3c" : "#3498db"} wireframe />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const PulsingSphere = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, -2]}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial color="#9b59b6" wireframe />
      </mesh>
    </Float>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {/* Epic Three.js Background */}
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Stars radius={300} depth={100} count={8000} factor={6} saturation={0} fade />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, -10, -10]} angle={0.3} intensity={1} />
        
        {/* Multiple Floating Pins */}
        <FloatingPin position={[-3, 2, 1]} color="#e74c3c" speed={0.8} />
        <FloatingPin position={[3, -1, 2]} color="#3498db" speed={1.2} />
        <FloatingPin position={[-2, -2, -1]} color="#f39c12" speed={0.6} />
        <FloatingPin position={[2, 3, -2]} color="#27ae60" speed={1.5} />
        
        {/* Orbiting QR Codes */}
        <OrbitingQR />
        
        {/* Central Pulsing Element */}
        <PulsingSphere />
      </Canvas>
    </div>

    {/* Content Overlay */}
    <div style={{ position: "relative", zIndex: 2, padding: "20px" }}>
      <header style={{ marginBottom: "40px" }}>
        <nav style={{ 
          background: "rgba(255,255,255,0.15)", 
          padding: "15px", 
          borderRadius: "20px", 
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          <Link 
            to="/" 
            style={{ 
              color: "white", 
              textDecoration: "none", 
              fontSize: "18px",
              fontWeight: "bold",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)"
            }}
          >
            🏠 Home
          </Link>
        </nav>
      </header>
      
      <div style={{ 
        background: "rgba(255,255,255,0.1)", 
        padding: "50px", 
        borderRadius: "25px", 
        backdropFilter: "blur(15px)",
        border: "2px solid rgba(255,255,255,0.2)",
        boxShadow: "0 15px 50px rgba(0,0,0,0.4)"
      }}>
        <h1 style={{ 
          fontSize: "4em", 
          marginBottom: "30px", 
          textAlign: "center",
          background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
          fontWeight: "bold"
        }}>{title}</h1>
        {children}
        
        {/* Epic Call to Action Button */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <a
            href="https://pinpal.io"
            style={{
              display: "inline-block",
              padding: "20px 40px",
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              color: "white",
              textDecoration: "none",
              borderRadius: "50px",
              fontSize: "20px",
              fontWeight: "bold",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              transition: "all 0.3s ease",
              border: "2px solid rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1) translateY(-3px)";
              e.target.style.boxShadow = "0 15px 35px rgba(0,0,0,0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
            }}
          >
            🚀 Join the PinPal Revolution!
          </a>
        </div>
      </div>
    </div>
  </div>
);

const StoryPage = () => {
  return (
    <PageLayout title="🌟 The PinPal Story">
      <div style={{ fontSize: "1.3em", lineHeight: "2", textAlign: "center" }}>
        <div style={{ 
          background: "rgba(255,255,255,0.1)", 
          padding: "30px", 
          borderRadius: "20px", 
          marginBottom: "30px",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          <h2 style={{ 
            color: "#667eea", 
            fontSize: "2em", 
            marginBottom: "20px",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)"
          }}>
            🎯 The Vision
          </h2>
          <p style={{ 
            fontSize: "1.2em", 
            textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            marginBottom: "20px"
          }}>
            In 2023, our founders envisioned a world where physical locations could instantly come alive with AI-powered audio experiences. Traditional QR codes were static and boring - we wanted to create something <strong>revolutionary</strong>.
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
          gap: "30px", 
          marginTop: "40px" 
        }}>
          <div style={{ 
            background: "rgba(231,76,60,0.2)", 
            padding: "30px", 
            borderRadius: "20px", 
            border: "2px solid rgba(231,76,60,0.3)",
            transform: "perspective(1000px) rotateY(-5deg)"
          }}>
            <h3 style={{ color: "#e74c3c", fontSize: "1.8em", marginBottom: "15px" }}>
              🏗️ The Foundation
            </h3>
            <p>
              We started with a simple idea: what if every physical location could tell its story through AI-generated audio? From real estate showings to museum exhibits, we saw endless possibilities.
            </p>
          </div>

          <div style={{ 
            background: "rgba(52,152,219,0.2)", 
            padding: "30px", 
            borderRadius: "20px", 
            border: "2px solid rgba(52,152,219,0.3)",
            transform: "perspective(1000px) rotateY(5deg)"
          }}>
            <h3 style={{ color: "#3498db", fontSize: "1.8em", marginBottom: "15px" }}>
              🚀 The Breakthrough
            </h3>
            <p>
              Our breakthrough came when we integrated n8n automation with AI audio generation. Suddenly, creating immersive audio tours became as simple as scanning a QR code.
            </p>
          </div>

          <div style={{ 
            background: "rgba(155,89,182,0.2)", 
            padding: "30px", 
            borderRadius: "20px", 
            border: "2px solid rgba(155,89,182,0.3)",
            transform: "perspective(1000px) rotateY(-3deg)"
          }}>
            <h3 style={{ color: "#9b59b6", fontSize: "1.8em", marginBottom: "15px" }}>
              ⚡ The Revolution
            </h3>
            <p>
              Today, PinPal.io powers thousands of location-based experiences worldwide. From job applications to travel tours, we're transforming how people connect with places.
            </p>
          </div>

          <div style={{ 
            background: "rgba(243,156,18,0.2)", 
            padding: "30px", 
            borderRadius: "20px", 
            border: "2px solid rgba(243,156,18,0.3)",
            transform: "perspective(1000px) rotateY(3deg)"
          }}>
            <h3 style={{ color: "#f39c12", fontSize: "1.8em", marginBottom: "15px" }}>
              🌍 The Future
            </h3>
            <p>
              We're building a world where every location has a voice, every space tells a story, and every experience is personalized through the power of AI and automation.
            </p>
          </div>
        </div>

        <div style={{ 
          background: "rgba(255,255,255,0.15)", 
          padding: "40px", 
          borderRadius: "25px", 
          marginTop: "50px",
          border: "2px solid rgba(255,255,255,0.3)",
          textAlign: "center"
        }}>
          <h2 style={{ 
            fontSize: "2.5em", 
            marginBottom: "20px",
            background: "linear-gradient(45deg, #f093fb, #f5576c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Join the Movement
          </h2>
          <p style={{ fontSize: "1.4em", marginBottom: "0" }}>
            Every day, we're pushing the boundaries of what's possible with location-based technology. 
            <br/><strong>Your story is waiting to be told.</strong>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default StoryPage; 