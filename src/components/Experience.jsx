import React from "react";
import './Experience.css';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
  {
    company: "BMO Bank – Chicago, USA",
    role: "Senior Data Engineer",
    dates: "August 2024 – Present",
    description: "Built scalable AWS-based data pipelines and dashboards for financial reporting, using Glue, Lambda, Redshift, Airflow, S3, and QuickSight, with a focus on security, automation, and real-time analytics."
  },
  {
    company: "Northern Trust – Chicago, USA",
    role: "Data Engineer Intern ",
    dates: "May 2023 – June 2024",
    description: "Architected an Azure Data Mesh platform using Azure Data Factory, Databricks, Snowflake, and Power BI. Focused on automation, security, and delivering analytics-ready datasets and dashboards."
  },
  {
    company: "Aviva India – Mumbai, India",
    role: "Data Engineer",
    dates: "July 2020 – June 2022",
    description: "Built a Big Data platform for claims and compliance using Hadoop, Hive, PySpark, and Airflow. Delivered high-performance data pipelines and dashboards in Power BI for regulatory insights."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Work Experience</h2>
      <div className="experience-container">
        {experienceData.map((job, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-company">
                <Briefcase size={20} />
                <div>
                  <strong className="company-name">{job.company}</strong>
                  <div className="experience-role">{job.role}</div>
                </div>
              </div>
              <div className="experience-dates">
                <Calendar size={14} style={{ marginRight: '4px' }} />{job.dates}
              </div>
            </div>
            <p className="experience-description">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

