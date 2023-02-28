import React from "react";
import sawa from "../images/sawa.png";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-menu">
        <h2 className="portfolio-heading">Portfolio</h2>
        <p className="portfolio-text">
          I worked on project called Sawa Mobility that aims on providing
          transport service tailored to groups of people such as schools,
          <br />
          office staff and others where all transport fees and trips are
          monitored in one app.
        </p>
        <img src={sawa} alt="sawa image" className="sawa-image" />
      </div>
    </div>
  );
}

export default Portfolio;
