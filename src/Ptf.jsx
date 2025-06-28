// Ptf.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'animate.css';
import './Ptf.css';

// Color-coordinated font and style imports
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');
  
  :root {
    /* Primary color palette */
    --primary: #6a5acd;  // Slate Blue - main brand color
    --primary-light: #9370db;
    --primary-dark: #483d8b;
    
    /* Secondary colors */
    --secondary: #20b2aa;  // Light Sea Green
    --accent: #ff7f50;     // Coral
    
    /* Neutral tones */
    --light: #f8f9fa;
    --dark: #343a40;
    --gray: #6c757d;
    
    /* Status colors */
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: var(--dark);
    background-color: var(--light);
  }
  
  .navbar-brand, .section-title, .display-4, .card-title, h1, h2, h3, h4, h5 {
    font-family: 'Comfortaa', cursive;
    font-weight: 600;
    color: var(--dark);
  }
  
  /* Dark mode variables */
  body.dark-mode {
    --light: #212529;
    --dark: #f8f9fa;
    --gray: #adb5bd;
  }
`;

// Project Detail Components (matching existing structure)
const WebDevProject = () => (
  <div className="container py-5 animate__animated animate__fadeIn">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <img 
          src="code.png" 
          alt="Web Development Project" 
          className="img-fluid rounded shadow-lg animate__animated animate__zoomIn"
        />
      </div>
      <div className="col-lg-6">
        <h2 className="animate__animated animate__fadeInDown">Student Management System</h2>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">A comprehensive solution for educational institutions</p>
        <div className="mb-4 animate__animated animate__fadeIn animate__delay-1s">
          <span className="badge bg-primary me-2"><i className="bi bi-filetype-html me-1"></i> HTML</span>
          <span className="badge bg-primary me-2"><i className="bi bi-filetype-css me-1"></i> CSS</span>
          <span className="badge bg-primary"><i className="bi bi-filetype-js me-1"></i> JavaScript</span>
        </div>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          This project was developed as part of my coursework at Kamukunji TVC. It features a clean,
          intuitive interface for managing student records, attendance, and grades.
        </p>
        <ul className="animate__animated animate__fadeIn animate__delay-2s">
          <li><i className="bi bi-shield-lock me-2 text-primary"></i>Secure login authentication</li>
          <li><i className="bi bi-phone me-2 text-primary"></i>Responsive design for all devices</li>
          <li><i className="bi bi-check-circle me-2 text-primary"></i>Data validation and error handling</li>
          <li><i className="bi bi-file-earmark-arrow-down me-2 text-primary"></i>Export functionality for reports</li>
        </ul>
        <Link to="/projects" className="btn btn-outline-primary mt-3 animate__animated animate__fadeIn animate__delay-2s">
          <i className="bi bi-arrow-left me-2"></i>Back to Projects
        </Link>
      </div>
    </div>
  </div>
);

const DataAnalysisProject = () => (
  <div className="container py-5 animate__animated animate__fadeIn">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Data Analysis Project" 
          className="img-fluid rounded shadow-lg animate__animated animate__zoomIn"
        />
      </div>
      <div className="col-lg-6">
        <h2 className="animate__animated animate__fadeInDown">Financial Reports Dashboard</h2>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">Interactive financial analytics tool</p>
        <div className="mb-4 animate__animated animate__fadeIn animate__delay-1s">
          <span className="badge bg-success me-2"><i className="bi bi-file-earmark-excel me-1"></i> Excel</span>
          <span className="badge bg-success me-2"><i className="bi bi-table me-1"></i> Pivot Tables</span>
          <span className="badge bg-success"><i className="bi bi-bar-chart-line me-1"></i> Data Visualization</span>
        </div>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          This financial dashboard demonstrates my proficiency in data analysis and visualization.
        </p>
        <ul className="animate__animated animate__fadeIn animate__delay-2s">
          <li><i className="bi bi-lightning-charge me-2 text-success"></i>Dynamic financial reporting with slicers</li>
          <li><i className="bi bi-calculator me-2 text-success"></i>Automated calculations and KPIs</li>
          <li><i className="bi bi-graph-up me-2 text-success"></i>Interactive charts and graphs</li>
          <li><i className="bi bi-diagram-3 me-2 text-success"></i>Scenario analysis tools</li>
        </ul>
        <Link to="/projects" className="btn btn-outline-success mt-3 animate__animated animate__fadeIn animate__delay-2s">
          <i className="bi bi-arrow-left me-2"></i>Back to Projects
        </Link>
      </div>
    </div>
  </div>
);

// Main Portfolio Component with color coordination
const Portfolio = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <style>{fontStyle}</style>
      <div className={`portfolio-container ${darkMode ? 'dark-mode' : ''}`}>
        {/* Color-coordinated Navbar */}
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled shadow-sm' : ''} ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
          <div className="container">
            <Link className="navbar-brand fw-bold animate__animated animate__fadeIn" to="/">
              <i className="bi bi-code-square me-2 text-primary"></i>Marion Wambui
            </Link>
            
            <div className="d-flex align-items-center">
              <button 
                className={`dark-mode-toggle btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'} me-3`}
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
              </button>
              
              <button 
                className="navbar-toggler" 
                type="button" 
                onClick={() => setNavOpen(!navOpen)}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            
            <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/#about" onClick={() => setNavOpen(false)}>
                    <i className="bi bi-person me-1 text-primary"></i>About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skills" onClick={() => setNavOpen(false)}>
                    <i className="bi bi-tools me-1 text-primary"></i>Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects" onClick={() => setNavOpen(false)}>
                    <i className="bi bi-folder me-1 text-primary"></i>Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education" onClick={() => setNavOpen(false)}>
                    <i className="bi bi-mortarboard me-1 text-primary"></i>Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={() => setNavOpen(false)}>
                    <i className="bi bi-envelope me-1 text-primary"></i>Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/webdev-project" element={<WebDevProject />} />
          <Route path="/dataanalysis-project" element={<DataAnalysisProject />} />
          <Route path="/" element={<MainContent darkMode={darkMode} />} />
          <Route path="/projects" element={<MainContent darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

// SkillBar Component with consistent coloring
const SkillBar = ({ name, level, icon, color = 'primary' }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="col-md-4 col-6 mb-4 animate__animated animate__fadeIn">
      <div className={`skill-card p-4 text-center shadow-sm rounded h-100 ${color === 'primary' ? 'bg-primary-light' : 'bg-light'}`}>
        <div className={`skill-icon-container bg-white rounded-circle mb-3 mx-auto p-3`}>
          <i className={`bi ${icon} skill-icon fs-4 text-${color}`}></i>
        </div>
        <h5 className={`text-${color === 'primary' ? 'dark' : color}`}>{name}</h5>
        <div className="progress mt-2 bg-white" style={{ height: '8px' }}>
          <div 
            className={`progress-bar bg-${color}`} 
            role="progressbar" 
            style={{ width: animated ? `${level}%` : '0%', transition: 'width 1.5s ease-in-out' }}
            aria-valuenow={level}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <small className={`text-${color === 'primary' ? 'dark' : color} mt-2 d-block`}>{level}% proficiency</small>
      </div>
    </div>
  );
};

