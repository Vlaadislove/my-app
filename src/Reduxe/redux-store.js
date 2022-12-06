import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore
} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import authLogin from "./login-reducer";

let reducer = combineReducers({
  dialogPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  login: authLogin
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
