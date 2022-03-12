import {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading
} from '../../redux/users-reducer';

// COMPONENTS
// import UsersList from './UsersList/UsersList';
import UsersListC from './UsersList/UsersListC';

// REDUX
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};

const UsersContainer = connect( mapStateToProps, {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
} )( UsersListC );

export default UsersContainer;
