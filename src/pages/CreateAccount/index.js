import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PasswordTooltip } from "../../components/PasswordTooltip";

import { FormikField } from "../../components/FormikField";
import { MainNav } from "../../components/MainNav";
import { passwordSchema } from "../../util/schema/password.js";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
  accept: false,
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .max(50, "Cannot exceed ${max} characters")
    .matches(/^((?![<>;"/\\/]+).)*$/, 'Invalid characters: <>;\\"/'),
  lastName: Yup.string()
    .required("Required")
    .max(50, "Cannot exceed ${max} characters")
    .matches(/^((?![<>;"/\\/]+).)*$/, 'Invalid characters: <>;\\"/'),
  email: Yup.string().required("Required"),
  password: passwordSchema.notOneOf(
    [Yup.ref("email")],
    "Password cannot be the same as email"
  ),
  confirm_password: Yup.mixed().test(
    "match",
    "Passwords do not match",
    function () {
      return this.parent.password === this.parent.confirm_password;
    }
  ),
  accept: Yup.string().required(
    "You must accept the Terms & Conditions and Privacy Policy"
  ),
});

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: "", passwordFocused: false };
  }

  next = () => {
    this.props.history.push(`/`);
  };

  onSubmit = (values) => {
    const formatEmail = values.email.toLowerCase();

    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: formatEmail,
      password: values.password,
    };

    axios
      .post("https://www.geaux.tech/users/add", user)
      .then((res) => {
        this.next();
      })
      .catch((error) => {
        if (error.response.data.includes("email", 18)) {
          this.setState({
            error:
              "Account was not created. Email already exist. Please go back and Sign in!",
          });
        }
      });
  };

  onPasswordFocus = () => this.setState({ passwordFocused: true });

  onPasswordBlur = () => this.setState({ passwordFocused: false });

  render() {
    return (
      <div className="gn-create_account">
        <MainNav />
        <h1>
          Stream Free TV <br /> That connects with the real you
        </h1>

        <div className="gn-formik_form-signup">
          <Formik
            initialValues={initialValues}
            onSubmit={this.onSubmit}
            validationSchema={SignupSchema}
          >
            {(props) => {
              return (
                <Form>
                  <FormikField label="First Name" name="firstName" />
                  <FormikField label="Last Name" name="lastName" />
                  <FormikField label="Email" name="email" type="email" />
                  <div className="gn-create_account-password">
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
                  <FormikField
                    label="Confirm Password"
                    name="confirm_password"
                    type="password"
                  />
                  <div className="gn-formik_form_terms">
                    <Field type="checkbox" name="accept" />
                    <span>I agree to the Terms & Conditions</span>
                  </div>
                  <div className="gn-sign_up-error"> {this.state.error}</div>

                  <div className="gn-sign_up-buttons">
                    <Link to="/">
                      <div className="gn-create_account-sign_in-button">
                        Sign In
                      </div>
                    </Link>
                    <button type="sumbit">Sign Up - Free </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

export { CreateAccount };
