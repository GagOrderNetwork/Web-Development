import React from "react";
import { NavLink } from "react-router-dom";

const MyAccount = props => {
  return (
    <section className="myAccount-main">
      <div className="myAccount-container">
        <NavLink to="/live-tv">
          <p className="back-button"> Back </p>
        </NavLink>
        <div className="myAccount-avatar">
          <span> Avatar </span>
        </div>
        <div className="myAccount-content">
          <p> Name </p>
          <p> Shows you&apos;ve watched </p>
          <p> Settings </p>
          <p> Help </p>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
