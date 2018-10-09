import React, { Component } from "react";
import { connect } from "react-redux";

class ErrorMessages extends Component {
  state = {
    err: ""
  };
  render() {
    return (
      <React.Fragment>
        <p>{this.state.err}</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  err: state.repair.err
});
export default connect(mapStateToProps)(ErrorMessages);

//connect to reudcer this.props.whatever
