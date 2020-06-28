import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "./geauxlogo.jpg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { setUserId } from "../../services/userProfile";

import { FormikField } from "../../components/FormikField";
import { AppBar, Toolbar } from "@material-ui/core";

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
      this.props.history.push(`/player?${user._id}`);
      this.setState({ error: "" });
      return;
    }

    this.setState({
      error: "Incorrect Email and Password. Please try again!",
    });
  };

  render() {
    return (
      <div className="gn-sign_in">
        <AppBar position="static">
          <Toolbar>
            {" "}
            <img src={Logo} /> Geaux Network{" "}
          </Toolbar>
        </AppBar>
        <h1>Just Geaux with it! 🎉</h1>
        <div className="gn-formik_form-signin">
          <h2>Sign In</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={this.onSubmit}
            validationSchema={SigninSchema}
          >
            {({ dirty, isValid }) => {
              return (
                <Form>
                  <FormikField label="Email" name="email" type="email" />
                  <FormikField
                    label="Password"
                    name="password"
                    type="password"
                  />
                  <div className="gn-sign_in-error"> {this.state.error}</div>
                  <button disabled={!dirty || !isValid} type="sumbit">
                    Submit{" "}
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>

        <Link to="/create-account">
          <div className="gn-sign_in-link">Create Account</div>
        </Link>

        <Link to="/player">
          <div className="gn-sign_in-guest-link">Continue as Guest</div>
        </Link>
      </div>
    );
  }
}

export default connect(null, mapDispatchProps)(SignIn);
