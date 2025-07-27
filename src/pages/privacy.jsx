import React from "react";
import { Link } from "gatsby";

const PageLayout = ({ title, children }) => (
  <div
    style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}
  >
    <header style={{ marginBottom: "20px" }}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
    <h1>{title}</h1>
    {children}
  </div>
);

const PrivacyPage = () => {
  return (
    <PageLayout title="Privacy Policy">
      <p>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>
      <h2>Interpretation and Definitions</h2>
      <h3>Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or in
        plural.
      </p>
    </PageLayout>
  );
};

export default PrivacyPage; 