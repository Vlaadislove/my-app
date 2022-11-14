import React from "react";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  setIsFetchingAC
} from "../../Reduxe/users-reducer";
import { connect } from "react-redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true
        }
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true
        }
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChange={this.onPageChange}
            followed={this.props.followAC}
            unfollowed={this.props.unfollowAC}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

export default connect(mapStateToProps, {
  followAC,
  unfollowAC,
  setUsers: setUsersAC,
  setTotalUsersCount: setTotalUsersCountAC,
  setCurrentPage: setCurrentPageAC,
  setIsFetching: setIsFetchingAC
})(UsersContainer);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     followed: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollowed: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (user) => {
//       dispatch(setUsersAC(user));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching));
//     }
//   };
// };

// const follow = (userId) => ({ type: "FOLLOW", userId });
