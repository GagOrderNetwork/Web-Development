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
      password: "",
      error: ""
    };
  }

  users = [];

  componentDidMount() {
    axios
      .get("https://www.geaux.tech/users/")
      .then(res => {
        this.users = res.data;
        console.log(this.users);
        return this.users;
      })
      .catch(err => console.log("Error: " + err));
  }

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const formatEmail = this.state.emai.toLowerCase();

    const user = this.users.find(
      user =>
        user.email === formatEmail && user.password === this.state.password
    );

    if (user) {
      this.props.history.push(`/player?${user._id}`);
      this.setState({ error: "" });
      return;
    }

    this.setState({
      error: "There was an error login into your account. Please try again!"
    });
  };

  render() {
    return (
      <div className="gn-sign_in">
        <img src={Logo} />
        <div className="gn-sign_in-container">
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Email"
              onChange={this.handleChange}
              type="email"
              name="email"
              value={this.state.email}
            />
            <input
              placeholder="Password"
              onChange={this.handleChange}
              type="password"
              name="password"
              value={this.state.password}
            />
            <div className="gn-sign_in-error"> {this.state.error}</div>
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
