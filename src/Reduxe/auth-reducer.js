import {authAPI} from "../api/api";
import massage from "../components/Dialogs/Message/Massage";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (email, userId, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data: { email, userId, login, isAuth  }
});

export const authThunk = () => {
  return (dispatch) => {
    authAPI.getAuth().then((response) => {
      if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data;
        dispatch(setAuthUserData(email, id, login, true));
      }
    });
  }
}

export const authLoginThunk = (email, password, setError) => {
  return (dispatch) => {
    authAPI.postLogin(email, password).then((response) => {
      // console.log(response.data.resultCode);
      // console.log(email, password);
      console.log("setLOGIN: ", response.data.messages[0]);
      if (response.data.resultCode === 0) {
        console.log("setLOGIN: ", response);
        dispatch(authThunk())
      }
      else {
        // let message = response.data.messages[0]
        setError('server', {message: response.data.messages[0]})
      }
    });
  };
};

export const deleteLoginThunk = () =>{
  return (dispatch) => {
    authAPI.deleteLogin().then(response => {
      if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer;
