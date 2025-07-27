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
        🔧 Loading Embedded Systems Visualization...
      </div>
    );
  }

  return children;
};

const FloatingChip = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.6;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
      <group ref={meshRef} position={[-2, 0, 0]}>
        {/* Main Chip Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 0.2, 1.2]} />
          <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.3} />
        </mesh>
        {/* Chip Pins */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[0.7 * Math.cos(i * Math.PI / 4), 0.15, 0.7 * Math.sin(i * Math.PI / 4)]}>
            <cylinderGeometry args={[0.05, 0.05, 0.3]} />
            <meshStandardMaterial color="#28a745" emissive="#28a745" emissiveIntensity={0.2} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const FloatingCircuit = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.3;
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[2, 1, -1]}>
        <torusGeometry args={[1, 0.3, 8, 16]} />
        <meshStandardMaterial color="#17a2b8" wireframe />
      </mesh>
    </Float>
  );
};

const EmbeddedSystemsScene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#007bff" />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      
      {/* Circuit Board Map Background */}
      <group position={[0, -2, -3]}>
        {/* Base circuit board */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 12]} />
          <meshStandardMaterial color="#0a1a0a" />
        </mesh>
        
        {/* Circuit traces/pathways */}
        {/* Main circuit lines */}
        {[...Array(12)].map((_, i) => (
          <mesh key={i} position={[-6 + i * 1, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.05, 12]} />
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.4} />
          </mesh>
        ))}
        {[...Array(10)].map((_, i) => (
          <mesh key={i} position={[0, -0.95, -5 + i * 1]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[15, 0.05]} />
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.4} />
          </mesh>
        ))}
        
        {/* Component zones */}
        {[...Array(16)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          const size = 0.3 + Math.random() * 0.5;
          return (
            <mesh key={i} position={[x, -0.9, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <boxGeometry args={[size, size, 0.1]} />
              <meshStandardMaterial color="#1a3a1a" />
            </mesh>
          );
        })}
        
        {/* Microchip placement zones */}
        {[...Array(8)].map((_, i) => {
          const x = (Math.random() - 0.5) * 10;
          const z = (Math.random() - 0.5) * 8;
          return (
            <mesh key={i} position={[x, -0.85, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.6]} />
              <meshStandardMaterial color="#2a4a2a" emissive="#0066cc" emissiveIntensity={0.2} transparent opacity={0.7} />
            </mesh>
          );
        })}
        
        {/* Connection points/pads */}
        {[...Array(24)].map((_, i) => {
          const x = (Math.random() - 0.5) * 12;
          const z = (Math.random() - 0.5) * 10;
          return (
            <mesh key={i} position={[x, -0.8, z]}>
              <cylinderGeometry args={[0.08, 0.08, 0.2]} />
              <meshStandardMaterial color="#666" emissive="#ffaa00" emissiveIntensity={0.3} />
            </mesh>
          );
        })}
        
        {/* Power rails */}
        <mesh position={[6, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.2, 12]} />
          <meshStandardMaterial color="#ff3333" emissive="#ff3333" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-6, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.2, 12]} />
          <meshStandardMaterial color="#3333ff" emissive="#3333ff" emissiveIntensity={0.3} />
        </mesh>
      </group>
      
      {/* Microchip Elements */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
        <group position={[-2, 0, 0]}>
          {/* Main Chip Body */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.2, 0.2, 1.2]} />
            <meshStandardMaterial color="#333" emissive="#007bff" emissiveIntensity={0.3} />
          </mesh>
          {/* Chip Pins */}
          {[...Array(8)].map((_, i) => (
            <mesh key={i} position={[0.7 * Math.cos(i * Math.PI / 4), 0.15, 0.7 * Math.sin(i * Math.PI / 4)]}>
              <cylinderGeometry args={[0.05, 0.05, 0.3]} />
              <meshStandardMaterial color="#444" emissive="#28a745" emissiveIntensity={0.2} />
            </mesh>
          ))}
        </group>
      </Float>
      
      {/* Circuit Board */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh position={[2, 1, -1]}>
          <torusGeometry args={[1, 0.3, 8, 16]} />
          <meshStandardMaterial color="#444" wireframe />
        </mesh>
      </Float>
      
      {/* Embedded sensors */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 6;
        const radius = 3;
        return (
          <Float key={i} speed={1.8 + i * 0.1} rotationIntensity={0.4} floatIntensity={0.8}>
            <group position={[Math.cos(angle) * radius, Math.sin(angle) * 1.2, Math.sin(angle) * radius]}>
              {/* Sensor body */}
              <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.4]} />
                <meshStandardMaterial color="#333" emissive="#ff6600" emissiveIntensity={0.4} />
              </mesh>
              {/* Sensor pins */}
              {[...Array(4)].map((_, j) => (
                <mesh key={j} position={[0.15 * Math.cos(j * Math.PI / 2), -0.3, 0.15 * Math.sin(j * Math.PI / 2)]}>
                  <cylinderGeometry args={[0.02, 0.02, 0.2]} />
                  <meshStandardMaterial color="#555" emissive="#ffaa00" emissiveIntensity={0.3} />
                </mesh>
              ))}
            </group>
          </Float>
        );
      })}
      
      {/* Data flow connections */}
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
          <mesh position={[Math.sin(i * 1.8) * 2.5, Math.cos(i * 1.3) * 0.8, Math.cos(i * 1.8) * 2.5]} rotation={[0, i * 0.6, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 2]} />
            <meshStandardMaterial color="#555" emissive="#00ff88" emissiveIntensity={0.4} transparent opacity={0.8} />
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
          Embedded Hardware Systems
        </Text>
      </Float>
    </>
  );
};

const EmbeddedSystemsPage = () => {
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
            <FloatingChip />
            <FloatingCircuit />
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
            background: "linear-gradient(45deg, #007bff, #28a745, #17a2b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            ⚡ Embedded Systems
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
            🌟 Master the hardware foundation of PinPal.io technology with comprehensive embedded systems training for location-based applications.
          </p>

          {/* Embedded Systems Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(33,37,41,0.8), rgba(52,58,64,0.9))",
            position: "relative",
            zIndex: 10
          }}>
            <ClientOnly>
              <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                <EmbeddedSystemsScene />
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
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🔌 LoRaWAN Integration</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Learn to integrate LoRaWAN modules for long-range, low-power communication in remote location deployments.
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
              <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🛡️ Security Protocols</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Implement robust security measures for embedded devices, including encryption and secure boot processes.
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
              <h2 style={{ color: "#17a2b8", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>⚡ Power Management</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Design energy-efficient systems with advanced power management for extended battery life in field deployments.
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
              <h2 style={{ color: "#6c757d", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📡 Radio Communications</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Master various radio communication protocols including WiFi, Bluetooth, and cellular connectivity options.
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
                background: "linear-gradient(45deg, #007bff, #17a2b8)",
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
              ⚡ Master Embedded Systems
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbeddedSystemsPage; 