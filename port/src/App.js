import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";  // Assume your Navbar component here
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Skills from "./Skills";
import Footer from "./Footer";
import ScrollToTopButton from './ScrollToTopButton';

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
        <Footer />
              <ScrollToTopButton />

      </div>
    </Router>
  );
}

export default App;
