import React from "react";
import {
  FaPython, FaGitAlt, FaDocker, FaAws, FaJenkins, FaDatabase,
  FaChartBar, FaCode, FaCloud, FaTerminal, FaCube, FaFileCsv,
  FaNetworkWired, FaExchangeAlt, FaEye,
} from "react-icons/fa";
import {
  SiApachespark, SiDatabricks, SiSnowflake, SiApacheairflow,
  SiTableau, SiPostgresql, SiMysql, SiTerraform, SiKubernetes,
  SiApachehadoop, SiAmazonredshift, SiGoogledataproc, SiGoogledrive,
  SiApachekafka, SiJson, SiGrafana,
} from "react-icons/si";

import "./Skills.css";

const skills = [
  <FaPython title="Python" />, <SiApachespark title="Apache Spark" />, <SiDatabricks title="Databricks" />,
  <SiSnowflake title="Snowflake" />, <FaAws title="AWS" />, <FaGitAlt title="Git" />, <FaDocker title="Docker" />,
  <FaJenkins title="Jenkins" />, <SiApacheairflow title="Apache Airflow" />, <SiTableau title="Tableau" />,
  <SiPostgresql title="PostgreSQL" />, <SiMysql title="MySQL" />, <SiTerraform title="Terraform" />,
  <SiKubernetes title="Kubernetes" />, <FaDatabase title="SQL" />, <SiApachehadoop title="Hadoop" />,
  <SiAmazonredshift title="Redshift" />, <SiGoogledataproc title="DataProc" />, <SiGoogledrive title="Google Drive" />,
  <SiApachekafka title="Kafka" />, <SiJson title="JSON" />, <SiGrafana title="Grafana" />, <FaCode title="VS Code" />,
  <FaChartBar title="Power BI" />, <FaCloud title="Azure" />, <FaTerminal title="Shell Scripting" />,
  <FaCube title="DynamoDB" />, <FaFileCsv title="CSV" />, <FaNetworkWired title="FTP" />,
  <FaExchangeAlt title="REST API" />, <FaEye title="CloudWatch / Splunk" />
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-card">
        <div className="skills-container">
          {skills.map((icon, index) => (
            <div key={index} title={icon.props.title} className="skill-icon">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


