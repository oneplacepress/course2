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
      fontFamily: "Arial, sans-serif"
    }}>
      {/* Fullscreen Video Placeholder */}
      <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#fff"
        }}>
          <div style={{
            fontSize: "4rem",
            marginBottom: "2rem"
          }}>
            🎥
          </div>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center"
          }}>
            Audio / Video Gallery
          </h1>
          <p style={{
            fontSize: "1.2rem",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: "1.6"
          }}>
            Video content coming soon
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: "60px 20px" }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#333"
          }}>
            🎵 Audio / Video Gallery
          </h2>
          
          <p style={{
            fontSize: "1.3rem",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#666",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto 3rem auto"
          }}>
            🌟 Explore our collection of AI-generated audio content and video demonstrations showcasing PinPal.io's innovative technology.
          </p>

          {/* Audio Section */}
          <div style={{ marginBottom: "4rem" }}>
            <h3 style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "2rem",
              color: "#007bff",
              textAlign: "center"
            }}>
              🎧 Audio Content
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem"
            }}>
              {audioUrls.map((url, index) => (
                <div key={index} style={{
                  backgroundColor: "#f8f9fa",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid #e9ecef"
                }}>
                  <h4 style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    color: "#333"
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

          {/* Video Section */}
          <div style={{ marginBottom: "4rem" }}>
            <h3 style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "2rem",
              color: "#28a745",
              textAlign: "center"
            }}>
              🎬 Video Content
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "2rem"
            }}>
              {videoUrls.map((url, index) => (
                <div key={index} style={{
                  backgroundColor: "#f8f9fa",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid #e9ecef"
                }}>
                  <h4 style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    color: "#333"
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