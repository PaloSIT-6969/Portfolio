import React, { useRef, useState } from "react";
import "./App.css";
import "./PortfolioLinks.css";

// IMPORT ASSETS
import Pic1 from "./assets/Images/Pic1.jpg";
import Pic2 from "./assets/Images/Pic2.jpg";
import Pic3 from "./assets/Images/Pic3.jpg";
import Pic4 from "./assets/Images/Pic4.jpg";
import Pic5 from "./assets/Images/Pic5.jpg";
import Pic6 from "./assets/Images/Pic6.jpg";
import Pic7 from "./assets/Images/Pic7.jpg";

export default function App() {
  // =========================
  // REFS & STATE
  // =========================
  const portfolioRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const [showNotebook, setShowNotebook] = useState(false);

  const handleImageClick = (image) => {
    setActiveImage(activeImage === image ? null : image);
  };

  // =========================
  // DATA
  // =========================
  // UPDATED: Added Pic5, Pic6, and Pic7 to the gallery array
  const notebookPictures = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7];

  const portfolioItems = [
    {
      title: "Formative Assessment 1",
      description: "Basic networking quiz and activities.",
      link: "https://www.netacad.com/launch?id=4516e19b-37b0-47cd-8bba-56e2fa61be68&tab=curriculum&view=a0beeafa-147f-5948-894e-6c07bc39cb3b"
    },
    {
      title: "Laboratory Activity 1",
      description: "Explore how Packet Tracer serves as a modeling tool.",
      link: "https://www.netacad.com/launch?id=4516e19b-37b0-47cd-8bba-56e2fa61be68&tab=curriculum&view=1a5f5347-37be-528e-82dd-ae1ae610d3fa"
    },
    {
      title: "Device Configuration",
      description: "Switches and end devices come with some general configuration.",
      link: "https://www.netacad.com/launch?id=4516e19b-37b0-47cd-8bba-56e2fa61be68&tab=curriculum&view=d665e4df-da91-546f-b979-a8a75bd82e9e"
    },
    {
      title: "Protocols and Models",
      description: "Explain how network protocols enable devices to access local and remote network resources.",
      link: "https://www.netacad.com/launch?id=4516e19b-37b0-47cd-8bba-56e2fa61be68&tab=curriculum&view=4f714548-0c31-5b9d-ba49-ff360237b5ae"
    },
    {
      title: "IPV4 Addressing",
      description: "Calculate an IPv4 subnetting scheme to efficiently segment your network.",
      link: "https://www.netacad.com/launch?id=4516e19b-37b0-47cd-8bba-56e2fa61be68&tab=curriculum&view=5f8b04c9-b8e2-5cea-9579-cee863b5a42b"
    },
    {
      title: "Subneting Project",
      description: "Subnet mask and addressing project.",
      link: "https://www.netacad.com/launch?id=4516e19b-37b0-47cd-8bba-56e2fa61be68&tab=curriculum&view=accd3e48-6d11-50b5-9b66-0baf59ad12ea"
    },
    {
      title: "Notebook Activities",
      description: "Overall Notebook Assessments.",
      isGallery: true 
    }
  ];

  const scrollToPortfolio = () => {
    window.scrollTo({
      top: portfolioRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#assessments">Formative Assessments</a></li>
          <li><a href="#laboratory">Laboratory Works</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Portfolio</h1>
          <p>A collection of my academic activities, projects, laboratory works, and learning experiences.</p>
          <div className="hero-info">
            <p><strong>Course Title:</strong> Networking 2</p>
            <p><strong>Semester:</strong> 2nd Semester SY 2025-2026</p>
            <p><strong>Name:</strong> Palo Yuri</p>
          </div>
          <button className="hero-btn" onClick={scrollToPortfolio}>Explore Portfolio</button>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main className="container">
        <section className="card-section">
          <h2>About This Portfolio</h2>
          <p>This portfolio showcases my projects, laboratory exercises, and personal learning experiences.</p>
        </section>

        {/* ================= ASSESSMENTS ================= */}
        <section className="portfolio-section" id="assessments" ref={portfolioRef}>
          <div className="portfolio-header">
            <h2>Formative Assessments</h2>
            <p>Collection of activities, assessments, and projects.</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div className="portfolio-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.isGallery ? (
                  <button className="portfolio-btn" onClick={() => setShowNotebook(true)}>View Pictures</button>
                ) : (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-btn">Open Content</a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= NOTEBOOK POPUP MODAL ================= */}
        {showNotebook && (
          <div className="gallery-overlay" onClick={() => setShowNotebook(false)}>
            <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowNotebook(false)}>&times;</button>
              <h2 style={{color: '#333', marginBottom: '20px'}}>Notebook Activities</h2>
              <div className="notebook-grid">
                {notebookPictures.map((pic, idx) => (
                  <img key={idx} src={pic} alt={`Page ${idx + 1}`} className="gallery-img" />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= LABORATORY ================= */}
        <section className="card-section" id="laboratory">
          <h2>Laboratory Works</h2>
          <div className="cards">
            
            {/* Packet Tracer - Using Pic6 */}
            <div className="mini-card" onClick={() => handleImageClick("packet")}>
              <h3>Packet Tracer</h3>
              <p>Created networking topologies using Cisco Packet Tracer.</p>
              {activeImage === "packet" && (
                <img src={Pic6} alt="Packet Tracer" className="popup-image" />
              )}
            </div>

            {/* Router Config - Using Pic5 */}
            <div className="mini-card" onClick={() => handleImageClick("router")}>
              <h3>Router Configuration</h3>
              <p>Configured routers, switches, and IP addressing.</p>
              {activeImage === "router" && (
                <img src={Pic7} alt="Router" className="popup-image" />
              )}
            </div>

            {/* Cable Crimping - Using Pic7 */}
            <div className="mini-card" onClick={() => handleImageClick("crimp")}>
              <h3>Cable Crimping</h3>
              <p>Learned proper Ethernet cable crimping procedures.</p>
              {activeImage === "crimp" && (
                <img src={Pic5} alt="Crimping" className="popup-image" />
              )}
            </div>

          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="card-section" id="experience">
          <h2>Experience</h2>
          <p> During my training, I gained hands-on experience in networking, troubleshooting, and working with Cisco technologies. I didn’t just learn the theory I actually configured routers and switches, solved real connectivity issues, and explored how different protocols like TCP/IP and VLANs function in practice. Each challenge taught me to think critically and approach problems step by step, which made troubleshooting feel less like guesswork and more like solving a puzzle. I also discovered how important clear communication is, especially when working with others to diagnose and fix issues. Altogether, this experience gave me both the technical confidence to handle complex systems and the collaborative mindset to thrive in professional IT environments</p>
        </section>
      </main>
    </div>
  );
}