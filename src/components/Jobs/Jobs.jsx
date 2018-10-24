import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Jobs.css";

import Job from "../Jobs/Job/Job";
import AddNewJob from "../Jobs/Job/AddNewJob/AddNewJob";

class Jobs extends Component {
  render() {
    const loggedIn = this.props.user != null;

    if (loggedIn) {
      const jobs = this.props.jobs.map((job, index) => {
        return <Job key={index} job={job} history={this.props.history} />;
      });
      return (
        <div>
          <h1
            style={{
              textAlign: "center"
            }}
          >
            Jobs
          </h1>
          <div className="NewJobBtn">
            <AddNewJob />
          </div>

          <div>{jobs}</div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => ({
  jobs: state.repair.user ? state.repair.user.jobs : [],
  user: state.repair.user
});
export default connect(mapStateToProps)(Jobs);
