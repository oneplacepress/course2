import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingAudioPin = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.8;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[-2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[-2, 1, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#28a745" emissive="#28a745" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
};

const FloatingQRCode = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.7) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <boxGeometry args={[1.2, 1.2, 0.1]} />
        <meshStandardMaterial color="#dc3545" emissive="#dc3545" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
};

const SoundWaves = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.5;
      const scale = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 2, -1]}>
        <torusGeometry args={[0.8, 0.2, 8, 16]} />
        <meshStandardMaterial color="#17a2b8" wireframe emissive="#17a2b8" emissiveIntensity={0.6} />
      </mesh>
    </Float>
  );
};

const MediaAudioScene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#007bff" />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      
      {/* Audio Technology Map Background */}
      <group position={[0, -2, -3]}>
        {/* Base media map */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 12]} />
          <meshStandardMaterial color="#1a1a2a" />
        </mesh>
        
        {/* Audio wave pattern roads */}
        {[...Array(8)].map((_, i) => {
          const amplitude = 0.3;
          const frequency = 0.5;
          const points = [];
          for (let x = -7; x <= 7; x += 0.2) {
            const y = amplitude * Math.sin(frequency * x + i * Math.PI / 4);
            points.push([x, y + i * 1.5 - 3]);
          }
          return (
            <mesh key={i} position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.1, 12]} />
              <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.3} />
            </mesh>
          );
        })}
        
        {/* Audio studio blocks */}
        {[...Array(12)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          const height = 0.1 + Math.random() * 0.2;
          return (
            <mesh key={i} position={[x, -0.9, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.4, 0.4, height]} />
              <meshStandardMaterial color="#2a2a4a" />
            </mesh>
          );
        })}
        
        {/* QR scanning zones */}
        {[...Array(6)].map((_, i) => {
          const x = (Math.random() - 0.5) * 10;
          const z = (Math.random() - 0.5) * 8;
          return (
            <mesh key={i} position={[x, -0.85, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.7]} />
              <meshStandardMaterial color="#4a4a7a" emissive="#ff6600" emissiveIntensity={0.2} transparent opacity={0.6} />
            </mesh>
          );
        })}
        
        {/* Audio towers */}
        {[...Array(8)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          return (
            <mesh key={i} position={[x, -0.6, z]}>
              <cylinderGeometry args={[0.05, 0.05, 0.8]} />
              <meshStandardMaterial color="#666" emissive="#00ff88" emissiveIntensity={0.4} />
            </mesh>
          );
        })}
      </group>
      
      {/* Audio Wave Visualization */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
        <group position={[0, 0, 0]}>
          {/* Central audio processor */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[1, 1, 0.4, 16]} />
            <meshStandardMaterial color="#222" emissive="#007bff" emissiveIntensity={0.4} />
          </mesh>
          
          {/* Audio rings */}
          {[...Array(6)].map((_, i) => (
            <mesh key={i} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, i * Math.PI / 6]}>
              <torusGeometry args={[1.5 + i * 0.3, 0.08, 8, 32]} />
              <meshStandardMaterial color="#333" emissive="#007bff" emissiveIntensity={0.3} />
            </mesh>
          ))}
        </group>
      </Float>
      
      {/* Floating microphones */}
      {[...Array(4)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 4;
        const radius = 2.5;
        return (
          <Float key={i} speed={1.2 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.8}>
            <group position={[Math.cos(angle) * radius, Math.sin(angle) * 0.8, Math.sin(angle) * radius]}>
              {/* Microphone body */}
              <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.6]} />
                <meshStandardMaterial color="#333" emissive="#007bff" emissiveIntensity={0.3} />
              </mesh>
              {/* Microphone head */}
              <mesh position={[0, 0.4, 0]}>
                <sphereGeometry args={[0.2]} />
                <meshStandardMaterial color="#444" emissive="#00ff88" emissiveIntensity={0.4} />
              </mesh>
            </group>
          </Float>
        );
      })}
      
      {/* Audio data particles */}
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={1.5}>
        <group position={[0, 1, 0]}>
          {[...Array(25)].map((_, i) => (
            <mesh key={i} position={[
              Math.sin(i * 0.4) * 3,
              Math.cos(i * 0.6) * 2,
              Math.sin(i * 0.8) * 2
            ]}>
              <sphereGeometry args={[0.08]} />
              <meshStandardMaterial color="#333" emissive="#007bff" emissiveIntensity={0.3} />
            </mesh>
          ))}
        </group>
      </Float>
      
      {/* QR Code Elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2, 0, -1]}>
          <boxGeometry args={[1.5, 1.5, 0.1]} />
          <meshStandardMaterial color="#000" />
          <mesh position={[0, 0, 0.06]}>
            <boxGeometry args={[1.2, 1.2, 0.05]} />
            <meshStandardMaterial color="#fff" />
          </mesh>
        </mesh>
      </Float>
      
      {/* Floating Text */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          position={[0, 3, 0]}
          fontSize={0.8}
          color="#fff"
          anchorX="center"
          anchorY="middle"
        >
          AI Audio QR Experience
        </Text>
      </Float>
    </>
  );
};

