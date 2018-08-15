import React, { Component } from "react";

class Image extends Component {
  state = {
    url: "https://picsum.photos/300/200"
  };
  render() {
    return (
      <div>
        <img src={this.state.url} />
      </div>
    );
  }
}

export default Image;

//mkdir for images to add css and test
