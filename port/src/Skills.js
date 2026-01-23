import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub
} from "react-icons/fa";
import { SiMongodb, SiFigma, SiSelenium } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skillsSectionRef = useRef(null);

  const scrollToSkills = () => {
    if (skillsSectionRef.current) {
      skillsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="skills-section">
      <div className="container">
        {/* ABOUT CONTENT */}
        <div className="about-content">
          <span className="tagline">ABOUT ME</span>
          <h2 className="heading">Why hire me for your next project?</h2>
          <p className="description">
            I'm a MERN Stack Developer with a strong foundation in full-stack development, skilled in both UI/UX design and scalable backend logic.
            Whether it's building sleek front-ends or powerful backends with Node.js and MongoDB, I thrive on creating meaningful digital experiences.
            I’m passionate about building clean, responsive, and scalable web applications using the MERN stack. I enjoy crafting beautiful user interfaces,
            writing efficient backend logic, and solving real-world problems through elegant code.
          </p>
          <p className="description">
            I'm constantly learning and exploring new technologies, with a strong focus on delivering value through user-centered design and functional development.
            Currently pursuing a B.Tech in Computer Science at <strong>IIIT RGUKT RK Valley</strong>.
          </p>

          {/* SKILLSET SECTION */}
          <Container className="skills-container my-5 py-5">
            <Card className="skills-card shadow-lg p-4">
              <Row className="justify-content-center">
                <Col lg={10}>
                  <Row>
                    <Col md={4} ref={skillsSectionRef} className="skills-side d-flex flex-column align-items-center">
                      <h2 className="section-title">Skillset</h2>
                      <div className="skill-list mt-3">
                        <h4 className="text-purple">Programming</h4>
                        <p>HTML • CSS • JavaScript • SQL • MongoDB • Python</p>
                        <p>Concepts: Data Structures and Algorithms</p>
                        <p>Testing: Selenium</p>

                        <h4 className="text-purple">Design</h4>
                        <p>Figma • Canva • Adobe XD</p>

                        <h4 className="text-purple">Frameworks</h4>
                        <p>Bootstrap • React.js • Node.js • jQuery • TypeScrpit • Thailwindcss</p>

                        <h4 className="text-purple">Tools/Platforms</h4>
                        <p>Git • GitHub</p>
                      </div>

                      <div className="tech-icons mt-4">
                        <FaReact className="tech-icon react" />
                        <FaNodeJs className="tech-icon node" />
                        <SiMongodb className="tech-icon mongo" />
                        <FaHtml5 className="tech-icon html" />
                        <FaCss3Alt className="tech-icon css" />
                        <FaJsSquare className="tech-icon js" />
                        <SiFigma className="tech-icon figma" />
                        <FaGithub className="tech-icon github" />
                        <SiSelenium className="tech-icon selenium" />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Skills;
