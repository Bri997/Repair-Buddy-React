import React, { Component } from "react";
import "./Tag.css";

class Tag extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.name}</p>
      </React.Fragment>
    );
  }
}

export default Tag;
