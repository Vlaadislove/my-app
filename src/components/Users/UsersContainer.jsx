import React from "react";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  setIsFetchingAC, toggleFollowingProgressAC
} from "../../Reduxe/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetchingAC(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      console.log('response:', data)
        this.props.setIsFetchingAC(false);
        this.props.setUsersAC(data.items);
        this.props.setTotalUsersCountAC(data.totalCount);
      });
  }
  onPageChange = (pageNumber) => {
    debugger
    this.props.setCurrentPageAC(pageNumber);
    this.props.setIsFetchingAC(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
        this.props.setIsFetchingAC(false);
        this.props.setUsersAC(response.data.items);
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
            toggleFollowingProgress={this.props.toggleFollowingProgressAC}
            followingInProgress={this.props.followingInProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  followAC,
  unfollowAC,
  setUsersAC,
  setTotalUsersCountAC,
  setCurrentPageAC,
  setIsFetchingAC,
  toggleFollowingProgressAC
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
