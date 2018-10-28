import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAuthToken } from "../../actions";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  logOut() {
    this.props.dispatch(removeAuthToken());
    localStorage.removeItem("x-auth-token");
  }

  render() {
    return (
      <React.Fragment>
        <div onLoad={this.logOut()} />
        <Redirect to="/" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.repair.user
});

export default connect(mapStateToProps)(Logout);
