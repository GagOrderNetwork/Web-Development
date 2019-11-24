import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  render() {
    return (
      <div className="gn-sign_in">
        <h1>Just Geaux With It!! </h1>
        <div className="gn-sign_in-links">
          {/*
          <Link to="/create-account">
            <div className="gn-sign_in-link">Create Account</div>
          </Link>
          <Link to="/">
            <div className="gn-sign_in-link">Sign In</div>
          </Link>
        */}
          <Link to="/player">
            <div className="gn-sign_in-link">Continue as Guest</div>
          </Link>
        </div>
      </div>
    );
  }
}

export { SignIn };
