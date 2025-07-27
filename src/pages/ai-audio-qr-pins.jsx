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

const AIAudioQRPins = () => {
  return (
    <PageLayout title="AI Audio QR Pins">
      <p>
        Welcome to the future of interactive experiences. Our AI Audio QR Pins
        course will teach you how to create, deploy, and manage AI-powered audio
        tours that can be accessed instantly through a QR code.
      </p>
      <h2>What You'll Learn</h2>
      <ul>
        <li>
          <b>Instant QR Code Generation:</b> Learn how to use our n8n automation
          workflows to instantly generate QR codes with AI-powered audio.
        </li>
        <li>
          <b>Immersive Audio Tours:</b> Discover how to create captivating audio
          tours for any location in the world. We'll cover everything from
          scriptwriting to voice synthesis.
        </li>
        <li>
          <b>LoRaWAN and Private Networks:</b> Understand how to leverage
          LoRaWAN and private networks for secure and reliable communication
          between your pins and our servers.
        </li>
        <li>
          <b>Routing and Mapping:</b> Learn how to create custom maps and routes
          for your audio tours, providing users with a seamless and intuitive
          experience.
        </li>
      </ul>
    </PageLayout>
  );
};

export default AIAudioQRPins; 