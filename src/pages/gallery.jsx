import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const AudioWaveform = ({ isPlaying }) => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.5;
      if (isPlaying) {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 8) * 0.3;
        meshRef.current.scale.setScalar(scale);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <torusGeometry args={[0.8, 0.2, 8, 16]} />
        <meshStandardMaterial color="#007bff" wireframe />
      </mesh>
    </Float>
  );
};

const VideoIcon = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <coneGeometry args={[0.5, 1, 3]} />
        <meshStandardMaterial color="#28a745" />
      </mesh>
    </Float>
  );
};

const getFileName = (url) => {
  const fileName = url.split('/').pop();
  return fileName.replace(/\.[^/.]+$/, "").replace(/_/g, " ").replace(/pinpal audio |pinpal /g, "");
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
        opacity: 0.4
      }}>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Stars radius={100} depth={50} count={800} factor={2} saturation={0} fade />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
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
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}>
                <div style={{ 
                  width: "100px", 
                  height: "100px", 
                  marginBottom: "20px",
                  background: "white",
                  borderRadius: "10px",
                  border: "1px solid rgba(0,0,0,0.1)"
                }}>
                  <Canvas camera={{ position: [0, 0, 3] }}>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[2, 2, 2]} />
                    <AudioWaveform isPlaying={playingAudio[url]} />
                  </Canvas>
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
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "25px",
            marginBottom: "60px"
          }}>
            {videoUrls.map((url, index) => (
              <div key={index} style={{
                background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                borderRadius: "20px",
                padding: "25px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}>
                <div style={{ 
                  width: "100px", 
                  height: "100px", 
                  marginBottom: "20px",
                  background: "white",
                  borderRadius: "10px",
                  border: "1px solid rgba(0,0,0,0.1)"
                }}>
                  <Canvas camera={{ position: [0, 0, 3] }}>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[2, 2, 2]} />
                    <VideoIcon />
                  </Canvas>
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
                
                <video 
                  controls 
                  style={{ width: "100%", height: "120px", marginBottom: "15px", borderRadius: "8px" }}
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
    </div>
  );
};

export default PinPalGalleryPage; 