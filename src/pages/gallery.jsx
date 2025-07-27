import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const AudioWaveform = ({ isPlaying }) => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const scale = isPlaying ? 1 + Math.sin(time * 8) * 0.3 : 1;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.rotation.z = time * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <torusGeometry args={[0.8, 0.2, 8, 32]} />
        <meshStandardMaterial 
          color={isPlaying ? "#ff6b6b" : "#4ecdc4"} 
          wireframe 
        />
      </mesh>
    </Float>
  );
};

const VideoIcon = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <coneGeometry args={[0.5, 1, 3]} />
        <meshStandardMaterial color="#9b59b6" />
      </mesh>
    </Float>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #9b59b6 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {/* Three.js Background */}
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
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
          marginBottom: "30px", 
          textAlign: "center",
          background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
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
              background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
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
            🎵 Explore PinPal.io!
          </a>
        </div>
      </div>
    </div>
  </div>
);

const GalleryPage = () => {
  const [playingAudio, setPlayingAudio] = useState(null);

  const audioFiles = [
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

  const videoFiles = [
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

  const getFileName = (url) => {
    return url.split('/').pop().split('.')[0].replace(/pinpal_audio_|pinpal_audiowrap_/, '').replace(/_/g, ' ');
  };

  return (
    <PageLayout title="🎵 PinPal Audio & Video Gallery">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "25px",
          marginTop: "30px"
        }}
      >
        {/* Audio Files */}
        {audioFiles.map(file => (
          <div
            key={file}
            style={{
              background: "rgba(255,107,107,0.2)",
              border: "1px solid rgba(255,107,107,0.3)",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div style={{ height: "120px", marginBottom: "15px" }}>
              <Canvas>
                <ambientLight intensity={0.6} />
                <pointLight position={[5, 5, 5]} />
                <AudioWaveform isPlaying={playingAudio === file} />
              </Canvas>
            </div>
            <div>
              <h3 style={{ 
                color: "#ff6b6b", 
                fontSize: "1.1em", 
                marginBottom: "10px",
                textTransform: "capitalize"
              }}>
                🎵 {getFileName(file)}
              </h3>
              <audio
                controls
                src={file}
                style={{ width: "100%", marginBottom: "10px" }}
                onPlay={() => setPlayingAudio(file)}
                onPause={() => setPlayingAudio(null)}
                onEnded={() => setPlayingAudio(null)}
              />
              <span style={{
                background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
                color: "white",
                padding: "5px 15px",
                borderRadius: "20px",
                fontSize: "0.9em",
                fontWeight: "bold"
              }}>
                🎁 FREE
              </span>
            </div>
          </div>
        ))}
        
        {/* Video Files */}
        {videoFiles.map(file => (
          <div
            key={file}
            style={{
              background: "rgba(155,89,182,0.2)",
              border: "1px solid rgba(155,89,182,0.3)",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div style={{ height: "120px", marginBottom: "15px" }}>
              <Canvas>
                <ambientLight intensity={0.6} />
                <pointLight position={[5, 5, 5]} />
                <VideoIcon />
              </Canvas>
            </div>
            <div>
              <h3 style={{ 
                color: "#9b59b6", 
                fontSize: "1.1em", 
                marginBottom: "10px",
                textTransform: "capitalize"
              }}>
                🎬 {getFileName(file)}
              </h3>
              <video
                controls
                src={file}
                style={{ width: "100%", height: "80px", marginBottom: "10px" }}
              />
              <span style={{
                background: "linear-gradient(45deg, #9b59b6, #4ecdc4)",
                color: "white",
                padding: "5px 15px",
                borderRadius: "20px",
                fontSize: "0.9em",
                fontWeight: "bold"
              }}>
                🎁 FREE
              </span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default GalleryPage; 