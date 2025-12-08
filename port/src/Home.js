// Home.jsx
import React from "react";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import "./Home.css";
import mouniImage from "./images/mouni.jpg";

const Home = () => {
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="home-page">
      {/* HERO / TOP SECTION */}
      <section id="top" className="hero-section">
        <div className="hero-inner">
          {/* TEXT SIDE */}
          <div className="hero-text">
            <span className="hero-badge">Hi, I’m Mounika 👋</span>
            <h2 className="hero-subtitle">Full-Stack Web Developer</h2>
            <h1 className="hero-title">
              I build <span>clean</span>, scalable web apps.
            </h1>

            <p className="hero-tagline">
              Aspiring Software Engineer · MERN Stack Developer
            </p>

            <p className="hero-description">
              Passionate about crafting intuitive, responsive web applications
              that solve real-world problems. I enjoy building elegant UIs in{" "}
              <strong>React</strong>, robust APIs with <strong>Node.js</strong>,
              and data layers powered by <strong>MongoDB</strong>.
            </p>

            <div className="hero-actions">
              <a
                href="/Mounika_Kattubadi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hero-btn primary">View Resume</button>
              </a>

              {/* 🔽 changed this part */}
              <button
                type="button"
                className="hero-btn ghost"
                onClick={handleScrollToProjects}
              >
                View Projects
              </button>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="hero-meta-label">Focus</span>
                <span className="hero-meta-value">MERN Stack · UI/UX</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-label">Based in</span>
                <span className="hero-meta-value">Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-card">
              <div className="hero-photo-ring">
                <img
                  src={mouniImage}
                  alt="Mounika"
                  className="hero-photo"
                />
              </div>
              <div className="hero-photo-caption">
                <span>Seeking full-time roles • Open for freelance</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding">
        <About />
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section-padding section-alt">
        <Experience />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-padding section-alt">
        <Projects />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
