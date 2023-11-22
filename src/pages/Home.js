import React from 'react';
import { ReactComponent as ReactSvg } from '../img/react.svg';
import { ReactComponent as JsSvg } from '../img/js.svg';
import { ReactComponent as HtmlSvg } from '../img/html.svg';
import { ReactComponent as CssSvg } from '../img/css.svg';
import { ReactComponent as PhpSvg } from '../img/php.svg';
import { ReactComponent as MySqlSvg } from '../img/mysql.svg';
import { ReactComponent as NodejsSvg } from '../img/nodejs.svg';
import { ReactComponent as MongodbSvg } from '../img/mongodb.svg';

function Home() {
  return (
    <div className="content">
      <div className="row">
        <div className="arrow-down">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className="section">
          <div className="hero">
            <h1>ARIEL VITE</h1>
          </div>
        </div>
        <div className="section">
          <h1 className="pageTitle">Expertise</h1>
          <div className="cards">
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <HtmlSvg className="cardImage html" />
                </div>
                <div className="flipCardBack">
                  <HtmlSvg className="cardImage html" />
                  <h3>HTML 5</h3>
                  <h1>HTML Structuring</h1>
                </div>
              </div>
            </div>
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <CssSvg className="cardImage css" />
                </div>
                <div className="flipCardBack">
                  <CssSvg className="cardImage css" />
                  <h3>CSS 3</h3>
                  <h1>Responsive Styling</h1>
                </div>
              </div>
            </div>
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <JsSvg className="cardImage js" />
                </div>
                <div className="flipCardBack">
                  <JsSvg className="cardImage js" />
                  <h3>JavaScript</h3>
                  <h1>Creating Functionality</h1>
                </div>
              </div>
            </div>
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <ReactSvg className="cardImage react" />
                </div>
                <div className="flipCardBack">
                  <ReactSvg className="cardImage react" />
                  <h3>React JS</h3>
                  <h1>Advanced React Development</h1>
                </div>
              </div>
            </div>
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <PhpSvg className="cardImage php" />
                </div>
                <div className="flipCardBack">
                  <PhpSvg className="cardImage php" />
                  <h3>PHP 8</h3>
                  <h1>Server Side Developement</h1>
                </div>
              </div>
            </div>
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <NodejsSvg className="cardImage node" />
                </div>
                <div className="flipCardBack">
                  <NodejsSvg className="cardImage node" />
                  <h3>NodeJS</h3>
                  <h1>NodeJS Server Side Management</h1>
                </div>
              </div>
            </div>
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <MySqlSvg className="cardImage mysql" />
                </div>
                <div className="flipCardBack">
                  <MySqlSvg className="cardImage mysql" />
                  <h3>MySQL</h3>
                  <h1>MySQL Database Management</h1>
                </div>
              </div>
            </div>
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <MongodbSvg className="cardImage mongo" />
                </div>
                <div className="flipCardBack">
                  <MongodbSvg className="cardImage mongo" />
                  <h3>MongoDB</h3>
                  <h1>MongoDB Database Management</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
      </div>
    </div>
  );
}

export default Home;
