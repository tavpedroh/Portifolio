    
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        <div className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">Sobre Mim</Link>
          <Link to="/projects" className="footer-link">Projetos</Link>
          <Link to="/contact" className="footer-link">Contato</Link>
        </div>


        <div className="footer-social">
          <a 
            href="https://github.com/tavpedroh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            title="GitHub"
          >
            
            <span role="img" aria-label="GitHub">🐙</span>
          </a>
          <a 
            href="https://linkedin.com/in/tavpedroh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            title="LinkedIn"
          >
            
            <span role="img" aria-label="LinkedIn">💼</span>
          </a>
        </div>

        
        <p className="footer-copyright">
          © {currentYear} Pedro Henrique Tavares Pinto. Desenvolvido com React & Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;