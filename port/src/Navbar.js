import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Navigation = ({ toggleMobileMenu, showMobileMenu }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span role="img" aria-label="sparkle">✨</span> Mounika's Portfolio
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <div className="bar" /><div className="bar" /><div className="bar" />
      </div>

      <div className={`nav-items ${showMobileMenu ? "active" : ""}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>

        <a href="https://github.com/MounikaKattubadi" className="nav-icon" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mounika-kattubadi-0156b4351" className="nav-icon" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="mailto:mounikakattubadi94@gmail.com" className="nav-icon">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
