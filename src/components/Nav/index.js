import "./styles.scss";
import gear from "./gearIcon.png";
import house from "./houseIcon.png";
import avatar from "./avatarIcon.jpg";
import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div className="gn-nav">
        <a href="https://www.geauxnet.com">
          <img src={house} />
        </a>
      </div>
    );
  }
}

export { Nav };
