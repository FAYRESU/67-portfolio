import React from "react";
import cv_natthakan from "../assets/download/CV_NATTHAKAN.pdf";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/**About Me */}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Hello! My name is Natthakan Jamratphum, and I am a software
              Engineering. I am passionate about Javascript and have experience
              in mySQL and UX/UI . I enjoy collaborating with others and am
              always eager to learn and grow.
            </p>
            <div className="about-btn">
              <div className="nav-button">
                <a href={cv_natthakan} target="_blank">
                  <button className="btn">
                    Download CV <i className="uil uil-import"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/**Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>FrontEnd</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Bootstrap</span>
              <span>Tailwind</span>
              <span>React</span>
              <span>Figma</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>BackEnd</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>Javascript</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MYSQL</span>
              <span>PostgreSQL</span>
              <span>MongoSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
