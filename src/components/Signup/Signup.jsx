import React, { Component, Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { signUpActions } from "../../actions";
import { Redirect } from "react-router-dom";

import "./Signup.css";

class SignUp extends Component {
  onSubmit(values) {
    //validate password
    let userDetails = {
      name: values.name,
      email: values.email,
      password: values.password
    };
    this.props.dispatch(signUpActions(userDetails));
  }

  render() {
    return (
      <Fragment>
        <div className="SignUp">
          Sign Up
          <h3> Friendly Way To Track Your Repairs</h3>
          <h2> Repair Buddy</h2>
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <Field
              name="name"
              type="text"
              placeholder="Name"
              component="input"
            />
            <Field
              name="email"
              type="email"
              placeholder="Your Email"
              component="input"
            />
            <Field
              name="password"
              type="password"
              placeholder="Password"
              component="input"
            />
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              component="input"
            />

            <button>Create Account</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default reduxForm({
  form: "SignUp"
})(SignUp);
