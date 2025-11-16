
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        
        <Link to="/">
          Pedro Henrique <span className="logo-highlight">Dev</span>
        </Link>
      </div>
      
      <ul className="navbar-links">
        <li>
          
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;