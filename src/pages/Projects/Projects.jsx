
import React from 'react';
import CardProject from '../../components/CardProject/CardProject';
import { projects } from '../../data/projectsData'; 

import './Projects.css'; 

const Projects = () => {
  return (
    <section className="projects-page">
      <h1 className="page-title">Meus Projetos de Destaque</h1>
      <p className="page-subtitle">Uma amostra do meu trabalho em Front-end com React e Back-end com Java.</p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <CardProject 
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;