import "aos/dist/aos.css";
import React from "react";
import TypeAnimation from "react-type-animation";
import HeroSvg from "../../assets/images/rupesh.jpeg";
import "./Hero.scss";

const Hero = () => {
  return (
    <main
      className="app__hero"
      id="home"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__hero-container">
        <div className="app__hero-container_text">
          <TypeAnimation
            cursor={false}
            sequence={["Hi, my name is"]}
            wrapper="p"
            repeat={1}
            className="app__hero-title"
          />
          <TypeAnimation
            cursor={false}
            sequence={[1000, "Rupesh Kumar."]}
            wrapper="h1"
            repeat={1}
            className="app__hero-container_text-name app__gradient-text"
          />

          {/* 1. Static or pre-typed Title to prevent concurrent layout fights */}
      <h2 className="app__hero-container_text-title">
        I craft digital experiences.
      </h2>
      <p style={{fontSize: 20}}>I am Software Engineer with a passion for building innovative and efficient software solutions.</p>
      <p style={{fontSize: 20}}>I enjoy creating scalable systems and writing clean, maintainable code.</p>
      <p style={{fontSize: 20}}>Let's build something amazing together. Feel free to explore my portfolio and get in touch!</p>
        </div>
        <div className="app__hero-container_image">
          <div className="image-wrapper">
            <img src={HeroSvg} alt="Rupesh" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
