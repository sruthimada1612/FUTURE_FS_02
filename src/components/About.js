import React from 'react';

function About() {
  const skills = {
    languages: ["Python", "C++", "JavaScript", "HTML/CSS"],
    frameworks: ["React.js", "Node.js", "Express.js"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Agile/Scrum"]
  };

  return (
    <section id="about" className="about-section">
      <h2>About Me & Skills</h2>
      <p className="about-bio">
        I am a dedicated B.Tech engineering student focused on building optimized full-stack applications. 
        I enjoy solving complex algorithmic problems and designing functional database schemas.
      </p>
      <div className="skills-grid">
        <div className="skills-category">
          <h3>Languages</h3>
          <ul>{skills.languages.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div className="skills-category">
          <h3>Frameworks</h3>
          <ul>{skills.frameworks.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div className="skills-category">
          <h3>Databases</h3>
          <ul>{skills.databases.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div className="skills-category">
          <h3>Tools & Workflows</h3>
          <ul>{skills.tools.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

export default About;