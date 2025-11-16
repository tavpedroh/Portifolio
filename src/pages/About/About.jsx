
import React from 'react';
import './About.css'; 

const hardSkills = [
  "Java", "JavaScript (ES6+)", "React", "React Native", "Node.js", 
  "HTML5 & CSS3", "Git & GitHub", "TypeScript",
  "SQL & NoSQL", "APIs RESTful", 
  "Python", "Machine Learning (básico)",
  "SASS/SCSS", "Styled Components", "Tailwind CSS",
  "Testes (JUnit/Jest/Testing Library)", "Figma/UX"
];

const experienceData = [
  {
    role: "Estudante de Sistemas de Informação",
    company: "CEFET-RJ",
    duration: "Ago 2023 - Atual",
    description: "Cursando o 5º período do curso de Sistemas de Informação, com foco em desenvolvimento de software, análise de sistemas e banco de dados."
  },
  {
    role: "Curso de Desenvolvimento Front-end (ONE)",
    company: "Alura - Oracle",
    duration: "Jul 2024 - Mai 2025",
    description: "Curso intensivo focado em desenvolvimento Front-end utilizando React, JavaScript, HTML e CSS, com ênfase em boas práticas e projetos práticos."
  },
  {
    role: "Curso de Formação em DevOps (OCI)",
    company: "Alura - Oracle",
    duration: "Jul 2025 - Set 2025",
    description: "Curso sobre práticas e ferramentas DevOps, como o OCI (Oracle Cloud Infrastructure), integração contínua e entrega contínua (CI/CD)."
  },
];

const About = () => {
  return (
        <section className="about-page">
            <h1 className="page-title">Sobre Mim</h1>
            
            <div className="about-section about-intro">
                <p className="about-text">
                    Sou <span>estudante de Sistemas de Informação</span> e busco ativamente a minha primeira oportunidade como Estagiário em TI/Desenvolvimento.
                </p>
                <p className="about-text">
                    Minha paixão é <span>transformar desafios complexos em soluções práticas</span>. Tenho forte interesse em Front-end (<span>React/JavaScript</span>) e Machine Learning, e estou investindo em aprofundar meus conhecimentos em ferramentas como <span>Python, SQL e Git</span>.
                </p>
                <p className="about-text">
                    Durante a graduação, desenvolvi projetos que reforçam minha capacidade de <span>análise de processos e resolução de problemas</span>. Sou movido pela curiosidade, dedicação e pelo desejo de aprender na prática com times que enfrentam desafios reais.
                </p>
                <p className="about-text highlight">
                    Estou pronto para evoluir constantemente e contribuir com resultados, unindo teoria e prática.
                </p>
            </div>
            
            <div className="about-section skills-section">
                <h2 className="section-heading">🛠️ Foco Técnico & Habilidades</h2>
                <div className="skills-grid">
                    {hardSkills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>

            <div className="about-section experience-section">
                <h2 className="section-heading">🎓 Educação e Trajetória de Aprendizado</h2>
                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <div key={index} className={`timeline-item ${exp.type}`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3 className="exp-role">{exp.role}</h3>
                                <p className="exp-company-duration">
                                    **{exp.company}** | *{exp.duration}*
                                </p>
                                <p className="exp-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;