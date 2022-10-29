import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../Reduxe/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
  // let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value
    // props.addPost();
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    // let text = newPostElement.current.value;
    // props.updateNewPost(text);
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  };

  let state = props.store.getState().profilePage;

  return (
    <div>
      <MyPost
        updateNewPost={onPostChange}
        addPost={addPost}
        post={state.post}
        newPostText={state.newPostText}
      />
    </div>
  );
};

export default MyPostContainer;
