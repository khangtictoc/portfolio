import React, { useState } from 'react';
import { FaBars, FaHome, FaUser, FaProjectDiagram, FaTools, FaTrophy, FaGraduationCap } from 'react-icons/fa';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="App">
      <div className="hamburger-icon" onClick={toggleNav}>
        <FaBars size={30} />
      </div>
      <div className={`nav-menu ${showNav ? 'show' : ''}`}>
        <a href="#home"><FaHome /> Home</a>
        <a href="#about"><FaUser /> About Me</a>
        <a href="#project"><FaProjectDiagram /> Project</a>
        <a href="#techstack"><FaTools /> Techstack</a>
        <a href="#achievement"><FaTrophy /> Achievement</a>
        <a href="#education"><FaGraduationCap /> Education</a>
      </div>
      <div className="main-content">
        <img src="/profile.jpg" alt="Profile" className="profile-image" />
        <h1>Hi! I am <u>KHANG HOANG TRAN</u></h1>
        <h2>DevSecOps Expert</h2>
      </div>
    </div>
  );
}

export default App;