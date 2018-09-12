import React, { Component, Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { logInActions } from "../../actions";
import { Link } from "react-router-dom";

import "./Login.css";
class Login extends Component {
  onSubmit(values) {
    let userInfo = {
      email: values.email,
      password: values.password
    };
    this.props.dispatch(logInActions(userInfo));
  }
  state = {};
  render() {
    return (
      <Fragment>
        <div className="LogInArea">
          Log In
          <h3> Friendly Way To Track Your Repairs</h3>
          <h2> Repair Buddy</h2>
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
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
            <button>Log In</button>
          </form>
          <p>Don't have an account?</p>
          <Link to="/signup">Sign Up Here</Link>
        </div>
      </Fragment>
    );
  }
}

export default reduxForm({
  form: "Login"
})(Login);
