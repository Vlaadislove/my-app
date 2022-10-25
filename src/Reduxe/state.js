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
      ]
    }
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  addPost() {
    let newPost = {
      id: 3,
      text: this._state.profilePage.newPostText,
      like: "0"
    };
    this._state.profilePage.post.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  onPostChange(post) {
    this._state.profilePage.newPostText = post;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
window.store = store;
