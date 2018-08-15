import React, { Fragment } from "react";
import classes from "./Layout.css";
import { Link } from "react-router-dom";

const layout = props => (
  <Fragment>
    <ul className="Navi">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Jobs">Jobs</Link>
      </li>
      <li>
        <Link to="/JobDetail">Job Detail</Link>
      </li>
      <li>
        <Link to="/SignUp">Sign Up</Link>
      </li>
    </ul>

    <main className="Content">{props.children}</main>
  </Fragment>
);

export default layout;
