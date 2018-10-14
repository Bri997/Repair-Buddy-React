import React, { Component } from "react";
import "./Tag.css";

import RemoveTag from "./RemoveTag";

class Tag extends Component {
  render() {
    // let remove = this.state.show ? <RemoveTag /> : "";
    return (
      <React.Fragment>
        <div
          className="Tag"
          // onClick={() => this.setState({ show: !this.state.show })}
        >
          <p>{this.props.name.tag}</p>
          {/* {remove} */}

          <RemoveTag imageId={this.props.imageId} tagId={this.props.name._id} />
        </div>
      </React.Fragment>
    );
  }
}

export default Tag;
// console.log(this.props);
