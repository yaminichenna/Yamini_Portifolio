import React from "react";

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "4rem 1rem",
        backgroundColor: "#f8f4ff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "1.5rem",
          color: "#000",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          padding: "2.0rem",
          borderRadius: "16px",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
          textAlign: "left",
          lineHeight: "1.8",
          fontSize: "1.1rem",
          color: "#444",
        }}
      >
        <p style={{ marginBottom: "1rem" }}>
          Hello! I'm <strong>Yamini Chenna</strong>, a passionate and detail-oriented Data Engineer with a strong foundation in building scalable data pipelines, automating workflows, and enabling data-driven decision-making.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          I hold a Master’s degree in Information Technology & Management from the Illinois Institute of Technology, where I honed both my technical and analytical skills.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          With 4+ years of professional experience, I've worked on data engineering projects across cloud platforms like <strong>AWS</strong> and <strong>Azure</strong>, leveraging tools such as <strong>Snowflake, Databricks, Airflow, DBT</strong>, and <strong>Apache Spark</strong> to handle large-scale data processing and transformation.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          My strength lies in designing modular, reliable, and cost-effective data architectures while ensuring governance, data quality, and performance optimization.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          Outside of work, I love exploring data visualizations, reading about tech innovations, and writing about what I learn.
        </p>

        <p style={{ marginBottom: "2rem" }}>
          Let’s connect — I’m always excited to collaborate on impactful data projects!
        </p>

        {/* Resume Download Button */}
        <div style={{ textAlign: "center" }}>
          <a
            href="/Yamini_Chenna_Data Engineer.pdf"
            download
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#6a11cb",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2575fc")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6a11cb")}
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;


