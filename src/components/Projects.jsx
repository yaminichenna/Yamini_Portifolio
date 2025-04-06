import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Walmart Sales Analytics</h3>
          <p>
            An interactive dashboard built with Power BI & PostgreSQL to analyze Walmart sales performance across regions.
          </p>
          <a href="https://github.com/yaminichenna/walmart_sales_analysis" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>ETL Pipeline with Python</h3>
          <p>
            End-to-end data pipeline for data extraction, transformation, and loading using pandas and PostgreSQL.
          </p>
          <a href="https://github.com/yaminichenna/ETLProject" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
