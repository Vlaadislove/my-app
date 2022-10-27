const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MASSAGE = 'ADD-MASSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MASSAGE-TEXT'

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        text: this._state.profilePage.newPostText,
        like: "0"
      };
      this._state.profilePage.post.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state)
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
      }
    else if (action.type === ADD_MASSAGE){
      let newMassage = {
        id: 5,
        massage: this._state.dialogPage.newMessageText
      }
      this._state.dialogPage.massages.push(newMassage)
      this._state.dialogPage.newMessageText = ''
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogPage.newMessageText = action.newText
      this._callSubscriber(this._state)
    }

  }


};




export const addPostActionCreator = () =>({type: ADD_POST})
export const onPostChangeActionCreator = (text) => {
  return {
    type:UPDATE_NEW_POST_TEXT, newText: text
  }
}

export const addMessageActionCreator = () =>({type: ADD_MASSAGE})
export const updateNewMessageChangeActionCreator = (text) =>({type: UPDATE_NEW_MESSAGE, newText: text})

export default store;
window.store = store;
