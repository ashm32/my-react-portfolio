import React from 'react';
import { useParams } from 'react-router-dom';
import './assests/css/style.css';

function Project({ projectsData }) {
  const { projectId } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, deployedLink, githubLink, image } = project;

  return (
    <div>
      <h2>{title}</h2>
      <p>Link to deployed version: <a href={deployedLink}>{deployedLink}</a></p>
      <p>Link to GitHub repository: <a href={githubLink}>{githubLink}</a></p>
      <img src={image} alt={title} />
    </div>
  );
}

export default Project;
