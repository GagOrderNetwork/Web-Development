import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { FormikField } from "../../components/FormikField";
import { MainNav } from "../../components/MainNav";
import { passwordSchema } from "../../util/schema/password.js";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
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
});

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: "" };
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

  render() {
    return (
      <div className="gn-create_account">
        <MainNav />
        <h1>Join the Family!</h1>
        <p>
          There will be benefits offered to members! Sign up and stay tuned.
        </p>
        <div className="gn-formik_form-signup">
          <h2>Create your account!</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={this.onSubmit}
            validationSchema={SignupSchema}
          >
            {({ dirty, isValid }) => {
              return (
                <Form>
                  <FormikField label="First Name" name="firstName" />
                  <FormikField label="Last Name" name="lastName" />
                  <FormikField label="Email" name="email" type="email" />
                  <FormikField
                    label="Password"
                    name="password"
                    type="password"
                  />
                  <div className="gn-sign_up-error"> {this.state.error}</div>

                  <button disabled={!dirty || !isValid} type="sumbit">
                    Submit{" "}
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <Link to="/">
          <div className="gn-create_account-back-button">Back</div>
        </Link>
      </div>
    );
  }
}

export { CreateAccount };
