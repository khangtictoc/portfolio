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

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div class="background-overlay"></div>
      <div className="relative">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 w-10 h-10 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon 
            icon={isOpen ? faXmark : faBars} 
            className="text-2xl text-white hover:text-white transition-colors duration-200"
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
                  className="flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faHome} className="text-xl" />
                  <span className="font-medium">Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="#project" 
                  className="flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faCode} className="text-xl" />
                  <span className="font-medium">Project</span>
                </a>
              </li>
              <li>
                <a 
                  href="#techstack" 
                  className="flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faLaptopCode} className="text-xl" />
                  <span className="font-medium">Tech Stack</span>
                </a>
              </li>
              <li>
                <a 
                  href="#achievement" 
                  className="flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faTrophy} className="text-xl" />
                  <span className="font-medium">Achievement</span>
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
                  <span className="font-medium">Education</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <header class="container--website">
        <div class="container--profile">
          <img class="profile--image avatar" src={profileImg} alt="profile"  />
          <h1 class="profile--intro">Hi! I'm <div class="profile--author-name">TRAN HOANG KHANG</div></h1>
          <p class="profile--role">Long-life DevSecOps Engineer</p>
          <div class="profile--social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" class="social--link">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="social--link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" class="social--link">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
    
  );
}


export default App;