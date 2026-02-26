import React from "react";

const SkillsCard = ({ skill, index }) => {
  return (
    <div
      className="app__skills-container_skills-card app__glass-card"
      data-aos="zoom-in"
      data-aos-delay={index * 50}
    >
      <img src={skill.image} alt={skill.text} />
      <p className="app__skills-container_skills-card_text">{skill.text}</p>
    </div>
  );
};

export default SkillsCard;
