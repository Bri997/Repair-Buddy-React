import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./componets/Login/Login";
import Jobs from "./componets/Jobs/Jobs.jsx";
import JobDetail from "./componets/JobDetail/JobDetailbs";
import ImageDetail from "./componets/ImageDetail/ImageDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/jobs">Jobs</Link>
          <Route exact path="/" Component={Login} />
          <Route exact path="/jobs" Component={Jobs} />
          <Route exact path="/JobDetail" Component={JobDetail} />
          <Route exact path="/ImageDetail" Component={ImageDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
//parent compnet
