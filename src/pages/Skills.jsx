import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js1.png";
import git from "../images/git.png";
import nodejs from "../images/nodejs.png";
import pivotal from '../images/pivotal-tracker.png';
import postgres from "../images/postgresql.png";
import mongo from "../images/mongodb.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwindcss.png";
import figma from "../images/figma.png";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-technical">
        <div>
          <h2 className="tech-skills">technical skills</h2>
        </div>
        <div className="languages">
        <div className="figma">
            <div className="figma-container">
              <img src={figma} alt="Figma Logo" className="figma-image" />
              <p className="figma-text">Figma</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in Figma and have completed several
                projects */}
              </span>
            </div>
          </div>
          <div className="html">
            <div className="html-container">
              <img src={html} alt="HTML Logo" className="html-image" />
              <p className="html-text">HTML</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 3 years of experience in HTML and have completed several
                projects */}
              </span>
            </div>
          </div>
          <div className="css">
            <div className="css-container">
              <img src={css} alt="CSS Logo" className="css-image" />
              <p className="css-text">CSS</p>
            </div>
            <span className="html-desc">
              {/* I have 2years of experience in CSS and have completed several
              projects */}
            </span>
          </div>
          <div className="js">
            <div className="js-container">
              <img src={js} alt="JS Logo" className="js-image" />
              <p className="js-text">JavaScript</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in JS and have completed several
                projects */}
              </span>
            </div>
          </div>
          <div className="trello">
            <div className="trello-container">
              <img src={react} alt="Trello Logo" className="trello-image" />
              <p className="trello-text">ReactJS</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in Trello and have completed several
                projects */}
              </span>
            </div>
          </div>
          <div className="trello">
            <div className="trello-container">
              <img src={redux} alt="Trello Logo" className="trello-image" />
              <p className="trello-text">Redux</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in Trello and have completed several
                projects */}
              </span>
            </div>
          </div>
          <div className="trello">
            <div className="trello-container">
              <img src={tailwind} alt="Trello Logo" className="trello-image" />
              <p className="trello-text">TailwindCSS</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in Trello and have completed several
                projects */}
              </span>
            </div>
          </div>
          <div className="trello">
            <div className="trello-container">
              <img src={nodejs} alt="Trello Logo" className="node-image" />
              <p className="trello-text">NodeJS</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in Trello and have completed several
                projects */}
              </span>
            </div>
          </div><div className="trello">
            <div className="trello-container">
              <img src={postgres} alt="Trello Logo" className="trello-image" />
              <p className="trello-text">Postgres</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in Trello and have completed several
                projects */}
              </span>
            </div>
          </div>
          <div className="trello">
            <div className="trello-container">
              <img src={mongo} alt="Trello Logo" className="trello-image" />
              <p className="trello-text">MongoDB</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in Trello and have completed several
                projects */}
              </span>
            </div>
          </div>   
          <div className="git">
            <div className="git-container">
              <img src={git} alt="GIT Logo" className="git-image" />
              <p className="git-text">&nbsp;Git</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in GIT and have completed several
                projects */}
              </span>
            </div>
          </div>
          <div className="trello">
            <div className="trello-container">
              <img src={pivotal} alt="Trello Logo" className="trello-image" />
              <p className="trello-text">Pivotal tracker</p>
            </div>
            <div>
              <span className="html-desc">
                {/* I have 2years of experience in Trello and have completed several
                projects */}
              </span>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Skills;
