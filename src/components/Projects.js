import React from 'react';

const projectData = [
  {
    title: "Online Exam System",
    description: "An administrative web portal engineered with custom relational schemas, comprehensive admin control tools, and responsive layout panels for students.",
    tech: ["React.js", "MySQL", "Node.js"]
  },
  {
    title: "Handwritten Digit Recognition",
    description: "An AI/ML project utilizing a Multi-Layer Perceptron (MLP) architecture to process matrix calculations and classify numerical image datasets accurately.",
    tech: ["Python", "NumPy", "Scikit-Learn"]
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;