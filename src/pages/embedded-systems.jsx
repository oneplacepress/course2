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

const EmbeddedSystems = () => {
  return (
    <PageLayout title="Embedded Systems">
      <p>
        Dive deep into the hardware that powers our location-based technology.
        This course will teach you how to build and program custom embedded
        systems for your projects.
      </p>
      <h2>What You'll Learn</h2>
      <ul>
        <li>
          <b>Hardware Design:</b> Learn the fundamentals of hardware design,
          from selecting the right components to designing your own circuit
          boards.
        </li>
        <li>
          <b>Firmware Development:</b> Discover how to write firmware for your
          custom hardware. We'll cover everything from basic C programming to
          advanced topics like real-time operating systems.
        </li>
        <li>
          <b>LoRaWAN and Private Networks:</b> Understand how to leverage
          LoRaWAN and private networks for secure and reliable communication
          between your devices and our servers.
        </li>
        <li>
          <b>Power Management:</b> Learn how to optimize your devices for low
          power consumption, so they can run for years on a single battery.
        </li>
      </ul>
    </PageLayout>
  );
};

export default EmbeddedSystems; 