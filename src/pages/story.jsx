import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Text } from "@react-three/drei";

const FloatingPin = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[-3, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-3, 1, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#28a745" emissive="#28a745" emissiveIntensity={0.4} />
      </mesh>
    </Float>
  );
};

const OrbitingQR = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.x = Math.cos(time) * 3;
      meshRef.current.position.z = Math.sin(time) * 3;
      meshRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 1, 0]}>
      <boxGeometry args={[0.8, 0.8, 0.1]} />
      <meshStandardMaterial color="#dc3545" emissive="#dc3545" emissiveIntensity={0.4} />
    </mesh>
  );
};

const PulsingSphere = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[3, 0, 0]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="#17a2b8" emissive="#17a2b8" emissiveIntensity={0.5} wireframe />
      </mesh>
    </Float>
  );
};

// New People Animation Components
const AnimatedPerson = ({ position, color, delay = 0 }) => {
  const groupRef = useRef();
  const armRef = useRef();
  const legRef = useRef();
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime() + delay;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.2;
    }
    
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 2 + delay) * 0.3;
    }
    
    if (legRef.current) {
      legRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 1.5 + delay) * 0.2;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        {/* Head */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Body */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.2, 0.15, 0.8]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Arms */}
        <group ref={armRef}>
          <mesh position={[-0.25, 0.9, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.6]} />
            <meshStandardMaterial color={color} />
          </mesh>
          <mesh position={[0.25, 0.9, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.6]} />
            <meshStandardMaterial color={color} />
          </mesh>
        </group>
        
        {/* Legs */}
        <group ref={legRef}>
          <mesh position={[-0.1, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.7]} />
            <meshStandardMaterial color={color} />
          </mesh>
          <mesh position={[0.1, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.7]} />
            <meshStandardMaterial color={color} />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

const WalkingPerson = ({ startPosition, endPosition, color, speed = 1 }) => {
  const groupRef = useRef();
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime() * speed;
      const progress = (Math.sin(time * 0.5) + 1) / 2;
      
      groupRef.current.position.x = startPosition[0] + (endPosition[0] - startPosition[0]) * progress;
      groupRef.current.position.z = startPosition[2] + (endPosition[2] - startPosition[2]) * progress;
      
      // Look in walking direction
      const direction = progress > 0.5 ? Math.PI : 0;
      groupRef.current.rotation.y = direction;
    }
  });

  return (
    <group ref={groupRef} position={[startPosition[0], startPosition[1], startPosition[2]]}>
      <AnimatedPerson position={[0, 0, 0]} color={color} delay={Math.random() * 2} />
    </group>
  );
};

