import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiFigma, SiSelenium } from "react-icons/si";
import "./About.css";

const About = () => {
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
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <span className="tagline">ABOUT ME</span>
          <h2 className="heading">Why hire me for your next project?</h2>

          <p className="description">
            I’m a <strong className="highlight">MERN Stack Developer</strong> with a solid foundation
            in full-stack development, combining clean{" "}
            <strong className="highlight">UI/UX design</strong> with scalable{" "}
            <strong className="highlight">backend engineering</strong>. I love turning ideas into
            intuitive, high-performance web applications—whether that means crafting sleek,
            responsive interfaces or building reliable backend systems with
            <strong className="highlight"> Node.js</strong> and
            <strong className="highlight"> MongoDB</strong>.
          </p>

          <p className="description">
            I’m driven by learning, problem-solving, and creating digital experiences that feel
            effortless for users. I focus on writing{" "}
            <strong className="highlight">clean, maintainable code</strong> and building{" "}
            <strong className="highlight">user-centered interfaces</strong>.
            I graduated with a<strong className="highlight"> B.Tech in Computer Science</strong> from
            <strong className="highlight"> IIIT RGUKT RK Valley</strong> in 2024, where I developed a
            strong foundation in full-stack development and software engineering.
          </p>

          <div className="education-section">
            <h2 className="section-title">Education</h2>

            <div className="education-entry">
              <h4>B.Tech in Computer Science and Engineering</h4>
              <p>
                <strong>IIIT, RK Valley, RGUKT</strong> | 2020 - 2024
              </p>
              <p>CGPA: 8.3</p>
            </div>

            <div className="education-entry">
              <h4>Pre-University Course (PUC) - M.P.C</h4>
              <p>
                <strong>IIIT, RK Valley, RGUKT</strong> | 2018 - 2020
              </p>
              <p>CGPA: 8.66</p>
            </div>

            <div className="education-entry">
              <h4>Secondary School Certificate (SSC)</h4>
              <p>
                <strong>GVEZPGHS, Dharmavaram</strong> | 2018
              </p>
              <p>GPA: 10</p>
            </div>
          </div>
        </div>

        {/* Skillset card */}
        <Container className="skills-container">
          <Card className="skills-card shadow-lg p-4">
            <Row className="justify-content-center">
              <Col lg={10}>
                <Row>
                  <Col
                    md={12}
                    ref={skillsSectionRef}
                    className="skills-side d-flex flex-column align-items-center"
                  >
                    <h2 className="section-title">Skillset</h2>
                    <div className="skill-list mt-3">

                      <h4 className="text-purple">Programming</h4>
                      <p>HTML • CSS • JavaScript (ES6) • TypeScript • SQL • MongoDB • Python</p>
                      <p>Concepts: Data Structures and Algorithms</p>

                      <h4 className="text-purple">Design</h4>
                      <p>Figma • Canva • Adobe XD</p>

                      <h4 className="text-purple">Frameworks</h4>
                      <p>
                        Bootstrap • React.js • React Native  • Next.js • Vue.js • Vite
                        Node.js • jQuery • Tailwind CSS
                      </p>

                      <h4 className="text-purple">Tools/Platforms</h4>
                      <p>Git • GitHub • CI/CD Pipelines • Hostinger</p>

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
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </section>
  );
};

export default About;
