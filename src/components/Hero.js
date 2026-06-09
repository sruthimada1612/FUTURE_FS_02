import React from 'react';

function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Sruthi Mada</span></h1>
        <h2>Full Stack Web Developer</h2>
        <p>Building high-performance web applications with clean architecture and responsive user experiences.</p>
        <a href="#projects" className="btn-primary">View My Work</a>
      </div>
    </header>
  );
}

export default Hero;