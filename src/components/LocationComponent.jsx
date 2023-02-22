import React from "react";
import {
  faPhone,
  faMapLocation,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LocationComponent = () => {
  return (
    <section id="location-section">
      <div className="container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.0926354057433!2d25.981098215523797!3d44.45177167910195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2013bbaa6246d%3A0x478b1771c9ca877b!2sStyleSportGym!5e0!3m2!1sen!2sro!4v1677020710178!5m2!1sen!2sro"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen="yes"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="info">
          <h2>Find us here</h2>
          <p>
            <span className="infoIcon">
              <FontAwesomeIcon icon={faMapLocation} />
            </span>
            Str. Orhideelor 28M, Dudu 077041
          </p>
          <p>
            <span className="infoIcon">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            0720 822 973
          </p>
          <p>
            <span className="infoIcon">
              <FontAwesomeIcon icon={faClock} />
            </span>
            Program
          </p>
          <ul className="workingHours">
            <li>
              <span>Monday </span>
              <span>8AM - 10PM</span>
            </li>
            <li>
              <span>Tuesday </span>
              <span>8AM - 10PM</span>
            </li>
            <li>
              <span>Wednesday </span>
              <span>8AM - 10PM</span>
            </li>
            <li>
              <span>Thursday </span>
              <span>8AM - 10PM</span>
            </li>
            <li>
              <span>Friday </span>
              <span>8AM - 10PM</span>
            </li>
            <li>
              <span>Saturday </span>
              <span>8AM - 9PM</span>
            </li>
            <li>
              <span>Sunday </span>
              <span>8AM - 9PM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LocationComponent;
