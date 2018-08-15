import React, { Component, Fragment } from "react";
import Image from "./Image";
class Job extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="UserDisplay">
          <div className="JobArea">
            <Image />
            <h3>{this.props.job.jobName}</h3>
            <p>{this.props.job.jobInfo}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Job;
