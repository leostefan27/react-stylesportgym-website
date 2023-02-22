import React from "react";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer-section">
      <div className="container">
        <div className="footer">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="Logo"
          />
          <div className="data">
            <p>
              <span>
                <FontAwesomeIcon icon={faMapLocation} />
              </span>
              <span>Str. Orhideelor 28M, Dudu 077041</span>
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>0720 822 973</span>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy;{year} All Rights Reserved To StyleSporyGym</p>
      </div>
    </footer>
  );
};

export default FooterComponent;