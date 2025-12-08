import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Navigation = ({ toggleMobileMenu, showMobileMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const doScroll = () => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname === "/") {
      doScroll();
    } else {
      navigate("/");
      setTimeout(doScroll, 120);
    }

    if (showMobileMenu) toggleMobileMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <span role="img" aria-label="sparkle">
              ✨
            </span>{" "}
            Mounika&apos;s Portfolio
          </Link>
        </div>

        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        <div className={`nav-items ${showMobileMenu ? "active" : ""}`}>
          <button
            className="nav-link as-button"
            onClick={() => scrollToSection("top")}
          >
            Home
          </button>
          <button
            className="nav-link as-button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="nav-link as-button"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>
          <button
            className="nav-link as-button"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="nav-link as-button"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

          <div className="nav-icons">
            <a
              href="https://github.com/MounikaKattubadi"
              className="nav-icon"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mounika-kattubadi-0156b4351"
              className="nav-icon"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:mounikakattubadi94@gmail.com"
              className="nav-icon"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
