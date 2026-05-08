// PortfolioLinks.jsx

import React from "react";
import "./PortfolioLinks.css";

export default function PortfolioLinks() {

  // =========================
  // PUT YOUR PORTFOLIO LINKS HERE
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
    <section className="portfolio-section">

      <div className="portfolio-header">
        <h2>My Portfolio Contents</h2>

        <p>
          Collection of activities, projects, laboratory works,
          and assessments throughout the semester.
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
  );
}