import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Job.css";

// import Image from "../../Images/Image/Image"

import Tags from "../../Tags/Tags";

class Job extends Component {
  state = {};
  render() {
    const image = this.props.job.images.length ? (
      <img width="15%" src={this.props.job.images[0].url} />
    ) : null;
    return (
      <React.Fragment>
        <div className="UserDisplay">
          <div className="JobArea">
            {image}
            <h3>{this.props.job.jobName}</h3>
            <p>{this.props.job.jobInfo}</p>

            <Link to={`/JobDetail/${this.props.job._id}`}>Continue >></Link>

            <p> {this.props.job.id}</p>
            {/* I think this needs to be in the image */}
            {/* <Tags className="Tag" image={this.props.job.images[0]} /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Job;
