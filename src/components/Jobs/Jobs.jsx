import React, { Component } from "react";
import { connect } from "react-redux";
import "./Jobs.css";

import Job from "../Job";

class Jobs extends Component {
  render() {
    const jobs = this.props.jobs.map((job, index) => {
      return <Job key={index} job={job} />;
    });
    return (
      <div>
        <h1>Jobs</h1>
        <div className="NewJobBtn">
          <a href="#">+ Add New Job</a>
        </div>
        <div>{jobs}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.repair.jobs
});
export default connect(mapStateToProps)(Jobs);