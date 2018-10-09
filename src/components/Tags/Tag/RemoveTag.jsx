import React, { Component } from "react";
import { connect } from "react-redux";

import { removeTagAction } from "../../../actions";

class RemoveTag extends Component {
  constructor(props) {
    super(props);
  }
  handleDelete() {
    let token = this.props.user.token;
    this.props.dispatch(
      removeTagAction(this.props.imageId, this.props.tagId, token)
    );
    console.log(this.props.imageId, this.props.tagId, "my token", token);
  }
  render() {
    console.log(this.props.job);
    return (
      <React.Fragment>
        <button onClick={() => this.handleDelete()}>X Remove</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.repair.user
});
export default connect(mapStateToProps)(RemoveTag);
