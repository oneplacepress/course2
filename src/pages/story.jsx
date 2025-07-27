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

const StoryPage = () => {
  return (
    <PageLayout title="Our Story">
      <p>
        PinPal.io was founded with a simple mission: to revolutionize the way
        people interact with the world around them. We believe that technology
        should be used to create immersive, engaging, and educational
        experiences that are accessible to everyone.
      </p>
      <p>
        Our journey began with a small team of engineers and designers who were
        passionate about location-based technology. We spent countless hours
        experimenting with different hardware and software, and we're proud to
        have developed a platform that is not only powerful and flexible but
        also easy to use.
      </p>
      <p>
        Today, PinPal.io is used by businesses and organizations around the
        world to create innovative and engaging experiences for their
        customers. From real estate and tourism to education and entertainment,
        our platform is helping to transform industries and create new
        opportunities for growth.
      </p>
    </PageLayout>
  );
};

export default StoryPage; 