import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  const openModal = (project, tab) => {
    setModalProject(project);
    setActiveTab(tab);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  // ---------------- INDUSTRIAL PROJECTS ----------------
  const industrialProjects = [
    {
      id: "rubberScrapMart",
      name: "RubberScrapMart B2B Marketplace",
      link: "https://rubberscrapmart.com/",
      shortTag: "India’s B2B marketplace for buying and selling rubber scrap.",
      description:
        "A production-ready B2B marketplace that connects recyclers, manufacturers, suppliers, and buyers of rubber scrap-derived products across India.",
      features: [
        "Searchable product listings by scrap type and category",
        "Enquiry-based workflow for buyers and sellers",
        "Category-based browsing for rubber scrap-derived products",
        "Informative content around sustainability and rubber recycling",
        "Responsive layout tailored for desktop and mobile users",
      ],
      technologies: [
        "MERN Stack",
        "React (SPA front-end)",
        "Node.js API layer",
        "MongoDB for product and enquiry data",
        "Modern CSS and responsive design",
      ],
    },
    {
      id: "vikahEcotech",
      name: "Vikah Ecotech – Recycling Machinery Platform",
      link: "https://www.vikahecotech.com/",
      shortTag: "Corporate platform for recycling machinery and eco solutions.",
      description:
        "A corporate website highlighting recycling machinery, applications, and eco-focused solutions designed to drive industrial enquiries.",
      features: [
        "Product catalogue showcasing recycling machinery and solutions",
        "Dedicated application and use-case sections",
        "Informational pages explaining processes and sustainability aspects",
        "Contact and enquiry options for quotation requests",
        "Responsive layouts optimized for multiple devices",
      ],
      technologies: [
        "React front-end components",
        "JavaScript for interactivity",
        "CSS for layout and styling",
        "SEO-structured headings and content",
      ],
    },
    {
      id: "vikahRubbers",
      name: "Vikah Rubbers Manufacturing Website",
      link: "https://vikahrubbers.com/",
      shortTag:
        "Crumb rubber and recycled tyre products manufacturing showcase.",
      description:
        "A product-driven website for a rubber manufacturer, highlighting crumb rubber, EPDM granules, and recycled tyre-based products.",
      features: [
        "Well-structured product and material categorization",
        "Sections describing manufacturing capabilities and processes",
        "Lead-generation via clearly visible contact/enquiry blocks",
        "Optimized layout for quick product discovery",
      ],
      technologies: [
        "React or component-based front-end",
        "HTML5 and semantic structure",
        "CSS-based responsive grid layouts",
        "Basic JS-driven UX enhancements",
      ],
    },
    {
      id: "lavaRubber",
      name: "Lava Rubber LLC – Sustainability Solutions",
      link: "https://lavarubberllc.com/",
      shortTag: "Eco-focused rubber recycling and product solutions website.",
      description:
        "A modern website presenting sustainability-focused rubber products, services, and recycling solutions for international clients.",
      features: [
        "Content-driven pages focused on sustainability and brand story",
        "Sections for products, services, and company background",
        "Scroll-friendly layout with clear visual hierarchy",
        "Responsive design for mobile, tablet, and desktop",
      ],
      technologies: [
        "HTML5 and CSS3 for layout and styling",
        "JavaScript for interactive elements",
        "Potential React components for reusable UI blocks",
        "SEO-friendly page structure",
      ],
    },
    {
      id: "vssi",
      name: "VSSI – Venkata Siva Sai Industries",
      link: "https://vssi.in/",
      shortTag: "Industrial services and manufacturing offerings website.",
      description:
        "An informational site for an industrial manufacturer, presenting services, capabilities, and company profile to potential clients.",
      features: [
        "Service overview sections tailored to industrial clients",
        "Company background and capability highlights",
        "Simple navigation for quick information access",
        "Contact information and enquiry details for leads",
      ],
      technologies: [
        "React or static HTML front-end",
        "CSS for responsive design",
        "JavaScript for navigation and UX interactions",
      ],
    },
    {
      id: "lgIndustry",
      name: "LG Industry – Rubber Crumb & Granules",
      link: "https://lgindustry.in/",
      shortTag:
        "Product catalogue for rubber crumb, EPDM granules, and tyre wire.",
      description:
        "A product-focused website showcasing industrial rubber crumb, EPDM granules, and tyre wire for industrial buyers.",
      features: [
        "Product-oriented landing sections for each material type",
        "Highlight of manufacturing capabilities and quality focus",
        "Information architecture tuned for industrial buyer journeys",
        "SEO-conscious headings and content structure",
      ],
      technologies: [
        "React-based front-end",
        "JavaScript for UI behaviour",
        "CSS for layout, typography, and responsiveness",
        "Performance-focused optimization for faster loading",
      ],
    },
    {
      id: "saraswathiRubbers",
      name: "Saraswathi Rubbers – Manufacturing Portfolio",
      link: "https://saraswathirubbers.com/",
      shortTag: "Industrial rubber manufacturer portfolio website.",
      description:
        "A portfolio-style website that highlights industrial rubber products and manufacturing capabilities for Saraswathi Rubbers.",
      features: [
        "Company overview and story sections",
        "Product-focused pages with concise descriptions",
        "Simple page flow to support quick understanding",
        "Mobile-friendly layout for on-the-go visitors",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript for basic interactions",
        "Responsive design patterns",
      ],
    },
  ];

  // ---------------- ACADEMIC / PERSONAL PROJECTS ----------------
  const academicProjects = [
    {
      id: "travellingWebsite",
      name: "Travel Booking Web App",
      link: "",
      shortTag: "Travel booking UI for flights, trains, and buses.",
      description:
        "A conceptual travel platform with booking flows and search screens that simulate a real travel booking experience.",
      features: [
        "Search flows for routes and transport modes",
        "Booking-style UI with forms and confirmation views",
        "Navigation between different booking sections",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      id: "examCellSystem",
      name: "Exam Cell Management System",
      link: "",
      shortTag: "System for managing student data and marks.",
      description:
        "An SQL-based system that helps manage student academic records, including personal details and marks.",
      features: [
        "Student data storage and retrieval",
        "Marks management for different subjects",
        "Basic CRUD operations for admin users",
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
    },
    {
      id: "diabetesPrediction",
      name: "Diabetes Prediction Model",
      link: "",
      shortTag: "ML model predicting diabetes risk from health data.",
      description:
        "A machine learning project that predicts the likelihood of diabetes based on patient data and visualizes results.",
      features: [
        "Model training and evaluation on medical dataset",
        "Data preprocessing and cleaning steps",
        "Visualization of dataset distributions and predictions",
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
      id: "eventManagement",
      name: "Event Management Platform",
      link: "",
      shortTag: "Concept UI for planning and managing events.",
      description:
        "A platform concept for event planning with tools for managing guest lists, event details, and basic templates.",
      features: [
        "Event overview and detail screens",
        "Guest list management concept",
        "Template-oriented event structure and layout",
      ],
      technologies: ["React", "Node.js", "HTML", "CSS"],
    },
  ];

  const renderProjectCard = (project, type) => (
    <div className="project-card" key={project.id}>
      <div className="project-card-header">
        <h3 className="project-name">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <span className={`project-type-badge ${type === "industrial" ? "industrial" : "academic"}`}>
          {type === "industrial" ? "Industrial" : "Academic / Personal"}
        </span>
      </div>

      {project.shortTag && (
        <p className="project-tagline">{project.shortTag}</p>
      )}
      <p className="project-description">{project.description}</p>

      <div className="project-actions">
        <button
          className="project-btn"
          onClick={() => openModal(project, "features")}
        >
          View Features
        </button>
        <button
          className="project-btn secondary"
          onClick={() => openModal(project, "technologies")}
        >
          View Technologies
        </button>
      </div>
    </div>
  );

  return (
    <section className="projects-section">
      <div className="projects-inner">
        <div className="projects-header">
          <span className="projects-badge">PROJECTS</span>
          <h2 className="projects-title">Things I&apos;ve built & worked on</h2>
          <p className="projects-subtitle">
            From production-grade industrial platforms to academic explorations in
            web, data, and machine learning.
          </p>
        </div>

        <div className="projects-group">
          <h3 className="projects-section-title">Industrial Projects</h3>
          <div className="projects-grid">
            {industrialProjects.map((p) => renderProjectCard(p, "industrial"))}
          </div>
        </div>

        <div className="projects-group">
          <h3 className="projects-section-title">Academic & Personal Projects</h3>
          <div className="projects-grid">
            {academicProjects.map((p) => renderProjectCard(p, "academic"))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalProject && (
        <div className="projects-modal-overlay" onClick={closeModal}>
          <div
            className="projects-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="projects-modal-close" onClick={closeModal}>
              &times;
            </button>

            <h3 className="projects-modal-title">{modalProject.name}</h3>
            {modalProject.shortTag && (
              <p className="projects-modal-tagline">{modalProject.shortTag}</p>
            )}

            <div className="projects-modal-tabs">
              <button
                className={
                  activeTab === "features" ? "tab-btn active" : "tab-btn"
                }
                onClick={() => setActiveTab("features")}
              >
                Features
              </button>
              <button
                className={
                  activeTab === "technologies" ? "tab-btn active" : "tab-btn"
                }
                onClick={() => setActiveTab("technologies")}
              >
                Technologies
              </button>
            </div>

            <div className="projects-modal-body">
              {activeTab === "features" ? (
                <ul className="info-list modal-list">
                  {modalProject.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              ) : (
                <ul className="info-list modal-list">
                  {modalProject.technologies.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
