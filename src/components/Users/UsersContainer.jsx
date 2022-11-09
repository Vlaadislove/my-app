import React from "react";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Reduxe/users-reducer";
import {connect} from "react-redux";
import UsersC from "./UsersС";



const mapStateToProps =(state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC);

export default UsersContainer





