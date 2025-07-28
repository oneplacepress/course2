import React, { useState, useRef } from "react";
import { Link } from "gatsby";

const getFileName = (url) => {
  const fileName = url.split('/').pop();
  return fileName.replace(/\.[^/.]+$/, "").replace(/_/g, " ").replace(/pinpal audio |pinpal /g, "");
};

const PinPalGalleryPage = () => {
  const [playingAudio, setPlayingAudio] = useState({});
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const heroVideoRef = useRef(null);

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

  const toggleHeroPlayPause = () => {
    if (heroVideoRef.current) {
      if (isHeroPlaying) {
        heroVideoRef.current.pause();
      } else {
        heroVideoRef.current.play();
      }
      setIsHeroPlaying(!isHeroPlaying);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "white",
      color: "#333",
      fontFamily: "Arial, sans-serif"
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '16px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img 
              src="https://workmates.live/wp-content/uploads/2025/07/blue-arrow-up-320.png"
              alt="PinPal Logo"
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>
          <nav style={{ 
            display: 'flex', 
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link to="/" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
            <Link to="/story" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Story</Link>
            <Link to="/courses" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Courses</Link>
            <Link to="/gallery" style={{ color: '#007bff', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Gallery</Link>
          </nav>
        </div>
      </header>

      {/* Fullscreen Video Background */}
      <div style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden"
      }}>
                 <video
           ref={heroVideoRef}
           style={{
             width: "100%",
             height: "100%",
             objectFit: "cover",
             position: "absolute",
             top: 0,
             left: 0,
             zIndex: 1
           }}
           poster=""
           preload="metadata"
           onPlay={() => setIsHeroPlaying(true)}
           onPause={() => setIsHeroPlaying(false)}
         >
          <source src="https://workmates.live/wp-content/uploads/2025/07/Break-free-from-Big-Tech.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Custom Play/Pause Button for Hero Video */}
        <button
          onClick={toggleHeroPlayPause}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "2.5rem",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)",
            color: "rgba(255, 255, 255, 0.9)",
            zIndex: 3
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
            e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
            e.target.style.transform = "translate(-50%, -50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
            e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "translate(-50%, -50%) scale(1)";
          }}
        >
          {isHeroPlaying ? "⏸" : "▶"}
        </button>

        {/* Overlay Content */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#fff",
          padding: "20px"
        }}>
          <div style={{
            fontSize: "clamp(2rem, 8vw, 4rem)",
            marginBottom: "2rem"
          }}>
            🎥
          </div>
          <h1 style={{
            fontSize: "clamp(1.5rem, 6vw, 3rem)",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            padding: "0 16px"
          }}>
            Audio / Video Gallery
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 3vw, 1.2rem)",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: "1.6",
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
            padding: "0 16px"
          }}>
            Explore our collection of AI-generated audio content and video demonstrations
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: "60px 16px" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#333",
            padding: "0 16px"
          }}>
            🎵 Audio / Video Gallery
          </h2>
          
          <p style={{
            fontSize: "clamp(1rem, 3vw, 1.3rem)",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#666",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto 3rem auto",
            padding: "0 16px"
          }}>
            🌟 Explore our collection of AI-generated audio content and video demonstrations showcasing PinPal.io's innovative technology.
          </p>

          {/* Video Section */}
          <div style={{ marginBottom: "4rem" }}>
            <h3 style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: "600",
              marginBottom: "2rem",
              color: "#28a745",
              textAlign: "center",
              padding: "0 16px"
            }}>
              🎬 Video Content
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              padding: "0 8px"
            }}>
              {videoUrls.map((url, index) => (
                <div key={index} style={{
                  backgroundColor: "#f8f9fa",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid #e9ecef",
                  width: "100%",
                  boxSizing: "border-box"
                }}>
                  <h4 style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    color: "#333",
                    wordWrap: "break-word",
                    overflowWrap: "break-word"
                  }}>
                    {getFileName(url)}
                  </h4>
                                     <video
                     controls
                     style={{
                       width: "100%",
                       borderRadius: "8px"
                     }}
                   >
                     <source src={url} type="video/mp4" />
                     Your browser does not support the video element.
                   </video>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Section */}
          <div style={{ marginBottom: "4rem" }}>
            <h3 style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: "600",
              marginBottom: "2rem",
              color: "#007bff",
              textAlign: "center",
              padding: "0 16px"
            }}>
              🎧 Audio Content
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              padding: "0 8px"
            }}>
              {audioUrls.map((url, index) => (
                <div key={index} style={{
                  backgroundColor: "#f8f9fa",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid #e9ecef",
                  width: "100%",
                  boxSizing: "border-box"
                }}>
                  <h4 style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    color: "#333",
                    wordWrap: "break-word",
                    overflowWrap: "break-word"
                  }}>
                    {getFileName(url)}
                  </h4>
                  <audio
                    controls
                    style={{ width: "100%" }}
                    onPlay={() => handleAudioPlay(url)}
                    onPause={() => handleAudioPause(url)}
                  >
                    <source src={url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Home Button */}
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link 
              to="/"
              style={{
                display: "inline-block",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem"
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinPalGalleryPage; 