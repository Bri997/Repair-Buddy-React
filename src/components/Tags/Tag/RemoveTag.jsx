import React, { Component } from "react";
import { connect } from "react-redux";

import { removeTagAction } from "../../../actions";

class RemoveTag extends Component {
  constructor(props) {
    super(props);
  }
  handleDelete() {
    let token = this.props.user.token;
    let jobId = this.props.selectedJob._id;
    this.props.dispatch(
      removeTagAction(this.props.imageId, this.props.tagId, jobId, token)
    );
    console.log(jobId);
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.handleDelete()}>X Remove</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.repair.user,
  selectedJob: state.repair.selectedJob
});
export default connect(mapStateToProps)(RemoveTag);
