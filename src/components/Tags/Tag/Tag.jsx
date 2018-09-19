import React, { Component } from "react";
import "./Tag.css";

import RemoveTag from "./RemoveTag";

class Tag extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Tag">
          <p>{this.props.name}</p>
          <RemoveTag />
        </div>
      </React.Fragment>
    );
  }
}

export default Tag;
