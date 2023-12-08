import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  useEffect(() => {
    let slideCount = 1;
  }, []);
  const handleArrowClick = () => {};

  return (
    <>
      <div className="section" data-num="1">
        <div className="hero">
          <h1>ARIEL VITE</h1>
        </div>
        <div className="sub">
          Web Development, Real Estate, Sales & Marketing
        </div>
      </div>
      <div className="section" data-num="2">
        <h1 className="pageTitle">Expertise</h1>
        <div className="slider">
          <div className="prev" onClick={handleArrowClick}>
            &#10094;
          </div>
          <div className="next" onClick={handleArrowClick}>
            &#10095;
          </div>
          <div className="slide"></div>
        </div>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="section" data-num="3">
        about
      </div>
      <div className="section" data-num="4">
        projects
      </div>
      <div className="section" data-num="5">
        subscribe & footer
      </div>
    </>
  );
}

export default Home;
