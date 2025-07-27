import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingGlobe = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#27ae60" wireframe />
      </mesh>
    </Float>
  );
};

const FloatingPins = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.5;
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={meshRef} position={[-3, 1, 0]}>
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[0.2, 0.8, 16]} />
          <meshStandardMaterial color="#e74c3c" />
        </mesh>
        <mesh position={[0.8, 0.2, 0]}>
          <coneGeometry args={[0.15, 0.6, 16]} />
          <meshStandardMaterial color="#3498db" />
        </mesh>
        <mesh position={[-0.8, -0.1, 0]}>
          <coneGeometry args={[0.18, 0.7, 16]} />
          <meshStandardMaterial color="#f39c12" />
        </mesh>
      </group>
    </Float>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #27ae60 0%, #3498db 50%, #9b59b6 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {/* Three.js Background */}
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars radius={100} depth={50} count={4500} factor={4} saturation={0} fade />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingGlobe />
        <FloatingPins />
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
          background: "linear-gradient(45deg, #27ae60, #3498db)",
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
              background: "linear-gradient(45deg, #27ae60, #3498db)",
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
            🌍 Master Location Services!
          </a>
        </div>
      </div>
    </div>
  </div>
);

const LocationBasedServicesPage = () => {
  return (
    <PageLayout title="🌍 Location-Based Services">
      <div style={{ fontSize: "1.2em", lineHeight: "1.8" }}>
        <p style={{ 
          fontSize: "1.3em", 
          textAlign: "center", 
          marginBottom: "30px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          🗺️ Build the next generation of location-aware applications. Master GPS, mapping, geofencing, and real-time tracking to create powerful location-based experiences.
        </p>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px", 
          marginTop: "40px" 
        }}>
          <div style={{ 
            background: "rgba(39,174,96,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(39,174,96,0.3)" 
          }}>
            <h2 style={{ color: "#27ae60", marginBottom: "15px" }}>🗺️ Mapping & Geocoding</h2>
            <p>Master advanced mapping APIs, reverse geocoding, and address validation. Create interactive maps that display QR pin locations with rich contextual information and custom styling.</p>
          </div>

          <div style={{ 
            background: "rgba(52,152,219,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(52,152,219,0.3)" 
          }}>
            <h2 style={{ color: "#3498db", marginBottom: "15px" }}>🧭 Routing & Navigation</h2>
            <p>Implement turn-by-turn navigation and optimal route planning. Guide users between QR pins with real-time traffic updates, alternative routes, and voice-guided directions.</p>
          </div>

          <div style={{ 
            background: "rgba(39,174,96,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(39,174,96,0.3)" 
          }}>
            <h2 style={{ color: "#27ae60", marginBottom: "15px" }}>📍 Geofencing & Beacons</h2>
            <p>Set up virtual boundaries and proximity detection using geofences and Bluetooth beacons. Trigger automated actions when users enter or exit specific areas around your pins.</p>
          </div>

          <div style={{ 
            background: "rgba(52,152,219,0.2)", 
            padding: "25px", 
            borderRadius: "15px", 
            border: "1px solid rgba(52,152,219,0.3)" 
          }}>
            <h2 style={{ color: "#3498db", marginBottom: "15px" }}>📡 Real-Time Tracking</h2>
            <p>Build live tracking systems for assets, people, and vehicles. Monitor movement patterns, analyze location data, and provide real-time updates to stakeholders and customers.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LocationBasedServicesPage; 