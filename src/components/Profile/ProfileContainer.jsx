import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  profileThunk,
  setUsersProfileAC,
  getStatusThunk,
  updateStatusThunk
} from "../../Reduxe/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.userId;
    if (!userId) {
      userId = 26501;
    }

    this.props.profileThunk(userId);
    this.props.getStatusThunk(userId);
    // profileAPI.getStatus(userId);
    // profileAPI.getProfile(userId)
    //   .then((response) => {
    //         this.props.setUsersProfileAC(response.data);
    //   });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

function WithRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams();
    return <Component {...props} router={params} />;
  }
  return ComponentWithRouterProp;
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

export default compose(
  connect(mapStateToProps, {
    setUsersProfileAC,
    profileThunk,
    getStatusThunk,
    updateStatusThunk
  }),
  WithRouter,
  withAuthRedirect
)(ProfileContainer);

// let WithUrlDataContainerComponent = WithRouter(AuthRedirectComponent)

// export default connect (mapStateToProps, {setUsersProfileAC,profileThunk})(WithUrlDataContainerComponent);
