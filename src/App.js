import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextSlidingWrapper from './component/textSliding';
import FlipCardWrapper from './component/flipCard';
import achievements from './data/achievement';
import { 
  faHome, 
  faCode,
  faLaptopCode, 
  faTrophy,
  faGraduationCap,
  faBars,
  faXmark,
  faBuilding,
  faCalendar,
  faCommentMedical,
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
          <TextSlidingWrapper className="profile--intro">
            <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;Hi!&nbsp;I'm&nbsp;TRAN&nbsp;HOANG&nbsp;KHANG&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;Hi!&nbsp;I'm&nbsp;TRAN&nbsp;HOANG&nbsp;KHANG&nbsp;</span>
            </button>
          </TextSlidingWrapper>
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
      <div id="home" className="container--section-home">
      </div>
      <div id="project" className="container--section">
        <h2 className="section-title">PROJECT</h2>
      </div>
      <div id="techstack" className="container--section">
        <h2 className="section-title">TECH STACK</h2>
        
      </div>
      <div id="achievement" className="container--section">
        <h2 className="section-title">{achievements.name}</h2>
        <div className="flex-container">
          {achievements.data.map((achievement, index) => (
            <FlipCardWrapper key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">{achievement.name}</p>
                    <p className="text-center">{achievement.result}</p>
                  </div>
                  <div className="flip-card-back">
                    <div className="mt-6">
                      <p className="title">{achievement.name}</p>
                      <div className="flex justify-items-start mt-2 ml-5 mr-5">
                        <FontAwesomeIcon icon={faCalendar} className="text-xl" />
                        <span className="font-medium ml-2">{achievement.yearDate}</span>
                      </div>
                      <div className="flex justify-items-start mt-2 ml-5 mr-5">
                        <FontAwesomeIcon icon={faBuilding} className="text-xl" />
                        <span className="font-medium ml-2">{achievement.organizer}</span>
                      </div>
                      <div className="flex justify-items-start mt-2 ml-5 mr-5">
                        <FontAwesomeIcon icon={faCommentMedical} className="text-xl" />
                        <span className="font-medium ml-2">{achievement.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FlipCardWrapper>
          ))}
        </div>
      </div>
      <div id="education" className="container--section">
        <h2 className="section-title">EDUCATION</h2>
        <p className="text-white">Hello world 4</p>
      </div>
    </div>
  );
}

export default App;