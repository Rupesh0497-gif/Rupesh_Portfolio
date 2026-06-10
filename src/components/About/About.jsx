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
            Hi, I'm Rupesh Kumar Bathina, a Software Engineer with 4+ years of experience building scalable backend systems, cloud-native applications, and full-stack solutions. I specialize in Java, Spring Boot, AWS, React, and distributed microservices, with experience across government, telecommunications, and retail domains. </p>
<p>
Currently, I develop mission-critical applications for the State of Florida, helping support disability services for over 70,000 beneficiaries through automated eligibility, onboarding, and provider management platforms. Throughout my career, I've designed REST APIs, event-driven systems, cloud-based architectures, and high-performance applications that improve operational efficiency and deliver measurable business impact.

I enjoy solving complex engineering challenges, designing reliable systems, and building technology that makes a meaningful difference for users. Whether it's modernizing legacy platforms, optimizing backend performance, or developing cloud-native solutions, I'm passionate about creating software that is scalable, maintainable, and impactful.
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
