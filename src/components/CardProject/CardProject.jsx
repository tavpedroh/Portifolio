
import React from 'react';

import './CardProject.css'; 


const CardProject = ({ project }) => {

  const { 
    title, 
    description, 
    imageUrl, 
    technologies, 
    repoLink, 
    liveLink 
  } = project;

  return (
    <div className="project-card">
      <div className="card-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={`Capa do projeto ${title}`} className="card-image" />
        ) : (
          <div className="card-image placeholder-image-card">
            Imagem do Projeto {title}
          </div>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        <p className="card-description">{description}</p>
        
        <div className="card-technologies">
          <p>Tecnologias:</p>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="card-links">
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="card-link repo-link">
            Código (GitHub)
          </a>
          
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="card-link live-link">
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;