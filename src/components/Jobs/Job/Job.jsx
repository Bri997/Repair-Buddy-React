import React, { Component } from "react";
import "./Job.css";
import { connect } from "react-redux";
import { selectJob } from "../../../actions";

class Job extends Component {
  state = {};
  redirect() {
    this.props.dispatch(selectJob(this.props.job));
    this.props.history.push(`/JobDetail/${this.props.job._id}`);
  }
  render() {
    const image = this.props.job.images.length ? (
      <img
        width="15%"
        src={"http://localhost:3000/newuploads/" + this.props.job.images[0].url}
      />
    ) : null;
    return (
      <React.Fragment>
        <div className="UserDisplay">
          <div className="JobArea">
            {image}
            <h3>{this.props.job.jobName}</h3>
            <p>{this.props.job.description}</p>

            <button onClick={() => this.redirect()}>Continue</button>

            <p> {this.props.job.id}</p>

            {/* I think this needs to be in the image */}
            {/* <Tags className="Tag" image={this.props.job.images[0]} /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Job);
