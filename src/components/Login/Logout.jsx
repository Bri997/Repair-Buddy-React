import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAuthToken } from "../../actions";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  logOut() {
    this.props.dispatch(removeAuthToken());
    localStorage.removeItem("x-auth-token");
  }
  componentWillMount() {
    this.logOut();
  }
  render() {
    return (
      <React.Fragment>
        <Redirect to="/" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.repair.user
});

export default connect(mapStateToProps)(Logout);
