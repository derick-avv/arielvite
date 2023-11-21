import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const handleClick = () => {
    const navbar = document.querySelector('.navigation');
    navbar.classList.toggle('open');
    document.body.classList.toggle('stopScroll');
  };

  const handleNavClick = () => {
    const navbar = document.querySelector('.navigation');
    navbar.classList.remove('open');
    document.body.classList.remove('stopScroll');
  };

  return (
    <header className="header">
      <NavLink className="logo" to="/">
        <p>
          <span>A</span>
          <span>V</span>
        </p>
      </NavLink>
      <nav className="navigation">
        <ul className="nav-list">
          <NavLink className="tab-button" to="/" onClick={handleNavClick}>
            Home
          </NavLink>
          <NavLink
            className="tab-button"
            to="/aboutme"
            onClick={handleNavClick}
          >
            About Me
          </NavLink>
          <NavLink
            className="tab-button"
            to="/projects"
            onClick={handleNavClick}
          >
            Projects
          </NavLink>
          <NavLink
            className="tab-button"
            to="/artistry"
            onClick={handleNavClick}
          >
            Artistry
          </NavLink>
          <NavLink
            className="tab-button"
            to="/services"
            onClick={handleNavClick}
          >
            Services
          </NavLink>

          <NavLink
            className="tab-button"
            to="/contact"
            onClick={handleNavClick}
          >
            Contact
          </NavLink>
        </ul>
      </nav>
      <button className="hambrg" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}

export default Header;
