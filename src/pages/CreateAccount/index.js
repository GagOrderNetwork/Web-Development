import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

class CreateAccount extends React.Component {
  render() {
    return (
      <div className="gn-create_account">
        <div className="gn-create_account-content">
          <h2>Create Account</h2>
          <form>
            <input placeholder="Name:" type="text" />
            <input placeholder="Email:" type="text" />
            <input placeholder="Password:" type="text" />
            <input placeholder="Zip Code" type="text" />
            <input placeholder="Birth Year" type="text" />
            <button type="submit">Submit</button>
            <Link to="/">
              <div className="gn-create_account-back-button">Back</div>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export { CreateAccount };
