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

const AdvancedQrTechniques = () => {
  return (
    <PageLayout title="Advanced QR Techniques">
      <p>
        Take your QR code skills to the next level with our advanced techniques
        course. Learn how to create dynamic, interactive QR codes that will
        engage and delight your users.
      </p>
      <h2>What You'll Learn</h2>
      <ul>
        <li>
          <b>Dynamic QR Codes:</b> Learn how to create dynamic QR codes that can
          be updated in real-time. We'll cover everything from basic URL
          shorteners to advanced topics like A/B testing and analytics.
        </li>
        <li>
          <b>Designer QR Codes:</b> Discover how to create beautiful, branded QR
          codes that will stand out from the crowd. We'll cover everything from
          custom colors and logos to advanced topics like error correction and
          masking.
        </li>
        <li>
          <b>Video Hosting for Job Applicants:</b> Learn how to use our new
          video hosting feature to create video resumes that will help you land
          your dream job. We'll cover everything from recording and editing your
          video to sharing it with potential employers.
        </li>
        <li>
          <b>Instant QR Code Generation with AI Audio:</b> As a course
          participant, you'll get access to our n8n automation workflows, so you
          can instantly generate QR codes with AI-powered audio.
        </li>
      </ul>
    </PageLayout>
  );
};

export default AdvancedQrTechniques; 