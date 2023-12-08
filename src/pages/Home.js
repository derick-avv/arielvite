import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  let count = 1;

  const handleArrowClick = () => {
    if (count === 5) count = 0;
    count += 1;
    const nextSection = document.querySelector(`[data-num='${count}']`);
    nextSection.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  return (
    <div className="content">
      <div className="row">
        <div className="arrow-down">
          <i
            className="fa-solid fa-chevron-down"
            onClick={handleArrowClick}
          ></i>
        </div>
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
          <div className="cards">
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <div className="cardImage">
                    <i className="fa-solid fa-briefcase-medical"></i>
                  </div>
                </div>
                <div className="flipCardBack">
                  <div className="cardImage ">
                    <i className="fa-solid fa-briefcase-medical"></i>
                  </div>
                  <div className="cardTitle">
                    <h3>Life and Health Insurance Sales</h3>
                  </div>
                  <div className="cardInfo1">
                    <p>Life, Accident and Health Pre-Licensing</p>
                    <div className="status">
                      <span className="statusDotPen"></span>
                      <p className="statusNamePen">Pending</p>
                    </div>
                  </div>
                  <div className="cardInfo2">
                    <p>Life and Health Insurance License</p>
                    <div className="status">
                      <span className="statusDotPen"></span>
                      <p className="statusNamePen">Pending</p>
                    </div>
                  </div>
                  <div className="cardInfo3">
                    <p>Social Security Certification</p>
                    <div className="status">
                      <span className="statusDotPen"></span>
                      <p className="statusNamePen">Pending</p>
                    </div>
                  </div>

                  <NavLink className="cardInfo4" to="/blog">
                    <div>
                      Keep up with my journey through Bankers Life & Casualty
                      Co.
                    </div>
                    <div className="arrowToBlog">
                      <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <div className="cardImage">
                    <i class="fa-solid fa-house-chimney"></i>
                  </div>
                </div>
                <div className="flipCardBack">
                  <div className="cardImage ">
                    <i class="fa-solid fa-house-chimney"></i>
                  </div>
                  <div className="cardTitle">
                    <h3>Real Estate Wholesaling & Flipping</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <div className="cardImage">
                    <i class="fa-solid fa-file-code"></i>
                  </div>
                </div>
                <div className="flipCardBack">
                  <div className="cardImage ">
                    <i class="fa-solid fa-file-code"></i>
                  </div>
                  <div className="cardTitle">
                    <h3>Fullstack Dev & Marketing</h3>
                  </div>
                  <div className="cardInfo1">
                    <p>Javascript Certification</p>
                    <div className="status">
                      <span className="statusDotAcq"></span>
                      <p className="statusNameAcq">Acquired</p>
                    </div>
                  </div>
                  <div className="cardInfo2">
                    <p>Advanced React Certification</p>
                    <div className="status">
                      <span className="statusDotAcq"></span>
                      <p className="statusNameAcq">Acquired</p>
                    </div>
                  </div>
                  <div className="cardInfo3">
                    <p>PHP 8 & MySQL Certification</p>
                    <div className="status">
                      <span className="statusDotAcq"></span>
                      <p className="statusNameAcq">Acquired</p>
                    </div>
                  </div>
                  <NavLink className="cardInfo4" to="/blog">
                    <div>
                      Take a look at some of my many Frontend and Fullstack
                      projects.
                    </div>
                    <div className="arrowToBlog">
                      <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
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
      </div>
    </div>
  );
}

export default Home;
