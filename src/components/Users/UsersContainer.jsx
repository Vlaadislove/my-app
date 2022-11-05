import React from "react";
import {followAC, setUsersAC, unfollowAC} from "../../Reduxe/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";


const mapStateToProps =(state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followed: (userId) =>{
            dispatch(followAC(userId))
        },

        unfollowed: (userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (user) => {
            dispatch(setUsersAC(user))
        }
    }
}




const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer





