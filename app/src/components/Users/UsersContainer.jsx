import {
  followAC,
  unFollowAC,
  setUsersAC
} from '../../redux/users-reducer';
import UsersList from './UsersList/UsersList';
import UsersListC from './UsersList/UsersListC';

// REDUX
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
  return {
    users: state.usersPage.users,
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
  };
};

const UsersContainer = connect( mapStateToProps, mapDispatchToProps )( UsersListC );

export default UsersContainer;
