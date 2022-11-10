import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <Profile />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect = (mapStateToProps, {})(ProfileContainer);
