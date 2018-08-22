import React, { Component, Fragment } from "react";

class Image extends Component {
  state = {
    // url: "https://picsum.photos/300/200?random"
  };
  render() {
    return (
      <Fragment>
        <img src={this.props.image.url} />
        <h3>{this.props.image.imageDescription}</h3>
      </Fragment>
    );
  }
}

export default Image;

//mkdir for images to add css and test
