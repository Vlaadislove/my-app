import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../Reduxe/profile-reducer";

const MyPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value
    // props.addPost();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPost(text);
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };

  const postElement = props.post.map((p) => (
    <Post text={p.text} like={p.like} />
  ));
  const valueNewPostText = props.newPostText;

  return (
    <div className={s.postsBlock}>
      <div>
        <h3> My post </h3>
      </div>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={valueNewPostText}
            ref={newPostElement}
            placeholder="Enter new post"
            cols="40"
            rows="4"
          />
        </div>
        <div>
          <button onClick={addPost}> Add Post </button>
        </div>
      </div>
      <div className={s.posts}>
        {postElement}
        {/*<Post text={postData[0].text} like={postData[0].like} />*/}
        {/*<Post text={postData[1].text} like = {postData[1].like} />*/}
      </div>
    </div>
  );
};

export default MyPost;
