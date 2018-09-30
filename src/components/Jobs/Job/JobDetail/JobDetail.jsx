import React, { Component } from "react";
import { connect } from "react-redux";
import "./JobDetail.css";

import Images from "../../../Images/Images";
import { selectJob } from "../../../../actions";
import AddNewImage from "../../../Images/AddNewImage/AddNewImage";

import RemoveJob from "../RemoveJob";

class JobDetail extends Component {
  constructor(props) {
    super(props);

    this.job = this.props.jobs.find(
      job => job._id === this.props.match.params.id
    );

    this.props.dispatch(selectJob(this.job));
  }

  render() {
    const jobNumber = this.props.match.params.id;

    return (
      <React.Fragment>
        <RemoveJob jobId={jobNumber} />
        <div className="JobDetail">Job Detail {jobNumber}</div>
        <AddNewImage />
        <div className="JobDetailArea">
          {this.job.jobName} {this.job.jobInfo}
          <Images width="35%" images={this.job.images} jobId={this.job._id} />
        </div>
        <AddNewImage />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.repair.user.jobs
});
export default connect(mapStateToProps)(JobDetail);
