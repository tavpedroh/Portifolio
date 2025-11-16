
import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'; 

import ProfileImage from '../../assets/images/Perfil.png';

const Home = () => {

  const name = "Pedro Henrique Tavares"; 
  const role = "Estudante de SI | Desenvolvedor Front-end (React) | Desenvolvedor Back-end (Java)";
  const pitch = "Em busca da primeira oportunidade para transformar desafios de TI em soluções escaláveis. Foco em aprendizado rápido e desenvolvimento de interfaces com React e JavaScript.";
 return (
    <section className="hero-section">
      <div className="hero-content">
        
        <p className="hero-greeting">👋 Olá, sou o</p>
        
        <h1 className="hero-title">{name}</h1>

        <h2 className="hero-role">{role}</h2>
        
        
        <p className="hero-pitch">
          {pitch}
        </p>

        <div className="hero-cta">

          <Link to="/about" className="cta-button primary-button">
            Minha Trajetória
          </Link>

          <Link to="/projects" className="cta-button secondary-button">
            Ver Projetos
          </Link>
        </div>
      </div>
      
      <div className="hero-image-container">
        <div className="placeholder-image">
          <img src={ProfileImage} alt="Foto de Perfil" />
        </div>
      </div>
    </section>
  );
};

export default Home;