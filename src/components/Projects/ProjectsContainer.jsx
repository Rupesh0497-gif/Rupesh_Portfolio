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
  <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center w-80" style={{marginRight: '30px'}}>
    <img src={image} alt={title} className="h-40 object-contain mb-4" width={"300"} height={"300"}/>
    <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      View on GitHub
    </a>
  </div>
);

const ProjectsContainer = () => (
  <section className="py-10">
    <div className=" justify-center gap-8" style={{display: 'flex'}}>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectsContainer;
