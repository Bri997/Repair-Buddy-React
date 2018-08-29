import React, { Component } from "react";
import Tag from "./Tag/Tag";
import "./Tags.css";

class Tags extends Component {
  render() {
    if (!this.props.tags) {
      return <React.Fragment />;
    }
    const Tags = this.props.tags.map((tag, index) => {
      return <Tag name={tag} key={index} />;
    });
    return <React.Fragment>{Tags}</React.Fragment>;
  }
}

export default Tags;
