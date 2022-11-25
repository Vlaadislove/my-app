import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

const initialState = {
  post: [
    { id: 1, text: "Hi, im Vlad", like: " 11" },
    { id: 2, text: "I learn JS", like: " 12" }
  ],
  newPostText: "",
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        text: state.newPostText,
        like: "0"
      };
      let stateCopy = {...state}
      stateCopy.post = [...state.post]
      stateCopy.post.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state}
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};
export const setUsersProfileAC = (profile) =>({type:SET_USERS_PROFILE, profile})

export const profileThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
        .then((response) => {
          dispatch(setUsersProfileAC(response.data))
        });
  }
}

export default profileReducer;
