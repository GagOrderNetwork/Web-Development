import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.js";

const Welcome = props => {
  return (
    <section className="welcome-main">
      <div className="welcome-container">
        <div className="welcome-logo">
          <Logo />
        </div>

        <div className="welcome-LiveTv-buttons">
          <div className="welcome-LiveTv-button">
            <a href="https://geauxnet.com">
              <span>Home</span>
            </a>
          </div>
          <div className="welcome-LiveTv">
            <NavLink to="/live-tv">
              <div className="welcome-LiveTv-button">
                <span>Geaux TV</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
