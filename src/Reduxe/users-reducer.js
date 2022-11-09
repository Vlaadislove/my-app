const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE ='CURRENT_PAGE'

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state= initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userId){
                        return{...u, follow: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u
                })

            }
        case SET_USERS:
            return {
                ...state,
                users: action.users

            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        default:
            return state
     }
}

export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})
export const setUsersAC = (users) => ({type:SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, count: totalCount})

export default usersReducer