const PeopleScene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, 3, -5]} intensity={0.6} color="#007bff" />
      
      {/* Aerial Map Base */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#2d5a27" />
      </mesh>
      
      {/* Roads/Paths */}
      <mesh position={[0, -1.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 0.3]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      <mesh position={[0, -1.45, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[8, 0.3]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      
      {/* City blocks/areas */}
      {[
        { pos: [-2, -1.4, 1], size: [1.5, 1.5], color: "#4a6741" },
        { pos: [2, -1.4, -1], size: [1.8, 1.2], color: "#3d5a36" },
        { pos: [-1, -1.4, -2], size: [1.2, 1.2], color: "#5a7851" },
        { pos: [1.5, -1.4, 1.5], size: [1, 1.6], color: "#4d6b44" },
        { pos: [-3, -1.4, -1], size: [0.8, 0.8], color: "#6b8762" },
        { pos: [3, -1.4, 0.5], size: [0.9, 1.1], color: "#577a4e" }
      ].map((block, i) => (
        <mesh key={i} position={block.pos} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={block.size} />
          <meshStandardMaterial color={block.color} />
        </mesh>
      ))}
      
      {/* Small buildings/landmarks */}
      {[
        { pos: [-2, -0.8, 1], size: [0.3, 0.3, 0.6], color: "#8b4513" },
        { pos: [2, -0.9, -1], size: [0.4, 0.4, 0.4], color: "#654321" },
        { pos: [-1, -0.7, -2], size: [0.2, 0.2, 0.8], color: "#a0522d" },
        { pos: [1.5, -0.8, 1.5], size: [0.3, 0.25, 0.5], color: "#8b4513" }
      ].map((building, i) => (
        <mesh key={`building-${i}`} position={building.pos}>
          <boxGeometry args={building.size} />
          <meshStandardMaterial color={building.color} />
        </mesh>
      ))}
      
      {/* Park areas with trees */}
      {[
        { pos: [-1.5, -1.3, 0.5], color: "#228b22" },
        { pos: [0.8, -1.3, -1.2], color: "#32cd32" },
        { pos: [-0.5, -1.3, 2], color: "#228b22" }
      ].map((park, i) => (
        <group key={`park-${i}`}>
          <mesh position={park.pos} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.4]} />
            <meshStandardMaterial color={park.color} />
          </mesh>
          {/* Tree */}
          <mesh position={[park.pos[0], -0.5, park.pos[2]]}>
            <cylinderGeometry args={[0.05, 0.05, 0.8]} />
            <meshStandardMaterial color="#8b4513" />
          </mesh>
          <mesh position={[park.pos[0], -0.2, park.pos[2]]}>
            <sphereGeometry args={[0.2]} />
            <meshStandardMaterial color="#228b22" />
          </mesh>
        </group>
      ))}
      
      {/* Standing people */}
      <AnimatedPerson position={[-2, 0, 1]} color="#007bff" delay={0} />
      <AnimatedPerson position={[2, 0, -1]} color="#28a745" delay={1} />
      <AnimatedPerson position={[0, 0, 2]} color="#17a2b8" delay={2} />
      
      {/* Walking people */}
      <WalkingPerson 
        startPosition={[-3, 0, -2]} 
        endPosition={[3, 0, -2]} 
        color="#dc3545" 
        speed={0.8} 
      />
      <WalkingPerson 
        startPosition={[3, 0, 0]} 
        endPosition={[-3, 0, 0]} 
        color="#ffc107" 
        speed={1.2} 
      />
      
      {/* Floating text */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        <Text
          position={[0, 3, 0]}
          fontSize={0.5}
          color="#007bff"
          anchorX="center"
          anchorY="middle"
        >
          Connecting People & Places
        </Text>
      </Float>
    </>
  );
};

const StoryPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "white",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Three.js Background - Visible and Prominent */}
      <div style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        zIndex: -1
      }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.8} />
          <FloatingPin />
          <OrbitingQR />
          <PulsingSphere />
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
          padding: "60px",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h1 style={{
            fontSize: "4rem",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #007bff, #28a745, #17a2b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            Our Story
          </h1>
          
          <p style={{
            fontSize: "1.4rem",
            textAlign: "center",
            marginBottom: "4rem",
            color: "#666",
            lineHeight: "1.8",
            maxWidth: "800px",
            margin: "0 auto 4rem auto"
          }}>
            🌟 Discover how PinPal.io revolutionizes location-based experiences through cutting-edge technology and innovation.
          </p>

          {/* People Animation Section */}
          <div style={{
            height: "400px",
            width: "100%",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, rgba(0,123,255,0.1), rgba(40,167,69,0.1))"
          }}>
            <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
              <PeopleScene />
            </Canvas>
          </div>

          {/* Story Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
            marginTop: "40px"
          }}>
            <div style={{
              background: "rgba(255,255,255,0.9)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              backdropFilter: "blur(10px)"
            }}>
              <h2 style={{ 
                color: "#007bff", 
                marginBottom: "1rem", 
                fontSize: "1.6rem",
                fontWeight: "600"
              }}>
                🚀 Innovation Born
              </h2>
              <p style={{ 
                color: "#555", 
                lineHeight: "1.7",
                fontSize: "1.1rem"
              }}>
                Founded with a vision to bridge the physical and digital worlds, PinPal.io emerged from the need for seamless location-based interactions that enhance real-world experiences.
              </p>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.9)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              backdropFilter: "blur(10px)"
            }}>
              <h2 style={{ 
                color: "#28a745", 
                marginBottom: "1rem", 
                fontSize: "1.6rem",
                fontWeight: "600"
              }}>
                🎯 Technology Focus
              </h2>
              <p style={{ 
                color: "#555", 
                lineHeight: "1.7",
                fontSize: "1.1rem"
              }}>
                Our breakthrough AI audio QR pins technology combines LoRaWAN networks, embedded systems, and intelligent automation to create immersive experiences for real estate and tourism industries.
              </p>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.9)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              backdropFilter: "blur(10px)"
            }}>
              <h2 style={{ 
                color: "#17a2b8", 
                marginBottom: "1rem", 
                fontSize: "1.6rem",
                fontWeight: "600"
              }}>
                🌍 Global Impact
              </h2>
              <p style={{ 
                color: "#555", 
                lineHeight: "1.7",
                fontSize: "1.1rem"
              }}>
                Today, we're transforming how people interact with spaces worldwide, from luxury real estate showcases to immersive cultural tours, making every location tell its unique story.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
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
              🚀 Start Your Journey with PinPal.io
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage; 