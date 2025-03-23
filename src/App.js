import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextSlidingWrapper from './components/item/textSliding';
import TerminalTypingWrapper from './components/item/terminalTyping';
import GlowingFlipCard from './components/item/glowingFlipCard';
import AchievementBadgeWrapper from './components/item/achivementBadge';

import achievements from './data/achievement';
import aboutMe from './data/aboutme';

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
  faRoadBridge,
  faSquareBinary,
  faLaptop
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import profileImg from './assets/img/profile.png';
import profileImgFlipped from './assets/img/profile-flipped.png';

import awsSVG from './assets/icon/AWS-Dark.svg';
import azureSVG from './assets/icon/Azure-Dark.svg';
import terraformSVG from './assets/icon/Terraform-Dark.svg';
import ansibleSVG from './assets/icon/Ansible.svg';
import dockerSVG from './assets/icon/Docker.svg';
import kubernetesSVG from './assets/icon/Kubernetes.svg';
import elkSVG from './assets/icon/Elasticsearch-Dark.svg';
import prometheusSVG from './assets/icon/Prometheus.svg';
import grafanaSVG from './assets/icon/Grafana-Dark.svg';
import kaliSVG from './assets/icon/Kali-Dark.svg';
import linuxSVG from './assets/icon/Linux-Dark.svg';
import ubuntuSVG from './assets/icon/Ubuntu-Dark.svg';
import jenkinsSVG from './assets/icon/Jenkins-Dark.svg';
import gitSVG from './assets/icon/Git.svg';
import githubSVG from './assets/icon/Github-Dark.svg';
import gitlabSVG from './assets/icon/GitLab-Dark.svg';
import bitbucketSVG from './assets/icon/BitBucket-Dark.svg';
import githubActionsSVG from './assets/icon/GithubActions-Dark.svg';
import cloudFlareSVG from './assets/icon/Cloudflare-Dark.svg';
import mongoSVG from './assets/icon/MongoDB.svg';
import postgresSVG from './assets/icon/PostgreSQL-Dark.svg';
import nginxSVG from './assets/icon/Nginx.svg';

import htmlSVG from './assets/icon/HTML.svg';
import cssSVG from './assets/icon/CSS.svg';
import jsSVG from './assets/icon/JavaScript.svg';
import cSVG from './assets/icon/C.svg';
import cppSVG from './assets/icon/CPP.svg';
import csharpSVG from './assets/icon/CS.svg';
import javaSVG from './assets/icon/Java-Dark.svg';
import springSVG from './assets/icon/Spring-Dark.svg';
import powershellSVG from './assets/icon/Powershell-Dark.svg';
import bashSVG from './assets/icon/Bash-Dark.svg';
import pythonSVG from './assets/icon/Python-Dark.svg';
import tensorflowSVG from './assets/icon/TensorFlow-Dark.svg';
import sklearnSVG from './assets/icon/ScikitLearn-Dark.svg';
import pytorchSVG from './assets/icon/PyTorch-Dark.svg';

