import React from "react";
import downloadImage from "../images/download.png";
import linkedInImage from "../images/linkedin.png";
import twitterImage from "../images/twitter.png";
import githubImage from "../images/github.png";
import profilePic from "../images/scan.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="nav-header" id="nav-header">
      <div className="left">
        <h2 className="heading">Hello, I&#39;m Alex Kagame</h2>
        <h4 className="about-position">full stack software engineer</h4>
        <p className="heading-text">
          I am passionate software engineer who holds bachelor degree in
          <br />
          computer science from Kigali Independent University, <br />I have a
          pleasant personality, I like continuous learning,
          <br />I am open-minded, and I can work in a multicultural environment.
        </p>
        <div className="download">
          <p className="cv">Download CV</p>
          <Link to="./doc/Resume.pdf" download target="_blank">
            <img
              src={downloadImage}
              alt="Dowload logo"
              className="download-image"
            />
          </Link>
        </div>
        <div className="social-medias">
          <a
            href="https://www.linkedin.com/in/alex-kagame-097096132/"
            target="_blank"
          >
            <img
              src={linkedInImage}
              alt="linkedin logo"
              className="linkedin-logo"
            />
          </a>
          <a href="https://twitter.com/kagamealex" target="_blank">
            <img
              src={twitterImage}
              alt="twitter logo"
              className="twitter-logo"
            />
          </a>
          <a href="https://github.com/kagame8732" target="_blank">
            <img src={githubImage} alt="github logo" className="github-logo" />
          </a>
        </div>
      </div>
      <div className="right">
        <img src={profilePic} alt="Profile image" className="logo" />
      </div>
    </div>
  );
}

export default Home;
