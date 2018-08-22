import React, { Component } from "react";
import { connect } from "react-redux";

import Image from "./Image";

class Images extends Component {
  state = {};
  render() {
    const images = this.props.images.map((image, index) => {
      return <Image key={index} image={image} />;
    });
    return <div>{images} </div>;
  }
}
const mapStateToProps = state => ({
  images: state.reducer.images
});
export default connect(mapStateToProps)(Images);
