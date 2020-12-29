import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { setUserId } from "../../services/userProfile";
import { PasswordTooltip } from "../../components/PasswordTooltip";

import { FormikField } from "../../components/FormikField";

import { MainNav } from "../../components/MainNav";

const mapDispatchProps = {
  setUserId,
};

const initialValues = {
  password: "",
  email: "",
};

const SigninSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      passwordFocused: false,
    };
  }

  users = [];

  componentDidMount() {
    axios
      .get("https://www.geaux.tech/users/")
      .then((res) => {
        this.users = res.data;
        return this.users;
      })
      .catch((err) => console.log("Error: " + err));
  }

  onSubmit = (values) => {
    const formatEmail = values.email.toLowerCase();

    const user = this.users.find(
      (user) => user.email === formatEmail && user.password === values.password
    );

    if (user) {
      this.props.setUserId({ userId: user._id });
      this.props.history.push(`/player`);
      this.setState({ error: "" });
      return;
    }

    this.setState({
      error: "Incorrect Email and Password. Please try again!",
    });
  };

  onPasswordFocus = () => this.setState({ passwordFocused: true });

  onPasswordBlur = () => this.setState({ passwordFocused: false });

  render() {
    return (
      <div className="gn-sign_in">
        <MainNav />
        <div className="gn-formik_form-signin">
          <h2>Welcome Back!</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={this.onSubmit}
            validationSchema={SigninSchema}
          >
            {(props) => {
              return (
                <Form>
                  <FormikField label="Email" name="email" type="email" />
                  <div className="gn-sign_in-password">
                    <FormikField
                      label="Password"
                      name="password"
                      type="password"
                      onBlur={this.onPasswordBlur}
                      onFocus={this.onPasswordFocus}
                    />
                    <PasswordTooltip
                      isFocused={this.state.passwordFocused}
                      password={props.values.password}
                    />
                  </div>
                  <div className="gn-sign_in-error"> {this.state.error}</div>
                  <button type="sumbit">Sign In</button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="gn-sign_in-link-text">
          Forgot Password?
          <Link to="/reset-password">
            {" "}
            <div className="gn-sign_in-link">Click Here</div>
          </Link>
        </div>
        <div className="gn-sign_in-link-text">
          Don't have an account?
          <Link to="/create-account">
            {" "}
            <div className="gn-sign_in-link">Sign Up</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchProps)(SignIn);
