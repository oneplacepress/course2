import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Text } from "@react-three/drei";

// Improved sophisticated automation components
const AdvancedWorkflowEngine = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={meshRef} position={[0, 1, 0]}>
        {/* Central processing unit */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.8, 8]} />
          <meshStandardMaterial color="#1a1a1a" emissive="#0066cc" emissiveIntensity={0.4} />
        </mesh>
        
        {/* Processing rings */}
        {[...Array(3)].map((_, i) => (
          <mesh key={i} position={[0, 0, 0]} rotation={[0, i * Math.PI / 3, 0]}>
            <torusGeometry args={[2 + i * 0.5, 0.1, 8, 32]} />
            <meshStandardMaterial color="#333" emissive="#00ff88" emissiveIntensity={0.3} />
          </mesh>
        ))}
        
        {/* Data connectors */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          return (
            <mesh key={i} position={[Math.cos(angle) * 2.5, 0, Math.sin(angle) * 2.5]}>
              <sphereGeometry args={[0.3]} />
              <meshStandardMaterial color="#444" emissive="#ff6600" emissiveIntensity={0.5} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
};

const SmartConnections = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[3, 0, -2]}>
      {[...Array(8)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const radius = 2;
        return (
          <Float key={i} speed={1.5 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.5}>
            <group position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
              {/* Node */}
              <mesh>
                <dodecahedronGeometry args={[0.3]} />
                <meshStandardMaterial color="#222" emissive="#4400ff" emissiveIntensity={0.4} />
              </mesh>
              
              {/* Connection beam to center */}
              <mesh position={[-Math.cos(angle) * radius * 0.5, -Math.sin(angle) * radius * 0.5, 0]}
                    rotation={[0, 0, angle]}>
                <cylinderGeometry args={[0.02, 0.02, radius]} />
                <meshStandardMaterial color="#555" emissive="#00ccff" emissiveIntensity={0.6} />
              </mesh>
            </group>
          </Float>
        );
      })}
    </group>
  );
};

const DataFlowParticles = () => {
  const particlesRef = useRef();

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={particlesRef} position={[-3, 1, 1]}>
      {[...Array(30)].map((_, i) => {
        const radius = 1 + Math.random() * 2;
        const angle = (i * Math.PI * 2) / 30;
        const height = (Math.random() - 0.5) * 3;
        return (
          <Float key={i} speed={2 + Math.random()} rotationIntensity={0.1} floatIntensity={1.5}>
            <mesh position={[
              Math.cos(angle) * radius,
              height,
              Math.sin(angle) * radius
            ]}>
              <octahedronGeometry args={[0.1]} />
              <meshStandardMaterial color="#111" emissive="#ff0088" emissiveIntensity={0.8} />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

// Map background component (similar to Story page)
const AutomationMapBackground = () => {
  return (
    <group position={[0, -2, -5]}>
      {/* City blocks */}
      {[...Array(20)].map((_, i) => {
        const x = (Math.random() - 0.5) * 15;
        const z = (Math.random() - 0.5) * 15;
        const height = 0.1 + Math.random() * 0.3;
        return (
          <mesh key={i} position={[x, -1, z]}>
            <boxGeometry args={[0.8, height, 0.8]} />
            <meshStandardMaterial color="#1a4a1a" />
          </mesh>
        );
      })}
      
      {/* Roads */}
      <mesh position={[0, -1.05, 0]}>
        <planeGeometry args={[20, 2]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      <mesh position={[0, -1.05, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, 2]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Parks/green areas */}
      {[...Array(8)].map((_, i) => {
        const x = (Math.random() - 0.5) * 12;
        const z = (Math.random() - 0.5) * 12;
        return (
          <mesh key={i} position={[x, -1.04, z]}>
            <circleGeometry args={[0.5 + Math.random() * 0.5]} />
            <meshStandardMaterial color="#0a3a0a" />
          </mesh>
        );
      })}
      
      {/* Automation network lines across the city */}
      {[...Array(10)].map((_, i) => {
        const startX = (Math.random() - 0.5) * 10;
        const startZ = (Math.random() - 0.5) * 10;
        const endX = (Math.random() - 0.5) * 10;
        const endZ = (Math.random() - 0.5) * 10;
        const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endZ - startZ, 2));
        const angle = Math.atan2(endZ - startZ, endX - startX);
        
        return (
          <mesh key={i} 
                position={[(startX + endX) / 2, -0.8, (startZ + endZ) / 2]}
                rotation={[0, angle, 0]}>
            <cylinderGeometry args={[0.02, 0.02, distance]} />
            <meshStandardMaterial color="#444" emissive="#00aaff" emissiveIntensity={0.4} />
          </mesh>
        );
      })}
    </group>
  );
};

// Enhanced N8N Automation Scene
const EnhancedAutomationScene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 8, 5]} intensity={1.5} color="#0066cc" />
      <pointLight position={[-5, 5, -5]} intensity={1.2} color="#00ff88" />
      <directionalLight position={[0, 10, 0]} intensity={0.8} />
      <spotLight position={[0, 8, 0]} intensity={1} angle={0.3} penumbra={0.5} color="#ff6600" />
      
      {/* Map background */}
      <AutomationMapBackground />
      
      {/* Main automation elements */}
      <AdvancedWorkflowEngine />
      <SmartConnections />
      <DataFlowParticles />
      
      {/* Floating title */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          position={[0, 4, 0]}
          fontSize={0.8}
          color="#fff"
          anchorX="center"
          anchorY="middle"
        >
          Advanced N8N Automation
        </Text>
      </Float>
    </>
  );
};

const N8nAutomationPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "white",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      padding: "20px"
    }}>
      <header style={{ marginBottom: "40px" }}>
        <nav style={{ 
          background: "rgba(255,255,255,0.95)", 
          padding: "15px 25px", 
          borderRadius: "15px", 
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
          background: "linear-gradient(45deg, #007bff, #28a745, #dc3545)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          ⚙️ N8N Automation
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
          🌟 Master advanced workflow automation with N8N to create powerful, scalable integrations that transform how your applications communicate and process data.
        </p>

        {/* Enhanced N8N Automation Animation Section */}
        <div style={{
          height: "400px",
          width: "100%",
          marginBottom: "50px",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          background: "linear-gradient(135deg, rgba(10,10,10,0.95), rgba(30,30,30,0.9))",
          position: "relative",
          zIndex: 10
        }}>
          <Canvas camera={{ position: [0, 4, 12], fov: 50 }}>
            <EnhancedAutomationScene />
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
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>⚡ Workflow Design</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Create sophisticated automation workflows using n8n's visual interface to orchestrate complex business processes and integrations.
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
              <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🔗 API Integrations</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Master seamless integrations with 200+ services including AI platforms, databases, and communication tools for complete automation.
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
              <h2 style={{ color: "#17a2b8", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🎯 Trigger Systems</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Implement intelligent trigger systems that respond to QR scans, location changes, and user interactions in real-time.
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
              <h2 style={{ color: "#ffc107", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📊 Data Processing</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Transform and process data flows with advanced logic, conditional branching, and custom JavaScript functions.
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
              🔧 Automate with n8n
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default N8nAutomationPage; 