import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about section-padding"
      id="about"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About Me</h2>
          <p>
            Hi, I’m Rupesh Kumar Bathina, a MERN Full Stack Developer with 4.5 years of experience delivering scalable and efficient applications. At Verizon, I streamlined workflows for projects like SNAP, improving efficiency for 50+ team members. At Cognizant, I revamped interfaces and optimized performance for Walgreens, driving impactful results.
          </p>
          <p>
            As an AWS Developer Associate certified professional and a master’s student in Information Technology, I am passionate about leveraging cloud technologies and full-stack development to solve challenges and deliver excellence.
          </p>
          <p>
            I spend my time learning new technology especially Frontend
            Development and DevOps. I consistently learn the concepts and tools behind them and
            build projects around them.
          </p>

          <p>
            I completed my Master's in Information Technology at {" "}
            <a
              href="https://www.fsu.edu/"
              target="_blank"
              rel="noreferrer"
              className="app__links"
            >
              FSU
            </a>
          </p>
          <p className="graduation-text">Graduation: December 2025</p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
