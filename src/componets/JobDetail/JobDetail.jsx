import React, { Component } from "react";

class JobDetail extends Component {
  state = {};
  render() {
    const jobNumber = this.props.match.params.id;
    return <div>Job Detail {jobNumber}</div>;
    //comp willmount filter props:id then populate
  }
}

export default JobDetail;
