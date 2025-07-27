import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";

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
        🖼️ Loading Gallery Visualization...
      </div>
    );
  }

  return children;
};

const getFileName = (url) => {
  const fileName = url.split('/').pop();
  return fileName.replace(/\.[^/.]+$/, "").replace(/_/g, " ").replace(/pinpal audio |pinpal /g, "");
};

// Three.js Animation Components for Gallery
const FloatingAudioWave = ({ position, color, delay = 0 }) => {
  const groupRef = useRef();
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime() + delay;
      groupRef.current.position.y = Math.sin(time * 2) * 0.5;
      groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef} position={position}>
        {/* Audio wave bars */}
        {[...Array(7)].map((_, i) => (
          <mesh key={i} position={[(i - 3) * 0.3, Math.sin(i) * 0.2, 0]}>
            <boxGeometry args={[0.15, 1 + Math.sin(i) * 0.5, 0.15]} />
            <meshStandardMaterial color={color} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const RotatingVideoFrame = ({ position, color }) => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.8;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.8, 1.2, 0.1]} />
        <meshStandardMaterial color={color} />
        {/* Screen inside */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[1.4, 0.8, 0.05]} />
          <meshStandardMaterial color="#000" emissive="#333" emissiveIntensity={0.8} />
        </mesh>
        {/* Play button */}
        <mesh position={[0, 0, 0.12]}>
          <coneGeometry args={[0.15, 0.3, 3]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
      </mesh>
    </Float>
  );
};

