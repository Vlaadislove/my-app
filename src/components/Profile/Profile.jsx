import React from "react";
import MyPost from "./My posts/MyPost";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../Reduxe/store";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost
        post={props.profilePage.post}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
        // addPost={props.addPost}
        // onPostChange={props.onPostChange}
      />
    </div>
  );
};

export default Profile;
