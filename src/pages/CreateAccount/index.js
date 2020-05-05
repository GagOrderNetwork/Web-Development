import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
};

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  next = () => {
    this.props.history.push(`/`);
  };

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let passwordError = "";

    const LOWER = new RegExp(/[a-z]/);
    const UPPER = new RegExp(/[A-Z]/);
    const NUMBER = new RegExp(/\d/);
    const SYMBOL = new RegExp(/[^a-z0-9]/i);

    function validCharacters(val = "") {
      // Minimum_length = "8"
      if (val.length < 8) {
        return false;
      }
      // Require_lowercase = "true"
      if (LOWER.test(val) === false) {
        return false;
      }
      // Require_numbers = "true"
      if (NUMBER.test(val) === false) {
        return false;
      }
      // Require_symbols = "true"
      if (SYMBOL.test(val) === false) {
        return false;
      }
      // Require_uppercase = "true"
      if (UPPER.test(val) === false) {
        return false;
      }
      // Checks passed
      return true;
    }

    if (
      this.state.firstName.length < 3 ||
      this.state.firstName.length >= 50 ||
      this.state.firstName.includes("@") ||
      this.state.firstName.includes(";")
    ) {
      firstNameError = "Invalid First Name";
    }

    if (
      this.state.lastName.length < 3 ||
      this.state.lastName.length >= 50 ||
      this.state.lastName.includes("@") ||
      this.state.lastName.includes(";")
    ) {
      lastNameError = "Invalid Last Name";
    }

    if (this.state.email.includes("/")) {
      emailError = "Invalid Email";
    }

    if (!validCharacters(this.state.password)) {
      passwordError = "Invalid Password";
    }

    if (firstNameError || lastNameError || emailError || passwordError) {
      this.setState({
        errors: { firstName: firstNameError },
        errors: { lastName: lastNameError },
        errors: { email: emailError },
        errors: { password: passwordError }
      });
      return false;
    }

    return true;
  };

  onSubmit = event => {
    event.preventDefault();

    const isValid = this.validate();

    if (isValid) {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      };

      axios
        .post("https://www.geaux.tech/users/add", user)
        .then(res => {
          console.log(res.data);
          this.next();
        })
        .catch(err => console.log("Error: " + err));

      // clear form
      this.setState({ initialState });
    }
  };

  render() {
    return (
      <div className="gn-create_account">
        <div className="gn-create_account-content">
          <h2>Create Account</h2>
          <form onSubmit={this.onSubmit}>
            <input
              name="firstName"
              placeholder="First Name:"
              onChange={this.handleChange}
              type="text"
              value={this.state.firstName}
            />
            <div className="gn-form-error">{this.state.errors.firsttName}</div>
            <input
              name="lastName"
              placeholder="Last Name:"
              onChange={this.handleChange}
              type="text"
              value={this.state.lastName}
            />
            <div className="gn-form-error">{this.state.errors.lastName}</div>
            <input
              name="email"
              placeholder="Email:"
              onChange={this.handleChange}
              type="email"
              value={this.state.email}
            />
            <div className="gn-form-error">{this.state.errors.email}</div>
            <input
              name="password"
              placeholder="Password:"
              onChange={this.handleChange}
              type="password"
              value={this.state.password}
            />
            <div className="gn-form-error">{this.state.errors.password}</div>
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
