import "./styles.scss";
import React from "react";
import Logo from "./geauxlogo.jpg";
import Avatar from "./avatar2.0.png";
import { If } from "../If";
import ShoppingCart from "../ShoppingCart";

function MainNav(props) {
  return (
    <div className="gn-main_nav">
      <a href="https://geaux.tv/">
        <div className="gn-main_nav-logo">
          <img src={Logo} />
        </div>
      </a>

      <If test={props.userId}>
        <div className="gn-main_nav-account">
          <ShoppingCart />
          <div className="gn-main_nav-avatar">
            <img src={Avatar} />
          </div>
        </div>
      </If>
    </div>
  );
}

export { MainNav };
