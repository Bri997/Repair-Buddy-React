import React, { Component } from "react";
import Tag from "./Tag/Tag";

class Tags extends Component {
  doSomeThing(props) {
    console.log("Hi");
  }
  state = {};
  render() {
    return (
      <React.Fragment>
        <Tag onClick={this.props.doSomeThing} />
      </React.Fragment>
    );
  }
}

export default Tags;
