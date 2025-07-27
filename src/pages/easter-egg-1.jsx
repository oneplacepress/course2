import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';

const EasterEgg1Page = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Try to autoplay with muted first, then unmute on interaction
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Autoplay failed:', error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (!hasInteracted) {
        setHasInteracted(true);
        videoRef.current.muted = false;
      }
      
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    setIsPlaying(false);
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '16px 0',
        position: 'relative',
        zIndex: 10
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
            <Link to="/gallery" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Gallery</Link>
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
          ref={videoRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1
          }}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={(e) => e.target.pause()}
          onError={handleVideoError}
        >
          <source src="https://workmates.live/wp-content/uploads/2025/07/tracks-good.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Custom Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            background: "rgba(255, 255, 255, 0.2)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            fontSize: "2rem",
            color: "#fff"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            e.target.style.border = "2px solid rgba(255, 255, 255, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.border = "2px solid rgba(255, 255, 255, 0.3)";
          }}
        >
          {isPlaying ? "⏸" : "▶"}
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
            fontSize: "clamp(3rem, 8vw, 6rem)",
            marginBottom: "2rem",
            animation: "bounce 2s infinite"
          }}>
            🎉
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            padding: "0 16px"
          }}>
            🥚 EASTER EGG FOUND! 🥚
          </h1>
          <p style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.6",
            marginBottom: "2rem",
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
          }}>
            Congratulations! You've discovered a hidden PinPal Easter Egg! 🎊
          </p>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: "1.6",
            marginBottom: "3rem",
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
            fontStyle: "italic"
          }}>
            Enjoy this exclusive content as your reward for being curious! 🎵
          </p>
          <Link 
            to="/"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              padding: "16px 32px",
              borderRadius: "8px",
              fontSize: "1.2rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              textDecoration: "none",
              display: "inline-block"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
          >
            Return Home
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
};

export default EasterEgg1Page; 