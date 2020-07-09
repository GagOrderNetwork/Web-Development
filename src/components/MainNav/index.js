import "./styles.scss";
import React from "react";
import Logo from "./geauxlogo.jpg";

class MainNav extends React.Component {
  render() {
    return (
      <div className="gn-main_nav">
        <a href="https://geaux.tv/">
          <div className="gn-main_nav-logo">
            <img src={Logo} />
          </div>
        </a>
        <div className="gn-main_nav-links">
          <a href="https://geaux.tv/about">About</a>
          <a href="https://geaux.tv/contentcreators">Content Creators</a>
          <a href="https://geaux.tv/advertise">Advertisers</a>
          <a href="https://geaux.tv/contact">Contact</a>
        </div>
      </div>
    );
  }
}

export { MainNav };