const PulsingMicrophone = ({ position }) => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={meshRef} position={position}>
        {/* Mic body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.25, 1.2]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        {/* Mic head */}
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.35]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        {/* Sound waves */}
        {[1, 2, 3].map((i) => (
          <mesh key={i} position={[0, 0.8, 0]}>
            <torusGeometry args={[0.5 * i, 0.05, 8, 16]} />
            <meshStandardMaterial 
              color="#007bff" 
              transparent 
              opacity={0.7 / i}
              emissive="#007bff"
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const MediaGalleryScene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#007bff" />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      
      {/* Audio elements */}
      <FloatingAudioWave position={[-3, 0, 1]} color="#007bff" delay={0} />
      <FloatingAudioWave position={[3, 1, -1]} color="#28a745" delay={1} />
      <PulsingMicrophone position={[0, -1, 2]} />
      
      {/* Video elements */}
      <RotatingVideoFrame position={[-1, 2, 0]} color="#dc3545" />
      <RotatingVideoFrame position={[2, -1, -2]} color="#17a2b8" />
      
      {/* Floating text */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          position={[0, 3, 0]}
          fontSize={0.8}
          color="#333"
          anchorX="center"
          anchorY="middle"
        >
          AI Audio & Video
        </Text>
      </Float>
    </>
  );
};

const PinPalGalleryPage = () => {
  const [playingAudio, setPlayingAudio] = useState({});

  const audioUrls = [
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_back_again.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_bag_tag.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_circle_back.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_daily_space.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_dotted_line.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_drag_flag.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_map_clarity.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_plans_made.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_reminder_dot.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_shout_route.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_snap_map.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_stick_click.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_thoughts_align.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_view_clues.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_when_alone.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audio_win_pins.mp3",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/pinpal_audiowrap_map.mp3"
  ];

  const videoUrls = [
    "https://dfgnflfqxk4ps.cloudfront.net/LA/vincent_wrap.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/saoirse_detail.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/rosamund_due.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/rosamund_tote.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/robert_byte.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/poppy_spin.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/remi_math.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/margot_stick.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/margot_view.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/jen_view.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/jen_plan.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/jcs_thing.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/jen_jog.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/james_shout.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/end.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/alex_win.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/chris_thoughts.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/adam_snap2.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/alex_drag.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/adam_snap.mp4",
    "https://dfgnflfqxk4ps.cloudfront.net/LA/adam_bag.mp4"
  ];

  const handleAudioPlay = (url) => {
    setPlayingAudio(prev => ({ ...prev, [url]: true }));
  };

  const handleAudioPause = (url) => {
    setPlayingAudio(prev => ({ ...prev, [url]: false }));
  };

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
        background: "white",
        borderRadius: "25px",
        padding: "50px",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        maxWidth: "1400px",
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
          🎵 PinPal AI Audio & Video Gallery
        </h1>
        
        <p style={{
          fontSize: "1.3rem",
          textAlign: "center",
          marginBottom: "4rem",
          color: "#666",
          lineHeight: "1.8",
          maxWidth: "800px",
          margin: "0 auto 4rem auto"
        }}>
          🌟 Explore our collection of AI-generated audio content and video demonstrations showcasing PinPal.io's innovative technology.
        </p>

        {/* Three.js Media Animation Section */}
        <div style={{
          height: "400px",
          width: "100%",
          marginBottom: "50px",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          background: "linear-gradient(135deg, rgba(240,240,240,0.8), rgba(250,250,250,0.9))",
          position: "relative",
          zIndex: 10
        }}>
          <ClientOnly>
            <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
              <MediaGalleryScene />
            </Canvas>
          </ClientOnly>
        </div>

        {/* Audio Section */}
        <h2 style={{
          fontSize: "2.5rem",
          color: "#007bff",
          textAlign: "center",
          marginBottom: "3rem",
          fontWeight: "600"
        }}>
          🎧 Audio Collection
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "25px",
          marginBottom: "60px"
        }}>
          {audioUrls.map((url, index) => (
            <div key={index} style={{
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              borderRadius: "20px",
              padding: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              {/* Audio Icon */}
              <div style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(45deg, #007bff, #0056b3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                fontSize: "2rem"
              }}>
                🎵
              </div>
              
              <h3 style={{ 
                fontSize: "1.1rem", 
                marginBottom: "15px", 
                textAlign: "center",
                color: "#333",
                fontWeight: "600",
                textTransform: "capitalize"
              }}>
                {getFileName(url)}
              </h3>
              
              <audio 
                controls 
                style={{ width: "100%", marginBottom: "15px" }}
                onPlay={() => handleAudioPlay(url)}
                onPause={() => handleAudioPause(url)}
                onEnded={() => handleAudioPause(url)}
              >
                <source src={url} type="audio/mpeg" />
              </audio>
              
              <span style={{
                background: "linear-gradient(45deg, #28a745, #20c997)",
                color: "white",
                padding: "6px 15px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "600"
              }}>
                Free
              </span>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <h2 style={{
          fontSize: "2.5rem",
          color: "#28a745",
          textAlign: "center",
          marginBottom: "3rem",
          fontWeight: "600"
        }}>
          🎬 Video Collection
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px",
          marginBottom: "60px"
        }}>
          {videoUrls.map((url, index) => (
            <div key={index} style={{
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              borderRadius: "20px",
              padding: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}>
              <h3 style={{ 
                fontSize: "1.1rem", 
                marginBottom: "15px", 
                textAlign: "center",
                color: "#333",
                fontWeight: "600",
                textTransform: "capitalize"
              }}>
                {getFileName(url)}
              </h3>
              
              <video 
                controls 
                style={{ 
                  width: "100%", 
                  maxHeight: "500px",
                  marginBottom: "15px", 
                  borderRadius: "8px",
                  objectFit: "contain"
                }}
              >
                <source src={url} type="video/mp4" />
              </video>
              
              <span style={{
                background: "linear-gradient(45deg, #28a745, #20c997)",
                color: "white",
                padding: "6px 15px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "600"
              }}>
                Free
              </span>
            </div>
          ))}
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
            🚀 Experience PinPal.io Technology
          </a>
        </div>
      </div>
    </div>
  );
};

export default PinPalGalleryPage; 