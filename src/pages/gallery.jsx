import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";

const Waveform = ({ isPlaying }) => {
  const meshRef = useRef();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const newPoints = [];
    for (let i = 0; i < 100; i++) {
      newPoints.push(
        new THREE.Vector3(i / 10 - 5, Math.sin(i * 0.2) * 0.5, 0)
      );
    }
    setPoints(newPoints);
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current && isPlaying) {
      const time = clock.getElapsedTime();
      meshRef.current.geometry.setFromPoints(
        points.map(p =>
          new THREE.Vector3(p.x, Math.sin(p.x * 2 + time) * 0.5, p.z)
        )
      );
    }
  });

  return (
    <line ref={meshRef}>
      <bufferGeometry attach="geometry" setFromPoints={points} />
      <lineBasicMaterial attach="material" color={"#ff7f50"} />
    </line>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      padding: "20px",
      fontFamily: "sans-serif",
      background: "linear-gradient(to right, #141e30, #243b55)",
      color: "white",
      minHeight: "100vh"
    }}
  >
    <header style={{ marginBottom: "20px" }}>
      <nav>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
      </nav>
    </header>
    <h1>{title}</h1>
    {children}
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

  return (
    <PageLayout title="PinPal Audio & Video">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >
        {audioFiles.map(file => (
          <div
            key={file}
            style={{
              border: "1px solid #ff7f50",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center"
            }}
          >
            <div style={{ height: "150px", marginBottom: "10px" }}>
              <Canvas>
                <ambientLight intensity={0.5} />
                <Waveform isPlaying={playingAudio === file} />
              </Canvas>
            </div>
            <audio
              controls
              src={file}
              style={{ width: "100%" }}
              onPlay={() => setPlayingAudio(file)}
              onPause={() => setPlayingAudio(null)}
              onEnded={() => setPlayingAudio(null)}
            />
            <p>Free</p>
          </div>
        ))}
        {videoFiles.map(file => (
          <div
            key={file}
            style={{
              border: "1px solid #ff7f50",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center"
            }}
          >
            <video
              controls
              src={file}
              style={{ width: "100%", height: "150px" }}
            />
            <p>Free</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a
          href="https://pinpal.io"
          style={{
            color: "white",
            padding: "10px 20px",
            border: "1px solid white",
            borderRadius: "5px",
            textDecoration: "none"
          }}
        >
          Explore More
        </a>
      </div>
    </PageLayout>
  );
};

export default GalleryPage; 