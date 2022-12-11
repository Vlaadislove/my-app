import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import {authLoginThunk} from "../../Reduxe/auth-reducer";

class LoginContainer extends React.Component {
  componentDidMount() {
    // console.log('LOGIN', this.props);
  }

  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { authLoginThunk })(LoginContainer);
