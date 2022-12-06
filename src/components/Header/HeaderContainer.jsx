import React from "react";
import { authThunk } from "../../Reduxe/auth-reducer";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authThunk();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { authThunk })(HeaderContainer);
