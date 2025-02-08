import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faCode,
  faLaptopCode, 
  faTrophy,
  faGraduationCap,
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import profileImg from './assets/profile.png';
import profileImgFlipped from './assets/profile-flipped.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      <header className="container--website">
        <div className="relative">
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 left-4 z-50 w-10 h-10 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon 
              icon={isOpen ? faXmark : faBars} 
              className={`text-2xl text-white hover:text-white transition-colors duration-200 hamburger-icon ${isOpen ? 'open' : ''}`}
            />
          </button>

          {/* Navigation Sidebar */}
          <nav
            className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-AstrosNavy to-AstrosNavy shadow-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="pt-20 px-6">
              <ul className="space-y-6">
                <li>
                  <a 
                    href="#home" 
                    className="nav-item flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faHome} className="text-xl" />
                    <span className="font-medium">Home</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#project" 
                    className="nav-item flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faCode} className="text-xl" />
                    <span className="font-medium">Project</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#techstack" 
                    className="nav-item flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faLaptopCode} className="text-xl" />
                    <span className="font-medium">Tech Stack</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#achievement" 
                    className="nav-item flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faTrophy} className="text-xl" />
                    <span className="font-medium">Achievement</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    className="nav-item flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
                    <span className="font-medium">Education</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container--profile">
          <div 
            className="profile--image avatar" 
            style={{ backgroundImage: `url(${isHovered ? profileImgFlipped : profileImg})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>
          <h1 className="profile--intro">Hi! I'm TRAN HOANG KHANG</h1>
          <p className="profile--role">Professional DevSecOps Engineer & Solution Architect Expert</p>
          <div className="profile--social-links">
            <a href="https://github.com/khangtictoc" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </header>
      <div id="home" className="container--section">
      </div>
      <div id="project" className="container--section">
        <h2 className="section-title">PROJECT</h2>
        <div className="project-list">
          <div className="project-item">
            <h3 className="text-2xl font-semibold text-white">Project 1</h3>
            <p className="text-white">Description of project 1.</p>
          </div>
          <div className="project-item">
            <h3 className="text-2xl font-semibold text-white">Project 2</h3>
            <p className="text-white">Description of project 2.</p>
          </div>
          <div className="project-item">
            <h3 className="text-2xl font-semibold text-white">Project 3</h3>
            <p className="text-white">Description of project 3.</p>
          </div>
        </div>
      </div>
      <div id="techstack" className="container--section">
        <h2 className="section-title">TECH STACK</h2>
        <p className="text-white">Hello world 2</p>
      </div>
      <div id="achievement" className="container--section">
        <h2 className="section-title">ACHIEVEMENT</h2>
        <p className="text-white">Hello world 3</p>
      </div>
      <div id="education" className="container--section">
        <h2 className="section-title">EDUCATION</h2>
        <p className="text-white">Hello world 4</p>
      </div>
    </div>
  );
}

export default App;