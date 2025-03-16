import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextSlidingWrapper from './component/textSliding';
import FlipCardWrapper from './component/flipCard';
import TerminalTypingWrapper from './component/terminalTyping';
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
            className="profile--image" 
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
          <TerminalTypingWrapper>
            <div className="card">
              <div className="wrap">
                <div className="terminal">
                  <hgroup className="head">
                    <p className="title">
                      <svg width="16px" height="16px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none">
                        <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" />
                      </svg>
                      Terminal
                    </p>
                    <button className="copy_toggle" tabIndex={-1} type="button">
                      <svg width="16px" height="16px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none">
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                      </svg>
                    </button>
                  </hgroup>
                  <div className="body">
                    <pre className="pre">{"          "}<code>-&nbsp;</code>{"\n"}{"          "}<code>sudo&nbsp;apt&nbsp;install&nbsp;</code>{"\n"}{"          "}<code className="cmd" data-cmd="everything-in-the-world" />{"\n"}{"        "}</pre>
                  </div>
                </div>
              </div>
            </div>
          </TerminalTypingWrapper>
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