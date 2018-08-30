import React, { Component } from "react";

class TagCreator extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p onClick={this.props.addTag}>+ Create Tag</p>
      </React.Fragment>
    );
  }
}

export default TagCreator;
