const ADD_MASSAGE = 'ADD-MASSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT'

const dialogsReducer =(state, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newMassage = {
                id: 5,
                massage: state.newMessageText
            }
            state.massages.push(newMassage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () =>({type: ADD_MASSAGE})
export const updateNewMessageChangeActionCreator = (text) =>({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default dialogsReducer
