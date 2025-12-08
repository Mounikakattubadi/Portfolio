import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top content */}
        <div className="footer-main">
          {/* Left: Name + About */}
          <div className="footer-left">
            <h4 className="footer-name">Mounika Kattubadi</h4>
            <p className="footer-about">
              Full-Stack Developer specializing in the{" "}
              <span className="accent">MERN stack</span>, focused on building
              scalable applications and seamless user experiences.
            </p>
          </div>

          {/* Right: Contact items */}
          <div className="footer-right">
            <div className="footer-item">
              <div className="footer-icon-circle">
                <FiMail />
              </div>
              <div>
                <h6>EMAIL</h6>
                <p>
                  <a
                    href="mailto:mounikakattubadi1@gmail.com"
                    className="footer-link"
                  >
                    mounikakattubadi1@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="footer-item">
              <div className="footer-icon-circle">
                <FiPhone />
              </div>
              <div>
                <h6>PHONE</h6>
                <p>
                  <a href="tel:+919573530350" className="footer-link">
                    +91 95735 30350
                  </a>
                </p>
              </div>
            </div>

            <div className="footer-item">
              <div className="footer-icon-circle">
                <FiMapPin />
              </div>
              <div>
                <h6>LOCATION</h6>
                <p>Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="accent">Mounika Kattubadi</span>. All Rights
            Reserved.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/mounika-kattubadi-0156b4351"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span className="social-pill">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://github.com/MounikaKattubadi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <span className="social-pill">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
