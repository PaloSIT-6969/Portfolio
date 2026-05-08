// App.jsx

import React from "react";
import "./App.css";
import "./PortfolioLinks.css";

export default function App() {

  // =========================
  // PORTFOLIO CONTENTS
  // =========================

  const portfolioItems = [
    {
      title: "Formative Assessment 1",
      description: "Basic networking quiz and activities.",
      link: "https://your-link-here.com"
    },

    {
      title: "Laboratory Activity 1",
      description: "Static routing configuration project.",
      link: "https://your-link-here.com"
    },

    {
      title: "Database Project",
      description: "Normalization and ERD design activity.",
      link: "https://your-link-here.com"
    },

    {
      title: "Reflection Paper",
      description: "End semester self-assessment.",
      link: "https://your-link-here.com"
    }
  ];

  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          Portfolio
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Assessments</a></li>
          <li><a href="#">Laboratory Works</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </nav>

      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <h1>Student Portfolio</h1>

          <p>
            A collection of my academic activities,
            projects, laboratory works, and learning
            experiences throughout the semester.
          </p>

          <div className="hero-info">
            <p><strong>Course Code:</strong> IT-204</p>
            <p><strong>Course Title:</strong> Networking 2</p>
            <p><strong>Semester:</strong> 2nd Semester SY 2025-2026</p>
            <p><strong>Name:</strong> Palo Yuri</p>
          </div>

          <button className="hero-btn">
            Explore Portfolio
          </button>

        </div>

      </section>

      {/* ================= MAIN CONTENT ================= */}

      <main className="container">

        {/* ABOUT SECTION */}

        <section className="card-section">

          <h2>About This Portfolio</h2>

          <p>
            This portfolio showcases my projects,
            hands-on activities, laboratory exercises,
            and personal reflections throughout the semester.
            It demonstrates my growth, technical skills,
            creativity, and learning journey in the course.
          </p>

        </section>

        {/* SELF ASSESSMENT */}

        <section className="card-section">

          <h2>End Semester Self-Assessment</h2>

          <p>
            This semester helped me improve my technical knowledge,
            problem-solving skills, and teamwork. I learned how to
            manage projects better and understand networking concepts
            more deeply.
          </p>

          <div className="cards">

            <div className="mini-card">
              <h3>Skills Learned</h3>

              <p>
                HTML, CSS, React, routing,
                troubleshooting, and networking fundamentals.
              </p>
            </div>

            <div className="mini-card">
              <h3>Challenges</h3>

              <p>
                Time management, debugging problems,
                and balancing project deadlines.
              </p>
            </div>

            <div className="mini-card">
              <h3>Achievements</h3>

              <p>
                Completed projects successfully and improved
                confidence in programming.
              </p>
            </div>

          </div>

        </section>

        {/* ================= PORTFOLIO LINKS ================= */}

        <section className="portfolio-section">

          <div className="portfolio-header">

            <h2>My Portfolio Contents</h2>

            <p>
              Collection of activities, projects,
              laboratory works, and assessments
              throughout the semester.
            </p>

          </div>

          <div className="portfolio-grid">

            {portfolioItems.map((item, index) => (

              <div className="portfolio-card" key={index}>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-btn"
                >
                  Open Content
                </a>

              </div>

            ))}

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        © 2026 Student Portfolio | React Portfolio Website
      </footer>

    </div>
  );
}