
import React, { useState } from 'react';
import './Contact.css';


const iconStyle = { marginRight: '10px', fontSize: '1.2rem' };

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ------------------------------------------------------------------
    // AQUI VOCÊ INTEGRARIA SEU BACKEND OU SERVIÇO DE FORMS
    // Ex: window.location.href = `mailto:seuemail@exemplo.com?subject=Contato%20Portfólio&body=Nome:%20${formData.name}%0AEmail:%20${formData.email}%0A%0AMensagem:%20${formData.message}`;
    // Ou usar Formspree, Netlify Forms, etc.
    // ------------------------------------------------------------------
    
    alert('Mensagem enviada! (Simulação)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-page">
      <h1 className="page-title">Entre em Contato</h1>
      <p className="page-subtitle">Estou sempre aberto a novas ideias e oportunidades. Me envie uma mensagem ou me encontre nas redes!</p>

      <div className="contact-container">
        
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Informações e Links</h2>
          <p>
            Prefere comunicação direta? Use os links abaixo:
          </p>
          
          <div className="info-links">
            <a href="mailto:pedroh.tav.p@gmail.com" className="info-link">
              <span style={iconStyle}>📧</span> pedroh.tav.p@gmail.com
            </a>
            
            <a href="https://linkedin.com/in/tavpedroh" target="_blank" rel="noopener noreferrer" className="info-link">
              <span style={iconStyle}>💼</span> LinkedIn
            </a>
            
            <a href="https://github.com/tavpedroh" target="_blank" rel="noopener noreferrer" className="info-link">
              <span style={iconStyle}>🐙</span> GitHub
            </a>
            
            <a href="https://api.whatsapp.com/send?phone=5521988973144" target="_blank" rel="noopener noreferrer" className="info-link">
              <span style={iconStyle}>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;