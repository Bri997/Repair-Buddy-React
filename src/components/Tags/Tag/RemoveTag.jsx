import React, { Component } from "react";
import { connect } from "react-redux";

import { removeTagAction } from "../../../actions";

class RemoveTag extends Component {
  handleDelete() {
    let token = this.props.user.token;
    let jobId = this.props.selectedJob._id;
    this.props.dispatch(
      removeTagAction(this.props.imageId, this.props.tagId, jobId, token)
    );
  }
  render() {
    return (
      <React.Fragment>
        <button className="RemoveTagButton" onClick={() => this.handleDelete()}>
          X Remove
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedJob: state.repair.selectedJob,
  user: state.repair.user
});
export default connect(mapStateToProps)(RemoveTag);
