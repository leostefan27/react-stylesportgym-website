import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const ShowcaseComponent = () => {
  return (
    <section id="showcase-section">
      <div className="dark-tint">
        <div className="container">
          <div className="words">
            <div className="word">
              <span>S</span>
              <span>t</span>
              <span>y</span>
              <span>l</span>
              <span>e</span>
            </div>
            <div className="word">
              <span>S</span>
              <span>p</span>
              <span>o</span>
              <span>r</span>
              <span>t</span>
            </div>
            <div className="word">
              <span>G</span>
              <span>y</span>
              <span>m</span>
            </div>
          </div>

          <div className="showcase-buttons">
            <button onClick={() => {window.location.href = "/#location-section"}}>GET RIPPED</button>
            <a href="https://www.facebook.com/stylesportgym">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com/style_sport_gym/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseComponent;
