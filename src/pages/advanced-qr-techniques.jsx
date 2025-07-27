import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const FloatingQRCube = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.7) * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.6;
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.3;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
      <group ref={meshRef} position={[-2, 0, 0]}>
        {/* Main QR Cube */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 0.2]} />
          <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.3} />
        </mesh>
        {/* QR Pattern Elements */}
        {[...Array(9)].map((_, i) => (
          <mesh key={i} position={[
            (i % 3 - 1) * 0.4, 
            (Math.floor(i / 3) - 1) * 0.4, 
            0.12
          ]}>
            <boxGeometry args={[0.2, 0.2, 0.1]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#28a745" : "#dc3545"} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const ScanningEffect = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.3;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={meshRef} position={[2, 1, -1]}>
        <torusGeometry args={[1, 0.1, 8, 32]} />
        <meshStandardMaterial color="#17a2b8" emissive="#17a2b8" emissiveIntensity={0.4} />
      </mesh>
    </Float>
  );
};

const AdvancedQRTechniquesPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "white",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Three.js Background */}
      <div style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        zIndex: 1,
        opacity: 0.5
      }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Stars radius={100} depth={50} count={1500} factor={3} saturation={0} fade />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.5} />
          <FloatingQRCube />
          <ScanningEffect />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div style={{ 
        position: "relative", 
        zIndex: 10, 
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
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(10px)",
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
            📱 Advanced QR Techniques
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
            🌟 Unlock the full potential of QR technology with advanced encoding techniques, dynamic content delivery, and innovative applications for modern businesses.
          </p>

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
              <h2 style={{ color: "#007bff", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🎥 Video QR Codes</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Create dynamic QR codes that instantly deliver video content for job applications, company introductions, and product demonstrations.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h2 style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>💼 Professional Applications</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Implement QR solutions for recruitment, networking events, business cards, and professional portfolio presentations.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h2 style={{ color: "#dc3545", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>🔐 Secure QR Systems</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Master advanced security protocols including encryption, authentication, and access control for sensitive QR applications.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h2 style={{ color: "#17a2b8", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "600" }}>📊 Analytics & Tracking</h2>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Implement comprehensive analytics to track QR code performance, user engagement, and conversion metrics.
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
                background: "linear-gradient(45deg, #007bff, #dc3545)",
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
              📱 Master Advanced QR Techniques
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedQRTechniquesPage; 