import markdownSVG from './assets/icon/Markdown-Dark.svg';
import cypressSVG from './assets/icon/Cypress-Dark.svg';
import seleniumSVG from './assets/icon/Selenium.svg';
import postmanSVG from './assets/icon/Postman.svg';
import notionSVG from './assets/icon/Notion-Dark.svg';
import vscodeSVG from './assets/icon/VSCode-Dark.svg';
import vsSVG from './assets/icon/VisualStudio-Dark.svg';
import eclipseSVG from './assets/icon/Eclipse-Dark.svg';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-AstrosNavy to-AstrosNavy shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
          >
            <div className="pt-20 px-6">
              <ul className="space-y-6">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => handleSmoothScroll(e, '#home')}
                    className="nav-item flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faHome} className="text-xl" />
                    <span className="font-medium">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    onClick={(e) => handleSmoothScroll(e, '#project')}
                    className="nav-item flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faCode} className="text-xl" />
                    <span className="font-medium">Project</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#techstack"
                    onClick={(e) => handleSmoothScroll(e, '#techstack')}
                    className="nav-item flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faLaptopCode} className="text-xl" />
                    <span className="font-medium">Tech Stack</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#achievement"
                    onClick={(e) => handleSmoothScroll(e, '#achievement')}
                    className="nav-item flex items-center space-x-4 text-white hover:bg-AstrosNavy rounded-lg p-3 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faTrophy} className="text-xl" />
                    <span className="font-medium">Achievement</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    onClick={(e) => handleSmoothScroll(e, '#education')}
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
          <TextSlidingWrapper className="profile--intro mt-8 entrance">
            <button className="button" data-text="Awesome">
              <span className="actual-text font-mono">&nbsp;Hi!&nbsp;I'm&nbsp;TRAN&nbsp;HOANG&nbsp;KHANG&nbsp;</span>
              <span aria-hidden="true" className="hover-text font-mono">&nbsp;Hi!&nbsp;I'm&nbsp;TRAN&nbsp;HOANG&nbsp;KHANG&nbsp;</span>
            </button>
          </TextSlidingWrapper>
          <p className="profile--role mt-4 entrance">Professional DevSecOps Engineer & Solution Architect Expert</p>
          <TerminalTypingWrapper className="mt-8 terminal-typing-entrance">
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
        <h2 className="section-title">About Me</h2>
        <div className="carousel-container">
          <div className="carousel flex justify-center items-center">
            {aboutMe.data.map((card, index) => (
              <div
                key={index}
                className={`carousel-card ${currentCard === index ? 'current' : currentCard === (index + 1) % 3 ? 'right' : 'left'}`}
              >
                <img src={card.image} alt={`Card ${index + 1}`} className="carousel-card-image" />
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center justify-center w-[600px] gap-20'>
            <div className="carousel-text">
              {aboutMe.data.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-paragraph ${currentCard === index ? 'active' : 'hidden'}`}
                >
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className='flex justify-center gap-4'>
              <button className="carousel-button" onClick={() => setCurrentCard((prev) => (prev - 1 + 3) % 3)}>
                Previous
              </button>
              <button className="carousel-button" onClick={() => setCurrentCard((prev) => (prev + 1) % 3)}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="project" className="container--section">
        <h2 className="section-title">PROJECT</h2>

      </div>
      <div id="techstack" className="container--section">
        <h2 className="section-title">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-1">
          <div className="m-8 bg-white-700 max-w-[450px] rounded-2xl hover:bg-white-900 hover:scale-110 duration-700 p-5 gradient-border box-content grow-3">
            <div className="flex items-center space-x-2 border-b-2">
              <FontAwesomeIcon icon={faRoadBridge} className="text-xl mr-4" style={{ color: 'var(--color-smooth-blue)' }} />
              <h4 className="py-2 font-bold font-Montserrat uppercase" style={{ color: 'var(--color-smooth-blue)' }}>Devops - Cloud Platform - Infrastructure</h4>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={awsSVG} alt="My SVG" />
                <p>AWS</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={azureSVG} alt="My SVG" />
                <p>Azure</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={terraformSVG} alt="My SVG" />
                <p>Terraform</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={ansibleSVG} alt="My SVG" />
                <p>Ansible</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={dockerSVG} alt="My SVG" />
                <p>Docker</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={kubernetesSVG} alt="My SVG" />
                <p>Kubernetes</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={elkSVG} alt="My SVG" />
                <p>ELK</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={prometheusSVG} alt="My SVG" />
                <p>Prometheus</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={grafanaSVG} alt="My SVG" />
                <p>Grafana</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={kaliSVG} alt="My SVG" />
                <p>Kali</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={linuxSVG} alt="My SVG" />
                <p>Linux</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={ubuntuSVG} alt="My SVG" />
                <p>Ubuntu</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={jenkinsSVG} alt="My SVG" />
                <p>Jenkins</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={gitSVG} alt="My SVG" />
                <p>Git</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={githubSVG} alt="My SVG" />
                <p>GitHub</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={gitlabSVG} alt="My SVG" />
                <p>GitLab</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={bitbucketSVG} alt="My SVG" />
                <p>BitBucket</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={githubActionsSVG} alt="My SVG" />
                <p>GitHub Actions</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={cloudFlareSVG} alt="My SVG" />
                <p>CloudFlare</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={mongoSVG} alt="My SVG" />
                <p>MongoDB</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={postgresSVG} alt="My SVG" />
                <p>PostgreSQL</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={nginxSVG} alt="My SVG" />
                <p>Nginx</p>
              </div>
            </div>
          </div>
          <div className="m-8 bg-white-700 max-w-[300px] rounded-xl hover:bg-white-900 hover:scale-110 duration-700 p-5 gradient-border box-content grow-2">
            <div className="flex items-center space-x-2 border-b-2">
              <FontAwesomeIcon icon={faSquareBinary} className="text-xl mr-4" style={{ color: 'var(--color-smooth-blue)' }} />
              <h4 className="py-2 font-bold font-Montserrat uppercase" style={{ color: 'var(--color-smooth-blue)' }}>Programming language & Frameworks</h4>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={htmlSVG} alt="My SVG" />
                <p>HTML</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={cssSVG} alt="My SVG" />
                <p>CSS</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={jsSVG} alt="My SVG" />
                <p>Javascript</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={cSVG} alt="My SVG" />
                <p>C</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={cppSVG} alt="My SVG" />
                <p>C++</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={csharpSVG} alt="My SVG" />
                <p>C#</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={javaSVG} alt="My SVG" />
                <p>Java</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={springSVG} alt="My SVG" />
                <p>Spring</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={powershellSVG} alt="My SVG" />
                <p>Powershell</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={bashSVG} alt="My SVG" />
                <p>Bash</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={pythonSVG} alt="My SVG" />
                <p>Python</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={tensorflowSVG} alt="My SVG" />
                <p>Tensorflow</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={sklearnSVG} alt="My SVG" />
                <p>Scikit-learn</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={pytorchSVG} alt="My SVG" />
                <p>Pytorch</p>
              </div>
            </div>
          </div>
          <div className="m-8 bg-white-700 max-w-[200px] rounded-xl hover:bg-white-900 hover:scale-110 duration-700 p-5 gradient-border box-content grow-1">
            <div className="flex items-center space-x-2 border-b-2">
              <FontAwesomeIcon icon={faLaptop} className="text-xl mr-4" style={{ color: 'var(--color-smooth-blue)' }} />
              <h4 className="py-2 font-bold font-Montserrat uppercase" style={{ color: 'var(--color-smooth-blue)' }}>Testing - Documentation - Working</h4>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={markdownSVG} alt="My SVG" />
                <p>Markdown</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={cypressSVG} alt="My SVG" />
                <p>Cypress</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={seleniumSVG} alt="My SVG" />
                <p>Selenium</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={postmanSVG} alt="My SVG" />
                <p>Postman</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={notionSVG} alt="My SVG" />
                <p>Notion</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={vscodeSVG} alt="My SVG" />
                <p>VSCode</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={vsSVG} alt="My SVG" />
                <p>Visual Studio</p>
              </div>
              <div className="flex items-center space-x-2 mt-4" style={{ width: '125px' }}>
                <img src={eclipseSVG} alt="My SVG" />
                <p>Eclipse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="achievement" className="container--section">
        <h2 className="section-title">{achievements.name}</h2>
        <div className="flex-container mt-8 mb-8">
          {achievements.data.map((achievement, index) => (
            <GlowingFlipCard>
              <div className="myCard">
                <div className="innerCard">
                  <div className="frontSide">
                    <AchievementBadgeWrapper >
                      <div className="container mt-2 mb-8">
                        <svg className="svg-icon" height={100} preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width={100} x={0} xmlns="http://www.w3.org/2000/svg" y={0}>
                          <path d="M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z">
                          </path>
                        </svg>
                        <div className="container__star">
                          <div className="star-eight" />
                        </div>
                        <div /></div>
                    </AchievementBadgeWrapper>
                    <p className="title uppercase">{achievement.name}</p>
                    <p className="text-center text-xl">{achievement.result}</p>
                  </div>
                  <div className="backSide">
                    <div className="mt-6">
                      <p className="title">{achievement.name}</p>
                      <div className="flex justify-items-start mt-2 ml-5 mr-5">
                        <FontAwesomeIcon icon={faCalendar} className="text-xl" />
                        <span className="font-medium ml-2 text-start">{achievement.yearDate}</span>
                      </div>
                      <div className="flex justify-items-start mt-2 ml-5 mr-5">
                        <FontAwesomeIcon icon={faBuilding} className="text-xl" />
                        <span className="font-medium ml-2 text-start">{achievement.organizer}</span>
                      </div>
                      <div className="flex justify-items-start mt-2 ml-5 mr-5">
                        <FontAwesomeIcon icon={faCommentMedical} className="text-xl" />
                        <span className="font-medium ml-2 text-start">{achievement.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlowingFlipCard>
          ))}

        </div>
      </div>
      <div id="education" className="container--section">
        <h2 className="section-title">Education</h2>
        <p className="text-black text-center">No education at all</p>
      </div>
    </div>
  );
}

export default App;