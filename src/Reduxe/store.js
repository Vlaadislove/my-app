import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MASSAGE = 'ADD-MASSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT'

let store = {
  _state: {
    profilePage: {
      post: [
        { id: 1, text: "Hi, im Vlad", like: " 11" },
        { id: 2, text: "I learn JS", like: " 12" }
      ],
      newPostText: ""
    },

    dialogPage: {
      dialogs: [
        { id: 1, name: "Vlad" },
        { id: 2, name: "MakVa" },
        { id: 3, name: "Mark" },
        { id: 4, name: "StepaPopa" }
      ],
      massages: [
        { id: 1, massage: "Hi" },
        { id: 2, massage: "How are you?" },
        { id: 3, massage: "It`s fine" },
        { id: 4, massage: "Yo" }
      ],
      newMessageText: ''
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   let newPost = {
  //     id: 3,
  //     text: this._state.profilePage.newPostText,
  //     like: "0"
  //   };
  //   this._state.profilePage.post.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // onPostChange(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {  // { type: 'action'}
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

      this._callSubscriber(this._state)
    console.log(this._state.dialogPage)
    }

  }








export default store;
window.store = store;
