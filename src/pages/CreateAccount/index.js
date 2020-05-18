import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from "formik";
import Logo from "./geauxlogo.jpg";
import * as Yup from "yup";

import { FormikField } from "../../components/FormikField";
import { AppBar, Toolbar } from "@material-ui/core";
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

    debugger;

    axios
      .post("https://www.geaux.tech/users/add", user)
      .then((res) => {
        console.log(res.data);
        this.next();
      })
      .catch((err) => console.log((error: err)));
  };

  render() {
    return (
      <div className="gn-create_account">
        <AppBar position="static">
          <Toolbar>
            {" "}
            <img src={Logo} /> Geaux Network{" "}
          </Toolbar>
        </AppBar>
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
