import React, { Component } from "react";

class RemoveTag extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ show: !this.setState.show })}>
          X Remove
        </button>
      </React.Fragment>
    );
  }
}

export default RemoveTag;
