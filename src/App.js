import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Jobs from "./components/Jobs/Jobs.jsx";
import JobDetail from "./components/JobDetail/JobDetail";
import ImageDetail from "./components/ImageDetail/ImageDetail";
import Layout from "./components/Layout/Layout";
import SignUp from "./components/Signup/Signup";

class App extends Component {
  render() {
    return (
      // <Layout>
      //   <Login />
      // </Layout>
      <Router>
        <Layout>
          <Route exact path="/" component={Login} />
          <Route exact path="/Jobs" component={Jobs} />
          <Route exact path="/JobDetail/:id" component={JobDetail} />
          <Route exact path="/ImageDetail" component={ImageDetail} />
          <Route exact path="/SignUp" component={SignUp} />
        </Layout>
      </Router>
    );
  }
}

export default App;
//parent compnet
