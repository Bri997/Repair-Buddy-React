import React, { Component } from "react";
import "./Tag.css";

class Tag extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Tag">
          <p>{this.props.name}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Tag;
