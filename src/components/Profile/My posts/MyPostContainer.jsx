import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../Reduxe/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

// const MyPostContainerd = (props) => {
//   // let newPostElement = React.createRef();
//
//   let addPost = () => {
//     // let text = newPostElement.current.value
//     // props.addPost();
//     props.store.dispatch(addPostActionCreator());
//   };
//
//   let onPostChange = (text) => {
//     // let text = newPostElement.current.value;
//     // props.updateNewPost(text);
//     let action = updateNewPostActionCreator(text);
//     props.store.dispatch(action);
//   };
//
//   let state = props.store.getState().profilePage;
//
//   return (
//     <div>
//       <MyPost
//         updateNewPost={onPostChange}
//         addPost={addPost}
//         post={state.post}
//         newPostText={state.newPostText}
//       />
//     </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    post: state.profilePage.post

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPost: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);

export default MyPostContainer;
