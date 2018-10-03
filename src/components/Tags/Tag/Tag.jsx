import React, { Component } from "react";
import "./Tag.css";

import RemoveTag from "./RemoveTag";

class Tag extends Component {
  state = {
    show: false
  };

  render() {
    let remove = this.state.show ? <RemoveTag /> : "";

    return (
      <React.Fragment>
        <div
          className="Tag"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          <p>{this.props.name.tag}</p>
          {remove}
        </div>
      </React.Fragment>
    );
  }
}

export default Tag;
