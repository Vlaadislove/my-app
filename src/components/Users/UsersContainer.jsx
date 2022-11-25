import React from "react";
import {getUsersThunk, unfollowThunk, followThunk
} from "../../Reduxe/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {

    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)


  }
  onPageChange = (pageNumber) => {

    this.props.getUsersThunk(pageNumber, this.props.pageSize)

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
            followedThunk={this.props.followThunk}
            unfollowedThunk={this.props.unfollowThunk}
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

export default withAuthRedirect(connect(mapStateToProps, {
 getUsersThunk, unfollowThunk, followThunk
})(UsersContainer));

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
