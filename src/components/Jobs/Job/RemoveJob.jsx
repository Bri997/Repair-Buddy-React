import React, { Component } from "react";
import { connect } from "react-redux";

import { removeJobAction } from "../../../actions";

class RemoveJob extends Component {
  handleDelete(jobId) {
    let token = this.props.user.token;
    this.props.dispatch(removeJobAction(jobId, token));
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.handleDelete(this.props.jobId)}>
          Remove Job
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.repair.user.jobs,
  user: state.repair.user
});
export default connect(mapStateToProps)(RemoveJob);
