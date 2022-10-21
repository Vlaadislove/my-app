let renderEntireTree = () => {};

let state = {
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 3,
    text: state.profilePage.newPostText,
    like: "0"
  };
  state.profilePage.post.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export const onPostChange = (post) => {
  state.profilePage.newPostText = post;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;