const AIAudioQRPinsPage = () => {
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
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.8} />
          <FloatingAudioPin />
          <FloatingQRCode />
          <SoundWaves />
        </Canvas>
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
            background: "linear-gradient(45deg, #007bff, #28a745, #17a2b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            🎵 AI Audio QR Pins
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
            🌟 Welcome to the future of interactive audio experiences. Master the art of creating AI-powered audio tours accessible instantly through QR codes.
          </p>

          {/* AI Audio Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(28,40,51,0.8), rgba(52,73,94,0.9))"
          }}>
            <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, 3, -5]} intensity={0.8} color="#007bff" />
              <directionalLight position={[0, 10, 0]} intensity={0.5} />
              
              {/* AI Audio Wave Elements */}
              <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
                <group position={[-3, 0, 1]}>
                  {[...Array(7)].map((_, i) => (
                    <mesh key={i} position={[(i - 3) * 0.3, Math.sin(i) * 0.2, 0]}>
                      <boxGeometry args={[0.15, 1 + Math.sin(i) * 0.5, 0.15]} />
                      <meshStandardMaterial color="#333" emissive="#007bff" emissiveIntensity={0.3} />
                    </mesh>
                  ))}
                </group>
              </Float>
              
              {/* QR Code Elements */}
              <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[2, 0, -1]}>
                  <boxGeometry args={[1.5, 1.5, 0.1]} />
                  <meshStandardMaterial color="#000" />
                  <mesh position={[0, 0, 0.06]}>
                    <boxGeometry args={[1.2, 1.2, 0.05]} />
                    <meshStandardMaterial color="#fff" />
                  </mesh>
                </mesh>
              </Float>
              
              {/* Floating Text */}
              <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
                <Text
                  position={[0, 3, 0]}
                  fontSize={0.8}
                  color="#fff"
                  anchorX="center"
                  anchorY="middle"
                >
                  AI Audio QR Experience
                </Text>
              </Float>
            </Canvas>
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
              <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🚀 Instant QR Generation</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Master n8n automation workflows for instant QR code generation with AI-powered audio. Eliminate manual processes with smart automation.
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
              <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🎧 Immersive Audio Tours</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Create captivating audio experiences for any location worldwide. From scriptwriting to AI voice synthesis.
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
              <h2 style={{ color: "#6c757d", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📡 LoRaWAN Networks</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Leverage LoRaWAN and private networks for secure, reliable communication between pins and servers.
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
              <h2 style={{ color: "#17a2b8", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🗺️ Smart Routing</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Design custom maps and intelligent routes for seamless, intuitive audio tour experiences.
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
              🚀 Start Learning at PinPal.io
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAudioQRPinsPage; 