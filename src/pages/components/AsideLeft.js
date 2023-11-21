import React from 'react';
import { NavLink } from 'react-router-dom';

function AsideLeft() {
  return (
    <aside className="left">
      <nav className="social">
        <NavLink
          className="social-btn"
          to="https://github.com/derick-avv"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </NavLink>
        <NavLink
          className="social-btn"
          to="https://www.linkedin.com/in/derick-vasquez-686412281/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </NavLink>
        <NavLink
          className="social-btn"
          to="https://instagram.com/"
          target="_blank"
        >
          <i className="fa-brands fa-instagram"></i>
        </NavLink>
        <NavLink
          className="social-btn"
          to="https://pinterest.com/"
          target="_blank"
        >
          <i className="fa-brands fa-pinterest"></i>
        </NavLink>
      </nav>
    </aside>
  );
}

export default AsideLeft;
