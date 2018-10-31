import React, { Component } from "react";
import "./Tag.css";

import RemoveTag from "./RemoveTag";

class Tag extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Tag">
          <p>{this.props.name.tag}</p>

          <RemoveTag
            imageId={this.props.imageId}
            tagId={this.props.name._id}
            key={this.props.name._id}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Tag;
