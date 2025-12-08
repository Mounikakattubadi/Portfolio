import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // ref for the whole navbar (so clicks inside don't close it)
  const navRef = useRef(null);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  // close menu when clicking anywhere outside the navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showMobileMenu &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMobileMenu]);

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

    // close menu after clicking a link (on mobile)
    setShowMobileMenu(false);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-inner">
        {/* BRAND */}
        <div className="navbar-brand">
          <Link
            to="/"
            className="brand-link"
            onClick={() => scrollToSection("top")}
          >
            <span className="brand-logo">&lt;MK /&gt;</span>
            <span className="brand-name">Mounika Kattubadi</span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        {/* Menu Items */}
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

export default Navbar;
