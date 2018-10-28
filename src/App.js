import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Jobs from "./components/Jobs/Jobs.jsx";
import JobDetail from "./components/Jobs/Job/JobDetail/JobDetail";
import ImageDetail from "./components/ImageDetail/ImageDetail";
import Layout from "./components/Layout/Layout";
import SignUp from "./components/Signup/Signup";
import AddNewJobForm from "./components/Jobs/Job/AddNewJob/AddNewJobForm/AddNewJobForm";
import AddNewImageForm from "./components/Images/AddNewImage/AddNewImageForm/AddNewImageForm";

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
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/JobDetail/:id" component={JobDetail} />
          <Route exact path="/ImageDetail" component={ImageDetail} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/AddNewJobForm" component={AddNewJobForm} />
          <Route exact path="/AddNewImageForm" component={AddNewImageForm} />
        </Layout>
      </Router>
    );
  }
}

export default App;
//parent compnet
