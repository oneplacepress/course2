import React, { useRef } from "react";
import { Link } from "gatsby";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const RotatingBox = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"#ff7f50"} />
    </mesh>
  );
};

const PageLayout = ({ title, children }) => (
  <div
    style={{
      padding: "20px",
      fontFamily: "sans-serif",
      background: "linear-gradient(to right, #141e30, #243b55)",
      color: "white",
      minHeight: "100vh"
    }}
  >
    <header style={{ marginBottom: "20px" }}>
      <nav>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
      </nav>
    </header>
    <h1>{title}</h1>
    {children}
  </div>
);

const StoryPage = () => {
  return (
    <PageLayout title="Our Story">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <p>
            PinPal.io was founded with a simple mission: to revolutionize the
            way people interact with the world around them. We believe that
            technology should be used to create immersive, engaging, and
            educational experiences that are accessible to everyone.
          </p>
          <p>
            Our journey began with a small team of engineers and designers who
            were passionate about location-based technology. We spent countless
            hours experimenting with different hardware and software, and
            we're proud to have developed a platform that is not only powerful
            and flexible but also easy to use.
          </p>
          <p>
            Today, PinPal.io is used by businesses and organizations around the
            world to create innovative and engaging experiences for their
            customers. From real estate and tourism to education and
            entertainment, our platform is helping to transform industries and
            create new opportunities for growth.
          </p>
          <a
            href="https://pinpal.io"
            style={{
              color: "white",
              padding: "10px 20px",
              border: "1px solid white",
              borderRadius: "5px",
              textDecoration: "none"
            }}
          >
            Learn More
          </a>
        </div>
        <div style={{ flex: 1, height: "400px" }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Stars />
            <RotatingBox />
          </Canvas>
        </div>
      </div>
    </PageLayout>
  );
};

export default StoryPage; 