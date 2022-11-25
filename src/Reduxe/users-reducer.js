import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount});
export const setIsFetchingAC = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const toggleFollowingProgressAC = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
});

export const getUsersThunk = (currentPage,pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(setIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetchingAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersCountAC(data.totalCount));
    });
  }
}

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    usersAPI.follow(userId).then((response) => {
      if(response.data.resultCode === 0){
        dispatch(followAC(userId))
        dispatch(toggleFollowingProgressAC(false, userId))
      }
    });
  }
}

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    usersAPI.unfollow(userId).then((response) => {
      if(response.data.resultCode === 0){
        dispatch(unfollowAC(userId))
        dispatch(toggleFollowingProgressAC(false, userId))
      }
    });
  }
}



export default usersReducer;
