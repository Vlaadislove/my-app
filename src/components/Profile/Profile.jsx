import React from "react";
import MyPost from "./My posts/MyPost";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost
        post={props.profilePage.post}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        onPostChange={props.onPostChange}
      />
    </div>
  );
};

export default Profile;
