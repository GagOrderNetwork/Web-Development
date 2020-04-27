import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value
    });
  };

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

  next = () => {
    this.props.history.push(`/`);
  };

  onSubmit = event => {
    event.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);

    axios
      .post("https://161.35.53.74:443/users/add", user)
      .then(res => {
        console.log(res.data);
        this.next();
      })
      .catch(err => console.log("Error: " + err));
  };

  render() {
    return (
      <div className="gn-create_account">
        <div className="gn-create_account-content">
          <h2>Create Account</h2>
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="First Name:"
              onChange={this.onChangeFirstName}
              type="text"
            />
            <input
              placeholder="Last Name:"
              onChange={this.onChangeLastName}
              type="text"
            />
            <input
              placeholder="Email:"
              onChange={this.onChangeEmail}
              type="text"
            />
            <input
              placeholder="Password:"
              onChange={this.onChangePassword}
              type="password"
            />
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
