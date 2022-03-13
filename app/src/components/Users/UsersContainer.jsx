import {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading
} from '../../redux/users-reducer';

// COMPONENTS
import UsersListClass from './UsersList/UsersListClass';

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
} )( UsersListClass );

export default UsersContainer;
