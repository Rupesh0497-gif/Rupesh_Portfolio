import React from "react";
import MultiDevice from "../../assets/images/multi-device.svg";
import skills from "./imports";
import "./Skills.scss";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section
      className="app__skills section-padding"
      id="skills"
    >
      <div className="app__skills-title" data-aos="fade-up" data-aos-duration="800">
        <h2 className="app__skills-title_title">Skills & Technologies</h2>
        <p className="app__skills-title_content">
          Currently expanding my expertise in DevOps principles and advanced backend engineering, including hands-on experience with {" "}
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noreferrer"
            className="app__links"
          >
            Python
          </a>
          .
        </p>
        <p className="app__skills-title_content">
          Working towards earning my Certified Kubernetes Application Developer (CKAD) certification from DevOps Institute.
        </p>
        <p className="app__skills-title_content">
          Here is a collection of the primary tech stack and tools I leverage to architect, design, and develop scalable digital solutions.
        </p>
      </div>

      <div className="app__skills-container">
        <div className="app__skills-container_skills">
          {skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} index={index} />
          ))}
        </div>

        <div className="app__skills-container_image" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <img src={MultiDevice} alt="MultiDevice display showcasing responsive design" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
