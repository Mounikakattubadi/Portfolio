import React from 'react';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';
import './Home.css';
import mouniImage from './images/mouni.jpg';

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <div className="home-left">
          <div className="triangle-frame">
            <img src={mouniImage} alt="Mounika" className="profile-img" />
          </div>
        </div>

        <div className="home-right">
          <div className="text-wrapper">
            <h2 className="subtitle">I'm a</h2>
            <h1 className="title">
              Web Dev<span>eloper</span>
            </h1>
            <p className="tagline">Aspiring Software Engineer | MERN Stack Developer</p>
            <p className="description">
              Passionate about crafting intuitive, responsive web applications that solve real-world problems.
              Skilled in JavaScript, React, Node.js, and MongoDB, I strive to build seamless user experiences that
              blend creativity with functionality. Eager to collaborate on innovative projects and continuously
              improve my skills in a fast-paced tech environment.
            </p>

            <div className="button-group">
              <a href="/Mounika_Kattubadi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-light">View Resume</button>
              </a>


            </div>
          </div>
        </div>
      </div>

      {/* Other sections */}
      <section id="about" className="section-padding">
        <About />
      </section>

      <section id="experience" className="section-padding section-alt">
        <Experience />
      </section>

      <section id="skills" className="section-padding">
        <Skills />
      </section>

      <section id="projects" className="section-padding section-alt">
        <Projects />
      </section>

      <section id="contact" className="section-padding section-alt">
        <Contact />
      </section>
    </>
  );
};

export default Home;
