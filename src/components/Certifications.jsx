import React from "react";
import { Award } from "lucide-react";
import "./Certifications.css";

const certifications = [
  {
    title: "Data Analyst Certificate",
    platform: "DataCamp",
    link: "https://www.datacamp.com/certificate/DAA0016149180406",
    issued: "Issued April 2024",
  },
  {
    title: "Excel - Business Intelligence",
    platform: "Codebasics",
    link: "https://codebasics.io/certificate/CB-51-322811",
    issued: "Issued March 2024",
  },
  {
    title: "Power BI Data Analytics ",
    platform: "Codebasics",
    link: "https://codebasics.io/certificate/CB-49-322811",
    issued: "Issued February 2024",
  },
  {
    title: "Python - Advanced",
    platform: "Codebasics",
    link: "https://codebasics.io/certificate/CB-48-322811",
    issued: "Issued January 2024",
  },
  {
    title: "SQL - Advanced",
    platform: "Codebasics",
    link: "https://codebasics.io/certificate/CB-50-322811",
    issued: "Issued January 2024",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-icon">
              <Award size={24} />
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-platform">{cert.platform}</p>
              <p className="cert-issued">{cert.issued}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                ↗ Verify Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

