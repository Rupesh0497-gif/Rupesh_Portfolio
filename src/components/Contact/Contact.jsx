import React from "react";
import Connection from "../../assets/images/connections.svg";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="app__contact section-padding"
      id="contacts"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's build progress together</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to connect!
          </p>
          <ul className="app__contact-container_contacts-links">
            <a
              href="https://www.linkedin.com/in/rupesh-kumar-a94074116"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn Logo" />
              <span>Rupesh Kumar Bathina</span>
            </a>
          </ul>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Connections illustration" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
