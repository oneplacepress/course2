import React from "react";
import { Link } from "gatsby";

const PageLayout = ({ title, children }) => (
  <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
    <header style={{ marginBottom: "20px" }}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
    <h1>{title}</h1>
    {children}
  </div>
);

const RealEstateApplications = () => {
  return (
    <PageLayout title="Real Estate Applications">
      <p>
        Revolutionize the way you sell properties with our innovative
        location-based technology. This course will teach you how to leverage AI
        audio QR pins to create immersive and interactive property tours.
      </p>
      <h2>What You'll Learn</h2>
      <ul>
        <li>
          <b>Virtual Open Houses:</b> Learn how to create 24/7 virtual open
          houses that allow potential buyers to tour properties at their own
          convenience.
        </li>
        <li>
          <b>Interactive Property Tours:</b> Discover how to create engaging
          property tours with our AI audio QR pins. Highlight key features, share
          neighborhood information, and provide a truly immersive experience.
        </li>
        <li>
          <b>Lead Capture and Automation:</b> Learn how to use our n8n
          automation workflows to capture leads and automate follow-up, so you
          can focus on closing deals.
        </li>
        <li>
          <b>Video Resumes for Agents:</b> Stand out from the competition by
          creating a video resume that showcases your personality and expertise.
          Our new video hosting feature makes it easy to share your video with
          potential clients.
        </li>
      </ul>
    </PageLayout>
  );
};

export default RealEstateApplications; 