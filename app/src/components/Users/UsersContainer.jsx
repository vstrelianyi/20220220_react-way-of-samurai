import {
  followAC,
  unFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC
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
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    followUser: ( value ) => {
      const action = followAC( value ) ;
      dispatch( action );
    },
    unFollowUser: ( value ) => {
      const action = unFollowAC( value ) ;
      dispatch( action );
    },
    setUsers: ( users ) => {
      const action = setUsersAC( users ) ;
      dispatch( action );
    },
    setCurrentPage: ( page ) => {
      const action = setCurrentPageAC( page ) ;
      dispatch( action );
    },
    setTotalUsersCount: ( totalUsers ) => {
      const action = setTotalUsersCountAC( totalUsers ) ;
      dispatch( action );
    },
  };
};

const UsersContainer = connect( mapStateToProps, mapDispatchToProps )( UsersListC );

export default UsersContainer;
