import React from "react";
import { FaHiking, FaCar, FaCamera } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";

const hobbies = [
  {
    icon: <FaHiking size={30} color="#1f2937" />,
    title: "Hiking",
    description: "Exploring nature and enjoying scenic trails."
  },
  {
    icon: <FaCar size={30} color="#1f2937" />,
    title: "Car Driving",
    description: "The thrill of driving and long road trips."
  },
  {
    icon: <GiCommercialAirplane size={30} color="#1f2937" />,
    title: "Traveling",
    description: "Discovering new places and experiencing cultures."
  },
  {
    icon: <FaCamera size={30} color="#1f2937" />,
    title: "Photography",
    description: "Capturing moments and telling visual stories."
  }
];

const Hobbies = () => {
  return (
    <section id="hobbies" style={{ background: "#f8f4ff", padding: "4rem 1rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>
        My Hobbies & Interests
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        Things I love doing in my free time
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div style={{
              background: "#ede9fe",
              padding: "0.75rem",
              borderRadius: "8px",
              display: "inline-block",
              marginBottom: "1rem"
            }}>
              {hobby.icon}
            </div>
            <h3 style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
              color: "#1f2937"
            }}>{hobby.title}</h3>
            <p style={{ color: "#374151", fontSize: "0.95rem" }}>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
