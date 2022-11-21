import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {setUsersProfileAC} from "../../Reduxe/profile-reducer";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
      let userId = this.props.router.userId
      if(!userId){
          userId=2
      }
      profileAPI.getProfile(userId)
        .then((response) => {
              this.props.setUsersProfileAC(response.data);
        });
  }

  render() {
      return <Profile {...this.props} profile={this.props.profile} />;
  }
}

function WithRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        return (
            <Component
                {...props}
                router={params}
            />
        );
    }

    return ComponentWithRouterProp;
}


const mapStateToProps = (state) => {
  return {profile: state.profilePage.profile};
};

export default connect (mapStateToProps, {setUsersProfileAC})(WithRouter(ProfileContainer));
