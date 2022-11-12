import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {setUsersProfileAC} from "../../Reduxe/profile-reducer";
import axios from "axios";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
      let userId = this.props.router.userId
      if(!userId){
          userId=2
      }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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
