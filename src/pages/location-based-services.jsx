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

const LocationBasedServices = () => {
  return (
    <PageLayout title="Location-Based Services">
      <p>
        Learn how to build a complete location-based service from scratch. This
        course will teach you everything you need to know to create your own
        location-aware apps and services.
      </p>
      <h2>What You'll Learn</h2>
      <ul>
        <li>
          <b>Mapping and Geocoding:</b> Learn how to use mapping libraries like
          Mapbox and Leaflet to create beautiful, interactive maps. We'll also
          cover geocoding and reverse geocoding, so you can convert addresses to
          coordinates and vice versa.
        </li>
        <li>
          <b>Routing and Navigation:</b> Discover how to create custom routes
          and provide turn-by-turn navigation for your users. We'll cover
          everything from simple point-to-point routing to complex, multi-stop
          itineraries.
        </li>
        <li>
          <b>Geofencing and Beacons:</b> Learn how to use geofencing and beacons
          to create location-aware triggers and notifications. We'll cover
          everything from basic geofencing to advanced topics like beacon
          ranging and trilateration.
        </li>
        <li>
          <b>Real-Time Tracking:</b> Discover how to build a real-time tracking
          system that allows you to monitor the location of your devices in
          real-time. We'll cover everything from basic GPS tracking to advanced
          topics like Kalman filtering and dead reckoning.
        </li>
      </ul>
    </PageLayout>
  );
};

export default LocationBasedServices; 