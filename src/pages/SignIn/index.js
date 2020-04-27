import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "./geauxlogo.jpg";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  users = [];

  componentDidMount() {
    axios
      .get("https://161.35.53.74:443/users/")
      .then(res => {
        this.users = res.data;
        console.log(this.users);
        return this.users;
      })
      .catch(err => console.log("Error: " + err));
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  onChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const user = this.users.find(
      user =>
        user.email === this.state.email && user.password === this.state.password
    );

    if (user) {
      this.props.history.push(`/player?${user._id}`);
    }
  };

  render() {
    return (
      <div className="gn-sign_in">
        <img src={Logo} />
        <div className="gn-sign_in-container">
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Email"
              onChange={this.onChangeEmail}
              type="text"
            />
            <input
              placeholder="Password"
              onChange={this.onChangePassword}
              type="password"
            />
            <button type="submit">Sign In</button>
          </form>

          <Link to="/create-account">
            <div className="gn-sign_in-link">Create Account</div>
          </Link>

          <Link to="/player">
            <div className="gn-sign_in-guest-link">Continue as Guest</div>
          </Link>
        </div>
      </div>
    );
  }
}

export { SignIn };
