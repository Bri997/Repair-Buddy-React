import React, { Component } from "react";

import Image from "./Image";

class Images extends Component {
  render() {
    const images = this.props.images.map((image, index) => {
      return <Image key={index} image={image} />;
    });
    return (
      <React.Fragment>
        <div>{images} </div>
      </React.Fragment>
    );
  }
}

export default Images;
