import React, { Component } from "react";
import { connect } from "react-redux";
import "./JobDetail.css";

import Images from "../../../Images/Images";
import { selectJob } from "../../../../actions";
import AddNewImage from "../../../Images/AddNewImage/AddNewImage";

class JobDetail extends Component {
  constructor(props) {
    super(props);

    this.job = this.props.jobs.find(
      job => job.id === parseInt(this.props.match.params.id, 10)
    );

    this.props.dispatch(selectJob(this.job));
  }

  render() {
    const jobNumber = this.props.match.params.id;

    return (
      <React.Fragment>
        <div className="JobDetail">Job Detail {jobNumber}</div>
        <AddNewImage />
        <div className="JobDetailArea">
          {this.job.jobName} {this.job.jobInfo}
          <Images width="35%" images={this.job.images} jobId={this.job.id} />
        </div>
        <AddNewImage />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.repair.jobs
});
export default connect(mapStateToProps)(JobDetail);