// Main Content Component with organized sections
const MainContent = ({ darkMode }) => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section with coordinated colors */}
      <section id="hero" className={`hero-section position-relative text-center d-flex align-items-center ${visibleSections.includes('hero') ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className="hero-overlay bg-primary-dark opacity-75"></div>
        <div className="container py-5 mt-5">
          <div className="hero-content text-white">
            <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">Marion Wambui</h1>
            <p className="lead fs-4 mb-4 animate__animated animate__fadeIn animate__delay-1s">
              <i className="bi bi-laptop me-2"></i>Aspiring IT Technician | Year 2 - Kamukunji TVC
            </p>
            <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeIn animate__delay-2s">
              <a href="contact" className="btn btn-primary btn-lg px-4 py-3">
                <i className="bi bi-send me-2"></i>Hire Me
              </a>
              <a href="projects" className="btn btn-outline-light btn-lg px-4 py-3">
                <i className="bi bi-folder me-2"></i>View My Work
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-down animate__animated animate__bounce animate__infinite animate__delay-3s">
          <a href="about" className="text-white">
            <i className="bi bi-chevron-down fs-4"></i>
          </a>
        </div>
      </section>

      {/* About Section with consistent styling */}
      <section id="about" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light'} ${visibleSections.includes('about') ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="profile-image-container mx-auto animate__animated animate__zoomIn">
                <img 
                  src="cos.png" 
                  alt="Marion Wambui" 
                  className="img-fluid rounded shadow-lg"
                />
                <div className="tech-icons">
                  <div className="icon html animate__animated animate__bounceIn animate__delay-1s bg-primary-light">
                    <i className="bi bi-filetype-html text-primary"></i>
                  </div>
                  <div className="icon css animate__animated animate__bounceIn animate__delay-2s bg-primary-light">
                    <i className="bi bi-filetype-css text-primary"></i>
                  </div>
                  <div className="icon excel animate__animated animate__bounceIn animate__delay-3s bg-success-light">
                    <i className="bi bi-file-earmark-excel text-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-start">
              <h2 className="section-title mb-4 animate__animated animate__fadeInDown">
                <i className="bi bi-person-lines-fill me-3 text-primary"></i>About Me
              </h2>
              <p className="lead animate__animated animate__fadeIn animate__delay-1s">
                Hello! I'm Marion Wambui, a passionate IT student currently pursuing my Certificate at Kamukunji Technical and Vocational College.
              </p>
              <p className="animate__animated animate__fadeIn animate__delay-1s">
                At 20 years old, I'm deeply fascinated by technology and its potential to solve real-world problems. My journey in IT has equipped me with foundational skills in various technologies.
              </p>
              
              <div className="about-details mt-4 animate__animated animate__fadeIn animate__delay-2s">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-item mb-3">
                      <span className="detail-label"><i className="bi bi-calendar me-2 text-primary"></i>Age:</span>
                      <span className="detail-value">20</span>
                    </div>
                    <div className="detail-item mb-3">
                      <span className="detail-label"><i className="bi bi-geo-alt me-2 text-primary"></i>Location:</span>
                      <span className="detail-value">Nairobi, Kenya</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-item mb-3">
                      <span className="detail-label"><i className="bi bi-book me-2 text-primary"></i>Education:</span>
                      <span className="detail-value">Certificate in IT</span>
                    </div>
                    <div className="detail-item mb-3">
                      <span className="detail-label"><i className="bi bi-briefcase me-2 text-primary"></i>Status:</span>
                      <span className="detail-value">Seeking Attachment</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 animate__animated animate__fadeIn animate__delay-2s">
                <a href="#contact" className="btn btn-primary me-2">
                  <i className="bi bi-envelope me-2"></i>Contact Me
                </a>
                <a href="#skills" className="btn btn-outline-secondary">
                  <i className="bi bi-tools me-2"></i>My Skills
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with organized categories */}
      <section id="skills" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white'} ${visibleSections.includes('skills') ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title animate__animated animate__fadeInDown">
              <i className="bi bi-tools me-3 text-primary"></i>My Skills
            </h2>
            <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">Technologies I've worked with</p>
          </div>
          
          <div className="row justify-content-center">
            {[
              { name: 'HTML5', level: 85, icon: 'bi-filetype-html', color: 'primary' },
              { name: 'CSS3', level: 80, icon: 'bi-filetype-css', color: 'primary' },
              { name: 'JavaScript', level: 70, icon: 'bi-filetype-js', color: 'primary' },
              { name: 'Python', level: 65, icon: 'bi-filetype-py', color: 'primary' },
              { name: 'Java', level: 60, icon: 'bi-filetype-java', color: 'primary' },
              { name: 'Troubleshooting', level: 85, icon: 'bi-tools', color: 'primary' },
              { name: 'MS Office', level: 90, icon: 'bi-file-earmark-excel', color: 'success' },
              { name: 'Excel', level: 88, icon: 'bi-file-earmark-excel', color: 'success' },
              { name: 'Data Analysis', level: 75, icon: 'bi-bar-chart-line', color: 'success' }
            ].map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section matching existing structure */}
      <section id="projects" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light'} ${visibleSections.includes('projects') ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title animate__animated animate__fadeInDown">
              <i className="bi bi-folder me-3 text-primary"></i>My Projects
            </h2>
            <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">Some of my recent work</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <div className={`card h-100 project-card shadow-sm border-0 hover-effect ${darkMode ? 'bg-secondary' : 'bg-white'}`}>
                <div className="card-body">
                  <div className="project-badge mb-3">
                    <span className="badge bg-primary"><i className="bi bi-globe me-1"></i>Web Development</span>
                  </div>
                  <h3 className="card-title h4">Student Management System</h3>
                  <p className="card-text">
                    Developed a functional mockup of a student record management system with secure login functionality.
                  </p>
                  <div className="tech-tags mb-3">
                    <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark me-1`}>
                      <i className="bi bi-filetype-html me-1"></i>HTML
                    </span>
                    <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark me-1`}>
                      <i className="bi bi-filetype-css me-1"></i>CSS
                    </span>
                    <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark`}>
                      <i className="bi bi-filetype-js me-1"></i>JavaScript
                    </span>
                  </div>
                  <Link to="/webdev-project" className="btn btn-outline-primary">
                    <i className="bi bi-eye me-2"></i>View Details
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 animate__animated animate__fadeInRight">
              <div className={`card h-100 project-card shadow-sm border-0 hover-effect ${darkMode ? 'bg-secondary' : 'bg-white'}`}>
                <div className="card-body">
                  <div className="project-badge mb-3">
                    <span className="badge bg-success"><i className="bi bi-bar-chart-line me-1"></i>Data Analysis</span>
                  </div>
                  <h3 className="card-title h4">Financial Reports Dashboard</h3>
                  <p className="card-text">
                    Created comprehensive financial reports and interactive dashboards using Excel.
                  </p>
                  <div className="tech-tags mb-3">
                    <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark me-1`}>
                      <i className="bi bi-file-earmark-excel me-1"></i>Excel
                    </span>
                    <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark me-1`}>
                      <i className="bi bi-graph-up me-1"></i>Charts
                    </span>
                    <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark`}>
                      <i className="bi bi-table me-1"></i>Pivot Tables
                    </span>
                  </div>
                  <Link to="/dataanalysis-project" className="btn btn-outline-success">
                    <i className="bi bi-eye me-2"></i>View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5 animate__animated animate__fadeIn animate__delay-1s">
            <button className="btn btn-primary">
              <i className="bi bi-collection me-2"></i>View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Education Section with timeline */}
      <section id="education" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white'} ${visibleSections.includes('education') ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title animate__animated animate__fadeInDown">
              <i className="bi bi-mortarboard me-3 text-primary"></i>Education
            </h2>
            <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">My academic journey</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item animate__animated animate__fadeInLeft">
              <div className={`timeline-content ${darkMode ? 'bg-secondary' : 'bg-light'} p-4 rounded shadow-sm hover-effect`}>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-book text-primary fs-4 me-3"></i>
                  <div>
                    <h4 className="mb-0">Certificate in Information Technology</h4>
                    <h5 className="text-muted">Kamukunji Technical and Vocational College</h5>
                  </div>
                </div>
                <div className="timeline-date text-muted mb-3">
                  <i className="bi bi-calendar me-2"></i>2022 - Present
                </div>
                <p>
                  Currently in my second year, focusing on practical IT skills including programming,
                  system administration, and office productivity tools.
                </p>
                <div className="mt-3">
                  <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark me-2`}>
                    <i className="bi bi-code me-1"></i>Programming
                  </span>
                  <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark me-2`}>
                    <i className="bi bi-pc-display me-1"></i>System Admin
                  </span>
                  <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark`}>
                    <i className="bi bi-file-earmark-word me-1"></i>Office Tools
                  </span>
                </div>
              </div>
            </div>
            
            <div className="timeline-item animate__animated animate__fadeInRight">
              <div className={`timeline-content ${darkMode ? 'bg-secondary' : 'bg-light'} p-4 rounded shadow-sm hover-effect`}>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-backpack text-primary fs-4 me-3"></i>
                  <div>
                    <h4 className="mb-0">Kenya Certificate of Secondary Education</h4>
                    <h5 className="text-muted">Secondary School</h5>
                  </div>
                </div>
                <div className="timeline-date text-muted mb-3">
                  <i className="bi bi-calendar me-2"></i>2018 - 2021
                </div>
                <p>
                  Completed my secondary education with a focus on sciences and mathematics,
                  laying the foundation for my technical career.
                </p>
                <div className="mt-3">
                  <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark me-2`}>
                    <i className="bi bi-calculator me-1"></i>Mathematics
                  </span>
                  <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark me-2`}>
                    <i className="bi bi-bezier2 me-1"></i>Physics
                  </span>
                  <span className={`badge ${darkMode ? 'bg-dark' : 'bg-light'} text-dark`}>
                    <i className="bi bi-flower1 me-1"></i>Biology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with coordinated colors */}
      <section id="contact" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light'} ${visibleSections.includes('contact') ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title mb-4 animate__animated animate__fadeInDown">
                <i className="bi bi-envelope-paper me-3 text-primary"></i>Get In Touch
              </h2>
              <p className="lead mb-5 animate__animated animate__fadeIn animate__delay-1s">
                I'm currently looking for attachment opportunities. If you have any questions or would like to discuss potential opportunities, feel free to reach out!
              </p>
              
              <div className={`contact-form-container p-4 rounded shadow-sm ${darkMode ? 'bg-secondary' : 'bg-white'} animate__animated animate__fadeIn animate__delay-2s`}>
                <h4 className="mb-4">
                  <i className="bi bi-send me-2 text-primary"></i>Send me a message
                </h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`} 
                          id="nameInput" 
                          placeholder="Your Name" 
                          required 
                        />
                        <label htmlFor="nameInput"><i className="bi bi-person me-2"></i>Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input 
                          type="email" 
                          className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`} 
                          id="emailInput" 
                          placeholder="Your Email" 
                          required 
                        />
                        <label htmlFor="emailInput"><i className="bi bi-envelope me-2"></i>Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`} 
                          id="subjectInput" 
                          placeholder="Subject" 
                        />
                        <label htmlFor="subjectInput"><i className="bi bi-card-heading me-2"></i>Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea 
                          className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`} 
                          id="messageInput" 
                          placeholder="Your Message" 
                          style={{ height: '150px' }} 
                          required
                        ></textarea>
                        <label htmlFor="messageInput"><i className="bi bi-chat-left-text me-2"></i>Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 py-3">
                        <i className="bi bi-send-fill me-2"></i>Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="contact-methods d-flex flex-wrap justify-content-center gap-3 mt-5 animate__animated animate__fadeIn animate__delay-1s">
                <a href="https://wa.me/254110928039" className="btn btn-success" target="_blank" rel="noreferrer">
                  <i className="bi bi-whatsapp me-2"></i> WhatsApp
                </a>
                <a href="mailto:marion@example.com" className="btn btn-primary">
                  <i className="bi bi-envelope me-2"></i> Email
                </a>
                <a href="https://instagram.com/marion.official" className="btn btn-instagram" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram me-2"></i> Instagram
                </a>
                <a href="tel:+254110928039" className="btn btn-secondary">
                  <i className="bi bi-telephone me-2"></i> Call Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with consistent styling */}
      <footer className={`footer py-4 ${darkMode ? 'bg-darker text-light' : 'bg-gray-dark text-white'}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
              <h5>
                <i className="bi bi-code-square me-2 text-primary"></i>Marion Wambui
              </h5>
              <p className="mb-0">Aspiring IT Technician passionate about technology and innovation.</p>
            </div>
            <div className="col-lg-6">
              <div className="footer-links d-flex justify-content-center justify-content-lg-end gap-3">
                <a href="#about" className="text-reset">
                  <i className="bi bi-person me-1"></i>About
                </a>
                <a href="#skills" className="text-reset">
                  <i className="bi bi-tools me-1"></i>Skills
                </a>
                <a href="#projects" className="text-reset">
                  <i className="bi bi-folder me-1"></i>Projects
                </a>
                <a href="#contact" className="text-reset">
                  <i className="bi bi-envelope me-1"></i>Contact
                </a>
              </div>
              <div className="social-links d-flex justify-content-center justify-content-lg-end gap-3 mt-3">
                <a href="https://wa.me/254110928039" target="_blank" rel="noreferrer" className="text-reset">
                  <i className="bi bi-whatsapp fs-5"></i>
                </a>
                <a href="mailto:marion@example.com" className="text-reset">
                  <i className="bi bi-envelope fs-5"></i>
                </a>
                <a href="https://instagram.com/marion.official" target="_blank" rel="noreferrer" className="text-reset">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-reset">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className={`my-4 ${darkMode ? 'bg-secondary' : 'bg-light'}`} />
          <div className="text-center">
            <small>
              &copy; {new Date().getFullYear()} Marion Wambui. All rights reserved. | Built with ❤️ by Craig
            </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;