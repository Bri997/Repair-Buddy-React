import React, { Component, Fragment } from "react";
import Tags from "../components/Tags/Tags";
import "./Image.css";

class Image extends Component {
  render() {
    return (
      <Fragment>
        <div className="Image">
          <img src={this.props.image.url} />
          <h3>{this.props.image.imageDescription}</h3>
          <button>Image Details</button>

          <Tags image={this.props.image} />
        </div>
      </Fragment>
    );
  }
}

export default Image;

//mkdir for images to add css and test
