import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import "./Job.css";

import Tags from "./Tags/Tags";
class Job extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="UserDisplay">
          <div className="JobArea">
            <img src={this.props.job.images[0].url} />
            <h3>{this.props.job.jobName}</h3>
            <p>{this.props.job.jobInfo}</p>

            <Link to={`/JobDetail/${this.props.job.id}`}>Continue >></Link>

            <p> {this.props.job.id}</p>
            <Tags className="Tag" tags={this.props.job.images[0].tags} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Job;
