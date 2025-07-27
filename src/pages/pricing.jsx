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

const PricingPage = () => {
  return (
    <PageLayout title="Pricing">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ border: "1px solid #ccc", padding: "20px", width: "30%" }}>
          <h2>Starter</h2>
          <p>$49/mo</p>
          <ul>
            <li>Access to all courses</li>
            <li>Community support</li>
            <li>100 QR code generations per month</li>
          </ul>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "20px", width: "30%" }}>
          <h2>Pro</h2>
          <p>$199/mo</p>
          <ul>
            <li>Access to all courses</li>
            <li>Priority support</li>
            <li>1000 QR code generations per month</li>
            <li>Access to n8n workflows</li>
          </ul>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "20px", width: "30%" }}>
          <h2>Enterprise</h2>
          <p>Contact us</p>
          <ul>
            <li>Access to all courses</li>
            <li>Dedicated support</li>
            <li>Unlimited QR code generations</li>
            <li>Custom n8n workflows</li>
            <li>Private network support</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default PricingPage; 