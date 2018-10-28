import React, { Component } from "react";
import { connect } from "react-redux";

class ErrorMessages extends Component {
  render() {
    return (
      <React.Fragment>
        <p style={{ color: "red" }}>{this.props.err}</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  err: state.repair.err
});
export default connect(mapStateToProps)(ErrorMessages);

//connect to reudcer this.props.whatever
