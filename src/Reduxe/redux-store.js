import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducer = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer
})


let store = createStore(reducer);


export default store