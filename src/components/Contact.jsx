import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "4rem 1rem",
        background: "#f8f4ff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "1rem",
        }}
      >
        Contact Me
      </h2>
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        Feel free to reach out to me anytime!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div style={cardStyle}>
          <FaEnvelope style={iconStyle} />
          <p style={labelStyle}>Email</p>
          <a href="mailto:your.email@example.com" style={linkStyle}>
            your.email@example.com
          </a>
        </div>

        <div style={cardStyle}>
          <FaLinkedin style={iconStyle} />
          <p style={labelStyle}>LinkedIn</p>
          <a
            href="https://linkedin.com/in/yaminichenna"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            linkedin.com/in/yaminichenna
          </a>
        </div>

        <div style={cardStyle}>
          <FaPhone style={iconStyle} />
          <p style={labelStyle}>Phone</p>
          <p style={{ color: "#555" }}>+1 (123) 456-7890</p>
        </div>
      </div>
    </section>
  );
};

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "1.5rem",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
  width: "300px",
  textAlign: "center",
};

const iconStyle = {
  fontSize: "2rem",
  color: "#9333ea",
  marginBottom: "0.75rem",
};

const labelStyle = {
  fontWeight: "600",
  marginBottom: "0.25rem",
};

const linkStyle = {
  color: "#9333ea",
  textDecoration: "none",
};

export default Contact;

