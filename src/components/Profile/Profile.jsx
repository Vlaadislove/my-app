import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./My posts/MyPostContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer
      // post={props.profilePage.post}
      // newPostText={props.profilePage.newPostText}
      // dispatch={props.dispatch}
      // addPost={props.addPost}
      // onPostChange={props.onPostChange}
      />
    </div>
  );
};

export default Profile;
