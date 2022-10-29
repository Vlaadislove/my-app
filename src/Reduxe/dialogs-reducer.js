const ADD_MASSAGE = "ADD-MASSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MASSAGE-TEXT";

const initialState = {
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
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MASSAGE:
      let newMassage = {
        id: 5,
        massage: state.newMessageText
      };
      state.massages.push(newMassage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MASSAGE });
export const updateNewMessageChangeActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default dialogsReducer;
