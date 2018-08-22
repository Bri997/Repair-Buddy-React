import React, { Component } from "react";

class TagCreator extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.addTag}>Create Tag</button>
      </React.Fragment>
    );
  }
}

export default TagCreator;
