import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Text } from "@react-three/drei";

const FloatingGear = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.8;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1}>
      <group ref={meshRef} position={[-2, 0, 0]}>
        {/* Main Gear */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.2, 0.3, 12]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        {/* Gear Teeth */}
        {[...Array(12)].map((_, i) => (
          <mesh key={i} position={[1.4 * Math.cos(i * Math.PI / 6), 0, 1.4 * Math.sin(i * Math.PI / 6)]}>
            <boxGeometry args={[0.2, 0.3, 0.4]} />
            <meshStandardMaterial color="#444" />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const FloatingNodes = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.5;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <group ref={meshRef} position={[2, 1, -1]}>
        {/* Central Node */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.4]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        {/* Connected Nodes */}
        {[...Array(4)].map((_, i) => (
          <group key={i}>
            <mesh position={[Math.cos(i * Math.PI / 2) * 1.5, 0, Math.sin(i * Math.PI / 2) * 1.5]}>
              <sphereGeometry args={[0.2]} />
              <meshStandardMaterial color="#555" />
            </mesh>
            {/* Connection Lines */}
            <mesh position={[Math.cos(i * Math.PI / 2) * 0.75, 0, Math.sin(i * Math.PI / 2) * 0.75]} 
                  rotation={[0, i * Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 1.1]} />
              <meshStandardMaterial color="#444" />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
};

// N8N Automation Scene
const AutomationScene = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[0, 10, 0]} intensity={0.8} />
      
      {/* Central workflow engine */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1, 1, 0.5, 8]} />
          <meshStandardMaterial color="#000" />
        </mesh>
        {/* Engine core */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </Float>
      
      {/* Workflow nodes in a network */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const radius = 3;
        return (
          <Float key={`node-${i}`} speed={1.8 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.8}>
            <group position={[Math.cos(angle) * radius, Math.sin(angle * 1.5) * 0.5, Math.sin(angle) * radius]}>
              {/* Node body */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.6, 0.4, 0.1]} />
                <meshStandardMaterial color="#444" />
              </mesh>
              {/* Node input/output ports */}
              <mesh position={[-0.35, 0, 0.1]}>
                <sphereGeometry args={[0.08]} />
                <meshStandardMaterial color="#000" />
              </mesh>
              <mesh position={[0.35, 0, 0.1]}>
                <sphereGeometry args={[0.08]} />
                <meshStandardMaterial color="#000" />
              </mesh>
            </group>
          </Float>
        );
      })}
      
      {/* Data flow connections */}
      {[...Array(6)].map((_, i) => (
        <Float key={`flow-${i}`} speed={2 + i * 0.2} rotationIntensity={0.1} floatIntensity={1}>
          <mesh position={[Math.sin(i * 2) * 2, Math.cos(i * 1.5) * 0.8, Math.cos(i * 2) * 2]} rotation={[0, i * 0.8, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 2.5]} />
            <meshStandardMaterial color="#666" transparent opacity={0.8} />
          </mesh>
          {/* Data packets */}
          <mesh position={[Math.sin(i * 2 + Date.now() * 0.001) * 1.5, Math.cos(i * 1.5) * 0.8, Math.cos(i * 2 + Date.now() * 0.001) * 1.5]}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="#000" />
          </mesh>
        </Float>
      ))}
      
      {/* Automation gears */}
      {[...Array(3)].map((_, i) => (
        <Float key={`gear-${i}`} speed={0.8 + i * 0.3} rotationIntensity={2} floatIntensity={0.3}>
          <mesh position={[Math.cos(i * 2.1) * 4.5, Math.sin(i * 1.8) * 2, Math.sin(i * 2.1) * 4.5]}>
            <cylinderGeometry args={[0.8, 0.8, 0.2, 8]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        </Float>
      ))}
      
      {/* Floating text */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          position={[0, 3.5, 0]}
          fontSize={0.8}
          color="#333"
          anchorX="center"
          anchorY="middle"
        >
          Visual Automation
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
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.6} />
          <FloatingGear />
          <FloatingNodes />
          {/* Dark particles for visibility */}
          <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
            <group>
              {[...Array(40)].map((_, i) => (
                <mesh key={i} position={[
                  (Math.random() - 0.5) * 18,
                  (Math.random() - 0.5) * 18,
                  (Math.random() - 0.5) * 18
                ]}>
                  <sphereGeometry args={[0.04]} />
                  <meshStandardMaterial color="#333" opacity={0.6} transparent />
                </mesh>
              ))}
            </group>
          </Float>
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
            🔧 n8n Automation
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
            🌟 Harness the power of visual automation workflows to create intelligent, responsive systems that make PinPal.io technology seamlessly autonomous.
          </p>

          {/* N8N Automation Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(240,240,240,0.8), rgba(250,250,250,0.9))"
          }}>
            <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
              <AutomationScene />
            </Canvas>
          </div>

          {/* Feature Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
            marginTop: "40px"
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