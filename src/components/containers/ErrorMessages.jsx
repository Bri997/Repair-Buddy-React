import React, { Component } from "react";

class ErrorMessages extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>{this.props.err}</p>
      </React.Fragment>
    );
  }
}

export default ErrorMessages;

//connect to reudcer this.props.whatever
