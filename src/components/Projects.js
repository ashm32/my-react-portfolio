import React from 'react';
import Project from './components/Project.js';
import projectsData from './components/projectsData.js';
import './assests/css/style.css';
function Projects() {
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="projects">
        {projectsData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
