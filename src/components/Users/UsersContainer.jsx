import React from "react";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Reduxe/users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";

class UsersClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        console.log(this.props)
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChange={this.onPageChange}
                   followed={this.props.followed}
                   unfollowed={this.props.unfollowed}

            />

        )
    }
}

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


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClass);

export default UsersContainer





