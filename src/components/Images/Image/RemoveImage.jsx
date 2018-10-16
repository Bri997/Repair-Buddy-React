import React, { Component } from "react";
import { connect } from "react-redux";

import { removeImageAction } from "../../../actions";

class RemoveImage extends Component {
  handleDelete() {
    let token = this.props.user.token;
    let imageId = this.props.imageId;
    let jobId = this.props.selectedJob._id;
    this.props.dispatch(removeImageAction(imageId, jobId, token));
    console.log(imageId);
  }
  render() {
    return (
      <React.Fragment>
        <button
          className="RemoveImageButton"
          onClick={() => this.handleDelete()}
        >
          Remove Image
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.repair.user,
  selectedJob: state.repair.selectedJob
});
export default connect(mapStateToProps)(RemoveImage);
