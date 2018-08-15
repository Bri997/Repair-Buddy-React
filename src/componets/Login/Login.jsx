import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./Login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="LogInArea">
          Log In
          <h3> Friendly Way To Track Your Repairs</h3>
          <h2> Repair Buddy</h2>
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <button>Log In</button>
          <p>Don't have an account?</p>
          <Link to="/singup">Sign Up Here</Link>
        </div>
      </Fragment>
    );
  }
}

export default Login;
