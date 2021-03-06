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
        width="55%"
        src={this.props.job.images[0].url}
        alt={this.props.description}
      />
    ) : null;
    return (
      <React.Fragment>
        <div className="UserDisplay">
          <div className="JobArea">
            {image}
            <h3>{this.props.job.jobName}</h3>
            <h5>Description</h5>
            <p>{this.props.job.description}</p>
            <h5>Vin Number:</h5> <p>{this.props.job.vinNumber}</p>
            <button className="JobContinue" onClick={() => this.redirect()}>
              Continue
            </button>
            <p> {this.props.job.id}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Job);
