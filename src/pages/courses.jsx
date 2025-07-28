import React from "react";
import { Link } from "gatsby";

const courseData = [
  {
    title: "Advanced QR Techniques",
    description: "Master advanced QR code implementations with cutting-edge techniques for modern applications.",
    slug: "advanced-qr-techniques",
    color: "#007bff",
    icon: "🔧"
  },
  {
    title: "Location-Based Services",
    description: "Build powerful location-aware applications using GPS, geofencing, and mapping technologies.",
    slug: "location-based-services", 
    color: "#28a745",
    icon: "📍"
  },
  {
    title: "N8N Automation",
    description: "Automate workflows and integrate systems using the powerful N8N automation platform.",
    slug: "n8n-automation",
    color: "#6c757d",
    icon: "⚙️"
  },
  {
    title: "Embedded Systems",
    description: "Design and program embedded systems for IoT devices and hardware integration.",
    slug: "embedded-systems",
    color: "#17a2b8", 
    icon: "🔌"
  },
  {
    title: "Tourism Applications",
    description: "Create engaging tourism apps with interactive guides, AR features, and location services.",
    slug: "tourism-applications",
    color: "#ffc107",
    icon: "🏖️"
  },
  {
    title: "Real Estate Applications",
    description: "Build comprehensive real estate platforms with property listings, virtual tours, and analytics.",
    slug: "real-estate-applications",
    color: "#dc3545",
    icon: "🏠"
  },
  {
    title: "AI Audio QR Pins",
    description: "Combine AI, audio processing, and QR technology to create innovative interactive experiences.",
    slug: "ai-audio-qr-pins",
    color: "#6f42c1",
    icon: "🎵"
  }
];

const CourseCard = ({ course }) => (
  <div 
    className="course-card"
    style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      boxSizing: 'border-box'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }}
  >
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: course.color
      }}
    />
    <div style={{ fontSize: '48px', marginBottom: '16px', textAlign: 'center' }}>
      {course.icon}
    </div>
    <h3 style={{ 
      color: '#333', 
      fontSize: '20px', 
      fontWeight: '600',
      marginBottom: '12px',
      lineHeight: '1.3',
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    }}>
      {course.title}
    </h3>
    <p style={{ 
      color: '#666', 
      fontSize: '14px',
      lineHeight: '1.5',
      marginBottom: '24px',
      flex: 1
    }}>
      {course.description}
    </p>
    <Link 
      to={`/${course.slug}`}
      style={{
        display: 'inline-block',
        backgroundColor: course.color,
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '500',
        textAlign: 'center',
        transition: 'opacity 0.3s ease',
        fontSize: '14px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
    >
      Have a Look →
    </Link>
  </div>
);

const CoursesPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
            <Link to="/courses" style={{ color: '#007bff', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Courses</Link>
            <Link to="/gallery" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Gallery</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundColor: '#fff',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 16px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '24px',
            lineHeight: '1.2',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Master PinPal Technology
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}>
            Comprehensive courses designed to take you from beginner to expert in location-based applications, QR technology, and AI integration.
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            backgroundColor: '#f8f9fa',
            padding: '16px 20px',
            borderRadius: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '24px' }}>📚</span>
            <span style={{ color: '#666', fontSize: '14px' }}>
              {courseData.length} comprehensive courses available
            </span>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section style={{ padding: '60px 0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '48px'
          }}>
            {courseData.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 16px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '24px',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Ready to Start Building?
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '32px',
            opacity: '0.9'
          }}>
            Join thousands of developers creating innovative location-based applications with PinPal.
          </p>
          <a 
            href="https://pinpal.io"
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: '#007bff',
              padding: '16px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Get Started with PinPal →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '48px 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px'
        }}>
          <Link to="/">
            <img 
              src="https://workmates.live/wp-content/uploads/2025/07/blue-arrow-up-320.png"
              alt="PinPal Logo"
              style={{ height: '60px', width: 'auto', marginBottom: '24px' }}
            />
          </Link>
          <p style={{ color: '#ccc', fontSize: '14px' }}>
            © 2025 PinPal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CoursesPage;

export const Head = () => (
  <>
    <title>Courses - PinPal</title>
    <meta name="description" content="Master PinPal technology with our comprehensive courses covering QR codes, location services, automation, and AI integration." />
  </>
); 