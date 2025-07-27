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

const TourismApplications = () => {
  return (
    <PageLayout title="Tourism Applications">
      <p>
        Create unforgettable travel experiences with our location-based
        storytelling tools. This course will teach you how to build immersive
        and interactive tours that will delight your customers.
      </p>
      <h2>What You'll Learn</h2>
      <ul>
        <li>
          <b>Self-Guided Tours:</b> Learn how to create self-guided tours with
          our AI audio QR pins. Provide turn-by-turn directions, share historical
          information, and create a truly personalized experience.
        </li>
        <li>
          <b>Interactive Museum Exhibits:</b> Discover how to create interactive
          museum exhibits that engage and educate visitors. Use our technology to
          provide additional information, share behind-the-scenes stories, and
          create a more memorable experience.
        </li>
        <li>
          <b>Gamified Tours:</b> Learn how to create gamified tours that
          increase engagement and encourage exploration. Create scavenger hunts,
          solve puzzles, and reward users for visiting different locations.
        </li>
        <li>
          <b>Personalized Travel Experiences:</b> Discover how to create
          personalized travel experiences that cater to the unique interests of
          your customers. Use our technology to create custom itineraries,
          recommend hidden gems, and provide a truly unforgettable experience.
        </li>
      </ul>
    </PageLayout>
  );
};

export default TourismApplications; 