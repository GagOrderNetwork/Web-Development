import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { If } from "../../components/If";
import { setUserId } from "../../services/userProfile";

import { FormikField } from "../../components/FormikField";

import { MainNav } from "../../components/MainNav";

const mapDispatchProps = {
  setUserId,
};

const initialResetValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const initialNewPasswordValues = {
  confirmPassword: "",
  password: "",
};

const ResetPasswordInitialSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});

const NewResetPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  confirmPassword: Yup.mixed().test(
    "match",
    "Passwords do not match",
    function () {
      return this.parent.password === this.parent.confirmPassword;
    }
  ),
});

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      email: "",
      passwordResetted: false,
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

  onAccountCheck = (values) => {
    const formatEmail = values.email.toLowerCase();

    const user = this.users.find(
      (user) =>
        user.email === formatEmail &&
        user.firstName === values.firstName &&
        user.lastName === values.lastName
    );

    if (user) {
      this.setState({ email: user.email });
      return;
    }

    this.setState({
      error: "Sorry We couldn't find your Account. Please try again!",
    });
  };

  onPasswordResetSubmit = (values) => {
    const newPassword = {
      email: this.state.email,
      password: values.password,
    };

    axios
      .post("https://www.geaux.tech/users/reset-password", newPassword)
      .then((res) => {
        this.setState({ passwordResetted: true });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  };

  render() {
    return (
      <div className="gn-reset_password">
        <MainNav />
        <div className="gn-formik_form-reset-password">
          <h2>Reset Password</h2>
          <If test={!this.state.email}>
            <p>
              Please enter your information below to proceed through password
              reset.
            </p>
            <Formik
              initialValues={initialResetValues}
              onSubmit={this.onAccountCheck}
              validationSchema={ResetPasswordInitialSchema}
            >
              {() => {
                return (
                  <Form>
                    <FormikField
                      label="First Name"
                      name="firstName"
                      type="text"
                    />
                    <FormikField
                      label="Last Name"
                      name="lastName"
                      type="text"
                    />
                    <FormikField label="Email" name="email" type="email" />
                    <div className="gn-sign_in-error"> {this.state.error}</div>
                    <button type="sumbit">Submit</button>
                  </Form>
                );
              }}
            </Formik>
          </If>
          <If test={this.state.email && !this.state.passwordResetted}>
            <p>
              Awesome! we was able to find your account. Select a new Password.
            </p>
            <Formik
              initialValues={initialNewPasswordValues}
              onSubmit={this.onPasswordResetSubmit}
              validationSchema={NewResetPasswordSchema}
            >
              {() => {
                return (
                  <Form>
                    <FormikField
                      label="Password"
                      name="password"
                      type="password"
                    />
                    <FormikField
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                    />
                    <div className="gn-sign_in-error"> {this.state.error}</div>
                    <button type="sumbit">Reset Password</button>
                  </Form>
                );
              }}
            </Formik>
          </If>
          <If test={this.state.email && this.state.passwordResetted}>
            <p>
              Thank you! Your password has been updated please{" "}
              <Link to="/">
                <div className="gn-reset_password-link">Sign In!</div>
              </Link>
            </p>
          </If>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchProps)(ResetPassword);
