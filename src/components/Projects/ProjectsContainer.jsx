import React from "react";
import HeroSvg from "../../assets/images/MealSharingWebApp.png";
import Streamlit from "../../assets/images/streamlitApp.png";

const projects = [
  {
    title: "Meal Sharing Web App",
    image: HeroSvg, // replace with your project image path
    github: "https://github.com/Rupesh0497-gif/Meal-Sharing-Platform",
  },
  {
    title: "Disease Prediction Chatbot",
    image: Streamlit, // replace with your project image path
    github: "https://github.com/Rupesh0497-gif/NLP-Chatbot-disease-prediction",
  },
];

const ProjectCard = ({ title, image, github }) => (
  <div className="app__glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '320px' }}>
    <img src={image} alt={title} style={{ height: '160px', objectFit: 'contain', marginBottom: '1.5rem', borderRadius: '12px' }} />
    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{title}</h3>
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: 'var(--gradient-neon)',
        color: '#fff',
        padding: '0.8rem 1.5rem',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'opacity 0.3s ease',
        width: '100%',
        textAlign: 'center'
      }}
      onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
      onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
    >
      View on GitHub
    </a>
  </div>
);

const ProjectsContainer = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', width: '100%' }}>
    {projects.map((project, idx) => (
      <ProjectCard key={idx} {...project} />
    ))}
  </div>
);

export default ProjectsContainer;
