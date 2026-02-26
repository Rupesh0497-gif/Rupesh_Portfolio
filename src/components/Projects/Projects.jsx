import React from "react";
import CertificateCard from "./CertificateCard";
import ProjectDetails, {
  AWSCertificate
} from "./imports";
import "./Projects.scss";
import ProjectsCard from "./ProjectsCard";
import ProjectsContainer from './ProjectsContainer';

const Projects = () => {
  const certificates = [AWSCertificate];

  return (
    <section
      className="app__projects section-padding"
      id="projects"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__projects-container">
        <h2>Experience</h2>
        <div className="app__projects-container_projects">
          <ProjectsCard projects={ProjectDetails} />
        </div>

        <div className="app__projects-container_certificate">
          <h2>Projects</h2>
          <div className="app__projects-container_certificate-cert">
            <ProjectsContainer />
          </div>
        </div>

        <div className="app__projects-container_certificate">
          <h2>Certifications</h2>
          <div className="app__projects-container_certificate-cert">
            {certificates.map((certificate, index) => (
              <CertificateCard key={index} cert={certificate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
