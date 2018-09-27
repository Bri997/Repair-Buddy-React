import React, { Component } from "react";

class ErrorMessages extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>{this.state.err}</p>
      </React.Fragment>
    );
  }
}

export default ErrorMessages;

//connect to reudcer this.props.whatever
