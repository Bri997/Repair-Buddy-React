import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./JobDetail.css";
import Job from "../Job";
import Images from "../Images.jsx";
import { selectJob } from '../../actions';

class JobDetail extends Component {
  constructor(props) {
    super(props);

    this.job = this.props.jobs.find(
      job => job.id == this.props.match.params.id
    );

    this.props.dispatch(selectJob(this.job));
  }

  render() {
    const jobNumber = this.props.match.params.id;
    // const jobs = this.props.jobs.map((job, index) => {
    //   return <Job key={index} job={job} />;
    // });

    // console.log(jobs[1]);
    return (
      <React.Fragment>
        <div className="JobDetail">Job Detail {jobNumber}</div>
        <h1 />
        <div className="JobDetailArea">
          {this.job.jobName} {this.job.jobInfo}
          <Images images={this.job.images} jobId={this.job.id}/>
        </div>
      </React.Fragment>
    );

    //find
    //comp willmount filter props:id then populate
  }
}

const mapStateToProps = (state, ownProps) => ({
  jobs: state.repair.jobs
});
export default connect(mapStateToProps)(JobDetail);
