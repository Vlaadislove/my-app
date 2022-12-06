import { authAPI } from "../api/api";

const SET_LOGIN = "SET_LOGIN";

const initialState = {
  email: null,
  password: null,
  isAuthLogin: false
};

const authLogin = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        ...action.data,
        isAuthLogin: true
      };
    default:
      return state;
  }
};

export const setAuthLogin = (email, password) => ({
  type: SET_LOGIN,
  data: { email, password }
});

export const authLoginThunk = (email, password) => {
  return (dispatch) => {
    authAPI.postLogin(email, password).then((response) => {
      // console.log(response.data.resultCode);
      // console.log(email, password);
      if (response.data.resultCode === 0) {
        console.log("setLOGIN: ", email, password);
        dispatch(setAuthLogin(email, password));
      }
    });
  };
};

// export const authThunk = () => {
//   return (dispatch) => {
//     authAPI.getAuth().then((response) => {
//       if (response.data.resultCode === 0) {
//         let { email, id, login } = response.data.data;
//         dispatch(setAuthUserData(email, id, login));
//       }
//     });
//   }
// }

export default authLogin;
