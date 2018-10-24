import React, { Component } from "react";
import { connect } from "react-redux";
import "./JobDetail.css";
import { Redirect } from "react-router-dom";
import Images from "../../../Images/Images";

import AddNewImage from "../../../Images/AddNewImage/AddNewImage";

import RemoveJob from "../RemoveJob";

class JobDetail extends Component {
  constructor(props) {
    super(props);

    this.job = this.props.jobs.find(
      job => job._id === this.props.match.params.id
    );
  }

  render() {
    if (!this.props.selctedJob) {
      return <Redirect to="/jobs" />;
    }
    const jobNumber = this.props.match.params.id;

    return (
      <React.Fragment>
        {/* <div className="JobDetail">Job Detail {jobNumber}</div> */}
        <AddNewImage />
        <RemoveJob jobId={jobNumber} />
        <div className="JobDetailArea">
          <h2 style={{ textAlign: "center" }}>{this.job.jobName}</h2>{" "}
          {this.job.jobInfo}
          <Images
            width="650px"
            margin="auto"
            images={this.job.images}
            jobId={this.job._id}
          />
        </div>
        <AddNewImage />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.repair.user,

  selctedJob: state.repair.selectedJob,
  jobs: state.repair.user.jobs
});
export default connect(mapStateToProps)(JobDetail);
