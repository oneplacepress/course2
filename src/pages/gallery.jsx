import React, { useState } from "react";
import { Link } from "gatsby";

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
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
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
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
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
                  height: "200px", 
                  marginBottom: "15px", 
                  borderRadius: "8px",
                  objectFit: "cover"
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