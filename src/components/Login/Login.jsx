import React, { Component, Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { logInActions } from "../../actions";
import { Link } from "react-router-dom";
import ErrorMessages from "../containers/ErrorMessages";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Login.css";
class Login extends Component {
  onSubmit(values) {
    let userInfo = {
      email: values.email,
      password: values.password
    };

    this.props.dispatch(logInActions(userInfo));
  }

  render() {
    if (this.props.user) {
      return <Redirect to="/jobs" />;
    }
    return (
      <Fragment>
        <div className="LogInArea">
          Log In
          <div className="ContentArea">
            <p>
              Repair buddy is for the professional mechanic and the DYI'er.{" "}
              <br /> Have you ever taken a part something and lose track on how
              it went back together? <br />
              You can now track your repair jobs by taking pictures and add
              informative tags.
            </p>
          </div>
          <h3> Friendly Way To Track Your Repairs</h3>
          <h2> Repair Buddy</h2>
          <h4>
            Testing please use: Email: "test@mail.com" Password: "test123"
          </h4>
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
          <ErrorMessages />
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user: state.repair.user
});
export default connect(mapStateToProps)(
  reduxForm({
    form: "Login"
  })(Login)
);
