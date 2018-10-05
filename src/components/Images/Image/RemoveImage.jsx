import React, { Component } from "react";
import { connect } from "react-redux";

import { removeImageAction } from "../../../actions";

class RemoveImage extends Component {
  handleDelete(imageId) {
    let token = this.props.user.token;
    this.props.dispatch(removeImageAction(imageId, token));
  }
  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <button onClick={() => this.handleDelete(this.props)}>
          Remove Image
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  image: state.repair.image,
  user: state.repair.user
});
export default connect(mapStateToProps)(RemoveImage);
